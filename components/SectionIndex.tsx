
import React from 'react';
import { motion } from 'framer-motion';

const chapters = [
  "PORTADA",
  "ÍNDICE",
  "ESTRUCTURA NARRATIVA",
  "JUSTIFICACIÓN Y CONTEXTO",
  "OBJETIVOS DE PROYECTO",
  "INVESTIGACIÓN CLEAN GIRLS",
  "INVESTIGACIÓN SCENE KIDS",
  "POSIBLES FORMATOS"
];

const SectionIndex: React.FC = () => {
  // Split content into two columns for vertical ordering
  const midPoint = 4; // First 4 items in col 1, rest in col 2
  const leftColumn = chapters.slice(0, midPoint);
  const rightColumn = chapters.slice(midPoint);

  const renderItem = (chapter: string, index: number) => (
    <motion.div 
      key={index}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group flex items-baseline gap-4 lg:gap-6 border-b border-black/5 pb-2 lg:pb-4"
    >
      <span className="text-[10px] tracking-[0.2em] opacity-30 font-bold min-w-[40px]">
        ( {(index + 1).toString().padStart(2, '0')} )
      </span>
      <h3 className="text-xs lg:text-lg tracking-tight uppercase group-hover:pl-4 transition-all duration-300 truncate">
        {chapter}
      </h3>
    </motion.div>
  );

  return (
    <div className="min-h-[100dvh] lg:h-full w-full flex items-center justify-center bg-[#f5f5f3] py-24 lg:py-0">
       <div className="w-full max-w-4xl flex flex-col md:flex-row gap-x-16 lg:gap-x-24 px-12">
          
          {/* Column 1 (1-4) */}
          <div className="flex-1 flex flex-col gap-y-4 lg:gap-y-6">
             {leftColumn.map((chapter, i) => renderItem(chapter, i))}
          </div>

          {/* Column 2 (5-8) */}
          <div className="flex-1 flex flex-col gap-y-4 lg:gap-y-6 mt-4 md:mt-0">
             {rightColumn.map((chapter, i) => renderItem(chapter, i + midPoint))}
          </div>

       </div>
    </div>
  );
};

export default SectionIndex;
