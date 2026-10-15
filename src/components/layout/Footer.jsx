import { Link } from 'react-router-dom'
import { contact, navLinks, tagline } from '../../data/site'
import { Divider } from '../ui/Botanical'
import Reveal from '../ui/Reveal'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-paper shadow-[0_0_0_6px_rgba(246,242,234,.12)]">
            <img src="/images/logo.png" alt="Frances Decor" className="h-24" />
          </div>
          <p className="mt-4 font-script text-3xl text-dusk sm:text-4xl">{tagline.join(' ')}</p>
          <Divider className="mt-6 w-56 text-paper/40" />
        </Reveal>

        <div className="mt-14 grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="eyebrow mb-4 text-dusk">Explore</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-line font-serif text-xl text-paper/85">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4 text-dusk">Say hello</p>
            <a href={`mailto:${contact.email}`} className="link-line block font-serif text-xl text-paper/85">{contact.email}</a>
            <a href={`tel:${contact.phoneIntl}`} className="link-line mt-2 block font-serif text-xl text-paper/85">{contact.phone}</a>
          </div>
          <div>
            <p className="eyebrow mb-4 text-dusk">Follow</p>
            <div className="flex justify-center gap-3 sm:justify-start">
              <Social href={contact.facebook} label="Facebook" d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.2V10H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.4.3-.5.6-.5z" />
              <Social href={contact.instagram} label="Instagram" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Frances Decor. All rights reserved.</p>
          <p className="eyebrow">Weddings · Events · Florals</p>
        </div>
      </div>
    </footer>
  )
}

function Social({ href, label, d }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 transition-all duration-500 hover:-translate-y-1 hover:bg-paper hover:text-navy"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d={d} fillRule="evenodd" /></svg>
    </a>
  )
}
