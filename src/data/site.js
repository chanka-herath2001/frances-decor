import { img } from './gallery'

export const contact = {
  email: 'hello@francesdecor.com',
  phone: '0776116045',
  phoneIntl: '+94776116045',
  // TODO: replace with the real profile links
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
}

export const tagline = ['She had love on her lips', 'and flowers in her hair…']

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  { no: '01', title: 'Ceremony Arches', text: 'Floral arches, draped canopies and moon gates that frame your vows.', image: img(3) },
  { no: '02', title: 'Reception Styling', text: 'Head tables, tablescapes and lighting that carry the night.', image: img(11) },
  { no: '03', title: 'Bridal Florals', text: 'Bouquets and buttonholes composed around you and your dress.', image: img(24) },
  { no: '04', title: 'Aisles & Entrances', text: 'Corridors, aisles and welcome moments that set the first impression.', image: img(14) },
  { no: '05', title: 'Signage & Details', text: 'Welcome signs, candles and the small touches guests remember.', image: img(41) },
]

export const process = [
  { step: 'Consult', time: 'Step one', text: 'We meet, listen and learn the story you want your day to tell.' },
  { step: 'Design', time: 'Step two', text: 'Moodboards, palettes and floral recipes shaped around your venue.' },
  { step: 'Create', time: 'Step three', text: 'Our team sources, builds and arranges every bloom and drape.' },
  { step: 'Celebrate', time: 'The day', text: 'We style, set and step back — so you can simply be present.' },
]

export const featured = [
  { title: 'A Sunset Promise', place: 'Seaside ceremony', image: img(32) },
  { title: 'Under the Canopy', place: 'Forest ceremony', image: img(2) },
  { title: 'Blush & Branches', place: 'Indoor vows', image: img(3) },
  { title: 'Moon Arch', place: 'Beach at golden hour', image: img(46) },
]

export const quotes = [
  'Every wedding is a story — we simply set the scene for it.',
  'Flowers speak the words that are hardest to say.',
  'Details are not details. They make the design.',
  'A room should feel like the two people who fill it.',
]

export const palette = [
  { name: 'Ivory', hex: '#f6f2ea' },
  { name: 'Mist', hex: '#dbe4ec' },
  { name: 'Dusk', hex: '#b6c6d6' },
  { name: 'Cornflower', hex: '#6f8fb8' },
  { name: 'Navy', hex: '#2b3f63' },
  { name: 'Blush', hex: '#ead9d3' },
]

export const faqs = [
  { q: 'How early should we book?', a: 'Popular dates fill quickly, so we recommend reaching out as soon as you have your date and venue. Shorter timelines are sometimes possible — just ask.' },
  { q: 'Do you style both ceremony and reception?', a: 'Yes. We can design a single moment, like an arch or head table, or carry one look through the whole day.' },
  { q: 'Can we bring our own inspiration?', a: 'Please do. Pinterest boards, photos and colour swatches all help us understand what you love.' },
  { q: 'Do you travel to other venues?', a: 'We work across many venues — tell us where you are celebrating and we will talk through logistics.' },
  { q: 'Is there a minimum budget?', a: 'Every celebration is different. Share a rough budget in your inquiry and we will suggest what works best within it.' },
]
