const gulp = require('gulp');
const $ = require('../plugins');
const conf = require('../conf').replace;

gulp.task('replace', () => {
  if (process.env.NODE_ENV === 'development') {
    return gulp
      .src(conf.src)
      .pipe(
        $.rename((path) => {
          path.dirname = path.dirname.replace('js', '.');
        })
      )
      .pipe(gulp.dest(conf.dest));
  } else {
    return gulp
      .src(conf.src)
      .pipe(
        $.rename((path) => {
          path.dirname = path.dirname.replace('js', '.');
        })
      )
      .pipe(gulp.dest(conf.build));
  }
});
