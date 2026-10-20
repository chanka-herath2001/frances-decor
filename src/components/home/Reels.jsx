import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { NouveauCrown } from '../ui/Nouveau'
import { reels, contact } from '../../data/site'

// Showcase strip of vertical reels that drifts slowly sideways on its own.
// Each clip autoplays (muted) only while it is on screen; hover pauses the drift, a tap toggles sound.
export default function Reels({ tone = 'bg-mahogany' }) {
  const loop = [...reels, ...reels]
  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${tone}`}>
      <div className="mx-auto mb-12 flex max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <p className="eyebrow text-linen/80">In motion</p>
        <h2 className="mt-3 font-serif text-4xl font-light uppercase tracking-[0.12em] text-paper sm:text-5xl">Moments We’ve Styled</h2>
        <NouveauCrown className="mt-5 w-48" />
      </div>

      <div className="group">
        <ul
          className="flex w-max gap-5 group-hover:[animation-play-state:paused] sm:gap-7"
          style={{ animation: `marquee ${reels.length * 9}s linear infinite` }}
        >
          {loop.map((r, i) => (
            <Reel key={`${r.video}-${i}`} reel={r} />
          ))}
        </ul>
      </div>

      <div className="mt-12 text-center">
        <a href={contact.instagram} target="_blank" rel="noreferrer" className="eyebrow link-line text-linen">
          More on Instagram →
        </a>
      </div>
    </section>
  )
}

function Reel({ reel }) {
  const ref = useRef(null)
  const video = useRef(null)
  const inView = useInView(ref, { amount: 0.5 })
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (!video.current) return
    if (inView) video.current.play().catch(() => {})
    else video.current.pause()
  }, [inView])

  return (
    <li ref={ref} className="relative aspect-[9/16] w-56 shrink-0 overflow-hidden rounded-2xl bg-bark shadow-2xl ring-1 ring-linen/20 sm:w-72">
      <video
        ref={video}
        src={reel.video}
        poster={reel.poster}
        muted={muted}
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
        onClick={() => setMuted((m) => !m)}
      />
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-xs text-paper backdrop-blur-sm" aria-hidden>
        {muted ? '🔇' : '🔊'}
      </span>
    </li>
  )
}
