var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
      .pipe(plumber(function(error) {
           gutil.log(gutil.colors.red(error.message));
           this.emit('end');
         }))
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'expanded',
        sourceComments: 'map'
        }))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false}))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss',['sass']);
})

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
