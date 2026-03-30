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
  { id: "p1", title: "", category: "Branding", image: "./img/portfolio/1.png", groups: ["category_all", "category_Branding"] },
  { id: "p2", title: "", category: "Branding", image: "./img/portfolio/2.png", groups: ["category_all", "category_Branding"] },
  { id: "p3", title: "", category: "Designing", image: "./img/portfolio/3.png", groups: ["category_all", "category_Designing", "category_Marketing"] },
  { id: "p4", title: "", category: "Designing", image: "./img/portfolio/4.png", groups: ["category_all", "category_Designing", "category_Marketing"] },
  { id: "p5", title: "", category: "Designing", image: "./img/portfolio/5.jpg", groups: ["category_all", "category_Designing", "category_Marketing"] },
  { id: "p6", title: "", category: "Designing", image: "./img/portfolio/6.png", groups: ["category_all", "category_Designing", "category_Marketing"] },
  { id: "p7", title: "", category: "Branding", image: "./img/portfolio/7.png", groups: ["category_all", "category_Designing", "category_Marketing"] },
  { id: "p8", title: "", category: "Branding", image: "./img/portfolio/8.jpg", groups: ["category_all", "category_Branding"] },
  { id: "p9", title: "", category: "Branding", image: "./img/portfolio/9.png", groups: ["category_all", "category_Branding"] },
  { id: "p10", title: "", category: "Branding", image: "./img/portfolio/10.png", groups: ["category_all", "category_Branding"] },
  { id: "p11", title: "", category: "Branding", image: "./img/portfolio/11.png", groups: ["category_all", "category_Branding"] },
  { id: "p12", title: "", category: "Branding", image: "./img/portfolio/12.png", groups: ["category_all", "category_Branding"] }
];

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
