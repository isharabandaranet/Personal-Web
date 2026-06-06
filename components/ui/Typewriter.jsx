"use client";

import React, { useState, useEffect } from 'react';

export default function Typewriter({ 
  words = ["Developer", "Designer"], 
  typingSpeed = 120, 
  deletingSpeed = 80, 
  delayBetweenWords = 1800 
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0] || '');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting letter by letter
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing letter by letter
      timer = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Handle when typing is complete or when deletion is complete
    if (!isDeleting && currentText === currentWord) {
      // Pause when the full word is typed before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      // Move to the next word in the array
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-flex items-center whitespace-nowrap">
      <span>{currentText}</span>
      <span 
        className="w-[2px] h-[1em] bg-indigo-400 ml-1 animate-pulse" 
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      />
    </span>
  );
}
