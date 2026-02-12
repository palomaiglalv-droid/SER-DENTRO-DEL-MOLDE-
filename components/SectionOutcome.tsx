
import React from 'react';
import { motion } from 'framer-motion';

const SectionOutcome: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#f0f0f0] text-[#1a1a1a] relative flex flex-col px-8 lg:px-24 py-24 overflow-hidden border-t border-black/10">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <p className="font-mono text-[10px] tracking-[0.5em] opacity-30 uppercase">
          ( 05. EL DESENLACE : FORMATOS )
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-center gap-16 lg:gap-32 z-10">
        <div className="w-full lg:w-1/2 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-4xl lg:text-5xl font-bold tracking-tighter uppercase mb-6">
              LA <br /> MATERIALIZACIÓN
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[#1a1a1a]/70 max-w-sm uppercase tracking-wide">
              La investigación culmina en la deconstrucción física de estos moldes. El cuerpo deja de ser una unidad orgánica para convertirse en un sistema de piezas sustituibles.
            </p>
          </motion.div>

          <div className="space-y-6">
             {['01 VIDEO MANIFESTO', '02 INSTALACIÓN MDF', '03 EDITORIAL INTERACTIVO'].map((format, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.2 }}
                 className="flex items-center gap-4 group cursor-pointer"
               >
                 <div className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-black transition-colors" />
                 <p className="font-mono text-xs tracking-[0.3em] font-medium group-hover:translate-x-2 transition-transform duration-500 uppercase">{format}</p>
               </motion.div>
             ))}
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5 }}
           className="w-full lg:w-1/2 aspect-video bg-white relative overflow-hidden flex items-center justify-center border border-black/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Final visual"
          />
          <p className="font-mono text-[10px] tracking-[1em] text-black/40 uppercase absolute animate-pulse">
            ID_OPTIMIZATION_COMPLETE
          </p>
        </motion.div>
      </div>

      <div className="flex justify-between items-baseline pt-12 border-t border-black/10 mt-auto">
        <p className="font-mono text-[9px] tracking-[0.4em] opacity-40 uppercase">TFG / SER (DENTRO DEL MOLDE)</p>
        <p className="font-mono text-[9px] tracking-[0.4em] opacity-40 uppercase">2026 // INVESTIGACIÓN TEÓRICA</p>
      </div>
    </div>
  );
};

export default SectionOutcome;
