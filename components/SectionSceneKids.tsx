
import React from 'react';
import { motion } from 'framer-motion';

const SectionSceneKids: React.FC = () => {
  // Esquematización de la información proporcionada
  const columns = [
    {
      header: "PLATAFORMA",
      items: [
        { 
          label: "CONTEXTO DIGITAL", 
          text: "MYSPACE (2000s). PERSONALIZACIÓN EXTREMA DEL PERFIL (FONDOS INTERVENIDOS, HTML, GIFS ANIMADOS, LISTAS MUSICALES)." 
        },
        { 
          label: "ESPACIO", 
          text: "EL ENTORNO DIGITAL COMO UN TERRITORIO DE AUTOEXPRESIÓN INTENSIFICADA." 
        }
      ]
    },
    {
      header: "SIGNOS",
      items: [
        { label: "REFERENCIAS", text: "MEZCLA HÍBRIDA (PUNK, GLAM METAL, RAVE, KAWAII, HIP HOP)." },
        { label: "MECANISMO", text: "ACUMULACIÓN DE SIGNOS, ESTÉTICA VISUAL SATURADA Y TEATRALIZACIÓN DEL YO." }
      ]
    },
    {
      header: "LÓGICA",
      items: [
        { label: "IDENTIDAD", text: "EL EXCESO NO COMO EFECTO SECUNDARIO, SINO COMO MECANISMO CENTRAL DE DIFERENCIACIÓN Y PERTENENCIA." }
      ]
    }
  ];

  const studySections = [
    "ORIGEN",
    "NOMBRE",
    "QUÉ ES",
    "SIGNOS",
    "ASPIRACIÓN",
    "MORALIDAD",
    "ECONOMÍA",
    "POLÍTICA"
  ];

  return (
    <div className="min-h-[100dvh] lg:h-full w-full flex flex-col lg:flex-row bg-white overflow-y-auto lg:overflow-hidden font-mono">
      
      {/* LEFT IMAGE (Flipped from Clean Girls for variety) */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative shrink-0 bg-black overflow-hidden group order-1 lg:order-1">
         <motion.img 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hipsters_Scene_Kids_blog.jpg/640px-Hipsters_Scene_Kids_blog.jpg"
            className="w-full h-full object-cover grayscale contrast-[1.3] brightness-90 group-hover:scale-105 transition-transform duration-[2s]"
            alt="Scene Kid Portrait"
         />
         
         {/* Top Label */}
         <div className="absolute top-8 left-8 bg-black px-4 py-2 border border-white/20 z-10">
            <span className="text-[9px] font-bold tracking-widest uppercase text-white">FIG. 02 : SCENE PUB</span>
         </div>
         
         {/* Noise Overlay Effect */}
         <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col px-8 py-24 lg:p-12 relative border-l border-black/5 bg-white order-2 lg:order-2">
        
        {/* Top Meta */}
        <div className="flex-none mb-8 lg:mb-12">
           <span className="text-[10px] tracking-[0.2em] opacity-40 uppercase font-medium">( 2000´S )</span>
           <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mt-4 mb-8 text-[#1a1a1a]">
             SCENE KIDS
           </h2>
           
           {/* LISTADO DE SECCIONES DE ESTUDIO */}
           <div className="border-t border-b border-black py-4 lg:py-6">
              <span className="text-[10px] font-bold tracking-widest uppercase block mb-4 opacity-100">SECCIONES DE ESTUDIO :</span>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-2">
                  {studySections.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 group">
                          <div className="w-1.5 h-1.5 bg-black rounded-full opacity-20 group-hover:opacity-100 transition-opacity"></div>
                          <span className="text-[9px] lg:text-[10px] uppercase font-medium tracking-wide opacity-60 group-hover:opacity-100 transition-opacity cursor-default">{item}</span>
                      </div>
                  ))}
              </div>
           </div>
        </div>

        {/* Bottom Grid (The 3 Boxes) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4 content-end">
           {columns.map((col, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 * i }}
               className="border border-black p-4 lg:p-4 flex flex-col justify-start bg-white hover:shadow-lg transition-shadow min-h-[200px]"
             >
                <h3 className="text-lg lg:text-xl font-bold uppercase mb-4 tracking-tight border-b border-black/5 pb-2">{col.header}</h3>
                <div className="space-y-3">
                  {col.items.map((item, j) => (
                    <div key={j}>
                      <span className="block text-[8px] font-bold opacity-40 mb-0.5 tracking-wider">{item.label}</span>
                      <p className="text-[9px] lg:text-[10px] leading-tight uppercase font-medium opacity-80">{item.text}</p>
                    </div>
                  ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>

    </div>
  );
};

export default SectionSceneKids;
