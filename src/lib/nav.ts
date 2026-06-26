/** Primary navigation — single source of truth for nav + footer links. */
export const primaryNav = [
  { label: 'About', path: '/about' },
  { label: 'Board', path: '/board' },
  { label: 'Events', path: '/events' },
  { label: 'Membership', path: '/membership' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
] as const;

export const CONTACT = {
  email: 'office@nlbcuae.com',
  phone: '+971 58 500 9209',
  poBox: 'P.O. Box 75343, Dubai, UAE',
  linkedin: 'https://www.linkedin.com/company/nbcuae',
  facebook: 'https://www.facebook.com/NLBCUAE',
  instagram: 'https://www.instagram.com/nlbcuae',
} as const;
