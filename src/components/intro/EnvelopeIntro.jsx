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

// First-visit envelope screen: it opens on its own and reveals the site.
export default function EnvelopeIntro({ onOpen }) {
  const [stage, setStage] = useState(0)
  const timers = useRef([])

  const started = useRef(false)

  const open = () => {
    if (started.current) return
    started.current = true
    setStage(1)
    timers.current.push(setTimeout(() => setStage(2), 500), setTimeout(onOpen, 1500))
  }

  useEffect(() => {
    const onKey = (e) => (e.key === 'Enter' || e.key === ' ') && open()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  // opens by itself shortly after it lands; a click or key press just opens it sooner
  useEffect(() => {
    const t = setTimeout(open, 900)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col overflow-hidden bg-mahogany text-paper"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      role="dialog"
      aria-label="A letter from Frances Decor"
    >
      <Ribbon className="bg-linen text-mahogany" />
      <div className="absolute inset-0 top-10 bg-[radial-gradient(circle_at_50%_45%,#6b4a3f_0%,transparent_65%)]" />

      <motion.div
        className="relative flex flex-1 flex-col items-center justify-center px-6"
        animate={stage >= 2 ? { scale: [1, 1, 2.6], opacity: [1, 1, 0] } : {}}
        transition={{ duration: 1.1, times: [0, 0.45, 1], ease: 'easeIn' }}
      >
        <motion.img
          src="/images/logo-light.png"
          alt="Frances Decor Flower Boutique"
          className="mb-10 mt-4 h-20 w-auto sm:mb-14 sm:h-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        />

        <motion.button
          onClick={open}
          aria-label="Open the envelope"
          className="cursor-pointer"
          initial={{ opacity: 0, y: 40, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: stage ? 0 : [-2, 2, -2] }}
          transition={stage ? { duration: 0.4 } : { opacity: { delay: 0.2 }, y: { delay: 0.2, duration: 0.5 }, rotate: { duration: 4, repeat: Infinity } }}
          whileHover={{ scale: 1.03 }}
          autoFocus
        >
          <Envelope stage={stage} />
        </motion.button>

      </motion.div>

      <Ribbon className="bg-olive text-paper" speed={50} />
    </motion.div>
  )
}
