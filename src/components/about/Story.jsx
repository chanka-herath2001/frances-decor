import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import { img } from '../../data/gallery'

// Centred copy flanked by two tilted photos that straighten as you scroll.
export default function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotL = useTransform(scrollYProgress, [0, 0.5], [-14, -4])
  const rotR = useTransform(scrollYProgress, [0, 0.5], [14, 4])
  const yL = useTransform(scrollYProgress, [0, 1], [60, -60])
  const yR = useTransform(scrollYProgress, [0, 1], [-30, 90])

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr_1fr]">
        <motion.div style={{ rotate: rotL, y: yL }} className="mx-auto w-3/4 max-w-xs shadow-2xl shadow-navy/20 lg:w-full">
          <img src={img('orchid-cascade-bride')} alt="Bride holding a cascading orchid bouquet" className="aspect-[3/4] w-full object-cover" loading="lazy" />
        </motion.div>

        <div className="text-center">
          <SectionTitle eyebrow="Enjoy yourself" title="Every detail, made by hand" />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-ink/75">
              Frances Decor began with a simple love of flowers and the way they change a room. Today we design ceremonies,
              receptions and intimate gatherings — always with the same care, and always by hand.
            </p>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink/75">
              We listen first. Your colours, your venue, the music you love and the way you want people to feel all become
              part of the design, so the finished space feels unmistakably yours.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-8 font-script text-5xl text-cornflower">with love, Frances</p>
          </Reveal>
        </div>

        <motion.div style={{ rotate: rotR, y: yR }} className="mx-auto hidden w-full max-w-xs shadow-2xl shadow-navy/20 lg:block">
          <img src={img('bride-staircase')} alt="Bride on a white staircase" className="aspect-[3/4] w-full object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>
  )
}
