export const services = [
  {
    id: "designing",
    title: "Designing",
    description: "All your day-to-day graphical needs like social media posts, posters, handbills, business cards, etc. includes this option.",
    icon: "Palette", // We'll map this to Lucide icons
    features: ["Social Media Posts", "Posters & Flyers", "Business Cards", "Handbills"]
  },
  {
    id: "editing",
    title: "Editing",
    description: "All your editing needs like social media photos, videos, short films, YouTube program videos, etc. are included here.",
    icon: "Video",
    features: ["Video Editing", "Photo Manipulation", "Short Film Editing", "YouTube Content"]
  },
  {
    id: "branding",
    title: "Branding",
    description: "Take your brand to the next level. Logo Design, Letter Heads, Brand Identity Design, etc. are included in this section.",
    icon: "Award",
    features: ["Logo Design", "Brand Identity", "Letterheads", "Visual Guidelines"]
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Any of your marketing campaigns like product marketing, app launching, tuition marketing, etc. includes this.",
    icon: "Megaphone",
    features: ["Product Campaigns", "App Launches", "Tuition/Class Marketing", "Social Media Campaigns"]
  }
];

export const pricingPackages = [
  {
    id: "silver",
    name: "Silver",
    price: "Rs: 5,999",
    billing: "Best for individuals",
    features: [
      "Social Media Design",
      "Poster Design",
      "Video Editing"
    ],
    popular: false,
    cta: "Contact Now"
  },
  {
    id: "gold",
    name: "Gold",
    price: "Rs: 7,999",
    billing: "Best for professionals",
    features: [
      "Social Media Design",
      "Poster Design",
      "Video Editing",
      "Logo Design & Branding"
    ],
    popular: true,
    cta: "Contact Now"
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "Rs: 10,999",
    billing: "Best for businesses",
    features: [
      "Social Media Design",
      "Poster Design",
      "Video Editing",
      "Logo Design & Branding",
      "Marketing"
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
  { name: "CaptureZen", logo: "/img/clients/client-8.png" }
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
