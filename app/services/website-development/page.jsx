import { WhyChooseUs, GetInTouch } from '../../components/ServicePageSections'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

export default function WebsiteDevelopment() {
  return (
    <main>
        <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6  bg-gradient-to-r from-blue-950 to-[#3B82F6] text-transparent bg-clip-text">
              Website Development
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Create stunning, high-performance websites that drive results
            </p>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Modern Web Development Solutions
                </h2>
                <p className="text-lg text-gray-600">
                  Binary Bastions delivers cutting-edge website development services
                  using the latest technologies and best practices. We create responsive,
                  fast-loading websites that provide exceptional user experiences across
                  all devices.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Our Web Development Expertise
                </h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                  <li>Custom website development</li>
                  <li>E-commerce solutions</li>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Content Management Systems</li>
                  <li>API development and integration</li>
                  <li>Performance optimization</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Technologies We Use
                </h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
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
      
      <WhyChooseUs />
      <GetInTouch />
      <Footer />
    </main>
  )
}

