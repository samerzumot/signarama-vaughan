"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "../lib/services";

export function ImageGallery({ images, serviceName }: { images: GalleryImage[]; serviceName: string }) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) return null;

  const handlePrev = () => {
    setSelected((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card mb-3 bg-surface-light group">
        <Image
          src={images[selected].src}
          alt={images[selected].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={selected === 0}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-1 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-md overflow-hidden transition-all ${i === selected
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

    </div>
  );
}
