import { motion } from 'motion/react'
import Button from './Button'
import Reveal from './Reveal'
import { NouveauAccents } from './Nouveau'
import { img } from '../../data/gallery'

// Closing call-to-action with a wax-seal envelope.
export default function CTASection({ text = 'Tell us about your date, your venue and the feeling you want guests to walk into. We will reply within a few days.' }) {
  return (
    <section className="relative overflow-hidden bg-mist py-24 md:py-32">
      <NouveauAccents />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
        <Reveal from="left" className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/3] -rotate-3 overflow-hidden shadow-2xl shadow-navy/20">
            <img src={img('beach-floral-aisle')} alt="Beach aisle lined with flowers" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-10 -right-4 flex h-44 w-64 rotate-6 items-center justify-center bg-dusk shadow-xl sm:w-72">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-[#cdb9a0] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
            <motion.div
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-paper font-script text-2xl text-navy shadow-[inset_0_0_0_3px_#ddccb7,0_4px_12px_rgba(0,0,0,.2)]"
              whileInView={{ rotate: [0, -12, 8, 0], scale: [0.6, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              F
            </motion.div>
          </div>
        </Reveal>
        <Reveal from="right" className="text-center md:text-left">
          <p className="mx-auto max-w-md font-serif text-2xl leading-relaxed text-navy md:mx-0">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button to="/contact">Start an inquiry</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
