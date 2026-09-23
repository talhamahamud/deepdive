/**
 * app.js — DeepDive Homepage
 * Fetches posts/index.json, groups posts by topic,
 * renders Notion-style disc lists, and handles search.
 */



let allPosts = [];

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  loadPosts();
  setupSearch();
});

// ── Load & render ─────────────────────────────────────────────
async function loadPosts() {
  try {
    const res = await fetch('posts/index.json');
    if (!res.ok) throw new Error('Could not load posts/index.json');
    allPosts = await res.json();
    renderTopics(allPosts);
  } catch (err) {
    document.getElementById('loading-indicator').innerHTML =
      `<span style="color:var(--text-secondary)">⚠ Could not load posts. ${err.message}</span>`;
  }
}

function renderTopics(posts) {
  const container = document.getElementById('topics-container');
  container.innerHTML = '';

  if (posts.length === 0) {
    document.getElementById('no-results').classList.add('visible');
    return;
  }

  // Group by topic
  const grouped = {};
  posts.forEach(p => {
    const t = p.topic || 'General';
    if (!grouped[t]) grouped[t] = [];
    grouped[t].push(p);
  });

  Object.entries(grouped).forEach(([topic, topicPosts]) => {
    const group = document.createElement('div');
    group.className = 'topic-group';
    group.dataset.topic = topic;
    group.id = 'topic-' + slugify(topic);  // anchor target

    // Header
    const header = document.createElement('div');
    header.className = 'topic-header';
    header.innerHTML = `
      <span class="topic-title">${topic}</span>
      <span class="topic-count">${topicPosts.length} ${topicPosts.length === 1 ? 'note' : 'notes'}</span>
    `;

    // Post list
    const ul = document.createElement('ul');
    ul.className = 'post-list';

    topicPosts.forEach(post => {
      const li = document.createElement('li');
      const dateStr = post.date ? formatDate(post.date) : '';
      li.innerHTML = `
        <a href="posts/post.html?file=${encodeURIComponent(post.file)}" title="${escapeHtml(post.title)}">
          ${escapeHtml(post.title)}
        </a>
        ${dateStr ? `<span class="post-meta-inline">${dateStr}</span>` : ''}
      `;
      ul.appendChild(li);
    });

    group.appendChild(header);
    group.appendChild(ul);
    container.appendChild(group);
  });

  // Build sidebar after DOM is ready
  buildSidebar(Object.keys(grouped));
}

// ── Sidebar (TOC) ─────────────────────────────────────────────
function buildSidebar(topics) {
  const nav = document.getElementById('toc-nav');
  if (!nav) return;

  nav.innerHTML = topics.map(topic => {
    const id = 'topic-' + slugify(topic);
    return `<a class="toc-link" href="#${id}" data-target="${id}"><span class="toc-bar"></span><span class="toc-link-text">${escapeHtml(topic)}</span></a>`;
  }).join('');

  // Scroll-spy via IntersectionObserver
  const links = nav.querySelectorAll('.toc-link');
  const targets = topics.map(t => document.getElementById('topic-' + slugify(t))).filter(Boolean);

  if (!targets.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = nav.querySelector(`[data-target="${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });

  targets.forEach(t => observer.observe(t));

  // Set first active immediately
  if (links[0]) links[0].classList.add('active');
}

// ── Search ────────────────────────────────────────────────────
function setupSearch() {
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.remove('visible'); return; }

    const matches = allPosts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.topic  || '').toLowerCase().includes(q) ||
      (p.excerpt|| '').toLowerCase().includes(q)
    ).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">No posts found for "${escapeHtml(input.value)}"</div>`;
    } else {
      results.innerHTML = matches.map(p => `
        <a class="search-result-item"
           href="posts/post.html?file=${encodeURIComponent(p.file)}"
           role="option">
          <div class="sri-title">${escapeHtml(p.title)}</div>
          <div class="sri-topic">${escapeHtml(p.topic || 'General')}</div>
        </a>
      `).join('');
    }
    results.classList.add('visible');
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!document.getElementById('search-wrap').contains(e.target)) {
      results.classList.remove('visible');
    }
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { results.classList.remove('visible'); input.blur(); }
  });
}

// ── Helpers ───────────────────────────────────────────────────
function formatDate(str) {
  try {
    return new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch { return ''; }
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeHtml(str = '') {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
