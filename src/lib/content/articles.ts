import type { Article } from '../types';

/**
 * Placeholder news articles, based on the current site's news section.
 * Replaced or extended by the CMS or GlueUp content in a later phase.
 */
export const articles: Article[] = [
  {
    slug: 'nbc-together-an-evening-of-connection-and-support',
    title: 'NBC Together: An Evening of Connection and Support',
    publishedAt: '2026-03-15',
    category: 'Community',
    excerpt:
      'Members gathered for a warm evening built around connection and mutual support. It was a reminder of what the council is for.',
    body:
      'NBC Together brought members from across the Dutch business community into one room for an evening of connection and support. The format was simple. Good people, honest conversation, and the introductions that follow.\n\nThat simplicity is on purpose. We introduce you to the right people, then we get out of the way.',
    image: '/images/news/nbc-together.jpg',
  },
  {
    slug: 'a-strong-start-to-the-nbc-event-calendar',
    title: 'A Strong Start to the NBC Event Calendar',
    publishedAt: '2026-02-02',
    category: 'Events',
    excerpt:
      'With more than 30 events a year, the calendar opened with networking nights, breakfasts, and a full roundtable.',
    body:
      'The NBC calendar is built to be useful. This season opened with networking evenings, working breakfasts, and a closed-door market entry roundtable with the Consulate. Each event is designed to move a member one step closer to doing business in the UAE.',
    image: '/images/news/calendar.jpg',
  },
  {
    slug: 'welcoming-new-members-to-the-council',
    title: 'Welcoming New Members to the Council',
    publishedAt: '2025-12-10',
    category: 'Membership',
    excerpt:
      'From global names to growing SMEs and startups, the NBC community continues to grow past 170 members.',
    body:
      'The strength of NBC is its members. There are now more than 170, from well-known Dutch companies to SMEs and startups building their UAE presence. We are glad to welcome the latest companies to join the council.',
    image: '/images/news/new-members.jpg',
  },
  {
    slug: 'dutch-business-in-the-uae-the-year-ahead',
    title: 'Dutch Business in the UAE: The Year Ahead',
    publishedAt: '2025-11-05',
    category: 'Insights',
    excerpt:
      'A look at the opportunities and changes shaping Dutch and UAE business in the coming year.',
    body:
      'As trade between the Netherlands and the UAE matures, the opportunities are widening. We see momentum in sustainability, logistics, agritech, and finance. This briefing looks at where the growth is and what it means for members.',
    image: '/images/news/year-ahead.jpg',
  },
];
