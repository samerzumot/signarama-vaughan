import Image from "next/image";

const logos = [
  { src: "/images/clients/york-u.png", alt: "York University", href: "https://www.yorku.ca/" },
  { src: "/images/clients/yrt.png", alt: "York Region Transit", href: "https://www.yrt.ca/" },
  { src: "/images/clients/telus.png", alt: "Telus", href: "https://www.telus.com/en" },
  { src: "/images/clients/ppg.png", alt: "PPG", href: "https://www.ppg.com/" },
  { src: "/images/clients/vaughan.png", alt: "City of Vaughan", href: "https://www.vaughan.ca/" },
  { src: "/images/clients/uber.png", alt: "Uber", href: "https://www.uber.com/ca/en/" },
  { src: "/images/clients/york-region.png", alt: "York Region", href: "https://www.york.ca/" },
  { src: "/images/clients/humber-college.png", alt: "Humber College", href: "https://humber.ca/" },
];

const LOGO_W = 180;
const LOGO_COUNT = logos.length;

export function ClientLogos({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-white py-10 overflow-hidden border-y border-surface-light">
      {heading && (
        <p className="text-center text-text-muted text-xs uppercase tracking-[0.2em] font-semibold mb-6">
          Trusted by leading organizations
        </p>
      )}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-marquee"
          style={{ width: `${LOGO_W * LOGO_COUNT * 2}px` }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-6"
              style={{ width: `${LOGO_W}px` }}
            >
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer" className="relative w-28 h-16 block hover:opacity-80 transition-opacity">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </a>
              ) : (
                <div className="relative w-28 h-16">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
