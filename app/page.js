'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import ProfessionalBackground from './components/ui/professional-background'

export default function Home() {
  useEffect(() => {
    // This ensures the background takes up the full height of the page
    document.body.style.minHeight = '100vh'
    return () => {
      document.body.style.minHeight = ''
    }
  }, [])

  return (
    <>
      <ProfessionalBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

