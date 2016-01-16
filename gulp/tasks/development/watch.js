var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {

  gulp.watch(config.haml,   ['pages']);
  gulp.watch(config.sass,    ['sass']);
  gulp.watch(config.scripts, ['scripts', 'jshint']);
  gulp.watch(config.images,  ['images']);
});
