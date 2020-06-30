// 設定ファイル
// 対象パスやオプションを指定

const DIR = module.exports.DIR =  {
  PATH: '/knoeledge',
  SRC: 'src',
  DEST: 'dst',
  BUILD: 'docs'
};

module.exports.serve = {
  dest: {
    notify: false,
    startPath: `${DIR.PATH}/`,
    ghostMode: false,
    server: {
      baseDir: DIR.DEST,
      index: 'index.html',
      routes: {
        [DIR.PATH]: `${DIR.DEST}/`
      }
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
        [DIR.PATH]: `${DIR.BUILD}/`
      }
    },
    https: true,
  }
};

module.exports.md = {
  src: [
    `${DIR.SRC}/**/*.md`,
    `!${DIR.SRC}/**/_**/*.md`,
    `!${DIR.SRC}/**/_*.md`
  ],
  dest: `${DIR.DEST}`,
  opts: {
    pretty: true
  }
};

module.exports.sass = {
  src: [
    `${DIR.SRC}/**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_*.{sass,scss}`
  ],
  dest: `${DIR.DEST}/css`,
};

module.exports.replace = {
  html: {
    src: [
      `${DIR.DEST}/**/*.html`
    ],
    dest: `${DIR.BUILD}`,
    path: `${DIR.PATH}`
  }
};

module.exports.cleanCss = {
  src: `${DIR.DEST}/css/main.css`,
  dest: `${DIR.BUILD}/css`,
};

module.exports.clean = {
  dest: {
    path: [`${DIR.DEST}`]
  },
  build: {
    path: [`${DIR.BUILD}`]
  }
};
