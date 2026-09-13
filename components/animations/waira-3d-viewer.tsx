'use client'

import { Suspense, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, OrbitControls, useGLTF, useProgress } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const MODEL_URL = '/models/waira-logo.glb'

/** PNG estático — se usa mientras carga el modelo, si no hay WebGL o si falla la GPU. */
export function WairaLogoFallback({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <Image
        src="/waira-3d-logo.png"
        alt="Logo 3D de Waira Solutions — jaguar tecnológico"
        width={1024}
        height={1024}
        priority
        sizes="(max-width: 1024px) 90vw, 34vw"
        className="h-full w-full object-contain mix-blend-screen"
      />
    </div>
  )
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/** El objeto 3D real — normalizado a ~2.6u y centrado para rotar sobre su eje. */
function LogoModel({ autoRotate }: { autoRotate: boolean }) {
  const { scene } = useGLTF(MODEL_URL)
  const ref = useRef<THREE.Group>(null)

  const model = useMemo(() => {
    const clone = scene.clone(true)
    const box = new THREE.Box3().setFromObject(clone)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const s = 2.6 / maxDim
    clone.scale.setScalar(s)
    clone.position.sub(center.multiplyScalar(s))
    return clone
  }, [scene])

  useFrame((_, delta) => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += delta * 0.35
    }
  })

  return (
    <group ref={ref}>
      <primitive object={model} />
    </group>
  )
}

function LoaderOverlay() {
  const { progress } = useProgress()
  if (progress >= 100) return null
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="glass-card flex items-center gap-3 rounded-full px-5 py-2.5">
        <span className="animate-node-pulse size-1.5 rounded-full bg-brand" aria-hidden />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
          Cargando 3D · {Math.round(progress)}%
        </span>
      </div>
    </div>
  )
}

/**
 * Logo de Waira como objeto 3D interactivo:
 * rotación automática + flotación + arrastre con el mouse.
 * Carga diferida solo en cliente (sin SSR) con fallback PNG.
 */
export function Waira3DViewer({ className }: { className?: string }) {
  const reduce = useReducedMotion() ?? false
  // Este módulo solo se importa con ssr:false, así que document existe.
  const [webgl] = useState(hasWebGL)

  if (!webgl) {
    return <WairaLogoFallback className={className} />
  }

  return (
    <div className={cn('relative', className)}>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.35, 4.6], fov: 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        role="img"
        aria-label="Logo 3D interactivo de Waira Solutions"
      >
        {/* Iluminación cálida ámbar + filo cian, del ADN de marca */}
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 4]} intensity={1.7} color="#fff1e0" />
        <directionalLight position={[-5, 2, -3]} intensity={1.3} color="#7fd4e6" />
        <directionalLight position={[5, -1, 1]} intensity={0.7} color="#e8924a" />

        <Suspense fallback={null}>
          <Float
            speed={1.6}
            rotationIntensity={reduce ? 0 : 0.35}
            floatIntensity={reduce ? 0 : 0.9}
            floatingRange={[-0.12, 0.12]}
          >
            <LogoModel autoRotate={!reduce} />
          </Float>
          <ContactShadows position={[0, -1.55, 0]} opacity={0.55} scale={8} blur={2.6} far={3} color="#000000" />
        </Suspense>

        <OrbitControls
          autoRotate={!reduce}
          autoRotateSpeed={0.9}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3.4}
          maxPolarAngle={Math.PI / 1.7}
          makeDefault
        />
      </Canvas>
      <LoaderOverlay />
    </div>
  )
}

useGLTF.preload(MODEL_URL)
