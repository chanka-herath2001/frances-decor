import { motion } from 'motion/react'

// Art Nouveau tulip vines, after the client's mirrored watercolour wallpaper reference:
// sinuous olive stems with a pale inner line, long blade leaves, rust tulips and buds, soft lilac accents.
const C = { stem: '#81763e', light: '#c9c19a', tulip: '#8d553c', lilac: '#a99cab' }

const STEMS = [
  'M70 600C40 520 95 470 70 400S40 300 66 230S86 140 60 96',
  'M72 600C104 560 22 520 30 470S92 380 86 330S20 250 34 200S96 120 90 62C88 38 70 28 60 40',
]
const LEAVES = [
  'M66 300C40 272 30 240 32 210C46 240 58 266 66 300Z',
  'M70 420C96 396 106 366 100 340C88 370 78 396 70 420Z',
  'M68 520C40 500 28 470 30 444C44 470 58 494 68 520Z',
  'M64 160C84 140 92 116 88 92C80 116 70 138 64 160Z',
]
const LILAC = ['M84 246c10-6 15 7 7 15-7 6-13-4-7-15Z', 'M26 486c9-7 15 5 8 14-6 6-13-3-8-14Z', 'M78 548c9-4 12 8 4 13-6 3-10-6-4-13Z']
const BUDS = [
  [34, 200, -18],
  [88, 330, 20],
]

function Half({ animate }) {
  const draw = animate
    ? { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { duration: 2.4, ease: 'easeInOut' } }
    : {}
  const pop = animate
    ? { initial: { opacity: 0, scale: 0.6 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.8, delay: 1.6 } }
    : {}
  return (
    <g>
      {STEMS.map((d) => (
        <g key={d}>
          <motion.path d={d} fill="none" stroke={C.stem} strokeWidth="6" strokeLinecap="round" opacity="0.85" {...draw} />
          <motion.path d={d} fill="none" stroke={C.light} strokeWidth="1.6" strokeLinecap="round" {...draw} />
        </g>
      ))}
      {LEAVES.map((d) => (
        <motion.path key={d} d={d} fill={C.stem} opacity="0.7" style={{ transformOrigin: 'center', transformBox: 'fill-box' }} {...pop} />
      ))}
      {LILAC.map((d) => (
        <motion.path key={d} d={d} fill={C.lilac} opacity="0.75" {...pop} />
      ))}
      {BUDS.map(([x, y, r]) => (
        <motion.ellipse key={x} cx={x} cy={y} rx="6" ry="11" fill={C.tulip} transform={`rotate(${r} ${x} ${y})`} {...pop} />
      ))}
      <motion.g style={{ transformOrigin: '58px 72px' }} {...pop}>
        <path d="M58 94C44 90 40 72 44 56L50 67L57 50L63 67L71 55C75 72 71 90 58 94Z" fill={C.tulip} />
        <path d="M57 54V88M50 68C52 80 54 86 57 90M64 68C62 80 60 86 57 90" stroke="#f1e2cf" strokeWidth="1" fill="none" opacity="0.7" />
      </motion.g>
    </g>
  )
}

// Mirrored vertical panel (one column of the wallpaper).
export function NouveauPanel({ className = 'w-40', animate = true, opacity = 1 }) {
  return (
    <svg viewBox="0 0 200 600" className={className} style={{ opacity }} aria-hidden>
      <Half animate={animate} />
      <g transform="translate(200 0) scale(-1 1)">
        <Half animate={animate} />
      </g>
    </svg>
  )
}

