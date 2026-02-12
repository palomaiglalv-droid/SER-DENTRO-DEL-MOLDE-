
import React from 'react';
import { motion } from 'framer-motion';

const SectionCover: React.FC = () => {
  // Mapping of user-provided images to the layout
  // 1. Motion Blur Girl (Clean Girl)
  // 2. Yellow Shirt Punk (Scene)
  // 3. Profile Silhouette (Clean Girl)
  // 4. Glossy Lips (Clean Girl)
  // 5. Girl with Bow (Scene)
  // 6. Group on Rooftop (Scene)
  
  const collageImages = [
    { 
      // 1. Motion Blur (Background Layer - Top Left)
      src: "/assets/cover_motion.jpg", 
      id: "01_MOTION", 
      className: "top-[-5%] left-[-5%] w-[45%] h-[60%] z-[1] opacity-60 mix-blend-multiply" 
    },
    { 
      // 2. Scene Punk / Yellow Shirt (Feature - Top Right)
      src: "/assets/cover_scene_punk.jpg", 
      id: "02_PUNK", 
      className: "top-[15%] right-[5%] w-[25%] h-[35%] z-[3] rotate-3 hover:rotate-0 transition-transform duration-700 shadow-xl" 
    },
    { 
      // 3. Profile Silhouette (Mid Layer - Left)
      src: "/assets/cover_profile.jpg", 
      id: "03_PROFILE", 
      className: "top-[40%] left-[5%] w-[20%] h-[30%] z-[2] opacity-80 grayscale" 
    },
    { 
      // 4. Glossy Lips (Detail - Center Floating)
      src: "/assets/cover_lips.jpg", 
      id: "04_LIPS", 
      className: "top-[30%] left-[38%] w-[16%] h-[20%] z-[5] hover:scale-105 transition-transform duration-500 shadow-2xl border border-white/20" 
    },
    { 
      // 5. Girl with Bow (Feature - Bottom Left)
      src: "/assets/cover_scene_bow.jpg", 
      id: "05_BOW", 
      className: "bottom-[5%] left-[18%] w-[22%] h-[32%] z-[4] -rotate-2 hover:rotate-0 transition-transform duration-700" 
    },
    { 
      // 6. Scene Group (Background Layer - Bottom Right)
      src: "/assets/cover_scene_group.jpg", 
      id: "06_GROUP", 
      className: "bottom-[-8%] right-[-8%] w-[48%] h-[48%] z-[1] opacity-70 grayscale mix-blend-multiply" 
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
          className={`absolute bg-black/5 ${img.className}`}
        >
          <img 
            src={img.src} 
            alt={`REF_${img.id}`} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback for demo purposes if image is missing
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'border', 'border-black');
              e.currentTarget.parentElement!.innerHTML = `<span class="text-[9px] font-bold tracking-widest text-black/50">${img.id}</span>`;
            }}
          />
          <div className="mt-2 hidden lg:block absolute -bottom-6 left-0">
            <span className="text-[8px] tracking-[0.2em] opacity-40 uppercase bg-[#f5f5f3]/80 px-1 backdrop-blur-sm">
              ( REF : {img.id} )
            </span>
          </div>
        </motion.div>
      ))}

      <div className="z-20 text-center flex flex-col items-center mix-blend-difference text-[#1a1a1a] pointer-events-none">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[15vw] leading-none tracking-tight font-bold"
        >
          SER
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-4 text-[10px] lg:text-[12px] tracking-[0.6em] font-medium uppercase opacity-60"
        >
          ( DENTRO DEL MOLDE )
        </motion.p>
      </div>
    </div>
  );
};

export default SectionCover;
