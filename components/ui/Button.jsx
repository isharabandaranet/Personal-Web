import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 border border-indigo-500/30 hover:shadow-indigo-500/40 relative overflow-hidden after:content-[\"\"] after:absolute after:inset-0 after:bg-linear-to-r after:from-indigo-500/20 after:to-cyan-400/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300',
    secondary: 'bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800 hover:border-zinc-700',
    outline: 'border border-zinc-800 hover:bg-zinc-900 text-zinc-300 hover:text-white',
    ghost: 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link href={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
