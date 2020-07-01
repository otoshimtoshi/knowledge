const gulp = require('gulp');
// const $ = require('gulp-load-plugins');
const DIR = require('../conf').DIR;
const prettier = require('gulp-prettier');

// ==========================================================================
// task  https://prettier.io/docs/en/options.html
// ==========================================================================
gulp.task('prettier', () => {
  return gulp
    .src(`./${DIR.DEST}/**/*.html`)
    .pipe(prettier(option))
    .pipe(gulp.dest(`./${DIR.DEST}`));
});

// ==========================================================================
// config
// ==========================================================================
const option = {
  singleQuote: true,
  editorconfig: true,
};
