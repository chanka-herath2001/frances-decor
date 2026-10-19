import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import Story from '../components/about/Story'
import Journey from '../components/about/Journey'
import Values from '../components/about/Values'
import Palette from '../components/about/Palette'
import Marquee from '../components/ui/Marquee'
import CTASection from '../components/ui/CTASection'
import { img } from '../data/gallery'

export default function About() {
  return (
    <Page>
      <PageHero eyebrow="About Frances Decor" title="Our Story" script="flowers, light & love" image={img('white-orchid-church-arch')} badge="Designed by hand · With love · " />
      <Story />
      <Marquee items={['Personal', 'Abundant', 'Calm', 'Romantic', 'Timeless']} speed={30} />
      <Journey />
      <Values />
      <Palette />
      <CTASection title="Let’s Begin" />
    </Page>
  )
}
