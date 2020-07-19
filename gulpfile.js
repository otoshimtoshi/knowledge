const gulp = require('gulp');
const requireDir = require('require-dir');
requireDir('./gulp/tasks');

// ==========================================================================
// npm run dev => Perform the following tasks
// ==========================================================================
gulp.task(
  'default',
  gulp.series(
    'delDest',
    'marked',
    gulp.parallel('ejs', 'sass', 'replace'),
    gulp.parallel('serve', 'watch')
  )
);

// ==========================================================================
// npm run build => Perform the following tasks
// ==========================================================================
gulp.task(
  'build',
  gulp.series(
    'delBuild',
    'marked',
    gulp.parallel('replacehtml', 'sass', 'replace'),
    'cleanCss'
  )
);
