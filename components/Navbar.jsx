"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll listener to change navbar background style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-panel bg-zinc-950/80 shadow-lg shadow-zinc-950/20 py-4'
          : 'bg-transparent py-6 border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-800 flex items-center justify-center bg-zinc-900 group-hover:border-zinc-600 transition-all duration-300">
              <Image src="/img/logo.png" alt="IB Logo" width={24} height={24} className="w-6 h-6 object-contain" priority />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">
              Ishara Bandara
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                    ${isActive
                      ? 'text-indigo-400 bg-zinc-900/40 border border-zinc-800/60'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/20 border border-transparent'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden glass-panel bg-zinc-950/95 border-b border-zinc-800/80 px-6 py-6 flex flex-col space-y-3"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`
                    block px-4 py-3 text-base font-medium rounded-lg transition-all
                    ${isActive
                      ? 'text-indigo-400 bg-zinc-900/60 border border-zinc-800'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
