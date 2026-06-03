import { Environment, Float, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { memo, useRef } from 'react'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

function InteractiveOrbitSystem() {
  const group = useRef<THREE.Group>(null)
  const ringOne = useRef<THREE.Mesh>(null)
  const ringTwo = useRef<THREE.Mesh>(null)
  const nodeOne = useRef<THREE.Mesh>(null)

  const mouseX = useStore(state => state.mouseX)
  const mouseY = useStore(state => state.mouseY)

  useFrame((state, delta) => {
    if (!group.current) return

    const targetX = (mouseY / window.innerHeight - 0.5) * 0.55
    const targetY = (mouseX / window.innerWidth - 0.5) * 0.75

    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, delta * 2.4)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, delta * 2.4)
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.08

    if (ringOne.current) ringOne.current.rotation.z += delta * 0.35
    if (ringTwo.current) ringTwo.current.rotation.z -= delta * 0.22
    if (nodeOne.current) {
      nodeOne.current.rotation.x += delta * 0.25
      nodeOne.current.rotation.y += delta * 0.32
    }
  })

  return (
    <group ref={group} position={[0, 0.35, -0.4]}>
      <mesh ref={ringOne} rotation={[Math.PI / 2.15, 0.3, 0]}>
        <torusGeometry args={[1.95, 0.012, 16, 220]} />
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.55} />
      </mesh>

      <mesh ref={ringTwo} rotation={[Math.PI / 2.5, -0.35, 0.25]}>
        <torusGeometry args={[1.42, 0.014, 16, 220]} />
        <meshBasicMaterial color="#818CF8" transparent opacity={0.5} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.75} floatIntensity={0.5}>
        <mesh ref={nodeOne} position={[1.65, -0.9, 0.2]}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial color="#67E8F9" emissive="#67E8F9" emissiveIntensity={0.3} wireframe />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={1.0} floatIntensity={0.55}>
        <mesh position={[-1.45, 1.05, 0.1]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#C8892A" emissive="#C8892A" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <Sparkles count={80} scale={[4.6, 4.6, 2]} size={2.3} speed={0.35} color="#67E8F9" />
    </group>
  )
}

function HeroSceneComponent() {
  const setMouse = useStore(state => state.setMouse)

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        onPointerMove={event => setMouse(event.clientX, event.clientY)}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 5, 4]} intensity={1.7} />
        <pointLight position={[-3, 2, 3]} intensity={2.2} color="#67E8F9" />
        <pointLight position={[3, -2, 3]} intensity={1.2} color="#818CF8" />

        <InteractiveOrbitSystem />
        <Environment preset="city" />

        <EffectComposer>
          <Bloom luminanceThreshold={0.18} luminanceSmoothing={0.85} intensity={0.95} />
          <Vignette offset={0.22} darkness={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export const HeroScene = memo(HeroSceneComponent)
