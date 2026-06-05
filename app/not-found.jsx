"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Home, Briefcase } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center relative overflow-hidden">
      {/* Centered Glowing Background Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
        {/* Animated Radar/Compass Graphic */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          {/* Inner pulsating circle */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-4 rounded-full border border-indigo-500/30 bg-indigo-500/5"
          />
          
          {/* Middle rotating dashed ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-zinc-800"
          />

          {/* Outer fading wave */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
            className="absolute -inset-4 rounded-full border border-cyan-400/20"
          />

          {/* Core Floating Compass Icon */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-16 h-16 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-indigo-400 shadow-xl shadow-zinc-950/50 backdrop-blur-xs"
          >
            <Compass className="w-8 h-8 animate-pulse" />
          </motion.div>
        </div>

        {/* 404 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl md:text-8xl font-black tracking-tighter text-gradient-indigo mb-4"
        >
          404
        </motion.h1>

        {/* Main Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4"
        >
          Lost in Space?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base text-zinc-400 leading-relaxed mb-10 px-4"
        >
          The page you are looking for has gone off the grid or never existed. 
          Don't worry, you can easily find your way back home.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button to="/" variant="primary" className="px-6 py-3">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
          <Button to="/portfolio" variant="outline" className="px-6 py-3">
            <Briefcase className="w-4 h-4 mr-2" />
            Explore Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
