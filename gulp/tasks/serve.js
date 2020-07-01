const gulp = require('gulp');
// const $ = require('../plugins');
const DIR = require('../conf').DIR;
const browserSync = require('browser-sync').create();

// ==========================================================================
// task
// ==========================================================================
gulp.task('serve', () => {
  if (process.env.NODE_ENV == 'production') {
    browserSync.init(option.build);
  } else {
    browserSync.init(option.dest);
  }
});

// ==========================================================================
// config
// ==========================================================================
const option = {
  dest: {
    notify: false,
    startPath: `${DIR.PATH}/`,
    ghostMode: false,
    server: {
      baseDir: DIR.DEST,
      index: 'index.html',
      routes: {
        [DIR.PATH]: `${DIR.DEST}/`,
      },
    },
    https: true,
  },
  build: {
    notify: false,
    startPath: `${DIR.PATH}/`,
    ghostMode: false,
    server: {
      baseDir: DIR.BUILD,
      index: 'index.html',
      routes: {
        [DIR.PATH]: `${DIR.BUILD}/`,
      },
    },
    https: true,
  },
};
