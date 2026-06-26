import type { Article } from './types';
import { articles } from './content/articles';

const byDateDesc = (a: Article, b: Article) =>
  +new Date(b.publishedAt) - +new Date(a.publishedAt);

export async function getRecentArticles(limit?: number): Promise<Article[]> {
  const sorted = [...articles].sort(byDateDesc);
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}

export async function getAllArticles(): Promise<Article[]> {
  return [...articles].sort(byDateDesc);
}

export async function getArticle(slug: string): Promise<Article | null> {
  return articles.find((a) => a.slug === slug) ?? null;
}

export async function getRelatedArticles(
  slug: string,
  limit = 3,
): Promise<Article[]> {
  const current = articles.find((a) => a.slug === slug);
  return [...articles]
    .filter((a) => a.slug !== slug)
    .sort(byDateDesc)
    .sort((a, b) => {
      if (!current) return 0;
      const aMatch = a.category === current.category ? -1 : 0;
      const bMatch = b.category === current.category ? -1 : 0;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}
