// HTML for each page of Japan by the Numbers, built from data.js.
// Every figure is shown with its source and year; every value is escaped
// before it goes into the page.

import {
  AGE_STRUCTURE,
  BIRTHS_DEATHS,
  DAILY_LIFE,
  ECONOMY_FACTS,
  EXPORTS,
  GDP_SERIES,
  HEADLINE,
  PISA,
  POPULATION_FACTS,
  POPULATION_TIMELINE,
  PREFECTURES,
  PYRAMID,
  SOCIETY,
  TRADE,
  density,
  prefectureBySlug,
  slugify,
} from './data.js';
import { ageDonut, birthsDeathsBars, horizontalBars, lineChart, pairedBars, populationPyramid } from './charts.js';

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function sourceLine(source, year) {
  return `<p class="source">Source: ${escape(source)}${year ? `, ${escape(year)}` : ''}</p>`;
}

function statCard(f) {
  return `<div class="stat-card"><div class="stat-value">${escape(f.value)}</div>
<div class="stat-label">${escape(f.label)}</div>
<p class="source">${escape(f.source)}${f.year ? `, ${escape(f.year)}` : ''}</p></div>`;
}

function sectionCards() {
  const cards = [
    { href: '#/population', title: 'Population & Ageing', text: 'The pyramid, the shrinking timeline, births against deaths — and why 1 in 10 Japanese people is now over 80.' },
    { href: '#/economy', title: 'Economy', text: 'GDP, the world’s biggest public debt, exports, jobs and the yen.' },
    { href: '#/daily', title: 'Daily Life', text: 'Work hours, housing prices, the Shinkansen, rice prices and 56,000 convenience stores.' },
    { href: '#/society', title: 'Society & Safety', text: 'Crime, classrooms, hospitals and health — the numbers behind one of the world’s safest societies.' },
    { href: '#/prefectures', title: 'Prefectures', text: 'All 47 prefectures, sortable and searchable — from Hokkaido’s 5.1 million to Tottori’s half a million.' },
  ];
  return `<div class="card-grid">${cards
    .map((c) => `<a class="section-card" href="${c.href}"><h3>${escape(c.title)}</h3><p>${escape(c.text)}</p><span class="card-link">Explore →</span></a>`)
    .join('')}</div>`;
}

export function overview() {
  const h = HEADLINE;
  return `<section class="hero">
<p class="kicker">NATIONAL STATISTICS · JAPAN · 日本</p>
<h1>Japan by the Numbers</h1>
<p class="hero-lede">The oldest country on Earth, counted. Japan’s population has shrunk every year since 2008, its median age is the highest anywhere, and its people live longer than anyone else’s. These are the figures behind that story — and behind the economy, the daily life and the 47 prefectures of a country of 124 million.</p>
</section>

<section class="kpi-strip">
<div class="stat-card"><div class="stat-value">${h.population.value}</div><div class="stat-label">${h.population.label}</div>${sourceLine(h.population.source, h.population.year)}</div>
<div class="stat-card"><div class="stat-value">${h.medianAge.value}</div><div class="stat-label">${h.medianAge.label}</div>${sourceLine(h.medianAge.source, h.medianAge.year)}</div>
<div class="stat-card"><div class="stat-value">${h.elderlyShare.value}</div><div class="stat-label">${h.elderlyShare.label}</div>${sourceLine(h.elderlyShare.source, h.elderlyShare.year)}</div>
<div class="stat-card"><div class="stat-value">${h.lifeExpectancy.value}</div><div class="stat-label">${h.lifeExpectancy.label}</div>${sourceLine(h.lifeExpectancy.source, h.lifeExpectancy.year)}</div>
<div class="stat-card"><div class="stat-value">${h.fertility.value}</div><div class="stat-label">${h.fertility.label}</div>${sourceLine(h.fertility.source, h.fertility.year)}</div>
<div class="stat-card"><div class="stat-value">${h.gdp.value}</div><div class="stat-label">${h.gdp.label}</div>${sourceLine(h.gdp.source, h.gdp.year)}</div>
</section>

<section class="split">
<div class="panel"><h2>Who lives in Japan?</h2>
<p>Almost three in ten people are 65 or older, and children are barely one in nine. No other large country is shaped like this.</p>
${ageDonut(AGE_STRUCTURE)}
${sourceLine('Statistics Bureau of Japan', '2024')}</div>
<div class="panel"><h2>A century of rise — and fall</h2>
<p>Japan’s population tripled in the 20th century, peaked at 128.1 million in 2008, and is projected to fall below 100 million around 2055.</p>
${lineChart(POPULATION_TIMELINE.map((p) => ({ x: p.year, y: p.pop, projected: p.projected })), { yLabel: 'millions', max: 140 })}
${sourceLine('Statistics Bureau of Japan; NIPSSR medium-variant projections', '2024')}</div>
</section>

<section><h2>Explore the numbers</h2>${sectionCards()}</section>

<section class="about"><h2>About these figures</h2>
<p>Every number on this site is a real published figure, rounded where its source rounds it, and each one carries its source and year. Population figures come from the Statistics Bureau of Japan and the National Institute of Population and Social Security Research; economic figures from the IMF, the Ministry of Finance and the Bank of Japan; social figures from the OECD, the World Bank and Japan’s ministries. Nothing here is fetched from the network — the whole site is its own files, and it works offline.</p>
<p class="source">Last updated November 2026. Figures are rounded; prefecture populations may not sum exactly to the national total.</p></section>`;
}

