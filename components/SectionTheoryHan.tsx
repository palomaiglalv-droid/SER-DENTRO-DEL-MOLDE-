
import React from 'react';
import { motion } from 'framer-motion';

const SectionTheoryHan: React.FC = () => {
  return (
    <div className="h-full w-full bg-black text-white relative flex flex-col justify-center px-8 lg:px-24 overflow-hidden">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <p className="font-mono text-[10px] tracking-[0.5em] opacity-40 uppercase">
          ( 03. FUNDAMENTACIÓN : HAN & PARISER )
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center z-10">
        <div className="space-y-12 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="border border-white/20 p-8 space-y-6"
          >
            <h3 className="font-mono text-lg font-bold uppercase tracking-tight text-white/90">
              LA SOCIEDAD DEL RENDIMIENTO
            </h3>
            <p className="font-mono text-xs leading-relaxed text-white/50 uppercase tracking-widest">
              Byung-Chul Han contextualiza la presión identitaria y la autoexigencia. La autoexposición en redes sociales no es libertad, es una forma de vigilancia líquida y homogeneización estética.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="border border-white/20 p-8 space-y-6"
          >
            <h3 className="font-mono text-lg font-bold uppercase tracking-tight text-white/90">
              LA BURBUJA DE FILTROS
            </h3>
            <p className="font-mono text-xs leading-relaxed text-white/50 uppercase tracking-widest">
              Eli Pariser demuestra cómo los algoritmos priorizan lo similar. Esta dinámica genera una ilusión de elección mientras favorece la repetición estética y el borrado de la singularidad.
            </p>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-none"
          >
            ALGORITMO <br /> & CONTROL
          </motion.h2>
          <div className="w-full h-1 bg-white" />
          <p className="font-mono text-sm text-white/60 leading-relaxed max-w-sm">
            El sistema visual cerrado del Clean Girl es la respuesta perfecta al algoritmo: signos fácilmente identificables, replicables y optimizados para la visibilidad masiva.
          </p>
        </div>
      </div>

      {/* Background visual detail */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
           {Array.from({length: 12}).map((_, i) => (
             <div key={i} className="border-r border-white/20 h-full" />
           ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTheoryHan;
