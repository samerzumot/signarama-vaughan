"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportConversion, PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";

export default function ThankYouPage() {
    useEffect(() => {
        reportConversion();
    }, []);

    return (
        <main>
            <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
                <div className="container-content text-center">
                    <div className="max-w-xl mx-auto">
                        {/* Success Icon */}
                        <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="font-display text-display-lg text-text-primary mb-4">
                            Thank You!
                        </h1>
                        <p className="text-text-secondary text-lg mb-2">
                            Your quote request has been received. Our team will get back to you within 24 hours.
                        </p>
                        <p className="text-text-muted mb-8">
                            Need it sooner? Call us directly at{" "}
                            <a href={PHONE_HREF} className="text-brand-red font-semibold hover:underline">
                                {PHONE_NUMBER}
                            </a>
                        </p>

                        <Link
                            href="/"
                            className="btn-primary inline-block"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