export function population() {
  return `<section class="page-head"><p class="kicker">POPULATION & AGEING</p>
<h1>The oldest country on Earth</h1>
<p class="lede">Japan is the first country in history where more than a quarter of the population is over 65. It got there first, and every other rich country is following.</p></section>

<section class="stat-grid">${POPULATION_FACTS.map(statCard).join('')}</section>

<section class="panel"><h2>The population pyramid, 2024</h2>
<p>Read it top to bottom: the wide bands are the baby boomers of the 1970s; the narrow base is the children who were never born. Women outnumber men at every age over 70.</p>
${populationPyramid(PYRAMID)}
${sourceLine('Statistics Bureau of Japan, population estimates', '2024')}</section>

<section class="panel"><h2>Births against deaths</h2>
<p>In 1973, three babies were born for every death. In 2024, deaths outnumbered births by more than two to one — the gap is now about 900,000 people a year.</p>
${birthsDeathsBars(BIRTHS_DEATHS)}
${sourceLine('Ministry of Health, Labour and Welfare, vital statistics', '2024')}</section>

<section class="panel"><h2>The long decline</h2>
<p>On current projections Japan loses roughly a million people a year by the 2040s, and its population halves by the end of the century.</p>
${lineChart(POPULATION_TIMELINE.map((p) => ({ x: p.year, y: p.pop, projected: p.projected })), { yLabel: 'millions', max: 140 })}
${sourceLine('Statistics Bureau of Japan; NIPSSR medium-variant projections', '2024')}</section>

<section><h2>Why it happened</h2>
<div class="fact-list">
<p><strong>Fewer babies.</strong> The fertility rate fell from 2.1 children per woman in 1973 to 1.15 in 2024 — the lowest on record. Women now have their first child at 31 on average, and a third of men in their thirties have never married.</p>
<p><strong>Longer lives.</strong> Life expectancy is 84.0 years, the highest in the world. A Japanese woman who reaches 65 can expect about 24 more years.</p>
<p><strong>Little immigration.</strong> Foreign residents are 2.3% of the population — a record high, but far below most rich countries, so migration barely offsets the natural decrease.</p>
</div>
${sourceLine('MHLW; World Bank; Immigration Services Agency', '2023–2024')}</section>`;
}

export function economy() {
  return `<section class="page-head"><p class="kicker">ECONOMY</p>
<h1>The world’s most indebted rich economy</h1>
<p class="lede">Japan is still the world’s fourth-largest economy, but its output in dollars has shrunk as the yen has weakened — and its government owes more than twice what the country produces in a year.</p></section>

<section class="stat-grid">${ECONOMY_FACTS.map(statCard).join('')}</section>

<section class="panel"><h2>GDP, nominal, 1990–2024</h2>
<p>Japan’s economy was worth $5.7 trillion in 2010. In dollar terms it has fallen since, mostly because the yen weakened — in yen, output kept growing.</p>
${lineChart(GDP_SERIES.map((g) => ({ x: g.year, y: g.gdp })), { yLabel: 'US$ trillion', max: 6.5 })}
${sourceLine('IMF World Economic Outlook', '2024')}</section>

<section class="split">
<div class="panel"><h2>What Japan sells</h2>
<p>Cars and machines dominate exports — about one in five yen of exports is a motor vehicle.</p>
${horizontalBars(EXPORTS.map((e) => ({ label: e.category, value: e.value })), { unit: ' ¥tn' })}
${sourceLine('Ministry of Finance, trade statistics', '2024')}</div>
<div class="panel"><h2>Trade in 2024</h2>
<p class="big-figure">${escape(TRADE.exportsTotal)}</p>
<p>Total exports of goods.</p>
<p class="big-figure">${escape(TRADE.balance)}</p>
<p>${escape(TRADE.note)}</p>
${sourceLine(TRADE.source, '2024')}
<h3>Also in the economy</h3>
<ul class="plain-list">
<li><strong>Toyota</strong> is Japan’s biggest company by revenue — about ¥48 trillion in its 2024 fiscal year.</li>
<li>The <strong>Nikkei 225</strong> closed 2024 at 39,895, its highest year-end level ever.</li>
<li>Japan holds the world’s largest <strong>foreign-exchange reserves after China</strong>, about $1.2 trillion.</li>
<li><strong>Tourism</strong> hit a record 36.9 million visitors in 2024 — more than before the pandemic.</li>
</ul>
${sourceLine('Company reports; Japan National Tourism Organization', '2024')}</div>
</section>`;
}

