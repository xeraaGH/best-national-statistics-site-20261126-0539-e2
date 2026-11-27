// Japan by the Numbers — every figure the site shows, with its source and year.
// Figures are real, published numbers, rounded where the source rounds them.
// Sources: Statistics Bureau of Japan (SBJ), Ministry of Health, Labour and
// Welfare (MHLW), Ministry of Finance (MOF), Bank of Japan (BOJ), World Bank,
// OECD, IMF, UN World Population Prospects 2024, National Institute of
// Population and Social Security Research (NIPSSR).

export const SITE = {
  title: 'Japan by the Numbers',
  tagline: 'The oldest country on Earth, counted.',
  updated: 'November 2026',
};

export const HEADLINE = {
  population: { value: '123.9m', label: 'Population', year: '2024', source: 'Statistics Bureau of Japan' },
  medianAge: { value: '49.1', label: 'Median age (years)', year: '2024', source: 'World Bank / UN' },
  elderlyShare: { value: '29.3%', label: 'Aged 65 and over', year: '2024', source: 'Statistics Bureau of Japan' },
  lifeExpectancy: { value: '84.0', label: 'Life expectancy (years)', year: '2023', source: 'World Bank' },
  fertility: { value: '1.15', label: 'Total fertility rate', year: '2024', source: 'MHLW' },
  gdp: { value: '$4.0tn', label: 'GDP, nominal', year: '2024', source: 'IMF' },
};

// Age structure, 2024 — shares of the total population.
export const AGE_STRUCTURE = [
  { group: '0–14 years', share: 11.4, colour: '#3e6b8e' },
  { group: '15–64 years', share: 59.3, colour: '#1e2542' },
  { group: '65 years and over', share: 29.3, colour: '#cf3d27' },
];

// Population pyramid, 2024, millions by 5-year band (rounded to 0.1m).
export const PYRAMID = [
  { band: '0–4', male: 1.8, female: 1.7 },
  { band: '5–9', male: 2.1, female: 2.1 },
  { band: '10–14', male: 2.5, female: 2.4 },
  { band: '15–19', male: 2.8, female: 2.6 },
  { band: '20–24', male: 3.2, female: 3.1 },
  { band: '25–29', male: 3.6, female: 3.4 },
  { band: '30–34', male: 3.8, female: 3.6 },
  { band: '35–39', male: 4.0, female: 3.9 },
  { band: '40–44', male: 4.2, female: 4.1 },
  { band: '45–49', male: 4.6, female: 4.3 },
  { band: '50–54', male: 4.3, female: 4.2 },
  { band: '55–59', male: 4.0, female: 3.9 },
  { band: '60–64', male: 3.7, female: 3.8 },
  { band: '65–69', male: 3.9, female: 4.2 },
  { band: '70–74', male: 4.3, female: 4.9 },
  { band: '75–79', male: 3.5, female: 4.2 },
  { band: '80–84', male: 2.5, female: 3.3 },
  { band: '85–89', male: 1.4, female: 2.2 },
  { band: '90+', male: 0.7, female: 1.6 },
];

// Population in millions. 1920–2024 are census/estimates; 2030 onward are
// NIPSSR medium-variant projections.
export const POPULATION_TIMELINE = [
  { year: 1920, pop: 56.0, projected: false },
  { year: 1930, pop: 64.5, projected: false },
  { year: 1940, pop: 73.1, projected: false },
  { year: 1950, pop: 84.1, projected: false },
  { year: 1960, pop: 94.3, projected: false },
  { year: 1970, pop: 104.3, projected: false },
  { year: 1980, pop: 117.1, projected: false },
  { year: 1990, pop: 123.6, projected: false },
  { year: 2000, pop: 126.9, projected: false },
  { year: 2008, pop: 128.1, projected: false },
  { year: 2020, pop: 126.1, projected: false },
  { year: 2024, pop: 123.9, projected: false },
  { year: 2030, pop: 120.1, projected: true },
  { year: 2040, pop: 113.1, projected: true },
  { year: 2050, pop: 104.7, projected: true },
  { year: 2060, pop: 95.2, projected: true },
  { year: 2070, pop: 86.6, projected: true },
  { year: 2100, pop: 63.3, projected: true },
];

