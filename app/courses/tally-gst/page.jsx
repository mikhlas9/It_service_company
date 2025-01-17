'use client'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

export default function TallyGSTCourse() {
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
        <section className="relative pt-32 pb-12  overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text mb-2">
                Tally GST Course
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
                Master Tally with GST for efficient business accounting and compliance
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Overview</h2>
                <p className="text-lg text-gray-200">
                  Our Tally GST course is designed to provide comprehensive training on using Tally for 
                  GST-compliant accounting. You'll learn how to effectively use Tally for managing your 
                  business finances while ensuring compliance with GST regulations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">What You'll Learn</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>Introduction to Tally and its interface</li>
                  <li>Setting up a company and chart of accounts in Tally</li>
                  <li>GST fundamentals and its implementation in Tally</li>
                  <li>Recording various types of business transactions</li>
                  <li>Managing inventory and stock in Tally</li>
                  <li>Generating GST-compliant invoices and reports</li>
                  <li>Filing GST returns using Tally</li>
                  <li>TDS and TCS management in Tally</li>
                  <li>Bank reconciliation and financial statement preparation</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Structure</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>8-week comprehensive program</li>
                  <li>Hands-on practice with Tally software</li>
                  <li>Weekly assignments and case studies</li>
                  <li>Live demo sessions on real-world scenarios</li>
                  <li>Group discussions on GST compliance challenges</li>
                  <li>Final project: Set up and manage a company's accounts in Tally with GST</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Prerequisites</h2>
                <p className="text-lg text-gray-200">
                  Basic understanding of accounting principles is beneficial but not mandatory. 
                  Familiarity with computer operations is required. This course is suitable for 
                  business owners, accountants, and anyone interested in learning Tally with GST.
                </p>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="/courses/enroll" 
                  className="inline-block bg-[#3B82F6] text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
                  >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
