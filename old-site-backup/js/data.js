/**
 * data.js — Central content store for isharabandara.net
 *
 * This file seeds the default blog posts and portfolio items.
 * The admin panel (admin.html) stores additions/edits in localStorage
 * under the keys: 'ib_blog_posts' and 'ib_portfolio_items'.
 *
 * To permanently publish content: use the admin Export button and
 * replace the seed arrays below with exported data, then commit.
 */

const IB_DEFAULT_BLOG_POSTS = [
  {
    id: "blog-post-1",
    title: "10 Essential Graphic Design Principles Every Designer Should Know",
    category: "Design",
    date: "14 Apr 2024",
    dateISO: "2024-04-14",
    image: "./img/blog/blog_post_1.jpg",
    link: "blog-post-1.html",
    tags: ["Design"],
    excerpt: "Graphic design is a powerful tool for communication, and understanding key design principles is essential for creating effective and impactful designs.",
    content: `<p>Graphic design is a powerful tool for communication, and understanding key design principles is essential for creating effective and impactful designs. In this blog post, we'll explore ten fundamental principles of graphic design that every designer should know to elevate their work.</p>
<h6>1. Balance:</h6>
<p>Balance refers to the distribution of visual elements within a design to create harmony and stability. Aim for symmetrical or asymmetrical balance to create visual interest and hierarchy in your designs.</p>
<h6>2. Contrast:</h6>
<p>Contrast involves the juxtaposition of different elements such as color, size, and shape to create visual impact and emphasis. Use contrast to highlight important information and create dynamic compositions.</p>
<h6>3. Alignment:</h6>
<p>Alignment is the arrangement of elements along a common axis or edge to create cohesion and organization in a design. Ensure that text, images, and other elements are aligned properly to maintain visual clarity and readability.</p>
<h6>4. Proximity:</h6>
<p>Proximity refers to the grouping of related elements within close proximity to indicate their relationship and importance. Use proximity to organize information and guide the viewer's eye through the design.</p>
<h6>5. Repetition:</h6>
<p>Repetition involves the use of consistent visual elements such as colors, fonts, and shapes to create unity and reinforce brand identity. Incorporate repetition to establish visual patterns and reinforce key messages.</p>
<p>By mastering these ten essential graphic design principles, you can create visually stunning, effective, and memorable designs that resonate with your audience.</p>`
  },
  {
    id: "blog-post-2",
    title: "The Power of Branding: Why it Matters for Your Business",
    category: "Business",
    date: "02 May 2024",
    dateISO: "2024-05-02",
    image: "./img/blog/blog_post_2.jpg",
    link: "blog-post-2.html",
    tags: ["Business", "Branding"],
    excerpt: "Branding is a critical component of any successful business strategy. It encompasses everything from your logo and color scheme to your company culture and customer experience.",
    content: `<p>Branding is a critical component of any successful business strategy. It encompasses everything from your logo and color scheme to your company culture and customer experience. In this post, we'll explore why branding matters and how it can make or break your business.</p>
<h6>What is Branding?</h6>
<p>Branding is the process of creating a unique identity for your business that differentiates you from your competitors. It's how your business presents itself to the world and communicates its values, personality, and promise to customers.</p>
<h6>Why Does Branding Matter?</h6>
<p>A strong brand builds trust with your customers and creates recognition in the marketplace. It sets you apart from competitors, creates customer loyalty, and can even command premium pricing. Your brand is ultimately your reputation — and it's invaluable.</p>
<p>Invest in building a cohesive, authentic brand that truly represents your business values and resonates with your target audience.</p>`
  },
  {
    id: "blog-post-3",
    title: "UI/UX Design Fundamentals: Crafting Seamless Digital Experiences",
    category: "Design",
    date: "10 Jul 2024",
    dateISO: "2024-07-10",
    image: "./img/blog/blog_post_3.jpg",
    link: "blog-post-3.html",
    tags: ["Design", "UI/UX"],
    excerpt: "In an era where digital products compete fiercely for user attention, the quality of your UI/UX design can be the decisive factor between success and obscurity.",
    content: `<p>In an era where digital products compete fiercely for user attention, the quality of your UI/UX design can be the decisive factor between success and obscurity. Understanding the core fundamentals of UI and UX will elevate your work from functional to unforgettable.</p>
<h6>Understand the Difference Between UI and UX:</h6>
<p>UI (User Interface) refers to the visual elements users interact with. UX (User Experience) is the broader journey a user takes through a product. Great design requires both to work in harmony.</p>
<h6>Prioritise User Research:</h6>
<p>Before touching design tools, invest time in understanding your users. Conduct surveys, interviews, and usability tests. Build user personas and map out user journeys. Design decisions grounded in real user data are always more effective than assumptions.</p>
<h6>Design for Accessibility:</h6>
<p>Accessible design is good design. Ensure sufficient colour contrast, provide text alternatives for images, and make interactive elements keyboard-navigable. Following WCAG guidelines not only broadens your audience but also improves overall usability.</p>
<p>Mastering UI/UX design is a lifelong journey. By grounding your practice in user empathy, visual clarity, and continuous iteration, you will craft digital experiences that users don't just use — they love.</p>`
  },
  {
    id: "blog-post-4",
    title: "The Art of Typography: How Fonts Shape Your Design",
    category: "Design",
    date: "22 Aug 2024",
    dateISO: "2024-08-22",
    image: "./img/blog/blog_post_4.jpg",
    link: "blog-post-4.html",
    tags: ["Design", "Typography"],
    excerpt: "Typography is far more than choosing a font. It is the art and science of arranging type to make written language legible, readable, and visually appealing.",
    content: `<p>Typography is far more than choosing a font. It is the art and science of arranging type to make written language legible, readable, and visually appealing. In design, typography communicates mood, personality, and brand values before a single word is consciously processed.</p>
<h6>Understand Typeface Classifications:</h6>
<p>Typefaces fall into several broad families: Serif, Sans-serif, Script, Display, and Monospace. Each carries distinct personality traits. Serifs feel authoritative and traditional; sans-serifs feel modern and clean.</p>
<h6>Master Font Pairing:</h6>
<p>A common rule is to pair a display or serif typeface for headings with a clean sans-serif for body text. Look for contrast in style but harmony in proportions.</p>
<h6>Limit Your Typeface Selection:</h6>
<p>Restraint is a virtue. Stick to two typefaces per project — three at most. Using too many fonts creates visual noise and undermines cohesion. Each font you introduce should serve a distinct purpose within your typographic hierarchy.</p>
<p>Typography is the quiet workhorse of design. When it works well, users barely notice it — they simply experience seamless, effortless communication.</p>`
  },
  {
    id: "blog-post-5",
    title: "Colour Psychology in Design: Harnessing Emotion Through Colour",
    category: "Design",
    date: "05 Oct 2024",
    dateISO: "2024-10-05",
    image: "./img/blog/blog_post_5.jpg",
    link: "blog-post-5.html",
    tags: ["Design", "Colour Theory"],
    excerpt: "Colour is one of the most powerful tools in a designer's arsenal. Long before a user reads a single word, colour has already communicated mood, trustworthiness, or urgency.",
    content: `<p>Colour is one of the most powerful tools in a designer's arsenal. Long before a user reads a single word, colour has already communicated mood, trustworthiness, urgency, or playfulness. Understanding colour psychology allows you to craft designs that resonate deeply.</p>
<h6>The Psychology Behind Core Colours:</h6>
<p>Red evokes energy, passion, and urgency. Blue conveys trust, calm, and professionalism. Yellow signals optimism and attention; green represents growth and nature; purple suggests luxury and creativity.</p>
<h6>Colour and Brand Identity:</h6>
<p>Consistent colour usage builds brand recognition. Studies show that colour increases brand recognition by up to 80%. When users see your brand's specific shade consistently across touchpoints, it builds familiarity and trust.</p>
<h6>Cultural Considerations:</h6>
<p>Colour meaning is not universal. White signals purity in Western cultures but mourning in parts of Asia. Always research cultural colour associations when designing for international audiences.</p>
<p>Colour is silent but never subtle. Used intentionally, it can be the difference between a design that is merely seen and one that is truly felt.</p>`
  },
  {
    id: "blog-post-6",
    title: "How to Build a Successful Freelance Design Career from Scratch",
    category: "Business",
    date: "18 Jan 2025",
    dateISO: "2025-01-18",
    image: "./img/blog/blog_post_6.jpg",
    link: "blog-post-6.html",
    tags: ["Business", "Freelancing"],
    excerpt: "Freelancing as a designer offers creative freedom, flexible hours, and the potential to earn significantly more than a traditional salary — but it demands business savvy.",
    content: `<p>Freelancing as a designer offers creative freedom, flexible hours, and the potential to earn significantly more than a traditional salary. But it also demands self-discipline, business savvy, and resilience.</p>
<h6>Build a Portfolio Before You Need One:</h6>
<p>Your portfolio is your most powerful sales tool. Before seeking clients, build 5–8 strong case studies — even if they are self-initiated or spec projects. Show your process: research, sketches, iterations, and final results.</p>
<h6>Price Your Work Confidently:</h6>
<p>Underpricing is the most common mistake new freelancers make. Research market rates in your region and niche. Factor in non-billable time: client communication, revisions, and administration. Charge for value delivered, not just hours worked.</p>
<h6>Use Contracts for Every Project:</h6>
<p>Never start work without a signed contract. A good design contract specifies scope, deliverables, revision rounds, payment terms, and intellectual property rights. It protects both you and the client.</p>
<p>Freelancing is not just a career — it is a business. The designers who thrive are those who treat it as such, combining creative excellence with entrepreneurial discipline.</p>`
  }
];

