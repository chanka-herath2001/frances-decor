import { motion } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import FramedImage from '../ui/FramedImage'
import Reveal from '../ui/Reveal'
import { Rose, Butterfly } from '../ui/Botanical'
import { img } from '../../data/gallery'

const steps = [
  { image: img('mountain-vows'), text: 'It begins with a conversation — a few photos, a colour you love, a venue you can already picture.' },
  { image: img('seaside-canopy-ceremony'), text: 'We sketch, source and test, turning ideas into arches, aisles and tables you can walk through.' },
  { image: img('beach-arch-kiss'), text: 'And then the day arrives: the doors open, the candles are lit, and the room finally feels like you.' },
]

// Zig-zag "A Journey of Love" with hand-drawn dashed arrows between moments.
export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-mist/60 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionTitle eyebrow="Our philosophy" title="A Journey of Love" />
        <div className="mt-16 space-y-6">
          {steps.map((s, i) => {
            const flip = i % 2 === 1
            return (
              <div key={i}>
                <div className={`grid items-center gap-10 sm:grid-cols-2 ${flip ? 'sm:[direction:rtl]' : ''}`}>
                  <div className="[direction:ltr]">
                    <FramedImage src={s.image} imgClass="aspect-[4/3]" className="mx-auto max-w-sm" parallax={25} />
                  </div>
                  <Reveal from={flip ? 'left' : 'right'} className="relative [direction:ltr]">
                    <span className="font-serif text-7xl font-light text-navy/15">0{i + 1}</span>
                    <p className="-mt-6 max-w-xs font-serif text-2xl leading-snug text-navy">{s.text}</p>
                    {i === 0 && <Rose className="absolute -right-2 -top-8 hidden w-24 text-navy/50 sm:block" />}
                    {i === 1 && <Butterfly className="absolute -top-6 right-6 hidden w-20 text-navy/50 sm:block" />}
                  </Reveal>
                </div>
                {i < steps.length - 1 && <Arrow flip={flip} />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Arrow({ flip }) {
  return (
    <svg viewBox="0 0 300 90" className={`mx-auto h-20 w-64 text-navy/60 ${flip ? '-scale-x-100' : ''}`} fill="none" aria-hidden>
      <motion.path
        d="M40 10 C 90 80, 210 0, 255 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 7"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      <motion.path
        d="M243 64 l12 8 l2 -14"
        stroke="currentColor"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1.3 }}
      />
    </svg>
  )
}
