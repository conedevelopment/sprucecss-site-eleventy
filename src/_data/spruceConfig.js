import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

/**
 * Return the source of the Spruce CSS config files (without the @use lines),
 * so the documentation always shows the defaults of the installed version.
 */
export default function () {
  const require = createRequire(import.meta.url);
  const configRoot = path.join(path.dirname(require.resolve('sprucecss/package.json')), 'scss/config');
  const read = (file) => readFileSync(path.join(configRoot, file), 'utf8')
    .split('\n')
    .filter((line) => !line.startsWith('@use') && !line.startsWith('@forward'))
    .join('\n')
    .trim();

  const files = {
    breakpoint: '_breakpoint.scss',
    button: '_button.scss',
    details: '_details.scss',
    dialog: '_dialog.scss',
    display: '_display.scss',
    divider: '_divider.scss',
    escaping: '_escaping-characters.scss',
    formCheck: 'form/_check.scss',
    formControl: 'form/_control.scss',
    formDescription: 'form/_description.scss',
    formFieldset: 'form/_fieldset.scss',
    formFile: 'form/_file.scss',
    formGroup: 'form/_group.scss',
    formIcon: 'form/_icon.scss',
    formLabel: 'form/_label.scss',
    formRange: 'form/_range.scss',
    formRow: 'form/_row.scss',
    formSelect: 'form/_select.scss',
    formSwitch: 'form/_switch.scss',
    generator: '_generator.scss',
    layout: '_layout.scss',
    media: '_media.scss',
    print: '_print.scss',
    progress: '_progress.scss',
    shadow: '_shadow.scss',
    spacer: '_spacer.scss',
    table: '_table.scss',
    transition: '_transition.scss',
    typography: '_typography.scss',
    zIndex: '_z-index.scss'
  };

  return Object.fromEntries(Object.entries(files).map(([key, file]) => [key, read(file)]));
}
