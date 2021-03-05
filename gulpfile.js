const gulp = require('gulp'),
  serve = require('./gulp/tasks/serve'),
  htmlConvert = require('./gulp/tasks/htmlConvert'),
  styles = require('./gulp/tasks/styles'),
  script = require('./gulp/tasks/script'),
  images = require('./gulp/tasks/images'),
  sprite = require('./gulp/tasks/sprite'),
  clean = require('./gulp/tasks/clean'),
  cleanstrip = require('./gulp/tasks/cleanstrip'),
  dev = gulp.parallel(htmlConvert, styles, script, sprite),
  build = gulp.series(clean, dev, images, cleanstrip, done => {
    gulp.src('src/css/*.css').pipe(gulp.dest('dist/css/'));
    gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts/'));
    gulp.src('src/favicon/**/*').pipe(gulp.dest('dist/favicon/'));
    gulp.src('src/js/**/*.js').pipe(gulp.dest('dist/js/'));
    gulp.src('src/js/**/*.js').pipe(gulp.dest('dist/js/'));
    gulp.src('src/scripts/**/*.js').pipe(gulp.dest('dist/js/source/'));
    gulp.src('src/*.html').pipe(gulp.dest('dist'));
    gulp.src('src/libs/**').pipe(gulp.dest('dist/libs/'));
    done();
  });
module.exports.start = gulp.series(dev, serve);
module.exports.build = build;
