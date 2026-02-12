
import React from 'react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, totalPages }) => {
  const progress = (currentPage / totalPages) * 100;

  return (
    <div className="fixed top-8 right-8 z-50 flex flex-col items-end gap-2 text-[#1a1a1a]">
      <div className="flex gap-4 items-center">
         <span className="text-[10px] tracking-[0.2em] font-bold">
           ( PAGE {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')} )
         </span>
      </div>
      {/* Progress Bar */}
      <div className="w-24 h-[1px] bg-black/10 relative">
        <div 
          className="absolute left-0 top-0 h-full bg-black transition-all duration-500" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
};

export default Navigation;
