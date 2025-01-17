'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

export default function AppDevelopmentCourse() {
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
                App Development Course
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
                Build powerful mobile applications for iOS and Android
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Overview</h2>
                <p className="text-lg text-gray-200">
                  Our App Development course equips you with the skills to create innovative mobile applications 
                  for both iOS and Android platforms. You'll learn industry-standard tools and techniques to 
                  build, test, and deploy mobile apps.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">What You'll Learn</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>Mobile app design principles and UI/UX best practices</li>
                  <li>Cross-platform development with React Native</li>
                  <li>Native iOS development with Swift</li>
                  <li>Native Android development with Kotlin</li>
                  <li>Backend integration and API consumption</li>
                  <li>App state management and data persistence</li>
                  <li>Testing, debugging, and performance optimization</li>
                  <li>App store submission and publishing process</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Structure</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>14-week comprehensive program</li>
                  <li>Hands-on projects for both iOS and Android</li>
                  <li>Weekly coding assignments and app challenges</li>
                  <li>One-on-one mentoring with experienced app developers</li>
                  <li>Group app development sprints</li>
                  <li>Final capstone project: Develop and launch your own app</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Prerequisites</h2>
                <p className="text-lg text-gray-200">
                  Basic programming knowledge is recommended. Familiarity with JavaScript, Swift, or Kotlin is a plus, 
                  but not required. You should have access to a Mac for iOS development.
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
