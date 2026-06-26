/** Shared domain types for the NBC site data layer. */

export interface NbcEvent {
  slug: string;
  title: string;
  /** ISO 8601 date-time */
  startsAt: string;
  endsAt?: string;
  location: string;
  /** e.g. "Networking", "Panel", "Gala" */
  type: string;
  summary: string;
  body: string;
  /** GlueUp registration URL (Phase 2); external link for now */
  registerUrl?: string;
  image?: string;
}

export interface Article {
  slug: string;
  title: string;
  /** ISO 8601 date */
  publishedAt: string;
  category: string;
  excerpt: string;
  body: string;
  image?: string;
}

export interface Member {
  name: string;
  /** path under BASE_URL or remote URL */
  logo?: string;
  tier?: string;
  url?: string;
}

export interface Pillar {
  num: string;
  name: string;
  description: string;
}

export interface BoardMember {
  name: string;
  role: string;
  company?: string;
  photo?: string;
  bio?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  /** role or membership type, e.g. "Corporate Member" */
  title: string;
  company: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  per: string;
  who: string;
  applyUrl: string;
  featured?: boolean;
}

export interface GalleryEvent {
  slug: string;
  title: string;
  date?: string;
  location?: string;
  photoCount: number;
  /** Short write-up; paragraphs separated by "\n". */
  description?: string;
}
