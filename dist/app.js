'use strict';

const projects = [
  {
    id: 'aries', title: 'Echoes Beneath', type: 'anthology', category: 'Anthology contribution', genre: 'ARIES — Tales from the Mafia', status: 'Published',
    subtitle: 'In ARIES — Tales from the Mafia.',
    description: 'My flash fiction entry, “Echoes Beneath,” appears in ARIES — Tales from the Mafia, a collaborative anthology of flash fiction under Golden Artisan Publishing.',
    facts: [['Role', 'Contributing author'], ['Work', 'Echoes Beneath'], ['Format', 'Flash fiction'], ['Publisher', 'Golden Artisan Publishing']],
  },
  {
    id: 'memoir', title: 'A journal memoir', type: 'ghostwriting', category: 'Confidential ghostwriting', genre: '10 chapters · Title withheld', status: 'Ghostwritten',
    subtitle: 'The author’s concepts, developed into a ten-chapter book.',
    description: 'I helped an author bring her concepts to life in a journal memoir exploring mother–daughter relationships, emotional wounds, self-worth, generational patterns, healing, and becoming independent.',
    facts: [['Role', 'Ghostwriter'], ['Format', 'Journal memoir'], ['Scope', '10 chapters'], ['Credit', 'Author and title confidential']],
    note: 'The title, author identity, and manuscript are withheld. The cover treatment is a portfolio illustration, not the book’s actual cover.'
  },
  {
    id: 'braveity', title: 'The Art of Braveity', type: 'anthology', category: 'Anthology contribution', genre: '“Donita” & “Idee fixe” · Thriller', status: 'Published',
    subtitle: 'Two thriller flash fictions. One anthology.',
    description: 'A collaborative anthology from Psydem Publishing featuring my thriller flash fictions “Donita” and “Idee fixe.” These contributions showcase my work in short-form suspense.',
    facts: [['Role', 'Contributing author'], ['Works', 'Donita · Idee fixe'], ['Genre', 'Thriller flash fiction'], ['Publisher', 'Psydem Publishing']],
  },
  {
    id: 'wednesdays', title: 'Wednesdays with the CEO', type: 'novel', category: 'Novel', genre: 'Contemporary romance', status: 'Completed',
    subtitle: 'An original novel published on Dreame.',
    facts: [['Role', 'Author'], ['Genre', 'Contemporary romance'], ['Language', 'English'], ['Status', 'Completed · Published online']],
    url: 'https://www.dreame.com/story/311762688-wednesdays-with-the-ceo--english--completed',
    action: 'Read on Dreame', image: 'wednesdays.png'
  },
  {
    id: 'queen', title: 'Queen of the Underworld', type: 'novel', category: 'Novel', genre: 'Fantasy', status: 'Ongoing',
    subtitle: 'An ongoing fantasy novel on Dreame.',
    facts: [['Role', 'Author'], ['Genre', 'Fantasy'], ['Format', 'Online novel'], ['Status', 'Ongoing']],
    url: 'https://www.dreame.com/story/4214824960-queen-of-the-underworld', action: 'Read on Dreame', image: 'queen.png'
  },
  {
    id: 'demons', title: 'Trapped with Demons', type: 'novel', category: 'Novel', genre: 'Romance fantasy · Tagalog', status: 'Completed',
    subtitle: 'A completed romance fantasy novel in Tagalog.',
    facts: [['Role', 'Author'], ['Genre', 'Romance fantasy'], ['Language', 'Tagalog'], ['Status', 'Completed · Published online']],
    url: 'https://www.dreame.com/story/445980416-trapped-with-demons--tagalog--completed', action: 'Read on Dreame', image: 'demons.png'
  }
];

const sekkei = {
  id: 'sekkei', title: 'Content & strategy for Sekkei Digital Group', category: 'Content writing & strategy', subtitle: 'Copywriter & Content Strategist · May 2023–present',
  description: 'Manage content strategy, keyword research, topic planning, and production workflows. Write and optimise articles, landing pages, proposal decks, lead magnets, and social content. Led the website content revamp to improve messaging, structure, and service positioning.',
  facts: [['Focus', 'China marketing'], ['Scope', 'Strategy · Web copy · Articles · Marketing assets'], ['Editorial', 'Search intent, technical accuracy, internal links']],
  url: 'https://sekkeidigitalgroup.com/author/paola', action: 'View article archive'
};

const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

function coverMarkup(project) {
  if (project.image) return `<div class="book-cover"><img src="assets/${project.image}" alt="${escapeHTML(project.title)} book cover" width="656" height="1024" loading="lazy"></div>`;
  // SVG viewBoxes display the front covers from the supplied artwork without changing the original files.
  if (project.id === 'aries') return `<div class="book-cover"><svg viewBox="0 0 335 500" role="img" aria-label="ARIES — Tales from the Mafia front cover"><image href="assets/aries.jpg" x="-394" y="-117" width="1080" height="720" transform="rotate(-7.3 0 0)"/></svg></div>`;
  if (project.id === 'braveity') return `<div class="book-cover"><svg viewBox="660 0 636 960" role="img" aria-label="The Art of Braveity front cover"><image href="assets/braveity.png" width="1296" height="960"/></svg></div>`;
  return `<div class="book-cover memoir-cover" role="img" aria-label="Illustrative cover for confidential journal memoir"><span class="memoir-top">CONFIDENTIAL PROJECT</span><div><strong>A journal<br>memoir</strong><em>10 chapters</em></div><small>GHOSTWRITING<br>TITLE WITHHELD</small></div>`;
}

