const gulp = require('gulp');
const $ = require('../plugins');
const DIR = require('../conf').DIR;
var fs = require('fs');
const ejs = require('gulp-ejs');

// ==========================================================================
// task
// ==========================================================================
gulp.task('ejs', function (done) {
  var pageIndex = [];
  for (var key in json.pages) {
    if (key !== 'index') {
      pageIndex.push(json.pages[key]);
    }
  }
  gulp
    .src(`./${DIR.SRC}/layout/top.ejs`)
    .pipe(ejs({ pageIndex }))
    .pipe($.rename(`index.html`))
    .pipe(gulp.dest(`./${DIR.DEST}`));

  for (var key in json.pages) {
    if (key !== 'index') {
      var pageData = json.pages[key];
      gulp
        .src(`./${DIR.SRC}/layout/${pageData.layout}.ejs`)
        .pipe(ejs({ pageData }))
        .pipe($.rename(`${pageData.id}.html`))
        .pipe(gulp.dest(`./${DIR.DEST}`));
    }
  }
  done();
});

gulp.task('replacehtml', function (done) {
  var pageIndex = [];
  for (var key in json.pages) {
    if (key !== 'index') {
      pageIndex.push(json.pages[key]);
    }
  }
  gulp
    .src(`./${DIR.SRC}/layout/top.ejs`)
    .pipe(ejs({ pageIndex }))
    .pipe($.rename(`index.html`))
    .pipe(gulp.dest(`./${DIR.BUILD}`));

  for (var key in json.pages) {
    if (key !== 'index') {
      var pageData = json.pages[key];
      gulp
        .src(`./${DIR.SRC}/layout/${pageData.layout}.ejs`)
        .pipe(ejs({ pageData }))
        .pipe($.rename(`${pageData.id}.html`))
        .pipe(gulp.dest(`./${DIR.BUILD}`));
    }
  }
  done();
});
// ==========================================================================
// config
// ==========================================================================
const json = JSON.parse(fs.readFileSync(`./${DIR.SRC}/data.json`));
