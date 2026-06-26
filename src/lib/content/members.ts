import type { Member } from '../types';

/**
 * NBC corporate members (real list provided by NBC).
 * Logos were sourced from each company's own website. The four without a
 * logo show a clean name tile; drop an image at
 * `public/images/members/<slug>.png|svg` and add a `logo` to fill them in.
 * In Phase 2 the GlueUp member directory can supply logos automatically.
 */
export const corporateMembers: Member[] = [
  { name: 'Air France-KLM', logo: '/images/members/air-france-klm.svg' },
  { name: 'Albwardy Damen' },
  { name: 'B2L Cargo Care' },
  { name: 'Boon Edam', logo: '/images/members/boon-edam.svg' },
  { name: 'Boskalis', logo: '/images/members/boskalis.svg' },
  { name: 'Fugro', logo: '/images/members/fugro.svg' },
  { name: 'ING', logo: '/images/members/ing.svg' },
  { name: 'N-SEA' },
  { name: 'Perfetti Van Melle', logo: '/images/members/perfetti-van-melle.png' },
  { name: 'Recovery Advisers' },
  { name: 'Royal IHC', logo: '/images/members/royal-ihc.png' },
  { name: 'Semansys Technologies', logo: '/images/members/semansys.svg' },
  { name: 'Star Energy Resources' },
  { name: 'TenCate Thiolon', logo: '/images/members/tencate-thiolon.webp' },
  { name: 'UAE Cargocare' },
  { name: 'Van Oord', logo: '/images/members/van-oord.svg' },
];
