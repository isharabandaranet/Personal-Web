export const codingProjects = [
  {
    id: "cp1",
    title: "Personal Website",
    category: "Web",
    filter: "web",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/isharabandaranet/Personal-Web",
    liveUrl: "https://isharabandara.com",
    image: "/img/portfolio/personal-website.png",
    gallery: ["/img/portfolio/personal-website.png"],
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
    year: "2024",
    stack: ["JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/isharabandaranet/EduWave",
    liveUrl: "https://eduwave.lk",
    image: "/img/portfolio/eduwave.png",
    gallery: ["/img/portfolio/eduwave.png"],
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
    year: "2024",
    stack: ["React", "JavaScript", "Tailwind CSS", "Clerk Auth"],
    github: "https://github.com/isharabandaranet/NoteBase-Frontend",
    liveUrl: "https://notebase.isharabandara.com",
    image: "/img/portfolio/notebase-frontend.png",
    gallery: [
      "/img/portfolio/notebase-frontend.png",
      "/img/portfolio/notebase-backend.png"
    ],
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
    filter: "software",
    year: "2024",
    stack: ["Python (Flask)", "MySQL", "Google Drive API", "Google Gemini API"],
    github: "https://github.com/isharabandaranet/NoteBase-Backend",
    liveUrl: "https://notebase-backend.onrender.com",
    image: "/img/portfolio/notebase-backend.png",
    gallery: [
      "/img/portfolio/notebase-backend.png",
      "/img/portfolio/notebase-frontend.png"
    ],
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
    year: "2023",
    stack: ["WordPress", "PHP", "MySQL", "LMS", "Elementor"],
    github: "https://github.com/isharabandaranet",
    liveUrl: "",
    image: "/img/portfolio/infinity-physics.png",
    gallery: ["/img/portfolio/infinity-physics.png"],
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
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/1.png",
    gallery: ["/img/portfolio/1.png"],
    shortDescription: "Complete brand identity design for Sell Sigma e-commerce platform including logo, colour palette and brand guidelines.",
    description: "A complete brand identity and guidelines package created for Sell Sigma, an upcoming e-commerce and retail platform. The branding focused on modern, reliable, and high-performance design aesthetics.",
    highlights: [
      "Modern typographic logo design",
      "Tailored brand color palette and visual tokens",
      "Comprehensive brand identity guidelines book",
      "Corporate letterhead and stationery kit"
    ]
  },
  {
    id: "p2",
    title: "Infinity Physics Logo",
    category: "Branding",
    filter: "branding",
    year: "2023",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/2.png",
    gallery: ["/img/portfolio/2.png"],
    shortDescription: "Modern logo and visual identity design for Infinity Physics educational brand.",
    description: "A custom logo design and branding elements created for Infinity Physics. The design concepts emphasize scientific inquiry, energy flow, and academic excellence using modern geometric shapes.",
    highlights: [
      "Symmetric atomic symbol logo mark",
      "Vibrant gradient color system representing energy spectra",
      "Optimized social media branding templates",
      "Print-ready logo files for marketing banners and materials"
    ]
  },
  {
    id: "p3",
    title: "Physics 2024 Revision Campaign",
    category: "Designing",
    filter: "branding",
    year: "2024",
    tools: ["Photoshop", "Figma"],
    image: "/img/portfolio/3.png",
    gallery: ["/img/portfolio/3.png"],
    shortDescription: "Social media promotional campaign for the Physics 2024 online revision programme targeting A/L students.",
    description: "A social media marketing campaign designed for the Physics 2024 online revision program. Visuals were optimized for engagement, targeting Advanced Level science students in Sri Lanka.",
    highlights: [
      "High-impact social media campaign graphics",
      "Strong visual hierarchy highlighting course features",
      "Optimized text readability for mobile screens",
      "Consistent theme and styling across all design variations"
    ]
  },
  {
    id: "p4",
    title: "Free Online Revision Poster",
    category: "Designing",
    filter: "branding",
    year: "2024",
    tools: ["Photoshop", "Illustrator"],
    image: "/img/portfolio/4.png",
    gallery: ["/img/portfolio/4.png"],
    shortDescription: "Bold poster design for a free online revision classes campaign with strong typography and visual hierarchy.",
    description: "A bold promotional poster designed for free online revision classes. It features large typography and clear scheduling blocks to drive student sign-ups.",
    highlights: [
      "High-contrast color scheme for maximum visibility",
      "Clear information structure and readability",
      "Includes class schedule and lecturer credentials",
      "Print-ready high-resolution layouts"
    ]
  },
  {
    id: "p5",
    title: "2023 Revision Campaign",
    category: "Designing",
    filter: "branding",
    year: "2023",
    tools: ["Photoshop", "Figma"],
    image: "/img/portfolio/5.jpg",
    gallery: ["/img/portfolio/5.jpg"],
    shortDescription: "Full visual campaign for 2023 revision classes with engaging social media graphics and event posters.",
    description: "Full marketing graphic package for the Physics 2023 revision program. The campaign focused on course offerings, student achievements, and class registration details.",
    highlights: [
      "Comprehensive Facebook and Instagram post designs",
      "Custom icons and vector badges",
      "High student engagement rates driven by design clarity",
      "Consistent branding elements across different aspect ratios"
    ]
  },
  {
    id: "p6",
    title: "Revision Social Media Pack",
    category: "Designing",
    filter: "branding",
    year: "2023",
    tools: ["Photoshop", "Canva"],
    image: "/img/portfolio/6.png",
    gallery: ["/img/portfolio/6.png"],
    shortDescription: "Social media post pack for educational revision campaigns, optimised for Facebook and Instagram formats.",
    description: "A templates pack for social media channels, tailored for academic revision promotions. Simple, customizable layouts that align with educational branding.",
    highlights: [
      "Multi-platform social media graphic kit",
      "Fully customizable text and color placeholders",
      "Optimized layout ratios for mobile feeds",
      "Clean, academic-themed design elements"
    ]
  },
  {
    id: "p7",
    title: "Sell Sigma Marketing Graphics",
    category: "Marketing",
    filter: "branding",
    year: "2024",
    tools: ["Photoshop", "Illustrator"],
    image: "/img/portfolio/7.png",
    gallery: ["/img/portfolio/7.png"],
    shortDescription: "Marketing and promotional graphic set for Sell Sigma platform including social posts and banner designs.",
    description: "Promotional and marketing banners designed for Sell Sigma's seasonal launch campaigns, focusing on high conversion rates and discount displays.",
    highlights: [
      "E-commerce promotional banner designs",
      "Call-to-action buttons styled for graphic banners",
      "Visual hierarchy focused on key sales items",
      "Optimized for web-store headers and social headers"
    ]
  },
  {
    id: "p8",
    title: "JFly Tunes Brand Design",
    category: "Branding",
    filter: "branding",
    year: "2023",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/8.jpg",
    gallery: ["/img/portfolio/8.jpg"],
    shortDescription: "Logo and brand identity design for JFly Tunes music brand with a modern, clean aesthetic.",
    description: "Logo and visual identity designed for JFly Tunes, a modern digital music brand. The branding captures energy, movement, and acoustic frequencies.",
    highlights: [
      "Dynamic soundwave and bird-inspired logo mark",
      "Vibrant, youth-oriented color scheme",
      "App icon visual design and asset export",
      "Modern typography guidelines"
    ]
  },
  {
    id: "p9",
    title: "Robot Mascot Design",
    category: "Branding",
    filter: "branding",
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/9.png",
    gallery: ["/img/portfolio/9.png"],
    shortDescription: "Mascot and character illustration for a tech brand, featuring a friendly robot with a distinctive personality.",
    description: "Mascot design and character illustration for a technology startup. The character represents automated intelligence, friendliness, and futuristic helper capabilities.",
    highlights: [
      "Friendly robot character illustration",
      "Vector-based mascot design scaling infinitely",
      "Multiple character poses and expressions",
      "Clean line-art with gradient fills"
    ]
  },
  {
    id: "p10",
    title: "Desinup Services Package",
    category: "Branding",
    filter: "branding",
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
    image: "/img/portfolio/10.png",
    gallery: ["/img/portfolio/10.png"],
    shortDescription: "Brand services showcase for Desinup agency covering graphic design, brand design, web design and editing packages.",
    description: "Visual display catalog listing the design, branding, and development packages offered by Desinup agency. The design showcases structure, packages, and pricing details.",
    highlights: [
      "Branded catalog and services presentation",
      "Clear tables showing package features and pricing",
      "Modern layout with a dark theme aesthetic",
      "Optimized for both digital viewing and print distribution"
    ]
  },
  {
    id: "p11",
    title: "Free Revision Poster v2",
    category: "Marketing",
    filter: "branding",
    year: "2024",
    tools: ["Photoshop", "Illustrator"],
    image: "/img/portfolio/11.png",
    gallery: ["/img/portfolio/11.png"],
    shortDescription: "Refreshed edition of the online revision poster campaign with improved layout and stronger visual hierarchy.",
    description: "A revised version of the online revision poster featuring improved typography, scheduling alignment, and a more vibrant neon aesthetic to increase registration conversions.",
    highlights: [
      "Refined layouts for enhanced readability",
      "High-contrast neon design highlights",
      "Incorporates QR codes for quick registrations",
      "Optimized for physical printing and digital sharing"
    ]
  },
  {
    id: "p12",
    title: "Chemistry Marketing Pack",
    category: "Marketing",
    filter: "branding",
    year: "2024",
    tools: ["Photoshop", "Figma"],
    image: "/img/portfolio/12.png",
    gallery: ["/img/portfolio/12.png"],
    shortDescription: "Marketing graphics pack for chemistry tuition classes including social media posts and promotional materials.",
    description: "Visual marketing pack designed for chemistry tuition classes. Designs feature periodic table elements, laboratory visuals, and clear schedules.",
    highlights: [
      "Science-themed promotional layouts",
      "Clean layout for complex scheduling blocks",
      "Social media post templates and banners",
      "Custom vector chemistry icons and badges"
    ]
  }
];

export const allProjects = [
  ...codingProjects.map(p => ({ ...p, type: 'coding' })),
  ...designProjects.map(p => ({ ...p, type: 'design' }))
];
