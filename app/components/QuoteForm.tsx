"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { services } from "../lib/services";

interface QuoteFormProps {
  variant?: "inline" | "modal";
  preselectedService?: string;
  heading?: string;
  onSubmitSuccess?: () => void;
}

export function QuoteForm({
  variant = "inline",
  preselectedService,
  heading = "Get Your Free Quote",
  onSubmitSuccess,
}: QuoteFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [sitePhotoNames, setSitePhotoNames] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState(preselectedService || "");

  // Step 1 fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Refs for abandonment tracking (avoids stale closures in event listeners)
  const leadDataRef = useRef({ name: "", email: "", phone: "" });
  const isSubmittedRef = useRef(false);
  const isPartialSentRef = useRef(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sitePhotoRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Sync state to refs
  useEffect(() => {
    leadDataRef.current = { name, email, phone };
  }, [name, email, phone]);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const sendPartialLead = () => {
    // Only send if we have at least an email or phone, haven't already sent, and haven't finished full form
    if (isSubmittedRef.current || isPartialSentRef.current) return;
    if (!leadDataRef.current.email && !leadDataRef.current.phone) return;

    isPartialSentRef.current = true;
    const partialData = new FormData();
    partialData.set("submission_type", "partial");
    partialData.set("name", leadDataRef.current.name);
    partialData.set("email", leadDataRef.current.email);
    partialData.set("phone", leadDataRef.current.phone);

    // use keepalive: true to ensure the request completes even if the page is closing
    fetch("/api/quote", {
      method: "POST",
      body: partialData,
      keepalive: true,
    }).catch(() => {
      // Sliently fail for background capture
    });
  };

  // Abandonment & Exit Listeners
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendPartialLead();
      }
    };

    const handleBeforeUnload = () => {
      sendPartialLead();
    };

    // Idle timer: If they entered data but didn't finish within 3 minutes, fire the lead anyway
    const idleTimer = setTimeout(() => {
      sendPartialLead();
    }, 180000); // 3 minutes

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(idleTimer);
    };
  }, []);

  function handleStep1(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep(2);
    // Note: Immediate capture removed. We now rely on the exit/idle triggers.
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    isSubmittedRef.current = true; // Block any further partial leads

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);

    try {
      await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
    } catch {
      // Continue even on fetch error so the user isn't stuck
    } finally {
      setSubmitting(false);
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      router.push("/thank-you");
    }
  }

  function getTotalFileSize() {
    let total = 0;
    const designFiles = fileInputRef.current?.files;
    if (designFiles) {
      for (let i = 0; i < designFiles.length; i++) total += designFiles[i].size;
    }
    const siteFiles = sitePhotoRef.current?.files;
    if (siteFiles) {
      for (let i = 0; i < siteFiles.length; i++) total += siteFiles[i].size;
    }
    return total;
  }

  function handleFileChange() {
    const files = fileInputRef.current?.files;
    if (!files) return;
    const names: string[] = [];
    for (let i = 0; i < files.length; i++) names.push(files[i].name);
    if (getTotalFileSize() > 10 * 1024 * 1024) {
      alert("Total file size exceeds 10MB limit (max 10MB total).");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setFileNames([]);
      return;
    }
    setFileNames(names.slice(0, 5));
  }

  function handleSitePhotoChange() {
    const files = sitePhotoRef.current?.files;
    if (!files) return;
    const names: string[] = [];
    for (let i = 0; i < files.length; i++) names.push(files[i].name);
    if (getTotalFileSize() > 10 * 1024 * 1024) {
      alert("Total file size exceeds 10MB limit (max 10MB total).");
      if (sitePhotoRef.current) sitePhotoRef.current.value = "";
      setSitePhotoNames([]);
      return;
    }
    setSitePhotoNames(names.slice(0, 5));
  }

  const inputClass =
    "w-full px-4 py-3 border border-surface-light rounded-card text-base focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all bg-white";

  return (
    <div>
      {heading && (
        <h2 className="font-display text-display-sm text-text-primary mb-2 text-center">
          {heading}
        </h2>
      )}

      <div className="flex items-center justify-center gap-2 mb-6">
        <div className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold transition-colors ${step >= 1 ? "bg-brand-red text-white" : "bg-surface-light text-text-muted"}`}>
          1
        </div>
        <div className={`h-0.5 w-10 transition-colors ${step >= 2 ? "bg-brand-red" : "bg-surface-light"}`} />
        <div className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold transition-colors ${step >= 2 ? "bg-brand-red text-white" : "bg-surface-light text-text-muted"}`}>
          2
        </div>
      </div>

      {step === 1 && (
        <form onSubmit={handleStep1} className="space-y-4">
          <p className="text-text-secondary text-sm text-center mb-4">
            Step 1 of 2 — Let&apos;s start with your contact info
          </p>
          <input
            type="text"
            required
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <input
            type="email"
            required
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
          <button type="submit" className="btn-primary w-full">
            Next: Project Details →
          </button>
          <p className="text-text-muted text-xs text-center">
            No spam, ever. We respond within 24 hours.
          </p>
        </form>
      )}

      {step === 2 && (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <p className="text-text-secondary text-sm text-center mb-4">
            Step 2 of 2 — Tell us about your project
          </p>

          <input
            type="text"
            name="business_name"
            placeholder="Business Name"
            className={inputClass}
          />
          <input
            type="text"
            name="business_address"
            placeholder="Business Address"
            className={inputClass}
          />
          <select
            name="sign_type"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={`${inputClass} text-text-primary`}
          >
            <option value="">Select Sign Type</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your project..."
            className={`${inputClass} resize-none`}
          />

          <div className="border-2 border-dashed border-surface-light rounded-card p-4 text-center hover:border-brand-red/30 transition-colors">
            <label className="cursor-pointer block">
              <div className="flex flex-col items-center gap-2">
                <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-text-secondary">Upload Design (Optional)</span>
                <span className="text-xs text-text-muted">Images or PDF, max 10MB total</span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                name="attachment"
                multiple
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {fileNames.length > 0 && (
              <div className="mt-3 space-y-1">
                {fileNames.map((name, i) => (
                  <p key={i} className="text-xs text-text-secondary truncate">{name}</p>
                ))}
              </div>
            )}
          </div>

          <div className="border-2 border-dashed border-surface-light rounded-card p-4 text-center hover:border-brand-red/30 transition-colors">
            <label className="cursor-pointer block">
              <div className="flex flex-col items-center gap-2">
                <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-semibold text-text-secondary">Upload Site Photo (Optional)</span>
                <span className="text-xs text-text-muted">Photo of installation location, max 10MB total</span>
              </div>
              <input
                ref={sitePhotoRef}
                type="file"
                name="attachment"
                multiple
                accept="image/*"
                onChange={handleSitePhotoChange}
                className="hidden"
              />
            </label>
            {sitePhotoNames.length > 0 && (
              <div className="mt-3 space-y-1">
                {sitePhotoNames.map((name, i) => (
                  <p key={i} className="text-xs text-text-secondary truncate">{name}</p>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-outline flex-none px-5"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary flex-1 disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Get My Free Sign Quote"}
            </button>
          </div>
          <p className="text-text-muted text-xs text-center">We respond within 24 hours. Your info is never shared.</p>
        </form>
      )}
    </div>
  );
}
