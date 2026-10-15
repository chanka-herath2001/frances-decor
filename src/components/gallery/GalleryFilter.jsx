import { motion } from 'motion/react'
import { categories } from '../../data/gallery'

export default function GalleryFilter({ active, onChange, counts }) {
  return (
    <div className="sticky top-[72px] z-30 -mx-5 mb-10 overflow-x-auto bg-paper/85 px-5 py-4 backdrop-blur-md sm:mx-0 sm:px-0">
      <ul className="mx-auto flex w-max gap-2 sm:gap-3" role="tablist">
        {categories.map((c) => {
          const on = active === c.id
          return (
            <li key={c.id}>
              <button
                role="tab"
                aria-selected={on}
                onClick={() => onChange(c.id)}
                className={`relative rounded-full px-4 py-2 eyebrow transition-colors duration-300 sm:px-5 ${on ? 'text-paper' : 'text-navy/70 hover:text-navy'}`}
              >
                {on && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-navy"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {c.label}
                  <sup className="ml-1 opacity-60">{counts[c.id]}</sup>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
