import type { BoardMember } from '../types';

/**
 * NBC board members.
 * Populated with the real current board in Task 7 (pulled from the existing
 * site). Any field that cannot be sourced cleanly is flagged with TODO for NBC.
 */
export const boardMembers: BoardMember[] = [
  { name: 'TODO: Board member', role: 'Chair', company: 'TODO' },
];
