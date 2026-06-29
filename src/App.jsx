import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WAFloat from './components/layout/WAFloat'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Karting from './components/sections/Karting'
import AboutTaller from './components/sections/AboutTaller'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import ContactForm from './components/sections/ContactForm'
import FAQ from './components/sections/FAQ'
import Location from './components/sections/Location'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Karting />
        <AboutTaller />
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
