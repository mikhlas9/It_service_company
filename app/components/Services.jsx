import { Code, Palette, Megaphone, Video } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'

const services = [
  {
    title: "Web Development",
    description: "We create beautiful, responsive websites that work perfectly on all devices.",
    icon: Code,
    color: "#3B82F6" // Updated color
  },
  {
    title: "Creative Design",
    description: "Our designs are both visually stunning and highly functional.",
    icon: Palette,
    color: "#FFB800"
  },
  {
    title: "Digital Marketing",
    description: "We help you reach your target audience and grow your business.",
    icon: Megaphone,
    color: "#FF4D4D"
  },
  {
    title: "Video Production",
    description: "Professional video content that tells your story effectively.",
    icon: Video,
    color: "#3B82F6" // Updated color
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFB800]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4ADE80]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Awesome Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of digital services to help your business grow and succeed in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity"
                style={{ background: `linear-gradient(to bottom right, ${service.color}, transparent)` }}
              />
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <BorderBeam />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

