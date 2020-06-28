const gulp = require('gulp');
const browserSync = require('browser-sync');

const $ = require('../plugins');
const DIR = require('../conf').DIR;

const reload = (done) => {
  browserSync.reload();
  done();
};

gulp.task('watch', () => {
  gulp.watch(
    [
      `./${DIR.SRC}/**/*.{scss,sass}`
    ],
    gulp.series('sass', reload)
  );

  gulp.watch(
    [
      `./${DIR.SRC}/**/*.md`
    ],
    gulp.series('marked',reload)
  );
});
