import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { stopScroll } from '../layout/SmoothScroll'

// Full-screen viewer: arrows / keyboard / swipe to browse, thumbnails to jump.
export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index]
  const dir = useRef(1)
  const thumbs = useRef(null)

  const go = (step) => {
    dir.current = step
    onChange((index + step + items.length) % items.length)
  }

  useEffect(() => {
    stopScroll(true)
    return () => stopScroll(false)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    thumbs.current?.children[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col bg-ink/95 text-paper backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="eyebrow text-paper/60">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        <button onClick={onClose} className="eyebrow link-line text-paper/80 hover:text-paper">Close ✕</button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4">
        <AnimatePresence mode="popLayout" custom={dir.current}>
          <motion.figure
            key={item.id}
            custom={dir.current}
            className="flex max-h-full flex-col items-center"
            initial={(d) => ({ opacity: 0, x: d * 120 })}
            animate={{ opacity: 1, x: 0 }}
            exit={(d) => ({ opacity: 0, x: d * -120 })}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1)
              else if (info.offset.x > 80) go(-1)
            }}
          >
            <img src={item.src} alt={item.title} draggable={false} className="max-h-[62svh] w-[min(88vw,760px)] select-none object-contain sm:max-h-[68svh]" />
            <figcaption className="mt-4 text-center">
              <span className="block font-serif text-2xl">{item.title}</span>
              <span className="eyebrow text-dusk">{item.category}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <NavBtn side="left" onClick={() => go(-1)} />
        <NavBtn side="right" onClick={() => go(1)} />
      </div>

      <div ref={thumbs} className="flex gap-2 overflow-x-auto px-5 py-4 sm:justify-center">
        {items.map((t, i) => (
          <button
            key={t.id}
            onClick={() => {
              dir.current = i > index ? 1 : -1
              onChange(i)
            }}
            className={`h-12 w-16 shrink-0 overflow-hidden transition-all duration-300 ${i === index ? 'opacity-100 ring-1 ring-paper' : 'opacity-40 hover:opacity-80'}`}
            aria-label={`Show ${t.title}`}
          >
            <img src={t.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

function NavBtn({ side, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous photo' : 'Next photo'}
      className={`absolute top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-xl transition hover:bg-paper hover:text-navy sm:flex ${side === 'left' ? 'left-6' : 'right-6'}`}
    >
      {side === 'left' ? '←' : '→'}
    </button>
  )
}
