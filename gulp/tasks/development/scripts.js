var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../../config').optimize.js;

/**
 * Copy and minimize JS files
 */
gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(uglify(config.options))
    .pipe(gulp.dest(config.dest))
});