export function daily() {
  return `<section class="page-head"><p class="kicker">DAILY LIFE</p>
<h1>What life costs, and how it runs</h1>
<p class="lede">Shorter working hours than the stereotype suggests, the world’s busiest station, rice prices that doubled in two years — and a convenience store on almost every corner.</p></section>

<section class="stat-grid">${DAILY_LIFE.map(statCard).join('')}</section>

<section class="panel"><h2>A day in numbers</h2>
<ul class="plain-list">
<li><strong>Commuting:</strong> the average Tokyo commuter spends about 49 minutes each way (MLIT, 2023).</li>
<li><strong>Trains:</strong> the Shinkansen carried about 350 million passengers in 2023, with delays averaging under a minute a year.</li>
<li><strong>Food:</strong> households spend about a quarter of their budget on food; rice, the staple, cost ¥4,214 for 5 kg in May 2025 — double the 2023 price after a poor harvest.</li>
<li><strong>Cash:</strong> cashless payments are now 39% of all payments, up from 20% in 2018 — but cash is still king in small shops.</li>
<li><strong>Phones:</strong> about 96% of households own a smartphone; Japan’s mobile data is among the cheapest in the G7 per gigabyte.</li>
</ul>
${sourceLine('MLIT; Statistics Bureau of Japan; METI', '2023–2025')}</section>`;
}

export function society() {
  return `<section class="page-head"><p class="kicker">SOCIETY & SAFETY</p>
<h1>Safe, schooled and well doctored</h1>
<p class="lede">Japan has some of the lowest crime and the best school results in the rich world — and a health system that covers everyone, with more hospital beds per person than anywhere else.</p></section>

<section class="stat-grid">${SOCIETY.map(statCard).join('')}</section>

<section class="panel"><h2>School results: Japan vs the OECD</h2>
<p>In the 2022 PISA tests of 15-year-olds, Japan ranked near the top in all three subjects — well above the OECD average.</p>
${pairedBars(PISA, { unit: 'PISA points' })}
${sourceLine('OECD PISA', '2022')}</section>

<section class="panel"><h2>Health, in brief</h2>
<ul class="plain-list">
<li><strong>Universal coverage since 1961:</strong> every resident is insured, and patients typically pay 30% of a bill, capped by income.</li>
<li><strong>Longest lives:</strong> life expectancy 84.0 years (2023, World Bank) — women 87.1, men 81.1.</li>
<li><strong>But not everything is rosy:</strong> the suicide rate, 17.4 per 100,000 in 2023, is high for a rich country, and the leading cause of death for men aged 20–44.</li>
<li><strong>Smoking:</strong> about 16% of adults smoke (2023) — down from half of men in the 1960s.</li>
</ul>
${sourceLine('MHLW; World Bank; OECD', '2022–2023')}</section>`;
}

function prefectureRow(p, rank) {
  return `<tr>
<td class="num">${rank}</td>
<td><a href="#/prefecture/${slugify(p.name)}">${escape(p.name)}</a> <span class="jp">${escape(p.jp)}</span></td>
<td>${escape(p.capital)}</td>
<td class="num">${p.pop.toFixed(1)}</td>
<td class="num">${p.area.toLocaleString('en-US')}</td>
<td class="num">${density(p).toLocaleString('en-US')}</td>
<td class="num">${p.elderly.toFixed(1)}%</td>
</tr>`;
}

