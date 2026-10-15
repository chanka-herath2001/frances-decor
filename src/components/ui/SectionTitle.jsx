import Reveal, { RevealText } from './Reveal'

export default function SectionTitle({ eyebrow, title, script, align = 'center', light = false, className = '' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const tone = light ? 'text-paper' : 'text-navy'
  return (
    <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal from="fade">
          <p className={`eyebrow ${light ? 'text-paper/70' : 'text-taupe'}`}>{eyebrow}</p>
        </Reveal>
      )}
      <RevealText text={title} className={`font-serif text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl ${tone}`} />
      {script && (
        <Reveal from="up" delay={0.3}>
          <p className={`-mt-2 font-script text-3xl sm:text-4xl ${light ? 'text-dusk' : 'text-cornflower'}`}>{script}</p>
        </Reveal>
      )}
    </div>
  )
}
