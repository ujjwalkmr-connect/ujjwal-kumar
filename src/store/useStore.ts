import { create } from 'zustand'

export interface AppState {
  mouseX: number
  mouseY: number
  activeSection: string
  scrollProgress: number
  isLoading: boolean
  cursorHover: boolean
  setMouse: (x: number, y: number) => void
  setActiveSection: (section: string) => void
  setScrollProgress: (progress: number) => void
  setLoading: (loading: boolean) => void
  setCursorHover: (hovered: boolean) => void
}

/** Global UI and interaction state shared between DOM and 3D scenes. */
export const useStore = create<AppState>(set => ({
  mouseX: 0,
  mouseY: 0,
  activeSection: 'hero',
  scrollProgress: 0,
  isLoading: false,
  cursorHover: false,
  setMouse: (mouseX, mouseY) => set({ mouseX, mouseY }),
  setActiveSection: activeSection => set({ activeSection }),
  setScrollProgress: scrollProgress => set({ scrollProgress }),
  setLoading: isLoading => set({ isLoading }),
  setCursorHover: cursorHover => set({ cursorHover })
}))
