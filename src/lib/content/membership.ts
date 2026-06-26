import type { MembershipTier } from '../types';

/** Membership levels from https://www.nlbcuae.com/become-member. Apply links go to GlueUp. */
export const tiers: MembershipTier[] = [
  {
    name: 'Overseas',
    price: 'AED 1,000',
    per: 'per year',
    who: 'Dutch individuals not residing in the UAE, representing companies established outside the UAE.',
    applyUrl: 'https://nlbcuae.glueup.com/membership/23287/apply/',
  },
  {
    name: 'Professional',
    price: 'AED 1,500',
    per: 'per year',
    who: 'Dutch consultants or professionals residing in the UAE.',
    applyUrl: 'https://nlbcuae.glueup.com/membership/23286/apply/',
  },
  {
    name: 'Business',
    price: 'AED 2,500',
    per: 'per year',
    who: 'Dutch companies with a presence in the UAE.',
    applyUrl: 'https://nlbcuae.glueup.com/membership/23285/apply/',
    featured: true,
  },
  {
    name: 'Corporate',
    price: 'AED 7,500',
    per: 'per year',
    who: 'Major Dutch companies keen to promote the objectives and purpose of the NBC.',
    applyUrl: 'https://nlbcuae.glueup.com/membership/23250/apply/',
  },
  {
    name: 'Associate',
    price: 'AED 10,000',
    per: 'per year',
    who: 'Companies established in the UAE with a clear interest in doing business with the Dutch business community.',
    applyUrl: 'https://nlbcuae.glueup.com/membership/23223/apply/',
  },
];
