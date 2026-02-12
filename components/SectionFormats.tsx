
import React from 'react';
import { motion } from 'framer-motion';

const SectionFormats: React.FC = () => {
  const formats = [
    {
       id: "01",
       title: "VIDEO MANIFESTO",
       desc: "Video-ensayo que sintetiza conclusiones. Formato nativo de TikTok."
    },
    {
       id: "02",
       title: "INSTALACIÓN MDF",
       desc: "Silueta humana a tamaño real con piezas magnéticas intercambiables."
    },
    {
       id: "03",
       title: "EDITORIAL INTERACTIVO",
       desc: "Publicación física modular. Sistema de tres tercios intercambiables."
    }
  ];

  return (
    <div className="h-full w-full bg-[#f0f0f0] flex flex-col items-center justify-center px-8 overflow-hidden">
      <div className="max-w-6xl w-full h-full flex flex-col justify-center py-8">
         <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-8 lg:mb-12 text-center shrink-0">POSIBLES FORMATOS</h2>
         
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-auto lg:h-[55vh]">
            {formats.map((fmt, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.2 }}
                 className="bg-white p-6 lg:p-8 border border-black/5 hover:border-black transition-colors flex flex-col justify-between h-full"
               >
                  <div>
                    <span className="text-3xl lg:text-[40px] font-bold opacity-10 leading-none">( {fmt.id} )</span>
                    <h3 className="text-lg lg:text-2xl font-bold uppercase mt-4 mb-4 lg:mb-6 leading-tight">{fmt.title}</h3>
                    <p className="text-[10px] lg:text-xs uppercase opacity-60 leading-relaxed">{fmt.desc}</p>
                  </div>
                  <div className="w-full h-24 lg:h-32 bg-[#f5f5f3] mt-4 lg:mt-8 flex items-center justify-center overflow-hidden shrink-0">
                     {i === 0 && <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center">▶</div>}
                     {i === 1 && <div className="w-8 h-16 border border-black/20"></div>}
                     {i === 2 && <div className="flex gap-1"><div className="w-6 h-8 bg-black/10"></div><div className="w-6 h-8 bg-black/5"></div></div>}
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default SectionFormats;
