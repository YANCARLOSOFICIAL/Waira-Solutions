'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

/* ──────────────────────────────────────────────────────
   Orbital ring — torus that rotates around the logo
─────────────────────────────────────────────────────── */
function OrbitalRing({
  radius,
  color,
  speed,
  offset = 0,
  thickness = 0.02,
}: {
  radius: number
  color: string
  speed: number
  offset?: number
  thickness?: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * speed + offset
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.3 + 0.4
    ref.current.rotation.z = t
    ref.current.rotation.y = t * 0.7
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 24, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  )
}

/* ──────────────────────────────────────────────────────
   Orbiting dot — small sphere traveling in a circle
─────────────────────────────────────────────────────── */
function OrbitingDot({
  radius,
  color,
  speed,
  phase = 0,
  yOffset = 0,
}: {
  radius: number
  color: string
  speed: number
  phase?: number
  yOffset?: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * speed + phase
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = Math.sin(t * 0.5) * 0.3 + yOffset
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

/* ──────────────────────────────────────────────────────
   Logo mesh — round logo floating with orbital elements
─────────────────────────────────────────────────────── */
function Logo3D() {
  const texture = useLoader(THREE.TextureLoader, '/logo-redondo.png')

  const groupRef = useRef<THREE.Group>(null)
  const glowRef  = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.28) * 0.12
    }

    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.08 + Math.sin(t * 0.7) * 0.04
    }
  })

  const SIZE = 2.6

  return (
    <group>
      <Float speed={0.8} rotationIntensity={0.04} floatIntensity={0.6}>
        <group ref={groupRef}>
          {/* Soft glow halo behind the logo */}
          <mesh ref={glowRef} position={[0, 0, -0.15]}>
            <circleGeometry args={[1.8, 64]} />
            <meshBasicMaterial color="#00D4FF" transparent opacity={0.08} />
          </mesh>

          {/* Secondary larger glow */}
          <mesh position={[0, 0, -0.25]}>
            <circleGeometry args={[2.4, 64]} />
            <meshBasicMaterial color="#6366F1" transparent opacity={0.04} />
          </mesh>

          {/* Round logo */}
          <mesh>
            <circleGeometry args={[SIZE / 2, 64]} />
            <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
          </mesh>
        </group>
      </Float>

      {/* Orbital rings — circle around the round logo naturally */}
      <OrbitalRing radius={1.8} color="#00D4FF" speed={0.4} thickness={0.015} />
      <OrbitalRing radius={2.1} color="#6366F1" speed={-0.3} offset={1.2} thickness={0.012} />
      <OrbitalRing radius={1.5} color="#5fe6d6" speed={0.5} offset={2.5} thickness={0.01} />

      {/* Orbiting dots */}
      <OrbitingDot radius={1.8} color="#00D4FF" speed={0.4} />
      <OrbitingDot radius={2.1} color="#6366F1" speed={-0.3} phase={1.5} yOffset={0.2} />
      <OrbitingDot radius={1.5} color="#5fe6d6" speed={0.5} phase={3.0} yOffset={-0.15} />
    </group>
  )
}

/* ────────────────────── Scene ────────────────────── */
function Scene() {
  const lightRef = useRef<THREE.DirectionalLight>(null)

  useFrame(({ clock }) => {
    if (!lightRef.current) return
    const t = clock.getElapsedTime() * 0.15
    lightRef.current.position.x = Math.sin(t) * 5
    lightRef.current.position.z = Math.cos(t) * 5
  })

  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        ref={lightRef}
        position={[4, 6, 5]}
        intensity={2.5}
        color="#7ff0e6"
      />

      <pointLight position={[-4, -2, -3]} intensity={1.8} color="#6366F1" />
      <pointLight position={[3, 1, 3]}    intensity={1.2} color="#00D4FF" />
      <pointLight position={[0, -3, 2]}   intensity={0.8} color="#5fe6d6" />

      <Logo3D />

      <Sparkles
        count={120}
        scale={8}
        size={[1.5, 3.5]}
        speed={0.3}
        opacity={0.35}
        color="#5fe6d6"
      />
      <Sparkles
        count={40}
        scale={6}
        size={[1, 2]}
        speed={0.2}
        opacity={0.2}
        color="#6366F1"
      />
    </>
  )
}

/* ────────────────────── Canvas ─────────────────── */
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.0], fov: 44 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!absolute inset-0"
      aria-hidden
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default HeroScene
