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

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer a range of cutting-edge digital services to enhance your business's growth, security, and success in the modern world.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { 
                  duration: 0.3, 
                  ease: "easeOut" 
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="perspective-1000"
            >
              <Link 
                href={service.href}
className="block rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden bg-gray-900/80 hover:bg-gray-800/90 backdrop-filter backdrop-blur-md border-2 border-white/25 hover:border-white/50"
              >
                {/* Enhanced gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-15 transition-all duration-500"
                  style={{ background: `linear-gradient(135deg, ${service.color}20, transparent 70%)` }}
                />
                
                {/* Animated background pulse */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{ 
                    background: `radial-gradient(circle at center, ${service.color}10, transparent 70%)` 
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Icon container with enhanced animation */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                  style={{ backgroundColor: `${service.color}20` }}
                  whileHover={{ 
                    scale: 1.2,
                    rotateZ: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl font-semibold mb-3 text-white group-hover:text-[#3B82F6] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-200 leading-relaxed"
                    whileHover={{ x: 3 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                <BorderBeam />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}