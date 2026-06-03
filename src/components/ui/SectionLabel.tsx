import { memo } from 'react'

interface SectionLabelProps {
  children: string
}

/** Compact label used above section headings. */
function SectionLabelComponent({ children }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-teal-2">
      <span className="h-px w-10 bg-teal-2" />
      {children}
    </div>
  )
}

export const SectionLabel = memo(SectionLabelComponent)
