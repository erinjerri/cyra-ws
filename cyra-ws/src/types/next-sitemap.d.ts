declare module 'next-sitemap' {
  export interface SitemapEntry {
    loc: string
    lastmod?: string
    changefreq?: string
    priority?: number
  }

  export function getServerSideSitemap(entries: SitemapEntry[]): Response
} 