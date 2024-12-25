import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
  return (
    <main>
        <Header />
      <section className="pt-32 pb-5 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-950 to-[#3B82F6] text-transparent bg-clip-text mb-2">
              Cybersecurity Internship
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Protect digital assets and systems from evolving cyber threats
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Cybersecurity Internship"
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Cybersecurity Internship program offers an immersive experience in the world of digital security. You'll work alongside experienced security professionals to protect systems, networks, and data from cyber threats. This internship will provide you with hands-on experience in identifying vulnerabilities, implementing security measures, and responding to incidents.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Skills You'll Develop:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sample Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What You'll Learn</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
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

      <section className="py-20 bg-[#F59E0B] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Defend Against Cyber Threats?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply now for our Cybersecurity Internship and start your journey towards becoming a skilled cybersecurity professional!
          </p>
          <Link 
            href="/apply"
            className="inline-block bg-white text-[#F59E0B] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
