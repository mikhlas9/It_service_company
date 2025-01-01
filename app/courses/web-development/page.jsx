import Image from 'next/image'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function WebDevelopmentCourse() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Web Development Course
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Master the art of creating modern, responsive websites
            </p>
          </div>
          {/* <div className="mt-12 relative">
            <Image
              src="/web-development.png"
              alt="Web Development Course Banner"
              width={800}
              height={400}
              className="rounded-xl shadow-lg mx-auto"
            />
          </div> */}
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Course Overview</h2>
              <p className="text-lg text-gray-600">
                Our Web Development course is designed to take you from a beginner to a proficient web developer. 
                You'll learn the latest technologies and best practices in front-end and back-end development, 
                enabling you to create stunning, functional websites.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
              <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                <li>HTML5, CSS3, and modern JavaScript (ES6+)</li>
                <li>Responsive web design principles</li>
                <li>Front-end frameworks like React and Vue.js</li>
                <li>Back-end development with Node.js and Express</li>
                <li>Database management with MongoDB and SQL</li>
                <li>Version control with Git and GitHub</li>
                <li>Deployment and hosting on platforms like Vercel and Heroku</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Course Structure</h2>
              <ul className="space-y-3 list-disc pl-6 text-lg text-gray-600">
                <li>12-week intensive program</li>
                <li>Hands-on projects and real-world applications</li>
                <li>Weekly coding challenges and assignments</li>
                <li>One-on-one mentoring sessions</li>
                <li>Group discussions and peer code reviews</li>
                <li>Final capstone project</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Prerequisites</h2>
              <p className="text-lg text-gray-600">
                No prior programming experience is required, but basic computer skills and a passion for learning are essential.
              </p>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/courses/enroll" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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

