"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemePreloader() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if we are running in the browser and if loaded in this session
    if (typeof window !== 'undefined') {
      const hasLoadedBefore = sessionStorage.getItem('has_loaded_before');

      if (!hasLoadedBefore) {
        setShowPreloader(true);
        
        // Show the beautiful preloader for 1.8 seconds, then reveal the site
        const timer = setTimeout(() => {
          sessionStorage.setItem('has_loaded_before', 'true');
          setShowPreloader(false);
        }, 1800);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
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
              {/* Outer fast-rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute w-28 h-28 rounded-full border-[3px] border-transparent border-t-indigo-500 border-r-cyan-500 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
              />

              {/* Inner slow-reverse-rotating dashed ring (adds visual parallax depth) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border border-dashed border-zinc-800"
              />

              {/* Center Logo Container with gentle pulse */}
              <motion.div 
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/90 flex items-center justify-center p-3.5 shadow-xl relative z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 opacity-50" />
                <Image 
                  src="/img/logo.png" 
                  alt="Ishara Bandara Logo" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-contain relative z-20"
                  priority
                />
              </motion.div>

              {/* Subtle ambient light dot rotating around the spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
                className="absolute w-full h-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 blur-[1px] shadow-[0_0_6px_#22d3ee]" />
              </motion.div>
            </div>

            {/* Title & Brand Name */}
            <motion.h2 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-8 font-heading font-bold text-xl tracking-tight text-white"
            >
              Ishara Bandara
            </motion.h2>
            
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.4 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-xs text-zinc-400 font-medium tracking-widest uppercase mt-1"
            >
              Creative Software Solutions
            </motion.p>

            {/* Bouncing Dots Loading Indicator */}
            <div className="flex gap-2 mt-5 justify-center">
              {[0, 1, 2].map((idx) => (
                <motion.span
                  key={idx}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    delay: idx * 0.16,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_4px_rgba(99,102,241,0.4)]"
                />
              ))}
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
