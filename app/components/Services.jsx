'use client'
import { useRef, useEffect, useState } from 'react'
import { Code, Smartphone, Globe, Shield, FileSearch, Calculator } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'
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

// Lightweight scroll animation hook
function useScrollAnimation(delay = 0) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: '20px' }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay, isVisible])

  return [ref, isVisible]
}

export default function Services() {
  const [headerRef, headerVisible] = useScrollAnimation()

  return (
    <section id="services" className="sm:py-20 relative">
      <div className="container mx-auto px-6 relative">
        {/* Header Animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer a range of cutting-edge digital services to enhance your business's growth, security, and success in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const [ref, visible] = useScrollAnimation(idx * 100)
            
            return (
              <div
                key={idx}
                ref={ref}
                className={`transition-all duration-500 ease-out ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <Link href={service.href} className="block group">
                  <div className="rounded-2xl p-6 bg-gray-900/80 border border-white/30 transition-all duration-300 ease-out group-hover:bg-gray-800/90 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-black/20">
                    
                    {/* Simple hover gradient */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.color}, transparent 70%)`
                      }}
                    />
                    
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon 
                        className="w-7 h-7" 
                        style={{ color: service.color }} 
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-blue-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                        {service.description}
                      </p>
                    </div>

                    <BorderBeam />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}