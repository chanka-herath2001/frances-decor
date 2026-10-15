// Endless ribbon of words, like a florist's ribbon running across the page.
export default function Marquee({ items, className = '', speed = 40 }) {
  const row = [...items, ...items]
  return (
    <div className={`overflow-hidden border-y border-navy/15 py-5 ${className}`}>
      <div className="flex w-max" style={{ animation: `marquee ${speed}s linear infinite` }}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-serif text-2xl italic text-navy/80 sm:text-3xl">
            {t}
            <span className="text-base not-italic text-cornflower">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
