import React from 'react';
import { Mail, Phone, MapPin, Download, CheckCircle2, Award, GraduationCap, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Typewriter from '../../components/ui/Typewriter';

export const metadata = {
  title: 'About',
  description: 'Meet Ishara Bandara, and learn about his education timeline, technical expertise, and general skills.',
};

export default function Founder() {
  const skills = {
    engineering: ["JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Python (Flask)", "MySQL / PHP"],
    creative: ["User Interface (UI) Design", "Brand Identity & Logos", "Vector Illustration", "Video Editing", "Social Media Marketing", "Canva / Figma"],
    general: ["Teamwork", "Leadership", "Communication Skills", "Problem Solving", "Collaboration"]
  };

  const education = [
    {
      degree: "Bachelor of Computer Science (UG)",
      institution: "University Of Ruhuna",
      period: "2025 - Present"
    },
    {
      degree: "GCE Advanced Level - Physical Science Stream",
      institution: "Badulla Central College",
      period: "2022"
    },
    {
      degree: "GCE Ordinary Level",
      institution: "Welimada Central College",
      period: "2019"
    }
  ];

  const leadership = [
    {
      role: "Badulla District Coordinator",
      organization: "Sasnaka Sansada",
      period: "Jan 2025 - Dec 2025",
      description: "Coordinated educational workshops, community projects, and youth empowerment programs."
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
                  <p className="text-sm text-indigo-400 font-semibold mt-1 h-5 flex items-center">
                    <Typewriter words={["Developer", "Designer", "Software Engineer", "Creative Specialist"]} />
                  </p>
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

          {/* General Skills Card */}
          <ScrollReveal direction="right" delay={0.1}>
            <Card className="p-6 border border-zinc-800/80 bg-zinc-950/40">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4 pb-2 border-b border-zinc-900">
                General Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.general.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800/80 text-zinc-300 rounded-lg text-xs font-semibold hover:border-indigo-500/50 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education Timeline */}
            <ScrollReveal direction="left" delay={0.2} className="space-y-6">
              <h3 className="text-lg font-bold text-zinc-200 border-b border-zinc-900 pb-3 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Education</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-zinc-800">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative pl-8 space-y-1 group">
                    {/* Timeline bullet */}
                    <span className="absolute left-1.5 top-2.5 w-3.5 h-3.5 rounded-full border border-indigo-500 bg-zinc-950 group-hover:bg-indigo-600 transition-colors" />

                    <h4 className="font-bold text-zinc-200 text-base leading-snug">{edu.degree}</h4>
                    <p className="text-xs text-indigo-400/80 font-semibold">{edu.institution}</p>
                    <span className="inline-block text-xs text-zinc-500 font-semibold pt-0.5">{edu.period}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Leadership & Volunteering Timeline */}
            <ScrollReveal direction="left" delay={0.3} className="space-y-6">
              <h3 className="text-lg font-bold text-zinc-200 border-b border-zinc-900 pb-3 flex items-center space-x-2">
                <Users className="w-5 h-5 text-indigo-400" />
                <span>Leadership & Volunteering</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-zinc-800">
                {leadership.map((lead) => (
                  <div key={lead.role} className="relative pl-8 space-y-1 group">
                    {/* Timeline bullet */}
                    <span className="absolute left-1.5 top-2.5 w-3.5 h-3.5 rounded-full border border-indigo-500 bg-zinc-950 group-hover:bg-indigo-600 transition-colors" />

                    <h4 className="font-bold text-zinc-200 text-base leading-snug">{lead.role}</h4>
                    <p className="text-xs text-indigo-400/80 font-semibold">{lead.organization}</p>
                    <span className="inline-block text-xs text-zinc-500 font-semibold pt-0.5">{lead.period}</span>
                    {lead.description && (
                      <p className="text-xs text-zinc-400 leading-relaxed pt-1.5">{lead.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="relative overflow-hidden rounded-2xl glass-panel p-8 md:p-16 border border-zinc-800 text-center space-y-6 max-w-4xl mx-auto pt-12 pb-12">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">Let's build something brilliant together</h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Whether you need a custom web application, a scalable software system, or high-fidelity design work, let's connect and make it happen.
            </p>
          </div>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="lg" className="group">
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
