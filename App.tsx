
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GridOverlay from './components/GridOverlay';
import Navigation from './components/Navigation';

// Components
import SectionCover from './components/SectionCover';
import SectionIndex from './components/SectionIndex';
import SectionStructure from './components/SectionStructure';
import SectionJustification from './components/SectionJustification';
import SectionObjectives from './components/SectionObjectives';
import SectionCleanGirls from './components/SectionCleanGirls';
import SectionSceneKids from './components/SectionSceneKids';
import SectionFormats from './components/SectionFormats';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 8;

  // Keyboard Navigation Logic (Space + Arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isNext = e.code === 'Space' || e.key === 'ArrowRight' || e.code === 'ArrowRight';
      const isPrev = e.key === 'ArrowLeft' || e.code === 'ArrowLeft';

      if (isNext) {
        if (e.code === 'Space') e.preventDefault(); // Prevent scroll
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }
      
      if (isPrev) {
         setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Tap/Click Navigation Logic
  const handleGlobalTap = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on interactive elements
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) return;

    // Advance to next page if not selecting text
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;

    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0: return <SectionCover />;
      case 1: return <SectionIndex />;
      case 2: return <SectionStructure />;
      case 3: return <SectionJustification />;
      case 4: return <SectionObjectives />;
      case 5: return <SectionCleanGirls />;
      case 6: return <SectionSceneKids />;
      case 7: return <SectionFormats />;
      default: return <SectionCover />;
    }
  };

  return (
    <main 
      className="relative h-[100dvh] w-screen bg-[#f5f5f3] selection:bg-black selection:text-white font-mono overflow-y-auto lg:overflow-hidden cursor-pointer scroll-smooth"
      onClick={handleGlobalTap}
    >
      
      {/* Global Header */}
      <div className="fixed top-8 left-8 z-50 text-[#1a1a1a] mix-blend-difference pointer-events-none">
        <p className="text-[10px] tracking-[0.2em] font-medium uppercase">
          SER ( dentro del molde. )
        </p>
      </div>
      
      <Navigation currentPage={currentPage + 1} totalPages={totalPages} />

      <div className="fixed bottom-8 left-8 z-50 text-[#1a1a1a] mix-blend-difference pointer-events-none">
        <p className="text-[9px] tracking-[0.2em] font-normal uppercase opacity-40">
          ( SER_STUDIO // TFG_2026 // [NAV: TAP / SPACE / ARROWS] )
        </p>
      </div>

      <GridOverlay currentPage={currentPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-full w-full"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default App;
