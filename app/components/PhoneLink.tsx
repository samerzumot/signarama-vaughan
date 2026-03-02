"use client";

import { PHONE_NUMBER, PHONE_HREF, reportConversion } from "../lib/gtag";

interface PhoneLinkProps {
    className?: string;
    children?: React.ReactNode;
}

export function PhoneLink({ className, children }: PhoneLinkProps) {
    return (
        <a
            href={PHONE_HREF}
            onClick={(e) => {
                reportConversion();
            }}
            className={className}
        >
            {children || PHONE_NUMBER}
        </a>
    );
}
