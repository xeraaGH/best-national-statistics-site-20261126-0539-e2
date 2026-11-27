// Japan by the Numbers — the router. Hash routes, one page per section:
//
//   #/                      overview
//   #/population            population & ageing
//   #/economy               economy
//   #/daily                 daily life
//   #/society               society & safety
//   #/prefectures           the 47 prefectures
//   #/prefecture/<slug>     one prefecture
//
// window.__shotReady is false while a page renders and true once it is on
// screen, so a screenshot script knows when to capture.

import { PREFECTURES, density, slugify } from './data.js';
import { missing, overview, population, economy, daily, society, prefectures, prefectureDetail, prefecturesTable } from './views.js';

const app = document.getElementById('app');
const navLinks = [...document.querySelectorAll('nav a[data-route]')];

let sortKey = 'rank';
let sortDir = 1;
let query = '';

function sortedPrefectures() {
  const rows = PREFECTURES.filter((p) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.capital.toLowerCase().includes(q);
  });
  const key = (p) => {
    if (sortKey === 'name') return p.name;
    if (sortKey === 'capital') return p.capital;
    if (sortKey === 'pop') return p.pop;
    if (sortKey === 'area') return p.area;
    if (sortKey === 'density') return density(p);
    if (sortKey === 'elderly') return p.elderly;
    return PREFECTURES.indexOf(p);
  };
  rows.sort((a, b) => {
    const ka = key(a);
    const kb = key(b);
    if (ka < kb) return -sortDir;
    if (ka > kb) return sortDir;
    return 0;
  });
  return rows;
}

function bindPrefectureTable() {
  const wrap = document.getElementById('pref-table-wrap');
  const search = document.getElementById('pref-search');
  if (!wrap) return;
  const rerender = () => {
    wrap.innerHTML = prefecturesTable(sortedPrefectures());
  };
  if (search) {
    search.value = query;
    search.addEventListener('input', () => {
      query = search.value.trim();
      rerender();
    });
  }
  wrap.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-sort]');
    if (!button) return;
    const key = button.dataset.sort;
    if (sortKey === key) {
      sortDir = -sortDir;
    } else {
      sortKey = key;
      sortDir = key === 'name' || key === 'capital' ? 1 : -1;
    }
    rerender();
  });
}

const ROUTES = [
  { match: /^#\/$/, render: overview, title: 'Japan by the Numbers', nav: '#/' },
  { match: /^#\/population$/, render: population, title: 'Population & Ageing | Japan by the Numbers', nav: '#/population' },
  { match: /^#\/economy$/, render: economy, title: 'Economy | Japan by the Numbers', nav: '#/economy' },
  { match: /^#\/daily$/, render: daily, title: 'Daily Life | Japan by the Numbers', nav: '#/daily' },
  { match: /^#\/society$/, render: society, title: 'Society & Safety | Japan by the Numbers', nav: '#/society' },
  { match: /^#\/prefectures$/, render: prefectures, title: 'Prefectures | Japan by the Numbers', nav: '#/prefectures' },
];

function render() {
  window.__shotReady = false;
  const hash = location.hash || '#/';
  const detail = hash.match(/^#\/prefecture\/([^/?]+)/);
  let html;
  let title = 'Japan by the Numbers';
  let nav = '#/';
  if (detail) {
    const slug = decodeURIComponent(detail[1]);
    const found = PREFECTURES.find((p) => slugify(p.name) === slug);
    html = prefectureDetail(slug);
    title = found ? `${found.name} | Japan by the Numbers` : title;
    nav = '#/prefectures';
  } else {
    const route = ROUTES.find((r) => r.match.test(hash));
    if (route) {
      html = route.render();
      title = route.title;
      nav = route.nav;
    } else {
      html = missing();
      title = 'Not found | Japan by the Numbers';
    }
  }
  document.title = title;
  app.innerHTML = html;
  for (const link of navLinks) {
    link.classList.toggle('active', link.getAttribute('href') === nav);
  }
  bindPrefectureTable();
  window.scrollTo(0, 0);
  window.__shotReady = true;
}

window.addEventListener('hashchange', render);
render();
