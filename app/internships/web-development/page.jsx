import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
  return (
    <main>  
        <Header />
      <section className="pt-32 pb-5 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-950 to-[#3B82F6] text-transparent bg-clip-text mb-2">
              Web Development Internship
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Build the future of the web with cutting-edge technologies and best practices
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
                alt="Web Development Internship"
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Web Development Internship program offers a unique opportunity to gain hands-on experience in building modern, responsive websites using the latest technologies and best practices. You'll work alongside experienced developers on real-world projects, enhancing your skills and building a strong foundation for your career in web development.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Skills You'll Develop:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6]" />
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

      <section className="py-20 bg-[#3B82F6] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Web Development Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply now for our Web Development Internship and take the first step towards becoming a professional web developer!
          </p>
          <Link 
            href="/apply"
            className="inline-block bg-white text-[#3B82F6] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
