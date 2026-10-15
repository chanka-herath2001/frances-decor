import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import FramedImage from '../ui/FramedImage'
import Button from '../ui/Button'
import { Rose } from '../ui/Botanical'
import { img } from '../../data/gallery'

export default function Welcome() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 md:grid-cols-2">
        <div className="relative">
          <FramedImage src={img(41)} alt="Welcome sign surrounded by candles" imgClass="aspect-[5/4]" />
          <Reveal from="up" delay={0.4} className="absolute -bottom-12 right-2 w-48 rotate-[-4deg] bg-paper p-5 shadow-xl shadow-navy/10 sm:right-[-30px] sm:w-56">
            <p className="font-script text-3xl leading-tight text-navy">All the beautiful things ahead</p>
            <span className="mt-2 block text-right text-cornflower">♡</span>
          </Reveal>
        </div>

        <div className="relative pt-10 md:pt-0">
          <Rose className="absolute -top-16 right-0 w-24 text-navy/40 sm:w-32" />
          <SectionTitle align="left" eyebrow="Welcome" title="We’re so glad you’re here." />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md leading-relaxed text-ink/75">
              Frances Decor creates wedding and event styling that feels personal, romantic and quietly unforgettable. From a
              single floral arch to a full reception, we shape every space around the story of the people celebrating in it.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-ink/75">
              Think soft drapery, candlelight, abundant greenery and blooms arranged by hand — the kind of room that makes
              guests pause the moment they walk in.
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-8 flex items-center gap-6">
            <p className="font-script text-4xl text-cornflower">Frances</p>
            <Button to="/about" variant="outline">Our story</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
