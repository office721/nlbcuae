import type { GalleryEvent } from './types';
import { galleryEvents } from './content/gallery';

export async function getGalleryEvents(): Promise<GalleryEvent[]> {
  return galleryEvents;
}

/** Photo paths (base-path applied by the caller via href()). */
export function galleryPhotos(ev: GalleryEvent): string[] {
  return Array.from(
    { length: ev.photoCount },
    (_, i) => `/images/gallery/${ev.slug}/photo-${i + 1}.jpg`,
  );
}
