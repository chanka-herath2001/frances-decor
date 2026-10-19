import { useMemo, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import GalleryFilter from '../components/gallery/GalleryFilter'
import MasonryGrid from '../components/gallery/MasonryGrid'
import Lightbox from '../components/gallery/Lightbox'
import FilmStrip from '../components/gallery/FilmStrip'
import Reels from '../components/home/Reels'
import CTASection from '../components/ui/CTASection'
import { gallery, categories, img } from '../data/gallery'

const counts = Object.fromEntries(
  categories.map((c) => [c.id, c.id === 'all' ? gallery.length : gallery.filter((g) => g.category === c.id).length]),
)

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null) // { list, index }

  const items = useMemo(() => (filter === 'all' ? gallery : gallery.filter((g) => g.category === filter)), [filter])

  const openIn = (list) => (item) => setOpen({ list, index: list.findIndex((g) => g.id === item.id) })

  return (
    <Page>
      <PageHero eyebrow="Portfolio" title="Gallery" script="moments we’ve dressed in flowers" image={img('lantern-reception')} badge="Ceremonies · Receptions · Florals · " />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <SectionTitle eyebrow="Browse by moment" title="Our Work" className="mb-6" />
        <GalleryFilter active={filter} onChange={setFilter} counts={counts} />
        <MasonryGrid items={items} onOpen={openIn(items)} />
      </section>

      <FilmStrip onOpen={openIn(gallery)} />
      <Reels tone="bg-moss" />
      <CTASection title="Picture Yours" />

      <AnimatePresence>
        {open && (
          <Lightbox
            items={open.list}
            index={open.index}
            onClose={() => setOpen(null)}
            onChange={(index) => setOpen((o) => ({ ...o, index }))}
          />
        )}
      </AnimatePresence>
    </Page>
  )
}
