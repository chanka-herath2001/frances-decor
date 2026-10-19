import { useState } from 'react'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/ui/Reveal'
import ContactCards from '../components/contact/ContactCards'
import DatePicker from '../components/contact/DatePicker'
import InquiryForm from '../components/contact/InquiryForm'
import Faq from '../components/contact/Faq'
import { NouveauSprig } from '../components/ui/Nouveau'
import { img } from '../data/gallery'

export default function Contact() {
  const [date, setDate] = useState(null)

  return (
    <Page>
      <PageHero eyebrow="Contact" title="Say Hello" script="we’d love to hear your story" image={img('pastel-posy')} badge="Kindly respond · With love · " />
      <ContactCards />

      <section className="relative py-16 md:py-24">
        <NouveauSprig className="absolute left-6 top-0 hidden w-16 lg:block" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle eyebrow="Save the date" title="Tell Us About Your Day" script="pick a date, share the details" />
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
            <Reveal from="left" className="lg:sticky lg:top-28">
              <DatePicker value={date} onChange={setDate} />
            </Reveal>
            <Reveal from="right">
              <InquiryForm date={date} />
            </Reveal>
          </div>
        </div>
      </section>

      <Faq />
    </Page>
  )
}