// Births and deaths, millions per year.
export const BIRTHS_DEATHS = [
  { year: 1973, births: 2.09, deaths: 0.71 },
  { year: 1980, births: 1.58, deaths: 0.72 },
  { year: 1990, births: 1.22, deaths: 0.82 },
  { year: 2000, births: 1.19, deaths: 0.96 },
  { year: 2010, births: 1.07, deaths: 1.20 },
  { year: 2020, births: 0.84, deaths: 1.38 },
  { year: 2024, births: 0.72, deaths: 1.62 },
];

export const POPULATION_FACTS = [
  { value: '128.1m', label: 'Peak population, 2008 — Japan has shrunk every year since', source: 'Statistics Bureau of Japan' },
  { value: '−0.9m', label: 'Natural decrease in 2024: 720,000 births against 1.62 million deaths', source: 'MHLW, 2024' },
  { value: '1 in 10', label: 'Japanese people are now aged 80 or over', source: 'Statistics Bureau of Japan, 2024' },
  { value: '2.8m', label: 'Foreign residents — a record high, about 2.3% of the population', source: 'Immigration Services Agency, 2024' },
];

// GDP, nominal, US$ trillion (IMF).
export const GDP_SERIES = [
  { year: 1990, gdp: 3.1 },
  { year: 2000, gdp: 4.9 },
  { year: 2010, gdp: 5.7 },
  { year: 2015, gdp: 4.4 },
  { year: 2020, gdp: 5.0 },
  { year: 2022, gdp: 4.3 },
  { year: 2024, gdp: 4.0 },
];

export const ECONOMY_FACTS = [
  { value: '$4.0tn', label: 'GDP, nominal — the world’s 4th-largest economy', year: '2024', source: 'IMF' },
  { value: '$32,300', label: 'GDP per person', year: '2024', source: 'IMF' },
  { value: '251%', label: 'Government debt to GDP — the highest of any advanced economy', year: '2024', source: 'IMF' },
  { value: '2.5%', label: 'Unemployment rate', year: '2024', source: 'Statistics Bureau of Japan' },
  { value: '2.7%', label: 'Consumer price inflation', year: '2024', source: 'Statistics Bureau of Japan' },
  { value: '¥152', label: 'Yen per US dollar, yearly average', year: '2024', source: 'Bank of Japan' },
];

// Exports, 2024, ¥ trillion (Ministry of Finance trade statistics).
export const EXPORTS = [
  { category: 'Motor vehicles', value: 17.8 },
  { category: 'Electrical machinery', value: 12.6 },
  { category: 'General machinery', value: 10.6 },
  { category: 'Chemicals', value: 9.6 },
  { category: 'Iron and steel', value: 3.8 },
];

export const TRADE = {
  exportsTotal: '¥107.9tn ($713bn)',
  balance: '¥−5.3tn deficit',
  note: 'Total exports of goods, 2024. Japan has run a goods-trade deficit in most years since 2011, as energy imports rose after the Fukushima disaster.',
  source: 'Ministry of Finance, 2024',
};

export const DAILY_LIFE = [
  { value: '1,626', label: 'Average hours worked per worker per year', year: '2023', source: 'OECD' },
  { value: '62%', label: 'Of paid annual leave actually taken', year: '2023', source: 'MHLW' },
  { value: '¥82.9m', label: 'Average price of a new condo in Tokyo’s 23 wards', year: '2024', source: 'Real Estate Economic Institute' },
  { value: '3,100 km', label: 'Shinkansen high-speed rail network, fastest services 320 km/h', year: '2024', source: 'MLIT' },
  { value: '3.6m', label: 'Passengers a day at Shinjuku Station — the world’s busiest', year: '2023', source: 'JR East' },
  { value: '¥4,214', label: 'Price of a 5 kg bag of rice — double the 2023 price', year: 'May 2025', source: 'Statistics Bureau of Japan, CPI' },
  { value: '56,000', label: 'Convenience stores nationwide', year: '2024', source: 'Japan Franchise Association' },
  { value: '4.0m', label: 'Vending machines — about one for every 31 people', year: '2023', source: 'Japan Vending System Manufacturers Association' },
  { value: '39%', label: 'Of payments made cashlessly', year: '2023', source: 'METI' },
];

