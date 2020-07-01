const gulp = require('gulp');
// const $ = require('../plugins');
const DIR = require('../conf').DIR;

const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
// vendor https://github.com/trwolfe13/gulp-markdownit
const markdown = require('../gulp-markdown-it/index');
const footnote = require('markdown-it-footnote');
const mark = require('markdown-it-mark');
const addClass = require('gulp-markdown-it-addClass');
const hljs = require('highlight.js');

// ==========================================================================
// task
// ==========================================================================
gulp.task('marked', () => {
  return gulp
    .src(PATH.src)
    .pipe(
      plumber({
        errorHandler: notify.onError('<%= error.message %>'),
      })
    )
    .pipe(markdown(config))
    .pipe(
      rename((path) => {
        path.dirname = path.dirname.replace('md', '.');
      })
    )
    .pipe(gulp.dest(`${DIR.SRC}/knowledge`));
});

// ==========================================================================
// config
// ==========================================================================
const PATH = {
  src: [
    `${DIR.SRC}/**/*.md`,
    `!${DIR.SRC}/**/_**/*.md`,
    `!${DIR.SRC}/**/_*.md`,
  ],
  dest: `${DIR.DEST}`,
};

// marked options
const options = {
  html: true,
  linkify: true,
  langPrefix: '',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
        );
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + '</code></pre>';
  },
  baseUrl: '/knoeledge',
  typographer: true,
};

// marked config
const config = {
  options: options,
  plugins: [footnote, mark, addClass],
};
