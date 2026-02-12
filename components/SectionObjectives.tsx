
import React from 'react';
import { motion } from 'framer-motion';

const SectionObjectives: React.FC = () => {
  const specificObjectives = [
    "Analizar los códigos visuales y formales que definen el clean girl aesthetic.",
    "Identificar los valores simbólicos y discursivos asociados a esta estética en redes sociales.",
    "Examinar cómo la repetición y estandarización visual influyen en los procesos de representación identitaria.",
    "Contextualizar el clean girl aesthetic dentro del ecosistema digital contemporáneo.",
    "Introducir la estética scene de los años 2000 como referencia histórica para ampliar la reflexión sobre identidad y expresión visual.",
    "Explorar el papel del diseño gráfico en la construcción, difusión y legitimación de estos aesthetics digitales."
  ];

  return (
    <div className="min-h-[100dvh] lg:h-full w-full bg-white flex flex-col lg:flex-row px-8 lg:px-12 py-24 lg:py-0 overflow-y-auto lg:overflow-hidden relative">
      
      {/* LEFT COLUMN: Objetivo General (Now 2.1) */}
      <div className="w-full lg:w-5/12 lg:h-full flex flex-col justify-center lg:pr-16 relative z-10 shrink-0">
         
         {/* 2.1 OBJETIVO GENERAL */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-transparent p-6 lg:p-8 border border-black space-y-4 relative"
         >
            <div className="absolute top-4 right-4 w-2 h-2 bg-black rounded-full"></div>
            <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.2em] font-bold opacity-40">( 2.1 )</span>
                <h3 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">OBJETIVO <br/> GENERAL</h3>
            </div>
            <p className="font-mono text-[10px] lg:text-[11px] leading-relaxed opacity-80 uppercase font-medium">
                Estudiar el clean girl aesthetic como fenómeno visual dominante en redes sociales para comprender su papel en los modelos identitarios actuales.
            </p>
         </motion.div>

      </div>

      {/* RIGHT COLUMN: Specific Objectives List (Now 2.2) */}
      <div className="w-full lg:w-7/12 lg:h-full flex flex-col justify-center relative z-10 lg:pl-16 lg:border-l border-black/5 mt-12 lg:mt-0">
        
        <div className="mb-6 lg:mb-10 flex items-end justify-between border-b border-black pb-4">
            <div>
                <span className="block text-[10px] tracking-[0.2em] opacity-40 mb-1">( 2.2 )</span>
                <h3 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">OBJETIVOS <br/> ESPECÍFICOS</h3>
            </div>
            <div className="hidden lg:block">
                <span className="text-[9px] font-mono tracking-widest opacity-40 uppercase">[ LIST_VIEW ]</span>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-3 overflow-visible lg:pr-2">
            {specificObjectives.map((obj, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4 py-3 border-b border-black/5 group hover:bg-[#f5f5f3] transition-colors pl-3 relative"
                >
                    <div className="absolute left-0 top-4 w-[2px] h-0 bg-black group-hover:h-[60%] transition-all duration-300"></div>
                    <span className="font-mono text-[10px] font-bold min-w-[24px] pt-[2px] opacity-30 group-hover:opacity-100 transition-opacity">
                        {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="font-mono text-[10px] lg:text-xs uppercase leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                        {obj}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>

    </div>
  );
};

export default SectionObjectives;
