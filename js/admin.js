/**
 * admin.js — Admin Panel Logic for isharabandara.net
 * Password: admin123 (change the ADMIN_PASSWORD_HASH below to update)
 *
 * To generate a new hash: open browser console and run:
 *   hashPassword('your-new-password').then(h => console.log(h))
 */

// SHA-256 hash of 'admin123'
const ADMIN_PASSWORD_HASH = 'ac9689e2272427085e35b9d3e3e-placeholder';
const SESSION_KEY = 'ib_admin_session';
const BLOG_KEY = 'ib_blog_posts';
const PORTFOLIO_KEY = 'ib_portfolio_items';

// ─── Auth ────────────────────────────────────────────────────────────────────

async function hashPassword(password) {
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(password));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function login(password) {
  const hash = await hashPassword(password);
  // On first login we store the hash of admin123 if not yet set
  let storedHash = localStorage.getItem('ib_admin_hash');
  if (!storedHash) {
    // Default password: admin123
    storedHash = await hashPassword('admin123');
    localStorage.setItem('ib_admin_hash', storedHash);
  }
  if (hash === storedHash) {
    sessionStorage.setItem(SESSION_KEY, 'true');
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  showLoginScreen();
}

function isLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === 'true';
}

// ─── Data helpers ─────────────────────────────────────────────────────────────

function getBlogPosts() {
  try {
    const stored = localStorage.getItem(BLOG_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  const defaults = typeof IB_DEFAULT_BLOG_POSTS !== 'undefined' ? IB_DEFAULT_BLOG_POSTS : [];
  localStorage.setItem(BLOG_KEY, JSON.stringify(defaults));
  return defaults;
}

function saveBlogPosts(posts) {
  localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
}

function getPortfolioItems() {
  try {
    const stored = localStorage.getItem(PORTFOLIO_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  const defaults = typeof IB_DEFAULT_PORTFOLIO_ITEMS !== 'undefined' ? IB_DEFAULT_PORTFOLIO_ITEMS : [];
  localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(defaults));
  return defaults;
}

function savePortfolioItems(items) {
  localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(items));
}

function generateId(prefix) {
  return prefix + '-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ─── UI: Login / Logout ───────────────────────────────────────────────────────

function showLoginScreen() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('dashboard').style.display = 'none';
}

function showDashboard() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('dashboard').style.display = 'flex';
  renderBlogList();
  renderPortfolioList();
}

// ─── UI: Tabs ─────────────────────────────────────────────────────────────────

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tab));
}

// ─── UI: Toast Notifications ──────────────────────────────────────────────────

function showToast(msg, type = 'success') {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'admin-toast ' + type + ' show';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ─── UI: Modal ────────────────────────────────────────────────────────────────

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  if (id === 'blog-modal') { clearBlogForm(); editingBlogId = null; }
  if (id === 'portfolio-modal') { clearPortfolioForm(); editingPortfolioId = null; }
}

// ─── Blog CRUD ────────────────────────────────────────────────────────────────

let editingBlogId = null;

function openNewBlogModal() {
  editingBlogId = null;
  clearBlogForm();
  document.getElementById('blog-modal-title').textContent = 'New Blog Post';
  openModal('blog-modal');
}

function openEditBlogModal(id) {
  const posts = getBlogPosts();
  const post = posts.find(p => p.id === id);
  if (!post) return;
  editingBlogId = id;
  document.getElementById('blog-modal-title').textContent = 'Edit Blog Post';
  document.getElementById('blog-title').value = post.title;
  document.getElementById('blog-category').value = post.category;
  document.getElementById('blog-date').value = post.dateISO || '';
  document.getElementById('blog-image').value = post.image;
  document.getElementById('blog-link').value = post.link || '';
  document.getElementById('blog-tags').value = (post.tags || []).join(', ');
  document.getElementById('blog-excerpt').value = post.excerpt || '';
  document.getElementById('blog-content').value = post.content || '';
  openModal('blog-modal');
}

