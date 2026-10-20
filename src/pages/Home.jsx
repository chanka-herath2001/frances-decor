import Page from '../components/layout/Page'
import Hero from '../components/home/Hero'
import Welcome from '../components/home/Welcome'
import Services from '../components/home/Services'
import Statement from '../components/home/Statement'
import FeaturedWork from '../components/home/FeaturedWork'
import Process from '../components/home/Process'
import Quotes from '../components/home/Quotes'
import FeaturedSetups from '../components/home/FeaturedSetups'
import Reels from '../components/home/Reels'
import CTASection from '../components/ui/CTASection'

export default function Home({ ready = true }) {
  return (
    <Page>
      <Hero ready={ready} />
      <Reels />
      <Welcome />
      <Services />
      <FeaturedSetups />
      <FeaturedWork />
      <Statement />
      <Process />
      <Quotes />
      <CTASection />
    </Page>
  )
}
