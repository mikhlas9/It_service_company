import Image from 'next/image'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function IntroductionToITCourse() {
  return (
    <main>
        <Header />
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Introduction to IoT
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the world of Internet of Things and connected devices
            </p>
          </div>
          {/* <div className="mt-12 relative">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Introduction to IT Course Banner"
              width={800}
              height={400}
              className="rounded-xl shadow-lg mx-auto"
            />
          </div> */}
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Course Overview</h2>
              <p className="text-lg text-gray-600">
                Our Introduction to IoT course provides a comprehensive overview of the Internet of Things ecosystem. 
                You'll learn about connected devices, data collection, and how IoT is transforming various industries.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
              <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                <li>Fundamentals of IoT architecture</li>
                <li>Sensors, actuators, and IoT devices</li>
                <li>IoT communication protocols (MQTT, CoAP, etc.)</li>
                <li>IoT data collection and analysis</li>
                <li>Cloud platforms for IoT</li>
                <li>Edge computing in IoT</li>
                <li>IoT security and privacy considerations</li>
                <li>Real-world IoT applications and case studies</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Course Structure</h2>
              <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                <li>8-week comprehensive program</li>
                <li>Hands-on projects with IoT devices and platforms</li>
                <li>Weekly quizzes and assignments</li>
                <li>Live demo sessions of IoT applications</li>
                <li>Group discussions on IoT trends and challenges</li>
                <li>Final project: Design and implement a simple IoT solution</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Prerequisites</h2>
              <p className="text-lg text-gray-600">
                Basic understanding of computer networks and programming concepts is beneficial but not mandatory. 
                This course is suitable for beginners and those looking to understand the IoT landscape.
              </p>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/courses/enroll" 
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

