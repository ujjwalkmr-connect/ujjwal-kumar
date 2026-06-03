import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useStore } from '../../store/useStore'

/** Custom cursor with direct dot tracking and eased ring tracking. */
function CustomCursorComponent() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const setMouse = useStore(state => state.setMouse)
  const hovered = useStore(state => state.cursorHover)

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      setMouse(x, y)
      gsap.set(dotRef.current, { x: event.clientX, y: event.clientY })
      gsap.to(ringRef.current, { x: event.clientX, y: event.clientY, duration: 0.18, ease: 'power3.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [setMouse])

  return (
    <>
      <div ref={dotRef} className={`pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block ${hovered ? 'h-[18px] w-[18px] bg-gold' : 'h-2.5 w-2.5 bg-teal-2'}`} />
      <div ref={ringRef} className={`pointer-events-none fixed left-0 top-0 z-[99] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-2 md:block ${hovered ? 'h-[52px] w-[52px] opacity-30' : 'h-9 w-9 opacity-50'}`} />
    </>
  )
}

export const CustomCursor = memo(CustomCursorComponent)
