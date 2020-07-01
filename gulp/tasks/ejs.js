const gulp = require('gulp');
// const $ = require('../plugins');
const DIR = require('../conf').DIR;
var fs = require('fs');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

// ==========================================================================
// task
// ==========================================================================
gulp.task('ejs', function (done) {
  for (var key in json.pages) {
    var pageData = json.pages[key];
    pageData.path = key;
    const pagesID = pageData.id;
    gulp
      .src(`./${DIR.SRC}/layout/${pageData.layout}.ejs`)
      .pipe(ejs(pageData))
      .pipe(rename(`${pagesID}.html`))
      .pipe(gulp.dest(`./${DIR.DEST}`));
    done();
  }
});
// ==========================================================================
// config
// ==========================================================================
const option = { key: '.html' };

const json = JSON.parse(fs.readFileSync(`./${DIR.SRC}/data.json`));
