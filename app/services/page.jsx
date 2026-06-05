import React from 'react';
import { Check, Palette, Code, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { services, pricingPackages } from '../../data/servicesData';

export const metadata = {
  title: 'Services',
  description: 'Bespoke web applications, software systems, design & branding packages, and continuous support solutions offered by Ishara Bandara.',
};

export default function Services() {
  const iconMap = {
    Code: Code,
    Cpu: Cpu,
    Palette: Palette,
    ShieldCheck: ShieldCheck
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <ScrollReveal direction="down">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">My Expertise</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
            Services I offer to grow your business
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-zinc-400 text-base md:text-lg">
            I provide full-spectrum digital engineering and design packages to establish your online brand, produce high-converting assets, and implement custom code.
          </p>
        </ScrollReveal>
      </section>

      {/* Services Cards Detail Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <ScrollReveal key={service.id} direction="up" delay={index * 0.15} className="flex flex-col h-full">
              <Card className="h-full border border-zinc-800/80 hover:border-zinc-700/80 p-6 sm:p-8 flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-3">{service.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/50">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Key Capabilities</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Pricing Packages */}
      <section className="space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <ScrollReveal direction="up">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Simple Pricing</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mt-2">Transparent Plans for Any Scale</h3>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-7xl mx-auto px-4">
          {pricingPackages.map((pkg, index) => (
            <ScrollReveal 
              key={pkg.id} 
              direction="up" 
              delay={index * 0.1} 
              className="flex flex-col w-full sm:w-[calc(50%-16px)] lg:flex-1 min-w-[300px] max-w-[390px] xl:max-w-[420px]"
            >
              <Card 
                glow={false}
                hoverEffect={true}
                className={`flex flex-col justify-between relative h-full rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-2 border-indigo-600 bg-[#0e0e12] shadow-[0_0_50px_rgba(99,102,241,0.15)] overflow-visible z-10' 
                    : 'border border-zinc-800/80 bg-[#0e0e12] hover:border-zinc-700/80'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-[44px] md:-top-[52px] left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] uppercase font-extrabold tracking-wider px-4.5 py-1.5 rounded-full border border-indigo-500/30 shadow-[0_2px_12px_rgba(99,102,241,0.3)]">
                    Most Popular
                  </span>
                )}
                
                <div className="space-y-3">
                  <div className="min-h-[40px] flex items-start">
                    <h4 className="text-xl font-bold text-white tracking-tight leading-snug">{pkg.name}</h4>
                  </div>
                  <div className="space-y-0.5 mt-1">
                    <span className="text-3xl font-extrabold text-white tracking-tight">{pkg.price}</span>
                    <p className="text-[13px] text-zinc-400 font-medium">{pkg.billing}</p>
                  </div>
                </div>

                <div className="mt-6 mb-6 flex-grow">
                  <h5 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-4">What's Included</h5>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2.5 text-xs md:text-sm text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  to="/contact" 
                  variant={pkg.popular ? 'primary' : 'outline'} 
                  className={`w-full mt-auto rounded-xl py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 border-0' 
                      : 'bg-[#121217] border border-zinc-800 hover:bg-zinc-800/80 text-zinc-300 hover:text-white'
                  }`}
                >
                  {pkg.cta}
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="relative overflow-hidden rounded-2xl glass-panel p-8 md:p-16 border border-zinc-800 text-center space-y-6 max-w-4xl mx-auto">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

        <ScrollReveal direction="up" className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient">Ready to create something custom?</h3>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            If my pricing plans don't fully fit your project requirements, I offer custom development and design contracts tailored specifically to your roadmap.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Button to="/contact" variant="primary" size="lg" className="group">
            Schedule a Discovery Call
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </section>

    </div>
  );
}
