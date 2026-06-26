import type { BoardMember } from './types';
import { boardMembers } from './content/board';

export async function getBoardMembers(): Promise<BoardMember[]> {
  return boardMembers;
}
