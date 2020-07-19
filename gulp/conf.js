// PATHファイル
const DIR = (module.exports.DIR = {
  PATH: '/knoeledge',
  SRC: 'src',
  DEST: 'dst',
  BUILD: 'docs',
});

module.exports.serve = {
  dest: {
    //tunnel: 'test',
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
    //tunnel: 'test',
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

module.exports.sass = {
  src: [
    `${DIR.SRC}/**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_*.{sass,scss}`,
  ],
  dest: `${DIR.DEST}/css`,
};

module.exports.replace = {
  src: [
    `${DIR.SRC}/**/*.js`,
    `!${DIR.SRC}/**/_**/*.js`,
    `!${DIR.SRC}/**/_*.js`,
  ],
  dest: `${DIR.DEST}/js`,
  build: `${DIR.BUILD}/js`,
};

module.exports.prettier = {
  src: [`${DIR.SRC}/**/*.html`],
  dest: `${DIR.DEST}/*.html`,
  option: {
    singleQuote: true,
    editorconfig: true,
  },
};

const footnote = require('markdown-it-footnote');
const mark = require('markdown-it-mark');
const addClass = require('gulp-markdown-it-addClass');
const hljs = require('highlight.js');

module.exports.marked = {
  src: [
    `${DIR.SRC}/**/*.md`,
    `!${DIR.SRC}/**/_**/*.md`,
    `!${DIR.SRC}/**/_*.md`,
  ],
  dest: `${DIR.SRC}/knowledge`,
  config: {
    options: {
      html: true,
      linkify: true,
      langPrefix: '',
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre class="hljs markdown-body"><code class="markdown-body">' +
              hljs.highlight(lang, code, true).value +
              '</code></pre>'
            );
          } catch (__) {}
        }
        return (
          '<pre class="markdown-body"><code class="markdown-body">' +
          code +
          '</code></pre>'
        );
      },
      baseUrl: DIR.PATH,
      typographer: true,
    },
    plugins: [footnote, mark, addClass],
  },
};

module.exports.cleanCss = {
  src: `${DIR.DEST}/css/main.css`,
  dest: `${DIR.BUILD}/css`,
};

module.exports.del = {
  dest: {
    path: [`${DIR.DEST}`],
  },
  build: {
    path: [`${DIR.BUILD}`],
  },
};
