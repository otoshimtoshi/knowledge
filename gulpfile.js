const gulp = require('gulp');
const requireDir = require('require-dir');

const $ = require('./gulp/plugins');

requireDir('./gulp/tasks');

gulp.task('default', gulp.series(
  'cleanDest',
  gulp.parallel('marked','sass'),
  gulp.parallel('serve', 'watch'),
));

gulp.task('build', gulp.series(
  'cleanDest',
  gulp.parallel('marked','sass'),
  'cleanBuild',
  'replaceHtml',
  'cleanCss'
));