function clearBlogForm() {
  ['blog-title','blog-category','blog-date','blog-image','blog-link','blog-tags','blog-excerpt','blog-content']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
}

function saveBlogPost() {
  const title = document.getElementById('blog-title').value.trim();
  const category = document.getElementById('blog-category').value.trim();
  const dateISO = document.getElementById('blog-date').value;
  const image = document.getElementById('blog-image').value.trim();
  const link = document.getElementById('blog-link').value.trim();
  const tags = document.getElementById('blog-tags').value.split(',').map(t => t.trim()).filter(Boolean);
  const excerpt = document.getElementById('blog-excerpt').value.trim();
  const content = document.getElementById('blog-content').value.trim();

  if (!title || !category || !dateISO) {
    showToast('Title, category and date are required.', 'error');
    return;
  }

  const posts = getBlogPosts();
  if (editingBlogId) {
    const idx = posts.findIndex(p => p.id === editingBlogId);
    if (idx >= 0) {
      posts[idx] = { ...posts[idx], title, category, dateISO, date: formatDate(dateISO), image, link, tags, excerpt, content };
    }
  } else {
    const id = generateId('blog-post');
    posts.unshift({ id, title, category, dateISO, date: formatDate(dateISO), image, link, tags, excerpt, content });
  }

  saveBlogPosts(posts);
  closeModal('blog-modal');
  renderBlogList();
  showToast(editingBlogId ? 'Post updated!' : 'Post created!');
  editingBlogId = null;
}

function deleteBlogPost(id) {
  if (!confirm('Delete this post? This cannot be undone.')) return;
  const posts = getBlogPosts().filter(p => p.id !== id);
  saveBlogPosts(posts);
  renderBlogList();
  showToast('Post deleted.', 'error');
}

