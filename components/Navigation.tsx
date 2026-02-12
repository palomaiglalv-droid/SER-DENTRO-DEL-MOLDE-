
import React from 'react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, totalPages }) => {
  const progress = (currentPage / totalPages) * 100;

  // Logic for Page 6 (Clean Girl Aesthetic - index 6):
  // On Desktop, the right side is a dark image, so we need white text.
  // On Mobile, the top side is light text content, so we keep black text to ensure visibility.
  // For all other pages, we default to black text as per current request "SOLO EN LA PAGINA 06".
  const isPage6 = currentPage === 6;

  const textColorClass = isPage6 ? 'text-[#1a1a1a] lg:text-white' : 'text-[#1a1a1a]';
  const trackColorClass = isPage6 ? 'bg-black/10 lg:bg-white/20' : 'bg-black/10';
  const progressColorClass = isPage6 ? 'bg-black lg:bg-white' : 'bg-black';

  return (
    <div className={`fixed top-8 right-8 z-50 flex flex-col items-end gap-2 transition-colors duration-300 ${textColorClass}`}>
      <div className="flex gap-4 items-center">
         <span className="text-[10px] tracking-[0.2em] font-bold">
           ( PAGE {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')} )
         </span>
      </div>
      {/* Progress Bar */}
      <div className={`w-24 h-[1px] relative transition-colors duration-300 ${trackColorClass}`}>
        <div 
          className={`absolute left-0 top-0 h-full transition-all duration-500 ${progressColorClass}`} 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
};

export default Navigation;
