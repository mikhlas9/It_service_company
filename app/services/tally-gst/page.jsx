import { WhyChooseUs, GetInTouch } from '../../components/ServicePageSections'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

export default function TallyGST() {
  return (
    <main>
        <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-950 to-[#3B82F6] text-transparent bg-clip-text">
              Tally + GST Evaluation
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Comprehensive Tally solutions with GST compliance
            </p>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Expert Tally Solutions
                </h2>
                <p className="text-lg text-gray-600">
                  Binary Bastions provides comprehensive Tally solutions with complete
                  GST compliance. Our team of experts ensures your business accounting
                  is efficient, accurate, and fully compliant with current regulations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Our Services Include
                </h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                  <li>Tally implementation and setup</li>
                  <li>GST configuration and compliance</li>
                  <li>Data migration and integration</li>
                  <li>Custom report development</li>
                  <li>Staff training and support</li>
                  <li>Regular updates and maintenance</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-700">
                  Key Features
                </h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                  <li>Automated GST calculations</li>
                  <li>Real-time financial reporting</li>
                  <li>Multi-branch accounting</li>
                  <li>Inventory management</li>
                  <li>Compliance monitoring</li>
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

