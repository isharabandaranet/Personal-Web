import React from 'react';
import { ArrowRight, CheckCircle2, Palette, Video, Award, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrollReveal from '../components/ui/ScrollReveal';
import { services, clientBrands, funFacts } from '../data/servicesData';

export default function Home() {
  const iconMap = {
    Palette: Palette,
    Video: Video,
    Award: Award,
    Megaphone: Megaphone
  };

  const whyChooseUs = [
    {
      title: "Technical Excellence",
      description: "We craft modern, performant, and secure digital applications engineered for high-growth businesses."
    },
    {
      title: "Creative Brand Identity",
      description: "Our design team creates bespoke, professional aesthetics that make your business stand out from competitors."
    },
    {
      title: "Result-Driven Marketing",
      description: "We orchestrate launches and growth campaigns that deliver measurable outcomes and client retention."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-36">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center justify-center min-h-[70vh] pt-8 md:pt-16">
        {/* Glow behind hero text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <ScrollReveal direction="none" delay={0.1}>
          <div className="inline-flex items-center space-x-2 bg-zinc-900/60 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-zinc-300 mb-6 hover:border-zinc-700/60 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span>Premium Creative & Software Agency</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
            We engineer premium <br className="hidden md:inline" />
            <span className="text-gradient-indigo">digital experiences</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mt-6 leading-relaxed">
            Welcome to our digital space. We build custom web platforms, design high-impact visuals, and orchestrate marketing campaigns that define leading brands.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
            <Button to="/portfolio" variant="primary" size="lg" className="w-full sm:w-auto group">
              Explore Our Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Get in Touch
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Section */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal direction="right" className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gradient">What We Do Best</h3>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <Button to="/services" variant="outline" className="group">
              View All Packages
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                <Card className="h-full flex flex-col justify-between hover:border-indigo-500/20 group">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-zinc-100 mb-2">{service.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs bg-zinc-900 text-zinc-400 border border-zinc-800/80 px-3 py-1.5 rounded-full">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Why Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">
            We merge design and technology into digital success
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            Over the years, we have helped companies, physics educators, and individual brands refine their visual messaging and launch interactive software. We prioritize custom-built software architectures and conversion-optimized digital design.
          </p>
          <div className="space-y-4 pt-4">
            {whyChooseUs.map((point) => (
              <div key={point.title} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-zinc-200">{point.title}</h4>
                  <p className="text-sm text-zinc-400 mt-1">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="grid grid-cols-2 gap-4">
          {funFacts.map((fact, index) => (
            <Card key={fact.label} glow={index === 1} className="text-center p-8 flex flex-col justify-center border-zinc-800/80">
              <span className="text-4xl md:text-5xl font-extrabold text-gradient-indigo">{fact.value}</span>
              <span className="text-xs md:text-sm text-zinc-400 font-medium tracking-wide mt-3">{fact.label}</span>
            </Card>
          ))}
        </ScrollReveal>
      </section>

      {/* Brands Around Us Section */}
      <section className="space-y-10 text-center py-6">
        <ScrollReveal direction="up" className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Collaborations</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gradient">Brands Around Us</h3>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-65 hover:opacity-100 transition-opacity duration-300">
            {clientBrands.map((brand) => (
              <div key={brand.name} className="h-10 md:h-12 w-28 md:w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  title={brand.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    const textSpan = document.createElement('span');
                    textSpan.className = 'text-xs font-semibold text-zinc-500 uppercase tracking-wider';
                    textSpan.innerText = brand.name;
                    parent.appendChild(textSpan);
                  }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
