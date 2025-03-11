const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('serve', () => {
  connect.server({
    root: './',
    livereload: true,
    port: 8011
  });
});