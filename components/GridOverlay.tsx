
import React from 'react';

interface GridOverlayProps {
  currentPage: number;
}

const GridOverlay: React.FC<GridOverlayProps> = ({ currentPage }) => {
  // Logic to determine grid color based on page and position
  const getVerticalLineColor = (index: number) => {
    // Page 3: SectionJustification (Split Screen: Left White, Right Dark)
    // There are 11 vertical internal lines for a 12-col grid.
    // Index 0-4: Left side (White bg) -> Black lines
    // Index 5: Center line -> Black line
    // Index 6-10: Right side (Dark bg) -> White lines (3% opacity)
    if (currentPage === 3) {
      if (index > 5) return 'border-white/[0.03]'; 
      return 'border-black/5';
    }
    
    // Page 6: SectionSceneKids (Dark bg)
    if (currentPage === 6) {
      return 'border-white/5';
    }

    // Default: Light grid on light background
    return 'border-black/5';
  };

  const getHorizontalLineStyle = () => {
    // Page 3: Split screen. Use a gradient to switch color at 50%.
    // Left 50%: black/5. Right 50%: white/3%.
    if (currentPage === 3) {
      return {
        background: 'linear-gradient(90deg, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.03) 50%)'
      };
    }
    // Page 6: Dark background
    if (currentPage === 6) {
      return { backgroundColor: 'rgba(255,255,255,0.05)' };
    }
    // Default
    return { backgroundColor: 'rgba(0,0,0,0.05)' };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Vertical Lines */}
      <div className="grid grid-cols-12 h-full w-full">
        {Array.from({ length: 11 }).map((_, i) => (
          <div 
            key={i} 
            className={`border-r h-full first:border-l transition-colors duration-500 ${getVerticalLineColor(i)} ${i === 0 && currentPage === 6 ? 'border-l-white/5' : i === 0 ? 'border-l-black/5' : ''}`} 
          />
        ))}
      </div>
      
      {/* Horizontal Lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
         {/* Using div with height 1px instead of border-b to support gradients */}
         <div className="h-[1px] w-full transition-all duration-500" style={getHorizontalLineStyle()} />
         <div className="h-[25%] w-full flex flex-col justify-end">
            <div className="h-[1px] w-full transition-all duration-500" style={getHorizontalLineStyle()} />
         </div>
         <div className="absolute top-[50%] w-full">
            <div className="h-[1px] w-full transition-all duration-500" style={getHorizontalLineStyle()} />
         </div>
         <div className="absolute top-[75%] w-full">
            <div className="h-[1px] w-full transition-all duration-500" style={getHorizontalLineStyle()} />
         </div>
      </div>
    </div>
  );
};

export default GridOverlay;
