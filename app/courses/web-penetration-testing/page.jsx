'use client'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

export default function WebPenetrationTestingCourse() {
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
                Web Penetration Testing Course
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
                Master the art of identifying and exploiting web application vulnerabilities
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Overview</h2>
                <p className="text-lg text-gray-200">
                  Our Web Penetration Testing course is designed to equip you with the skills and knowledge 
                  needed to identify and exploit vulnerabilities in web applications. You'll learn how to 
                  think like a hacker and use that knowledge to improve web security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">What You'll Learn</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>Understanding web application architecture</li>
                  <li>OWASP Top 10 vulnerabilities and how to exploit them</li>
                  <li>Reconnaissance and information gathering techniques</li>
                  <li>SQL injection, XSS, and CSRF attacks</li>
                  <li>Authentication and session management flaws</li>
                  <li>Using tools like Burp Suite, OWASP ZAP, and Metasploit</li>
                  <li>Writing custom exploits and scripts</li>
                  <li>Secure coding practices and vulnerability remediation</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Course Structure</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg text-gray-200">
                  <li>12-week intensive program</li>
                  <li>Hands-on labs with real-world web applications</li>
                  <li>Weekly CTF (Capture The Flag) challenges</li>
                  <li>Live hacking sessions and demonstrations</li>
                  <li>Group projects simulating real penetration testing engagements</li>
                  <li>Final project: Conduct a full web application security assessment</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Prerequisites</h2>
                <p className="text-lg text-gray-200">
                  Basic understanding of web technologies (HTML, CSS, JavaScript) and networking concepts is required. 
                  Familiarity with a programming language (e.g., Python) is beneficial but not mandatory. 
                  A strong interest in web security and problem-solving skills are essential.
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
