
import React from 'react';
import { motion } from 'framer-motion';

const SectionStructure: React.FC = () => {
  const cleanGirlPoints = [
    "PARADIGMA VISUAL HEGEMÓNICO",
    "NEUTRALIZACIÓN DE LA IDENTIDAD",
    "PROMESA NEOLIBERAL (AUTO-OPTIMIZACIÓN)",
    "CUERPO COMO LIENZO MONETIZABLE"
  ];

  const sceneKidPoints = [
    "ÚLTIMA IDENTIDAD JUVENIL DIFERENCIADA",
    "LENGUAJE DE PERTENENCIA (CÓDIGOS CLAROS)",
    "EXCESO Y SATURACIÓN COMO DIFERENCIACIÓN",
    "CONSTRUCCIÓN ACTIVA DEL YO (MYSPACE)"
  ];

  return (
    <div className="h-full w-full flex flex-col lg:flex-row bg-[#f5f5f3] relative overflow-hidden">
      
      {/* LEFT COLUMN: CLEAN GIRL (Dominant / Modernity) */}
      <div className="w-full lg:w-1/2 h-full border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-center px-8 lg:px-24 relative bg-white">
        <div className="absolute top-8 lg:top-12 left-8 lg:left-12">
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-30 uppercase">( 03.A : OBJETO DE ESTUDIO )</span>
        </div>

        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
               CLEAN GIRL <br />
               <span className="text-black/20">AESTHETIC</span>
            </h2>
            
            <div className="flex flex-col gap-0">
                {cleanGirlPoints.map((point, index) => (
                    <div key={index} className="flex flex-col items-start w-full max-w-md">
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (index * 0.15) }}
                          className="flex items-center gap-4 bg-[#f5f5f3] px-4 py-3 border border-black/5 w-full relative z-10"
                        >
                            <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                            <p className="text-[10px] lg:text-xs font-mono uppercase tracking-wide font-bold">{point}</p>
                        </motion.div>
                        {index < cleanGirlPoints.length - 1 && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                whileInView={{ height: '24px', opacity: 1 }}
                                transition={{ delay: 0.4 + (index * 0.15), duration: 0.3 }}
                                className="pl-6 border-l border-dashed border-black/30 ml-[19px]"
                            >
                              {/* Connector line space */}
                            </motion.div>
                        )}
                        {index < cleanGirlPoints.length - 1 && (
                             <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 + (index * 0.15) }}
                                className="ml-[15.5px] -mt-1 text-[8px] opacity-50 mb-1"
                             >▼</motion.div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: SCENE KIDS (Resistance / History) */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-24 relative bg-[#eaeaea] text-black">
         <div className="absolute top-8 lg:top-12 right-8 lg:right-12 text-right">
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-30 uppercase">( 03.B : LÓGICAS OPUESTAS )</span>
        </div>

        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-left lg:text-right flex flex-col lg:items-end"
        >
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
               SCENE KIDS <br />
               <span className="opacity-30">2000s</span>
            </h2>

            <div className="flex flex-col gap-0 lg:items-end w-full">
                 {sceneKidPoints.map((point, index) => (
                    <div key={index} className="flex flex-col lg:items-end w-full max-w-md">
                        <motion.div 
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (index * 0.15) }}
                          className="flex items-center gap-4 bg-white px-4 py-3 border border-black/5 w-full justify-between lg:justify-end relative z-10"
                        >
                            <p className="text-[10px] lg:text-xs font-mono uppercase tracking-wide font-bold text-left lg:text-right order-2 lg:order-1">{point}</p>
                            <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0 order-1 lg:order-2"></span>
                        </motion.div>
                        
                        {index < sceneKidPoints.length - 1 && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                whileInView={{ height: '24px', opacity: 1 }}
                                transition={{ delay: 0.6 + (index * 0.15), duration: 0.3 }}
                                className="pr-6 lg:border-r border-l lg:border-l-0 border-dashed border-black/30 ml-[19px] lg:ml-0 mr-[19px]"
                            >
                               {/* Connector line space */}
                            </motion.div>
                        )}
                         {index < sceneKidPoints.length - 1 && (
                             <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7 + (index * 0.15) }}
                                className="ml-[15.5px] lg:ml-0 lg:mr-[15.5px] -mt-1 text-[8px] opacity-50 mb-1 self-start lg:self-end"
                             >▼</motion.div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
      </div>

      {/* CENTER DIVIDER (Desktop only) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-32 bg-black/20 hidden lg:block"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase hidden lg:block tracking-widest">
        VS
      </div>

    </div>
  );
};

export default SectionStructure;
