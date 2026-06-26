import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { BackgroundGrid } from '@/components/ui/background-grid'
import { JsonLd } from '@/components/seo/json-ld'
import { Hero } from '@/components/sections/hero'
import { Clients } from '@/components/sections/clients'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Solutions } from '@/components/sections/solutions'
import { Technologies } from '@/components/sections/technologies'
import { Process } from '@/components/sections/process'
import { Cases } from '@/components/sections/cases'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <JsonLd />
      <BackgroundGrid />
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Solutions />
        <Technologies />
        <Process />
        <Cases />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
