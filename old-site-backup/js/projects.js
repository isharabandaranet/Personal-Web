/**
 * projects.js — Logic for the unified My Works page
 * isharabandara.net
 */

(function () {
  'use strict';

  /* ──────────────────────────────────────────
     TAB SWITCHING
  ────────────────────────────────────────── */
  function initTabs() {
    var tabBtns   = document.querySelectorAll('.works-tab-btn');
    var secCoding = document.getElementById('section-coding');
    var secDesign = document.getElementById('section-design');

    function showTab(tab) {
      tabBtns.forEach(function(b) { b.classList.remove('active'); });
      document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
      secCoding.style.display = (tab === 'coding') ? 'block' : 'none';
      secDesign.style.display = (tab === 'design') ? 'block' : 'none';
    }

    // Default: show coding projects
    showTab('coding');

    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() { showTab(this.dataset.tab); });
    });
  }

  /* ──────────────────────────────────────────
     SHARED: escape helper
  ────────────────────────────────────────── */
  function esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  /* ──────────────────────────────────────────
     CODING: Render project cards
  ────────────────────────────────────────── */
  function renderProjects(filter) {
    var grid = document.getElementById('projects-grid');
    if (!grid) return;
    var projects = (typeof getActiveCodingProjects === 'function') ? getActiveCodingProjects() : IB_DEFAULT_CODING_PROJECTS;

    if (!projects || projects.length === 0) {
      grid.innerHTML = '<div class="projects-no-results"><p>No projects found.</p></div>'; return;
    }
    var filtered = (filter && filter !== 'all') ? projects.filter(function(p) { return p.filter === filter; }) : projects;
    if (filtered.length === 0) {
      grid.innerHTML = '<div class="projects-no-results"><p>No projects in this category yet.</p></div>'; return;
    }

    grid.innerHTML = filtered.map(function(p, i) { return buildCodingCard(p, i); }).join('');

    grid.querySelectorAll('.project-card').forEach(function(el) {
      el.addEventListener('click', function(e) {
        if (e.target.closest('.proj-card-link')) return;
        var card = e.target.closest('.project-card');
        if (!card) return;
        var project = projects.find(function(p) { return p.id === card.dataset.id; });
        if (project) openCodingModal(project);
      });
    });
  }

  function buildCodingCard(p, i) {
    var stack = (p.stack || []).map(function(t) {
      return '<span class="tech-badge" data-tech="' + esc(t) + '">' + esc(t) + '</span>';
    }).join('');
    var githubBtn = p.github
      ? '<a href="' + esc(p.github) + '" target="_blank" rel="noopener" class="proj-card-link" title="GitHub" onclick="event.stopPropagation()">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>' +
        '</a>' : '';
    var liveBtn = p.liveUrl
      ? '<a href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener" class="proj-card-link" title="Live Demo" onclick="event.stopPropagation()">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
        '</a>' : '';
    return (
      '<div class="project-card" data-id="' + esc(p.id) + '" style="animation-delay:' + (i * 0.07) + 's">' +
        '<div class="proj-card-header">' +
          '<div class="proj-card-icon">' + (p.icon || '💻') + '</div>' +
          '<div class="proj-card-links">' + githubBtn + liveBtn + '</div>' +
        '</div>' +
        '<h3 class="proj-card-title">' + esc(p.title) + '</h3>' +
        '<p class="proj-card-description">' + esc(p.shortDescription || p.description) + '</p>' +
        '<div class="proj-card-stack">' + stack + '</div>' +
        '<div class="proj-card-footer">' +
          '<span class="proj-card-category">' + esc(p.category) + '</span>' +
          '<button class="proj-card-details-btn" type="button">Details ' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function initCodingFilters() {
    var btns = document.querySelectorAll('#coding-filter-bar .proj-filter-btn');
    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        btns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        renderProjects(this.dataset.filter);
      });
    });
  }

  /* ──────────────────────────────────────────
     DESIGN: Render design cards (same UI as coding)
  ────────────────────────────────────────── */
  function renderDesignCards(filter) {
    var grid = document.getElementById('design-cards-grid');
    if (!grid) return;
    // Always use defaults to guarantee filter fields exist (avoids stale localStorage)
    var items = IB_DEFAULT_PORTFOLIO_ITEMS;

    if (!items || items.length === 0) {
      grid.innerHTML = '<div class="projects-no-results"><p>No design items found.</p></div>'; return;
    }
    var filtered = (filter && filter !== 'all') ? items.filter(function(p) { return p.filter === filter; }) : items;
    if (filtered.length === 0) {
      grid.innerHTML = '<div class="projects-no-results"><p>No designs in this category yet.</p></div>'; return;
    }

    grid.innerHTML = filtered.map(function(p, i) { return buildDesignCard(p, i); }).join('');

    grid.querySelectorAll('.design-card').forEach(function(el) {
      el.addEventListener('click', function() {
        var item = items.find(function(p) { return p.id === this.dataset.id; }.bind(this));
        if (item) openDesignLightbox(item);
      });
    });
  }

  function buildDesignCard(p, i) {
    var tools = (p.tools || []).map(function(t) {
      return '<span class="tech-badge" data-tech="' + esc(t) + '">' + esc(t) + '</span>';
    }).join('');
    return (
      '<div class="project-card design-card" data-id="' + esc(p.id) + '" style="animation-delay:' + (i * 0.07) + 's">' +
        '<div class="design-card-thumb">' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.category) + '" loading="lazy" />' +
        '</div>' +
        '<p class="proj-card-description">' + esc(p.shortDescription || '') + '</p>' +
        '<div class="proj-card-stack">' + tools + '</div>' +
        '<div class="proj-card-footer">' +
          '<span class="proj-card-category">' + esc(p.category) + '</span>' +
          '<button class="proj-card-details-btn" type="button">View ' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function initDesignFilters() {
    var btns = document.querySelectorAll('#design-filter-bar .proj-filter-btn');
    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        btns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        renderDesignCards(this.dataset.filter);
      });
    });
  }

  /* ──────────────────────────────────────────
     DESIGN: Lightbox
  ────────────────────────────────────────── */
  function openDesignLightbox(p) {
    var lb = document.getElementById('design-lightbox');
    if (!lb) return;
    document.getElementById('design-lightbox-img').src = p.image;
    document.getElementById('design-lightbox-img').alt = p.title || '';
    document.getElementById('design-lightbox-icon').textContent = p.icon || '🎨';
    document.getElementById('design-lightbox-title').textContent = p.title || '';
    document.getElementById('design-lightbox-category').textContent = p.category || '';
    document.getElementById('design-lightbox-desc').textContent = p.shortDescription || '';
    document.getElementById('design-lightbox-tools').innerHTML = (p.tools || []).map(function(t) {
      return '<span class="tech-badge" data-tech="' + esc(t) + '">' + esc(t) + '</span>';
    }).join('');
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDesignLightbox() {
    var lb = document.getElementById('design-lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initDesignLightbox() {
    var lb = document.getElementById('design-lightbox');
    var closeBtn = document.getElementById('design-lightbox-close');
    if (!lb) return;
    closeBtn.addEventListener('click', closeDesignLightbox);
    lb.addEventListener('click', function(e) { if (e.target === lb) closeDesignLightbox(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeDesignLightbox(); });
  }

  /* ──────────────────────────────────────────
     CODING: Modal
  ────────────────────────────────────────── */
  function openCodingModal(p) {
    var overlay  = document.getElementById('project-modal-overlay');
    if (!overlay) return;
    document.getElementById('proj-modal-title').textContent    = p.title;
    document.getElementById('proj-modal-category').textContent = p.category;
    document.getElementById('proj-modal-icon').textContent     = p.icon || '💻';
    document.getElementById('proj-modal-description').textContent = p.description || '';
    document.getElementById('proj-modal-stack').innerHTML = (p.stack || []).map(function(t) {
      return '<span class="tech-badge" data-tech="' + esc(t) + '">' + esc(t) + '</span>';
    }).join('');
    document.getElementById('proj-modal-highlights').innerHTML = (p.highlights || []).map(function(h) {
      return '<li>' + esc(h) + '</li>';
    }).join('');
    var ghBtn   = document.getElementById('proj-modal-github');
    var liveBtn = document.getElementById('proj-modal-live');
    if (p.github) { ghBtn.href = p.github; ghBtn.style.display = 'inline-flex'; } else { ghBtn.style.display = 'none'; }
    if (p.liveUrl) { liveBtn.href = p.liveUrl; liveBtn.style.display = 'inline-flex'; } else { liveBtn.style.display = 'none'; }
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCodingModal() {
    var overlay = document.getElementById('project-modal-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initCodingModal() {
    var overlay  = document.getElementById('project-modal-overlay');
    var closeBtn = document.getElementById('proj-modal-close');
    if (!overlay) return;
    closeBtn.addEventListener('click', closeCodingModal);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeCodingModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeCodingModal(); });
  }

  /* ──────────────────────────────────────────
     Init
  ────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initCodingFilters();
    initCodingModal();
    renderProjects('all');
    initDesignFilters();
    initDesignLightbox();
    renderDesignCards('all');
  });

})();
