'use client'
import { useEffect } from 'react'
import { WhyChooseUs, GetInTouch } from '../../components/ServicePageSections'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

export default function WebsiteDevelopment() {
  useEffect(() => {
    document.body.style.minHeight = '100vh'
    return () => {
      document.body.style.minHeight = ''
    }
  }, [])

  return (
    <>
      {/* <ProfessionalBackground /> */}
      <main 
        style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #000000 100%)'
      }}
      >
        <Header />
        <section className="pt-20 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#cdd1d8] text-transparent bg-clip-text">
                Website Development
              </h1>
              <p className="text-xl text-gray-100 mb-12">
                Create stunning, high-performance websites that drive results
              </p>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-100">
                    Modern Web Development Solutions
                  </h2>
                  <p className="text-lg text-gray-200">
                    Binary Bastions delivers cutting-edge website development services
                    using the latest technologies and best practices. We create responsive,
                    fast-loading websites that provide exceptional user experiences across
                    all devices.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-100">
                    Our Web Development Expertise
                  </h2>
                  <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                    <li>Custom website development</li>
                    <li>E-commerce solutions</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>Content Management Systems</li>
                    <li>API development and integration</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-100">
                    Technologies We Use
                  </h2>
                  <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                    <li>Next.js and React for modern web applications</li>
                    <li>Node.js for backend development</li>
                    <li>MongoDB and SQL for databases</li>
                    <li>AWS and Vercel for hosting</li>
                    <li>Tailwind CSS for styling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <WhyChooseUs /> */}
        <GetInTouch />
        <Footer />
      </main>
    </>
  )
}
