'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessionalBackground from '@/app/components/ui/professional-background'

const skills = [
  "Network security fundamentals",
  "Web application security",
  "Penetration testing techniques",
  "Cryptography and encryption",
  "Security information and event management (SIEM)",
  "Incident response and forensics"
]

const projects = [
  {
    title: "Web Application Vulnerability Assessment",
    description: "Conduct a comprehensive security assessment of a web application, identifying and documenting vulnerabilities."
  },
  {
    title: "Secure File Sharing System",
    description: "Develop a secure file sharing system with end-to-end encryption, access controls, and audit logging."
  },
  {
    title: "Cybersecurity Awareness Training Program",
    description: "Create an interactive training program to educate employees about common cyber threats and best practices."
  }
]

export default function CybersecurityInternship() {
  useEffect(() => {
    // This ensures the background takes up the full height of the page
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
        <section className="pt-32 pb-5 ">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#e1e4e8] text-transparent bg-clip-text mb-2">
                Cybersecurity Internship
              </h1>
              <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto">
                Protect digital assets and systems from evolving cyber threats
              </p>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 relative">
                <Image
                  src="/cyber.png"
                  alt="Cybersecurity Internship"
                  width={650}
                  height={650}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">Program Overview</h2>
                <p className="text-lg text-gray-100 mb-6">
                  Our Cybersecurity Internship program offers an immersive experience in the world of digital security. You'll work alongside experienced security professionals to protect systems, networks, and data from cyber threats. This internship will provide you with hands-on experience in identifying vulnerabilities, implementing security measures, and responding to incidents.
                </p>
                <h3 className="text-xl font-semibold text-white mb-4">Key Skills You'll Develop:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                      <span className="text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 ">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Tailored Project Experience</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-100 space-y-6">
              <p>
                At Binary Bastions, we believe in providing a personalized learning experience. Instead of predetermined projects, we tailor your internship projects based on:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your current skill level and prior experience in cybersecurity</li>
                <li>Your specific areas of interest within the field (e.g., network security, application security, ethical hacking)</li>
                <li>The latest trends and emerging threats in the cybersecurity landscape</li>
                <li>Real-world security challenges and client projects</li>
              </ul>
              <p>
                This approach ensures that you'll work on projects that are challenging yet achievable, helping you grow your skills effectively. Whether you're new to cybersecurity or have some experience, we'll provide projects that match your abilities and help you reach the next level in your cybersecurity journey.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-8">What You'll Learn</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 space-y-6">
              <p>
                Throughout the internship, you'll gain practical experience in:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Conducting vulnerability assessments and penetration testing</li>
                <li>Implementing and managing security tools and technologies</li>
                <li>Analyzing security logs and identifying potential threats</li>
                <li>Developing security policies and procedures</li>
                <li>Responding to simulated security incidents</li>
                <li>Staying up-to-date with the latest cybersecurity trends and threats</li>
              </ul>
              <p>
                You'll also have the opportunity to work on real-world security projects, participate in threat hunting exercises, and collaborate with our security team to enhance your skills.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20  text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Defend Against Cyber Threats?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Apply now for our Cybersecurity Internship and start your journey towards becoming a skilled cybersecurity professional!
            </p>
            <Link 
              href="/internships/apply"
              className="inline-block bg-[#3B82F6] text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
              Apply Now
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
