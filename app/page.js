'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

export default function Home() {
  useEffect(() => {
    // This ensures the background takes up the full height of the page
    document.body.style.minHeight = '100vh'
    // Optimize scrolling performance
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add scroll optimization
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
