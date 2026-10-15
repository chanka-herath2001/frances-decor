import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { Butterfly } from '../ui/Botanical'
import { process } from '../../data/site'

// Invitation-style timeline: the centre line draws itself as you scroll.
export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <Butterfly className="absolute right-[8%] top-24 w-20 text-navy/50 sm:w-28" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionTitle eyebrow="How it works" title="From Hello to Happily" script="our gentle process" />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-navy/15 md:left-1/2" />
          <motion.div style={{ scaleY }} className="absolute left-4 top-0 h-full w-px origin-top bg-navy md:left-1/2" />

          <ol className="space-y-16">
            {process.map((p, i) => {
              const right = i % 2 === 1
              return (
                <li key={p.step} className="relative grid md:grid-cols-2 md:gap-16">
                  <motion.span
                    className="absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border border-navy bg-paper md:left-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, backgroundColor: '#2b3f63' }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <Reveal
                    from={right ? 'right' : 'left'}
                    className={`pl-12 md:pl-0 ${right ? 'md:col-start-2' : 'md:text-right'}`}
                  >
                    <p className="eyebrow text-taupe">{p.time}</p>
                    <h3 className="mt-2 font-serif text-4xl font-light text-navy">{p.step}</h3>
                    <p className={`mt-3 max-w-sm leading-relaxed text-ink/70 ${right ? '' : 'md:ml-auto'}`}>{p.text}</p>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