// Single tulip sprig cropped from the top of one vine — the small accent beside headings.
export function NouveauSprig({ className = 'w-20', flip = false }) {
  // A complete stand-alone stem: curled root, two blade leaves, a bud and the tulip head.
  const draw = { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { duration: 1.8, ease: 'easeInOut' } }
  const pop = { initial: { opacity: 0, scale: 0.6 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.7, delay: 1.1 } }
  const stem = 'M30 190C17 166 41 148 31 120S18 72 32 44'
  return (
    <svg viewBox="0 0 64 210" className={className} style={flip ? { transform: 'scaleX(-1)' } : undefined} aria-hidden>
      <motion.path d={stem} fill="none" stroke={C.stem} strokeWidth="4.5" strokeLinecap="round" opacity="0.85" {...draw} />
      <motion.path d={stem} fill="none" stroke={C.light} strokeWidth="1.2" strokeLinecap="round" {...draw} />
      <motion.path d="M30 190c-8 6-18 2-16-7 2-7 11-7 13-1" fill="none" stroke={C.stem} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" {...draw} />
      <motion.path d="M31 120C42 112 47 103 47 93" fill="none" stroke={C.stem} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" {...draw} />
      <motion.g style={{ transformOrigin: 'center', transformBox: 'fill-box' }} {...pop}>
        <path d="M30 150C12 138 7 121 9 106C19 121 27 134 30 150Z" fill={C.stem} opacity="0.7" />
        <path d="M25 86C44 76 52 60 50 46C42 60 32 72 25 86Z" fill={C.stem} opacity="0.7" />
        <path d="M42 146c8-6 14 4 8 12-6 5-12-3-8-12Z" fill={C.lilac} opacity="0.75" />
        <ellipse cx="47" cy="87" rx="5" ry="9" fill={C.tulip} />
        <path d="M32 48C21 45 18 31 21 20L26 28L32 14L38 28L43 20C46 31 43 45 32 48Z" fill={C.tulip} />
        <path d="M32 18V44M26 30C27 39 29 43 32 46M38 30C37 39 35 43 32 46" stroke="#f1e2cf" strokeWidth="0.9" fill="none" opacity="0.7" />
      </motion.g>
    </svg>
  )
}

// Small crowning tulip with mirrored swirls — used as a section divider.
export function NouveauCrown({ className = 'w-56' }) {
  return (
    <motion.svg
      viewBox="0 0 240 60"
      className={className}
      initial={{ opacity: 0, y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-hidden
    >
      <g fill="none" stroke={C.stem} strokeWidth="3.5" strokeLinecap="round" opacity="0.85">
        <path d="M120 22C96 4 60 10 40 26C28 36 12 34 4 26" />
        <path d="M120 22C144 4 180 10 200 26C212 36 228 34 236 26" />
        <path d="M120 22C104 30 84 32 70 28M120 22C136 30 156 32 170 28" strokeWidth="2" />
      </g>
      <path d="M120 52C110 50 106 38 109 28L114 35L120 24L126 35L131 28C134 38 130 50 120 52Z" fill={C.tulip} />
    </motion.svg>
  )
}

// Section accent like the home hero: one large vine panel on one side and a smaller one on the other.
// `flip` swaps the sides so neighbouring sections alternate. Hidden on phones so it never sits under text.
export function NouveauAccents({ flip = false, opacity = 0.45 }) {
  const big = flip ? '-left-6' : '-right-6'
  const small = flip ? '-right-8' : '-left-8'
  return (
    <>
      <NouveauPanel className={`pointer-events-none absolute top-10 hidden w-36 md:block lg:w-48 ${big}`} opacity={opacity} />
      <NouveauPanel className={`pointer-events-none absolute bottom-0 hidden w-24 lg:block lg:w-28 ${small}`} opacity={opacity * 0.7} />
    </>
  )
}

// Repeating vertical border strip of the pattern (sits along a section edge).
const tile = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 600"><g fill="none" stroke="${C.stem}" stroke-width="6" stroke-linecap="round" opacity=".8">${STEMS.map((d) => `<path d="${d}"/><path transform="translate(200 0) scale(-1 1)" d="${d}"/>`).join('')}</g><g fill="${C.stem}" opacity=".65">${LEAVES.map((d) => `<path d="${d}"/><path transform="translate(200 0) scale(-1 1)" d="${d}"/>`).join('')}</g><g fill="${C.lilac}" opacity=".7">${LILAC.map((d) => `<path d="${d}"/><path transform="translate(200 0) scale(-1 1)" d="${d}"/>`).join('')}</g><g fill="${C.tulip}"><path d="M58 94C44 90 40 72 44 56L50 67L57 50L63 67L71 55C75 72 71 90 58 94Z"/><path transform="translate(200 0) scale(-1 1)" d="M58 94C44 90 40 72 44 56L50 67L57 50L63 67L71 55C75 72 71 90 58 94Z"/></g></svg>`,
)

// Hidden on phones so it never sits under text.
export function NouveauBorder({ side = 'left', className = 'hidden md:block', width = 'w-20 lg:w-28', opacity = 0.55 }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 ${side === 'left' ? 'left-0' : 'right-0'} ${width} bg-repeat-y ${className}`}
      style={{ backgroundImage: `url("data:image/svg+xml,${tile}")`, backgroundSize: '100% auto', opacity }}
      aria-hidden
    />
  )
}
