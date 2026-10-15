import { minify } from 'html-minifier-terser';

export default async function htmlMinTransform(value, outputPath) {
  if (outputPath && outputPath.includes('.html')) {
    return await minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true
    });
  }

  return value;
}
