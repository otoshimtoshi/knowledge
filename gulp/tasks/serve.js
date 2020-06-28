const gulp = require('gulp');
const browserSync = require('browser-sync');

const conf = require('../conf').serve;

gulp.task('serve',()=> {
  if (process.env.NODE_ENV == 'production') {
    browserSync(conf.build);
  } else {
    browserSync(conf.dest);
  }
});
