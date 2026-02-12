
import React from 'react';
import { motion } from 'framer-motion';

const SectionJustification: React.FC = () => {
  return (
    <div className="min-h-[100dvh] lg:h-full w-full flex flex-col lg:flex-row bg-[#f5f5f3]">
      
      {/* LEFT: CLEAN GIRL (Why This Aesthetic?) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-full p-8 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/10 bg-white relative pt-24 lg:pt-24">
        <div className="absolute top-8 left-8">
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-30 uppercase">( 04.A : CASO DE ESTUDIO )</span>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-2">
                CLEAN GIRL <br/> AESTHETIC
            </h2>
            
            <p className="font-mono text-xs font-bold uppercase tracking-widest border-b border-black inline-block mb-8 pb-1">
              ¿POR QUÉ ESTE AESTHETIC?
            </p>
            
            <div className="space-y-8 max-w-md">
                <div className="border-l-2 border-black pl-4">
                    <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">ESPACIO CENTRAL</h3>
                    <p className="font-mono text-[11px] lg:text-xs leading-relaxed text-justify uppercase opacity-70">
                        Actualmente, las redes sociales se han convertido en un espacio central de la construcción y difusión de identidades visuales.
                    </p>
                </div>

                <div className="border-l-2 border-black/20 pl-4">
                    <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">CONDICIONAMIENTO</h3>
                    <p className="font-mono text-[11px] lg:text-xs leading-relaxed text-justify uppercase opacity-70">
                        La producción constante de imágenes y microtendencias o la influencia de los entornos digitales favorecen la aparición de estéticas compartidas y replicadas. En este contexto tecnológico, los aesthetics condicionan como los individuos se representan y se reconocen en la cultura actual.
                    </p>
                </div>
            </div>
        </motion.div>
      </div>

      {/* RIGHT: SCENE KIDS (Why Compare?) */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-full p-8 lg:p-24 flex flex-col justify-center bg-[#222222] text-white relative overflow-hidden pt-24 lg:pt-24">
         
         <div className="absolute top-8 lg:top-8 right-8 lg:right-8 text-right z-10">
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-30 uppercase">( 04.B : COMPARATIVA )</span>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="lg:text-right flex flex-col lg:items-end relative z-10"
        >
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-2">
                SCENE KIDS <br/> 2000s
            </h2>

            <p className="font-mono text-xs font-bold uppercase tracking-widest border-b border-white inline-block mb-8 pb-1">
              ¿POR QUÉ COMPARARLOS?
            </p>
            
            <div className="space-y-8 max-w-md">
                 <div className="lg:border-r-2 border-l-2 lg:border-l-0 border-white pl-4 lg:pl-0 lg:pr-4 text-left lg:text-right bg-[#222222]/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
                    <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">LÓGICAS OPUESTAS</h3>
                    <p className="font-mono text-[11px] lg:text-xs leading-relaxed uppercase opacity-70">
                        Ambas estéticas son nativas de internet, pero antagónicas. Mientras el SCENE buscaba la <strong>diferenciación a través del exceso</strong> y la saturación visual, el CLEAN GIRL opera desde la <strong>neutralidad y la repetición</strong> minimalista.
                    </p>
                </div>

                <div className="lg:border-r-2 border-l-2 lg:border-l-0 border-white/20 pl-4 lg:pl-0 lg:pr-4 text-left lg:text-right bg-[#222222]/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
                    <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">EL ÚLTIMO REFUGIO</h3>
                    <p className="font-mono text-[11px] lg:text-xs leading-relaxed uppercase opacity-70">
                        Elegimos los 2000s (MySpace) como el último momento de identidad juvenil activa y codificada. El Scene Kid utilizaba el artificio para pertenecer a una tribu, antes de que la identidad se convirtiera en una curaduría algorítmica.
                    </p>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionJustification;
