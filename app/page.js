import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <>
    
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        {/* <Clients /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

