"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { allProjects } from '../../data/projectsData';

export default function PortfolioClient() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'web' | 'software' | 'branding'

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Web Development', value: 'web' },
    { label: 'Software Systems', value: 'software' },
    { label: 'Branding & Marketing', value: 'branding' }
  ];

  // Filtering logic
  const filteredProjects = allProjects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.filter === activeFilter;
  });

  const handleProjectClick = (id) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative">
      
      {/* Page Title */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <ScrollReveal direction="down">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">My Work</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
            Explore my latest projects
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-zinc-400">
            A showcase of digital products I have engineered and visual brand campaigns I have designed.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter Categories */}
      <div className="flex justify-center">
        <ScrollReveal direction="none" delay={0.3} className="flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold border tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 font-bold shadow-md'
                  : 'border-zinc-800/80 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </ScrollReveal>
      </div>

      {/* Grid */}
      <div className="pt-6">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={() => handleProjectClick(project.id)}
                  className="h-full border border-zinc-800/80 hover:border-zinc-700 group p-0 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                    <Image 
                      src={project.image} 
                      alt={`${project.title} Preview`} 
                      width={600}
                      height={337}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
                    
                    {/* Completion Year badge top-left */}
                    <span className="absolute top-3 left-3 text-[10px] bg-zinc-950/90 border border-zinc-800 text-indigo-400 px-3 py-1 rounded-full uppercase tracking-wider font-extrabold backdrop-blur-md">
                      {project.year}
                    </span>
                    
                    {/* Category badge top-right */}
                    <span className="absolute top-3 right-3 text-[10px] bg-zinc-950/90 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-full uppercase tracking-wider font-semibold backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {(project.type === 'coding' ? project.stack : project.tools).slice(0, 3).map((t) => (
                          <span key={t} className="text-[9px] bg-zinc-900 text-zinc-400 px-2 py-1 rounded-md border border-zinc-800">
                            {t}
                          </span>
                        ))}
                        {(project.type === 'coding' ? project.stack : project.tools).length > 3 && (
                          <span className="text-[9px] text-zinc-500 pt-1 font-medium">
                            +{(project.type === 'coding' ? project.stack : project.tools).length - 3} more
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-indigo-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                        View Project <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CTA Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="relative overflow-hidden rounded-2xl glass-panel p-8 md:p-16 border border-zinc-800 text-center space-y-6 max-w-4xl mx-auto pt-12 pb-12">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">Let's build something brilliant together</h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Have a project in mind or need help with software systems, web applications, or brand designs? Let's connect and discuss how we can work together.
            </p>
          </div>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="lg" className="group">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
