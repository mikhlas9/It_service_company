import Link from 'next/link'
import Threads from './Threads' // Adjust path as needed

export default function Hero() {
    return (
        <section className="pt-12 sm:pt-24 pb-16 overflow-hidden relative">
            {/* Threads Background */}
            <div className="absolute inset-0 z-0">
                <Threads
                    amplitude={0.8}
                    distance={0}
                    // enableMouseInteraction={true}
                    color={[0.23, 0.51, 0.96]} // Blue color (#3B82F6 in RGB)
                />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 pt-14 sm:pt-30 sm:pb-3">
                <div className="relative">
                    {/* Centered Content */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
                            Bring Your Ideas to
                            <span className="text-[#3B82F6]"> Life</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto pt-5">
                            We transform your digital dreams into reality with our creative and professional IT solutions. Let's build something amazing together!
                        </p>

                        {/* Service Highlights */}
                        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                            <div className="text-center">
                                <p className="text-gray-300 text-lg font-medium">
                                    Innovative <span className="font-bold text-[#3B82F6]">Mobile App Development</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-300 text-lg font-medium">
                                    Responsive <span className="font-bold text-[#3B82F6]">Website Development</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-300 text-lg font-medium">
                                    Comprehensive <span className="font-bold text-[#3B82F6]">Security Consulting</span>
                                </p>
                            </div>
                        </div> */}

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
                            <button className="bg-[#3B82F6] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#2563EB] transition-colors flex justify-center items-center gap-2">
                                <Link href="/contact" className="flex justify-center items-center gap-2">
                                    <span>Get In Touch</span>
                                    <img src="/getintouch.gif" alt="Arrow" className="w-7 h-7 sm:w-9 sm:h-9" />
                                </Link>
                            </button>

                            <button className="border-2 border-[#3B82F6] text-[#3B82F6] px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#3B82F6] hover:text-white transition-colors">
                                <Link href="#services">
                                    Learn More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}