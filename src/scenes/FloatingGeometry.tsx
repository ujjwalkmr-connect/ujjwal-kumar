import { memo, useMemo, useRef } from 'react'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store/useStore'
import { mouseParallax } from '../animations/springs'

type ShapeKind = 'torus' | 'ico' | 'octa'

interface FloatingGeometryProps {
  kind: ShapeKind
  position: [number, number, number]
  multiplier: number
}

/** Reusable floating 3D shape with mouse parallax. */
function FloatingGeometryComponent({ kind, position, multiplier }: FloatingGeometryProps) {
  const ref = useRef<THREE.Mesh>(null)
  const mouseX = useStore(state => state.mouseX)
  const mouseY = useStore(state => state.mouseY)
  const spring = useSpring({
    position: [position[0] + mouseX * multiplier, position[1] - mouseY * multiplier, position[2]],
    config: mouseParallax
  })

  const geometry = useMemo(() => {
    if (kind === 'torus') return <torusKnotGeometry args={[0.72, 0.18, 128, 18]} />
    if (kind === 'ico') return <icosahedronGeometry args={[0.82, 1]} />
    return <octahedronGeometry args={[0.72, 0]} />
  }, [kind])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * (kind === 'torus' ? 0.18 : 0.1)
    ref.current.rotation.y += delta * (kind === 'ico' ? 0.24 : 0.16)
  })

  return (
    <Float speed={kind === 'torus' ? 1.2 : 1.8} rotationIntensity={kind === 'ico' ? 1.1 : 0.5} floatIntensity={kind === 'octa' ? 1.7 : 1.1}>
      <animated.mesh ref={ref} position={spring.position as unknown as [number, number, number]}>
        {geometry}
        {kind === 'torus' ? (
          <MeshTransmissionMaterial color="#0D9E8F" thickness={0.3} roughness={0.1} transmission={0.75} ior={1.4} chromaticAberration={0.05} />
        ) : kind === 'ico' ? (
          <meshStandardMaterial color="#C8892A" metalness={0.45} roughness={0.28} wireframe />
        ) : (
          <meshStandardMaterial color="#FFFFFF" emissive="#0D9E8F" emissiveIntensity={0.18} metalness={0.2} roughness={0.18} />
        )}
      </animated.mesh>
    </Float>
  )
}

export const FloatingGeometry = memo(FloatingGeometryComponent)
