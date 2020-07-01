const gulp = require('gulp');
// const $ = require('../plugins');
const DIR = require('../conf').DIR;
const del = require('del');

// ==========================================================================
// task
// ==========================================================================
gulp.task('delDest', (cb) => {
  del(PATH.dest.path).then(() => {
    cb();
  });
});

gulp.task('delBuild', (cb) => {
  del(PATH.build.path).then(() => {
    cb();
  });
});

// ==========================================================================
// config
// ==========================================================================
const PATH = {
  dest: {
    path: [`${DIR.DEST}`],
  },
  build: {
    path: [`${DIR.BUILD}`],
  },
};
