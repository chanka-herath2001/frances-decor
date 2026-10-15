import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

// Photo with invitation-style corner brackets and an optional parallax drift.
export default function FramedImage({ src, alt = '', className = '', imgClass = 'aspect-[4/5]', parallax = 40, frame = true }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax])

  // IntersectionObserver ignores clipped elements, so the wrapper triggers the reveal.
  return (
    <motion.div ref={ref} className={`relative ${className}`} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {frame && (
        <>
          <span className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-navy/70" />
          <span className="absolute -right-3 -top-3 h-10 w-10 border-r border-t border-navy/70" />
          <span className="absolute -bottom-3 -left-3 h-10 w-10 border-b border-l border-navy/70" />
          <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-navy/70" />
        </>
      )}
      <motion.div
        className={`relative overflow-hidden ${imgClass}`}
        variants={{ hidden: { clipPath: 'inset(100% 0 0 0)' }, show: { clipPath: 'inset(0% 0 0 0)' } }}
        transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ y }}
          className="absolute -top-10 left-0 h-[calc(100%+80px)] w-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
