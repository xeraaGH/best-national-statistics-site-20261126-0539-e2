// Hand-drawn SVG charts for Japan by the Numbers. No chart library: every
// chart is built from the data in data.js and rendered as inline SVG, so the
// site loads no framework and no network request.

const INK = '#1e2542';
const VERMILION = '#cf3d27';
const BLUE = '#3e6b8e';
const GOLD = '#c9a227';
const GRID = '#e3ddcf';
const MUTED = '#5b6178';

function svgOpen(width, height, label) {
  return `<svg viewBox="0 0 ${width} ${height}" width="100%" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">`;
}

// Donut chart of the age structure: three slices with a centre label.
export function ageDonut(parts, size = 260) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 14;
  const inner = r - 34;
  const total = parts.reduce((s, p) => s + p.share, 0);
  let angle = -90;
  let slices = '';
  for (const p of parts) {
    const sweep = (p.share / total) * 360;
    const a0 = (angle * Math.PI) / 180;
    const a1 = ((angle + sweep) * Math.PI) / 180;
    const large = sweep > 180 ? 1 : 0;
    const x0 = cx + r * Math.cos(a0);
    const y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const xi1 = cx + inner * Math.cos(a1);
    const yi1 = cy + inner * Math.sin(a1);
    const xi0 = cx + inner * Math.cos(a0);
    const yi0 = cy + inner * Math.sin(a0);
    slices += `<path d="M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} L ${xi1.toFixed(1)} ${yi1.toFixed(1)} A ${inner} ${inner} 0 ${large} 0 ${xi0.toFixed(1)} ${yi0.toFixed(1)} Z" fill="${p.colour}"/>`;
    angle += sweep;
  }
  const legend = parts
    .map(
      (p) =>
        `<div class="legend-item"><span class="swatch" style="background:${p.colour}"></span>${p.group} — <strong>${p.share}%</strong></div>`,
    )
    .join('');
  return `<div class="donut-wrap">${svgOpen(size, size, 'Age structure donut chart')}${slices}
<text x="${cx}" y="${cy - 6}" text-anchor="middle" class="donut-centre-big">29.3%</text>
<text x="${cx}" y="${cy + 16}" text-anchor="middle" class="donut-centre-small">aged 65+</text>
</svg><div class="legend">${legend}</div></div>`;
}

// Population pyramid: men to the left, women to the right.
export function populationPyramid(bands) {
  const width = 640;
  const rowH = 20;
  const height = bands.length * rowH + 52;
  const centre = width / 2;
  const maxVal = Math.max(...bands.map((b) => Math.max(b.male, b.female)));
  const barStart = 110;
  const scale = (centre - barStart) / maxVal;
  let rows = '';
  bands.forEach((b, i) => {
    const y = 34 + i * rowH;
    const mw = b.male * scale;
    const fw = b.female * scale;
    rows += `<text x="52" y="${y + 4}" text-anchor="end" class="chart-label">${b.band}</text>`;
    rows += `<rect x="${(centre - mw).toFixed(1)}" y="${y - 7}" width="${mw.toFixed(1)}" height="14" fill="${BLUE}"><title>Men ${b.band}: ${b.male} million</title></rect>`;
    rows += `<rect x="${centre}" y="${y - 7}" width="${fw.toFixed(1)}" height="14" fill="${VERMILION}"><title>Women ${b.band}: ${b.female} million</title></rect>`;
    rows += `<text x="${centre - mw - 4}" y="${y + 4}" text-anchor="end" class="chart-value">${b.male.toFixed(1)}</text>`;
    rows += `<text x="${centre + fw + 4}" y="${y + 4}" class="chart-value">${b.female.toFixed(1)}</text>`;
  });
  return `${svgOpen(width, height, 'Population pyramid of Japan, 2024, in millions')}
<text x="${centre - 120}" y="16" text-anchor="middle" class="chart-heading">Men</text>
<text x="${centre + 120}" y="16" text-anchor="middle" class="chart-heading">Women</text>
<line x1="${centre}" y1="26" x2="${centre}" y2="${height - 18}" stroke="${GRID}" stroke-width="1"/>
${rows}
<text x="${centre}" y="${height - 2}" text-anchor="middle" class="chart-note">Millions of people by 5-year age band, 2024 (Statistics Bureau of Japan, rounded)</text>
</svg>`;
}

