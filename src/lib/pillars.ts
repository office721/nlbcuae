import type { Pillar } from './types';
import { pillars } from './content/pillars';

export async function getPillars(): Promise<Pillar[]> {
  return pillars;
}
