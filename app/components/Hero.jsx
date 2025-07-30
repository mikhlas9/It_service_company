import Link from 'next/link'
import { useState } from 'react'
import Threads from './Threads'
import BlurText from './BlurText'
import RotatingText from './RotatingText'

export default function Hero() {
    const [showContent, setShowContent] = useState(false)

    const handleAnimationComplete = () => {
        console.log('Hero title animation completed!')
        setShowContent(true)
    }

    return (
        <section className="pt-12 sm:pt-24 pb-16 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10 pt-3 sm:pt-2 sm:pb-3 pb-10">
                <div className="relative">
                    {/* Centered Content */}
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Main title - appears first */}
                        <BlurText
                            text="Bring Your Ideas to Life"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                        />

                        {/* Rest of content - appears after main title animation completes */}
                        <div className={`transition-all duration-1000 ease-out relative ${
                            showContent 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-8'
                        }`}>
                            {/* Background blur effect - moved behind content with negative z-index */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-[#3B82F6]/10 rounded-full blur-2xl -z-10" />

                            <RotatingText
                                texts={["Innovative Web Development", "Creative Designs", "Scalable Apps", "Security First"]}
                                rotationInterval={2500}
                                staggerDuration={0.03}
                                staggerFrom="center"
                                className="text-2xl md:text-3xl font-semibold text-[#3B82F6] mb-6"
                                splitBy="words"
                                auto={showContent}
                            />

                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto pt-5">
                                We transform your digital dreams into reality with our creative and professional IT solutions. Let's build something amazing together!
                            </p>

                            {/* CTA Buttons - Fixed structure */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16 relative z-20">
                                <Link 
                                    href="/contact" 
                                    className="bg-[#3B82F6] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#2563EB] transition-colors flex justify-center items-center gap-2 cursor-pointer"
                                >
                                    <span>Get In Touch</span>
                                    <img src="/getintouch.gif" alt="Arrow" className="w-7 h-7 sm:w-9 sm:h-9" />
                                </Link>

                                <Link 
                                    href="#services"
                                    className="border-2 border-[#3B82F6] text-[#3B82F6] px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#3B82F6] hover:text-white transition-colors cursor-pointer"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
