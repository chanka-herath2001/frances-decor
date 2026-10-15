import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import { services } from '../../data/site'
import { img } from '../../data/gallery'

// "Weekend schedule" band: numbered services; hovering one swaps the preview photo.
export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section className="relative bg-mist py-24 md:py-32">
      <img src={img('beach-aisle')} alt="" className="absolute left-0 top-0 hidden h-full w-[14%] object-cover opacity-80 lg:block" />
      <img src={img('chapel-altar-florals')} alt="" className="absolute right-0 top-0 hidden h-full w-[14%] object-cover opacity-80 lg:block" />
      <p className="absolute left-[15%] top-10 hidden font-script text-3xl leading-tight text-navy/70 xl:block">
        Good friends,<br />brighter days
      </p>
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionTitle eyebrow="What we create" title="Our Services" script="tailored for every occasion" />

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-t-full shadow-xl shadow-navy/20">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>

          <ul className="divide-y divide-navy/15 border-y border-navy/15">
            {services.map((s, i) => (
              <Reveal as="li" key={s.no} delay={i * 0.08} from="right">
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group grid w-full grid-cols-[3rem_1fr] items-baseline gap-2 py-5 text-left"
                >
                  <span className={`eyebrow transition-colors ${active === i ? 'text-navy' : 'text-navy/40'}`}>{s.no}</span>
                  <span>
                    <span className={`block font-serif text-2xl uppercase tracking-wide transition-all duration-500 sm:text-3xl ${active === i ? 'translate-x-2 text-navy' : 'text-navy/55'}`}>
                      {s.title}
                    </span>
                    <motion.span
                      className="block overflow-hidden text-sm leading-relaxed text-ink/70"
                      animate={{ height: active === i ? 'auto' : 0, opacity: active === i ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="block pt-2">{s.text}</span>
                    </motion.span>
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
