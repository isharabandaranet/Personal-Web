"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemePreloader() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if we are running in the browser and if loaded in this session
    if (typeof window !== 'undefined') {
      const hasLoadedBefore = sessionStorage.getItem('has_loaded_before');

      if (hasLoadedBefore === 'true') {
        // Return visitor: hide preloader immediately (so no layout delay)
        setShowPreloader(false);
      } else {
        // First load of the session: show for 1.0s, then reveal the site
        const timer = setTimeout(() => {
          sessionStorage.setItem('has_loaded_before', 'true');
          setShowPreloader(false);
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          id="theme-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -40,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden bg-grid-pattern"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            
            {/* Premium Multi-Ring Spinner */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer fast-rotating gradient ring (CSS-only animation) */}
              <div className="absolute w-24 h-24 rounded-full border-[3px] border-transparent border-t-indigo-500 border-r-cyan-500 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)] animate-[spin_1.2s_linear_infinite]" />

              {/* Inner slow-reverse-rotating dashed ring */}
              <div className="absolute w-20 h-20 rounded-full border border-dashed border-zinc-800 animate-[spin_2.2s_linear_infinite_reverse]" />

              {/* Center subtle glowing dot */}
              <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.6)]" />

              {/* Subtle ambient light dot rotating around the spinner */}
              <div className="absolute w-full h-full animate-[spin_2.8s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 blur-[1px] shadow-[0_0_6px_#22d3ee]" />
              </div>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
