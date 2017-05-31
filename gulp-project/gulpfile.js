var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var bower = require('gulp-bower');
var browserSync = require('browser-sync').create();

var paths = {
  html: 'index.html';
  style: 'app/styles/**/*.scss';
  scripts: 'app/scripts/**/*.js';
};

gulp.task('clean', function () {
    del.sync('./build/')
  });

gulp.task('copy', function() {

  gulp.src(paths.html)
  .pipe(gulp.dest('./build/'))
  .pipe(browserSync.stream());
});

gulp.task('sass', function(){

  gulp.src(paths.style)
  .pipe(sass())
  .pipe(gulp.dest('./build/css'))
  .pipe(browserSync.stream());
});

gulp.task('scripts', function(){

  gulp.src(paths.scripts)
  .pipe(gulp.dest('./build/js'));
});

gulp.task('bower', function() {
   bower();
});

gulp.task('browser-sync', ['clean','copy','sass','scripts', 'bower'], function() {
    browserSync.init({
        server: ["./build", './bower_components']
    });

    gulp.watch("index.html",['copy']);
    gulp.watch(paths.style, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default',['browser-sync'] );
