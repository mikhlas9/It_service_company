'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProfessionalBackground from '@/app/components/ui/professional-background'

const skills = [
  "HTML5, CSS3, and modern JavaScript (ES6+)",
  "React and Next.js",
  "RESTful APIs and GraphQL",
  "Version control with Git",
  "Responsive design and CSS frameworks",
  "Web performance optimization"
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "Build a fully functional e-commerce website with real-time inventory management, user authentication, and payment integration."
  },
  {
    title: "Content Management System",
    description: "Develop a custom CMS for a digital magazine, including features like content creation, scheduling, and analytics."
  },
  {
    title: "Portfolio Generator",
    description: "Create a web application that allows artists and designers to easily build and customize their online portfolios."
  }
]

export default function WebDevelopmentInternship() {
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#e0e2e5] text-transparent bg-clip-text mb-2">
              Web Development Internship
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto">
              Build the future of the web with cutting-edge technologies and best practices
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 relative">
              <Image
                src="/web-dev.png"
                alt="Web Development Internship"
                width={650}
                height={650}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6">Program Overview</h2>
              <p className="text-lg text-gray-100 mb-6">
                Our Web Development Internship program offers a unique opportunity to gain hands-on experience in building modern, responsive websites using the latest technologies and best practices. You'll work alongside experienced developers on real-world projects, enhancing your skills and building a strong foundation for your career in web development.
              </p>
              <h3 className="text-xl font-semibold text-white mb-4">Key Skills You'll Develop:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6]" />
                    <span className="text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Tailored Project Experience</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-100 space-y-6">
            <p>
              At Binary Bastions, we believe in providing a personalized learning experience. Instead of predetermined projects, we tailor your internship projects based on:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your current skill level and prior experience in web development</li>
              <li>Your specific areas of interest (e.g., frontend, backend, full-stack)</li>
              <li>The latest trends and technologies in the web development industry</li>
              <li>Real-world business needs and client projects</li>
            </ul>
            <p>
              This approach ensures that you'll work on projects that are challenging yet achievable, helping you grow your skills effectively. Whether you're a beginner looking to build your first website or an experienced developer aiming to master advanced frameworks, we'll provide projects that match your abilities and help you reach the next level in your web development journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">What You'll Learn</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-100 space-y-6">
            <p>
              Throughout the internship, you'll gain practical experience in:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Building responsive and accessible web applications</li>
              <li>Implementing modern front-end frameworks and libraries</li>
              <li>Developing and consuming RESTful APIs</li>
              <li>Optimizing web performance and user experience</li>
              <li>Collaborating with teams using agile methodologies</li>
              <li>Writing clean, maintainable, and well-documented code</li>
            </ul>
            <p>
              You'll also have the opportunity to participate in code reviews, technical discussions, and workshops to further enhance your skills and knowledge.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20  text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Web Development Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply now for our Web Development Internship and take the first step towards becoming a professional web developer!
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
