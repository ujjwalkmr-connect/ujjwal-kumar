import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

/** Scroll-triggered GSAP counter for metrics and cards. */
function AnimatedCounterComponent({ value, suffix = '', prefix = '', decimals = 0, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const state = { value: 0 }
    const tween = gsap.to(state, {
      value,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      onUpdate: () => {
        if (!ref.current) return
        ref.current.textContent = `${prefix}${state.value.toFixed(decimals)}${suffix}`
      }
    })
    return () => tween.kill()
  }, [decimals, prefix, suffix, value])

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>
}

export const AnimatedCounter = memo(AnimatedCounterComponent)
