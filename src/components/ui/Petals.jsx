import { useMemo } from 'react'
import { motion } from 'motion/react'

// Soft petals drifting down — decorative, ignored by pointer and screen readers.
const PALETTE = ['#ead9d3', '#dbe4ec', '#f3e7e1', '#b6c6d6']

export default function Petals({ count = 14, className = '', colors = PALETTE }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        size: 8 + Math.random() * 12,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 160,
        color: colors[i % colors.length],
      })),
    [count, colors],
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="absolute -top-8 block rounded-[60%_0_60%_0]"
          style={{ left: `${p.left}%`, width: p.size, height: p.size * 0.75, background: p.color }}
          animate={{ y: ['0vh', '110vh'], x: [0, p.drift], rotate: [0, 360] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}
