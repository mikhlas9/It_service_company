'use client'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

export default function CybersecurityCourse() {
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
                Introduction to Cybersecurity
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
                Learn the fundamentals of protecting digital assets and systems
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Overview</h2>
                <p className="text-lg text-gray-200">
                  Our Introduction to Cybersecurity course provides a comprehensive foundation in the principles 
                  and practices of cybersecurity. You'll learn about common threats, basic defense mechanisms, 
                  and the importance of cybersecurity in today's digital world.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">What You'll Learn</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>Fundamentals of information security</li>
                  <li>Common cyber threats and attack vectors</li>
                  <li>Basic cryptography and encryption techniques</li>
                  <li>Network security principles</li>
                  <li>Introduction to malware and anti-malware strategies</li>
                  <li>Web application security basics</li>
                  <li>Security policies and best practices</li>
                  <li>Introduction to incident response and digital forensics</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Structure</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>10-week comprehensive program</li>
                  <li>Hands-on labs and practical exercises</li>
                  <li>Weekly quizzes and assignments</li>
                  <li>Virtual cybersecurity simulations</li>
                  <li>Group discussions on current cybersecurity events</li>
                  <li>Final project: Develop a basic security plan for a small organization</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Prerequisites</h2>
                <p className="text-lg text-gray-200">
                  Basic computer literacy is required. No prior cybersecurity experience is necessary. 
                  This course is perfect for beginners and those looking to start a career in cybersecurity.
                </p>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="/courses/enroll" 
                  className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
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
