import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Check, Calendar, Tag } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import { projects } from '../../../data/projectsData';
import ProjectGallery from '../../../components/ProjectGallery';

// Custom inline Github icon
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const filterLabelMap = {
    web: 'Web Development',
    software: 'Software Systems',
    branding: 'Branding & Marketing'
  };

  const hasMultipleImages = project.gallery && project.gallery.length > 1;
  const tags = project.stack || project.tools || [];
  const tagsTitle = project.stack ? 'Tech Stack' : (project.tools ? 'Tools Used' : 'Technologies');
  const projectType = project.stack ? 'Software & Code' : 'Branding & Visual';

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12 relative min-h-[85vh]">

      {/* Back Link */}
      <div>
        <Link
          href="/portfolio"
          className="inline-flex items-center text-sm font-semibold text-zinc-400 hover:text-indigo-400 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800/60">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-indigo-400 px-3 py-1 rounded-full uppercase tracking-wider font-extrabold">
              {project.year}
            </span>
            <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-450 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-100 tracking-tight leading-none">
            {project.title}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Action Buttons in Header (Data-Driven) */}
        <div className="flex flex-wrap gap-3 shrink-0">
          {project.github && (
            <Button href={project.github} variant="primary" className="group">
              <GithubIcon className="w-4 h-4 mr-2" />
              View Repository
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {!project.github && !project.liveUrl && (
            <Button to="/contact" variant="primary">
              Inquire About Project
            </Button>
          )}
        </div>
      </section>

      {/* Description & Metadata split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">

        {/* Left/Middle: About & Highlights */}
        <div className="lg:col-span-2 space-y-8">

          {/* Detailed description */}
          <ScrollReveal direction="up" className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-3">About the Project</h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {project.description || project.shortDescription}
            </p>
          </ScrollReveal>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ScrollReveal direction="up" delay={0.1} className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-3">Key Highlights & Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-zinc-350">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-indigo-400" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          )}

        </div>

        {/* Right: Tech Stack & Project Info Card */}
        <div>
          <ScrollReveal direction="left" className="h-full">
            <Card className="border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8 space-y-6">

              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200">
                Project Information
              </h3>

              <div className="border-t border-zinc-800/80 my-2" />

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs md:text-sm">
                  <Tag className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-500 block text-[10px] uppercase tracking-wider">Service Category</span>
                    <span className="text-zinc-200">{filterLabelMap[project.filter]}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-xs md:text-sm">
                  <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-500 block text-[10px] uppercase tracking-wider">Project Type</span>
                    <span className="text-zinc-200">{projectType}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800/80 my-4" />

              {/* Technologies / Tools list (Data-Driven) */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {tagsTitle}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-zinc-950 text-zinc-350 border border-zinc-850 px-3 py-1.5 rounded-lg font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons (Data-Driven) */}
              <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800/80">
                {project.github && (
                  <Button href={project.github} variant="primary" className="w-full justify-center group py-3">
                    <GithubIcon className="w-4 h-4 mr-2" />
                    View Repository
                  </Button>
                )}
                {project.liveUrl && (
                  <Button href={project.liveUrl} variant="outline" className="w-full justify-center py-3">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                {!project.github && !project.liveUrl && (
                  <Button to="/contact" variant="primary" className="w-full justify-center py-3">
                    Inquire About Project
                  </Button>
                )}
              </div>

            </Card>
          </ScrollReveal>
        </div>

      </div>

      {/* Dynamic Project Photo Gallery (Placed at the bottom) */}
      <ScrollReveal direction="up" delay={0.1}>
        <ProjectGallery images={project.gallery} title={project.title} />
      </ScrollReveal>

      {/* Unified CTA Section (No Type Checks) */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="relative overflow-hidden rounded-2xl glass-panel p-8 md:p-16 border border-zinc-800 text-center space-y-6 max-w-4xl mx-auto pt-12 pb-12 mt-16">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">
              Interested in a similar project?
            </h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              If you have a concept, need a custom software system engineered, or want to elevate your brand design and marketing, let's connect and design the perfect solution.
            </p>
          </div>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="lg" className="group">
              Let's Collaborate
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
