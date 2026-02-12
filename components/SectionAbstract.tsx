
import React from 'react';
import { motion } from 'framer-motion';

const SectionAbstract: React.FC = () => {
  return (
    <div className="h-full w-full bg-white relative flex flex-col lg:flex-row px-8 lg:px-24">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <p className="font-mono text-[10px] tracking-[0.5em] opacity-40 uppercase">
          ( 01. EL PROBLEMA )
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center pt-24 lg:pt-0">
        <div className="max-w-md space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-6">
              ESTÉTICA <br /> NO ES FORMA
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[#1a1a1a]/70">
              Partiendo de la idea de que la estética no es únicamente una cuestión formal, sino un sistema de signos que interviene en los procesos de construcción identitaria. Investigamos cómo el "Clean Girl Aesthetic" neutraliza la identidad individual.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="text-[10px] font-mono tracking-[0.3em] font-bold opacity-30"># CONTEXTO</p>
            <div className="w-full h-[1px] bg-black/5" />
            <p className="font-mono text-[11px] leading-relaxed text-[#1a1a1a]/50 italic">
              "En un contexto dominado por la imagen y la circulación rápida, las estéticas digitales actúan como modelos de representación y autoidentificación."
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 relative">
        <div className="w-full aspect-[4/5] relative overflow-hidden bg-[#f0f0f0]">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop"
            alt="Digital Context"
            className="w-full h-full object-cover grayscale brightness-90"
          />
          <div className="absolute bottom-6 right-6">
             <span className="font-mono text-[9px] tracking-[0.4em] text-white/50 uppercase">
               DATA_REF_01
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbstract;
