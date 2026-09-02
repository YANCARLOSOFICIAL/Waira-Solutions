import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web y servicios de Waira Solutions.',
}

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Términos y Condiciones
        </h1>
        <p className="mt-3 font-mono text-xs text-muted-foreground/70 uppercase tracking-widest">
          Última actualización: Julio 2026
        </p>

        <div
          className="mt-10 rounded-2xl p-6 sm:p-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_p]:mb-3 [&_strong]:text-foreground [&_li]:text-foreground/80"
          style={{
            background: 'var(--card)',
            border: '1px solid oklch(1 0 0 / 0.1)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <section>
            <h2>1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar este sitio web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte, no debes utilizar nuestro sitio web ni nuestros servicios.
            </p>
          </section>

          <section>
            <h2>2. Servicios</h2>
            <p>
              Waira Solutions ofrece servicios de desarrollo de software, inteligencia artificial, automatización, consultoría tecnológica y soluciones digitales. Los alcances, entregables y plazos de cada servicio se definen en acuerdos contractuales específicos con cada cliente.
            </p>
            <p>
              Las descripciones de servicios en este sitio web tienen fines informativos y no constituyen una oferta contractual vinculante.
            </p>
          </section>

          <section>
            <h2>3. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes, código fuente y materiales, es propiedad de Waira Solutions o de sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables.
            </p>
            <p>
              No está permitido reproducir, distribuir, modificar o crear trabajos derivados sin autorización previa por escrito.
            </p>
          </section>

          <section>
            <h2>4. Proyectos y productos</h2>
            <p>
              Los proyectos, productos y soluciones mostrados en este sitio web representan trabajos realizados por Waira Solutions o productos en desarrollo. Las funcionalidades, plazos y disponibilidad de productos etiquetados como &quot;En desarrollo&quot; o &quot;Próximamente&quot; pueden cambiar sin previo aviso.
            </p>
          </section>

          <section>
            <h2>5. Limitación de responsabilidad</h2>
            <p>
              Waira Solutions no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de este sitio web o de los servicios proporcionados, en la máxima medida permitida por la ley.
            </p>
          </section>

          <section>
            <h2>6. Enlaces a terceros</h2>
            <p>
              Este sitio web puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido o prácticas de estos sitios y no asumimos responsabilidad por ellos.
            </p>
          </section>

          <section>
            <h2>7. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en esta página. Te recomendamos revisar periódicamente esta página.
            </p>
          </section>

          <section>
            <h2>8. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa relacionada será sometida a los tribunales competentes de la ciudad de Popayán, Cauca.
            </p>
          </section>

          <section>
            <h2>9. Contacto</h2>
            <p>
              Para preguntas sobre estos términos, contáctanos a través de nuestro formulario de contacto o por WhatsApp.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
