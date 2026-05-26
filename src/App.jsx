import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import WhatIsDyno from './components/WhatIsDyno'
import Karting from './components/Karting'
import Process from './components/Process'
import AboutTaller from './components/AboutTaller'
import Differential from './components/Differential'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Footer from './components/Footer'
import WAFloat from './components/WAFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhatIsDyno />
        <Karting />
        <Process />
        <AboutTaller />
        <Differential />
        <Gallery />
        <Testimonials />
        <ContactForm />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WAFloat />
    </>
  )
}
