'use client'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

export default function AppPenetrationTestingCourse() {
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
                App Penetration Testing Course
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
                Learn to identify and exploit vulnerabilities in mobile applications
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Overview</h2>
                <p className="text-lg text-gray-200">
                  Our App Penetration Testing course focuses on the unique challenges of mobile application security. 
                  You'll learn how to identify and exploit vulnerabilities in both Android and iOS applications, 
                  and understand the mobile threat landscape.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">What You'll Learn</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>Mobile app architecture and security models</li>
                  <li>OWASP Mobile Top 10 vulnerabilities</li>
                  <li>Static and dynamic analysis of mobile apps</li>
                  <li>Reverse engineering Android and iOS applications</li>
                  <li>Exploiting insecure data storage and communication</li>
                  <li>Authentication and authorization flaws in mobile apps</li>
                  <li>Using tools like MobSF, Frida, and Objection</li>
                  <li>Secure coding practices for mobile applications</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Structure</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>10-week comprehensive program</li>
                  <li>Hands-on labs with real mobile applications</li>
                  <li>Weekly mobile app security challenges</li>
                  <li>Live hacking sessions on both Android and iOS platforms</li>
                  <li>Group projects simulating real-world mobile app assessments</li>
                  <li>Final project: Conduct a full security assessment of a mobile application</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Prerequisites</h2>
                <p className="text-lg text-gray-200">
                  Basic understanding of mobile technologies and programming concepts is required. 
                  Familiarity with Java or Kotlin (for Android) and Swift or Objective-C (for iOS) is beneficial. 
                  Previous experience with application security or penetration testing is a plus.
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
