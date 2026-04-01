import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";
import { PhoneLink } from "./PhoneLink";

const serviceLinks = [
  { label: "Channel Letters", href: "/services/channel-letters" },
  { label: "Storefront Signs", href: "/services/storefront-signs" },
  { label: "Vehicle Wraps", href: "/services/vehicle-wraps" },
  { label: "Illuminated Signs", href: "/services/illuminated-signs" },
  { label: "Pylon Signs", href: "/services/pylon-signs" },
  { label: "Indoor Signs", href: "/services/indoor-signs" },
  { label: "Window Graphics", href: "/services/window-graphics" },
  { label: "3D Signs & Lettering", href: "/services/3d-signs-lettering" },
  { label: "Construction Signs", href: "/services/construction-signs" },
  { label: "Digital Signs", href: "/services/digital-signs" },
  { label: "Awning Graphics", href: "/services/awning-graphics" },
  { label: "LED Backlit Signs", href: "/services/led-backlit-signs" },
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
              <li><Link href="/sustainability" className="text-white/60 hover:text-white text-sm transition-colors">Sustainability &amp; Standards</Link></li>
              <li><Link href="/sign-permits" className="text-brand-red font-semibold hover:text-brand-red-light text-sm transition-colors">Sign Permit Guides</Link></li>
              <li className="grid grid-cols-2 gap-x-2 gap-y-1 pl-2">
                <Link href="/sign-permits/toronto" className="text-white/40 hover:text-white text-xs transition-colors">Toronto</Link>
                <Link href="/sign-permits/vaughan" className="text-white/40 hover:text-white text-xs transition-colors">Vaughan</Link>
                <Link href="/sign-permits/mississauga" className="text-white/40 hover:text-white text-xs transition-colors">Mississauga</Link>
                <Link href="/sign-permits/brampton" className="text-white/40 hover:text-white text-xs transition-colors">Brampton</Link>
                <Link href="/sign-permits/markham" className="text-white/40 hover:text-white text-xs transition-colors">Markham</Link>
                <Link href="/sign-permits/richmond-hill" className="text-white/40 hover:text-white text-xs transition-colors">Richmond Hill</Link>
                <Link href="/sign-permits/oakville" className="text-white/40 hover:text-white text-xs transition-colors">Oakville</Link>
                <Link href="/sign-permits/burlington" className="text-white/40 hover:text-white text-xs transition-colors">Burlington</Link>
                <Link href="/sign-permits/ajax" className="text-white/40 hover:text-white text-xs transition-colors">Ajax</Link>
                <Link href="/sign-permits/pickering" className="text-white/40 hover:text-white text-xs transition-colors">Pickering</Link>
              </li>
              <li>
                <a href="https://signarama.ca/on-vaughan" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                  Corporate Profile
                </a>
              </li>
              <li>
                <a href="https://signs.org" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                  ISA Member
                </a>
              </li>
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
              <PhoneLink className="flex items-center gap-2 text-white font-bold text-lg hover:text-brand-red transition-colors" />
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
          <span className="text-white/60 text-sm font-bold">Sign Fabrication &amp; Installation Services</span>
          <p className="text-white/40 text-sm">Proudly serving the Greater Toronto Area.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/30 text-xs">
            <p>&copy; {new Date().getFullYear()} Sign Fabrication Services. All Rights Reserved.</p>
            <div className="flex gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-2 md:pt-0 md:pl-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
