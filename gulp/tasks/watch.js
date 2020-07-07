const gulp = require('gulp');
const DIR = require('../conf').DIR;
const browserSync = require('browser-sync');

// ==========================================================================
// task
// ==========================================================================
gulp.task('watch', () => {
  gulp.watch([`./${DIR.SRC}/**/*.{scss,sass}`], gulp.series('sass', reload));
  gulp.watch([`./${DIR.SRC}/**/*.md`], gulp.series('marked', 'ejs', reload));
});

// ==========================================================================
// method
// ==========================================================================
const reload = (done) => {
  browserSync.reload();
  done();
};
