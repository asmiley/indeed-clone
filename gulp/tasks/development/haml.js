var gulp        = require('gulp');
var haml        = require('gulp-ruby-haml');

gulp.task('pages', function () {
  gulp.src('./src/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./app'));
});