import { memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Text, Environment } from '@react-three/drei'

/** Lightweight 3D accent for the metrics band. */
function MetricsSceneComponent() {
  return (
    <Canvas dpr={[1, 1.5]} frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <Environment preset="city" />
      <Float speed={1.1} floatIntensity={0.8}>
        <Text fontSize={0.65} color="#0D9E8F" anchorX="center" anchorY="middle">GROWTH</Text>
      </Float>
    </Canvas>
  )
}

export const MetricsScene = memo(MetricsSceneComponent)
