/**
 * Build a site-absolute href that respects the configured base path
 * (e.g. "/nlbcuae" on GitHub Pages). Use for every internal link/asset.
 */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
