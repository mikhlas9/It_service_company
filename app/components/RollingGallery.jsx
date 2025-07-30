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
    image: "/f3.png",
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

  // Initialize with a default value instead of null
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // All hooks must be called before any conditional returns
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Calculate cylinder dimensions for seamless rotation
  const faceCount = cards.length;
  const faceWidth = isScreenSizeSm ? 170 : 400;
  const cylinderWidth = faceWidth * faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  // Use full 360 degrees for seamless rotation
  const anglePerCard = 360 / faceCount;

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
    // Set client-side flag and detect screen size
    const checkScreenSize = () => {
      setIsScreenSizeSm(window.innerWidth <= 768);
      setIsClient(true);
    };
    
    // Set initial values
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (autoplay && isClient) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay, isClient]);

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

  // Show loading state only after hooks are called
  if (!isClient) {
    return (
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${isScreenSizeSm ? 'h-[400px]' : 'h-[750px]'}`}>
      {/* Gradient overlays */}
      <div
        className={`absolute top-0 left-0 h-full z-10 ${isScreenSizeSm ? 'w-[30px]' : 'w-[120px]'}`}
        style={{
          background:
            "linear-gradient(to left, rgba(15,23,42,0) 0%, rgba(15,23,42,0.9) 100%)",
        }}
      />
      <div
        className={`absolute top-0 right-0 h-full z-10 ${isScreenSizeSm ? 'w-[30px]' : 'w-[120px]'}`}
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
          className={`flex cursor-grab items-center justify-center [transform-style:preserve-3d] ${isScreenSizeSm ? 'min-h-[380px]' : 'min-h-[730px]'}`}
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
                  ? 'w-[230px] h-[300px]'
                  : 'w-[400px] h-[480px]'
              }`}>
                {/* Image container */}
                <div className={`flex items-center justify-center relative overflow-hidden ${
                  isScreenSizeSm ? 'p-3 h-[120px]' : 'p-6 h-[220px]'
                }`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
                        isScreenSizeSm ? 'max-w-[90px] max-h-[90px]' : 'max-w-[180px] max-h-[180px]'
                      }`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg items-center justify-center">
                      <div className="text-slate-300 text-xl font-bold">&lt;/&gt;</div>
                    </div>
                  </div>
                </div>
                
                {/* Text content */}
                <div className={`flex flex-col justify-center items-center text-center flex-1 ${
                  isScreenSizeSm ? 'p-3 pb-4' : 'p-6 pb-8'
                }`}>
                  <h3 className={`text-white font-bold mb-2 leading-tight group-hover:text-blue-100 transition-colors duration-300 ${
                    isScreenSizeSm ? 'text-sm' : 'text-3xl'
                  }`}>
                    {card.title}
                  </h3>
                  
                  <p className={`text-slate-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${
                    isScreenSizeSm ? 'text-xs leading-tight' : 'text-base'
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
