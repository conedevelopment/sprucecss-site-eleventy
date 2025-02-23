import htmlmin from 'html-minifier';

export default function htmlMinTransform(value, outputPath) {
  if (outputPath && outputPath.includes('.html')) {
    return htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true
    });
  }

  return value;
}
