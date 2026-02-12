
import React from 'react';
import { motion } from 'framer-motion';

const SectionStructure: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center px-4 lg:px-12 bg-white overflow-hidden relative">
      {/* Background Grid Hint */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => <div key={i} className="border-r border-black h-full" />)}
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1400px] h-full flex flex-col z-10 relative">
        
        {/* Header - Fixed at top */}
        <div className="pt-20 lg:pt-28 shrink-0 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">ESTRUCTURA <br/> NARRATIVA</h2>
        </div>

        {/* Narrative Flowchart - Perfectly Centered in remaining space */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-4 lg:gap-2">
            
            {/* 1. PERDIDA DE IDENTIDAD */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
               className="flex-1 flex flex-col relative w-full lg:w-auto"
            >
               <div className="border border-black p-4 bg-white w-full h-full flex flex-col justify-between min-h-[160px]">
                  <span className="text-[10px] font-bold opacity-40">( 01 )</span>
                  <h3 className="text-xs lg:text-sm font-bold uppercase leading-tight mt-auto">PÉRDIDA DE LA <br/>IDENTIDAD</h3>
               </div>
               
               {/* Arrow to 2 */}
               <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 items-center justify-center -translate-y-1/2 z-20 overflow-visible">
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="absolute -top-4 bg-white px-1 whitespace-nowrap">
                     <span className="text-[8px] tracking-widest font-bold uppercase">( PORQUE )</span>
                  </div>
                  <div className="w-2 h-2 border-t border-r border-black rotate-45 transform translate-x-[-4px]"></div>
               </div>
            </motion.div>

            {/* 2. REPETICIÓN */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
               className="flex-1 flex flex-col relative lg:pl-4 w-full lg:w-auto"
            >
               <div className="border border-black p-4 bg-white w-full h-full flex flex-col justify-between gap-2 min-h-[160px]">
                  <div>
                    <span className="text-[10px] font-bold opacity-40">( 02 )</span>
                    <h3 className="text-xs lg:text-sm font-bold uppercase mt-1">REPETICIÓN</h3>
                  </div>
                  <ul className="text-[9px] lg:text-[10px] leading-relaxed opacity-70 list-disc list-inside uppercase space-y-1 mt-auto">
                     <li>MINIMALISMO</li>
                     <li>ALGORITMOS</li>
                     <li>ETC..</li>
                  </ul>
               </div>

               {/* Arrow to 3 */}
               <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 items-center justify-center -translate-y-1/2 z-20">
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="w-2 h-2 border-t border-r border-black rotate-45 transform translate-x-[-4px]"></div>
               </div>
            </motion.div>

            {/* 3. CLEAN GIRL */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
               className="flex-[1.4] flex flex-col relative lg:pl-4 w-full lg:w-auto"
            >
               <div className="border border-black p-4 bg-white w-full h-full flex flex-col justify-between gap-2 min-h-[160px]">
                  <div className="flex justify-between items-start">
                     <span className="text-[10px] font-bold opacity-40">( 03 )</span>
                     <h3 className="text-xs lg:text-sm font-bold uppercase bg-black text-white px-1">CLEAN GIRL</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-auto pt-2">
                     {['¿ORIGEN?', '¿NOMBRE?', '¿QUÉ ES?', '¿SIGNOS VISUALES?', '¿ASPIRACIÓN?', '¿MORALIDAD?', '¿ECONOMÍA?', '¿POLÍTICA?'].map((q, i) => (
                        <p key={i} className="text-[8px] lg:text-[9px] uppercase tracking-tight opacity-70 border-b border-black/10 pb-[1px] whitespace-nowrap">{q}</p>
                     ))}
                  </div>
               </div>

                {/* Arrow to 4 */}
               <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 items-center justify-center -translate-y-1/2 z-20">
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="w-2 h-2 border-t border-r border-black rotate-45 transform translate-x-[-4px]"></div>
               </div>
            </motion.div>

            {/* 4. SÍNTESIS */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
               className="flex-1 flex flex-col relative lg:pl-4 w-full lg:w-auto"
            >
               <div className="border border-black p-4 bg-white w-full h-full flex flex-col justify-between gap-2 min-h-[160px]">
                  <span className="text-[10px] font-bold opacity-40">( 04 )</span>
                  <h3 className="text-xs lg:text-sm font-bold uppercase leading-tight mt-auto">SÍNTESIS DE <br/> PRIMERA <br/> INVESTIGACIÓN</h3>
               </div>

               {/* Arrow to 5 */}
               <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 items-center justify-center -translate-y-1/2 z-20 overflow-visible">
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="absolute -top-4 bg-white px-1 whitespace-nowrap">
                     <span className="text-[8px] tracking-widest font-bold uppercase">( DEMOSTRACIÓN )</span>
                  </div>
                  <div className="w-2 h-2 border-t border-r border-black rotate-45 transform translate-x-[-4px]"></div>
               </div>
            </motion.div>

            {/* 5. COMPARACIÓN / SCENE KIDS */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
               className="flex-[1.4] flex flex-col relative lg:pl-4 w-full lg:w-auto"
            >
               <div className="border border-black p-4 bg-white w-full h-full flex flex-col justify-between gap-2 min-h-[160px]">
                  <div className="flex justify-between items-start">
                     <span className="text-[10px] font-bold opacity-40">( 05 )</span>
                     <h3 className="text-xs lg:text-sm font-bold uppercase bg-black text-white px-1">SCENE KIDS</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-auto pt-2">
                     {['¿ORIGEN?', '¿NOMBRE?', '¿QUÉ ES?', '¿SIGNOS VISUALES?', '¿ASPIRACIÓN?', '¿MORALIDAD?', '¿ECONOMÍA?', '¿POLÍTICA?'].map((q, i) => (
                        <p key={i} className="text-[8px] lg:text-[9px] uppercase tracking-tight opacity-70 border-b border-black/10 pb-[1px] whitespace-nowrap">{q}</p>
                     ))}
                  </div>
               </div>

               {/* Arrow to 6 */}
               <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 items-center justify-center -translate-y-1/2 z-20">
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="w-2 h-2 border-t border-r border-black rotate-45 transform translate-x-[-4px]"></div>
               </div>
            </motion.div>

            {/* 6. CONCLUSIONES */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
               className="flex-[1.2] flex flex-col relative lg:pl-4 w-full lg:w-auto"
            >
               <div className="border border-black p-4 bg-black text-white w-full h-full flex flex-col justify-between gap-2 min-h-[160px]">
                  <span className="text-[10px] font-bold opacity-40">( 06 )</span>
                  <div className="mt-auto">
                    <h3 className="text-xs lg:text-sm font-bold uppercase mb-2">CONCLUSIONES</h3>
                    <p className="text-[9px] lg:text-[10px] leading-relaxed opacity-80 uppercase">
                      IMPLICACIONES DE LOS AESTHETICS EN LA FORMACIÓN DE IDENTIDAD CONTEMPORÁNEA
                    </p>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStructure;
