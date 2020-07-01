const gulp = require('gulp');
// const $ = require('../plugins');
const DIR = require('../conf').DIR;
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

// ==========================================================================
// task
// ==========================================================================
gulp.task('cleanCss', () => {
  return gulp
    .src(PATH.src)
    .pipe(cleanCss())
    .pipe(rename(option))
    .pipe(gulp.dest(PATH.dest));
});

// ==========================================================================
// config
// ==========================================================================
const PATH = {
  src: `${DIR.DEST}/css/main.css`,
  dest: `${DIR.BUILD}/css`,
};

const option = { suffix: '.min' };
