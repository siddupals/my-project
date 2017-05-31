var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var bower = require('gulp-bower');
var browserSync = require('browser-sync').create();


gulp.task('clean', function () {
    del.sync('./build/')
  });

gulp.task('copy', function() {

  gulp.src('index.html')
  .pipe(gulp.dest('./build/'))
  .pipe(browserSync.stream());
});

gulp.task('sass', function(){

  gulp.src('app/styles/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./build/css'))
  .pipe(browserSync.stream());
});

gulp.task('scripts', function(){

  gulp.src('app/scripts/**/*.{js,html}')
  .pipe(gulp.dest('./build/js'))
  .pipe(browserSync.stream());
});

gulp.task('bower', function() {
   bower();
});

gulp.task('browser-sync', ['clean','copy','sass','scripts', 'bower'], function() {
    browserSync.init({
        server: ["./build", './bower_components']
    });

    gulp.watch('index.html',['copy']);
    gulp.watch('app/styles/**/*.scss', ['sass']);
    gulp.watch('app/scripts/**/*.{js,html}', ['scripts']);
});

gulp.task('default',['browser-sync'] );
