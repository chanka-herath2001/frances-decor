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
    image: img('blush-arch-vows'),
    tone: 'mahogany',
  },
  {
    word: 'Bespoke',
    title: 'Full Wedding Design',
    text: 'One look carried from the welcome sign to the last dance — ceremony, reception and every detail between.',
    items: ['Concept & moodboard', 'Ceremony + reception', 'Bridal & party florals'],
    image: img('candle-head-table'),
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
  { title: 'A Sunset Promise', place: 'Seaside ceremony', image: img('sunset-aisle') },
  { title: 'Under the Canopy', place: 'Forest ceremony', image: img('forest-aisle') },
  { title: 'Blush & Branches', place: 'Indoor vows', image: img('blush-arch-vows') },
  { title: 'Moon Arch', place: 'Beach at golden hour', image: img('circle-arch-sunset') },
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
  { name: 'Olive', hex: '#9b9879' },
  { name: 'Moss', hex: '#6a6a53' },
  { name: 'Rust', hex: '#8d553c' },
  { name: 'Mahogany', hex: '#4d342d' },
]

// "Tropical Vows" setups. TODO: swap in the real tropical-vows photos once supplied
// (add them to public/images/photos and data/gallery.js, then list their ids here).
export const tropical = ['beach-aisle', 'seaside-drape-arch', 'circle-arch-sunset', 'sunset-aisle', 'lawn-arch']

// Content reels. Drop vertical videos into public/reels/ and set `video`,
// or set `href` to the Instagram reel link. Until then each tile shows its poster.
export const reels = [
  { title: 'Moon arch at sunset', poster: img('circle-arch-sunset'), video: null, href: null },
  { title: 'Building a floral wall', poster: img('floral-wall-couple'), video: null, href: null },
  { title: 'Candlelit head table', poster: img('candlelit-banquet'), video: null, href: null },
  { title: 'Bouquet in the making', poster: img('bride-red-bouquet'), video: null, href: null },
  { title: 'Aisle set-up', poster: img('candlelit-church-aisle'), video: null, href: null },
]

export const faqs = [
  { q: 'How early should we book?', a: 'Popular dates fill quickly, so we recommend reaching out as soon as you have your date and venue. Shorter timelines are sometimes possible — just ask.' },
  { q: 'Do you style both ceremony and reception?', a: 'Yes. We can design a single moment, like an arch or head table, or carry one look through the whole day.' },
  { q: 'Can we bring our own inspiration?', a: 'Please do. Pinterest boards, photos and colour swatches all help us understand what you love.' },
  { q: 'Do you travel to other venues?', a: 'We work across many venues — tell us where you are celebrating and we will talk through logistics.' },
  { q: 'Is there a minimum budget?', a: 'Every celebration is different. Share a rough budget in your inquiry and we will suggest what works best within it.' },
]
