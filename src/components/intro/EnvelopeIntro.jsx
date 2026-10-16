import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import Envelope from './Envelope'

const ticker = ['Frances Decor', 'Flower boutique', 'Weddings', 'Events', 'Florals']

function Ribbon({ className, speed = 40 }) {
  const row = [...ticker, ...ticker, ...ticker, ...ticker]
  return (
    <div className={`overflow-hidden py-2.5 ${className}`}>
      <div className="flex w-max" style={{ animation: `marquee ${speed}s linear infinite` }}>
        {row.map((t, i) => (
          <span key={i} className="eyebrow flex items-center gap-6 pr-6 whitespace-nowrap">
            {t} <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// First-visit "you've got a letter" screen; opening the envelope reveals the site.
export default function EnvelopeIntro({ onOpen }) {
  const [stage, setStage] = useState(0)
  const timers = useRef([])

  const open = () => {
    if (stage) return
    setStage(1)
    timers.current.push(setTimeout(() => setStage(2), 850), setTimeout(onOpen, 2900))
  }

  useEffect(() => {
    const onKey = (e) => (e.key === 'Enter' || e.key === ' ') && open()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col overflow-hidden bg-mahogany text-paper"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      role="dialog"
      aria-label="A letter from Frances Decor"
    >
      <Ribbon className="bg-linen text-mahogany" />
      <div className="absolute inset-0 top-10 bg-[radial-gradient(circle_at_50%_45%,#6b4a3f_0%,transparent_65%)]" />

      <motion.div
        className="relative flex flex-1 flex-col items-center justify-center px-6"
        animate={stage >= 2 ? { scale: [1, 1, 2.6], opacity: [1, 1, 0] } : {}}
        transition={{ duration: 2, times: [0, 0.5, 1], ease: 'easeIn' }}
      >
        <motion.p className="eyebrow text-center text-linen/80" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          You’ve got a letter from
        </motion.p>
        <motion.img
          src="/images/logo-light.png"
          alt="Frances Decor Flower Boutique"
          className="mb-10 mt-4 h-20 w-auto sm:mb-14 sm:h-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        />

        <motion.button
          onClick={open}
          aria-label="Open the envelope"
          className="cursor-pointer"
          initial={{ opacity: 0, y: 40, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: stage ? 0 : [-2, 2, -2] }}
          transition={stage ? { duration: 0.4 } : { opacity: { delay: 0.6 }, y: { delay: 0.6, duration: 0.8 }, rotate: { duration: 4, repeat: Infinity } }}
          whileHover={{ scale: 1.03 }}
          autoFocus
        >
          <Envelope stage={stage} />
        </motion.button>

        <motion.p
          className="eyebrow mt-12 text-center text-linen/80"
          animate={{ opacity: stage ? 0 : [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: stage ? 0 : Infinity }}
        >
          Tap the envelope to open
        </motion.p>
      </motion.div>

      <Ribbon className="bg-olive text-paper" speed={50} />
    </motion.div>
  )
}
