import { memo } from 'react'
import { Sparkles, Stars } from '@react-three/drei'

/** Soft animated particles for depth behind hero geometry. */
function ParticleFieldComponent() {
  return (
    <>
      <Stars radius={70} depth={30} count={900} factor={3} saturation={0} fade speed={0.45} />
      <Sparkles count={80} scale={[7, 4, 3]} size={2.2} speed={0.35} opacity={0.45} color="#0D9E8F" />
    </>
  )
}

export const ParticleField = memo(ParticleFieldComponent)
