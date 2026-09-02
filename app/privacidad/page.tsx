import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales de Waira Solutions.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Política de Privacidad
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
            <h2>1. Introducción</h2>
            <p>
              En Waira Solutions nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro sitio web y servicios.
            </p>
            <p>
              Al utilizar nuestro sitio web y proporcionar tus datos personales, aceptas las prácticas descritas en esta política.
            </p>
          </section>

          <section>
            <h2>2. Datos que recopilamos</h2>
            <p>Podemos recopilar la siguiente información:</p>
            <ul className="mb-4 list-disc pl-6 space-y-1">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Nombre de la empresa</li>
              <li>Número de teléfono (si lo proporcionas)</li>
              <li>Información sobre tu proyecto o consulta</li>
              <li>Datos de navegación (cookies, páginas visitadas, tiempo de sesión)</li>
            </ul>
          </section>

          <section>
            <h2>3. Uso de la información</h2>
            <p>Utilizamos tus datos para:</p>
            <ul className="mb-4 list-disc pl-6 space-y-1">
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Proveer los servicios que has solicitado</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Enviar comunicaciones relacionadas con tus proyectos</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section>
            <h2>4. Protección de datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2>5. Compartición de datos</h2>
            <p>
              No vendemos, comercializamos ni transferimos tus datos personales a terceros, excepto cuando sea necesario para proveer nuestros servicios (por ejemplo, proveedores de email) o cuando la ley lo exija.
            </p>
          </section>

          <section>
            <h2>6. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="mb-4 list-disc pl-6 space-y-1">
              <li>Acceder a tus datos personales</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, contáctanos a través del formulario de contacto o al correo electrónico indicado en nuestro sitio web.
            </p>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario. Puedes configurar tu navegador para rechazar cookies, aunque esto podría afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2>8. Cambios a esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.
            </p>
          </section>

          <section>
            <h2>9. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, contáctanos a través de nuestro formulario de contacto o por WhatsApp.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
