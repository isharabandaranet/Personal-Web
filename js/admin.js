/**
 * admin.js — Admin Panel Logic for isharabandara.net
 * Password: admin123 (change via Settings > Change Password in the admin panel)
 */

const SESSION_KEY    = 'ib_admin_session';
const BLOG_KEY       = 'ib_blog_posts';
const PORTFOLIO_KEY  = 'ib_portfolio_items';
const GH_KEY         = 'ib_github_config';

// ─── Auth ─────────────────────────────────────────────────────────────────────

async function hashPassword(password) {
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(password));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function login(password) {
  const hash = await hashPassword(password);
  let storedHash = localStorage.getItem('ib_admin_hash');
  if (!storedHash) {
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

// ─── UI: Login / Dashboard ────────────────────────────────────────────────────

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

// ─── UI: Toast Notifications ──────────────────────────────────────────────────

function showToast(msg, type) {
  type = type || 'success';
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'admin-toast ' + type + ' show';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function() { toast.classList.remove('show'); }, 3200);
}

// ─── UI: Modal ────────────────────────────────────────────────────────────────

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  if (id === 'blog-modal')      { clearBlogForm();      editingBlogId = null; }
  if (id === 'portfolio-modal') { clearPortfolioForm(); editingPortfolioId = null; }
}

// ─── Blog CRUD ────────────────────────────────────────────────────────────────

var editingBlogId = null;

function openNewBlogModal() {
  editingBlogId = null;
  clearBlogForm();
  document.getElementById('blog-modal-title').textContent = 'New Blog Post';
  openModal('blog-modal');
}

function openEditBlogModal(id) {
  var posts = getBlogPosts();
  var post  = posts.find(function(p) { return p.id === id; });
  if (!post) return;
  editingBlogId = id;
  document.getElementById('blog-modal-title').textContent = 'Edit Blog Post';
  document.getElementById('blog-title').value    = post.title;
  document.getElementById('blog-category').value = post.category;
  document.getElementById('blog-date').value     = post.dateISO || '';
  document.getElementById('blog-image').value    = post.image;
  document.getElementById('blog-link').value     = post.link || '';
  document.getElementById('blog-tags').value     = (post.tags || []).join(', ');
  document.getElementById('blog-excerpt').value  = post.excerpt || '';
  document.getElementById('blog-content').value  = post.content || '';
  openModal('blog-modal');
}

function clearBlogForm() {
  ['blog-title','blog-category','blog-date','blog-image','blog-link','blog-tags','blog-excerpt','blog-content']
    .forEach(function(id) { var el = document.getElementById(id); if (el) el.value = ''; });
}

function saveBlogPost() {
  var title    = document.getElementById('blog-title').value.trim();
  var category = document.getElementById('blog-category').value.trim();
  var dateISO  = document.getElementById('blog-date').value;
  var image    = document.getElementById('blog-image').value.trim();
  var link     = document.getElementById('blog-link').value.trim();
  var tags     = document.getElementById('blog-tags').value.split(',').map(function(t) { return t.trim(); }).filter(Boolean);
  var excerpt  = document.getElementById('blog-excerpt').value.trim();
  var content  = document.getElementById('blog-content').value.trim();

  if (!title || !category || !dateISO) {
    showToast('Title, category and date are required.', 'error');
    return;
  }

  var posts = getBlogPosts();
  if (editingBlogId) {
    var idx = posts.findIndex(function(p) { return p.id === editingBlogId; });
    if (idx >= 0) {
      posts[idx] = Object.assign({}, posts[idx], { title: title, category: category, dateISO: dateISO, date: formatDate(dateISO), image: image, link: link, tags: tags, excerpt: excerpt, content: content });
    }
  } else {
    var id = generateId('blog-post');
    posts.unshift({ id: id, title: title, category: category, dateISO: dateISO, date: formatDate(dateISO), image: image, link: link, tags: tags, excerpt: excerpt, content: content });
  }

  saveBlogPosts(posts);
  closeModal('blog-modal');
  renderBlogList();
  showToast(editingBlogId ? 'Post updated!' : 'Post created!');
  editingBlogId = null;
}

