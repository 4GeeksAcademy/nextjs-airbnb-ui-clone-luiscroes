'use client';

import { useState } from 'react';
import type { PhotoTone } from '@/types';
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder';

interface PhotoGalleryProps {
  photos: PhotoTone[];
  title: string;
}

const ARROW = 'absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1.5 text-lg shadow disabled:opacity-40';

const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const last = photos.length - 1;

  return (
    <div className="relative overflow-hidden md:rounded-2xl">
      <PhotoPlaceholder
        tone={photos[index]}
        label={`Foto ${index + 1} de ${title}`}
        className="aspect-[4/3] w-full md:aspect-[16/7]"
      />
      <button type="button" aria-label="Foto anterior" onClick={() => setIndex(index - 1)} disabled={index === 0} className={`${ARROW} left-3`}>
        ‹
      </button>
      <button type="button" aria-label="Foto siguiente" onClick={() => setIndex(index + 1)} disabled={index === last} className={`${ARROW} right-3`}>
        ›
      </button>
      <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-0.5 text-xs text-white">
        {index + 1} / {photos.length}
      </span>
    </div>
  );
};

export default PhotoGallery;
