import type { GalleryEvent } from '../types';

/**
 * Past-event photo galleries (photos in public/images/gallery/<slug>/photo-N.jpg).
 * Dates marked with a year only are best-effort placeholders to confirm.
 */
export const galleryEvents: GalleryEvent[] = [
  { slug: 'cybersecurity-event', title: 'Cybersecurity Event', date: 'June 2026', location: 'Dubai', photoCount: 10 },
  { slug: 'nbc-together', title: 'NBC Together: An Evening of Connection & Support', date: 'May 2026', location: 'Dubai', photoCount: 10 },
  { slug: 'amsterdam-networking-lunch', title: 'Amsterdam Networking Lunch', date: 'June 2026', location: 'Amsterdam', photoCount: 9 },
  { slug: 'business-elevator-pitch', title: 'Business Elevator Pitch', date: '2026', location: 'Amsterdam', photoCount: 6 },
  { slug: 'football-match-night', title: 'Football Match Night', date: '2026', location: 'Dubai', photoCount: 3 },
];
