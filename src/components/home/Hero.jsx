import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Button from '../ui/Button'
import CircleText from '../ui/CircleText'
import Petals from '../ui/Petals'
import { Branch } from '../ui/Botanical'
import { img } from '../../data/gallery'
import { tagline } from '../../data/site'

const ease = [0.22, 1, 0.36, 1]
const rise = (d) => ({ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 1.1, delay: d, ease } } })

export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yMain = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const ySmall = useTransform(scrollYProgress, [0, 1], ['0%', '-45%'])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const state = ready ? 'show' : 'hidden'

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-paper pb-20 pt-32 md:pt-36">
      <Petals count={10} />
      <Branch className="absolute -right-10 top-28 w-72 -rotate-[30deg] text-navy/15" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.div style={{ y: yText }} initial="hidden" animate={state} className="relative z-10 text-center lg:text-left">
          <motion.p variants={rise(0.2)} className="eyebrow text-taupe">Wedding & Event Styling</motion.p>
          <h1 className="mt-6 font-serif font-light uppercase leading-[0.85] text-navy">
            <motion.span variants={rise(0.35)} className="block text-[19vw] sm:text-[8rem] lg:text-[9.5rem]">Frances</motion.span>
            <motion.span
              variants={rise(0.6)}
              className="-mt-4 block font-script text-[14vw] normal-case leading-none text-cornflower sm:-mt-8 sm:text-[6rem] lg:ml-40"
            >
              Decor
            </motion.span>
          </h1>
          <motion.p variants={rise(0.8)} className="mx-auto mt-6 max-w-md font-serif text-xl italic text-ink/70 lg:mx-0">
            {tagline.join(' ')}
          </motion.p>
          <motion.p variants={rise(0.9)} className="mx-auto mt-4 max-w-md leading-relaxed text-ink/70 lg:mx-0">
            Floral arches, candlelit receptions and every soft detail in between — designed around the two of you.
          </motion.p>
          <motion.div variants={rise(1)} className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button to="/contact">Plan your day</Button>
            <Button to="/gallery" variant="outline">View gallery</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[480px] w-full max-w-md sm:h-[580px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.3, ease }}
        >
          <motion.div style={{ y: yMain }} className="absolute right-0 top-0 h-[85%] w-[78%]">
            <div className="absolute -inset-3 rounded-t-full border border-navy/40" />
            <div className="h-full overflow-hidden rounded-t-full shadow-2xl shadow-navy/20">
              <motion.img
                src={img('floral-wall-couple')}
                alt="Couple beneath a floral wall"
                className="h-full w-full object-cover"
                initial={{ scale: 1.3 }}
                animate={ready ? { scale: 1 } : {}}
                transition={{ duration: 2.4, ease }}
              />
            </div>
          </motion.div>
          <motion.div style={{ y: ySmall }} className="absolute bottom-6 left-0 w-[46%] border-[6px] border-paper shadow-xl">
            <img src={img('circle-arch-sunset')} alt="Floral moon arch at sunset" className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <CircleText text="Weddings · Events · Florals · " className="absolute right-[-8px] bottom-0 h-28 w-28 sm:h-32 sm:w-32" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy/60 md:flex"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.6 }}
      >
        <span className="eyebrow">Scroll to begin</span>
        <motion.span className="h-10 w-px bg-navy/50" animate={{ scaleY: [0, 1, 0], originY: 0 }} transition={{ repeat: Infinity, duration: 2 }} />
      </motion.div>
    </section>
  )
}
