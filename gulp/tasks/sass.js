const gulp = require('gulp');
// const $ = require('gulp-load-plugins');
const DIR = require('../conf').DIR;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// ==========================================================================
// task
// ==========================================================================
gulp.task('sass', () => {
  return gulp
    .src(PATH.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: PATH.browsers,
        cascade: false,
      })
    )
    .pipe(
      rename((path) => {
        path.dirname = path.dirname.replace('css', '.');
      })
    )
    .pipe(gulp.dest(PATH.dest));
});

// ==========================================================================
// config
// ==========================================================================
const PATH = {
  src: [
    `${DIR.SRC}/**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_*.{sass,scss}`,
  ],
  dest: `${DIR.DEST}/css`,
};
