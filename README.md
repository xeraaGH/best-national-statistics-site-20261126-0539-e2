# Japan by the Numbers

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)
[![Rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/xeraaGH/best-national-statistics-site-20261126-0539-e2/rank.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)
[![Reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/xeraaGH/best-national-statistics-site-20261126-0539-e2/reward.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)

A national statistics site for Japan, built around its most distinctive data story: the world's oldest, shrinking population. **"The Oldest Country on Earth"** — population pyramid, depopulation timeline, life expectancy, births vs deaths — then the full sections a visitor needs, each reached by a link:

- **Overview** — key indicators at a glance, age-structure donut, a century of population rise and fall
- **Population & Ageing** — pyramid chart, births vs deaths, the long decline to 2100, and why it happened
- **Economy** — GDP, debt-to-GDP (251%), exports, unemployment, the yen
- **Daily Life** — work hours, housing prices, the Shinkansen, rice prices, convenience stores
- **Society & Safety** — crime, PISA school results vs the OECD, hospital beds, health
- **Prefectures** — all 47, sortable and searchable, click any prefecture for its figures

Every figure carries its source and year (Statistics Bureau of Japan, World Bank, OECD, IMF, MHLW, Ministry of Finance, 2022–2025). All charts are hand-drawn SVG in vanilla JavaScript — no framework, no network requests, small first load. The site is plain static files under `app/` and works offline on desktop and phone.

## Run it

```sh
node serve.ts   # serves app/ at http://localhost:8080
```

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `app/` and `screenshots/` to `/output` and writes `/output/dossier.json` with the vendored make.fun library.

## Layout

- `app/index.html` — shell, navigation, footer
- `app/style.css` — deep indigo + vermilion design, responsive
- `app/data.js` — every figure, with source and year
- `app/charts.js` — hand-drawn SVG charts (donut, pyramid, line, bars)
- `app/views.js` — one function per page
- `app/main.js` — hash router, prefecture table sorting and search
- `main.ts` — program/v1 entrypoint
- `vendor/makefun-frontend.ts` — the kit's copy, unchanged
