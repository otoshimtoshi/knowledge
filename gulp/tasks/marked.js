const gulp = require('gulp');
const $ = require('../plugins');
const conf = require('../conf').marked;
const markdown = require('../gulp-markdown-it/index');

// ==========================================================================
// task
// ==========================================================================
gulp.task('marked', () => {
  return gulp
    .src(conf.src)
    .pipe(
      $.plumber({
        errorHandler: $.notify.onError('<%= error.message %>'),
      })
    )
    .pipe(markdown(conf.config))
    .pipe(
      $.rename((path) => {
        path.dirname = path.dirname.replace('md', '.');
      })
    )
    .pipe(gulp.dest(conf.dest));
});
