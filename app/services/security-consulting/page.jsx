'use client'
import { useEffect } from 'react'
import { WhyChooseUs, GetInTouch } from '../../components/ServicePageSections'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

export default function SecurityConsulting() {
  useEffect(() => {
    document.body.style.minHeight = '100vh'
    return () => {
      document.body.style.minHeight = ''
    }
  }, [])

  return (
    <>
      <ProfessionalBackground />
      <main>
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#cdd1d8] text-transparent bg-clip-text">
                Security Consulting
              </h1>
              <p className="text-xl text-gray-100 mb-12">
                Expert guidance for your organization's security strategy
              </p>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-100">
                    Strategic Security Solutions
                  </h2>
                  <p className="text-lg text-gray-200">
                    Our security consulting services help organizations develop and implement
                    comprehensive security strategies. We provide expert guidance on best
                    practices, compliance requirements, and risk management.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-100">
                    Our Consulting Services
                  </h2>
                  <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                    <li>Security architecture review</li>
                    <li>Risk assessment and management</li>
                    <li>Compliance consulting (GDPR, HIPAA, etc.)</li>
                    <li>Security policy development</li>
                    <li>Incident response planning</li>
                    <li>Security awareness training</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-100">
                    Areas of Expertise
                  </h2>
                  <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                    <li>Application security</li>
                    <li>Cloud security</li>
                    <li>Network security</li>
                    <li>Data protection</li>
                    <li>Security operations</li>
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
