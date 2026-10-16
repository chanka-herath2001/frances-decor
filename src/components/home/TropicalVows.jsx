import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { tropical } from '../../data/site'
import { img } from '../../data/gallery'

// Olive band featuring the tropical vows setups: a large lead photo plus a drifting strip.
export default function TropicalVows() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['6%', '-18%'])
  const [lead, ...rest] = tropical

  return (
    <section ref={ref} className="relative overflow-hidden bg-olive py-24 text-paper md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="eyebrow text-linen">Featured setups</p>
          <h2 className="mt-4 font-serif text-5xl font-light uppercase leading-none sm:text-6xl">Tropical Vows</h2>
          <p className="mt-6 max-w-md leading-relaxed text-paper/90">
            Sea breeze, open skies and arches dressed in white blooms and greenery. Our tropical setups bring the ceremony
            outdoors without losing a single detail.
          </p>
          <div className="mt-8">
            <Button to="/gallery" variant="light">See the setups</Button>
          </div>
        </Reveal>
        <Reveal from="right">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
            <img src={img(lead)} alt="Tropical vows setup" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </div>

      <motion.ul style={{ x }} className="mt-14 flex w-max gap-4 pl-5">
        {[...rest, ...rest].map((id, i) => (
          <li key={`${id}-${i}`} className="h-44 w-60 shrink-0 overflow-hidden rounded-sm sm:h-56 sm:w-80">
            <img src={img(id)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
