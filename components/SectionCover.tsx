
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente: Intenta cargar la ruta local. Si falla, muestra un placeholder técnico con una X.
const ResilientImage = ({ src, id, alt, className }: { src: string, id: string, alt: string, className: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`relative bg-black border border-white flex items-center justify-center overflow-hidden ${className}`}>
        {/* Cruz (X) SVG que se adapta al contenedor - Color Blanco */}
        <svg className="absolute inset-0 w-full h-full text-white pointer-events-none" preserveAspectRatio="none">
           <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
        
        {/* Mensaje de Error - Texto Blanco sobre fondo Negro */}
        <div className="z-10 flex flex-col items-center justify-center text-center p-2">
            <span className="bg-black px-2 py-1 border border-white text-[8px] lg:text-[10px] font-mono tracking-widest text-white font-bold uppercase whitespace-nowrap">
                IDENTITY_ERROR
            </span>
            <span className="mt-1 text-[8px] font-mono tracking-widest text-white uppercase">
                {id}_NOT_FOUND
            </span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

const SectionCover: React.FC = () => {
  // Configuración de rutas locales. 
  // NOTA: Se han roto intencionalmente los links para mostrar el diseño "Error".
  // Se han ajustado las posiciones para dejar el centro libre para el título.
  const collageImages = [
    { 
      id: "01_ATMOSPHERE", 
      src: "MISSING_FILE_01",
      // Esquina Superior Izquierda
      className: "top-0 left-0 w-[25vw] h-[45vh] z-[1] opacity-40 mix-blend-multiply grayscale contrast-125" 
    },
    { 
      id: "02_PUNK_GUY", 
      src: "MISSING_FILE_02",
      // Esquina Superior Derecha - Sombra eliminada
      className: "top-[5%] right-[5%] w-[18vw] h-[auto] aspect-[4/3] z-[3] rotate-6 hover:rotate-0 transition-transform duration-700 border-4 border-white" 
    },
    { 
      id: "03_PROFILE", 
      src: "MISSING_FILE_03",
      // Lateral Izquierdo (Alejado del centro)
      className: "top-[50%] left-[2%] w-[12vw] h-[auto] aspect-[3/4] z-[2] opacity-90 grayscale brightness-90 -translate-y-1/2" 
    },
    { 
      id: "04_DETAIL", 
      src: "MISSING_FILE_04",
      // Lateral Derecho (Alejado del centro)
      className: "top-[55%] right-[3%] w-[15vw] h-[auto] aspect-[16/9] z-[10] hover:scale-105 transition-transform duration-500 shadow-2xl border border-white/40 -translate-y-1/2" 
    },
    { 
      id: "05_CLUB_SCENE", 
      src: "MISSING_FILE_05",
      // Esquina Inferior Izquierda
      className: "bottom-[5%] left-[5%] w-[20vw] h-[auto] aspect-[4/3] z-[4] -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-xl" 
    },
    { 
      id: "06_ROOFTOP", 
      src: "MISSING_FILE_06",
      // Esquina Inferior Derecha
      className: "bottom-0 right-0 w-[35vw] h-[auto] aspect-[3/2] z-[1] opacity-50 grayscale mix-blend-multiply" 
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
          className={`absolute ${img.className} overflow-hidden`}
        >
          <ResilientImage 
            src={img.src} 
            id={img.id}
            alt={`REF_${img.id}`} 
            className="w-full h-full object-cover"
          />
          {/* Label flotante solo si no es error (opcional, pero estético dejarlo fuera del componente de imagen) */}
          <div className="mt-2 hidden lg:block absolute -bottom-6 left-0 pointer-events-none">
            <span className="text-[8px] tracking-[0.2em] opacity-40 uppercase bg-[#f5f5f3]/80 px-1 backdrop-blur-sm">
              ( REF : {img.id} )
            </span>
          </div>
        </motion.div>
      ))}

      <div className="z-20 text-center flex flex-col items-center text-black pointer-events-none mt-[-2%]">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[18vw] leading-none tracking-tight font-bold font-mono"
        >
          SER
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-4 text-[10px] lg:text-[14px] tracking-[0.8em] font-medium uppercase opacity-60 font-mono"
        >
          ( DENTRO DEL MOLDE )
        </motion.p>
      </div>
    </div>
  );
};

export default SectionCover;
