const gulp = require('gulp');
const conf = require('../conf').serve;
const browserSync = require('browser-sync');

// ==========================================================================
// task
// ==========================================================================
gulp.task('serve', () => {
  if (process.env.NODE_ENV == 'production') {
    browserSync(conf.build);
  } else {
    browserSync(conf.dest);
  }
});
