import type { Member } from '../types';

/**
 * NBC corporate members (real list provided by NBC).
 * `name` is the display name; `legal` is the full registered name.
 *
 * To add a real logo: drop an image at `public/images/members/<slug>.png`
 * (or .svg) and set `logo: '/images/members/<slug>.png'` on that member.
 * Until then the wall shows a clean name tile. In Phase 2 the GlueUp member
 * directory can supply logos automatically.
 */
export const corporateMembers: Member[] = [
  { name: 'Air France-KLM' },
  { name: 'Albwardy Damen' },
  { name: 'B2L Cargo Care' },
  { name: 'Boon Edam' },
  { name: 'Boskalis' },
  { name: 'Fugro' },
  { name: 'ING' },
  { name: 'N-SEA' },
  { name: 'Perfetti Van Melle' },
  { name: 'Recovery Advisers' },
  { name: 'Royal IHC' },
  { name: 'Semansys Technologies' },
  { name: 'Star Energy Resources' },
  { name: 'TenCate Thiolon' },
  { name: 'UAE Cargocare' },
  { name: 'Van Oord' },
];