export const SOCIETY = [
  { value: '0.2', label: 'Homicides per 100,000 people — among the lowest in the world', year: '2023', source: 'UNODC' },
  { value: '703,000', label: 'Penal-code offences reported', year: '2024', source: 'National Police Agency' },
  { value: '536', label: 'PISA maths score (OECD average: 472)', year: '2022', source: 'OECD PISA' },
  { value: '65%', label: 'Of 25–34-year-olds hold a tertiary degree', year: '2024', source: 'OECD' },
  { value: '12.6', label: 'Hospital beds per 1,000 people — the most in the OECD', year: '2022', source: 'OECD' },
  { value: '2.6', label: 'Doctors per 1,000 people', year: '2022', source: 'OECD' },
  { value: '17.4', label: 'Suicides per 100,000 people', year: '2023', source: 'MHLW' },
  { value: '1961', label: 'Year universal health insurance began — everyone is covered', year: '', source: 'MHLW' },
  { value: '98%', label: 'Of households connected to tap water', year: '2023', source: 'Ministry of Health, Labour and Welfare' },
];

// PISA 2022 scores (OECD averages in brackets).
export const PISA = [
  { subject: 'Mathematics', japan: 536, oecd: 472 },
  { subject: 'Reading', japan: 516, oecd: 476 },
  { subject: 'Science', japan: 547, oecd: 485 },
];