function deleteBlogPost(id) {
  if (!confirm('Delete this post? This cannot be undone.')) return;
  var posts = getBlogPosts().filter(function(p) { return p.id !== id; });
  saveBlogPosts(posts);
  renderBlogList();
  showToast('Post deleted.', 'error');
}

function renderBlogList() {
  var posts     = getBlogPosts();
  var container = document.getElementById('blog-list');
  if (!container) return;
  if (posts.length === 0) {
    container.innerHTML = '<div class="empty-state"><span>📝</span><p>No blog posts yet. Create your first post!</p></div>';
    return;
  }
  container.innerHTML = posts.map(function(p) {
    return '<div class="post-card" id="card-' + p.id + '">'
      + '<div class="post-card-thumb">'
      + (p.image ? '<img src="' + escHtml(p.image) + '" alt="" onerror="this.parentElement.innerHTML=\'<span>📷</span>\'">' : '<span>📷</span>')
      + '</div>'
      + '<div class="post-card-info">'
      + '<span class="post-cat-tag">' + escHtml(p.category) + '</span>'
      + '<h3>' + escHtml(p.title) + '</h3>'
      + '<span class="post-card-date">' + escHtml(p.date) + '</span>'
      + '</div>'
      + '<div class="post-card-actions">'
      + '<button class="btn-icon-sm btn-edit" onclick="openEditBlogModal(\'' + p.id + '\')" title="Edit">✏️ Edit</button>'
      + '<button class="btn-icon-sm btn-delete" onclick="deleteBlogPost(\'' + p.id + '\')" title="Delete">🗑️ Delete</button>'
      + '</div></div>';
  }).join('');
}

// ─── Portfolio CRUD ───────────────────────────────────────────────────────────

var editingPortfolioId = null;

function openNewPortfolioModal() {
  editingPortfolioId = null;
  clearPortfolioForm();
  document.getElementById('portfolio-modal-title').textContent = 'New Portfolio Item';
  openModal('portfolio-modal');
}

function openEditPortfolioModal(id) {
  var items = getPortfolioItems();
  var item  = items.find(function(i) { return i.id === id; });
  if (!item) return;
  editingPortfolioId = id;
  document.getElementById('portfolio-modal-title').textContent = 'Edit Portfolio Item';
  document.getElementById('portfolio-item-title').value    = item.title || '';
  document.getElementById('portfolio-item-category').value = item.category || '';
  document.getElementById('portfolio-item-image').value    = item.image || '';
  var select = document.getElementById('portfolio-item-groups');
  if (select) {
    var groups = item.groups || [];
    Array.from(select.options).forEach(function(o) { o.selected = groups.includes(o.value); });
  }
  openModal('portfolio-modal');
}

function clearPortfolioForm() {
  ['portfolio-item-title','portfolio-item-category','portfolio-item-image'].forEach(function(id) {
    var el = document.getElementById(id); if (el) el.value = '';
  });
  var select = document.getElementById('portfolio-item-groups');
  if (select) Array.from(select.options).forEach(function(o) { o.selected = false; });
}

function savePortfolioItem() {
  var title    = document.getElementById('portfolio-item-title').value.trim();
  var category = document.getElementById('portfolio-item-category').value.trim();
  var image    = document.getElementById('portfolio-item-image').value.trim();
  var groupSelect = document.getElementById('portfolio-item-groups');
  var groups   = Array.from(groupSelect.selectedOptions).map(function(o) { return o.value; });

  if (!category || !image) {
    showToast('Category and image URL are required.', 'error');
    return;
  }

  var allGroups = ['category_all'].concat(groups);
  var items = getPortfolioItems();

  if (editingPortfolioId) {
    var idx = items.findIndex(function(i) { return i.id === editingPortfolioId; });
    if (idx >= 0) {
      items[idx] = Object.assign({}, items[idx], { title: title, category: category, image: image, groups: allGroups });
    }
    savePortfolioItems(items);
    closeModal('portfolio-modal');
    renderPortfolioList();
    showToast('Portfolio item updated!');
    editingPortfolioId = null;
  } else {
    var id = generateId('portfolio');
    items.push({ id: id, title: title, category: category, image: image, groups: allGroups });
    savePortfolioItems(items);
    closeModal('portfolio-modal');
    renderPortfolioList();
    showToast('Portfolio item added!');
  }
}

