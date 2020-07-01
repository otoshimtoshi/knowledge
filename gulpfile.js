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
    gulp.parallel('ejs', 'sass'),
    gulp.parallel('serve', 'watch')
  )
);

// ==========================================================================
// npm run build => Perform the following tasks
// ==========================================================================
gulp.task(
  'build',
  gulp.series(
    'delDest',
    gulp.parallel('marked', 'sass'),
    'delBuild',
    'cleanCss'
  )
);
