import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import Door from './Door'
import Petals from '../ui/Petals'
import { Rose } from '../ui/Botanical'
import { img } from '../../data/gallery'
import { tagline } from '../../data/site'

// First-visit entrance: guests "step through" an arched doorway into the site.
export default function Doorway({ onEnter }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)

  const enter = () => {
    if (open) return
    setOpen(true)
    timer.current = setTimeout(onEnter, 2600)
  }

  useEffect(() => {
    const onKey = (e) => (e.key === 'Enter' || e.key === ' ') && enter()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <motion.div
      className="fixed inset-0 z-[80] overflow-hidden bg-paper"
      exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
      role="dialog"
      aria-label="Welcome to Frances Decor"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#fbf8f2_0%,#ede6da_75%)]" />
      <Petals count={18} />

      <motion.div
        className="relative flex h-full flex-col items-center justify-center px-6"
        animate={open ? { scale: 3.2, opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }}
        transition={{ delay: open ? 1.3 : 0, duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
        style={{ transformOrigin: '50% 58%' }}
      >
        <motion.img
          src="/images/logo.png"
          alt="Frances Decor"
          className="mb-6 h-24 sm:h-32"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        <div className="relative">
          <Rose className="absolute -left-20 bottom-0 w-20 text-navy/70 sm:-left-32 sm:w-28" />
          <Rose className="absolute -right-20 bottom-0 w-20 -scale-x-100 text-navy/70 sm:-right-32 sm:w-28" />
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.4 }}>
            <Door
              open={open}
              behind={<img src={img(32)} alt="" className="h-full w-full scale-110 object-cover" />}
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={open ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: open ? 0 : 1 }}
        >
          <p className="font-script text-3xl text-navy sm:text-4xl">{tagline[0]}</p>
          <button
            onClick={enter}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-navy px-8 py-3 text-paper shadow-lg shadow-navy/25 transition hover:bg-ink"
            autoFocus
          >
            <span className="eyebrow">Step inside</span>
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>→</motion.span>
          </button>
          <p className="eyebrow mt-4 text-navy/50">Weddings · Events · Florals</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
