import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Créditos y licencias',
  description: 'Atribución de las fotografías utilizadas en el sitio de Waira Solutions.',
}

type Credit = {
  file: string
  title: string
  author: string
  license: string
  licenseUrl: string
  source: string
  sourceUrl: string
  modified?: boolean
}

const credits: Credit[] = [
  {
    file: '/photos/server-room.jpg',
    title: 'A rack of servers in a server room',
    author: 'Kevin Ache',
    license: 'Unsplash License',
    licenseUrl: 'https://unsplash.com/license',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/photos/a-rack-of-servers-in-a-server-room-2JJ3wBHu4_0',
    modified: true,
  },
  {
    file: '/photos/popayan-atardecer.jpg',
    title: 'Atardecer en Popayán',
    author: 'Ulises Hernández Pino',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.es',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Atardecer_en_Popay%C3%A1n.jpg',
    modified: true,
  },
  {
    file: '/photos/mocoa-green-hills.jpg',
    title: 'Green Hills (piedemonte de Mocoa, Putumayo)',
    author: 'Alexandre Patrier',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/deed.es',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Green_Hills_(229048535).jpeg',
    modified: true,
  },
  {
    file: '/photos/popayan-amanecer.jpg',
    title: 'Amanecer nublado en Popayán',
    author: 'Ulises Hernández Pino',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.es',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amanecer_nublado_en_Popay%C3%A1n.jpg',
  },
  {
    file: '/photos/popayan-morro-tulcan.jpg',
    title: 'El Morro de Tulcán, Popayán',
    author: 'Bernard Gagnon',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:El_Morro_de_Tulc%C3%A1n,_Popay%C3%A1n.jpg',
  },
  {
    file: '/photos/datacenter-racks.jpg',
    title: 'Datacenter Server Racks',
    author: 'Carl Lender',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/deed.es',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Datacenter_Server_Racks_(22370909788).jpg',
  },
]

export default function CreditsPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
          Créditos y licencias
        </h1>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70">
          Fotografías del sitio
        </p>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Las fotografías de este sitio se usan bajo sus respectivas licencias. Algunas fueron
          modificadas (recorte, ajuste de color y contraste) para el tratamiento editorial. Las
          imágenes bajo licencias Creative Commons «Compartir Igual» (SA) mantienen esa misma
          licencia en su versión modificada.
        </p>

        <ul className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {credits.map((c) => (
            <li key={c.file} className="grid gap-1 bg-card p-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
              <div>
                <p className="font-heading text-base font-bold text-foreground">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.author}
                  {c.modified ? ' · imagen modificada' : ''}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground/60">{c.file}</p>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs sm:flex-col sm:items-end sm:gap-1">
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                  {c.license}
                </a>
                <a
                  href={c.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/70 hover:text-foreground"
                >
                  {c.source} ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
