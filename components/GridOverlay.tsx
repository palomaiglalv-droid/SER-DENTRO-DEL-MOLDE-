import React from 'react';

const GridOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Vertical Lines */}
      <div className="grid grid-cols-12 h-full w-full">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="border-r grid-line h-full first:border-l" />
        ))}
      </div>
      {/* Horizontal Lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
         <div className="h-[25%] w-full border-b grid-line" />
         <div className="h-[50%] w-full border-b grid-line" />
         <div className="h-[75%] w-full border-b grid-line" />
      </div>
    </div>
  );
};

export default GridOverlay;