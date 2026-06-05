"use client";

import React, { useState } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectGallery({ images = [], title = "" }) {
  const [activeZoomImage, setActiveZoomImage] = useState(null);

  if (!images || images.length === 0) return null;

  const hasMultiple = images.length > 1;

  const scrollSlider = (direction) => {
    const container = document.getElementById('gallery-slider');
    if (container) {
      const scrollAmount = window.innerWidth > 768 ? 500 : 300;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-6 relative group">
      
      {/* Gallery Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
          Project Gallery
        </h2>
        <span className="text-xs text-zinc-500 font-medium select-none">
          Scroll horizontally or click to zoom
        </span>
      </div>

      {/* Horizontal Sliding Track Container */}
      <div className="relative">
        
        {/* Horizontal Slider Track */}
        <div 
          id="gallery-slider"
          className="flex flex-row gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none py-2 px-1 [mask-image:_linear-gradient(to_right,transparent_0,_black_30px,_black_calc(100%-30px),transparent_100%)] md:[mask-image:none]"
        >
          {images.map((imgUrl, index) => (
            <div 
              key={index} 
              className="shrink-0 snap-center cursor-zoom-in flex flex-col justify-center items-center"
              onClick={() => setActiveZoomImage(imgUrl)}
            >
              {/* Aspect-ratio boundary-hugging border frame */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-900/85 bg-zinc-950/20 shadow-2xl shadow-indigo-500/5 hover:border-zinc-800 transition-colors duration-300">
                <img
                  src={imgUrl}
                  alt={`${title} Gallery Visual ${index + 1}`}
                  className="h-[40vh] md:h-[50vh] w-auto object-contain select-none transition-transform duration-500 hover:scale-[1.01]"
                />
                
                {/* Zoom Hover Overlay */}
                <div className="absolute inset-0 bg-zinc-950/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-zinc-950/80 border border-zinc-800 p-3 rounded-full text-zinc-200 shadow-lg scale-90 hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Navigation Controls */}
        {hasMultiple && (
          <>
            <button
              onClick={() => scrollSlider(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-950/70 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/85 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-xl scale-95 hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollSlider(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-950/70 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/85 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-xl scale-95 hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeZoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-xl"
            onClick={() => setActiveZoomImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveZoomImage(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative max-w-[90vw] max-h-[85vh] select-none flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeZoomImage}
                alt={`${title} Zoom Visual`}
                className="max-w-full h-auto max-h-[85vh] rounded-xl border border-zinc-900 shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
