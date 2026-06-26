import { describe, it, expect } from 'vitest';
import { getUpcomingEvents, getPastEvents, getEvent, getAllEvents } from './events';

describe('events data layer', () => {
  it('returns upcoming events sorted by start date ascending', async () => {
    const e = await getUpcomingEvents();
    expect(e.length).toBeGreaterThan(0);
    for (let i = 1; i < e.length; i++) {
      expect(+new Date(e[i].startsAt)).toBeGreaterThanOrEqual(
        +new Date(e[i - 1].startsAt),
      );
    }
  });

  it('all upcoming events are in the future', async () => {
    for (const ev of await getUpcomingEvents())
      expect(+new Date(ev.startsAt)).toBeGreaterThanOrEqual(Date.now());
  });

  it('limits results when asked', async () => {
    expect((await getUpcomingEvents(2)).length).toBeLessThanOrEqual(2);
  });

  it('past events are all before now and sorted most-recent-first', async () => {
    const past = await getPastEvents();
    for (const ev of past)
      expect(+new Date(ev.startsAt)).toBeLessThan(Date.now());
    for (let i = 1; i < past.length; i++)
      expect(+new Date(past[i].startsAt)).toBeLessThanOrEqual(
        +new Date(past[i - 1].startsAt),
      );
  });

  it('getAllEvents returns every event', async () => {
    const all = await getAllEvents();
    const up = await getUpcomingEvents();
    const past = await getPastEvents();
    expect(all.length).toBe(up.length + past.length);
  });

  it('getEvent resolves a known slug and null for unknown', async () => {
    const all = await getAllEvents();
    expect((await getEvent(all[0].slug))?.slug).toBe(all[0].slug);
    expect(await getEvent('nope-not-real')).toBeNull();
  });
});
