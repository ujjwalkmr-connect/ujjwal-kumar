import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Creates a reveal animation for a section element. */
export function revealSection(target: gsap.TweenTarget): gsap.core.Tween {
  return gsap.fromTo(
    target,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: target as Element, start: 'top 82%' } }
  )
}

/** Animates a numeric text counter from zero to the target value. */
export function animateCounter(element: HTMLElement, value: number, suffix = ''): gsap.core.Tween {
  const state = { value: 0 }
  return gsap.to(state, {
    value,
    duration: 1.6,
    ease: 'power3.out',
    scrollTrigger: { trigger: element, start: 'top 85%', once: true },
    onUpdate: () => {
      element.textContent = `${Math.round(state.value)}${suffix}`
    }
  })
}
