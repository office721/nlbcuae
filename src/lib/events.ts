import type { NbcEvent } from './types';
import { events } from './content/events';

/**
 * Events data layer. Today reads local fixtures; in Phase 2 these same
 * signatures will be backed by the GlueUp events API (see lib/glueup).
 * Pages must only import from here — never the fixtures directly.
 */

const byStartAsc = (a: NbcEvent, b: NbcEvent) =>
  +new Date(a.startsAt) - +new Date(b.startsAt);

export async function getUpcomingEvents(limit?: number): Promise<NbcEvent[]> {
  const now = Date.now();
  const upcoming = events
    .filter((e) => +new Date(e.startsAt) >= now)
    .sort(byStartAsc);
  return typeof limit === 'number' ? upcoming.slice(0, limit) : upcoming;
}

export async function getPastEvents(limit?: number): Promise<NbcEvent[]> {
  const now = Date.now();
  const past = events
    .filter((e) => +new Date(e.startsAt) < now)
    .sort((a, b) => -byStartAsc(a, b)); // most recent first
  return typeof limit === 'number' ? past.slice(0, limit) : past;
}

export async function getAllEvents(): Promise<NbcEvent[]> {
  return [...events].sort(byStartAsc);
}

export async function getEvent(slug: string): Promise<NbcEvent | null> {
  return events.find((e) => e.slug === slug) ?? null;
}
