var gulp        = require('gulp');
var image       = require('gulp-image');
var changed     = require('gulp-changed');
var config      = require('../../config').images;
 
gulp.task('images', function () {
  gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(image())
    .pipe(gulp.dest(config.dest));
});