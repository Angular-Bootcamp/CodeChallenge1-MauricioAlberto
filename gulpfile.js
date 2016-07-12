'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var PATH = {
  less: './application/src/less/theme.less',
  css: './application/dist/css',
  baseDir:  './application'
};

gulp.task('less', function () {
  return gulp.src(PATH.less)
    .pipe(less())
    .pipe(gulp.dest(PATH.css))
});

// Watch scss AND html files, doing different things with each.
gulp.task('server', function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: PATH.baseDir
    }
  });
});

gulp.task('watch', function () {
  gulp.watch(PATH.less, ['less']);
  gulp.watch(PATH.css + "/*.css").on('change', reload);
  gulp.watch(PATH.baseDir + "/*.html").on('change', reload);
});

gulp.task('build', ['less', 'server', 'watch']);

// run "gulp"
gulp.task('default', ['build']);
