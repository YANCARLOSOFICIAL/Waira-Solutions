'use client'

import { Suspense, useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

/* ──────────────────────────────────────────────────────
   Load and crop the 3D logo (remove "WAIRA SOLUTIONS"
   text row at the bottom — top 70 % is the jaguar).
─────────────────────────────────────────────────────── */
function useJaguarTexture() {
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      const cropH = Math.floor(img.height * 0.70)
      const canvas = document.createElement('canvas')
      canvas.width  = img.width
      canvas.height = cropH
      canvas.getContext('2d')!.drawImage(
        img,
        0, 0, img.width, cropH,
        0, 0, img.width, cropH
      )
      const tex = new THREE.CanvasTexture(canvas)
      tex.colorSpace = THREE.SRGBColorSpace
      tex.needsUpdate = true
      setTexture(tex)
    }
    // filename has a space — encode it for the browser
    img.src = '/waira%203d%20logo.png'
  }, [])

  return texture
}

/* ──────────────────────────────────────────────────────
   Custom material — keys out the white PNG background
   via a fragment-shader colour-distance test (GPU-side).
─────────────────────────────────────────────────────── */
function useKeyMaterial(texture: THREE.Texture | null) {
  return useMemo(() => {
    if (!texture) return null

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })

    mat.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <dithering_fragment>',
        /* glsl */ `
        #include <dithering_fragment>

        // Key out white PNG background.
        // Pixels close to pure white → transparent.
        // Jaguar blues/oranges are far from white → fully opaque.
        float keyDist = distance(gl_FragColor.rgb, vec3(1.0, 1.0, 1.0));
        gl_FragColor.a = smoothstep(0.08, 0.38, keyDist);
        `
      )
    }

    mat.needsUpdate = true
    return mat
  }, [texture])
}

/* ──────────────────────────────────────────────────────
   Jaguar mesh — floating plane, no rings
─────────────────────────────────────────────────────── */
function JaguarMesh() {
  const texture = useJaguarTexture()
  const keyMat  = useKeyMaterial(texture)

  const groupRef = useRef<THREE.Group>(null)
  const haloRef  = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Gentle Y pendulum — shows depth
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.32) * 0.15
    }

    // Breathing halo
    if (haloRef.current) {
      ;(haloRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.10 + Math.sin(t * 0.9) * 0.05
    }
  })

  if (!keyMat) return null

  // 70 % crop → aspect ratio 1 : 0.70
  const W = 3.2
  const H = W * 0.70

  return (
    <Float speed={1.1} rotationIntensity={0.05} floatIntensity={0.85}>
      <group ref={groupRef}>

        {/* Soft glow halo behind the jaguar */}
        <mesh ref={haloRef} position={[0, 0.1, -0.12]}>
          <circleGeometry args={[1.6, 64]} />
          <meshBasicMaterial color="#00D4FF" transparent opacity={0.10} />
        </mesh>

        {/* Jaguar — white background keyed out */}
        <mesh>
          <planeGeometry args={[W, H]} />
          <primitive object={keyMat} attach="material" />
        </mesh>

      </group>
    </Float>
  )
}

/* ────────────────────── Scene ────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]}   intensity={2.2} color="#7ff0e6" />
      <pointLight       position={[-4, -2, -3]} intensity={1.5} color="#6366F1" />
      <pointLight       position={[3, 1, 3]}    intensity={1.0} color="#00D4FF" />

      <JaguarMesh />

      <Sparkles count={70} scale={7} size={2.8} speed={0.35} opacity={0.4} color="#5fe6d6" />
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
