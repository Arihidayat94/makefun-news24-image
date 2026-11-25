// News-image entry for the make.fun daily competition (Node 22, standard
// library only). The entry itself is entry.png, the front page image sitting
// next to this file. This program's only job is to hand that exact image to
// the grader: it reads the file and writes the same bytes to
// <output>/entry.png, where <output> is MAKEFUN_OUTPUT_DIR, or /output when
// the variable is not set. The judge grades the copied bytes, so the program
// never edits, re-encodes, or resizes the image.
//
// Local run:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function main() {
  const repoDir = dirname(fileURLToPath(import.meta.url));
  const sourceImage = join(repoDir, 'entry.png');
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const destination = join(outputDir, 'entry.png');

  // The output directory may not exist yet (the grader creates it, a local
  // run may not), so make sure it is there before writing.
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(destination, readFileSync(sourceImage));
  console.log(`Wrote ${destination}`);
}

main();
