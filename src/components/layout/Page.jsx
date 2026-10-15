import { motion } from 'motion/react'
import Footer from './Footer'

// Wraps each route: curtain-style fade on enter/exit plus the shared footer.
export default function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 z-[70] origin-top bg-navy"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        exit={{ scaleY: 0 }}
      />
      <main>{children}</main>
      <Footer />
    </motion.div>
  )
}
