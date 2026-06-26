import type { BoardMember } from './types';
import { boardMembers, teamMembers } from './content/board';

export async function getBoardMembers(): Promise<BoardMember[]> {
  return boardMembers;
}

export async function getTeamMembers(): Promise<BoardMember[]> {
  return teamMembers;
}
