import { useState } from 'react'
import { motion } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { palette } from '../../data/site'
import { img } from '../../data/gallery'

const dark = new Set(['Cornflower', 'Navy'])

// Interactive swatch strip inspired by the invitation's colour guide.
export default function Palette() {
  const [active, setActive] = useState(palette[5])
  const light = !dark.has(active.name)

  return (
    <motion.section
      className="relative overflow-hidden py-24 transition-colors md:py-32"
      animate={{ backgroundColor: active.hex }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
        <div>
          <SectionTitle align="left" eyebrow="Our signature palette" title="Soft, timeless colour" light={!light} />
          <Reveal delay={0.2}>
            <p className={`mt-6 max-w-md leading-relaxed ${light ? 'text-ink/75' : 'text-paper/80'}`}>
              Our favourite rooms are built on gentle tones — ivory linen, misty blues and a deep navy to ground it all. Tap a
              colour to see the mood it brings.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-4">
            {palette.map((c, i) => (
              <Reveal key={c.name} from="zoom" delay={0.1 * i}>
                <button
                  onClick={() => setActive(c)}
                  className="group flex flex-col items-center gap-2"
                  aria-pressed={active.name === c.name}
                >
                  <span
                    className={`block h-12 w-12 rounded-full border-2 shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 ${active.name === c.name ? 'scale-110 border-paper ring-2 ring-navy' : 'border-paper/70'}`}
                    style={{ background: c.hex }}
                  />
                  <span className={`eyebrow ${light ? 'text-navy/70' : 'text-paper/80'}`}>{c.name}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal from="right" className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-[10px] border-paper shadow-2xl">
            <img src={img(38)} alt="Reception tables styled in soft blue" className="h-full w-full object-cover" loading="lazy" />
            <motion.div className="absolute inset-0 mix-blend-color" animate={{ backgroundColor: active.hex, opacity: 0.35 }} />
          </div>
          <motion.p
            key={active.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-center font-script text-4xl ${light ? 'text-navy' : 'text-paper'}`}
          >
            {active.name} · {active.hex}
          </motion.p>
        </Reveal>
      </div>
    </motion.section>
  )
}
