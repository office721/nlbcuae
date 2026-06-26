import type { MembershipTier } from './types';
import { tiers } from './content/membership';

export async function getMembershipTiers(): Promise<MembershipTier[]> {
  return tiers;
}
