'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features' // Add this import
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

export default function Home() {
  useEffect(() => {
    document.body.style.minHeight = '100vh'
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.overflowX = 'hidden'
    
    return () => {
      document.body.style.minHeight = ''
      document.documentElement.style.scrollBehavior = ''
      document.body.style.overflowX = ''
    }
  }, [])

  return (
    <div 
      className="relative z-10 will-change-scroll"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #000000 100%)'
      }}
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Features /> {/* Add this line */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
