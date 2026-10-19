import { motion } from 'motion/react'

// Hand-drawn style line illustrations that "draw" themselves when scrolled into view.
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 2.2, delay: i * 0.15, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: i * 0.15 } },
  }),
}

function Svg({ children, className, viewBox }) {
  return (
    <motion.svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      aria-hidden
    >
      {children}
    </motion.svg>
  )
}

const P = ({ d, i }) => <motion.path d={d} variants={draw} custom={i} />

export function Rose({ className = 'w-28 text-navy' }) {
  return (
    <Svg viewBox="0 0 120 160" className={className}>
      <P i={0} d="M60 70c-14-2-22-14-16-26 6-11 22-12 30-4 8 9 4 24-8 26-9 2-15-6-11-13 3-6 11-6 13 0" />
      <P i={1} d="M44 46c-10 8-12 26 2 34 14 9 32 2 36-12 3-10-2-22-8-26" />
      <P i={2} d="M60 80c0 25-2 48 0 78" />
      <P i={3} d="M60 112c-12-14-30-14-38-4 12 10 26 10 38 4z" />
      <P i={4} d="M60 128c10-14 28-16 38-8-10 12-26 14-38 8z" />
      <P i={5} d="M59 100c-6-6-8-14-6-20" />
    </Svg>
  )
}

export function Arch({ className = 'w-48 text-navy' }) {
  return (
    <Svg viewBox="0 0 200 220" className={className}>
      <P i={0} d="M30 215V100a70 70 0 0 1 140 0v115" />
      <P i={1} d="M44 215V102a56 56 0 0 1 112 0v113" />
      <P i={2} d="M20 215h160" />
      {[0, 1, 2, 3, 4, 5, 6].map((k) => {
        const a = Math.PI - (k * Math.PI) / 6
        const x = 100 + Math.cos(a) * 70
        const y = 100 - Math.sin(a) * 70
        return <P key={k} i={3 + k * 0.4} d={`M${x} ${y}m-8 0a8 8 0 1 0 16 0a8 8 0 1 0-16 0`} />
      })}
      <P i={6} d="M70 215c0-14 8-22 14-22s10 8 10 22M106 215c0-14 4-22 10-22s14 8 14 22" />
    </Svg>
  )
}

export function Butterfly({ className = 'w-20 text-navy' }) {
  return (
    <Svg viewBox="0 0 100 80" className={className}>
      <P i={0} d="M50 20v46" />
      <P i={1} d="M50 30C38 6 10 4 8 18s20 22 42 18" />
      <P i={1} d="M50 30C62 6 90 4 92 18S72 40 50 36" />
      <P i={2} d="M50 40c-16 2-30 14-24 26 6 10 20 2 24-12" />
      <P i={2} d="M50 40c16 2 30 14 24 26-6 10-20 2-24-12" />
      <P i={3} d="M48 20c-4-8-10-12-14-12M52 20c4-8 10-12 14-12" />
    </Svg>
  )
}
