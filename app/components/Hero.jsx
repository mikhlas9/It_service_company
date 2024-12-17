import Image from 'next/image'
import Link from 'next/link'


export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FFB800]/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Bring Your Ideas to
                <span className="text-[#3B82F6]"> Life</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                We transform your digital dreams into reality with our creative and professional IT solutions. Let's build something amazing together!
              </p>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-left">
                <div className="flex items-center gap-4">
                  <p className="text-gray-600 text-lg font-medium">
                    Cutting-edge <span className="font-bold">Web Development</span> to establish your online presence.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-gray-600 text-lg font-medium">
                    Powerful <span className="font-bold">Mobile Apps</span> tailored to your business needs.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-gray-600 text-lg font-medium">
                    Eye-catching <span className="font-bold">UI/UX Design</span> for seamless user experiences.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-20">
                <button className="bg-[#3B82F6] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#2563EB] transition-colors"> 
                  <Link href="/contact" >
                  Get In Touch
            </Link>
                </button>
                <button className="border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#3B82F6] hover:text-white transition-colors">
                <Link href="#services" >
                  Learn More
            </Link>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 relative">
              <div className="animate-float">
                <Image
                  src="/hero_img.png"
                  alt="Creative Development"
                  width={400}
                  height={400}
                  className="relative z-10"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3B82F6]/10 blob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
