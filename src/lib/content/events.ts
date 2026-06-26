import type { NbcEvent } from '../types';

/**
 * Placeholder events — realistic, drawn from the current site's calendar.
 * Replaced by the GlueUp events feed in Phase 2.
 * Dates are illustrative; mix of future and past so list pages have content.
 */
export const events: NbcEvent[] = [
  {
    slug: 'summer-networking-drinks',
    title: 'Summer Networking Drinks',
    startsAt: '2026-07-14T19:00:00+04:00',
    endsAt: '2026-07-14T22:00:00+04:00',
    location: 'Le Petit Belge, Dubai',
    type: 'Networking',
    summary:
      'An informal evening of drinks and introductions with Dutch businesses across the Emirates.',
    body:
      'Join fellow members for our summer networking evening. Drinks, a relaxed setting, and the right people in the room — exactly what NBC does best. Come meet founders, country heads, and managers operating across the UAE.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/networking-drinks.jpg',
  },
  {
    slug: 'inter-council-networking-night',
    title: 'Inter-Council Networking Night',
    startsAt: '2026-08-05T18:30:00+04:00',
    endsAt: '2026-08-05T21:30:00+04:00',
    location: 'Capital Club, Abu Dhabi',
    type: 'Networking',
    summary:
      'A joint evening with partner business councils — broaden your network beyond the Dutch community.',
    body:
      'NBC partners with fellow European and international business councils for an evening that widens the room. Expect a cross-section of the Abu Dhabi business community and warm, useful introductions.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/inter-council.jpg',
  },
  {
    slug: 'professional-development-breakfast',
    title: 'Professional Development Breakfast',
    startsAt: '2026-09-10T08:30:00+04:00',
    endsAt: '2026-09-10T10:30:00+04:00',
    location: 'Dubai Chambers, Dubai',
    type: 'Panel',
    summary:
      'A working breakfast on doing business in the UAE — practical insight, not theory.',
    body:
      'Over coffee, a focused panel shares what actually moves the needle for Dutch companies entering or scaling in the UAE: licensing, hiring, and market entry. Bring questions.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/breakfast.jpg',
  },
  {
    slug: 'nbc-annual-gala-2026',
    title: 'NBC Annual Gala Dinner 2026',
    startsAt: '2026-11-20T19:00:00+04:00',
    endsAt: '2026-11-20T23:30:00+04:00',
    location: 'Jumeirah Emirates Towers, Dubai',
    type: 'Gala',
    summary:
      'The highlight of the NBC calendar — a black-tie evening celebrating the Dutch–UAE business community.',
    body:
      'Our flagship event of the year brings together the full NBC community, the Dutch Consul General, and partners from across the Emirates for an evening of recognition and connection.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/gala.jpg',
  },
  {
    slug: 'nbc-together-evening',
    title: 'NBC Together: An Evening of Connection',
    startsAt: '2026-03-12T18:30:00+04:00',
    endsAt: '2026-03-12T21:00:00+04:00',
    location: 'Dubai',
    type: 'Networking',
    summary: 'A community evening bringing members together in support of one another.',
    body:
      'A warm evening built around the NBC community — connection, support, and conversation among Dutch businesses in the UAE.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/together.jpg',
  },
  {
    slug: 'market-entry-roundtable',
    title: 'UAE Market Entry Roundtable',
    startsAt: '2026-02-18T16:00:00+04:00',
    endsAt: '2026-02-18T18:00:00+04:00',
    location: 'Consulate General, Dubai',
    type: 'Roundtable',
    summary: 'A closed-door roundtable for companies considering the UAE market.',
    body:
      'A practical, closed-door session with the Consulate and experienced members on entering the UAE market — structures, pitfalls, and first steps.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/roundtable.jpg',
  },
];