// The 47 prefectures. Population in millions (2024 estimate, Statistics Bureau
// of Japan), area in km², share aged 65+ in percent (2024, rounded).
// "note" is one distinctive fact about the prefecture.
export const PREFECTURES = [
  { name: 'Hokkaido', jp: '北海道', capital: 'Sapporo', pop: 5.1, area: 83424, elderly: 32.5, note: 'Japan’s breadbasket — about half of the country’s milk comes from here.' },
  { name: 'Aomori', jp: '青森県', capital: 'Aomori', pop: 1.2, area: 9646, elderly: 35.6, note: 'Grows about half of Japan’s apples.' },
  { name: 'Iwate', jp: '岩手県', capital: 'Morioka', pop: 1.2, area: 15275, elderly: 34.6, note: 'Home of the Morioka Sansa Odori, one of Japan’s biggest taiko festivals.' },
  { name: 'Miyagi', jp: '宮城県', capital: 'Sendai', pop: 2.3, area: 7282, elderly: 29.7, note: 'Sendai, the “City of Trees”, anchors the Tohoku region.' },
  { name: 'Akita', jp: '秋田県', capital: 'Akita', pop: 0.9, area: 11638, elderly: 38.9, note: 'The oldest prefecture in Japan — nearly 4 in 10 residents are 65 or over.' },
  { name: 'Yamagata', jp: '山形県', capital: 'Yamagata', pop: 1.0, area: 9323, elderly: 35.8, note: 'Famous for cherries and the snow monsters of Mount Zao.' },
  { name: 'Fukushima', jp: '福島県', capital: 'Fukushima', pop: 1.8, area: 13784, elderly: 32.6, note: 'Rebuilding since 2011; its peaches are prized nationwide.' },
  { name: 'Ibaraki', jp: '茨城県', capital: 'Mito', pop: 2.8, area: 6097, elderly: 30.1, note: 'Japan’s top natto producer.' },
  { name: 'Tochigi', jp: '栃木県', capital: 'Utsunomiya', pop: 1.9, area: 6408, elderly: 30.0, note: 'Nikko’s shrines are a UNESCO World Heritage site.' },
  { name: 'Gunma', jp: '群馬県', capital: 'Maebashi', pop: 1.9, area: 6362, elderly: 30.7, note: 'Onsen country — Kusatsu is one of Japan’s most famous hot springs.' },
  { name: 'Saitama', jp: '埼玉県', capital: 'Saitama', pop: 7.3, area: 3798, elderly: 27.6, note: 'More residents commute into Tokyo than from any other prefecture.' },
  { name: 'Chiba', jp: '千葉県', capital: 'Chiba', pop: 6.3, area: 5158, elderly: 28.3, note: 'Home to Narita Airport and Tokyo Disney Resort.' },
  { name: 'Tokyo', jp: '東京都', capital: 'Tokyo', pop: 14.1, area: 2194, elderly: 23.2, note: 'The capital, and the largest prefecture by population.' },
  { name: 'Kanagawa', jp: '神奈川県', capital: 'Yokohama', pop: 9.2, area: 2416, elderly: 26.0, note: 'Yokohama is Japan’s second-largest city.' },
  { name: 'Niigata', jp: '新潟県', capital: 'Niigata', pop: 2.1, area: 12584, elderly: 33.0, note: 'Japan’s snowiest big city, and home of Koshihikari rice.' },
  { name: 'Toyama', jp: '富山県', capital: 'Toyama', pop: 1.0, area: 4248, elderly: 32.4, note: 'The Alpine Route’s snow walls rise 20 metres high each spring.' },
  { name: 'Ishikawa', jp: '石川県', capital: 'Kanazawa', pop: 1.1, area: 4186, elderly: 30.2, note: 'Kanazawa’s Kenrokuen is one of Japan’s three great gardens.' },
  { name: 'Fukui', jp: '福井県', capital: 'Fukui', pop: 0.7, area: 4190, elderly: 30.9, note: 'Japan’s eyeglass capital — most domestic frames are made in Sabae.' },
  { name: 'Yamanashi', jp: '山梨県', capital: 'Kofu', pop: 0.8, area: 4465, elderly: 31.4, note: 'Views of Mount Fuji and the most sunshine hours in Japan.' },
  { name: 'Nagano', jp: '長野県', capital: 'Nagano', pop: 2.0, area: 13562, elderly: 32.1, note: 'Host of the 1998 Winter Olympics; Japan’s highest average altitude.' },
  { name: 'Gifu', jp: '岐阜県', capital: 'Gifu', pop: 1.9, area: 10621, elderly: 30.5, note: 'Cormorant fishing on the Nagara River has run for 1,300 years.' },
  { name: 'Shizuoka', jp: '静岡県', capital: 'Shizuoka', pop: 3.5, area: 7777, elderly: 30.9, note: 'Grows about 40% of Japan’s green tea, below Mount Fuji’s southern face.' },
  { name: 'Aichi', jp: '愛知県', capital: 'Nagoya', pop: 7.5, area: 5173, elderly: 25.9, note: 'Japan’s manufacturing heart — home of Toyota.' },
  { name: 'Mie', jp: '三重県', capital: 'Tsu', pop: 1.7, area: 5774, elderly: 30.0, note: 'Ise Grand Shrine, Japan’s holiest Shinto site.' },
  { name: 'Shiga', jp: '滋賀県', capital: 'Otsu', pop: 1.4, area: 4017, elderly: 27.3, note: 'Lake Biwa, Japan’s largest lake, covers a sixth of the prefecture.' },
  { name: 'Kyoto', jp: '京都府', capital: 'Kyoto', pop: 2.5, area: 4612, elderly: 29.6, note: 'The old capital: 17 UNESCO sites and more than 1,600 temples.' },
  { name: 'Osaka', jp: '大阪府', capital: 'Osaka', pop: 8.8, area: 1905, elderly: 28.7, note: 'Japan’s kitchen — takoyaki, okonomiyaki and the nation’s merchants.' },
  { name: 'Hyogo', jp: '兵庫県', capital: 'Kobe', pop: 5.3, area: 8401, elderly: 30.2, note: 'Kobe beef and the hot springs of Arima.' },
  { name: 'Nara', jp: '奈良県', capital: 'Nara', pop: 1.3, area: 3691, elderly: 31.5, note: 'Japan’s first permanent capital; deer roam Nara Park freely.' },
  { name: 'Wakayama', jp: '和歌山県', capital: 'Wakayama', pop: 0.9, area: 4726, elderly: 34.0, note: 'The sacred mountains of Koyasan, a UNESCO site.' },
  { name: 'Tottori', jp: '鳥取県', capital: 'Tottori', pop: 0.5, area: 3507, elderly: 33.9, note: 'Japan’s least populous prefecture — and its only sand dunes.' },
  { name: 'Shimane', jp: '島根県', capital: 'Matsue', pop: 0.6, area: 6708, elderly: 35.1, note: 'Izumo Taisha, one of Japan’s oldest and grandest shrines.' },
  { name: 'Okayama', jp: '岡山県', capital: 'Okayama', pop: 1.9, area: 7114, elderly: 30.4, note: 'The “Land of Sunshine” — among Japan’s driest prefectures.' },
  { name: 'Hiroshima', jp: '広島県', capital: 'Hiroshima', pop: 2.8, area: 8480, elderly: 29.6, note: 'The Peace Memorial is a UNESCO site; the bay is famous for oysters.' },
  { name: 'Yamaguchi', jp: '山口県', capital: 'Yamaguchi', pop: 1.3, area: 6111, elderly: 34.4, note: 'The western gateway: Shimonoseki’s straits face Korea.' },
  { name: 'Tokushima', jp: '徳島県', capital: 'Tokushima', pop: 0.7, area: 4147, elderly: 34.4, note: 'The Awa Odori dance festival draws over a million visitors.' },
  { name: 'Kagawa', jp: '香川県', capital: 'Takamatsu', pop: 0.9, area: 1877, elderly: 32.3, note: 'Japan’s smallest prefecture — and its udon capital.' },
  { name: 'Ehime', jp: '愛媛県', capital: 'Matsuyama', pop: 1.3, area: 5676, elderly: 33.2, note: 'Japan’s top mandarin producer; Dogo Onsen is 3,000 years old.' },
  { name: 'Kochi', jp: '高知県', capital: 'Kochi', pop: 0.7, area: 7104, elderly: 36.0, note: 'The Shimanto, Japan’s clearest river, runs through it.' },
  { name: 'Fukuoka', jp: '福岡県', capital: 'Fukuoka', pop: 5.1, area: 4986, elderly: 28.3, note: 'Gateway to Asia — Hakata ramen and the Dazaifu shrine.' },
  { name: 'Saga', jp: '佐賀県', capital: 'Saga', pop: 0.8, area: 2441, elderly: 30.6, note: 'Arita ware — Japan’s first porcelain, fired since 1616.' },
  { name: 'Nagasaki', jp: '長崎県', capital: 'Nagasaki', pop: 1.3, area: 4131, elderly: 32.6, note: 'Japan’s only open port in the Edo period; a UNESCO heritage city.' },
  { name: 'Kumamoto', jp: '熊本県', capital: 'Kumamoto', pop: 1.7, area: 7409, elderly: 30.9, note: 'Kumamon’s home; Mount Aso is one of the world’s largest calderas.' },
  { name: 'Oita', jp: '大分県', capital: 'Oita', pop: 1.1, area: 6341, elderly: 33.3, note: 'Japan’s onsen capital — more hot-spring sources than anywhere else.' },
  { name: 'Miyazaki', jp: '宮崎県', capital: 'Miyazaki', pop: 1.1, area: 7735, elderly: 32.8, note: 'Surf beaches and the most sunshine on the Pacific coast.' },
  { name: 'Kagoshima', jp: '鹿児島県', capital: 'Kagoshima', pop: 1.6, area: 9187, elderly: 32.3, note: 'Sakurajima volcano smokes over the bay; Satsuma sweet potatoes.' },
  { name: 'Okinawa', jp: '沖縄県', capital: 'Naha', pop: 1.5, area: 2281, elderly: 23.5, note: 'Japan’s youngest prefecture by age — and its longest-lived people.' },
];

export function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function prefectureBySlug(slug) {
  return PREFECTURES.find((p) => slugify(p.name) === slug);
}

export function density(p) {
  return Math.round((p.pop * 1e6) / p.area);
}
