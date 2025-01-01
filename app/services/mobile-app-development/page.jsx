import { WhyChooseUs, GetInTouch } from '../../components/ServicePageSections'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

export default function MobileAppDevelopment() {
  return (
    <main>
        <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-950 to-[#3B82F6] text-transparent bg-clip-text">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your ideas into powerful, user-friendly mobile applications
            </p>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Native & Cross-Platform Excellence
                </h2>
                <p className="text-lg text-gray-600">
                  At Binary Bastions, we specialize in creating exceptional mobile applications
                  for both iOS and Android platforms. Our team of expert developers combines
                  technical expertise with creative design to deliver apps that not only look
                  great but also provide seamless user experiences.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Our Mobile App Development Process
                </h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                  <li>Comprehensive requirement analysis and planning</li>
                  <li>UI/UX design with focus on user engagement</li>
                  <li>Robust backend development and API integration</li>
                  <li>Thorough testing across multiple devices</li>
                  <li>App store optimization and deployment</li>
                  <li>Post-launch support and maintenance</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Technologies We Excel In
                </h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                  <li>React Native for cross-platform development</li>
                  <li>Swift for iOS development</li>
                  <li>Kotlin for Android development</li>
                  <li>Firebase for backend services</li>
                  <li>REST and GraphQL APIs</li>
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
  )
}

