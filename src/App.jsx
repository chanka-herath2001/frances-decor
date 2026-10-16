import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import EnvelopeIntro from './components/intro/EnvelopeIntro'
import Navbar from './components/layout/Navbar'
import SmoothScroll, { scrollToTop } from './components/layout/SmoothScroll'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const INTRO_KEY = 'fd-opened'

function hasEntered() {
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const location = useLocation()
  const [entered, setEntered] = useState(hasEntered)

  const enter = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* storage unavailable — intro simply shows again next time */
    }
    setEntered(true)
  }

  return (
    <SmoothScroll paused={!entered}>
      <AnimatePresence>{!entered && <EnvelopeIntro key="letter" onOpen={enter} />}</AnimatePresence>
      <Navbar />
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home ready={entered} />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home ready={entered} />} />
        </Routes>
      </AnimatePresence>
    </SmoothScroll>
  )
}
