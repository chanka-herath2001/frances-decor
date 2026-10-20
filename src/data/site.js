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
    text: 'Arches, aisles and altars styled to frame your vows.',
    image: img('peach-drape-poruwa'),
    tone: 'mahogany',
  },
  {
    word: 'Bespoke',
    title: 'Full Wedding Design',
    text: 'One cohesive look, from the welcome sign to the last dance.',
    image: img('white-arch-head-table'),
    tone: 'olive',
    featured: true,
  },
  {
    word: 'Tables',
    title: 'Reception & Florals',
    text: 'Tablescapes, centrepieces and bouquets that carry the night.',
    image: img('terracotta-centrepiece'),
    tone: 'mahogany',
  },
]

export const process = [
  { step: 'Consult', text: 'We listen to your story.' },
  { step: 'Design', text: 'A look shaped around your venue.' },
  { step: 'Create', text: 'Every bloom arranged by hand.' },
  { step: 'Celebrate', text: 'You simply enjoy the day.' },
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
  { name: 'Beige', hex: '#e8dcc7' },
  { name: 'Linen', hex: '#ddccb7' },
  { name: 'Olive', hex: '#81763e' },
  { name: 'Moss', hex: '#6a6a53' },
  { name: 'Rust', hex: '#8d553c' },
  { name: 'Dark Brown', hex: '#402511' },
]

// Featured setups, grouped into outdoor (seaside, garden) and indoor collections
export const setups = [
  {
    id: 'seaside',
    label: 'Seaside Ceremonies',
    kind: 'Outdoor',
    text: 'Sea breeze, open skies and arches dressed in white blooms and greenery — vows with the ocean as your backdrop.',
    photos: ['beach-monstera-aisle', 'beach-arch-kiss', 'beach-floral-mandap', 'monstera-arch-couple', 'beach-floral-aisle', 'seaside-canopy-ceremony', 'barefoot-vows'],
  },
  {
    id: 'garden',
    label: 'Garden Soirées',
    kind: 'Outdoor',
    text: 'Lawns, forest clearings and mountain views, softened with floral arches, rattan and candlelight.',
    photos: ['mountain-ceremony-benches', 'forest-white-arch', 'garden-arch-aisle', 'peach-drape-poruwa', 'courtyard-ceremony', 'garden-staircase', 'floating-drapes-palms'],
  },
  {
    id: 'interiors',
    label: 'Grand Interiors',
    kind: 'Indoor',
    text: 'Ballrooms, chapels and glasshouses transformed with cascading florals, drapery and a glow of candles.',
    photos: ['white-arch-head-table', 'cathedral-aisle-blooms', 'white-orchid-church-arch', 'ivory-swag-head-table', 'blue-white-head-table', 'draped-ceiling-head-table', 'glasshouse-reception-lights'],
  },
]

// Content reels: compressed 540p clips in public/reels/ (posters are the frame at ~2s).
export const reels = [
  { title: 'Cinnamon Bentota', poster: '/reels/26-03-2026-cinnamon-bentota-poruwa-reception.jpg', video: '/reels/26-03-2026-cinnamon-bentota-poruwa-reception.mp4', href: null },
  { title: 'Hilton', poster: '/reels/29-01-2026-hilton.jpg', video: '/reels/29-01-2026-hilton.mp4', href: null },
  { title: 'Marriott Weligama', poster: '/reels/26-01-2026-marriott-weligama.jpg', video: '/reels/26-01-2026-marriott-weligama.mp4', href: null },
  { title: 'Villa by CC', poster: '/reels/11-01-2026-villa-by-cc.jpg', video: '/reels/11-01-2026-villa-by-cc.mp4', href: null },
  { title: 'La Belle Époque', poster: '/reels/27-12-2025-la-belle-epoque.jpg', video: '/reels/27-12-2025-la-belle-epoque.mp4', href: null },
  { title: 'Taj Samudra', poster: '/reels/14-12-2025-taj-samudra.jpg', video: '/reels/14-12-2025-taj-samudra.mp4', href: null },
  { title: 'Palm welcome', poster: '/reels/video-2025-11-11-10-27-39-pm.jpg', video: '/reels/video-2025-11-11-10-27-39-pm.mp4', href: null },
  { title: 'Welcome backdrop', poster: '/reels/video-2025-08-07-7-02-17-am.jpg', video: '/reels/video-2025-08-07-7-02-17-am.mp4', href: null },
  { title: 'Island love', poster: '/reels/video-2025-07-22-9-31-22-am.jpg', video: '/reels/video-2025-07-22-9-31-22-am.mp4', href: null },
  { title: 'Mehendi florals', poster: '/reels/video-2025-06-30-10-25-29-am.jpg', video: '/reels/video-2025-06-30-10-25-29-am.mp4', href: null },
  { title: 'Garden gathering', poster: '/reels/video-2025-04-12-10-16-14-pm.jpg', video: '/reels/video-2025-04-12-10-16-14-pm.mp4', href: null },
  { title: 'White bloom carpet', poster: '/reels/video-2025-03-19-8-00-35-am.jpg', video: '/reels/video-2025-03-19-8-00-35-am.mp4', href: null },
  { title: 'Floating candles', poster: '/reels/video-2025-03-07-6-27-44-am.jpg', video: '/reels/video-2025-03-07-6-27-44-am.mp4', href: null },
  { title: 'Heliconia & ginger', poster: '/reels/video-2024-12-15-9-34-34-am.jpg', video: '/reels/video-2024-12-15-9-34-34-am.mp4', href: null },
  { title: 'Seating chart details', poster: '/reels/video-2024-11-24-9-03-40-am.jpg', video: '/reels/video-2024-11-24-9-03-40-am.mp4', href: null },
  { title: 'Candlelit corridor', poster: '/reels/video-2024-11-21-1-39-49-pm.jpg', video: '/reels/video-2024-11-21-1-39-49-pm.mp4', href: null },
]

export const faqs = [
  { q: 'How early should we book?', a: 'Popular dates fill quickly, so we recommend reaching out as soon as you have your date and venue. Shorter timelines are sometimes possible — just ask.' },
  { q: 'Do you style both ceremony and reception?', a: 'Yes. We can design a single moment, like an arch or head table, or carry one look through the whole day.' },
  { q: 'Can we bring our own inspiration?', a: 'Please do. Pinterest boards, photos and colour swatches all help us understand what you love.' },
  { q: 'Do you travel to other venues?', a: 'We work across many venues — tell us where you are celebrating and we will talk through logistics.' },
  { q: 'Is there a minimum budget?', a: 'Every celebration is different. Share a rough budget in your inquiry and we will suggest what works best within it.' },
]

// Meet the Team — fill in name, role and photo (e.g. '/images/team/name.webp') as portraits arrive.
export const team = Array.from({ length: 6 }, () => ({ name: '', role: '', photo: null }))
