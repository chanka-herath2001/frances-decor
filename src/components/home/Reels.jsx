import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import { reels, contact } from '../../data/site'

// Vertical content reels. Plays muted when in view if a video is set; otherwise shows the poster
// and links out to the reel (or the Instagram profile).
export default function Reels({ tone = 'bg-mahogany' }) {
  return (
    <section className={`relative overflow-hidden py-24 md:py-32 ${tone}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="Behind the blooms" title="Content Reels" light />
      </div>
      <ul className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:gap-6 sm:px-8">
        {reels.map((r, i) => (
          <Reel key={r.title} reel={r} index={i} />
        ))}
      </ul>
      <div className="mt-10 text-center">
        <a href={contact.instagram} target="_blank" rel="noreferrer" className="eyebrow link-line text-linen">
          Follow on Instagram →
        </a>
      </div>
    </section>
  )
}

function Reel({ reel, index }) {
  const ref = useRef(null)
  const video = useRef(null)
  const inView = useInView(ref, { amount: 0.6 })
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (!video.current) return
    if (inView) video.current.play().catch(() => {})
    else video.current.pause()
  }, [inView])

  const Wrap = reel.video ? 'div' : 'a'
  const link = reel.video ? {} : { href: reel.href ?? contact.instagram, target: '_blank', rel: 'noreferrer' }

  return (
    <motion.li
      ref={ref}
      className="relative aspect-[9/16] w-52 shrink-0 snap-center overflow-hidden rounded-2xl bg-bark shadow-xl sm:w-60"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      <Wrap className="group block h-full w-full" {...link} aria-label={reel.title}>
        {reel.video ? (
          <video ref={video} src={reel.video} poster={reel.poster} muted={muted} loop playsInline preload="none" className="h-full w-full object-cover" />
        ) : (
          <img src={reel.poster} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        {!reel.video && (
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/70 bg-black/20 text-paper backdrop-blur-sm transition-transform group-hover:scale-110">
            ▶
          </span>
        )}
        <span className="absolute left-3 top-3 eyebrow text-paper/90">Reel</span>
        <p className="absolute inset-x-3 bottom-4 font-serif text-lg leading-tight text-paper">{reel.title}</p>
      </Wrap>
      {reel.video && (
        <button
          onClick={() => setMuted((m) => !m)}
          className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 eyebrow text-paper"
          aria-label={muted ? 'Unmute reel' : 'Mute reel'}
        >
          {muted ? 'Sound off' : 'Sound on'}
        </button>
      )}
    </motion.li>
  )
}
