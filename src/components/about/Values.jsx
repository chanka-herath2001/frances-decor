import { useState } from 'react'
import { motion } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { img } from '../../data/gallery'

const values = [
  { title: 'Personal', image: img(17), text: 'No two weddings look the same, because no two couples are the same. Every design starts with you.' },
  { title: 'Abundant', image: img(36), text: 'Generous florals, layered textures and greenery that feels gathered, never sparse.' },
  { title: 'Calm', image: img(47), text: 'Clear plans, honest timelines and a team that arrives early, so the day feels effortless.' },
]

// Cards that flip to reveal the story behind each value (hover on desktop, tap on mobile).
export default function Values() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="What we believe" title="Tailored Solutions" script="for every occasion" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.12} from="up">
              <FlipCard {...v} />
            </Reveal>
          ))}
        </div>
        <p className="eyebrow mt-8 text-center text-navy/50 lg:hidden">Tap a card to turn it over</p>
      </div>
    </section>
  )
}

function FlipCard({ title, image, text }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button
      className="group block aspect-[3/4] w-full [perspective:1200px]"
      onClick={() => setFlipped((f) => !f)}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setFlipped(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setFlipped(false)}
      aria-pressed={flipped}
      aria-label={`${title}: ${text}`}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <p className="absolute bottom-6 left-0 right-0 text-center font-serif text-4xl font-light uppercase tracking-[0.2em] text-paper">
            {title}
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center border border-navy/30 bg-paper p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="font-script text-5xl text-cornflower">{title}</span>
          <span className="mt-5 block h-px w-12 bg-navy/40" />
          <p className="mt-5 font-serif text-xl leading-relaxed text-navy">{text}</p>
        </div>
      </motion.div>
    </button>
  )
}
