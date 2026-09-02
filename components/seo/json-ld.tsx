import { WAIRA } from '@/lib/config'

export function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: WAIRA.name,
    url: WAIRA.url,
    logo: `${WAIRA.url}/og-image.png`,
    description: WAIRA.tagline,
    email: WAIRA.contact.email,
    telephone: `+${WAIRA.contact.whatsapp}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: WAIRA.location.city,
      addressRegion: WAIRA.location.region,
      addressCountry: WAIRA.location.country,
    },
    location: WAIRA.location.cities.map((c) => ({
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: c.city,
        addressRegion: c.region,
        addressCountry: WAIRA.location.country,
      },
    })),
    sameAs: Object.values(WAIRA.social).filter(Boolean),
    areaServed: 'Latin America',
    knowsAbout: [
      'Software Development',
      'Artificial Intelligence',
      'Automation',
      'Cloud Computing',
      'Digital Transformation',
    ],
  }

  const services = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios',
    itemListElement: [
      { '@type': 'Service', name: 'Desarrollo de software', position: 1 },
      { '@type': 'Service', name: 'Inteligencia Artificial', position: 2 },
      { '@type': 'Service', name: 'Automatización inteligente', position: 3 },
      { '@type': 'Service', name: 'Cloud & DevOps', position: 4 },
      { '@type': 'Service', name: 'Datos & Analítica', position: 5 },
      { '@type': 'Service', name: 'Consultoría tecnológica', position: 6 },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
    </>
  )
}
