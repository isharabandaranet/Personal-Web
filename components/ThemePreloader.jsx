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
          {/* Subtle Ambient Background Glow */}
          <div className="absolute w-[300px] h-[300px] bg-zinc-800/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            
            {/* Minimalist Elegant Spinner */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Spinning Ring */}
              <div className="absolute w-10 h-10 rounded-full border-[1.5px] border-zinc-800 border-t-zinc-300 animate-[spin_0.8s_linear_infinite]" />
              
              {/* Inner subtle pulsing dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
