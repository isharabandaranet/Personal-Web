export const codingProjects = [
  {
    id: "cp1",
    title: "Personal Website",
    category: "Web",
    filter: "web",
    icon: "🌐",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/isharabandaranet/Personal-Web",
    liveUrl: "https://isharabandara.com",
    shortDescription: "My personal portfolio website built from scratch with vanilla HTML/CSS/JS and a custom admin panel.",
    description: "A fully custom personal portfolio website. It includes a portfolio gallery, admin panel with GitHub Pages auto-deployment, and a contact form powered by Formspree. Built entirely with vanilla web technologies — no frameworks.",
    highlights: [
      "Custom admin panel for creating and editing portfolio items",
      "One-click GitHub Pages deployment via the GitHub REST API",
      "Responsive design with dark-mode aesthetics and smooth animations",
      "Contact form integration with Formspree",
      "localStorage-powered content store with seed data fallback"
    ]
  },
  {
    id: "eduwave",
    title: "EduWave",
    category: "E-Learning Web",
    filter: "web",
    icon: "🎓",
    stack: ["JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/isharabandaranet/EduWave",
    liveUrl: "https://eduwave.lk",
    shortDescription: "Sri Lanka's premier digital learning platform offering A/L past papers, live classes, and expert student coaching.",
    description: "A comprehensive e-learning web application specifically designed for Advanced Level Science stream students in Sri Lanka. The platform provides access to a massive library of past papers with real exam conditions, personalized one-on-one coaching, and detailed performance analytics. It features a seamless role-based authentication system for both Students and Coaches.",
    highlights: [
      "Interactive past paper library with quiz history tracking",
      "Role-based multi-login system (Student, Coach, Classes)",
      "Personalized student coaching dashboard with real-time analytics",
      "Responsive, modern UI tailored for A/L Science stream subjects"
    ]
  },
  {
    id: "notebase-frontend",
    title: "NoteBase - Frontend App",
    category: "Frontend Web",
    filter: "web",
    icon: "💻",
    stack: ["React", "JavaScript", "Tailwind CSS", "Clerk Auth"],
    github: "https://github.com/isharabandaranet/NoteBase-Frontend",
    liveUrl: "https://notebase.isharabandara.com",
    shortDescription: "The interactive and responsive user interface for the NoteBase study workspace.",
    description: "A highly responsive single-page application (SPA) built with React, serving as the client-side interface for NoteBase. It features a custom rich-text inline editor (Tiptap) with auto-save capabilities, inline image rendering, and seamless drag-and-drop file uploads. User authentication and session management are securely handled via Clerk OAuth.",
    highlights: [
      "Responsive React SPA hosted on Vercel",
      "Custom rich-text editor with auto-save functionality",
      "Secure user authentication using Clerk OAuth",
      "Seamless drag-and-drop file and image handling UI"
    ]
  },
  {
    id: "notebase-backend",
    title: "NoteBase - REST API & AI",
    category: "Backend / AI",
    filter: "backend",
    icon: "⚙️",
    stack: ["Python (Flask)", "MySQL", "Google Drive API", "Google Gemini API"],
    github: "https://github.com/isharabandaranet/NoteBase-Backend",
    liveUrl: "https://notebase-backend.onrender.com",
    shortDescription: "A Python-powered backend service handling databases, cloud storage, and AI integrations.",
    description: "A robust backend REST API built with Python and Flask to power the NoteBase platform. It manages a relational MySQL database (hosted on Aiven), securely interfaces with the Google Drive API to store user uploads (bypassing database bloat), and integrates the Google Gemini AI to generate intelligent, context-aware study guides.",
    highlights: [
      "RESTful API architecture using Python and Flask",
      "Relational database management with Aiven MySQL",
      "Secure Google Drive API integration for infinite cloud storage",
      "Google Gemini AI integration for smart study features"
    ]
  },
  {
    id: "infinity-physics",
    title: "Infinity Physics Platform",
    category: "E-Learning Web",
    filter: "web",
    icon: "🎓",
    stack: ["WordPress", "PHP", "MySQL", "LMS", "Elementor"],
    github: "https://github.com/isharabandaranet",
    liveUrl: "",
    shortDescription: "A comprehensive Learning Management System (LMS) built to manage online tuition classes and student enrollments.",
    description: "A fully functional e-learning platform developed for a physics tuition class. Built on WordPress, it allows administrators to efficiently manage student enrollments, schedule live classes, organize recorded video lessons, and conduct online quizzes. The platform provides a seamless, secure, and interactive learning experience for students across all devices.",
    highlights: [
      "Complete Learning Management System (LMS) architecture",
      "Secure student registration and individual profile management",
      "Organized access to live class links and recorded video lessons",
      "Interactive online quizzes and assignment tracking",
      "Fully responsive and user-friendly UI designed with Elementor"
    ]
  }
];

export const designProjects = [
  {
    id: "p1",
    title: "Sell Sigma Brand Identity",
    category: "Branding",
    filter: "branding",
    icon: "🏷️",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/1.png",
    shortDescription: "Complete brand identity design for Sell Sigma e-commerce platform including logo, colour palette and brand guidelines."
  },
  {
    id: "p2",
    title: "Infinity Physics Logo",
    category: "Branding",
    filter: "branding",
    icon: "⚛️",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/2.png",
    shortDescription: "Modern logo and visual identity design for Infinity Physics educational brand."
  },
  {
    id: "p3",
    title: "Physics 2024 Revision Campaign",
    category: "Designing",
    filter: "designing",
    icon: "📐",
    tools: ["Photoshop", "Figma"],
    image: "/img/portfolio/3.png",
    shortDescription: "Social media promotional campaign for the Physics 2024 online revision programme targeting A/L students."
  },
  {
    id: "p4",
    title: "Free Online Revision Poster",
    category: "Designing",
    filter: "designing",
    icon: "📋",
    tools: ["Photoshop", "Illustrator"],
    image: "/img/portfolio/4.png",
    shortDescription: "Bold poster design for a free online revision classes campaign with strong typography and visual hierarchy."
  },
  {
    id: "p5",
    title: "2023 Revision Campaign",
    category: "Designing",
    filter: "designing",
    icon: "📚",
    tools: ["Photoshop", "Figma"],
    image: "/img/portfolio/5.jpg",
    shortDescription: "Full visual campaign for 2023 revision classes with engaging social media graphics and event posters."
  },
  {
    id: "p6",
    title: "Revision Social Media Pack",
    category: "Designing",
    filter: "designing",
    icon: "📱",
    tools: ["Photoshop", "Canva"],
    image: "/img/portfolio/6.png",
    shortDescription: "Social media post pack for educational revision campaigns, optimised for Facebook and Instagram formats."
  },
  {
    id: "p7",
    title: "Sell Sigma Marketing Graphics",
    category: "Marketing",
    filter: "marketing",
    icon: "📣",
    tools: ["Photoshop", "Illustrator"],
    image: "/img/portfolio/7.png",
    shortDescription: "Marketing and promotional graphic set for Sell Sigma platform including social posts and banner designs."
  },
  {
    id: "p8",
    title: "JFly Tunes Brand Design",
    category: "Branding",
    filter: "branding",
    icon: "🎵",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/8.jpg",
    shortDescription: "Logo and brand identity design for JFly Tunes music brand with a modern, clean aesthetic."
  },
  {
    id: "p9",
    title: "Robot Mascot Design",
    category: "Branding",
    filter: "branding",
    icon: "🤖",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/9.png",
    shortDescription: "Mascot and character illustration for a tech brand, featuring a friendly robot with a distinctive personality."
  },
  {
    id: "p10",
    title: "Desinup Services Package",
    category: "Branding",
    filter: "branding",
    icon: "✏️",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/10.png",
    shortDescription: "Brand services showcase for Desinup agency covering graphic design, brand design, web design and editing packages."
  },
  {
    id: "p11",
    title: "Free Revision Poster v2",
    category: "Marketing",
    filter: "marketing",
    icon: "📢",
    tools: ["Photoshop", "Illustrator"],
    image: "/img/portfolio/11.png",
    shortDescription: "Refreshed edition of the online revision poster campaign with improved layout and stronger visual hierarchy."
  },
  {
    id: "p12",
    title: "Chemistry Marketing Pack",
    category: "Marketing",
    filter: "marketing",
    icon: "🧪",
    tools: ["Photoshop", "Figma"],
    image: "/img/portfolio/12.png",
    shortDescription: "Marketing graphics pack for chemistry tuition classes including social media posts and promotional materials."
  }
];
