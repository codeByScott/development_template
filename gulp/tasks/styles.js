var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nested       = require('postcss-nested'),
    cssimport    = require('postcss-import'),
    mixins       = require('postcss-mixins'),
    hexrgba      = require('postcss-hexrgba');

var paths = {
  styles: {
    src: './app/dev/styles/main.css',
    dest: './app/assets/styles/'
  }
};

gulp.task('styles', function() {
  gulp.src(paths.styles.src)
    .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .pipe(gulp.dest(paths.styles.dest))
})
