import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export function ServiceCard({ title, description, imageSrc, imageAlt, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-display text-xl mb-1">{title}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
