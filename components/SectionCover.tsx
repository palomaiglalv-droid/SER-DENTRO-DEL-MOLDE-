
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente robusto: Prioriza URL remota (GitHub), luego Local, luego Fallback
const ResilientImage = ({ filename, remoteUrl, fallbackSrc, alt, className, id }: { filename: string, remoteUrl?: string, fallbackSrc: string, alt: string, className: string, id: string }) => {
  const [attempt, setAttempt] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const [isError, setIsError] = useState(false);

  // 1. Si el usuario puso un link de GitHub (remoteUrl), intentamos cargar ese primero.
  // 2. Si no, o si falla, intentamos rutas locales.
  const localCandidates = [
    `assets/${filename}.jpg`,
    `/assets/${filename}.jpg`,
    `assets/${filename}.JPG`
  ];

  // Lógica de fuente de imagen
  let currentSrc;

  if (remoteUrl && attempt === -1) {
     // Intento especial: Usar URL remota directa
     currentSrc = remoteUrl;
  } else if (useFallback) {
     currentSrc = fallbackSrc;
  } else {
     // Si remoteUrl falló (o no existe), usamos locales
     // Si remoteUrl existía, attempt empezará en 0 tras el fallo
     currentSrc = localCandidates[attempt];
  }

  // Inicializar estado: si hay remoteUrl, el "intento" es -1 (prioridad máxima)
  React.useEffect(() => {
    if (remoteUrl) setAttempt(-1);
  }, [remoteUrl]);

  const handleError = () => {
    if (attempt === -1) {
      // Falló el link de GitHub, pasamos a intentar locales
      console.log(`Remote URL failed for ${id}, trying locals.`);
      setAttempt(0);
    } else if (attempt < localCandidates.length - 1) {
      // Probamos siguiente ruta local
      setAttempt(prev => prev + 1);
    } else {
      // Fallaron locales, vamos al fallback de Unsplash
      if (!useFallback) {
        console.log(`All locals failed for ${id}, switching to fallback.`);
        setUseFallback(true);
      } else {
        setIsError(true);
      }
    }
  };

  if (isError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 border border-gray-300">
        <span className="text-[8px] font-bold text-gray-400">IMG ERROR</span>
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
  // =====================================================================
  // INSTRUCCIONES PARA GITHUB:
  // 1. Sube tus fotos a un repositorio público de GitHub.
  // 2. Abre la imagen en GitHub, click derecho en botón "Raw" -> Copiar enlace.
  // 3. Pega ese enlace en el campo 'remoteUrl' de cada imagen abajo.
  // =====================================================================
  
  const collageImages = [
    { 
      id: "01_ATMOSPHERE", 
      name: "clean_motion_blur", 
      // PEGA TU LINK DE GITHUB AQUI ABAJO (dentro de las comillas):
      remoteUrl: "", 
      fallback: "https://images.unsplash.com/photo-1496345962527-29757c3a3d94?q=80&w=2070&auto=format&fit=crop",
      className: "top-[-10%] left-[-5%] w-[45%] h-[70%] z-[1] opacity-40 mix-blend-multiply grayscale contrast-125" 
    },
    { 
      id: "02_PUNK_GUY", 
      name: "scene_guy_yellow", 
      // PEGA TU LINK DE GITHUB AQUI ABAJO:
      remoteUrl: "", 
      fallback: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=2064&auto=format&fit=crop",
      className: "top-[8%] right-[2%] w-[28%] h-[auto] aspect-[4/3] z-[3] rotate-6 hover:rotate-0 transition-transform duration-700 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] border-4 border-white" 
    },
    { 
      id: "03_PROFILE", 
      name: "clean_profile_silhouette", 
      // PEGA TU LINK DE GITHUB AQUI ABAJO:
      remoteUrl: "", 
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      className: "top-[32%] left-[12%] w-[16%] h-[auto] aspect-[3/4] z-[2] opacity-90 grayscale brightness-90" 
    },
    { 
      id: "04_DETAIL", 
      name: "clean_lips_glossy", 
      // PEGA TU LINK DE GITHUB AQUI ABAJO:
      remoteUrl: "", 
      fallback: "https://images.unsplash.com/photo-1588513519863-75b285145dc2?q=80&w=2070&auto=format&fit=crop",
      className: "top-[45%] left-[42%] w-[22%] h-[auto] aspect-[16/9] z-[10] hover:scale-105 transition-transform duration-500 shadow-2xl border border-white/40" 
    },
    { 
      id: "05_CLUB_SCENE", 
      name: "scene_club_girls", 
      // PEGA TU LINK DE GITHUB AQUI ABAJO:
      remoteUrl: "", 
      fallback: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop",
      className: "bottom-[8%] left-[6%] w-[32%] h-[auto] aspect-[4/3] z-[4] -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-xl" 
    },
    { 
      id: "06_ROOFTOP", 
      name: "scene_rooftop_group", 
      // PEGA TU LINK DE GITHUB AQUI ABAJO:
      remoteUrl: "", 
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
            filename={img.name} 
            remoteUrl={img.remoteUrl}
            fallbackSrc={img.fallback}
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
