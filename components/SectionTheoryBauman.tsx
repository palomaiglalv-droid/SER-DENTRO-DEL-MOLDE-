
import React from 'react';
import { motion } from 'framer-motion';

const SectionTheoryBauman: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#f5f5f3] relative flex flex-col justify-center px-8 lg:px-24 py-24 overflow-hidden border-b border-black/5">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <p className="font-mono text-[10px] tracking-[0.5em] opacity-40 uppercase">
          ( 02. FUNDAMENTACIÓN : BAUMAN )
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.85]">
              IDENTIDAD <br /> LÍQUIDA
            </h2>
            <p className="mt-8 font-mono text-[11px] tracking-[0.4em] opacity-30 uppercase font-bold">
              // FRAGILIDAD & ADAPTABILIDAD
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <blockquote className="font-mono text-sm lg:text-base leading-relaxed text-[#1a1a1a]/80 border-l-4 border-black pl-8 italic">
              "La identidad está permanentemente in statu nascendi. Nunca completa del todo; no hay momento alguno de ese recorrido vital en el que la identidad sea 'definitiva'."
            </blockquote>
            <p className="mt-6 font-mono text-xs text-[#1a1a1a]/40 uppercase tracking-widest">
              — Zygmunt Bauman, Mundo Consumo
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex flex-col gap-8">
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="w-full aspect-square bg-gray-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
           >
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" 
                alt="Liquid reflection" 
                className="w-full h-full object-cover"
              />
           </motion.div>
           <p className="font-mono text-[10px] leading-relaxed text-[#1a1a1a]/60 uppercase tracking-wide">
             En la modernidad tardía, la identidad se convierte en una tarea pendiente de reajuste constante. El individuo se ve forzado a la auto-optimización para encajar en el flujo digital.
           </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTheoryBauman;
