'use client'
import { useEffect } from 'react'
import { Code, Smartphone, Shield, Globe, Calculator, Info, Wifi, Lock } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BorderBeam } from '../components/ui/border-beam'
import ProfessionalBackground from '../components/ui/professional-background'


const courses = [
  {
    title: "Web Development",
    description: "Learn to build modern, responsive websites using the latest technologies.",
    icon: Globe,
    color: "#3B82F6",
    href: "/courses/web-development"
  },
  {
    title: "App Development",
    description: "Master mobile app development for iOS and Android platforms.",
    icon: Smartphone,
    color: "#10B981",
    href: "/courses/app-development"
  },
  {
    title: "Introduction to Cybersecurity",
    description: "Learn the fundamentals of protecting digital assets and systems.",
    icon: Shield,
    color: "#F59E0B",
    href: "/courses/introduction-to-cybersecurity"
  },
  {
    title: "Advanced Cybersecurity",
    description: "Dive deep into advanced topics and techniques in cybersecurity.",
    icon: Lock,
    color: "#EF4444",
    href: "/courses/advanced-cybersecurity"
  },
  //   {
  //     title: "Web Penetration Testing",
  //     description: "Learn to identify and exploit vulnerabilities in web applications.",
  //     icon: Shield,
  //     color: "#EF4444",
  //     href: "/courses/web-penetration-testing"
  //   },
  //   {
  //     title: "App Penetration Testing",
  //     description: "Learn to identify and exploit vulnerabilities in mobile applications.",
  //     icon: Code,
  //     color: "#EF4444",
  //     href: "/courses/app-penetration-testing"
  //   },
  {
    title: "Tally GST",
    description: "Master Tally with GST for efficient business accounting and compliance.",
    icon: Calculator,
    color: "#8B5CF6",
    href: "/courses/tally-gst"
  },
  {
    title: "Introduction to IoT",
    description: "Explore the world of Internet of Things and connected devices.",
    icon: Wifi,
    color: "#8B5CF6",
    href: "/courses/introduction-to-iot"
  },
]

export default function Courses() {
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
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Decorative elements */}
          {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl" />
         */}
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Courses
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                Empower yourself with cutting-edge skills through our comprehensive courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={course.href}
                    className="block rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden backdrop-filter backdrop-blur-sm bg-white/10 hover:bg-white/20"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity"
                      style={{ background: `linear-gradient(to bottom right, ${course.color}, transparent)` }}
                    />
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${course.color}15` }}
                    >
                      <course.icon className="w-6 h-6" style={{ color: course.color }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#3B82F6] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-100">{course.description}</p>
                    <BorderBeam />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

