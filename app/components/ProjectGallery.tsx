import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export function ProjectGallery({ photos, columns = 3 }: { photos: Photo[]; columns?: 2 | 3 | 4 }) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {photos.map((photo, i) => (
        <div key={i} className="group relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={`(max-width: 768px) 100vw, ${Math.floor(100 / columns)}vw`}
          />
          {photo.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm">{photo.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
