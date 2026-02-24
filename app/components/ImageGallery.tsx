"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "../lib/services";

export function ImageGallery({ images, serviceName }: { images: GalleryImage[]; serviceName: string }) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card mb-3 bg-surface-light">
        <Image
          src={images[selected].src}
          alt={images[selected].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={selected === 0}
        />
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-1 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-md overflow-hidden transition-all ${
                i === selected
                  ? "ring-2 ring-brand-red opacity-100 scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      <p className="text-text-muted text-xs mt-2 text-center">
        {images.length} {serviceName.toLowerCase()} projects completed
      </p>
    </div>
  );
}
