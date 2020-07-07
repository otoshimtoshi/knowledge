const gulp = require('gulp');
const $ = require('gulp-load-plugins');
const conf = require('../conf').prettier;

// ==========================================================================
// task  https://prettier.io/docs/en/options.html
// ==========================================================================
gulp.task('prettier', () => {
  return gulp
    .src(conf.src)
    .pipe($.prettier(conf.option))
    .pipe(gulp.dest(conf.dest));
});
