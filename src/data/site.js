import { img } from './gallery'

export const contact = {
  email: 'hello@francesdecor.com',
  phone: '0776116045',
  phoneIntl: '+94776116045',
  // TODO: replace with the real profile links
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

// Three collections, shown as tall cards (mahogany / olive / mahogany)
export const services = [
  {
    word: 'Vows',
    title: 'Ceremony Styling',
    text: 'Floral arches, draped canopies, aisles and altars that frame the moment you say “I do”.',
    items: ['Arches & moon gates', 'Aisle florals & candles', 'Church & garden styling'],
    image: img('peach-drape-poruwa'),
    tone: 'mahogany',
  },
  {
    word: 'Bespoke',
    title: 'Full Wedding Design',
    text: 'One look carried from the welcome sign to the last dance — ceremony, reception and every detail between.',
    items: ['Concept & moodboard', 'Ceremony + reception', 'Bridal & party florals'],
    image: img('white-arch-head-table'),
    tone: 'olive',
    featured: true,
  },
  {
    word: 'Tables',
    title: 'Reception & Florals',
    text: 'Head tables, centrepieces, bouquets and the candlelit glow that carries the night.',
    items: ['Head tables & centrepieces', 'Bouquets & buttonholes', 'Welcome signs & details'],
    image: img('terracotta-centrepiece'),
    tone: 'mahogany',
  },
]

export const process = [
  { step: 'Consult', time: 'Step one', text: 'We meet, listen and learn the story you want your day to tell.' },
  { step: 'Design', time: 'Step two', text: 'Moodboards, palettes and floral recipes shaped around your venue.' },
  { step: 'Create', time: 'Step three', text: 'Our team sources, builds and arranges every bloom and drape.' },
  { step: 'Celebrate', time: 'The day', text: 'We style, set and step back — so you can simply be present.' },
]

export const featured = [
  { title: 'Terracotta Supper', place: 'Long-table reception', image: img('terracotta-long-tables') },
  { title: 'Seaside Vows', place: 'Beach ceremony', image: img('beach-floral-aisle') },
  { title: 'Ceremony With a View', place: 'Mountain valley', image: img('mountain-ceremony-benches') },
  { title: 'Peach Poruwa', place: 'Garden ceremony', image: img('peach-drape-poruwa') },
  { title: 'Monstera Arch', place: 'Beach ceremony', image: img('beach-monstera-arch') },
]

export const quotes = [
  'Every wedding is a story — we simply set the scene for it.',
  'Flowers speak the words that are hardest to say.',
  'Details are not details. They make the design.',
  'A room should feel like the two people who fill it.',
]

export const palette = [
  { name: 'Egg Shell', hex: '#ede7db' },
  { name: 'Linen', hex: '#ddccb7' },
  { name: 'Olive', hex: '#81763e' },
  { name: 'Moss', hex: '#6a6a53' },
  { name: 'Rust', hex: '#8d553c' },
  { name: 'Dark Brown', hex: '#402511' },
]

// "Tropical Vows" setups. TODO: swap in the real tropical-vows photos once supplied
// (add them to public/images/photos and data/gallery.js, then list their ids here).
export const tropical = ['beach-monstera-aisle', 'beach-arch-kiss', 'beach-floral-mandap', 'monstera-arch-couple', 'beach-floral-aisle', 'seaside-canopy-ceremony', 'barefoot-vows']

// Content reels. Drop vertical videos into public/reels/ and set `video`,
// or set `href` to the Instagram reel link. Until then each tile shows its poster.
export const reels = [
  { title: 'Monstera arch by the sea', poster: img('beach-monstera-arch'), video: null, href: null },
  { title: 'A forest arch', poster: img('forest-white-arch'), video: null, href: null },
  { title: 'Lantern glow', poster: img('lantern-reception'), video: null, href: null },
  { title: 'Bouquet in the making', poster: img('orchid-cascade-bride'), video: null, href: null },
  { title: 'Aisle set-up', poster: img('cathedral-aisle-blooms'), video: null, href: null },
]

export const faqs = [
  { q: 'How early should we book?', a: 'Popular dates fill quickly, so we recommend reaching out as soon as you have your date and venue. Shorter timelines are sometimes possible — just ask.' },
  { q: 'Do you style both ceremony and reception?', a: 'Yes. We can design a single moment, like an arch or head table, or carry one look through the whole day.' },
  { q: 'Can we bring our own inspiration?', a: 'Please do. Pinterest boards, photos and colour swatches all help us understand what you love.' },
  { q: 'Do you travel to other venues?', a: 'We work across many venues — tell us where you are celebrating and we will talk through logistics.' },
  { q: 'Is there a minimum budget?', a: 'Every celebration is different. Share a rough budget in your inquiry and we will suggest what works best within it.' },
]
