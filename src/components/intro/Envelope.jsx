import { motion } from 'motion/react'

const ease = [0.65, 0, 0.35, 1]
const pocket = '[clip-path:polygon(0_0,50%_52%,100%_0,100%_100%,0_100%)]'
const flapShape = '[clip-path:polygon(0_0,100%_0,50%_100%)]'

function WaxSeal() {
  return (
    <div
      className="flex h-16 w-16 items-center justify-center rounded-[46%_54%_50%_50%/52%_46%_54%_48%] font-script text-3xl text-paper shadow-[inset_0_-4px_8px_rgba(0,0,0,.35),inset_0_4px_6px_rgba(255,255,255,.2),0_6px_14px_rgba(0,0,0,.3)] sm:h-20 sm:w-20"
      style={{ background: 'radial-gradient(circle at 40% 35%, #a8694b, #8d553c 55%, #402511)' }}
    >
      <span className="flex h-[72%] w-[72%] items-center justify-center rounded-full border border-paper/30 shadow-[inset_0_2px_4px_rgba(0,0,0,.35)]">F</span>
    </div>
  )
}

// Paper envelope: the seal pops, the flap folds back and the card slides out.
// stage 0 = sealed, 1 = opening, 2 = card out
export default function Envelope({ stage }) {
  return (
    <div className="relative mx-auto aspect-[3/2] w-[min(84vw,420px)] [perspective:1200px]">
      <div className="absolute inset-0 rounded-md bg-linen shadow-[0_30px_60px_rgba(30,15,8,.45)]" />

      {/* invitation card */}
      <motion.div
        className="absolute inset-x-[6%] top-[6%] z-[2] flex h-[88%] flex-col items-center rounded-sm bg-cream px-4 pt-[10%] text-center shadow-md"
        animate={{ y: stage >= 2 ? '-62%' : '0%' }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="absolute inset-2 border border-mahogany/20" />
        <img src="/images/logo.png" alt="" className="h-14 w-auto sm:h-16" />
      </motion.div>

      {/* front pocket */}
      <div className={`absolute inset-0 z-[3] rounded-md bg-[#e6dccb] ${pocket}`} />
      <div className={`absolute inset-0 z-[3] rounded-md bg-gradient-to-t from-black/5 to-transparent ${pocket}`} />

      {/* flap */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[62%] origin-top [transform-style:preserve-3d]"
        style={{ zIndex: stage >= 2 ? 1 : 4 }}
        animate={{ rotateX: stage >= 1 ? 180 : 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className={`absolute inset-0 bg-[#d3c0a8] ${flapShape}`} />
        <div className={`absolute inset-0 bg-linen [backface-visibility:hidden] [transform:rotateX(180deg)] ${flapShape}`} />
      </motion.div>

      {/* seal */}
      <motion.div
        className="absolute left-1/2 top-[52%] z-[5] -translate-x-1/2 -translate-y-1/2"
        animate={stage >= 1 ? { scale: [1, 1.25, 0], rotate: [0, -15, 30], opacity: [1, 1, 0] } : { scale: [1, 1.06, 1] }}
        transition={stage >= 1 ? { duration: 0.3 } : { duration: 1.8, repeat: Infinity }}
      >
        <WaxSeal />
      </motion.div>
    </div>
  )
}
