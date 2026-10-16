import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { img } from '../../data/gallery'

// Editorial split with oversized vertical lettering that slides as you scroll.
export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['25%', '-25%'])
  const photoY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 4])

  return (
    <section ref={ref} className="relative grid overflow-hidden md:grid-cols-2">
      <div className="relative h-[520px] overflow-hidden md:h-[720px]">
        <img src={img('forest-aisle')} alt="" className="absolute inset-0 h-full w-full object-cover grayscale" loading="lazy" />
        <div className="absolute inset-0 bg-ink/30" />
        <motion.div
          style={{ y: photoY, rotate }}
          className="absolute left-[10%] top-[18%] w-[52%] border-[6px] border-paper shadow-2xl md:w-[48%]"
        >
          <img src={img('terracotta-roses-table')} alt="Garden roses in terracotta vases on a long table" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        </motion.div>
        <motion.p
          style={{ y: textY }}
          className="pointer-events-none absolute -right-3 top-0 hidden h-full select-none whitespace-nowrap font-serif text-[5.5rem] font-light uppercase leading-none text-paper/85 [writing-mode:vertical-rl] rotate-180 md:block lg:text-[7rem]"
        >
          Designed with love
        </motion.p>
      </div>

      <div className="relative flex items-center bg-blush px-6 py-20 sm:px-14">
        <motion.p
          style={{ y: textY }}
          className="pointer-events-none absolute left-2 top-0 select-none font-serif text-7xl font-light uppercase leading-none text-navy/10 [writing-mode:vertical-rl] md:hidden"
        >
          With love
        </motion.p>
        <Reveal className="mx-auto max-w-md text-center">
          <p className="eyebrow text-taupe">Say goodbye to stress</p>
          <h2 className="mt-5 font-serif text-4xl font-light uppercase leading-tight text-navy sm:text-5xl">
            Your journey to a flawless celebration begins with a plan
          </h2>
          <p className="mt-6 leading-relaxed text-ink/75">
            Leave the styling to us. From the first sketch to the last candle being lit, we look after the details so you can
            focus on the people and the moments that matter.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/about" variant="outline">How we work</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
