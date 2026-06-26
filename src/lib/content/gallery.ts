import type { GalleryEvent } from '../types';

/**
 * Past-event photo galleries (photos in public/images/gallery/<slug>/photo-N.jpg).
 * Order is newest first; the homepage features the first two. Dates with a
 * year only are best-effort placeholders to confirm.
 */
export const galleryEvents: GalleryEvent[] = [
  {
    slug: 'football-match-night',
    title: 'Oranje Meets Blue & Yellow: Netherlands vs Sweden Match Night',
    date: 'June 2026',
    location: 'Media One Hotel, Dubai',
    photoCount: 3,
    description:
      'What a night, and what a result. The Netherlands beat Sweden 5-1 in their Group F World Cup match, and we had the best seats in Dubai to watch it at Media One Hotel.\nEvenings like this are what community is really about: the bonding, the cheering, a shared plate of bitterballen, and the kind of night that brings people closer together beyond the boardroom.',
  },
  {
    slug: 'cybersecurity-event',
    title: 'Cyber Security Event 2026',
    date: 'June 2026',
    location: 'Mövenpick Media City, Dubai',
    photoCount: 10,
    description:
      'The NBC joined the German Emirati Joint Council for Industry & Commerce (AHK) and the Austrian Business Council UAE for a joint Cybersecurity Breakfast at the Grand Plaza Mövenpick, Media City.\nBusiness leaders and entrepreneurs came together for a practical discussion on the cyber risks facing companies of every size, from AI-driven phishing and phone scams to system intrusions and legal liability. Our thanks to the speakers, Johannes Schönborn of Exploit Labs, Jakob Kisser of Strohal Legal Consultants, and Nadeem Maniar of Baker Tilly, and to the Austrian Business Council and AHK for making it happen.',
  },
  {
    slug: 'nbc-together',
    title: 'NBC Together: An Evening of Connection & Support',
    date: 'May 2026',
    location: 'Dubai',
    photoCount: 10,
    description:
      'An evening built around connection and support, where members shared their challenges and helped one another. We were glad to be joined by Consul General Paul Ymkers.',
  },
  {
    slug: 'amsterdam-networking-lunch',
    title: 'Amsterdam Networking Lunch',
    date: 'June 2026',
    location: 'Amsterdam',
    photoCount: 9,
    description:
      'A networking lunch that brought 38 members and guests together at Café Restaurant Dauphine in Amsterdam, a reminder that the NBC community reaches well beyond the UAE.',
  },
  {
    slug: 'business-elevator-pitch',
    title: 'Business Elevator Pitch',
    date: '2026',
    location: 'Amsterdam',
    photoCount: 6,
    description:
      'A fast-paced session where members pitched their business in just a few minutes, opening the door to new introductions and opportunities.',
  },
];
