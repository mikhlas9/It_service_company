'use client'
import { useEffect } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProfessionalBackground from '../components/ui/professional-background';

export default function ContactPage() {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "//code.tidio.co/kpwhsbpiahcb2b3ikvk19e8lck2mtlit.js";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

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
            <Header />

            {/* Background Blur Elements */}
            <div className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #000000 100%)'
      }}>
                {/* <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl" /> */}

                {/* Main Content */}
                <main className="pt-20 relative z-10 ">
                    <div className="container mx-auto px-6 mt-5">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Contact
                            </h2>
                            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                                Have questions, ideas, or projects you'd like to discuss? We're here to help! Whether you’re looking to transform your vision into reality or need expert advice, feel free to reach out. Let’s connect and create something incredible together.
                            </p>
                        </div>
                    </div>
                    <Contact />

                    {/* Map Section */}
                    <div className="container mx-auto mt-10 px-6">
                        <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                            Find Us on the Map
                        </h3>
                        {/* Centering the Map Container */}
                        <div className="flex justify-center mb-16">
                            <div className="border-2 border-[#3B82F6] w-full sm:w-2/3 shadow-lg rounded-lg overflow-hidden">
                                <iframe
                                    title="Location Map"
                                    className="w-full h-80 rounded-lg shadow-md"
                                    src={`https://www.openstreetmap.org/export/embed.html?bbox=74.825526%2C34.076152%2C74.833526%2C34.084152&layer=mapnik&marker=34.080152%2C74.829526`}
                                    width="100%"
                                    height="500"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
