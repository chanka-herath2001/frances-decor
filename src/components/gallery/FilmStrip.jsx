import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { gallery } from '../../data/gallery'

const rowA = gallery.filter((_, i) => i % 2 === 0).slice(0, 10)
const rowB = gallery.filter((_, i) => i % 2 === 1).slice(0, 10)

// Two rows of photos sliding in opposite directions as the page scrolls.
export default function FilmStrip({ onOpen }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const xA = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const xB = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])

  return (
    <section ref={ref} className="overflow-hidden bg-navy py-20 md:py-28">
      <div className="mb-12 px-5 text-center">
        <p className="eyebrow text-dusk">In motion</p>
        <h2 className="mt-3 font-serif text-4xl font-light text-paper sm:text-6xl">Moments We Adore</h2>
      </div>
      {[
        [rowA, xA],
        [rowB, xB],
      ].map(([row, x], r) => (
        <motion.div key={r} style={{ x }} className={`flex w-max gap-4 ${r ? 'mt-4' : ''}`}>
          {row.map((p) => (
            <button
              key={p.id}
              onClick={() => onOpen(p)}
              className="group relative h-40 w-56 shrink-0 overflow-hidden sm:h-56 sm:w-80"
              aria-label={`Open ${p.title}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[60%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </button>
          ))}
        </motion.div>
      ))}
    </section>
  )
}
