import { useEffect } from 'react'
import { useStore } from '../store/useStore'

/** Tracks document-level scroll progress in Zustand. */
export function useScrollProgress(): void {
  const setScrollProgress = useStore(state => state.setScrollProgress)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [setScrollProgress])
}
