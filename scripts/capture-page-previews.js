/**
 * Capture the preview images of the page templates (src/img/pages/{name}.png).
 *
 * It needs a local Firefox and a built site served on PREVIEW_URL (default: http://localhost:8080):
 *   npx eleventy --serve   # in another terminal
 *   node scripts/capture-page-previews.js
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const baseUrl = process.env.PREVIEW_URL ?? 'http://localhost:8080';
const profile = mkdtempSync(path.join(os.tmpdir(), 'spruce-previews-'));
const pages = readdirSync(path.join(root, 'src/pages')).filter((file) => file.endsWith('.njk')).map((file) => file.replace(/\.njk$/, ''));

pages.forEach((name) => {
  const output = path.join(root, 'src/img/pages', `${name}.png`);

  execFileSync('firefox', ['--headless', '--no-remote', '--profile', profile, '--window-size=1440,900', '--screenshot', output, `${baseUrl}/pages/${name}/?capture`], { stdio: 'ignore', timeout: 120000 });
  console.log(`Captured ${name}`);
});
