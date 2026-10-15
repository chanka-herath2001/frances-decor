import { motion } from 'motion/react'

const swing = { duration: 1.8, ease: [0.65, 0, 0.35, 1] }

function Leaf({ side, open }) {
  const isLeft = side === 'left'
  return (
    <motion.div
      className="relative h-full w-1/2 bg-navy shadow-[inset_0_0_40px_rgba(0,0,0,.35)]"
      style={{ transformOrigin: isLeft ? 'left center' : 'right center' }}
      animate={{ rotateY: open ? (isLeft ? -105 : 105) : 0 }}
      transition={swing}
    >
      {/* moulded panels */}
      <div className="absolute inset-x-[14%] top-[30%] bottom-[44%] border border-paper/25" />
      <div className="absolute inset-x-[14%] top-[60%] bottom-[8%] border border-paper/25" />
      <div className={`absolute inset-y-0 ${isLeft ? 'right-0' : 'left-0'} w-px bg-ink/60`} />
      {/* handle */}
      <div className={`absolute top-[52%] ${isLeft ? 'right-[8%]' : 'left-[8%]'} h-10 w-1.5 rounded-full bg-[#c9b48e] shadow`} />
    </motion.div>
  )
}

// Arched double door. Children render in the room behind it.
export default function Door({ open, behind }) {
  return (
    <div className="relative mx-auto aspect-[3/5] w-[min(62vw,300px,30svh)]">
      {/* outer arch moulding */}
      <div className="absolute -inset-4 rounded-t-full border-[10px] border-linen shadow-[0_20px_60px_rgba(43,63,99,.25)]" />
      <div className="absolute -inset-5 rounded-t-full border border-navy/50" />
      <div className="absolute inset-0 overflow-hidden rounded-t-full [perspective:1400px]">
        <div className="absolute inset-0">{behind}</div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,240,220,.9),transparent_60%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? [0, 1, 0.3] : 0 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
        <div className="relative flex h-full w-full">
          <Leaf side="left" open={open} />
          <Leaf side="right" open={open} />
        </div>
      </div>
      {/* threshold step */}
      <div className="absolute -bottom-5 left-1/2 h-3 w-[130%] -translate-x-1/2 rounded-sm bg-linen shadow-md" />
    </div>
  )
}
