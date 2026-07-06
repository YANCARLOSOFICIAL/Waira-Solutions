export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Waira Solutions',
    url: 'https://wairasolutions.com',
    logo: 'https://wairasolutions.com/og-image.png',
    description:
      'Empresa colombiana de tecnología especializada en desarrollo de software, inteligencia artificial, automatización, cloud y transformación digital.',
    email: 'infitechcol308@gmail.com',
    telephone: '+573229369995',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Popayán',
      addressRegion: 'Cauca',
      addressCountry: 'CO',
    },
    sameAs: [
      'https://www.facebook.com/WairaSolutions/',
      'https://www.linkedin.com/company/wairasolutions',
      'https://www.instagram.com/wairasolutions',
    ],
    areaServed: 'Latin America',
    knowsAbout: [
      'Software Development',
      'Artificial Intelligence',
      'Automation',
      'Cloud Computing',
      'Digital Transformation',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
