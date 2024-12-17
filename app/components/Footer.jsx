import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Binary Bastions</h3>
            <p className="text-gray-400">
              Transforming businesses through creative digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#3B82F6] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#3B82F6] transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#3B82F6] transition-colors">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#3B82F6] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#3B82F6] transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3B82F6] transition-colors">App Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3B82F6] transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3B82F6] transition-colors">UI/UX Design</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Binary Bastions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

