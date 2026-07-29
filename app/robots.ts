import type { MetadataRoute } from 'next'
import { WAIRA } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${WAIRA.url}/sitemap.xml`,
  }
}
