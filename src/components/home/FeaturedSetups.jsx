import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { setups } from '../../data/site'
import { img } from '../../data/gallery'

// Olive band of featured setups: tabs switch between the outdoor and indoor collections.
export default function FeaturedSetups() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['6%', '-18%'])
  const [active, setActive] = useState(setups[0].id)
  const set = setups.find((s) => s.id === active)
  const [lead, ...rest] = set.photos

  return (
    <section ref={ref} className="relative overflow-hidden bg-olive py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap justify-center gap-2 md:justify-start">
          {setups.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`relative rounded-full px-5 py-2 eyebrow transition-colors ${active === s.id ? 'text-olive' : 'text-paper/80 hover:text-paper'}`}
              aria-pressed={active === s.id}
            >
              {active === s.id && <motion.span layoutId="setup-pill" className="absolute inset-0 rounded-full bg-paper" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <AnimatePresence mode="wait">
            <motion.div key={set.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <p className="eyebrow text-linen">Featured setups · {set.kind}</p>
              <h2 className="mt-4 font-serif text-5xl font-light uppercase leading-none sm:text-6xl">{set.label}</h2>
              <p className="mt-6 max-w-md leading-relaxed text-paper/90">{set.text}</p>
              <div className="mt-8">
                <Button to="/gallery" variant="light">See the setups</Button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={lead}
                src={img(lead)}
                alt={`${set.label} setup`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.ul key={set.id} style={{ x }} className="mt-14 flex w-max gap-4 pl-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        {[...rest, ...rest].map((id, i) => (
          <li key={`${id}-${i}`} className="h-44 w-60 shrink-0 overflow-hidden rounded-sm sm:h-56 sm:w-80">
            <img src={img(id)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
