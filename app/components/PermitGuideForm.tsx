"use client";

import { useState, FormEvent } from "react";

export function PermitGuideForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/permit-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to submit. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-green/20 rounded-full mb-4">
          <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-white mb-2">Guide Sent!</h3>
        <p className="text-white/70 text-lg">
          Check your inbox for the full GTA permit reference guide. If you don&apos;t see it within a few minutes, check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your business email"
        className="px-6 py-4 rounded-button text-text-primary flex-1 focus:outline-none focus:ring-2 focus:ring-brand-red"
        required
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-red text-white font-bold py-4 px-8 rounded-button hover:bg-brand-red-light transition-colors shadow-cta whitespace-nowrap disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Me the Guide"}
      </button>
      {status === "error" && (
        <p className="text-red-300 text-sm mt-2 sm:mt-0 sm:self-center">{errorMsg}</p>
      )}
    </form>
  );
}
