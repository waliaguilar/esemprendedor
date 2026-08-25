import { environment } from '../../environments/environment';

/**
 * Resolves a card image path against the Vercel Blob store's public base URL.
 * Absolute URLs (http/https) and local assets are returned unchanged.
 */
export function resolveBlobUrl(path?: string): string {
  if (!path) return '';
  if (/^https?:\/\//i.test(path) || path.startsWith('assets/')) return path;
  return `${environment.blobBaseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
