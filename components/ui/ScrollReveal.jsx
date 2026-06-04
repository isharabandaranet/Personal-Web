"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  className = '',
}) {
  const directions = {
    up: { y: 25, x: 0 },
    down: { y: -25, x: 0 },
    left: { x: 25, y: 0 },
    right: { x: -25, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.21, 1.02, 0.43, 1.01] // smooth cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
