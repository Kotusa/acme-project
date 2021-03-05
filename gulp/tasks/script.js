const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps');
module.exports = function script() {
  return gulp
    .src('src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(plumber.stop())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/js/'));
};
