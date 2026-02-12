
import React from 'react';
import { motion } from 'framer-motion';

const SectionCleanGirls: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row bg-[#f5f5f3] overflow-hidden">
      <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center h-full">
         <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter mb-2 opacity-10">( 2025 )</h2>
         <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tighter mb-8 lg:mb-12">CLEAN GIRL</h2>
         
         <div className="space-y-6 lg:space-y-8">
            <div className="border-l border-black pl-4 lg:pl-6">
               <h4 className="text-[10px] lg:text-xs font-bold tracking-[0.2em] mb-1 lg:mb-2 uppercase">( SIGNOS )</h4>
               <p className="text-xs lg:text-sm opacity-60 uppercase leading-relaxed">
                 Paletas neutras (beige, blanco), no-makeup, piel luminosa, moño bajo, aros dorados, básicos ajustados.
               </p>
            </div>
            <div className="border-l border-black pl-4 lg:pl-6">
               <h4 className="text-[10px] lg:text-xs font-bold tracking-[0.2em] mb-1 lg:mb-2 uppercase">( VALORES )</h4>
               <p className="text-xs lg:text-sm opacity-60 uppercase leading-relaxed">
                 Autocontrol, productividad, bienestar, optimización visual, validación algorítmica.
               </p>
            </div>
         </div>
      </div>
      
      <div className="w-full lg:w-1/2 h-[40vh] lg:h-full relative">
         <div className="absolute inset-4 border border-black/5 overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale contrast-75 brightness-110"
              alt="Clean Girl Aesthetic"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 z-10">
               <span className="text-[9px] tracking-[0.2em] font-bold">( NEUTRALIDAD )</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SectionCleanGirls;
