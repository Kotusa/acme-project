var gulp = require('gulp');
var strip = require('gulp-strip-comments');

module.exports = function cleanstrip() {
  return gulp.src('src/js/**/*.js').pipe(strip()).pipe(gulp.dest('src/js/'));
};
