'use client'
import { Code, Smartphone, Globe, Shield, FileSearch, Calculator } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Services from '../components/Services'
import ProfessionalBackground from '../components/ui/professional-background'
import { useEffect } from 'react'



export default function ServicesPage() {

    useEffect(() => {
        // This ensures the background takes up the full height of the page
        document.body.style.minHeight = '100vh'
        return () => {
            document.body.style.minHeight = ''
        }
    }, [])

    return (
        <>
            {/* <ProfessionalBackground /> */}
            <main style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #000000 100%)'
      }}>
                <Header />

                <div className='py-16'>
                    <Services />
                </div>

                <section className="py-5 ">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Our Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Expertise", description: "Our team consists of highly skilled professionals with years of experience in their respective fields." },
                                { title: "Customization", description: "We tailor our services to meet your specific business needs and goals." },
                                { title: "Innovation", description: "We stay up-to-date with the latest technologies and methodologies to deliver cutting-edge solutions." },
                                { title: "Quality Assurance", description: "We follow rigorous quality control processes to ensure the highest standards in all our deliverables." },
                                { title: "Timely Delivery", description: "We understand the importance of deadlines and strive to deliver projects on time, every time." },
                                { title: "Ongoing Support", description: "Our commitment doesn't end with project delivery. We provide continuous support and maintenance." }
                            ].map((item, index) => (
<div key={index} className="backdrop-filter backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg shadow-md p-6 border border-white">
<h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-200">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20  text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss your project requirements and learn how we can help your business grow.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#3B82F6] text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
                            >
                            Get in Touch
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

