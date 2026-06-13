"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

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

  // Close mobile menu and dropdowns on path changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Solutions', 
      dropdown: [
        { name: 'Products', path: '/products', description: 'SaaS & productivity tools' },
        { name: 'Services', path: '/services', description: 'Custom software & web development' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        {/* Scrolled background layer separate from content to prevent nested backdrop-filter conflict */}
        <div
          className={`absolute inset-0 z-0 transition-all duration-300 border-b ${
            isScrolled
              ? 'frosted-glass border-zinc-800/50 shadow-lg shadow-zinc-950/20'
              : 'bg-transparent border-transparent'
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
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
              if (link.dropdown) {
                const isDropdownActive = link.dropdown.some(item => pathname === item.path);
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    ref={dropdownRef}
                  >
                    <button
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer
                        ${isDropdownActive
                          ? 'text-indigo-400 bg-zinc-900/40 border border-zinc-800/60'
                          : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/20 border border-transparent'}
                      `}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-indigo-400' : ''}`} />
                    </button>

                    {/* Dropdown Menu Panel (Styled with identical frosted glass effect) */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-1 w-64 frosted-glass border border-zinc-800/80 shadow-2xl rounded-xl p-2 z-50"
                        >
                          <div className="space-y-1">
                            {link.dropdown.map((sublink) => {
                              const isSubActive = pathname === sublink.path;
                              return (
                                <Link
                                  key={sublink.name}
                                  href={sublink.path}
                                  className={`
                                    flex flex-col text-left px-4 py-3 rounded-lg transition-all duration-200 group/sub
                                    ${isSubActive
                                      ? 'bg-zinc-900/60 border border-zinc-800 text-indigo-400'
                                      : 'hover:bg-zinc-900/40 border border-transparent text-zinc-300 hover:text-zinc-100'}
                                  `}
                                >
                                  <span className="text-sm font-semibold tracking-wide">
                                    {sublink.name}
                                  </span>
                                  <span className="text-[11px] text-zinc-500 mt-0.5 leading-snug group-hover/sub:text-zinc-400">
                                    {sublink.description}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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

      {/* Mobile Drawer (Styled with identical frosted glass effect) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden frosted-glass border-b border-zinc-800/80 px-6 py-6 flex flex-col space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isDropdownActive = link.dropdown.some(item => pathname === item.path);
                return (
                  <div key={link.name} className="flex flex-col space-y-1">
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className={`
                        flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-all text-left cursor-pointer
                        ${isDropdownActive
                          ? 'text-indigo-400 bg-zinc-900/60 border border-zinc-800'
                          : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30'}
                      `}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180 text-indigo-400' : ''}`} />
                    </button>
                    
                    {/* Collapsible Mobile Sub-items */}
                    <AnimatePresence initial={false}>
                      {isMobileDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4 flex flex-col space-y-1 border-l border-zinc-800/60 ml-6 mt-1"
                        >
                          {link.dropdown.map((sublink) => {
                            const isSubActive = pathname === sublink.path;
                            return (
                              <Link
                                key={sublink.name}
                                href={sublink.path}
                                className={`
                                  block px-4 py-2.5 text-sm font-medium rounded-lg transition-all
                                  ${isSubActive
                                    ? 'text-indigo-400 bg-zinc-900/40 border border-zinc-800/60'
                                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/20'}
                                `}
                              >
                                {sublink.name}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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
