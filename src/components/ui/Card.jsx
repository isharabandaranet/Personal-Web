import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`
        glass-panel rounded-xl p-6 relative overflow-hidden transition-all duration-300
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
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
