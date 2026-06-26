import type { Member } from './types';
import { corporateMembers } from './content/members';

export async function getCorporateMembers(limit?: number): Promise<Member[]> {
  return typeof limit === 'number'
    ? corporateMembers.slice(0, limit)
    : corporateMembers;
}

/** Headline membership count shown across the site. */
export const MEMBER_COUNT = '170+';
