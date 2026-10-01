import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * PNG estático del logo — se usa mientras carga el modelo, si no hay WebGL,
 * si falla la GPU y en pantallas <768px (donde el 3D no se monta).
 *
 * Vive en su propio módulo sin dependencias 3D para que three.js nunca
 * entre en el bundle inicial ni se descargue en móvil/tablet.
 */
export function WairaLogoFallback({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <Image
        src="/waira-3d-logo.png"
        alt="Logo 3D de Waira Solutions — jaguar tecnológico"
        width={1024}
        height={1024}
        /* Es el LCP en TODOS los viewports: en <768px se queda fijo, y en
           ≥768px sigue usándose como póster mientras carga el chunk del 3D y
           el .glb (next/dynamic `loading` + estado de carga del viewer).
           Nunca es descarga tirada. */
        priority
        sizes="(max-width: 1024px) 90vw, 34vw"
        className="h-full w-full object-contain mix-blend-screen"
      />
    </div>
  )
}
