"use client";

import { useState, useRef, FormEvent } from "react";
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
  const [submitting, setSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [sitePhotoNames, setSitePhotoNames] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sitePhotoRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // FormSubmit expects files under the name "attachment"
    // The file inputs already use name="attachment" so they are included in formData automatically

    try {
      await fetch("https://formsubmit.co/ajax/info@signarama-vaughan.com", {
        method: "POST",
        body: formData,
      });
    } catch {
      // Still redirect on error so the user isn't stuck
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
      alert("Total file size exceeds 10MB limit. Please reduce file size or quantity.");
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
      alert("Total file size exceeds 10MB limit. Please reduce file size or quantity.");
      if (sitePhotoRef.current) sitePhotoRef.current.value = "";
      setSitePhotoNames([]);
      return;
    }
    setSitePhotoNames(names.slice(0, 5));
  }

  const inputClass = "w-full px-4 py-3 border border-surface-light rounded-card text-base focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition-all bg-white";

  return (
    <div>
      {heading && <h2 className="font-display text-display-sm text-text-primary mb-6 text-center">{heading}</h2>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="_subject" value="New Quote Request - Signarama Vaughan" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" style={{ display: "none" }} />

        <input type="text" name="name" required placeholder="Your Name *" className={inputClass} />
        <input type="tel" name="phone" required placeholder="Phone Number *" className={inputClass} />
        <input type="email" name="email" required placeholder="Email Address *" className={inputClass} />
        <input type="text" name="business_name" placeholder="Business Name" className={inputClass} />
        <input type="text" name="business_address" placeholder="Business Address" className={inputClass} />
        <select
          name="sign_type"
          defaultValue={preselectedService || ""}
          className={`${inputClass} text-text-primary`}
        >
          <option value="">Select Sign Type</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />

        {/* Design Upload */}
        <div className="border-2 border-dashed border-surface-light rounded-card p-4 text-center hover:border-brand-red/30 transition-colors">
          <label className="cursor-pointer block">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-text-secondary">
                Upload Design (Optional)
              </span>
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

        {/* Site Photo Upload */}
        <div className="border-2 border-dashed border-surface-light rounded-card p-4 text-center hover:border-brand-red/30 transition-colors">
          <label className="cursor-pointer block">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-semibold text-text-secondary">
                Upload Site Photo (Optional)
              </span>
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

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Get My Free Quote"}
        </button>
        <p className="text-text-muted text-xs text-center">We respond within 24 hours. Your info is never shared.</p>
      </form>
    </div>
  );
}
