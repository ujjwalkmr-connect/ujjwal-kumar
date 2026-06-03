import { Environment, Float, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { memo, useRef } from 'react'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

function DataNode({
  position,
  color,
  speed = 1,
}: {
  position: [number, number, number]
  color: string
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!ref.current) return

    ref.current.rotation.x += delta * speed * 0.55
    ref.current.rotation.y += delta * speed * 0.75
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.08
  })

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.28, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.25}
          roughness={0.22}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function OrbitRings() {
  const group = useRef<THREE.Group>(null)
  const ringA = useRef<THREE.Mesh>(null)
  const ringB = useRef<THREE.Mesh>(null)
  const ringC = useRef<THREE.Mesh>(null)
  const core = useRef<THREE.Mesh>(null)

  const mouseX = useStore(state => state.mouseX)
  const mouseY = useStore(state => state.mouseY)

  useFrame((state, delta) => {
    if (!group.current) return

    const normalizedX = mouseX / window.innerWidth - 0.5
    const normalizedY = mouseY / window.innerHeight - 0.5

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      normalizedY * 0.85,
      delta * 3
    )

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      normalizedX * 1.15,
      delta * 3
    )

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      normalizedX * 0.42,
      delta * 2.4
    )

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.75) * 0.12 + normalizedY * -0.2

    if (ringA.current) ringA.current.rotation.z += delta * 0.34
    if (ringB.current) ringB.current.rotation.z -= delta * 0.26
    if (ringC.current) ringC.current.rotation.z += delta * 0.16

    if (core.current) {
      core.current.rotation.x += delta * 0.32
      core.current.rotation.y += delta * 0.48
    }
  })

  return (
    <group ref={group} position={[0, 0.05, 0]}>
      <mesh ref={ringA} rotation={[Math.PI / 2.15, 0.1, 0]}>
        <torusGeometry args={[2.15, 0.018, 20, 260]} />
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.85} />
      </mesh>

      <mesh ref={ringB} rotation={[Math.PI / 2.45, 0.85, 0.25]}>
        <torusGeometry args={[1.55, 0.014, 20, 260]} />
        <meshBasicMaterial color="#818CF8" transparent opacity={0.72} />
      </mesh>

      <mesh ref={ringC} rotation={[Math.PI / 2.72, -0.65, -0.2]}>
        <torusGeometry args={[2.7, 0.008, 16, 280]} />
        <meshBasicMaterial color="#C8892A" transparent opacity={0.48} />
      </mesh>

      <Float speed={1.7} rotationIntensity={0.9} floatIntensity={0.45}>
        <mesh ref={core} position={[0, 0, 0.32]}>
          <torusKnotGeometry args={[0.52, 0.14, 180, 24]} />
          <meshPhysicalMaterial
            color="#0D9E8F"
            emissive="#0D9E8F"
            emissiveIntensity={0.16}
            metalness={0.2}
            roughness={0.08}
            transmission={0.22}
            thickness={0.75}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>
      </Float>

      <DataNode position={[-2.25, 0.9, 0.25]} color="#67E8F9" speed={1.4} />
      <DataNode position={[2.2, -0.85, 0.15]} color="#C8892A" speed={1.1} />
      <DataNode position={[1.75, 1.18, -0.1]} color="#818CF8" speed={1.7} />
    </group>
  )
}

function HeroSceneComponent() {
  const setMouse = useStore(state => state.setMouse)

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.6], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        onPointerMove={event => setMouse(event.clientX, event.clientY)}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 4]} intensity={2.2} />
        <pointLight position={[-3, 2, 3]} intensity={3.2} color="#67E8F9" />
        <pointLight position={[3, -2, 3]} intensity={2} color="#818CF8" />
        <pointLight position={[0, 0, 4]} intensity={1.5} color="#C8892A" />

        <Sparkles
          count={130}
          scale={[6.2, 5.2, 2.4]}
          size={2.6}
          speed={0.38}
          color="#67E8F9"
          opacity={0.72}
        />

        <OrbitRings />

        <Environment preset="city" />

        <EffectComposer>
          <Bloom luminanceThreshold={0.12} luminanceSmoothing={0.84} intensity={1.35} />
          <Vignette offset={0.18} darkness={0.75} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export const HeroScene = memo(HeroSceneComponent)
