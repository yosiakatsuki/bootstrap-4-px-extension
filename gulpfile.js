var gulp           = require('gulp');
var plumber        = require('gulp-plumber');
var rename         = require('gulp-rename');
var sass           = require('gulp-sass');
var postcss        = require('gulp-postcss');
var autoprefixer   = require('autoprefixer');
var cssnano        = require('cssnano');

gulp.task('sass', function() {
  gulp.src('./src/scss/**/*.scss')
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    ]))
    .pipe(gulp.dest('./dist/css'))
    .pipe(postcss([
      cssnano({
        'zindex': false
      })
    ]))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});
