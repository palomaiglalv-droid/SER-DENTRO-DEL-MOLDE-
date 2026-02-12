
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente simple: Intenta cargar la ruta exacta, si falla usa fallback
const ResilientImage = ({ src, fallbackSrc, alt, className }: { src: string, fallbackSrc: string, alt: string, className: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      console.warn(`Local asset not found: ${src}. Switching to fallback.`);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
};

const SectionCover: React.FC = () => {
  // Configuración exacta con las rutas solicitadas
  const collageImages = [
    { 
      id: "01_ATMOSPHERE", 
      src: "/assets/clean_motion_blur.jpg",
      fallback: "https://images.unsplash.com/photo-1496345962527-29757c3a3d94?q=80&w=2070&auto=format&fit=crop",
      className: "top-[-10%] left-[-5%] w-[45%] h-[70%] z-[1] opacity-40 mix-blend-multiply grayscale contrast-125" 
    },
    { 
      id: "02_PUNK_GUY", 
      src: "/assets/scene_guy_yellow.jpg",
      fallback: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=2064&auto=format&fit=crop",
      className: "top-[8%] right-[2%] w-[28%] h-[auto] aspect-[4/3] z-[3] rotate-6 hover:rotate-0 transition-transform duration-700 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] border-4 border-white" 
    },
    { 
      id: "03_PROFILE", 
      src: "/assets/clean_profile_silhouette.jpg",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      className: "top-[32%] left-[12%] w-[16%] h-[auto] aspect-[3/4] z-[2] opacity-90 grayscale brightness-90" 
    },
    { 
      id: "04_DETAIL", 
      src: "/assets/clean_lips_glossy.jpg",
      fallback: "https://images.unsplash.com/photo-1588513519863-75b285145dc2?q=80&w=2070&auto=format&fit=crop",
      className: "top-[45%] left-[42%] w-[22%] h-[auto] aspect-[16/9] z-[10] hover:scale-105 transition-transform duration-500 shadow-2xl border border-white/40" 
    },
    { 
      id: "05_CLUB_SCENE", 
      src: "/assets/scene_club_girls.jpg",
      fallback: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop",
      className: "bottom-[8%] left-[6%] w-[32%] h-[auto] aspect-[4/3] z-[4] -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-xl" 
    },
    { 
      id: "06_ROOFTOP", 
      src: "/assets/scene_rooftop_group.jpg",
      fallback: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2094&auto=format&fit=crop",
      className: "bottom-[-10%] right-[-10%] w-[55%] h-[auto] aspect-[3/2] z-[1] opacity-50 grayscale mix-blend-multiply" 
    }
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center px-8 overflow-hidden bg-[#f5f5f3]">
      {collageImages.map((img, i) => (
        <motion.div 
          key={img.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className={`absolute bg-gray-200 ${img.className} overflow-hidden`}
        >
          <ResilientImage 
            src={img.src} 
            fallbackSrc={img.fallback}
            alt={`REF_${img.id}`} 
            className="w-full h-full object-cover"
          />
          <div className="mt-2 hidden lg:block absolute -bottom-6 left-0">
            <span className="text-[8px] tracking-[0.2em] opacity-40 uppercase bg-[#f5f5f3]/80 px-1 backdrop-blur-sm">
              ( REF : {img.id} )
            </span>
          </div>
        </motion.div>
      ))}

      <div className="z-20 text-center flex flex-col items-center mix-blend-difference text-[#1a1a1a] pointer-events-none mt-[-5%]">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[15vw] leading-none tracking-tight font-bold font-serif"
        >
          SER
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-2 text-[10px] lg:text-[12px] tracking-[0.6em] font-medium uppercase opacity-60"
        >
          ( DENTRO DEL MOLDE )
        </motion.p>
      </div>
    </div>
  );
};

export default SectionCover;
