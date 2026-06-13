import React from 'react';
import { GraduationCap, ExternalLink, ArrowRight, Check } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { products } from '../../data/productsData';

export const metadata = {
  title: 'Products',
  description: 'Explore premium software tools and products created by Ishara Bandara. Featuring NoteBase, the ultimate academic workspace.',
};

export default function Products() {
  const iconMap = {
    GraduationCap: GraduationCap,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <ScrollReveal direction="down">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">My Products</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
            Tools built to elevate your workflows
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-zinc-400 text-base md:text-lg">
            I design and develop high-performance software products aimed at improving productivity, collaboration, and learning.
          </p>
        </ScrollReveal>
      </section>

      {/* Products Grid (No photos, matching portfolio layout, leaving slots for future additions) */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Active Products */}
          {products.map((product, index) => {
            const Icon = iconMap[product.icon] || GraduationCap;
            return (
              <ScrollReveal key={product.id} direction="up" delay={0.1} className="flex flex-col h-full">
                <Card className="h-full border border-zinc-800/80 hover:border-zinc-700/80 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
                  {/* Visual gradient accent */}
                  <div className="absolute -right-24 -top-24 w-48 h-48 bg-indigo-600/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-indigo-600/10 transition-all duration-500" />
                  
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400 px-2.5 py-0.5 bg-indigo-500/5 border border-indigo-500/10 rounded-full">
                        Live SaaS
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-300">
                        {product.tagline}
                      </p>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        A smart, high-performance digital ecosystem built to simplify note-taking, lecture tracking, and reference management.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-900">
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">Key Features</h4>
                      <ul className="space-y-1.5">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2 text-xs text-zinc-300">
                            <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800/50 flex items-center justify-between relative z-10">
                    <span className="text-[10px] text-zinc-500">
                      v1.0.0
                    </span>
                    <Button
                      href={product.liveUrl}
                      variant="primary"
                      size="sm"
                      className="group/btn"
                    >
                      Open App
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA Section (consistent with services page layout) */}
      <section className="relative overflow-hidden rounded-2xl glass-panel p-8 md:p-16 border border-zinc-800 text-center space-y-6 max-w-4xl mx-auto">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

        <ScrollReveal direction="up" className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient">Have an idea for a custom product?</h3>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            I specialize in turning concepts into fully functional, high-performance web systems. Let's work together to bring your project to life.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Button to="/contact" variant="primary" size="lg" className="group">
            Let's Talk
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </section>

    </div>
  );
}
