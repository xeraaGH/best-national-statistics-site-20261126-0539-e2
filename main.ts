// Japan by the Numbers — a national statistics site for Japan, handed in as
// a program/v1 entry (Node 22, standard library only). The site is plain
// static files under app/ (index.html, CSS and ES modules, no build step, no
// network requests); screenshots/ holds renders of the site taken in a real
// browser. This program copies app/ and screenshots/ from beside this file
// to /output and writes /output/dossier.json with the vendored make.fun
// library, which is the summary the judge reads: the screenshots, the first
// load's files and bytes, and the site's source. Leave
// vendor/makefun-frontend.ts untouched: the scorer requires dossier.json to
// be byte for byte what its own copy of that library writes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) {
  cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });
}

// The scorer's own caps: only text_max_bytes shapes the bytes; the rest refuse
// an entry the scorer would refuse (more than 4 screenshots or one over
// 256 KiB; more than 993 files and directories in app/ or 16 MiB of app files).
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
