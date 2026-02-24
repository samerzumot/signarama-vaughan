import Image from "next/image";

const logos = [
  { src: "/images/clients/york-u.png", alt: "York University" },
  { src: "/images/clients/yrt.png", alt: "York Region Transit" },
  { src: "/images/clients/telus.png", alt: "Telus" },
  { src: "/images/clients/ppg.png", alt: "PPG" },
  { src: "/images/clients/vaughan.png", alt: "City of Vaughan" },
  { src: "/images/clients/uber.png", alt: "Uber" },
  { src: "/images/clients/york-region.png", alt: "York Region" },
  { src: "/images/clients/humber-college.png", alt: "Humber College" },
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
              <div className="relative w-28 h-16">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
