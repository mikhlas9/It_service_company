'use client'
import { Code, Smartphone, Globe, Shield, FileSearch, Calculator } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: "Mobile App Development",
    description: "We create innovative, user-friendly mobile applications for iOS and Android platforms.",
    icon: Smartphone,
    color: "#3B82F6",
    href: "/services/mobile-app-development"
  },
  {
    title: "Website Development",
    description: "We build responsive, high-performance websites tailored to your business needs.",
    icon: Globe,
    color: "#FFB800",
    href: "/services/website-development"
  },
  {
    title: "Website Penetration Testing",
    description: "We identify and help fix security vulnerabilities in your web applications.",
    icon: Shield,
    color: "#FF4D4D",
    href: "/services/website-pentesting"
  },
  {
    title: "App Penetration Testing",
    description: "We thoroughly test your mobile apps for security flaws and provide remediation advice.",
    icon: Code,
    color: "#3B82F6",
    href: "/services/app-pentesting"
  },
  {
    title: "Security Consulting",
    description: "We offer expert advice on cybersecurity strategies and best practices for your organization.",
    icon: FileSearch,
    color: "#10B981",
    href: "/services/security-consulting"
  },
  {
    title: "Tally + GST Evaluation",
    description: "We provide comprehensive evaluation and setup of Tally with GST compliance for your business.",
    icon: Calculator,
    color: "#8B5CF6",
    href: "/services/tally-gst"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFB800]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl" />
       */}
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer a range of cutting-edge digital services to enhance your business's growth, security, and success in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              >
              <Link 
                href={service.href}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity"
                style={{ background: `linear-gradient(to bottom right, ${service.color}, transparent)` }}
              />
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#3B82F6] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <BorderBeam />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