function renderCreative(filter = 'all') {
  const visible = projects.filter(project => filter === 'all' || project.type === filter);
  document.querySelector('#creative-grid').innerHTML = visible.map(project => `<button class="project-card" data-project="${project.id}" aria-label="Explore ${escapeHTML(project.title)}"><div class="project-art ${project.id}"><span class="corner-label">${project.type === 'ghostwriting' ? 'PRIVATE WORK' : project.type === 'anthology' ? 'IN PRINT' : 'ON DREAME'}</span>${coverMarkup(project)}<span class="project-arrow" aria-hidden="true">↗</span></div><div class="card-info"><div class="card-topline"><span>${escapeHTML(project.category)}</span><span class="card-status ${project.status === 'Ongoing' ? 'ongoing' : ''}">${project.status}</span></div><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.genre)}</p></div></button>`).join('');
  document.querySelector('.result-count').textContent = `${visible.length} selected project${visible.length === 1 ? '' : 's'}`;
}

const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));
function activateTab(name, focusTab = false) {
  for (const tab of tabButtons) {
    const selected = tab.dataset.tab === name;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.querySelector(`#panel-${tab.dataset.tab}`).hidden = !selected;
    if (selected && focusTab) tab.focus();
  }
}

for (const tab of tabButtons) {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  tab.addEventListener('keydown', event => {
    const current = tabButtons.indexOf(tab);
    let next;
    if (event.key === 'ArrowRight') next = (current + 1) % tabButtons.length;
    else if (event.key === 'ArrowLeft') next = (current - 1 + tabButtons.length) % tabButtons.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabButtons.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabButtons[next].dataset.tab, true); }
  });
}

for (const filter of document.querySelectorAll('[data-filter]')) {
  filter.addEventListener('click', () => {
    for (const button of document.querySelectorAll('[data-filter]')) {
      button.classList.toggle('active', button === filter);
      button.setAttribute('aria-pressed', String(button === filter));
    }
    renderCreative(filter.dataset.filter);
  });
}

const dialog = document.querySelector('#project-dialog');
let previousFocus;
function showProject(id) {
  const project = id === 'sekkei' ? sekkei : projects.find(item => item.id === id);
  if (!project) return;
  previousFocus = document.activeElement;
  document.querySelector('#dialog-art').innerHTML = id === 'sekkei' ? '<div class="dialog-sekkei">Research.<br>Relevance.<br><em>Clear direction.</em><small>SEKKEI DIGITAL GROUP</small></div>' : coverMarkup(project);
  document.querySelector('#dialog-art').className = `dialog-art ${project.id}`;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-subtitle').textContent = project.subtitle;
  const description = document.querySelector('#dialog-description');
  description.textContent = project.description || '';
  description.hidden = !project.description;
  document.querySelector('#dialog-facts').innerHTML = project.facts.map(([key, value]) => `<div class="dialog-fact"><span>${escapeHTML(key)}</span><div>${escapeHTML(value)}</div></div>`).join('');
  document.querySelector('#dialog-actions').innerHTML = project.url ? `<a class="solid-button" href="${project.url}" target="_blank" rel="noopener">${project.action}<span aria-hidden="true">↗</span></a>` : project.note ? `<p>${escapeHTML(project.note)}</p>` : '';
  document.querySelector('#dialog-actions').hidden = !project.url && !project.note;
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  document.querySelector('.dialog-close').focus();
}

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-project]');
  if (trigger) showProject(trigger.dataset.project);
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (previousFocus && previousFocus.isConnected) previousFocus.focus();
});

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#email-status');
  try { await navigator.clipboard.writeText('paolalimin@gmail.com'); status.textContent = 'Email address copied.'; }
  catch (_) { status.textContent = 'paolalimin@gmail.com — select the address above to copy.'; }
});

document.querySelector('#year').textContent = new Date().getFullYear();
for (const book of document.querySelectorAll('.hero-book')) {
  book.innerHTML = coverMarkup(projects.find(project => project.id === book.dataset.project));
}
renderCreative();

const testimonials = [
  { quote: 'Paola has always been prompt and delivers consistently exceptional articles. It’s what you should look for in a writer — the discipline.', name: 'Cindy Wong', role: 'CEO & Co-Founder, 8Letters Bookstore and Publishing' },
  { quote: '[Paola] has written quality and upbeat articles on our business website thanks to her professionalism and expertise. It led to an increase in our organic search engine rankings. Keep up the good work, and I look forward to more projects.', name: 'Allen Romero', role: 'Co-Founder, Sevensharp Creatives' },
  { quote: 'One of the other things I value most about Paola is her professionalism and reliability. She always meets deadlines and keeps communication clear and timely throughout the entire process.', name: 'Doreen Arcigal', role: 'HR Manager, Virtual Office Angels' }
];
let testimonialIndex = 0;
function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  const item = testimonials[testimonialIndex];
  document.querySelector('#testimonial-quote').textContent = item.quote;
  document.querySelector('#testimonial-name').textContent = item.name;
  document.querySelector('#testimonial-role').textContent = item.role;
  document.querySelector('#testimonial-count').textContent = `${testimonialIndex + 1} / ${testimonials.length}`;
}
document.querySelector('#testimonial-previous').addEventListener('click', () => showTestimonial(testimonialIndex - 1));
document.querySelector('#testimonial-next').addEventListener('click', () => showTestimonial(testimonialIndex + 1));
