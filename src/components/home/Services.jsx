import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import { NouveauBorder } from '../ui/Nouveau'
import { services } from '../../data/site'

const tones = {
  mahogany: { card: 'bg-mahogany text-paper', word: 'text-linen/80', button: 'bg-linen text-mahogany hover:bg-paper' },
  olive: { card: 'bg-olive text-paper', word: 'text-paper/85', button: 'bg-mahogany text-paper hover:bg-bark' },
}

// Three tall service cards with a vertical word over each photo (mahogany / olive / mahogany).
export default function Services() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-32">
      <NouveauBorder side="left" opacity={0.4} />
      <NouveauBorder side="right" opacity={0.4} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="Ways to work together" title="Our Services" />
        <div className="mt-16 grid items-center gap-6 md:grid-cols-3 md:gap-8">
          {services.map((s, i) => (
            <Card key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ s, i }) {
  const t = tones[s.tone]
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl p-5 shadow-[0_18px_40px_rgba(64,37,17,.25)] ${t.card} ${s.featured ? 'md:py-9' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/35 to-transparent" />
        <span
          className={`absolute bottom-2 right-1 font-serif text-4xl font-light uppercase leading-none tracking-wide [writing-mode:vertical-rl] lg:text-5xl ${t.word}`}
          aria-hidden
        >
          {s.word}
        </span>
      </div>
      <h3 className="mt-6 text-center font-serif text-2xl uppercase tracking-[0.12em]">{s.title}</h3>
      <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed opacity-85">{s.text}</p>
      <ul className="mt-4 space-y-1 text-center text-xs uppercase tracking-[0.2em] opacity-75">
        {s.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center">
        <Link to="/contact" className={`rounded-md px-6 py-2 eyebrow transition-colors ${t.button}`}>
          Enquire
        </Link>
      </div>
    </motion.article>
  )
}
