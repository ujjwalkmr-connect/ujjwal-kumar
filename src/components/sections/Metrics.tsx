import { memo } from 'react'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { cardReveal, stagger } from '../../animations/variants'

const metrics = [
  { value: 5.2, suffix: '×', label: 'Lead volume growth', decimals: 1 },
  { value: 65, suffix: '%', label: 'CPL reduction' },
  { text: '<5m', label: 'Lead response time' },
  { value: 18, suffix: 'pp', label: 'Consult conversion lift' },
  { value: 90, suffix: '%', label: 'YoY organic growth' },
  { value: 2, suffix: '×', label: 'Output without headcount' }
]

function MetricsComponent() {
  return (
    <section id="metrics" className="bg-ink px-6 py-20 text-white md:px-12">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-[2rem] border border-white/10 md:grid-cols-6">
        {metrics.map(metric => (
          <motion.div key={metric.label} variants={cardReveal} className="border-white/10 p-6 transition hover:bg-ink-2 md:border-r last:border-r-0">
            <div className="font-heading text-4xl font-extrabold text-teal-2">
              {'text' in metric ? metric.text : <AnimatedCounter value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />}
            </div>
            <p className="mt-3 text-sm text-pale">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export const Metrics = memo(MetricsComponent)
