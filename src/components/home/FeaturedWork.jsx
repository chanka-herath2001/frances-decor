import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import { featured } from '../../data/site'

// Pinned horizontal scroll: vertical scrolling slides the featured celebrations sideways.
export default function FeaturedWork() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-62%'])
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} className="relative h-[320vh] bg-paper">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-6xl px-5 sm:px-8">
          <SectionTitle align="left" eyebrow="Selected celebrations" title="Enchanted Events" />
        </div>
        <motion.div style={{ x }} className="flex w-max gap-6 pl-5 sm:gap-10 sm:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          {featured.map((f, i) => (
            <Card key={f.title} item={f} index={i} />
          ))}
          <Link
            to="/gallery"
            className="group flex w-[70vw] shrink-0 flex-col items-center justify-center gap-4 border border-navy/30 text-navy sm:w-[26rem]"
          >
            <span className="font-script text-5xl text-cornflower">and many more</span>
            <span className="eyebrow link-line">Open the gallery →</span>
          </Link>
        </motion.div>
        <div className="mx-auto mt-10 h-px w-full max-w-6xl bg-navy/15 px-5">
          <motion.div style={{ width: bar }} className="h-px bg-navy" />
        </div>
      </div>
    </section>
  )
}

function Card({ item, index }) {
  return (
    <Link to="/gallery" className="group relative block w-[78vw] shrink-0 sm:w-[30rem]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/0 transition-colors duration-700 group-hover:bg-navy/25" />
        <span className="absolute left-4 top-4 font-serif text-5xl font-light text-paper/90">0{index + 1}</span>
      </div>
      <div className="mt-5 flex items-end justify-between">
        <div>
          <h3 className="font-serif text-2xl uppercase tracking-[0.15em] text-navy">{item.title}</h3>
          <p className="mt-1 font-script text-2xl text-cornflower">{item.place}</p>
        </div>
        <span className="eyebrow link-line text-navy/70">Explore</span>
      </div>
    </Link>
  )
}
