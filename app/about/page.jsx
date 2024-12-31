'use client'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import Header from '../components/Header';
import Footer from '../components/Footer';


const features = [
  "Modern Development Practices",
  "Creative Design Solutions",
  "24/7 Support Available",
  "Scalable Architecture",
  "Agile Methodology",
  "Cutting-edge Technologies"
]


export default function About() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              About Binary Bastions
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming ideas into digital reality with innovation and expertise
            </p>
          </div>
          <div className="flex justify-center">
            <div className="text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Build Amazing
                <span className="text-[#3B82F6]"> Digital Solutions</span>
              </h2>
              <p className="text-gray-600 mb-8">
                At Binary Bastions, we're passionate about helping businesses grow through innovative digital solutions. Our team of experts combines creativity with technical expertise to deliver outstanding results that drive your success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2015, Binary Bastions has grown from a small startup to a leading IT solutions provider. Our journey has been marked by continuous learning, innovation, and a commitment to excellence.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We've had the privilege of working with diverse clients across various industries, from startups to Fortune 500 companies. Each project has added to our expertise and reinforced our passion for creating impactful digital solutions.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to be at the forefront of technological innovation, helping businesses navigate the digital landscape and achieve their goals.
            </p>
          </div>
        </div>
      </section>
{/* 
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Team Member ${member}`}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">Team Member {member}</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-[#3B82F6] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life and create amazing digital experiences.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[#3B82F6] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