function deletePortfolioItem(id) {
  if (!confirm('Delete this portfolio item? This cannot be undone.')) return;
  var items = getPortfolioItems().filter(function(i) { return i.id !== id; });
  savePortfolioItems(items);
  renderPortfolioList();
  showToast('Item deleted.', 'error');
}

function renderPortfolioList() {
  var items     = getPortfolioItems();
  var container = document.getElementById('portfolio-list');
  if (!container) return;
  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state"><span>🖼️</span><p>No portfolio items yet. Add your first project!</p></div>';
    return;
  }
  container.innerHTML = items.map(function(item) {
    return '<div class="post-card">'
      + '<div class="post-card-thumb">'
      + (item.image ? '<img src="' + escHtml(item.image) + '" alt="" onerror="this.parentElement.innerHTML=\'<span>🖼️</span>\'">' : '<span>🖼️</span>')
      + '</div>'
      + '<div class="post-card-info">'
      + '<span class="post-cat-tag">' + escHtml(item.category) + '</span>'
      + (item.title ? '<h3>' + escHtml(item.title) + '</h3>' : '')
      + '</div>'
      + '<div class="post-card-actions">'
      + '<button class="btn-icon-sm btn-edit" onclick="openEditPortfolioModal(\'' + item.id + '\')" title="Edit">✏️ Edit</button>'
      + '<button class="btn-icon-sm btn-delete" onclick="deletePortfolioItem(\'' + item.id + '\')" title="Delete">🗑️ Delete</button>'
      + '</div></div>';
  }).join('');
}

// ─── GitHub Config helpers ────────────────────────────────────────────────────

function getGithubConfig() {
  try { return JSON.parse(localStorage.getItem(GH_KEY)) || {}; } catch(e) { return {}; }
}
function saveGithubConfig(cfg) {
  localStorage.setItem(GH_KEY, JSON.stringify(cfg));
}

function loadGithubSettings() {
  var cfg = getGithubConfig();
  var set = function(id, val) { var el = document.getElementById(id); if (el) el.value = val || ''; };
  set('gh-owner',  cfg.owner);
  set('gh-repo',   cfg.repo);
  set('gh-branch', cfg.branch || 'main');
  set('gh-token',  cfg.token);
}

