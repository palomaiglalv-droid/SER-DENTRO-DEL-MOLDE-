
import React from 'react';
import { motion } from 'framer-motion';

const SectionJustification: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row bg-[#f5f5f3]">
      
      {/* Left: Clean Girl Analysis Justification */}
      <div className="w-full lg:w-1/2 h-full p-8 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/10 bg-white relative">
        <div className="absolute top-8 left-8">
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-30 uppercase">( 04.A : JUSTIFICACIÓN )</span>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                ANÁLISIS <br/> CLEAN GIRL
            </h2>
            
            <div className="space-y-6 max-w-md">
                <p className="font-mono text-xs lg:text-sm leading-relaxed text-justify uppercase opacity-70">
                    <span className="font-bold border-b border-black pb-0.5">HEGEMONÍA DE LA NEUTRALIDAD</span><br/><br/>
                    El "Clean Girl" funciona como el grado cero de la identidad digital actual. No es una tribu urbana, es el estándar corporativo de la belleza. Lo analizamos porque representa el éxito del algoritmo sobre la singularidad: ser "limpia" es ser legible, indexable y segura para las marcas.
                </p>
                <p className="font-mono text-xs lg:text-sm leading-relaxed text-justify uppercase opacity-70">
                     Es la estética de la auto-optimización neoliberal: el cuerpo tratado como una empresa que debe funcionar sin fricciones, ocultando el esfuerzo bajo una apariencia de naturalidad impostada.
                </p>
            </div>
        </motion.div>
      </div>

      {/* Right: Scene Kids Comparison Justification */}
      <div className="w-full lg:w-1/2 h-full p-8 lg:p-24 flex flex-col justify-center bg-[#eaeaea] text-black relative">
         <div className="absolute top-8 lg:top-8 right-8 lg:right-8 text-right">
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-30 uppercase">( 04.B : METODOLOGÍA )</span>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="lg:text-right flex flex-col lg:items-end"
        >
            <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                COMPARATIVA <br/> SCENE KIDS
            </h2>
            
            <div className="space-y-6 max-w-md">
                <p className="font-mono text-xs lg:text-sm leading-relaxed text-justify lg:text-right uppercase opacity-70">
                    <span className="font-bold border-b border-black pb-0.5">EL NEGATIVO HISTÓRICO</span><br/><br/>
                    Utilizamos a los Scene Kids (2000s) como espejo invertido. Donde hoy hay minimalismo, ayer hubo saturación. Donde hoy hay piel natural, ayer había capas de artificio digital y físico.
                </p>
                <p className="font-mono text-xs lg:text-sm leading-relaxed text-justify lg:text-right uppercase opacity-70">
                    Esta comparación dialéctica evidencia el desplazamiento tectónico en la construcción del yo: hemos pasado de la búsqueda de diferenciación radical a la búsqueda de una asimilación perfecta dentro del feed.
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionJustification;
