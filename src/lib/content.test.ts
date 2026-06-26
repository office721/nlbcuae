import { describe, it, expect } from 'vitest';
import { getRecentArticles, getArticle, getRelatedArticles } from './articles';
import { getPillars } from './pillars';
import { getCorporateMembers } from './members';

describe('articles data layer', () => {
  it('returns recent articles sorted by date descending', async () => {
    const a = await getRecentArticles();
    expect(a.length).toBeGreaterThan(0);
    for (let i = 1; i < a.length; i++)
      expect(+new Date(a[i].publishedAt)).toBeLessThanOrEqual(
        +new Date(a[i - 1].publishedAt),
      );
  });

  it('limits recent articles', async () => {
    expect((await getRecentArticles(2)).length).toBeLessThanOrEqual(2);
  });

  it('getArticle resolves known slug and null otherwise', async () => {
    const all = await getRecentArticles();
    expect((await getArticle(all[0].slug))?.slug).toBe(all[0].slug);
    expect(await getArticle('does-not-exist')).toBeNull();
  });

  it('related articles exclude the current one', async () => {
    const all = await getRecentArticles();
    const related = await getRelatedArticles(all[0].slug);
    expect(related.every((r) => r.slug !== all[0].slug)).toBe(true);
  });
});

describe('pillars data layer', () => {
  it('returns exactly four named pillars', async () => {
    const p = await getPillars();
    expect(p).toHaveLength(4);
    expect(p.map((x) => x.name)).toEqual([
      'Connection',
      'Knowledge',
      'Advocacy',
      'Excellence',
    ]);
  });
});

describe('members data layer', () => {
  it('returns corporate members and respects a limit', async () => {
    expect((await getCorporateMembers()).length).toBeGreaterThan(0);
    expect((await getCorporateMembers(4)).length).toBe(4);
  });
});
