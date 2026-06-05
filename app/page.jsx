import React from 'react';
import { ArrowRight, CheckCircle2, Palette, Code, Cpu, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrollReveal from '../components/ui/ScrollReveal';
import { services, clientBrands, funFacts, testimonials } from '../data/servicesData';

export default function Home() {
  const iconMap = {
    Code: Code,
    Cpu: Cpu,
    Palette: Palette,
    ShieldCheck: ShieldCheck
  };

  const whyChooseMe = [
    {
      title: "Technical Excellence",
      description: "I craft modern, performant, and secure digital applications engineered for high-growth businesses."
    },
    {
      title: "Creative Brand Identity",
      description: "I create bespoke, professional aesthetics that make you stand out from competitors."
    },
    {
      title: "Result-Driven Marketing",
      description: "I orchestrate launches and growth campaigns that deliver measurable outcomes and client retention."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ishara Bandara",
    "url": "https://isharabandara.com",
    "jobTitle": "Founder & Creative Technologist",
    "sameAs": [
      "https://github.com/isharabandaranet",
      "https://www.facebook.com/isharabandaranet",
      "https://www.instagram.com/isharabandaranet"
    ],
    "knowsAbout": [
      "Software Engineering",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Creative Design",
      "Brand Identity"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-36">
      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center justify-center min-h-[70vh] pt-8 md:pt-16">
        {/* Glow behind hero text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <ScrollReveal direction="none" delay={0.1}>
          <div className="inline-flex items-center space-x-2 bg-zinc-900/60 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-zinc-300 mb-6 hover:border-zinc-700/60 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span>Hey, I'm Ishara Bandara</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Let's Build Something <br className="hidden md:inline" />
            <span className="text-gradient-indigo">Brilliant</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mt-6 leading-relaxed">
            Welcome to my digital space. I build custom web platforms, design high-impact visuals, and orchestrate marketing campaigns that define leading brands.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
            <Button to="/portfolio" variant="primary" size="lg" className="w-full sm:w-auto group">
              Explore My Work
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
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">My Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gradient">What I Do Best</h3>
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
              <ScrollReveal key={service.id} direction="up" delay={index * 0.1} className="h-full">
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

      {/* Why Choose Me */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Why Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">
            I merge design and technology into digital success
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            Over the years, I have helped companies, physics educators, and individual brands refine their visual messaging and launch interactive software. I prioritize custom-built software architectures and conversion-optimized digital design.
          </p>
          <div className="space-y-4 pt-4">
            {whyChooseMe.map((point) => (
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
              <div className="text-4xl md:text-5xl font-extrabold text-gradient-indigo leading-none">{fact.value}</div>
              <div className="text-xs md:text-sm text-zinc-400 font-medium tracking-wide mt-3">{fact.label}</div>
            </Card>
          ))}
        </ScrollReveal>
      </section>

      {/* Brands Around Me Section */}
      <section className="space-y-10 py-6 text-center">
        <ScrollReveal direction="up" className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Collaborations</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gradient">Brands Around Me</h3>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="w-full">
          {/* Infinite Marquee Container */}
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">
            <div className="flex w-max flex-nowrap hover-pause">
              {/* First track */}
              <div className="flex items-center animate-infinite-scroll">
                {clientBrands.map((brand, i) => (
                  <div key={`${brand.name}-1-${i}`} className="h-10 md:h-12 w-28 md:w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 relative mx-6 shrink-0">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      width={144}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Second duplicated track for seamless loop */}
              <div className="flex items-center animate-infinite-scroll" aria-hidden="true">
                {clientBrands.map((brand, i) => (
                  <div key={`${brand.name}-2-${i}`} className="h-10 md:h-12 w-28 md:w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 relative mx-6 shrink-0">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      width={144}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Customer Reviews Section */}
      <section className="space-y-12">
        <ScrollReveal direction="right" className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient">What My Clients Say</h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} direction="up" delay={index * 0.1} className="h-full">
              <Card glow={index === 1} className="h-full flex flex-col justify-between hover:border-indigo-500/20">
                <div className="space-y-5">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 text-indigo-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-indigo-400" />
                    ))}
                  </div>
                  {/* Review text */}
                  <p className="text-zinc-300 text-sm leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3 mt-8 pt-4 border-t border-zinc-800/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white uppercase shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-zinc-100">{testimonial.name}</h4>
                    <p className="text-xs text-zinc-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-2xl glass-panel p-8 md:p-16 border border-zinc-800 text-center space-y-6 max-w-4xl mx-auto pt-12 pb-12">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

        <ScrollReveal direction="up" className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient">Let's bring your vision to life</h3>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Ready to start your next project, elevate your brand design, or launch a result-driven marketing campaign? Let's connect and build something exceptional together.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Button to="/contact" variant="primary" size="lg" className="group">
            Let's Collaborate
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
}