const IB_DEFAULT_PORTFOLIO_ITEMS = [
  {
    id: "p1", title: "Sell Sigma Brand Identity", category: "Branding", filter: "branding", icon: "🏷️",
    tools: ["Illustrator", "Photoshop"],
    image: "./img/portfolio/1.png",
    shortDescription: "Complete brand identity design for Sell Sigma e-commerce platform including logo, colour palette and brand guidelines.",
    groups: ["category_all", "category_Branding"]
  },
  {
    id: "p2", title: "Infinity Physics Logo", category: "Branding", filter: "branding", icon: "⚛️",
    tools: ["Illustrator", "Photoshop"],
    image: "./img/portfolio/2.png",
    shortDescription: "Modern logo and visual identity design for Infinity Physics educational brand.",
    groups: ["category_all", "category_Branding"]
  },
  {
    id: "p3", title: "Physics 2024 Revision Campaign", category: "Designing", filter: "designing", icon: "📐",
    tools: ["Photoshop", "Figma"],
    image: "./img/portfolio/3.png",
    shortDescription: "Social media promotional campaign for the Physics 2024 online revision programme targeting A/L students.",
    groups: ["category_all", "category_Designing", "category_Marketing"]
  },
  {
    id: "p4", title: "Free Online Revision Poster", category: "Designing", filter: "designing", icon: "📋",
    tools: ["Photoshop", "Illustrator"],
    image: "./img/portfolio/4.png",
    shortDescription: "Bold poster design for a free online revision classes campaign with strong typography and visual hierarchy.",
    groups: ["category_all", "category_Designing", "category_Marketing"]
  },
  {
    id: "p5", title: "2023 Revision Campaign", category: "Designing", filter: "designing", icon: "📚",
    tools: ["Photoshop", "Figma"],
    image: "./img/portfolio/5.jpg",
    shortDescription: "Full visual campaign for 2023 revision classes with engaging social media graphics and event posters.",
    groups: ["category_all", "category_Designing", "category_Marketing"]
  },
  {
    id: "p6", title: "Revision Social Media Pack", category: "Designing", filter: "designing", icon: "📱",
    tools: ["Photoshop", "Canva"],
    image: "./img/portfolio/6.png",
    shortDescription: "Social media post pack for educational revision campaigns, optimised for Facebook and Instagram formats.",
    groups: ["category_all", "category_Designing", "category_Marketing"]
  },
  {
    id: "p7", title: "Sell Sigma Marketing Graphics", category: "Marketing", filter: "marketing", icon: "📣",
    tools: ["Photoshop", "Illustrator"],
    image: "./img/portfolio/7.png",
    shortDescription: "Marketing and promotional graphic set for Sell Sigma platform including social posts and banner designs.",
    groups: ["category_all", "category_Designing", "category_Marketing"]
  },
  {
    id: "p8", title: "JFly Tunes Brand Design", category: "Branding", filter: "branding", icon: "🎵",
    tools: ["Illustrator", "Photoshop"],
    image: "./img/portfolio/8.jpg",
    shortDescription: "Logo and brand identity design for JFly Tunes music brand with a modern, clean aesthetic.",
    groups: ["category_all", "category_Branding"]
  },
  {
    id: "p9", title: "Robot Mascot Design", category: "Branding", filter: "branding", icon: "🤖",
    tools: ["Illustrator", "Photoshop"],
    image: "./img/portfolio/9.png",
    shortDescription: "Mascot and character illustration for a tech brand, featuring a friendly robot with a distinctive personality.",
    groups: ["category_all", "category_Branding"]
  },
  {
    id: "p10", title: "Desinup Services Package", category: "Branding", filter: "branding", icon: "✏️",
    tools: ["Illustrator", "Photoshop"],
    image: "./img/portfolio/10.png",
    shortDescription: "Brand services showcase for Desinup agency covering graphic design, brand design, web design and editing packages.",
    groups: ["category_all", "category_Branding"]
  },
  {
    id: "p11", title: "Free Revision Poster v2", category: "Marketing", filter: "marketing", icon: "📢",
    tools: ["Photoshop", "Illustrator"],
    image: "./img/portfolio/11.png",
    shortDescription: "Refreshed edition of the online revision poster campaign with improved layout and stronger visual hierarchy.",
    groups: ["category_all", "category_Branding"]
  },
  {
    id: "p12", title: "Chemistry Marketing Pack", category: "Marketing", filter: "marketing", icon: "🧪",
    tools: ["Photoshop", "Figma"],
    image: "./img/portfolio/12.png",
    shortDescription: "Marketing graphics pack for chemistry tuition classes including social media posts and promotional materials.",
    groups: ["category_all", "category_Branding"]
  }
];

