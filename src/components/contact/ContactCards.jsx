import Reveal from '../ui/Reveal'
import { contact } from '../../data/site'

const cards = [
  { label: 'Write to us', value: contact.email, href: `mailto:${contact.email}`, icon: 'M3 6h18v12H3zM3 6l9 7 9-7' },
  { label: 'Call or WhatsApp', value: contact.phone, href: `tel:${contact.phoneIntl}`, icon: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z' },
  { label: 'Instagram', value: 'Follow our latest work', href: contact.instagram, icon: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', external: true },
  { label: 'Facebook', value: 'Say hello & see reviews', href: contact.facebook, icon: 'M14 8h3V4h-3c-2.8 0-4 1.7-4 4.2V10H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.4.3-.5.6-.5z', external: true },
]

export default function ContactCards() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Reveal as="li" key={c.label} delay={i * 0.1}>
            <a
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noreferrer' : undefined}
              className="group relative flex h-full flex-col items-center overflow-hidden border border-navy/20 px-6 py-10 text-center transition-colors duration-500 hover:text-paper"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-current text-navy transition-colors duration-500 group-hover:text-paper">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden>
                  <path d={c.icon} />
                </svg>
              </span>
              <span className="eyebrow relative mt-5 text-taupe transition-colors duration-500 group-hover:text-dusk">{c.label}</span>
              <span className="relative mt-2 break-all font-serif text-xl text-navy transition-colors duration-500 group-hover:text-paper">{c.value}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
