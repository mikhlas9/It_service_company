'use client'
import { useEffect } from 'react';
import { Code, Smartphone, Shield } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BorderBeam } from '../components/ui/border-beam';
import { motion } from 'framer-motion'
import ProfessionalBackground from '../components/ui/professional-background'



const internshipAreas = [
    {
        title: "Web Development",
        description: "Gain hands-on experience in building modern, responsive websites using cutting-edge technologies.",
        icon: Code,
        color: "#3B82F6",
        href: "/internships/web-development"
    },
    {
        title: "App Development",
        description: "Learn to create innovative mobile applications for both iOS and Android platforms.",
        icon: Smartphone,
        color: "#10B981",
        href: "/internships/app-development"
    },
    {
        title: "Cybersecurity",
        description: "Dive into the world of digital security, learning to protect systems and data from cyber threats.",
        icon: Shield,
        color: "#F59E0B",
        href: "/internships/cybersecurity"
    }
]

export default function InternshipProjects() {

    useEffect(() => {
        // This ensures the background takes up the full height of the page
        document.body.style.minHeight = '100vh'
        return () => {
            document.body.style.minHeight = ''
        }
    }, [])
    return (
        <>
            {/* <ProfessionalBackground /> */}
            <main style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #000000 100%)'
      }}>

                <Header />
                <section className="pt-32 pb-5 ">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Internship Programs at Binary Bastions
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                                Kickstart your career in tech with hands-on experience in cutting-edge projects
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-10">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {internshipAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={area.href}
                                        className="block rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden backdrop-filter backdrop-blur-sm bg-white/10 hover:bg-white/20"
                                    >
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity"
                                            style={{ background: `linear-gradient(to bottom right, ${area.color}, transparent)` }}
                                        />
                                        <div
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                                            style={{ backgroundColor: `${area.color}15` }}
                                        >
                                            <area.icon className="w-6 h-6" style={{ color: area.color }} />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#3B82F6] transition-colors">
                                            {area.title}
                                        </h3>
                                        <p className="text-gray-100 mb-4 flex-grow">{area.description}</p>
                                        <span className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                            Learn more &rarr;
                                        </span>

                                        <BorderBeam />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 ">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Internship Program Overview</h2>
                        <div className="max-w-3xl mx-auto text-lg text-gray-100 space-y-6">
                            <p>
                                Our internship program at Binary Bastions is designed to provide aspiring tech professionals with real-world experience and mentorship. As an intern, you'll work alongside our experienced team members on actual client projects and innovative internal initiatives.
                            </p>
                            <p>
                                The program typically runs for 12 weeks, during which you'll:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Gain hands-on experience with industry-standard tools and technologies</li>
                                <li>Collaborate with cross-functional teams in an agile environment</li>
                                <li>Receive mentorship from experienced professionals in your field of interest</li>
                                <li>Participate in workshops and training sessions to enhance your skills</li>
                                <li>Present your project work to the company at the end of the internship</li>
                            </ul>
                            <p>
                                Successful interns may be considered for full-time positions upon completion of the program.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Application Process</h2>
                        <div className="max-w-3xl mx-auto">
                            <ol className="list-decimal pl-5 text-lg text-gray-100 space-y-4">
                                <li>
                                    <strong>Submit your application:</strong> Include your resume, portfolio (if applicable), and a cover letter explaining your interest in the specific internship area.
                                </li>
                                <li>
                                    <strong>Initial screening:</strong> Our team will review your application and reach out if you're selected for the next stage.
                                </li>
                                <li>
                                    <strong>Technical assessment:</strong> Complete a brief technical challenge related to your area of interest.
                                </li>
                                <li>
                                    <strong>Interview:</strong> If successful, you'll be invited for an interview with our team to discuss your experience, goals, and fit for the program.
                                </li>
                                <li>
                                    <strong>Offer:</strong> Selected candidates will receive an internship offer with details about the project, mentor, and start date.
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* <section className="py-20 bg-[#3B82F6] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply now for our internship program and take the first step towards an exciting career in tech!
          </p>
          <Link 
            href="/api/apply"
            className="inline-block bg-white text-[#3B82F6] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section> */}
                <Footer />
            </main>
        </>
    )
}

