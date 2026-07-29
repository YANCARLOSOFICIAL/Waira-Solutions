import type { MetadataRoute } from 'next'
import { WAIRA } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: WAIRA.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${WAIRA.url}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${WAIRA.url}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
