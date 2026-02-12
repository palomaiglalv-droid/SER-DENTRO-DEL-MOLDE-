
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente robusto para cargar imágenes
// Intenta varias rutas y extensiones automáticamente si falla la primera
const ResilientImage = ({ filename, alt, className, id }: { filename: string, alt: string, className: string, id: string }) => {
  const [attempt, setAttempt] = useState(0);
  const [isError, setIsError] = useState(false);

  // Lista de intentos en orden de prioridad
  // 1. Ruta relativa simple (assets/file.jpg) - Lo más probable
  // 2. Ruta absoluta (/assets/file.jpg) - Para servidores específicos
  // 3. Variaciones de mayúsculas/minúsculas o extensión .jpeg por si acaso
  const candidates = [
    `assets/${filename}.jpg`,
    `/assets/${filename}.jpg`,
    `assets/${filename}.JPG`,
    `assets/${filename}.jpeg`,
    `./assets/${filename}.jpg`
  ];

  const currentSrc = candidates[attempt];

  const handleError = () => {
    if (attempt < candidates.length - 1) {
      setAttempt(prev => prev + 1);
    } else {
      setIsError(true);
    }
  };

  if (isError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 border border-red-200">
        <div className="text-center p-1">
          <p className="text-[8px] font-bold text-red-500 tracking-widest">NO ENCONTRADA</p>
          <p className="text-[6px] font-mono text-red-400 mt-1 break-all px-2">
            Verifica que <b>{filename}.jpg</b> esté en la carpeta <b>assets</b>
          </p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
};

const SectionCover: React.FC = () => {
  // Lista de imágenes utilizando solo el nombre del archivo (sin extensión ni ruta)
  // El componente ResilientImage se encarga de buscarlo
  const collageImages = [
    { 
      name: "clean_motion_blur", 
      id: "01_ATMOSPHERE", 
      className: "top-[-10%] left-[-5%] w-[45%] h-[70%] z-[1] opacity-40 mix-blend-multiply grayscale contrast-125" 
    },
    { 
      name: "scene_guy_yellow", 
      id: "02_PUNK_GUY", 
      className: "top-[8%] right-[2%] w-[28%] h-[auto] aspect-[4/3] z-[3] rotate-6 hover:rotate-0 transition-transform duration-700 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] border-4 border-white" 
    },
    { 
      name: "clean_profile_silhouette", 
      id: "03_PROFILE", 
      className: "top-[32%] left-[12%] w-[16%] h-[auto] aspect-[3/4] z-[2] opacity-90 grayscale brightness-90" 
    },
    { 
      name: "clean_lips_glossy", 
      id: "04_DETAIL", 
      className: "top-[45%] left-[42%] w-[22%] h-[auto] aspect-[16/9] z-[10] hover:scale-105 transition-transform duration-500 shadow-2xl border border-white/40" 
    },
    { 
      name: "scene_club_girls", 
      id: "05_CLUB_SCENE", 
      className: "bottom-[8%] left-[6%] w-[32%] h-[auto] aspect-[4/3] z-[4] -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-xl" 
    },
    { 
      name: "scene_rooftop_group", 
      id: "06_ROOFTOP", 
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
            filename={img.name} 
            alt={`REF_${img.id}`} 
            id={img.id}
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
