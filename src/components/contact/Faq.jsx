import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { Branch } from '../ui/Botanical'
import { faqs } from '../../data/site'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative overflow-hidden bg-mist/60 py-24 md:py-32">
      <Branch className="absolute -right-12 top-16 w-72 -rotate-[140deg] text-navy/20" />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionTitle eyebrow="Good to know" title="Questions & Answers" />
        <ul className="mt-12 border-t border-navy/20">
          {faqs.map((f, i) => {
            const on = open === i
            return (
              <Reveal as="li" key={f.q} delay={i * 0.06} className="border-b border-navy/20">
                <button
                  onClick={() => setOpen(on ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={on}
                >
                  <span className={`font-serif text-2xl transition-colors ${on ? 'text-navy' : 'text-navy/75'}`}>{f.q}</span>
                  <motion.span
                    animate={{ rotate: on ? 45 : 0 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/40 text-xl text-navy"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 leading-relaxed text-ink/75">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
