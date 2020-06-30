const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').md;

// vendor https://github.com/trwolfe13/gulp-markdownit
const markdown = require('../gulp-markdown-it/index');

const md = require('markdown-it');
const footnote = require('markdown-it-footnote');
const mark = require('markdown-it-mark');
const addClass = require('gulp-markdown-it-addClass');

const hljs = require('highlight.js');

gulp.task('marked', () => {
  return gulp.src(conf.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe(markdown(config))
    .pipe($.rename(path => {
      path.dirname = path.dirname.replace('md', '.');
    }))
    .pipe(gulp.dest(conf.dest));
});

const options = {
  html: true,
  linkify: true,
  langPrefix: '',
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + '</code></pre>';
  },
  baseUrl: '/knoeledge',
  typographer: true
}

const config = {
  options: options,
  plugins: [ footnote, mark, addClass ]
}

