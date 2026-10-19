import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { RevealText } from './Reveal'
import { NouveauPanel } from './Nouveau'
import CircleText from './CircleText'

// Shared inner-page header: oversized serif title beside an arched photo window.
export default function PageHero({ eyebrow, title, script, image, badge = 'Frances Decor · Est. with love · ', children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25])

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper pb-16 pt-32 sm:pt-40 md:pb-24">
      <NouveauPanel className="pointer-events-none absolute -left-8 top-16 w-28 sm:w-40" opacity={0.4} />
      <div className="relative mx-auto grid max-w-6xl items-end gap-12 px-5 sm:px-8 md:grid-cols-[1.25fr_1fr]">
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.p
            className="eyebrow mb-5 text-taupe"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {eyebrow}
          </motion.p>
          <RevealText as="h1" text={title} delay={0.6} className="font-serif text-6xl font-light uppercase leading-[0.9] text-navy sm:text-8xl lg:text-9xl" />
          {script && (
            <motion.p
              className="mt-3 font-script text-4xl text-cornflower sm:text-5xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {script}
            </motion.p>
          )}
          {children}
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-3 rounded-t-full border border-navy/40" />
          <motion.div style={{ y: imgY }} className="relative aspect-[3/4] overflow-hidden rounded-t-full">
            <motion.img src={image} alt="" style={{ scale }} className="h-full w-full object-cover" />
          </motion.div>
          <CircleText text={badge} className="absolute -bottom-10 -left-10 h-28 w-28 sm:h-32 sm:w-32" />
        </motion.div>
      </div>
    </section>
  )
}
