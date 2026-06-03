import { memo } from 'react'

function FooterComponent() {
  return (
    <footer className="flex flex-col gap-2 bg-[#060C10] px-6 py-8 text-sm text-pale md:flex-row md:items-center md:justify-between md:px-12">
      <p>© 2026 Ujjwal Kumar · Ranchi, India</p>
      <p className="font-mono uppercase tracking-[0.2em]">Growth Architect · 9+ years</p>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
