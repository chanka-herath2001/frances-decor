import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Countdown from './Countdown'

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const fmt = (d) => d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

// Invitation-style calendar: pick your wedding date and watch the countdown begin.
export default function DatePicker({ value, onChange }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth() + 1, 1))
  const [dir, setDir] = useState(1)

  const year = view.getFullYear()
  const month = view.getMonth()
  const offset = (new Date(year, month, 1).getDay() + 6) % 7
  const total = new Date(year, month + 1, 0).getDate()
  const cells = [...Array(offset).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)]
  const canPrev = new Date(year, month, 1) > new Date(today.getFullYear(), today.getMonth(), 1)

  const shift = (n) => {
    setDir(n)
    setView(new Date(year, month + n, 1))
  }

  return (
    <div className="relative border border-dashed border-navy/40 bg-paper p-5 shadow-xl shadow-navy/5 sm:p-8">
      <p className="eyebrow text-center text-taupe">Happily ever after begins in</p>
      <Countdown date={value} />

      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => shift(-1)} disabled={!canPrev} className="h-10 w-10 rounded-full text-navy transition hover:bg-mist disabled:opacity-20" aria-label="Previous month">←</button>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.p
            key={`${year}-${month}`}
            className="font-serif text-2xl text-navy"
            initial={{ opacity: 0, x: dir * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -20 }}
            transition={{ duration: 0.25 }}
          >
            {view.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </motion.p>
        </AnimatePresence>
        <button onClick={() => shift(1)} className="h-10 w-10 rounded-full text-navy transition hover:bg-mist" aria-label="Next month">→</button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {DAYS.map((d, i) => (
          <span key={i} className="eyebrow py-2 text-navy/50">{d}</span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`e${i}`} />
          const date = new Date(year, month, d)
          const past = date < today
          const selected = value && date.getTime() === value.getTime()
          return (
            <button
              key={d}
              disabled={past}
              onClick={() => onChange(date)}
              className={`relative mx-auto flex h-9 w-9 items-center justify-center rounded-full font-serif text-lg transition sm:h-10 sm:w-10 ${
                selected ? 'text-paper' : past ? 'text-navy/20' : 'text-navy hover:bg-mist'
              }`}
              aria-pressed={selected}
              aria-label={fmt(date)}
            >
              {selected && (
                <motion.span layoutId="picked-day" className="absolute inset-0 rounded-full bg-navy ring-2 ring-navy ring-offset-2 ring-offset-paper" />
              )}
              <span className="relative">{d}</span>
            </button>
          )
        })}
      </div>

      <p className="mt-5 min-h-6 border-t border-navy/15 pt-4 text-center font-serif text-navy/80">
        {value ? `${fmt(value)} · Your wedding day` : 'Tap a date to begin your countdown'}
      </p>
    </div>
  )
}
