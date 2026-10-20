import { motion } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import { NouveauSprig } from '../ui/Nouveau'
import { team } from '../../data/site'

// "Meet the Team" grid. Members without a photo yet show an arched placeholder,
// so the section can go live now and fill in as portraits arrive (data/site.js → team).
export default function Team() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="The people behind the blooms" title="Meet the Team" />
        <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8">
          {team.map((m, i) => (
            <motion.li
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12 }}
            >
              <div className="group relative mx-auto aspect-[3/4] w-full max-w-[16rem] overflow-hidden rounded-t-full border border-mahogany/15 bg-linen/60">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3">
                    <NouveauSprig className="w-10 opacity-80" />
                    <span className="eyebrow text-moss/80">Portrait coming soon</span>
                  </div>
                )}
              </div>
              {m.name && <p className="mt-4 font-serif text-2xl text-navy">{m.name}</p>}
              {m.role && <p className="eyebrow mt-1 text-taupe">{m.role}</p>}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
