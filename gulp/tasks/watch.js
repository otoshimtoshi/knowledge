const gulp = require('gulp');
const DIR = require('../conf').DIR;
const browserSync = require('browser-sync');

// ==========================================================================
// task
// ==========================================================================
gulp.task('watch', () => {
  gulp.watch([`./${DIR.SRC}/**/*.{scss,sass}`], gulp.series('sass', reload));
  gulp.watch([`./${DIR.SRC}/**/*.md`], gulp.series('marked', 'ejs', reload));
  gulp.watch([`./${DIR.SRC}/**/*.js`], gulp.series('replace', reload));
  gulp.watch(
    [`./${DIR.SRC}/**/*.json`],
    gulp.series(gulp.series('marked', 'ejs'), 'sass', reload)
  );
  gulp.watch([`./${DIR.SRC}/**/*.ejs`], gulp.series('ejs', reload));
});

// ==========================================================================
// method
// ==========================================================================
const reload = (done) => {
  browserSync.reload();
  done();
};
