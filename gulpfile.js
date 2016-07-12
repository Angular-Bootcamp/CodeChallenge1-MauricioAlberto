'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

var PATH = {
  less: './application/src/less/*.less',
  css: './application/dist/css'
};

gulp.task('less', function () {
  return gulp.src(PATH.less)
    .pipe(less())
    .pipe(gulp.dest(PATH.css));
});

gulp.task('watch', function () {
  gulp.watch(PATH.less, ['less']);
});

gulp.task('build', ['less', 'watch']);

// run "gulp"
gulp.task('default', ['build']);
