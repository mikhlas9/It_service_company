import Image from 'next/image'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CybersecurityCourse() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Advanced Cybersecurity
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deep into advanced topics and techniques in cybersecurity
            </p>
          </div>
          {/* <div className="mt-12 relative">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Cybersecurity Course Banner"
              width={800}
              height={400}
              className="rounded-xl shadow-lg mx-auto"
            />
          </div> */}
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
              <h2 className="text-3xl font-bold text-gray-900">Course Overview</h2>
              <p className="text-lg text-gray-600">
                Our Advanced Cybersecurity course is designed for professionals and enthusiasts who want to 
                deepen their knowledge and skills in cybersecurity. You'll explore complex topics, advanced 
                threat detection techniques, and cutting-edge defense strategies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
              <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                <li>Advanced network security and protocol analysis</li>
                <li>Reverse engineering and malware analysis</li>
                <li>Cloud security architecture and best practices</li>
                <li>Advanced cryptography and secure communication protocols</li>
                <li>Threat hunting and advanced persistent threats (APTs)</li>
                <li>Security information and event management (SIEM)</li>
                <li>Penetration testing and ethical hacking techniques</li>
                <li>Incident response and digital forensics for complex scenarios</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Course Structure</h2>
              <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                <li>12-week intensive program</li>
                <li>Advanced hands-on labs and real-world simulations</li>
                <li>Weekly challenges and CTF-style exercises</li>
                <li>In-depth case studies of major security incidents</li>
                <li>Guest lectures from industry experts</li>
                <li>Final project: Conduct a comprehensive security assessment and develop an advanced defense strategy</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Prerequisites</h2>
              <p className="text-lg text-gray-600">
                Solid understanding of basic cybersecurity concepts and some hands-on experience is required. 
                Completion of our Introduction to Cybersecurity course or equivalent knowledge is recommended. 
                Familiarity with programming and networking concepts is beneficial.
              </p>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/courses/enroll" 
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