function renderBlogList() {
  const posts = getBlogPosts();
  const container = document.getElementById('blog-list');
  if (posts.length === 0) {
    container.innerHTML = '<div class="empty-state"><span>📝</span><p>No blog posts yet. Create your first post!</p></div>';
    return;
  }
  container.innerHTML = posts.map(p => `
    <div class="post-card" id="card-${p.id}">
      <div class="post-card-thumb">
        ${p.image ? `<img src="${escHtml(p.image)}" alt="" onerror="this.parentElement.innerHTML='<span>📷</span>'">` : '<span>📷</span>'}
      </div>
      <div class="post-card-info">
        <span class="post-cat-tag">${escHtml(p.category)}</span>
        <h3>${escHtml(p.title)}</h3>
        <span class="post-card-date">${escHtml(p.date)}</span>
      </div>
      <div class="post-card-actions">
        <button class="btn-icon-sm btn-edit" onclick="openEditBlogModal('${p.id}')" title="Edit">✏️ Edit</button>
        <button class="btn-icon-sm btn-delete" onclick="deleteBlogPost('${p.id}')" title="Delete">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
}

// ─── Portfolio CRUD ───────────────────────────────────────────────────────────

let editingPortfolioId = null;

function openNewPortfolioModal() {
  editingPortfolioId = null;
  clearPortfolioForm();
  document.getElementById('portfolio-modal-title').textContent = 'New Portfolio Item';
  openModal('portfolio-modal');
}

function openEditPortfolioModal(id) {
  const items = getPortfolioItems();
  const item = items.find(i => i.id === id);
  if (!item) return;
  editingPortfolioId = id;
  document.getElementById('portfolio-modal-title').textContent = 'Edit Portfolio Item';
  document.getElementById('portfolio-item-title').value = item.title || '';
  document.getElementById('portfolio-item-category').value = item.category || '';
  document.getElementById('portfolio-item-image').value = item.image || '';
  // Pre-select groups (exclude 'category_all' which is always added)
  const select = document.getElementById('portfolio-item-groups');
  if (select) {
    const groups = item.groups || [];
    Array.from(select.options).forEach(o => {
      o.selected = groups.includes(o.value);
    });
  }
  openModal('portfolio-modal');
}

function clearPortfolioForm() {
  ['portfolio-item-title','portfolio-item-category','portfolio-item-image'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const select = document.getElementById('portfolio-item-groups');
  if (select) Array.from(select.options).forEach(o => o.selected = false);
}

function savePortfolioItem() {
  const title = document.getElementById('portfolio-item-title').value.trim();
  const category = document.getElementById('portfolio-item-category').value.trim();
  const image = document.getElementById('portfolio-item-image').value.trim();
  const groupSelect = document.getElementById('portfolio-item-groups');
  const groups = Array.from(groupSelect.selectedOptions).map(o => o.value);

  if (!category || !image) {
    showToast('Category and image URL are required.', 'error');
    return;
  }

  const allGroups = ['category_all', ...groups];
  const items = getPortfolioItems();

  if (editingPortfolioId) {
    const idx = items.findIndex(i => i.id === editingPortfolioId);
    if (idx >= 0) {
      items[idx] = { ...items[idx], title, category, image, groups: allGroups };
    }
    savePortfolioItems(items);
    closeModal('portfolio-modal');
    renderPortfolioList();
    showToast('Portfolio item updated!');
    editingPortfolioId = null;
  } else {
    const id = generateId('portfolio');
    items.push({ id, title, category, image, groups: allGroups });
    savePortfolioItems(items);
    closeModal('portfolio-modal');
    renderPortfolioList();
    showToast('Portfolio item added!');
  }
}

function deletePortfolioItem(id) {
  if (!confirm('Delete this portfolio item? This cannot be undone.')) return;
  const items = getPortfolioItems().filter(i => i.id !== id);
  savePortfolioItems(items);
  renderPortfolioList();
  showToast('Item deleted.', 'error');
}

function renderPortfolioList() {
  const items = getPortfolioItems();
  const container = document.getElementById('portfolio-list');
  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state"><span>🖼️</span><p>No portfolio items yet. Add your first project!</p></div>';
    return;
  }
  container.innerHTML = items.map(item => `
    <div class="post-card">
      <div class="post-card-thumb">
        ${item.image ? `<img src="${escHtml(item.image)}" alt="" onerror="this.parentElement.innerHTML='<span>🖼️</span>'">` : '<span>🖼️</span>'}
      </div>
      <div class="post-card-info">
        <span class="post-cat-tag">${escHtml(item.category)}</span>
        ${item.title ? `<h3>${escHtml(item.title)}</h3>` : ''}
      </div>
      <div class="post-card-actions">
        <button class="btn-icon-sm btn-edit" onclick="openEditPortfolioModal('${item.id}')" title="Edit">✏️ Edit</button>
        <button class="btn-icon-sm btn-delete" onclick="deletePortfolioItem('${item.id}')" title="Delete">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
}

// ─── GitHub Config helpers ────────────────────────────────────────────────────

const GH_KEY = 'ib_github_config';

function getGithubConfig() {
  try { return JSON.parse(localStorage.getItem(GH_KEY)) || {}; } catch(e) { return {}; }
}
function saveGithubConfig(cfg) {
  localStorage.setItem(GH_KEY, JSON.stringify(cfg));
}

// Populate GitHub settings fields from saved config
function loadGithubSettings() {
  const cfg = getGithubConfig();
  const f = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  f('gh-owner',  cfg.owner);
  f('gh-repo',   cfg.repo);
  f('gh-branch', cfg.branch || 'main');
  f('gh-token',  cfg.token);
}

function saveGithubSettings() {
  const g = (id) => (document.getElementById(id) || {}).value?.trim() || '';
  const cfg = { owner: g('gh-owner'), repo: g('gh-repo'), branch: g('gh-branch') || 'main', token: g('gh-token') };
  if (!cfg.owner || !cfg.repo || !cfg.token) { showToast('Please fill in all GitHub fields.', 'error'); return; }
  saveGithubConfig(cfg);
  showToast('GitHub settings saved! ✅');
}

// ─── Build data.js content ────────────────────────────────────────────────────

function buildDataJsContent() {
  const posts = getBlogPosts();
  const items = getPortfolioItems();
  return `/**
 * data.js — Published from Admin Panel on ${new Date().toLocaleString()}
 * Auto-committed to GitHub via Admin Panel.
 */

const IB_DEFAULT_BLOG_POSTS = ${JSON.stringify(posts, null, 2)};

const IB_DEFAULT_PORTFOLIO_ITEMS = ${JSON.stringify(items, null, 2)};

function getActiveBlogPosts() {
  try { const s = localStorage.getItem('ib_blog_posts'); if (s) return JSON.parse(s); } catch(e){}
  localStorage.setItem('ib_blog_posts', JSON.stringify(IB_DEFAULT_BLOG_POSTS));
  return IB_DEFAULT_BLOG_POSTS;
}
function getActivePortfolioItems() {
  try { const s = localStorage.getItem('ib_portfolio_items'); if (s) return JSON.parse(s); } catch(e){}
  localStorage.setItem('ib_portfolio_items', JSON.stringify(IB_DEFAULT_PORTFOLIO_ITEMS));
  return IB_DEFAULT_PORTFOLIO_ITEMS;
}
function renderBlogPosts() {
  const container = document.getElementById('blog-posts-container');
  if (!container) return;
  const posts = getActiveBlogPosts();
  if (!posts.length) { container.innerHTML = '<p style="color:#aaa;text-align:center;padding:40px 0;">No blog posts yet.</p>'; return; }
  container.innerHTML = posts.map(post => \`
    <div class="item">
      <div class="blog-card">
        <div class="media-block">
          <div class="category"><a>\${escapeHtml(post.category)}</a></div>
          <a href="\${escapeHtml(post.link||'#')}">
            <img src="\${escapeHtml(post.image)}" alt="\${escapeHtml(post.title)}" title="" />
            <div class="mask"></div>
          </a>
        </div>
        <div class="post-info">
          <div class="post-date">\${escapeHtml(post.date)}</div>
          <a href="\${escapeHtml(post.link||'#')}"><h4 class="blog-item-title">\${escapeHtml(post.title)}</h4></a>
        </div>
      </div>
    </div>\`).join('');
}
function renderPortfolioItems() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  const items = getActivePortfolioItems();
  grid.innerHTML = items.map(item => \`
    <figure class="item standard" data-groups='\${JSON.stringify(item.groups||["category_all"])}'>
      <div class="portfolio-item-img"><img src="\${escapeHtml(item.image)}" alt="\${escapeHtml(item.title||item.category)}" /></div>
      <i class="far fa-file-alt"></i>
      <span class="category">\${escapeHtml(item.category)}</span>
    </figure>\`).join('');
}
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}
`;
}

// ─── Publish to GitHub ────────────────────────────────────────────────────────

async function publishToGitHub() {
  const cfg = getGithubConfig();
  if (!cfg.owner || !cfg.repo || !cfg.token) {
    showToast('Set up GitHub settings first (Settings tab).', 'error');
    navigateTo('settings', document.querySelector('[data-section=settings]'));
    return;
  }

  const btn = document.getElementById('publish-btn');
  const statusEl = document.getElementById('publish-status');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Publishing…'; }
  if (statusEl) { statusEl.textContent = ''; statusEl.className = 'publish-status'; }

  const filePath = 'js/data.js';
  const apiBase = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${filePath}`;
  const headers = {
    'Authorization': `token ${cfg.token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };

  try {
    // Step 1: Get current file SHA (needed for the update)
    let sha = null;
    const getRes = await fetch(`${apiBase}?ref=${cfg.branch}`, { headers });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    } else if (getRes.status !== 404) {
      throw new Error(`GitHub API error: ${getRes.status} ${getRes.statusText}`);
    }

    // Step 2: Base64-encode the new data.js content
    const content = buildDataJsContent();
    const encoded = btoa(unescape(encodeURIComponent(content)));

    // Step 3: Commit the file
    const body = {
      message: `Admin: update data.js [${new Date().toISOString()}]`,
      content: encoded,
      branch: cfg.branch
    };
    if (sha) body.sha = sha;

    const putRes = await fetch(apiBase, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    });

    if (!putRes.ok) {
      const err = await putRes.json();
      throw new Error(err.message || `HTTP ${putRes.status}`);
    }

    const result = await putRes.json();
    const commitUrl = result.commit?.html_url || `https://github.com/${cfg.owner}/${cfg.repo}/commits/${cfg.branch}`;

    if (statusEl) {
      statusEl.innerHTML = `✅ Published! <a href="${commitUrl}" target="_blank" style="color:#007ced;">View commit →</a><br><small style="opacity:.7;">GitHub Pages will update in ~30 seconds.</small>`;
      statusEl.className = 'publish-status success';
    }
    showToast('Published to GitHub! ✅ Site updates in ~30s.');

  } catch (err) {
    console.error('GitHub publish error:', err);
    if (statusEl) {
      statusEl.innerHTML = `❌ Error: ${err.message}`;
      statusEl.className = 'publish-status error';
    }
    showToast('Publish failed: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '🚀 Publish to GitHub'; }
  }
}

