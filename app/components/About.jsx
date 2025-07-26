import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const features = [
  "Modern Development Practices",
  "Creative Design Solutions",
  "24/7 Support Available",
  "Scalable Architecture"
]

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Add a semi-transparent overlay to improve readability */}
      <div className="absolute inset-0 "></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 relative flex justify-center items-center">
  <div className="animate-float">
    <Image
      src="/about1.png"
      alt="About Us Illustration"
      width={400}
      height={400}
      className="relative z-10"
    />
  </div>
  {/* Decorative elements */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#3B82F6]/10 rounded-full blur-2xl" />
</div>

          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We Build Amazing
              <span className="text-[#3B82F6]"> Digital Solutions</span>
            </h2>
            <p className="text-gray-200 mb-8">
              Our team of experts combines creativity with technical expertise to deliver outstanding results. We're passionate about helping businesses grow through innovative digital solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#3B82F6]" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

