import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

/**
 * Parse the color config of the installed Spruce CSS package:
 * the shared color variables, the $colors groups and the raw Sass source of the maps.
 */
export default function () {
  const require = createRequire(import.meta.url);
  const packageRoot = path.dirname(require.resolve('sprucecss/package.json'));
  const source = readFileSync(path.join(packageRoot, 'scss/config/_color.scss'), 'utf8');

  const sliceMap = (start, end) => source.slice(source.indexOf(start), source.indexOf(end)).trim();
  const colorsSource = sliceMap('$colors: () !default;', '$dark-colors: () !default;');
  const darkSource = sliceMap('$dark-color-background:', '\n$default-dark-colors: map.deep-merge') + '\n\n' +
    source.slice(source.indexOf('$default-dark-colors: () !default;')).trim();

  const shared = [...source.matchAll(/^\$(color-[a-z-]+): (.+) !default;$/gm)].map(([, name, value]) => ({ name, value }));
  const groups = [];
  let current = null;

  colorsSource.split('\n').forEach((line) => {
    const group = line.match(/^ {4}'([a-z-]+)': \($/);
    const color = line.match(/^ {6}'([a-z-]+)':\s+(.+),$/);

    if (group) {
      current = { name: group[1], colors: [] };
      groups.push(current);
    } else if (color && current) {
      current.colors.push({ name: color[1], value: color[2] });
    }
  });

  return { shared, groups, colorsSource, darkSource };
}
