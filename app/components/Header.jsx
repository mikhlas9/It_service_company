'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 pt-3 pb-1">
        <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
            {/* Logo for all screens */}
            <Image
              src="/logo2.png" // Update this path to match your file location in the `public` folder
              alt="Binary Bastions Logo"
              width={60} // Adjust width as needed
              height={60} // Adjust height as needed
              className="mr-2"
            />
            {/* Text for larger screens only */}
            <span className="hidden md:block text-2xl font-bold text-[#3B82F6]">Binary Bastions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-[#3B82F6] transition-colors">
              Services
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-[#3B82F6] transition-colors">
              Courses
            </Link>
            <Link href="/internships" className="text-gray-700 hover:text-[#3B82F6] transition-colors">
              Internships
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#3B82F6] transition-colors">
              About
            </Link>
            <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-full hover:bg-[#2563EB] transition-colors">
            <Link href="/contact">
              Contact
            </Link>
            </button>
          </div>
         

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-[#3B82F6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            
              <Link 
                href="/courses" 
                className="text-gray-700 hover:text-[#3B82F6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/internships" 
                className="text-gray-700 hover:text-[#3B82F6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Internships
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-[#3B82F6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-full hover:bg-[#2563EB] transition-colors w-full">
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              </button>
            </div>
          </div>
        )}
      </nav>
      <motion.div
        className="h-0.5 bg-gradient-to-r from-white via-blue-400 to-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </header>
  )
}

