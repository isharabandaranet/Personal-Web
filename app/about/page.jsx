import React from 'react';
import { Mail, Phone, MapPin, Download, CheckCircle2, Award, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const metadata = {
  title: 'Founder Profile',
  description: 'Meet Ishara Bandara, Founder & Lead Creative Technologist. Read about his work timeline, tech stacks, and career insights.',
};

export default function Founder() {
  const skills = {
    engineering: ["JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Python (Flask)", "MySQL / PHP"],
    creative: ["User Interface (UI) Design", "Brand Identity & Logos", "Vector Illustration", "Video Editing", "Social Media Marketing", "Canva / Figma"]
  };

  const experience = [
    {
      role: "Lead Engineer & Founder",
      company: "Ishara Bandara Digital Services",
      period: "2020 - Present",
      description: "Managing bespoke web applications, WordPress LMS deployments, brand identities, and commercial videography editing."
    },
    {
      role: "Freelance Creative Designer",
      company: "Various Tech Brands & LMS Platforms",
      period: "2018 - 2020",
      description: "Designed promotional assets, course layouts, and logos for regional education institutions and startup stores."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-28">

      {/* Intro Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Profile Card Col */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal direction="right">
            <Card glow className="p-0 overflow-hidden border border-zinc-800/80">
              <div className="aspect-[4/5] w-full bg-zinc-950 overflow-hidden relative">
                <Image
                  src="/img/main_photo.jpg"
                  alt="Ishara Bandara Portrait"
                  width={480}
                  height={600}
                  priority
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Ishara Bandara</h2>
                  <p className="text-sm text-indigo-400 font-semibold mt-1">Founder & Creative Technologist</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-800/60">
                  <div className="flex items-center space-x-3 text-sm text-zinc-400">
                    <Phone className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                    <span>(+94) 71 18 39 224</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-zinc-400">
                    <Mail className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                    <span>hello@isharabandara.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-zinc-400">
                    <MapPin className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                    <span>Bogahakumbura, Sri Lanka</span>
                  </div>
                </div>

                <Button href="/CV.pdf" download variant="primary" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Narrative Biography Col */}
        <div className="lg:col-span-7 space-y-8">
          <ScrollReveal direction="left" className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">My Profile</h2>
            <h1 className="text-4xl font-extrabold text-gradient">Hello, I'm Ishara Bandara</h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Welcome to my digital journey, where creativity has no limit. The space for my passions, my projects, my pursuits. Check out my portfolio and take a glimpse into the various aspects of my life. No matter what you are looking for — inspiration, education, or tech collaboration — you have come to the right spot. Go and return as you please, and to participate and connect — I look forward to doing this with you.
            </p>
          </ScrollReveal>

          {/* Skills Grid */}
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <h3 className="text-lg font-bold text-zinc-200 border-b border-zinc-900 pb-3 flex items-center space-x-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Skills & Technologies</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Software Engineering</h4>
                <ul className="space-y-2">
                  {skills.engineering.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Creative Design & Media</h4>
                <ul className="space-y-2">
                  {skills.creative.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <ScrollReveal direction="left" delay={0.2} className="space-y-6">
            <h3 className="text-lg font-bold text-zinc-200 border-b border-zinc-900 pb-3 flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <span>Timeline of Work</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-zinc-800">
              {experience.map((exp) => (
                <div key={exp.role} className="relative pl-8 space-y-2 group">
                  {/* Timeline bullet */}
                  <span className="absolute left-1.5 top-2.5 w-3.5 h-3.5 rounded-full border border-indigo-500 bg-zinc-950 group-hover:bg-indigo-600 transition-colors" />

                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="font-bold text-zinc-200 text-base">{exp.role}</h4>
                    <span className="text-xs text-zinc-500 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-xs text-indigo-400/80 font-semibold">{exp.company}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
