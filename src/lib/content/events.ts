import type { NbcEvent } from '../types';

/**
 * Real NBC events, sourced from https://www.nlbcuae.com/events (2026 calendar).
 * Images are the actual event graphics from the live site. In Phase 2 this
 * list is replaced by the live GlueUp events feed.
 */
export const events: NbcEvent[] = [
  {
    slug: 'summer-networking-drinks',
    title: 'NBC Summer Networking Drinks',
    startsAt: '2026-07-01T19:00:00+04:00',
    endsAt: '2026-07-01T22:00:00+04:00',
    location: 'CQ French Brasserie, Barsha Heights, Dubai',
    type: 'Networking',
    summary:
      'An informal evening of drinks and introductions with the Dutch business community at CQ French Brasserie.',
    body:
      'Join fellow members for our summer networking evening at CQ French Brasserie in Barsha Heights. Expect drinks, a relaxed setting, and the right people in the room. Come and meet founders, country heads, and managers working across the UAE.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/summer-drinks.png',
  },
  {
    slug: 'big-inter-council-networking-night',
    title: 'The Big Inter-Council Networking Night',
    startsAt: '2026-09-10T18:30:00+04:00',
    endsAt: '2026-09-10T21:00:00+04:00',
    location: 'SO/ Uptown Dubai',
    type: 'Networking',
    summary:
      'A large joint networking night with partner business councils from across the UAE, hosted at SO/ Uptown Dubai.',
    body:
      'Our biggest networking night of the year brings together the Dutch community and partner business councils from across the Emirates. It is a chance to grow your network well beyond the Dutch community in one evening, held at SO/ Uptown Dubai.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/inter-council-night.png',
  },
  {
    slug: 'people-compliance-and-wellbeing',
    title: 'People, Compliance & Wellbeing',
    startsAt: '2026-09-15T08:30:00+04:00',
    endsAt: '2026-09-15T10:00:00+04:00',
    location: 'Dubai',
    type: 'Panel',
    summary:
      'A morning session on people, compliance, and wellbeing for companies operating in the UAE.',
    body:
      'A focused morning session on the people side of doing business in the UAE, covering compliance, HR, and employee wellbeing. Practical guidance for companies of every size. Bring your questions.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/nbc-generic.png',
  },
  {
    slug: 'site-visit-tencate-grass',
    title: 'Site Visit: TenCate Grass',
    startsAt: '2026-09-23T09:30:00+04:00',
    endsAt: '2026-09-23T11:00:00+04:00',
    location: 'Dubai',
    type: 'Site Visit',
    summary:
      'A guided site visit to TenCate Grass to see Dutch manufacturing and innovation in the UAE up close.',
    body:
      'A guided visit to TenCate Grass for a behind-the-scenes look at Dutch manufacturing and innovation in the region. A rare chance to see a member operation up close and meet the team.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/nbc-generic.png',
  },
  {
    slug: 'nbc-gala-2026',
    title: 'NBC Gala 2026',
    startsAt: '2026-11-21T19:00:00+04:00',
    endsAt: '2026-11-21T23:30:00+04:00',
    location: 'Dubai',
    type: 'Gala',
    summary:
      'The highlight of the NBC calendar. A black-tie evening celebrating the Dutch and UAE business community.',
    body:
      'Our flagship event of the year brings together the full NBC community, the Dutch Consul General, and partners from across the Emirates for a black-tie evening of recognition and connection.',
    registerUrl: 'https://www.nlbcuae.com/events',
    image: '/images/events/nbc-generic.png',
  },
];
