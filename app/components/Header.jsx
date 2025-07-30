'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }

  const itemVariants = {
    closed: { 
      opacity: 0,
      y: -20
    },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  }

  const menuItems = [
    { href: '/services', label: 'Services' },
    // { href: '/courses', label: 'Courses' },
    // { href: '/internships', label: 'Internships' },
    { href: '/about', label: 'About Us' }
  ]

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 relative ${
          isScrolled
            ? 'bg-gray-900'
            : isOpen
            ? 'bg-transparent'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 pt-3 pb-2">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center relative z-60">
              <Image
                src="/logo2.png"
                alt="Binary Bastions Logo"
                width={60}
                height={60}
                className="mr-2"
              />
              <span
                className={`hidden md:block text-2xl font-bold ${
                  isScrolled ? 'text-[#3B82F6]' : 'text-white'
                }`}
              >
                Binary Bastions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-white hover:text-[#3B82F6] transition-colors">
                Services
              </Link>
              {/* <Link href="/courses" className="text-white hover:text-[#3B82F6] transition-colors">
                Courses
              </Link>
              <Link href="/internships" className="text-white hover:text-[#3B82F6] transition-colors">
                Internships
              </Link> */}
              <Link href="/about" className="text-white hover:text-[#3B82F6] transition-colors">
                About Us
              </Link>

              <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-full hover:bg-[#2563EB] transition-colors">
                <Link href="/contact">Contact</Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white relative z-60 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </nav>

        {/* Full-width gradient bar - animates from center */}
        {!isOpen && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-blue-400 to-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: 'center' }}
          />
        )}
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              {/* Optional: Add some decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#3B82F6] rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
            </div>

            {/* Menu Content */}
            <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-6">
              <div className="flex flex-col items-center space-y-8">
                {/* Menu Items */}
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={item.href}
                      className="text-3xl md:text-4xl font-medium text-white hover:text-[#3B82F6] transition-all duration-300 hover:scale-110 block text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Contact Button */}
                <motion.div
                  custom={menuItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-8"
                >
                  <button className="bg-[#3B82F6] text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-[#2563EB] hover:scale-105 transition-all duration-300 shadow-lg">
                    <Link 
                      href="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      Contact Us
                    </Link>
                  </button>
                </motion.div>

                {/* Social Links or Additional Info */}
                <motion.div
                  custom={menuItems.length + 1}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-12"
                >
                  <p className="text-gray-400 text-center text-lg">
                    Transform your digital dreams into reality
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
