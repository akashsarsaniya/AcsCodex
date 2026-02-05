import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileBottomNav from './components/MobileBottomNav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SEO from './pages/SEO'
import Python from './pages/Python'
import AspNet from './pages/AspNet'
import NodeJs from './pages/NodeJs'
import DataEntry from './pages/DataEntry'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="sticky-social-bar">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-sticky-icon instagram"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            className="social-sticky-icon whatsapp"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/python" element={<Python />} />
          <Route path="/aspnet" element={<AspNet />} />
          <Route path="/nodejs" element={<NodeJs />} />
          <Route path="/dataentry" element={<DataEntry />} />
        </Routes>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  )
}

export default App

