/**
 * post.js — DeepDive Post Renderer
 * Reads ?file=filename.md from the URL, fetches the markdown,
 * and renders it into the page using marked.js.
 */



document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  const params   = new URLSearchParams(window.location.search);
  const filename = params.get('file');

  if (!filename) {
    showError('No post specified. <a href="../index.html">← Go home</a>');
    return;
  }

  // Fetch the index to get metadata
  let meta = { title: filename, topic: 'General', date: '' };
  try {
    const idx = await fetch('../posts/index.json');
    if (idx.ok) {
      const posts = await idx.json();
      const found = posts.find(p => p.file === filename);
      if (found) meta = { ...meta, ...found };
    }
  } catch (_) { /* metadata not critical */ }

  // Fetch the markdown file
  try {
    const res = await fetch(filename);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();

    renderPost(meta, md);
  } catch (err) {
    showError(`Could not load <code>${escapeHtml(filename)}</code>: ${err.message}`);
  }

  // Also set up search (read-only, links back to home with ?q=)
  setupSearch();
});

function renderPost(meta, markdown) {
  // Strip optional YAML front-matter
  let body = markdown.replace(/^---[\s\S]*?---\n?/, '').trim();

  // Configure marked
  marked.setOptions({
    gfm: true,
    breaks: false,
    pedantic: false,
    mangle: false,
    headerIds: true,
  });

  // Enable LaTeX parsing
  marked.use(markedKatex({ throwOnError: false, nonStandard: true }));

  const html = marked.parse(body);

  // Populate header
  document.title = `${meta.title} — DeepDive`;
  document.getElementById('nav-topic').textContent = meta.topic || 'General';
  document.getElementById('nav-title').textContent  = meta.title;

  document.getElementById('badge-topic').textContent = meta.topic || 'General';
  document.getElementById('post-title').textContent  = meta.title;

  if (meta.date) {
    document.getElementById('post-date').textContent = formatDate(meta.date);
  }

  // Estimate reading time
  const words = body.split(/\s+/).filter(Boolean).length;
  const mins  = Math.max(1, Math.round(words / 200));
  document.getElementById('post-read-time').textContent = `${mins} min read`;

  // Inject prose
  document.getElementById('prose-body').innerHTML = html;

  // Show content, hide loader
  document.getElementById('loading-indicator').style.display = 'none';
  document.getElementById('post-content').style.display = 'block';

  // Build heading TOC after content is in DOM
  buildPostTOC();

  // Update meta description
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.content = meta.excerpt || `${meta.title} — DeepDive science blog by Talha Mahamud`;
}

function showError(msg) {
  document.getElementById('loading-indicator').innerHTML =
    `<span style="color:var(--text-secondary)">&#9888; ${msg}</span>`;
}

// ── Heading TOC ───────────────────────────────────────────────
function buildPostTOC() {
  const prose = document.getElementById('prose-body');
  const nav   = document.getElementById('toc-nav');
  if (!prose || !nav) return;

  // Collect h2 and h3 headings
  const headings = Array.from(prose.querySelectorAll('h2, h3'));
  if (headings.length < 2) { document.getElementById('toc-sidebar').style.display = 'none'; return; }

  // Assign IDs to each heading
  const slugCount = {};
  headings.forEach(h => {
    let slug = slugify(h.textContent);
    slugCount[slug] = (slugCount[slug] || 0) + 1;
    if (slugCount[slug] > 1) slug += '-' + slugCount[slug];
    h.id = slug;
  });

  // Render TOC links
  nav.innerHTML = headings.map(h => {
    const isH3 = h.tagName === 'H3';
    return `<a class="toc-link${isH3 ? ' toc-h3' : ''}" href="#${h.id}" data-target="${h.id}"><span class="toc-bar"></span><span class="toc-link-text">${escapeHtml(h.textContent)}</span></a>`;
  }).join('');

  // Scroll-spy
  const links = nav.querySelectorAll('.toc-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = nav.querySelector(`[data-target="${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-8% 0px -72% 0px', threshold: 0 });

  headings.forEach(h => observer.observe(h));

  // Activate first link immediately
  if (links[0]) links[0].classList.add('active');
}

function setupSearch() {
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = `../index.html?q=${encodeURIComponent(input.value.trim())}`;
    }
    if (e.key === 'Escape') { results.classList.remove('visible'); input.blur(); }
  });

  input.placeholder = 'Search (press Enter)…';

  document.addEventListener('click', e => {
    if (!document.getElementById('search-wrap').contains(e.target)) {
      results.classList.remove('visible');
    }
  });
}

function formatDate(str) {
  try {
    return new Date(str).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch { return ''; }
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeHtml(str = '') {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
