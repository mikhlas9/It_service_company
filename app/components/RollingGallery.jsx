import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

// Card data with images from public folder
const CARDS = [
  {
    image: "/f3.png", // Replace with your actual image paths
    title: "Tailored IT Solutions",
    description: "Customized services designed to meet your unique business needs."
  },
  {
    image: "/f2.png",
    title: "Expert Team", 
    description: "Specialists in digital, web, and mobile development."
  },
  {
    image: "/f1.png",
    title: "Latest Technology",
    description: "Future-Proof Technology Solutions for Sustainable Business Growth"
  },
  {
    image: "/f4.png",
    title: "Crafting Custom IT Solutions",
    description: "Next, our team of experts develops tailored solutions."
  },
  {
    image: "/f5.png",
    title: "Scalability and Innovation",
    description: "Future-Proof Technology Solutions for Sustainable Business Growth"
  }
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  cards = [],
}) => {
  cards = cards.length > 0 ? cards : CARDS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate cylinder dimensions for seamless rotation
  const faceCount = cards.length;
  // Reduced mobile card width and increased desktop width for better visibility
  const faceWidth = isScreenSizeSm ? 200 : 400; // Even smaller for mobile to reduce gaps
  const cylinderWidth = faceWidth * faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  // Use full 360 degrees for seamless rotation
  const anglePerCard = 360 / faceCount;

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${isScreenSizeSm ? 'h-[500px]' : 'h-[750px]'}`}>
      {/* Gradient overlays - smaller for mobile */}
      <div
        className={`absolute top-0 left-0 h-full z-10 ${isScreenSizeSm ? 'w-[40px]' : 'w-[120px]'}`}
        style={{
          background:
            "linear-gradient(to left, rgba(15,23,42,0) 0%, rgba(15,23,42,0.9) 100%)",
        }}
      />
      <div
        className={`absolute top-0 right-0 h-full z-10 ${isScreenSizeSm ? 'w-[40px]' : 'w-[120px]'}`}
        style={{
          background:
            "linear-gradient(to right, rgba(15,23,42,0) 0%, rgba(15,23,42,0.9) 100%)",
        }}
      />

      <div className="flex h-full items-center justify-center [perspective:1500px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className={`flex cursor-grab items-center justify-center [transform-style:preserve-3d] ${isScreenSizeSm ? 'min-h-[480px]' : 'min-h-[730px]'}`}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${anglePerCard * i}deg) translateZ(${radius}px)`,
              }}
            >
              <div className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-slate-700/60 rounded-2xl flex flex-col transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-500/60 group-hover:shadow-2xl group-hover:shadow-blue-500/25 group-hover:from-slate-800/70 group-hover:to-slate-900/70 overflow-hidden ${
                isScreenSizeSm 
                  ? 'w-[240px] h-[320px]' 
                  : 'w-[400px] h-[480px]'
              }`}>
                {/* Image container - adjusted height to give more space to text */}
                <div className={`flex items-center justify-center relative overflow-hidden ${
                  isScreenSizeSm ? 'p-4 h-[180px]' : 'p-6 h-[220px]'
                }`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
                        isScreenSizeSm ? 'max-w-[140px] max-h-[140px]' : 'max-w-[180px] max-h-[180px]'
                      }`}
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder - hidden by default */}
                    <div className="hidden w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg items-center justify-center">
                      <div className="text-slate-300 text-2xl font-bold">&lt;/&gt;</div>
                    </div>
                  </div>
                </div>
                
                {/* Text content - expanded to take more space */}
                <div className={`flex flex-col justify-center items-center text-center flex-1 ${
                  isScreenSizeSm ? 'p-4 pb-6' : 'p-6 pb-8'
                }`}>
                  {/* Title - significantly larger on desktop */}
                  <h3 className={`text-white font-bold mb-3 leading-tight group-hover:text-blue-100 transition-colors duration-300 ${
                    isScreenSizeSm ? 'text-base' : 'text-3xl'
                  }`}>
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-slate-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${
                    isScreenSizeSm ? 'text-xs' : 'text-base'
                  }`}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