/* ============================================================
   Coding Projects — used by projects.html
   ============================================================ */

const IB_DEFAULT_CODING_PROJECTS = [
  {
    id: "cp1",
    title: "Personal Website",
    category: "Web",
    filter: "web",
    icon: "🌐",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/isharabandaranet/Personal-Web",
    liveUrl: "https://isharabandara.com",
    shortDescription: "My personal portfolio & blog website built from scratch with vanilla HTML/CSS/JS and a custom admin panel.",
    description: "A fully custom personal portfolio and blog website. It includes a dynamic blog engine, portfolio gallery, admin panel with GitHub Pages auto-deployment, and a contact form powered by Formspree. Built entirely with vanilla web technologies — no frameworks.",
    highlights: [
      "Custom admin panel for creating and editing blog posts and portfolio items",
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
    liveUrl: "", // Live Link
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

/**
 * Returns the active coding projects list.
 * Admin edits stored in localStorage under 'ib_coding_projects'.
 */
function getActiveCodingProjects() {
  try {
    const stored = localStorage.getItem('ib_coding_projects');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) { /* ignore */ }
  localStorage.setItem('ib_coding_projects', JSON.stringify(IB_DEFAULT_CODING_PROJECTS));
  return IB_DEFAULT_CODING_PROJECTS;
}

/**
 * Returns the active list of blog posts.
 * Merges default posts with any admin-created posts from localStorage,
 * ensuring new default posts always appear even for returning visitors.
 */
function getActiveBlogPosts() {
  try {
    const stored = localStorage.getItem('ib_blog_posts');
    if (stored) {
      const storedPosts = JSON.parse(stored);
      // Merge: add any default posts not already in stored list (by id)
      const storedIds = new Set(storedPosts.map(p => p.id));
      const merged = [
        ...storedPosts,
        ...IB_DEFAULT_BLOG_POSTS.filter(p => !storedIds.has(p.id))
      ];
      // Persist the merged list back
      if (merged.length !== storedPosts.length) {
        localStorage.setItem('ib_blog_posts', JSON.stringify(merged));
      }
      return merged;
    }
  } catch (e) { /* ignore */ }
  // Seed localStorage with defaults on first run
  localStorage.setItem('ib_blog_posts', JSON.stringify(IB_DEFAULT_BLOG_POSTS));
  return IB_DEFAULT_BLOG_POSTS;
}

/**
 * Returns the active list of portfolio items.
 */
function getActivePortfolioItems() {
  try {
    const stored = localStorage.getItem('ib_portfolio_items');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) { /* ignore */ }
  localStorage.setItem('ib_portfolio_items', JSON.stringify(IB_DEFAULT_PORTFOLIO_ITEMS));
  return IB_DEFAULT_PORTFOLIO_ITEMS;
}

/**
 * Dynamically render blog post cards into #blog-posts-container
 */
function renderBlogPosts() {
  const container = document.getElementById('blog-posts-container');
  if (!container) return;
  const posts = getActiveBlogPosts();
  if (posts.length === 0) {
    container.innerHTML = '<p style="color:#aaa;text-align:center;padding:40px 0;">No blog posts yet. Add some from the admin panel.</p>';
    return;
  }
  container.innerHTML = posts.map(post => `
    <div class="item">
      <div class="blog-card">
        <div class="media-block">
          <div class="category"><a>${escapeHtml(post.category)}</a></div>
          <a href="${escapeHtml(post.link || '#')}">
            <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" title="" />
            <div class="mask"></div>
          </a>
        </div>
        <div class="post-info">
          <div class="post-date">${escapeHtml(post.date)}</div>
          <a href="${escapeHtml(post.link || '#')}">
            <h4 class="blog-item-title">${escapeHtml(post.title)}</h4>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Dynamically render portfolio items into #portfolio-grid
 */
function renderPortfolioItems() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  const items = getActivePortfolioItems();
  grid.innerHTML = items.map(item => `
    <figure class="item standard" data-groups='${JSON.stringify(item.groups || ["category_all"])}'>
      <div class="portfolio-item-img">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title || item.category)}" title="" />
      </div>
      <i class="far fa-file-alt"></i>
      <span class="category">${escapeHtml(item.category)}</span>
    </figure>
  `).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
