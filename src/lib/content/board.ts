import type { BoardMember } from '../types';

/**
 * NBC board and team. Names and roles from the current site
 * (nlbcuae.com/board-and-team). Photos to be supplied by NBC; cards fall back
 * to initials until then.
 */
export const boardMembers: BoardMember[] = [
  { name: 'Linda Negerman', role: 'Chair' },
  { name: 'Melvin Visser', role: 'Vice Chair & Director of Marketing' },
  { name: 'Kamran Zafar', role: 'Treasurer' },
  { name: 'Sonia Harjani', role: 'Director of Technology' },
  { name: 'Husam Abdel Atty', role: 'Director of Member Engagement' },
  { name: 'Damian Strauss', role: 'Director of Partnerships' },
];

export const teamMembers: BoardMember[] = [
  { name: 'Margot Willemstijn', role: 'Executive Director' },
  { name: 'Neil Martinez', role: 'Administrative Support Officer' },
];
