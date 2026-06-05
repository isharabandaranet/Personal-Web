"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Parse the number and suffix
  // e.g. "99+" -> number: 99, suffix: "+"
  const match = String(value).match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(startValue + easeProgress * (targetNumber - startValue));
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
