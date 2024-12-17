'use client'

import { motion } from "framer-motion"

const testimonials = [
  {
    text: "Working with Binary Bastions was an absolute game-changer for our business. Their team understood our requirements from day one and delivered a responsive, fast, and visually stunning website that perfectly showcases our brand. We’ve seen a significant increase in traffic and customer engagement since the launch. Their professionalism, technical expertise, and attention to detail are unmatched!",
    author: "Deena Levies",
    company: "Mission Bay",
    decoration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#3B82F6]">
        <path
          d="M20 40 Q30 20 40 40 T60 40 T80 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle cx="50" cy="60" r="20" fill="currentColor" opacity="0.1" />
        <path
          d="M40 50 Q50 30 60 50"
          fill="none"
          stroke="#FFB800"
          strokeWidth="4"
        />
      </svg>
    )
  },
  {
    text: "Binary Bastions developed a custom mobile app for our business, and I couldn’t be happier with the results. The app is intuitive, user-friendly, and has completely streamlined our processes. The team was communicative, supportive, and delivered on time without compromising on quality. Highly recommended for anyone looking for top-notch app development!",
    author: "Tom Smithenson",
    company: "Parkmerced",
    decoration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#3B82F6]">
        <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.1" />
        <path
          d="M30 60 Q50 20 70 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M40 50 Q50 30 60 50"
          fill="none"
          stroke="#FFB800"
          strokeWidth="4"
        />
      </svg>
    )
  },
  {
    text: "We partnered with Binary Bastions for UI/UX design, and they exceeded our expectations. Their design team created a sleek, modern, and highly intuitive interface that has dramatically improved user satisfaction. Our customers rave about how easy and enjoyable it is to navigate our app. Truly a team that understands user needs and delivers cutting-edge designs!",
    author: "Junaid Dar",
    company: "Travel Impressions",
    decoration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#3B82F6]">
        <path
          d="M20 50 Q40 20 60 50 T100 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.1" />
        <path
          d="M40 40 Q50 20 60 40"
          fill="none"
          stroke="#FFB800"
          strokeWidth="4"
        />
      </svg>
    )
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Browser-like header */}
              <div className="bg-[#3B82F6] h-8 flex items-center px-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                  <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                  <div className="w-2 h-2 rounded-full bg-white opacity-60" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 min-h-[200px]">
                  "{testimonial.text}"
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                  {testimonial.decoration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

