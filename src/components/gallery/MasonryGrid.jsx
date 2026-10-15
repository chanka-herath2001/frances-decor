import { AnimatePresence, motion } from 'motion/react'

const span = {
  tall: 'row-span-2',
  wide: 'col-span-2 row-span-2',
}

// Dense photo grid that re-flows with a smooth layout animation when the filter changes.
export default function MasonryGrid({ items, onOpen }) {
  return (
    <motion.ul layout className="grid grid-flow-dense auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {items.map((item, i) => (
          <motion.li
            layout
            key={item.id}
            className={`group relative overflow-hidden bg-mist ${span[item.shape] ?? ''}`}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6, delay: Math.min(i, 12) * 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            <button onClick={() => onOpen(item)} className="block h-full w-full cursor-zoom-in" aria-label={`Open ${item.title}`}>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block font-serif text-xl text-paper">{item.title}</span>
                <span className="eyebrow text-dusk">{item.category}</span>
              </span>
              <span className="absolute right-3 top-3 flex h-9 w-9 scale-50 items-center justify-center rounded-full bg-paper/90 text-navy opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                +
              </span>
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}
