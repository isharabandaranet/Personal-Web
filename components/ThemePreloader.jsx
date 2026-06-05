"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
            
            {/* Premium Multi-Ring & Logo Spinner */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Outer fast-rotating gradient ring (CSS-only animation) */}
              <div className="absolute w-28 h-28 rounded-full border-[3px] border-transparent border-t-indigo-500 border-r-cyan-500 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)] animate-[spin_1.2s_linear_infinite]" />

              {/* Inner slow-reverse-rotating dashed ring */}
              <div className="absolute w-24 h-24 rounded-full border border-dashed border-zinc-800 animate-[spin_2.2s_linear_infinite_reverse]" />

              {/* Center Logo Container with gentle pulse */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/90 flex items-center justify-center p-3.5 shadow-xl relative z-10 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 opacity-50" />
                <Image 
                  src="/img/logo.png" 
                  alt="Ishara Bandara Logo" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-contain relative z-20"
                  priority
                />
              </div>

              {/* Subtle ambient light dot rotating around the spinner */}
              <div className="absolute w-full h-full animate-[spin_2.8s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 blur-[1px] shadow-[0_0_6px_#22d3ee]" />
              </div>
            </div>

            {/* Title & Brand Name (CSS fade-in animation) */}
            <h2 className="mt-8 font-heading font-bold text-xl tracking-tight text-white animate-preloader-fade-in">
              Ishara Bandara
            </h2>
            
            <p className="text-xs text-zinc-400 font-medium tracking-widest uppercase mt-1 animate-preloader-fade-in-delayed">
              Creative Software Solutions
            </p>

            {/* Bouncing Dots Loading Indicator */}
            <div className="flex gap-2 mt-5 justify-center">
              {[0, 1, 2].map((idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_4px_rgba(99,102,241,0.4)] animate-preloader-bounce-${idx}`}
                />
              ))}
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
