const gulp = require('gulp');
const conf = require('../conf').del;
const del = require('del');

// ==========================================================================
// task
// ==========================================================================
gulp.task('delDest', (cb) => {
  del(conf.dest.path).then(() => {
    cb();
  });
});

gulp.task('delBuild', (cb) => {
  del(conf.build.path).then(() => {
    cb();
  });
});
