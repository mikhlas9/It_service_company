import RollingGallery from './RollingGallery'

const Features = () => {
  return (
    <section className="relative overflow-hidden py-10"> {/* Removed py-16 padding */}
      <div className="container mx-auto"> {/* Removed px-4 padding */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#3B82F6]">Solutions</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto px-2">
            Discover our comprehensive range of technology solutions designed to transform your business
          </p>
        </div>
        
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  )
}

export default Features
