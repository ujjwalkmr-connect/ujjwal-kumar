cat > src/scenes/HeroScene.tsx <<'EOF'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { memo, useRef } from 'react'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

function OrbitingGrowthSystem() {
  const group = useRef<THREE.Group>(null)
  const innerRing = useRef<THREE.Mesh>(null)
  const outerRing = useRef<THREE.Mesh>(null)
  const core = useRef<THREE.Mesh>(null)

  const mouseX = useStore(state => state.mouseX)
  const mouseY = useStore(state => state.mouseY)

  useFrame((state, delta) => {
    if (!group.current) return

    const x = (mouseY / window.innerHeight - 0.5) * 0.55
    const y = (mouseX / window.innerWidth - 0.5) * 0.75

    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, x, delta * 2.2)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, y, delta * 2.2)
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08

    if (innerRing.current) innerRing.current.rotation.z += delta * 0.45
    if (outerRing.current) outerRing.current.rotation.z -= delta * 0.22

    if (core.current) {
      core.current.rotation.x += delta * 0.18
      core.current.rotation.y += delta * 0.28
    }
  })

  return (
    <group ref={group}>
      <mesh ref={outerRing} rotation={[Math.PI / 2.1, 0.15, 0]}>
        <torusGeometry args={[2.05, 0.012, 18, 220]} />
        <meshBasicMaterial color="#0D9E8F" transparent opacity={0.58} />
      </mesh>

      <mesh ref={innerRing} rotation={[Math.PI / 2.35, -0.4, 0.25]}>
        <torusGeometry args={[1.45, 0.018, 18, 220]} />
        <meshBasicMaterial color="#C8892A" transparent opacity={0.5} />
      </mesh>

      <Float speed={1.7} rotationIntensity={0.7} floatIntensity={0.5}>
        <mesh ref={core} position={[0.05, 0.05, 0.25]}>
          <torusKnotGeometry args={[0.48, 0.12, 160, 22]} />
          <meshPhysicalMaterial
            color="#0D9E8F"
            metalness={0.18}
            roughness={0.12}
            transmission={0.25}
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={1.2} floatIntensity={0.55}>
        <mesh position={[-1.65, -0.72, 0.35]}>
          <icosahedronGeometry args={[0.36, 1]} />
          <meshStandardMaterial color="#C8892A" wireframe />
        </mesh>
      </Float>

      <Float speed={1.35} rotationIntensity={0.8} floatIntensity={0.45}>
        <mesh position={[1.56, 0.78, 0.25]}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#0D9E8F" emissiveIntensity={0.22} />
        </mesh>
      </Float>

      <Sparkles count={70} scale={[4.8, 3.6, 2]} size={2.6} speed={0.35} color="#0D9E8F" />
    </group>
  )
}

function HeroSceneComponent() {
  const setMouse = useStore(state => state.setMouse)

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        onPointerMove={event => setMouse(event.clientX, event.clientY)}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 4]} intensity={1.9} />
        <pointLight position={[-3, 2, 3]} intensity={2.4} color="#0D9E8F" />
        <pointLight position={[3, -2, 3]} intensity={1.4} color="#C8892A" />

        <OrbitingGrowthSystem />

        <Environment preset="city" />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.85} intensity={0.9} />
          <Vignette offset={0.2} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export const HeroScene = memo(HeroSceneComponent)
EOF