function saveGithubSettings() {
  var get = function(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
  var cfg = {
    owner:  get('gh-owner'),
    repo:   get('gh-repo'),
    branch: get('gh-branch') || 'main',
    token:  get('gh-token')
  };
  if (!cfg.owner || !cfg.repo || !cfg.token) {
    showToast('Please fill in all GitHub fields.', 'error');
    return;
  }
  saveGithubConfig(cfg);
  showToast('GitHub settings saved! ✅');
}

// ─── Build data.js content (plain string — no nested template literals) ───────

function buildDataJsContent() {
  var posts = getBlogPosts();
  var items = getPortfolioItems();
  var now   = new Date().toLocaleString();

  // Helper functions written to go inside the generated data.js
  // Written as a plain joined string to avoid any nested template-literal issues.
  var helpers = [
    'function getActiveBlogPosts() {',
    '  try { var s = localStorage.getItem("ib_blog_posts"); if (s) return JSON.parse(s); } catch(e) {}',
    '  localStorage.setItem("ib_blog_posts", JSON.stringify(IB_DEFAULT_BLOG_POSTS));',
    '  return IB_DEFAULT_BLOG_POSTS;',
    '}',
    '',
    'function getActivePortfolioItems() {',
    '  try { var s = localStorage.getItem("ib_portfolio_items"); if (s) return JSON.parse(s); } catch(e) {}',
    '  localStorage.setItem("ib_portfolio_items", JSON.stringify(IB_DEFAULT_PORTFOLIO_ITEMS));',
    '  return IB_DEFAULT_PORTFOLIO_ITEMS;',
    '}',
    '',
    'function escapeHtml(str) {',
    '  if (!str) return "";',
    "  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&#039;');",
    '}',
    '',
    'function renderBlogPosts() {',
    '  var container = document.getElementById("blog-posts-container");',
    '  if (!container) return;',
    '  var posts = getActiveBlogPosts();',
    '  if (!posts.length) {',
    '    container.innerHTML = \'<p style="color:#aaa;text-align:center;padding:40px 0;">No blog posts yet.</p>\';',
    '    return;',
    '  }',
    '  container.innerHTML = posts.map(function(post) {',
    '    return \'<div class="item"><div class="blog-card"><div class="media-block">\'',
    '      + \'<div class="category"><a>\' + escapeHtml(post.category) + \'</a></div>\'',
    '      + \'<a href="\' + escapeHtml(post.link || "#") + \'"  >\'',
    '      + \'<img src="\' + escapeHtml(post.image) + \'" alt="\' + escapeHtml(post.title) + \'" title="" /><div class="mask"></div></a>\'',
    '      + \'</div><div class="post-info"><div class="post-date">\' + escapeHtml(post.date) + \'</div>\'',
    '      + \'<a href="\' + escapeHtml(post.link || "#") + \'"><h4 class="blog-item-title">\' + escapeHtml(post.title) + \'</h4></a>\'',
    '      + \'</div></div></div>\';',
    '  }).join("");',
    '}',
    '',
    'function renderPortfolioItems() {',
    '  var grid = document.getElementById("portfolio-grid");',
    '  if (!grid) return;',
    '  var items = getActivePortfolioItems();',
    '  grid.innerHTML = items.map(function(item) {',
    "    return '<figure class=\"item standard\" data-groups=\\'' + JSON.stringify(item.groups || ['category_all']) + '\\'>'",
    '      + \'<div class="portfolio-item-img"><img src="\' + escapeHtml(item.image) + \'" alt="\' + escapeHtml(item.title || item.category) + \'" /></div>\'',
    '      + \'<i class="far fa-file-alt"></i>\'',
    '      + \'<span class="category">\' + escapeHtml(item.category) + \'</span></figure>\';',
    '  }).join("");',
    '}'
  ].join('\n');

  return '/**\n'
       + ' * data.js — Published from Admin Panel on ' + now + '\n'
       + ' * Auto-committed to GitHub via Admin Panel.\n'
       + ' */\n\n'
       + 'var IB_DEFAULT_BLOG_POSTS = ' + JSON.stringify(posts, null, 2) + ';\n\n'
       + 'var IB_DEFAULT_PORTFOLIO_ITEMS = ' + JSON.stringify(items, null, 2) + ';\n\n'
       + helpers + '\n';
}

// ─── Publish to GitHub via REST API ──────────────────────────────────────────

async function publishToGitHub() {
  var cfg = getGithubConfig();
  if (!cfg.owner || !cfg.repo || !cfg.token) {
    showToast('Set up GitHub settings first (Settings tab).', 'error');
    navigateTo('settings', document.querySelector('[data-section=settings]'));
    return;
  }

  var btn      = document.getElementById('publish-btn');
  var statusEl = document.getElementById('publish-status');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Publishing…'; }
  if (statusEl) { statusEl.textContent = ''; statusEl.className = 'publish-status'; }

  var filePath = 'js/data.js';
  var apiBase  = 'https://api.github.com/repos/' + cfg.owner + '/' + cfg.repo + '/contents/' + filePath;
  var headers  = {
    'Authorization': 'token ' + cfg.token,
    'Accept':        'application/vnd.github.v3+json',
    'Content-Type':  'application/json'
  };

  try {
    // Step 1: get the current file SHA (required for updates)
    var sha = null;
    var getRes = await fetch(apiBase + '?ref=' + cfg.branch, { headers: headers });
    if (getRes.ok) {
      var fileData = await getRes.json();
      sha = fileData.sha;
    } else if (getRes.status !== 404) {
      var errData = await getRes.json().catch(function() { return {}; });
      throw new Error(errData.message || ('GitHub API error: ' + getRes.status));
    }

    // Step 2: base64-encode the new data.js
    var content = buildDataJsContent();
    var encoded = btoa(unescape(encodeURIComponent(content)));

    // Step 3: commit the file
    var body = {
      message: 'Admin: update data.js [' + new Date().toISOString() + ']',
      content: encoded,
      branch:  cfg.branch
    };
    if (sha) body.sha = sha;

    var putRes = await fetch(apiBase, {
      method:  'PUT',
      headers: headers,
      body:    JSON.stringify(body)
    });

    if (!putRes.ok) {
      var putErr = await putRes.json().catch(function() { return {}; });
      throw new Error(putErr.message || ('HTTP ' + putRes.status));
    }

    var result    = await putRes.json();
    var commitUrl = (result.commit && result.commit.html_url)
                  ? result.commit.html_url
                  : 'https://github.com/' + cfg.owner + '/' + cfg.repo + '/commits/' + cfg.branch;

    if (statusEl) {
      statusEl.innerHTML = '✅ Published! <a href="' + commitUrl + '" target="_blank" style="color:#007ced;">View commit →</a>'
                         + '<br><small style="opacity:.7;">GitHub Pages will update in ~30 seconds.</small>';
      statusEl.className = 'publish-status success';
    }
    showToast('Published to GitHub! ✅ Site updates in ~30s.');

  } catch(err) {
    console.error('GitHub publish error:', err);
    if (statusEl) {
      statusEl.innerHTML = '❌ Error: ' + err.message;
      statusEl.className = 'publish-status error';
    }
    showToast('Publish failed: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '🚀 Publish to GitHub'; }
  }
}

// ─── Export (fallback download) ───────────────────────────────────────────────

function exportDataJs() {
  var content = buildDataJsContent();
  var blob = new Blob([content], { type: 'text/javascript' });
  var a    = document.createElement('a');
  a.href   = URL.createObjectURL(blob);
  a.download = 'data.js';
  a.click();
  showToast('data.js downloaded. Replace js/data.js and git push.');
}

// ─── Change Password ──────────────────────────────────────────────────────────

async function changePassword() {
  var current = document.getElementById('current-password').value;
  var newPw   = document.getElementById('new-password').value;
  var confirm = document.getElementById('confirm-password').value;
  if (!current || !newPw || !confirm) { showToast('All fields required.', 'error'); return; }
  if (newPw !== confirm)              { showToast('New passwords do not match.', 'error'); return; }
  if (newPw.length < 6)              { showToast('Password must be at least 6 characters.', 'error'); return; }

  var currentHash = await hashPassword(current);
  var storedHash  = localStorage.getItem('ib_admin_hash') || await hashPassword('admin123');
  if (currentHash !== storedHash) { showToast('Current password is incorrect.', 'error'); return; }

  var newHash = await hashPassword(newPw);
  localStorage.setItem('ib_admin_hash', newHash);
  document.getElementById('current-password').value = '';
  document.getElementById('new-password').value     = '';
  document.getElementById('confirm-password').value = '';
  showToast('Password changed successfully! ✅');
}

// ─── Search / Filter ──────────────────────────────────────────────────────────

function filterBlogList(query) {
  var q = query.toLowerCase();
  document.querySelectorAll('#blog-list .post-card').forEach(function(card) {
    card.style.display = (!q || card.textContent.toLowerCase().includes(q)) ? '' : 'none';
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function updateStats() {
  var el1 = document.getElementById('stat-blog');
  var el2 = document.getElementById('stat-portfolio');
  if (el1) el1.textContent = getBlogPosts().length;
  if (el2) el2.textContent = getPortfolioItems().length;
}

// ─── Init ─────────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', function() {
  if (isLoggedIn()) {
    showDashboard();
  } else {
    showLoginScreen();
  }

  // Login form
  document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    var pw  = document.getElementById('login-password').value;
    var btn = document.getElementById('login-btn');
    btn.disabled    = true;
    btn.textContent = 'Signing in…';
    var ok = await login(pw);
    btn.disabled    = false;
    btn.textContent = 'Sign In';
    if (ok) {
      document.getElementById('login-error').style.display = 'none';
      showDashboard();
    } else {
      var err = document.getElementById('login-error');
      err.textContent = 'Incorrect password. Please try again.';
      err.style.display = 'block';
      document.getElementById('login-password').value = '';
    }
  });

  // Close modals on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Blog search
  var searchInput = document.getElementById('blog-search');
  if (searchInput) searchInput.addEventListener('input', function(e) { filterBlogList(e.target.value); });

  // Stats
  updateStats();
});
