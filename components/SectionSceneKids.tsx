
import React from 'react';
import { motion } from 'framer-motion';

const SectionSceneKids: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row bg-black text-white overflow-hidden">
      <div className="w-full lg:w-1/2 h-[40vh] lg:h-full relative order-2 lg:order-1">
         <div className="absolute inset-4 border border-white/10 overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080&auto=format&fit=crop"
              className="w-full h-full object-cover contrast-150 grayscale"
              alt="Scene Aesthetic"
            />
            <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rotate-3 z-10">
               <span className="text-[9px] tracking-[0.2em] font-bold">( EXCESO )</span>
            </div>
            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         </div>
      </div>

      <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center h-full order-1 lg:order-2">
         <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter mb-2 opacity-20">( 2000 )</h2>
         <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tighter mb-8 lg:mb-12">SCENE KIDS</h2>
         
         <div className="space-y-6 lg:space-y-8">
            <div className="border-l border-white pl-4 lg:pl-6">
               <h4 className="text-[10px] lg:text-xs font-bold tracking-[0.2em] mb-1 lg:mb-2 uppercase">( SIGNOS )</h4>
               <p className="text-xs lg:text-sm opacity-60 uppercase leading-relaxed">
                 Flequillos tapando la cara, colores neón, capas excesivas, mezcla de estampados, piercings, delineador grueso.
               </p>
            </div>
            <div className="border-l border-white pl-4 lg:pl-6">
               <h4 className="text-[10px] lg:text-xs font-bold tracking-[0.2em] mb-1 lg:mb-2 uppercase">( VALORES )</h4>
               <p className="text-xs lg:text-sm opacity-60 uppercase leading-relaxed">
                 Individualismo radical, diferenciación, saturación visual, MySpace, imperfección digital.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SectionSceneKids;
