import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick,
  ...props
}) {
  const isFlex = className.includes('flex');
  const isJustifyCenter = className.includes('justify-center');
  const isJustifyBetween = className.includes('justify-between');

  const innerClassName = `
    relative z-10
    ${isFlex ? 'flex-grow flex flex-col' : ''}
    ${isJustifyCenter ? 'justify-center' : ''}
    ${isJustifyBetween ? 'justify-between' : ''}
  `.trim().replace(/\s+/g, ' ');

  // Check if a padding class (p-, px-, py-, pt-, pb-, pl-, pr-) is already provided in className
  const hasPadding = /\bp[xytrbl]?-/.test(className);

  // Check if an overflow class is already provided in className
  const hasOverflow = className.includes('overflow-');

  return (
    <div
      onClick={onClick}
      className={`
        glass-panel rounded-xl relative transition-all duration-300
        ${hasOverflow ? '' : 'overflow-hidden'}
        ${hasPadding ? '' : 'p-6'}
        ${hoverEffect ? 'hover:-translate-y-1 hover:border-zinc-700/80 hover:shadow-xl hover:shadow-indigo-500/5' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Background radial gradient glow for cards */}
      {glow && (
        <div className="absolute -inset-px bg-radial-gradient opacity-50 pointer-events-none" />
      )}
      <div className={innerClassName}>
        {children}
      </div>
    </div>
  );
}

