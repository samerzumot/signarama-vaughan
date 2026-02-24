import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";

const serviceLinks = [
  { label: "Channel Letters", href: "/services/channel-letters" },
  { label: "Storefront Signs", href: "/services/storefront-signs" },
  { label: "Vehicle Wraps", href: "/services/vehicle-wraps" },
  { label: "Illuminated Signs", href: "/services/illuminated-signs" },
  { label: "Pylon Signs", href: "/services/pylon-signs" },
  { label: "Indoor Signs", href: "/services/indoor-signs" },
  { label: "Window Graphics", href: "/services/window-graphics" },
];

export function Footer() {
  return (
    <footer className="bg-surface-charcoal text-white">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Services */}
          <div>
            <h3 className="font-display text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-brand-red hover:text-brand-red-light text-sm font-semibold transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/SignaramaVaughan" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://www.instagram.com/signaramavaughan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://maps.app.goo.gl/EZ5P5ZyPXogjFGTT9" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-bold text-lg hover:text-brand-red transition-colors">
                {PHONE_NUMBER}
              </a>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors block">
                Request a Quote →
              </Link>
              <address className="text-white/60 not-italic leading-relaxed">
                7250 Keele St, Unit 286<br />
                Vaughan, ON L4K 1Z8<br />
                Canada
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/images/logo.webp" alt="Signarama Vaughan" width={140} height={40} className="h-8 w-auto brightness-0 invert opacity-60" />
          <p className="text-white/40 text-sm">Proudly serving the Greater Toronto Area.</p>
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Signarama Vaughan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