// ─── Export (fallback download) ───────────────────────────────────────────────

function exportDataJs() {
  const content = buildDataJsContent();
  const blob = new Blob([content], { type: 'text/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.js';
  a.click();
  showToast('data.js downloaded. Replace js/data.js and git push.');
}

// ─── Change Password ──────────────────────────────────────────────────────────


async function changePassword() {
  const current = document.getElementById('current-password').value;
  const newPw = document.getElementById('new-password').value;
  const confirm = document.getElementById('confirm-password').value;
  if (!current || !newPw || !confirm) { showToast('All fields required.', 'error'); return; }
  if (newPw !== confirm) { showToast('New passwords do not match.', 'error'); return; }
  if (newPw.length < 6) { showToast('Password must be at least 6 characters.', 'error'); return; }

  const currentHash = await hashPassword(current);
  const storedHash = localStorage.getItem('ib_admin_hash') || await hashPassword('admin123');
  if (currentHash !== storedHash) { showToast('Current password is incorrect.', 'error'); return; }

  const newHash = await hashPassword(newPw);
  localStorage.setItem('ib_admin_hash', newHash);
  document.getElementById('current-password').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-password').value = '';
  showToast('Password changed successfully! ✅');
}

// ─── Search / Filter ──────────────────────────────────────────────────────────

function filterBlogList(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('#blog-list .post-card').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = (!q || text.includes(q)) ? '' : 'none';
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

// ─── Init ─────────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  if (isLoggedIn()) {
    showDashboard();
  } else {
    showLoginScreen();
  }

  // Login form
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const pw = document.getElementById('login-password').value;
    const btn = document.getElementById('login-btn');
    btn.disabled = true;
    btn.textContent = 'Signing in…';
    const ok = await login(pw);
    btn.disabled = false;
    btn.textContent = 'Sign In';
    if (ok) {
      document.getElementById('login-error').style.display = 'none';
      showDashboard();
    } else {
      const err = document.getElementById('login-error');
      err.textContent = 'Incorrect password. Please try again.';
      err.style.display = 'block';
      document.getElementById('login-password').value = '';
    }
  });

  // Close modals on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Search
  const searchInput = document.getElementById('blog-search');
  if (searchInput) searchInput.addEventListener('input', e => filterBlogList(e.target.value));

  // Stats
  updateStats();
});

function updateStats() {
  const blogCount = getBlogPosts().length;
  const portfolioCount = getPortfolioItems().length;
  const el1 = document.getElementById('stat-blog');
  const el2 = document.getElementById('stat-portfolio');
  if (el1) el1.textContent = blogCount;
  if (el2) el2.textContent = portfolioCount;
}
