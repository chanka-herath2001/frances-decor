import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { navLinks, contact, tagline } from '../../data/site'
import { stopScroll } from './SmoothScroll'
import { Rose } from '../ui/Botanical'

export default function MobileMenu({ onClose }) {
  useEffect(() => {
    stopScroll(true)
    return () => stopScroll(false)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[55] flex flex-col justify-between bg-navy px-8 pb-10 pt-28 text-paper md:hidden"
      initial={{ clipPath: 'circle(0% at 92% 4%)' }}
      animate={{ clipPath: 'circle(150% at 92% 4%)' }}
      exit={{ clipPath: 'circle(0% at 92% 4%)' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <Rose className="absolute -right-6 bottom-24 w-40 text-paper/15" />
      <ul className="space-y-4">
        {navLinks.map((l, i) => (
          <motion.li
            key={l.to}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
          >
            <NavLink
              to={l.to}
              end
              onClick={onClose}
              className={({ isActive }) => `flex items-baseline gap-4 font-serif text-5xl font-light ${isActive ? 'text-paper' : 'text-paper/60'}`}
            >
              <span className="eyebrow text-dusk">0{i + 1}</span>
              {l.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="space-y-2">
        <p className="font-script text-3xl text-dusk">{tagline[0]}</p>
        <a href={`mailto:${contact.email}`} className="eyebrow block text-paper/80">{contact.email}</a>
        <a href={`tel:${contact.phoneIntl}`} className="eyebrow block text-paper/80">{contact.phone}</a>
      </motion.div>
    </motion.div>
  )
}
