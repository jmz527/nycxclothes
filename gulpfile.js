// Load Gulp
var gulp    = require('gulp'),
    sass = require('gulp-sass'),
    // gutil   = require('gulp-util');
    log = require('fancy-log');
    plugins = require('gulp-load-plugins')();

// Start Watching: Run "gulp"
gulp.task('default', ['watch', 'build-js', 'build-css']);

// Minify Custom JS: Run manually with: "gulp build-js"
gulp.task('build-js', function() {
  return gulp.src('public/javascripts/*.js')
    // .pipe(plugins.jshint())
    // .pipe(plugins.jshint.reporter('jshint-stylish'))
    // .pipe(plugins.uglify())
    .pipe(plugins.concat('scripts.min.js'))
    .pipe(gulp.dest('public'));
});

// SASS to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function() {
    return gulp.src('public/sass/*.scss')
        .pipe(plugins.plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(plugins.autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        // .pipe(plugins.cssmin())
        .pipe(gulp.dest('public')).on('error', log);
});

// Default task
gulp.task('watch', function() {
    gulp.watch('public/javascripts/*.js', ['build-js']);
    gulp.watch('public/sass/**/*.scss', ['build-css']);
});
