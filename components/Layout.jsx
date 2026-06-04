import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-zinc-950 text-zinc-50 overflow-x-hidden bg-grid-pattern">
      {/* Dynamic Glowing Ambient Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
