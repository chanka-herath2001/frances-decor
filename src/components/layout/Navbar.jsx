import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { navLinks } from '../../data/site'
import MobileMenu from './MobileMenu'

// Split nav like the "A Charmed Affair" header: links either side of a centred logo.
export default function Navbar() {
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 60)
    setHidden(y > 400 && y > prev && !open)
  })

  useEffect(() => setOpen(false), [pathname])

    const half = Math.ceil(navLinks.length / 2)
  const linkCls = ({ isActive }) =>
    `eyebrow link-line transition-opacity ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 transition-colors duration-500 ${open ? 'z-[56] bg-transparent' : 'z-50'} ${solid && !open ? 'bg-paper/90 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <nav className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 ${solid ? 'py-2' : 'py-4'} transition-all duration-500 text-navy`}>
          <ul className="hidden gap-10 md:flex">
            {navLinks.slice(0, half).map((l) => (
              <li key={l.to}><NavLink to={l.to} end className={linkCls}>{l.label}</NavLink></li>
            ))}
          </ul>
          <span className="md:hidden" />
          <Link to="/" aria-label="Frances Decor home" className={`relative block transition-opacity ${open ? "opacity-0" : ""}`}>
            <img
              src="/images/logo.png"
              alt="Frances Decor"
              className={`transition-all duration-500 ${solid ? 'h-14' : 'h-20 sm:h-24'}`}
            />
          </Link>
          <div className="flex items-center justify-end gap-10">
            <ul className="hidden gap-10 md:flex">
              {navLinks.slice(half).map((l) => (
                <li key={l.to}><NavLink to={l.to} className={linkCls}>{l.label}</NavLink></li>
              ))}
            </ul>
            <button
              onClick={() => setOpen((o) => !o)}
              className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className={`block h-px w-7 ${open ? 'bg-paper' : 'bg-current'}`} />
              <motion.span animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }} className={`block h-px w-7 ${open ? 'bg-paper' : 'bg-current'}`} />
            </button>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}
