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
    liveUrl: "https://isharabandara.net",
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
    id: "cp2",
    title: "Desinup Design Tool",
    category: "Web",
    filter: "web",
    icon: "🎨",
    stack: ["JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/isharabandaranet",
    liveUrl: "",
    shortDescription: "An in-browser graphic design tool for social media content, posters and branding materials.",
    description: "A web-based design application allowing users to create social media posts, posters, handbills, and business card designs directly in the browser. Supports drag-and-drop elements, custom fonts, and image export.",
    highlights: [
      "Canvas-based rendering with real-time preview",
      "Drag-and-drop design elements",
      "Custom font and colour palette management",
      "PNG/JPEG export"
    ]
  },
  {
    id: "cp3",
    title: "Brand Identity Dashboard",
    category: "Tool",
    filter: "tool",
    icon: "🛠️",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/isharabandaranet",
    liveUrl: "",
    shortDescription: "A client dashboard for managing brand assets, campaigns, and deliverables in one place.",
    description: "A SaaS-style dashboard built for managing multiple client brands. Clients can upload assets, track campaign status, leave feedback, and download final deliverables. Admins manage briefs and deadlines from a unified interface.",
    highlights: [
      "Role-based access control (admin vs client)",
      "Real-time status updates with WebSocket",
      "Secure file upload and CDN delivery",
      "Integrated feedback and revision system"
    ]
  },
  {
    id: "cp4",
    title: "Infinity Physics Learning App",
    category: "Mobile",
    filter: "mobile",
    icon: "⚛️",
    stack: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/isharabandaranet",
    liveUrl: "",
    shortDescription: "A mobile learning app for A/L Physics students featuring video lessons, quizzes and progress tracking.",
    description: "A Flutter-based mobile application designed for Advanced Level Physics students. Features curated video lessons, topic-wise MCQ quizzes, past paper walkthroughs, progress analytics, and push notifications for new content.",
    highlights: [
      "Video streaming with offline download support",
      "Adaptive quiz engine with instant explanations",
      "Firebase Authentication and Firestore data sync",
      "Progress charts and streak tracking",
      "Push notifications via Firebase Cloud Messaging"
    ]
  },
  {
    id: "cp5",
    title: "Marketing Campaign Tracker",
    category: "Tool",
    filter: "tool",
    icon: "📊",
    stack: ["Python", "JavaScript", "MySQL"],
    github: "https://github.com/isharabandaranet",
    liveUrl: "",
    shortDescription: "An analytics tool to track marketing campaign performance across social platforms in real time.",
    description: "A lightweight analytics dashboard that aggregates engagement data from Facebook, Instagram and WhatsApp campaigns. Provides reach, engagement rate, CTR, and conversion funnels with automated weekly summary reports.",
    highlights: [
      "Multi-platform social API integrations",
      "Automated weekly PDF report generation",
      "Interactive charts with Chart.js",
      "MySQL-backed historical data storage",
      "Alert system for underperforming campaigns"
    ]
  },
  {
    id: "cp6",
    title: "E-Commerce Store Builder",
    category: "Web",
    filter: "web",
    icon: "🛒",
    stack: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/isharabandaranet",
    liveUrl: "",
    shortDescription: "A lightweight e-commerce platform for small businesses to list products and accept orders online.",
    description: "A PHP-based e-commerce system designed for small Sri Lankan businesses to quickly set up an online store. Includes product management, order tracking, local payment gateway integration, and a WhatsApp order notification system.",
    highlights: [
      "Product catalogue with inventory management",
      "WhatsApp order alerts for instant notifications",
      "Local payment gateway (IPG) integration",
      "Admin order fulfillment dashboard",
      "Mobile-responsive storefront"
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
 * Returns the active list of blog posts:
 * starts from defaults, then merges in any admin-created/edited posts from localStorage.
 */
function getActiveBlogPosts() {
  try {
    const stored = localStorage.getItem('ib_blog_posts');
    if (stored) {
      return JSON.parse(stored);
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