// Line chart with an optional projected (dashed) tail.
export function lineChart(points, opts) {
  const { width = 640, height = 300, yLabel = '', max = null, min = 0 } = opts || {};
  const padL = 44;
  const padR = 14;
  const padT = 18;
  const padB = 30;
  const lo = min;
  const hi = max ?? Math.ceil(Math.max(...points.map((p) => p.y)) * 1.08);
  const x = (i) => padL + ((width - padL - padR) * i) / (points.length - 1);
  const y = (v) => padT + ((height - padT - padB) * (hi - v)) / (hi - lo);
  const observed = points.filter((p) => !p.projected);
  const projected = points.filter((p) => p.projected);
  const line = (pts) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(points.indexOf(p)).toFixed(1)} ${y(p.y).toFixed(1)}`).join(' ');
  const gridTicks = 4;
  let grid = '';
  for (let i = 0; i <= gridTicks; i++) {
    const v = lo + ((hi - lo) * i) / gridTicks;
    const gy = y(v);
    grid += `<line x1="${padL}" y1="${gy.toFixed(1)}" x2="${width - padR}" y2="${gy.toFixed(1)}" stroke="${GRID}" stroke-width="1"/><text x="${padL - 6}" y="${(gy + 4).toFixed(1)}" text-anchor="end" class="chart-label">${Math.round(v)}</text>`;
  }
  const tail = [observed[observed.length - 1], ...projected];
  const labels = points
    .filter((p, i) => i % 3 === 0 || i === points.length - 1)
    .map((p) => `<text x="${x(points.indexOf(p)).toFixed(1)}" y="${height - 8}" text-anchor="middle" class="chart-label">${p.x}</text>`)
    .join('');
  const peak = observed.reduce((a, b) => (b.y > a.y ? b : a));
  return `${svgOpen(width, height, 'Line chart')}
${grid}
<path d="${line(observed)}" fill="none" stroke="${INK}" stroke-width="2.5"/>
<path d="${line(tail)}" fill="none" stroke="${VERMILION}" stroke-width="2.5" stroke-dasharray="6 4"/>
${points.map((p) => `<circle cx="${x(points.indexOf(p)).toFixed(1)}" cy="${y(p.y).toFixed(1)}" r="3" fill="${p.projected ? VERMILION : INK}"><title>${p.x}: ${p.y} ${yLabel}${p.projected ? ' (projected)' : ''}</title></circle>`).join('')}
<text x="${x(points.indexOf(peak)).toFixed(1)}" y="${(y(peak.y) - 10).toFixed(1)}" text-anchor="middle" class="chart-value">Peak ${peak.y} (${peak.x})</text>
${labels}
<text x="${padL}" y="12" class="chart-note">${yLabel ? `(${yLabel})` : ''} Solid: recorded · Dashed: projection</text>
</svg>`;
}

// Grouped bars: births vs deaths by year.
export function birthsDeathsBars(rows) {
  const width = 640;
  const height = 300;
  const padL = 44;
  const padR = 14;
  const padT = 24;
  const padB = 30;
  const maxV = 2.2;
  const y = (v) => padT + ((height - padT - padB) * (maxV - v)) / maxV;
  const slot = (width - padL - padR) / rows.length;
  const barW = Math.min(34, slot / 3);
  let bars = '';
  rows.forEach((r, i) => {
    const cx = padL + slot * i + slot / 2;
    bars += `<rect x="${(cx - barW - 3).toFixed(1)}" y="${y(r.births).toFixed(1)}" width="${barW}" height="${(y(0) - y(r.births)).toFixed(1)}" fill="${BLUE}"><title>Births ${r.year}: ${r.births} million</title></rect>`;
    bars += `<rect x="${(cx + 3).toFixed(1)}" y="${y(r.deaths).toFixed(1)}" width="${barW}" height="${(y(0) - y(r.deaths)).toFixed(1)}" fill="${VERMILION}"><title>Deaths ${r.year}: ${r.deaths} million</title></rect>`;
    bars += `<text x="${cx}" y="${height - 8}" text-anchor="middle" class="chart-label">${r.year}</text>`;
    bars += `<text x="${cx}" y="${(y(Math.max(r.births, r.deaths)) - 6).toFixed(1)}" text-anchor="middle" class="chart-value">${(r.deaths - r.births).toFixed(2)}m gap</text>`;
  });
  let grid = '';
  for (let v = 0; v <= 2; v += 0.5) {
    grid += `<line x1="${padL}" y1="${y(v).toFixed(1)}" x2="${width - padR}" y2="${y(v).toFixed(1)}" stroke="${GRID}" stroke-width="1"/><text x="${padL - 6}" y="${(y(v) + 4).toFixed(1)}" text-anchor="end" class="chart-label">${v.toFixed(1)}</text>`;
  }
  return `${svgOpen(width, height, 'Births versus deaths per year, in millions')}
