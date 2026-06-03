import { memo, useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, ContactShadows, Environment, Html, PerformanceMonitor } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette, Noise, DepthOfField } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ParticleField } from './ParticleField'
import { FloatingGeometry } from './FloatingGeometry'

gsap.registerPlugin(ScrollTrigger)

function CameraScrollRig() {
  const { camera } = useThree()

  useEffect(() => {
    const tween = gsap.to(camera.position, {
      z: 8,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
    })
    return () => {
      tween.kill()
    }
  }, [camera])

  return null
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (!groupRef.current) return
    const tween = gsap.to(groupRef.current.scale, {
      x: 0.6,
      y: 0.6,
      z: 0.6,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
    })
    return () => {
      tween.kill()
    }
  }, [])

  return (
    <group ref={groupRef}>
      <ParticleField />
      <FloatingGeometry kind="torus" position={[0.05, 0.15, 0]} multiplier={0.22} />
      <FloatingGeometry kind="ico" position={[-1.55, -0.7, -0.4]} multiplier={0.12} />
      <FloatingGeometry kind="octa" position={[1.55, -0.85, -0.2]} multiplier={0.16} />
      <ContactShadows position={[0, -1.85, 0]} opacity={0.35} scale={8} blur={2.7} far={4} />
    </group>
  )
}

/** Main transparent R3F hero canvas. */
function HeroSceneComponent() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/50 bg-white/20 shadow-soft backdrop-blur md:h-[560px]">
      <Canvas shadows dpr={[1, 2]} frameloop="always" camera={{ position: [0, 0, 5], fov: 42 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 6, 6]} intensity={2.1} />
        <Environment preset="city" />
        <CameraScrollRig />
        <SceneContent />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <PerformanceMonitor />
        <EffectComposer>
          <Bloom luminanceThreshold={0.3} intensity={0.8} mipmapBlur />
          <DepthOfField focusDistance={0.03} focalLength={0.035} bokehScale={1.5} />
          <Noise opacity={0.025} blendFunction={BlendFunction.SOFT_LIGHT} />
          <Vignette offset={0.12} darkness={0.75} />
        </EffectComposer>
        <Html position={[0, 0, 0]} center className="pointer-events-none select-none">
          <div className="h-24 w-24 rounded-full bg-teal-2/10 blur-3xl" />
        </Html>
      </Canvas>
    </div>
  )
}

export const HeroScene = memo(HeroSceneComponent)
