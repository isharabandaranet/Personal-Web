export const services = [
  {
    id: "custom-web-development",
    title: "Custom Web Development",
    description: "Bespoke website and web application development designed specifically around your requirements. I build high-performance, fully responsive, and SEO-optimized web systems.",
    icon: "Code",
    features: ["Custom Layout & Logic", "Responsive UI/UX", "SEO Optimization", "Modern Frameworks"]
  },
  {
    id: "software-systems",
    title: "Software & Systems",
    description: "Development of custom software systems such as POS software, booking engines, reservation portals, and backend management interfaces built to match your business workflows.",
    icon: "Cpu",
    features: ["POS & Inventory Systems", "Booking & Scheduling", "Custom Admin Dashboards", "Database Management"]
  },
  {
    id: "design-branding",
    title: "UI / UX Design & Branding",
    description: "Premium user interface and user experience design, brand creation, and rebranding services. I deliver striking, high-fidelity designs and logo designs that elevate your brand.",
    icon: "Palette",
    features: ["Logo & Brand Book", "Figma UI/UX Prototypes", "Rebranding Campaigns", "Vector Graphic Assets"]
  },
  {
    id: "support-updates",
    title: "Continuous Support & Updates",
    description: "Reliable post-launch maintenance, dedicated updates, and client support to ensure your digital applications remain secure, fast, and up-to-date with new content.",
    icon: "ShieldCheck",
    features: ["Priority Help & Support", "Regular Security Backups", "Content & Text Updates", "Performance Monitoring"]
  }
];

export const pricingPackages = [
  {
    id: "pricing-design",
    name: "UI/UX & Branding",
    price: "Rs: 25,000",
    billing: "Starting price",
    features: [
      "Bespoke Logo & Visual Identity",
      "Interactive Figma Prototypes",
      "Rebranding & Vector Asset Prep",
      "Modern Web & Print Design Files"
    ],
    popular: false,
    cta: "Contact Now"
  },
  {
    id: "pricing-web-dev",
    name: "Custom Web Development",
    price: "Rs: 45,000",
    billing: "Starting price",
    features: [
      "Custom Layout & Logic",
      "Responsive UI/UX (Mobile & Desktop)",
      "SEO & Speed Optimization",
      "Domain & Hosting Setup"
    ],
    popular: true,
    cta: "Contact Now"
  },
  {
    id: "pricing-software",
    name: "Software & Systems",
    price: "Rs: 75,000",
    billing: "Starting price",
    features: [
      "Custom POS / Booking System",
      "Admin Dashboard & Analytics",
      "Database Integration & Security",
      "User Roles & Access Control"
    ],
    popular: false,
    cta: "Contact Now"
  }
];

export const clientBrands = [
  { name: "Desinup", logo: "/img/clients/client-1.png" },
  { name: "Desinup Academy", logo: "/img/clients/client-2.png" },
  { name: "Desinup Store", logo: "/img/clients/client-3.png" },
  { name: "Infinity Physics", logo: "/img/clients/client-4.png" },
  { name: "Sell Sigma", logo: "/img/clients/client-5.png" },
  { name: "Nipun Palliyaguru", logo: "/img/clients/client-6.png" },
  { name: "Oshadha Nimesh", logo: "/img/clients/client-7.png" },
  { name: "CaptureZen", logo: "/img/clients/client-8.png" },
  { name: "EduWave", logo: "/img/clients/client-9.png" }
];

const yearsOfExperience = new Date().getFullYear() - 2018;

export const funFacts = [
  { label: "Happy Clients", value: "99+" },
  { label: "Years of Experience", value: `${yearsOfExperience}+` },
  { label: "Projects Done", value: "140" },
  { label: "Brands Around Me", value: `${clientBrands.length}` }
];

export const testimonials = [
  {
    id: "review-1",
    name: "Dev Team",
    role: "EduWave Project",
    company: "Desinup Group",
    initials: "EW",
    content: "Ishara delivered an exceptional online learning platform for our project. His blend of software engineering and creative branding helped us to compleate this project successfully.",
    rating: 5
  },
  {
    id: "review-2",
    name: "Oshadha Nimesh",
    role: "Owner",
    company: "CaprureZen",
    initials: "ON",
    content: "The video editing and graphic layouts Ishara created for our campaigns were top-notch. He has a great sense of modern aesthetics and understands how to engage the target audience.",
    rating: 5
  },
  {
    id: "review-3",
    name: "Sell Sigma",
    role: "Marketing Team",
    company: "Sell Sigma",
    initials: "SS",
    content: "We hired Ishara to launch our e-commerce campaigns and design our brand identity. The results were outstanding and gave us a highly premium look in the market.",
    rating: 5
  }
];