export function prefecturesTable(rows) {
  return `<table class="pref-table"><thead><tr>
<th><button data-sort="rank" type="button">#</button></th>
<th><button data-sort="name" type="button">Prefecture</button></th>
<th><button data-sort="capital" type="button">Capital</button></th>
<th><button data-sort="pop" type="button">Population (m)</button></th>
<th><button data-sort="area" type="button">Area (km²)</button></th>
<th><button data-sort="density" type="button">People/km²</button></th>
<th><button data-sort="elderly" type="button">Aged 65+ (%)</button></th>
</tr></thead><tbody>${rows.map((p, i) => prefectureRow(p, i + 1)).join('')}</tbody></table>`;
}

export function prefectures() {
  const top10 = [...PREFECTURES].sort((a, b) => b.pop - a.pop).slice(0, 10);
  return `<section class="page-head"><p class="kicker">PREFECTURES</p>
<h1>All 47 prefectures</h1>
<p class="lede">From Hokkaido’s wide north to Okinawa’s southern islands. Tokyo alone holds more people than 30 prefectures combined — and Akita is older, on average, than any region in Europe.</p></section>

<section class="panel"><h2>The ten biggest</h2>
${horizontalBars(top10.map((p) => ({ label: p.name, value: p.pop })), { unit: 'm' })}
${sourceLine('Statistics Bureau of Japan, population estimates', '2024')}</section>

<section class="panel"><h2>Explore the table</h2>
<p>Type to search by name or capital, or tap a column heading to sort. Tap a prefecture’s name for its figures.</p>
<label class="search-label" for="pref-search">Search prefectures</label>
<input id="pref-search" type="search" placeholder="e.g. Kyoto, Hokkaido, Naha…" autocomplete="off">
<div class="table-scroll" id="pref-table-wrap">${prefecturesTable(PREFECTURES)}</div>
<p class="source">Source: Statistics Bureau of Japan, population estimates 2024; area from the Geospatial Information Authority of Japan. Density is computed from population and area. Figures rounded.</p></section>`;
}

export function prefectureDetail(slug) {
  const p = prefectureBySlug(slug);
  if (!p) return missing();
  const rank = [...PREFECTURES].sort((a, b) => b.pop - a.pop).indexOf(p) + 1;
  const share = ((p.pop / 123.9) * 100).toFixed(1);
  return `<section class="page-head"><p><a href="#/prefectures">← All prefectures</a></p>
<p class="kicker">PREFECTURE · ${escape(p.jp)}</p>
<h1>${escape(p.name)}</h1>
<p class="lede">${escape(p.note)}</p></section>

<section class="stat-grid">
<div class="stat-card"><div class="stat-value">${p.pop.toFixed(1)}m</div><div class="stat-label">Population — #${rank} of 47</div>${sourceLine('Statistics Bureau of Japan', '2024')}</div>
<div class="stat-card"><div class="stat-value">${share}%</div><div class="stat-label">Share of Japan’s population</div>${sourceLine('Statistics Bureau of Japan', '2024')}</div>
<div class="stat-card"><div class="stat-value">${p.area.toLocaleString('en-US')}</div><div class="stat-label">Area (km²)</div>${sourceLine('Geospatial Information Authority of Japan', '2024')}</div>
<div class="stat-card"><div class="stat-value">${density(p).toLocaleString('en-US')}</div><div class="stat-label">People per km²</div>${sourceLine('Computed from population and area', '2024')}</div>
<div class="stat-card"><div class="stat-value">${p.elderly.toFixed(1)}%</div><div class="stat-label">Aged 65 and over (national: 29.3%)</div>${sourceLine('Statistics Bureau of Japan', '2024')}</div>
<div class="stat-card"><div class="stat-value">${escape(p.capital)}</div><div class="stat-label">Capital city</div>${sourceLine('Prefectural government', '2024')}</div>
</section>

<section class="panel"><h2>How ${escape(p.name)} compares</h2>
<p>${escape(p.name)}’s population against the ten largest prefectures:</p>
${horizontalBars(
  [...PREFECTURES].sort((a, b) => b.pop - a.pop).slice(0, 10).map((q) => ({
    label: q.name,
    value: q.pop,
    colour: q.name === p.name ? '#cf3d27' : '#1e2542',
  })),
  { unit: 'm' },
)}
${sourceLine('Statistics Bureau of Japan', '2024')}
<p><a href="#/prefectures">← Back to all 47 prefectures</a> · <a href="#/">Overview</a></p></section>`;
}

export function missing() {
  return `<section class="page-head"><h1>Not found</h1>
<p class="lede">There is no page at this address. <a href="#/">Back to the overview</a>.</p></section>`;
}
