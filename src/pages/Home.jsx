import Page from '../components/layout/Page'
import Hero from '../components/home/Hero'
import Welcome from '../components/home/Welcome'
import Services from '../components/home/Services'
import Statement from '../components/home/Statement'
import FeaturedWork from '../components/home/FeaturedWork'
import Process from '../components/home/Process'
import Quotes from '../components/home/Quotes'
import Marquee from '../components/ui/Marquee'
import CTASection from '../components/ui/CTASection'

const ribbon = ['Ceremony arches', 'Floral design', 'Reception styling', 'Candlelight', 'Tablescapes', 'Aisle décor']

export default function Home({ ready = true }) {
  return (
    <Page>
      <Hero ready={ready} />
      <Marquee items={ribbon} />
      <Welcome />
      <Services />
      <FeaturedWork />
      <Statement />
      <Process />
      <Quotes />
      <CTASection />
    </Page>
  )
}
