import { useId } from 'react'
import { motion } from 'motion/react'

// Slowly rotating circular text badge with a small flower at its centre.
export default function CircleText({ text, className = '' }) {
  const id = useId().replace(/:/g, '')
  return (
    <div className={`rounded-full bg-paper/90 p-1 shadow-lg shadow-navy/10 backdrop-blur ${className}`}>
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full text-navy"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      >
        <defs>
          <path id={id} d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
        </defs>
        <text className="fill-current font-sans text-[8.4px] uppercase tracking-[0.18em]">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </motion.svg>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-script text-3xl text-cornflower">F</span>
    </div>
  )
}
