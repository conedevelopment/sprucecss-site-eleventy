import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

/**
 * Read the style presets (name, label, description) from the installed Spruce CSS package,
 * so the switchers and the docs always list the presets of the current version.
 */
export default function () {
  const require = createRequire(import.meta.url);
  const packageRoot = path.dirname(require.resolve('sprucecss/package.json'));
  const source = readFileSync(path.join(packageRoot, 'scss/config/_style.scss'), 'utf8');
  const pattern = /^ {2}'([a-z-]+)': \(\n {4}'label': '([^']+)',\n {4}'description': '([^']+)',/gm;
  const presets = [];
  let match;

  while ((match = pattern.exec(source)) !== null) {
    presets.push({ name: match[1], label: match[2], description: match[3] });
  }

  return presets;
}
