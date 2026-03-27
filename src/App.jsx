import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Artech from './pages/Artech'
import SciVision from './pages/SciVision'
import SciPlay from './pages/SciPlay'
import Contact from './pages/Contact'
import CaseDetail from './pages/CaseDetail'
import EventDetail from './pages/EventDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Artech routes — independent sub-site, own nav/footer */}
        <Route path="artech" element={<Artech />} />
        <Route path="artech/:slug" element={<CaseDetail />} />
        <Route path="artech/event/:slug" element={<EventDetail />} />

        {/* Main site routes — shared Layout (Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="sci-vision" element={<SciVision />} />
          <Route path="sciplay" element={<SciPlay />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
