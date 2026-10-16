import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { contact } from '../../data/site'
import Field from './Field'

const SERVICES = ['Ceremony arch', 'Reception styling', 'Bridal florals', 'Aisle & entrance', 'Signage & details']
const EVENTS = ['Wedding', 'Engagement', 'Other celebration']

// "Kindly Respond" inquiry card. Opens the visitor's email app with everything filled in.
export default function InquiryForm({ date }) {
  const [form, setForm] = useState({ name: '', partner: '', email: '', phone: '', venue: '', guests: 150, message: '' })
  const [event, setEvent] = useState(EVENTS[0])
  const [picked, setPicked] = useState([])
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      `Name: ${form.name}${form.partner ? ` & ${form.partner}` : ''}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Event: ${event}`,
      `Date: ${date ? date.toDateString() : 'Not decided yet'}`,
      `Venue: ${form.venue || '—'}`,
      `Guests: about ${form.guests}`,
      `Interested in: ${picked.join(', ') || '—'}`,
      '',
      form.message,
    ]
    const subject = `${event} inquiry — ${form.name}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
    setSent(true)
  }

  return (
    <div className="relative bg-paper p-6 shadow-xl shadow-navy/5 ring-1 ring-navy/10 sm:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="done" className="flex min-h-[420px] flex-col items-center justify-center text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-navy font-script text-4xl text-paper"
              initial={{ rotate: -30, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              F
            </motion.div>
            <h3 className="mt-6 font-serif text-4xl text-navy">Thank you, {form.name.split(' ')[0] || 'friend'}</h3>
            <p className="mt-3 max-w-sm text-ink/70">Your email app should have opened with your note ready to send. We can’t wait to hear more.</p>
            <button onClick={() => setSent(false)} className="eyebrow link-line mt-8 text-navy">Edit my inquiry</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
            <p className="eyebrow text-taupe">RSVP · Inquiry</p>
            <h3 className="mt-2 font-serif text-4xl text-navy sm:text-5xl">Kindly Respond</h3>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {EVENTS.map((ev) => (
                <label key={ev} className="flex cursor-pointer items-center gap-2 text-sm text-navy">
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full border border-navy`}>
                    {event === ev && <motion.span layoutId="event-dot" className="h-2 w-2 rounded-full bg-navy" />}
                  </span>
                  <input type="radio" name="event" className="sr-only" checked={event === ev} onChange={() => setEvent(ev)} />
                  {ev}
                </label>
              ))}
            </div>

            <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
              <Field label="Your name" value={form.name} onChange={set('name')} required autoComplete="name" />
              <Field label="Partner’s name" value={form.partner} onChange={set('partner')} />
              <Field label="Email" type="email" value={form.email} onChange={set('email')} required autoComplete="email" />
              <Field label="Phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
              <Field label="Venue (if known)" value={form.venue} onChange={set('venue')} className="sm:col-span-2" />
            </div>

            <label className="mt-6 block">
              <span className="eyebrow flex justify-between text-navy/60">
                Guests <span className="font-serif text-lg normal-case tracking-normal text-navy">~{form.guests}</span>
              </span>
              <input type="range" min="20" max="600" step="10" value={form.guests} onChange={set('guests')} className="mt-3 w-full accent-navy" />
            </label>

            <p className="eyebrow mt-6 text-navy/60">I’m dreaming of</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <motion.button
                  type="button"
                  key={s}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => toggle(s)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${picked.includes(s) ? 'border-navy bg-navy text-paper' : 'border-navy/30 text-navy hover:border-navy'}`}
                >
                  {s}
                </motion.button>
              ))}
            </div>

            <Field label="Tell us about your day" as="textarea" value={form.message} onChange={set('message')} />

            <p className="mt-4 text-sm text-navy/60">Date: <span className="font-serif text-base text-navy">{date ? date.toDateString() : 'pick one on the calendar'}</span></p>
            <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-3 bg-navy py-4 text-paper transition hover:bg-ink sm:w-auto sm:px-12">
              <span className="eyebrow">Send inquiry</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
