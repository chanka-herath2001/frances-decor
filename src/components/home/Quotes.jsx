import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Divider } from '../ui/Botanical'
import { quotes } from '../../data/site'
import { img } from '../../data/gallery'

// Rotating studio notes over a softly drifting photo.
export default function Quotes() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % quotes.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden bg-moss py-28 text-paper md:py-36">
      <motion.img
        src={img('crystal-curtain')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
        animate={{ scale: [1.05, 1.15, 1.05] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow text-dusk">Notes from the studio</p>
        <div className="relative mt-8 flex min-h-[11rem] items-center justify-center sm:min-h-[9rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              className="font-serif text-3xl font-light leading-snug sm:text-5xl"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(6px)' }}
              transition={{ duration: 0.8 }}
            >
              “{quotes[i]}”
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <Divider className="mx-auto mt-8 w-56 text-paper/40" />
        <div className="mt-8 flex justify-center gap-3">
          {quotes.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show quote ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-10 bg-paper' : 'w-4 bg-paper/30 hover:bg-paper/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
