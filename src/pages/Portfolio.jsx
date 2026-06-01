import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X, Layers, Code } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrollReveal from '../components/ui/ScrollReveal';
import { codingProjects, designProjects } from '../data/projectsData';

// Custom inline Github icon to avoid trademark removal from Lucide React
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('coding'); // 'coding' | 'design'
  const [codingFilter, setCodingFilter] = useState('all'); // 'all' | 'web' | 'backend'
  const [designFilter, setDesignFilter] = useState('all'); // 'all' | 'branding' | 'designing' | 'marketing'
  const [selectedProject, setSelectedProject] = useState(null); // project object

  const codingFilters = [
    { label: 'All', value: 'all' },
    { label: 'Web Applications', value: 'web' },
    { label: 'Backend & AI APIs', value: 'backend' }
  ];

  const designFilters = [
    { label: 'All', value: 'all' },
    { label: 'Brand Identity', value: 'branding' },
    { label: 'Graphic Designing', value: 'designing' },
    { label: 'Social Marketing', value: 'marketing' }
  ];

  // Filtering logic
  const filteredCoding = codingProjects.filter(project => {
    if (codingFilter === 'all') return true;
    return project.filter === codingFilter;
  });

  const filteredDesign = designProjects.filter(project => {
    if (designFilter === 'all') return true;
    return project.filter === designFilter;
  });

  const handleProjectClick = (project, type) => {
    setSelectedProject({ ...project, type });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 relative">
      
      {/* Page Title */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <ScrollReveal direction="down">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Our Work</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
            Explore our latest projects
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-zinc-400">
            A showcase of digital products we have engineered and visual brand campaigns we have designed.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Category Tabs */}
      <div className="flex justify-center">
        <ScrollReveal direction="none" delay={0.3}>
          <div className="flex bg-zinc-900/80 border border-zinc-800 p-1.5 rounded-xl space-x-2">
            <button
              onClick={() => {
                setActiveTab('coding');
                setSelectedProject(null);
              }}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === 'coding'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Coding Projects</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('design');
                setSelectedProject(null);
              }}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === 'design'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Designs</span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Sub Filters & Grid */}
      <div className="space-y-8">
        {/* Coding Projects View */}
        {activeTab === 'coding' && (
          <>
            {/* Coding Sub Filters */}
            <ScrollReveal direction="none" delay={0.1} className="flex flex-wrap justify-center gap-2">
              {codingFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setCodingFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border tracking-wide transition-all duration-300 ${
                    codingFilter === filter.value
                      ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400'
                      : 'border-zinc-800/80 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/80'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </ScrollReveal>

            {/* Grid */}
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredCoding.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      glow={idx === 1}
                      onClick={() => handleProjectClick(project, 'coding')}
                      className="h-full flex flex-col justify-between hover:border-zinc-700 group border-zinc-800/80"
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <span className="text-3xl">{project.icon}</span>
                          <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                            {project.category}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                          {project.stack.slice(0, 3).map((s) => (
                            <span key={s} className="text-[9px] bg-zinc-900 text-zinc-400 px-2 py-1 rounded-md border border-zinc-800">
                              {s}
                            </span>
                          ))}
                          {project.stack.length > 3 && (
                            <span className="text-[9px] text-zinc-500 pt-1 font-medium">
                              +{project.stack.length - 3} more
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-indigo-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                          Details <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}

        {/* Design Portfolio View */}
        {activeTab === 'design' && (
          <>
            {/* Design Sub Filters */}
            <ScrollReveal direction="none" delay={0.1} className="flex flex-wrap justify-center gap-2">
              {designFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setDesignFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border tracking-wide transition-all duration-300 ${
                    designFilter === filter.value
                      ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400'
                      : 'border-zinc-800/80 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/80'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </ScrollReveal>

            {/* Grid */}
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredDesign.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      onClick={() => handleProjectClick(project, 'design')}
                      className="h-full border border-zinc-800/80 hover:border-zinc-700 group p-0 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
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
                          <div className="flex flex-wrap gap-1.5">
                            {project.tools.map((t) => (
                              <span key={t} className="text-[9px] bg-zinc-900 text-zinc-400 px-2 py-1 rounded-md border border-zinc-800">
                                {t}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-indigo-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                            View <ArrowRight className="w-3 h-3 ml-1" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>

      {/* Dynamic Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-850 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-900/50 hover:bg-zinc-800 rounded-full border border-zinc-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              {selectedProject.type === 'coding' ? (
                // Coding Project Details
                <>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{selectedProject.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
                      <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full uppercase tracking-wider font-bold inline-block mt-1">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((s) => (
                        <span key={s} className="text-xs bg-zinc-950 text-zinc-300 border border-zinc-800 px-3 py-1.5 rounded-lg">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.highlights && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Key Highlights</h3>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-zinc-400 flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800/80">
                    <Button href={selectedProject.github} variant="primary" className="group">
                      <GithubIcon className="w-4 h-4 mr-2" />
                      View Repository
                    </Button>
                    {selectedProject.liveUrl && (
                      <Button href={selectedProject.liveUrl} variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                // Design Project Details
                <>
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop';
                      }}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{selectedProject.icon}</span>
                      <h2 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
                    </div>
                    <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full uppercase tracking-wider font-bold inline-block">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {selectedProject.shortDescription}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((t) => (
                        <span key={t} className="text-xs bg-zinc-950 text-zinc-300 border border-zinc-800 px-3 py-1.5 rounded-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 flex justify-end">
                    <Button to="/contact" variant="primary">
                      Inquire About Similar Design
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