${grid}${bars}
<text x="${padL}" y="12" class="chart-note">Millions per year — blue: births, vermilion: deaths (MHLW)</text>
</svg>`;
}

// Horizontal bars for ranked lists (exports, top prefectures).
export function horizontalBars(items, opts) {
  const { width = 640, unit = '', max = null } = opts || {};
  const rowH = 30;
  const height = items.length * rowH + 16;
  const padL = 150;
  const hi = max ?? Math.max(...items.map((i) => i.value));
  let rows = '';
  items.forEach((item, i) => {
    const y = 8 + i * rowH;
    const w = ((width - padL - 64) * item.value) / hi;
    rows += `<text x="${padL - 8}" y="${y + 15}" text-anchor="end" class="chart-label">${item.label}</text>`;
    rows += `<rect x="${padL}" y="${y}" width="${w.toFixed(1)}" height="18" fill="${item.colour || INK}"><title>${item.label}: ${item.value}${unit}</title></rect>`;
    rows += `<text x="${padL + w + 6}" y="${y + 15}" class="chart-value">${item.value}${unit}</text>`;
  });
  return `${svgOpen(width, height, 'Horizontal bar chart')}${rows}</svg>`;
}

// Paired bars: Japan vs OECD average (PISA).
export function pairedBars(rows, opts) {
  const { width = 640, unit = '' } = opts || {};
  const rowH = 44;
  const height = rows.length * rowH + 26;
  const padL = 110;
  const maxV = 600;
  let out = '';
  rows.forEach((r, i) => {
    const y = 10 + i * rowH;
    const wJ = ((width - padL - 70) * r.japan) / maxV;
    const wO = ((width - padL - 70) * r.oecd) / maxV;
    out += `<text x="${padL - 8}" y="${y + 12}" text-anchor="end" class="chart-label">${r.subject}</text>`;
    out += `<rect x="${padL}" y="${y}" width="${wJ.toFixed(1)}" height="14" fill="${INK}"><title>Japan ${r.subject}: ${r.japan}</title></rect>`;
    out += `<text x="${padL + wJ + 6}" y="${y + 12}" class="chart-value">${r.japan}</text>`;
    out += `<rect x="${padL}" y="${y + 18}" width="${wO.toFixed(1)}" height="14" fill="#b9b3a4"><title>OECD average ${r.subject}: ${r.oecd}</title></rect>`;
    out += `<text x="${padL + wO + 6}" y="${y + 30}" class="chart-value">${r.oecd}</text>`;
  });
  return `${svgOpen(width, height, 'Japan versus OECD average, PISA 2022')}${out}
<text x="${padL}" y="${height - 4}" class="chart-note">Dark: Japan · Grey: OECD average (${unit})</text>
</svg>`;
}
