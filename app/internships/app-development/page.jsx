import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const skills = [
  "React Native and Expo",
  "iOS development with Swift",
  "Android development with Kotlin",
  "Mobile UI/UX design principles",
  "State management (e.g., Redux, MobX)",
  "Native device features integration"
]

const projects = [
  {
    title: "Health & Fitness Tracker",
    description: "Develop a cross-platform mobile app for tracking health metrics, workouts, and providing personalized recommendations."
  },
  {
    title: "AR Interior Design Visualizer",
    description: "Create an augmented reality app that allows users to visualize furniture and decor in their space before purchasing."
  },
  {
    title: "Local Community Engagement App",
    description: "Build a social media app focused on connecting local community members and promoting local events and businesses."
  }
]

export default function AppDevelopmentInternship() {
  return (
    <main>
        <Header />
      <section className="pt-32 pb-5 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-950 to-[#3B82F6] text-transparent bg-clip-text mb-2">
              App Development Internship
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Create innovative mobile experiences for iOS and Android platforms
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="App Development Internship"
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our App Development Internship program offers an exciting opportunity to dive into the world of mobile app creation. You'll learn to build engaging, user-friendly applications for both iOS and Android platforms, working with the latest tools and technologies in the mobile development landscape.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Skills You'll Develop:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Tailored Project Experience</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              At Binary Bastions, we believe in providing a personalized learning experience. Instead of predetermined projects, we tailor your internship projects based on:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your current skill level and prior experience</li>
              <li>Your specific areas of interest within app development</li>
              <li>The latest trends and technologies in the mobile app industry</li>
              <li>Real-world business needs and client projects</li>
            </ul>
            <p>
              This approach ensures that you'll work on projects that are challenging yet achievable, helping you grow your skills effectively. Whether you're a beginner looking to build your first app or an experienced developer aiming to tackle complex challenges, we'll provide projects that match your abilities and help you reach the next level in your app development journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What You'll Learn</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              Throughout the internship, you'll gain practical experience in:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Designing and implementing mobile user interfaces</li>
              <li>Building cross-platform applications with React Native</li>
              <li>Developing native iOS apps using Swift</li>
              <li>Creating Android applications with Kotlin</li>
              <li>Integrating APIs and working with mobile backends</li>
              <li>Implementing app security and data protection measures</li>
              <li>Publishing apps to the App Store and Google Play Store</li>
            </ul>
            <p>
              You'll also have the opportunity to work on real-world projects, participate in code reviews, and collaborate with experienced mobile developers to enhance your skills.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#10B981] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build the Next Great Mobile App?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply now for our App Development Internship and start your journey towards becoming a skilled mobile developer!
          </p>
          <Link 
            href="/internships/apply"
            className="inline-block bg-white text-[#10B981] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
