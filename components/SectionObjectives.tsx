
import React from 'react';
import { motion } from 'framer-motion';

const SectionObjectives: React.FC = () => {
  const objectives = [
    "ANALIZAR CÓDIGOS VISUALES DEL CLEAN GIRL AESTHETIC.",
    "IDENTIFICAR VALORES SIMBÓLICOS EN REDES SOCIALES.",
    "EXAMINAR LA REPETICIÓN Y ESTANDARIZACIÓN VISUAL.",
    "CONTEXTUALIZAR DENTRO DEL ECOSISTEMA DIGITAL.",
    "INTRODUCIR LA ESTÉTICA SCENE COMO REFERENTE HISTÓRICO."
  ];

  return (
    <div className="h-full w-full bg-white flex items-center justify-center px-8 lg:px-24 overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col justify-center h-full">
        <div className="flex items-baseline justify-between border-b border-black mb-6 lg:mb-10 pb-4 shrink-0">
           <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter">OBJETIVOS</h2>
           <span className="text-[10px] tracking-[0.2em] opacity-40">( TARGET_LIST )</span>
        </div>

        <div className="grid grid-cols-1 gap-2 lg:gap-4 shrink-0">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 lg:gap-6 group hover:bg-[#f5f5f3] p-3 lg:p-4 transition-colors border-l-2 border-transparent hover:border-black"
            >
              <span className="text-[10px] lg:text-xs font-bold font-mono min-w-[30px]">
                ( {(i + 1).toString().padStart(2, '0')} )
              </span>
              <p className="text-sm lg:text-xl tracking-tight uppercase opacity-80 group-hover:opacity-100 truncate">
                {obj}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 lg:mt-12 p-4 lg:p-6 border border-black/10 bg-[#f9f9f9] shrink-0">
           <p className="text-[10px] lg:text-xs uppercase tracking-wide leading-relaxed opacity-60 text-center">
             ( OBJETIVO GENERAL: ESTUDIAR EL CLEAN GIRL AESTHETIC COMO FENÓMENO VISUAL DOMINANTE PARA COMPRENDER SU PAPEL EN LOS MODELOS IDENTITARIOS ACTUALES. )
           </p>
        </div>
      </div>
    </div>
  );
};

export default SectionObjectives;
