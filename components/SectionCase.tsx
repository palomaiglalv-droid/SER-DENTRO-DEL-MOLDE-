import React from 'react';
import { motion } from 'framer-motion';

const SectionCase: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#f5f5f3] relative flex items-center px-8 lg:px-24">
      {/* Side Large Code */}
      <div className="absolute top-[20%] right-8 pointer-events-none">
        <span className="font-serif text-[15vw] leading-none text-black/5 font-bold">B03</span>
      </div>

      {/* Main Image Top Left */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-[10%] left-[10%] w-[45%] h-[50%] z-10"
      >
        <img 
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop" 
          alt="Main Project Visual" 
          className="w-full h-full object-cover grayscale brightness-90 hover:scale-103 transition-transform duration-1000"
        />
      </motion.div>

      {/* Secondary Image Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-[10%] right-[10%] w-[35%] h-[40%] z-10"
      >
        <img 
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
          alt="Secondary Project Visual" 
          className="w-full h-full object-cover grayscale brightness-75 hover:scale-103 transition-transform duration-1000"
        />
      </motion.div>

      {/* Vertical Meta Block */}
      <div className="absolute top-[10%] right-[10%] h-[40%] flex items-end">
        <div className="rotate-90 origin-bottom-right mb-4">
          <p className="text-technical font-bold opacity-60 whitespace-nowrap">
            HP TEMA // CREATIVE DIRECTION // STAGE DESIGN // RED ROCKS, CO
          </p>
        </div>
      </div>

      {/* Read Details Navigation */}
      <div className="absolute bottom-8 right-8 flex gap-12 z-20">
        <a href="#" className="text-technical border-b border-black/20 pb-1 hover:border-black transition-colors">
          READ DETAILS
        </a>
        <a href="#" className="text-technical border-b border-black/20 pb-1 hover:border-black transition-colors">
          VIEW OTHER WORK
        </a>
      </div>

      {/* Center Description (Lorem Ipsum) */}
      <div className="z-20 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md bg-white/10 backdrop-blur-md p-12 border border-black/5"
        >
          <p className="font-serif text-sm leading-relaxed text-black/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionCase;