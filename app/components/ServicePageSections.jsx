'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: "Experienced Team",
    description: "Our professionals have extensive experience in Development."
  },
  {
    title: "Client-Centric Approach",
    description: "We work closely with you to meet your business goals."
  },
  {
    title: "Innovative Solutions",
    description: "We use the latest technologies and best practices."
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing ensures your website is bug-free and performs seamlessly."
  },
  {
    title: "Timely Delivery",
    description: "We adhere to project timelines and ensure on-time delivery without compromising quality."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <CheckCircle className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GetInTouch() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-xl text-gray-100 mb-8">
            Ready to elevate your online presence? Contact us today to discuss
            your project requirements and learn how we can help your business grow.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#3B82F6] text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

