var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');    
var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;
var browserify = require('browserify');

gulp.task('jshint', function () {
    return gulp.src([
        'gulpfile.js',
         dirs.src+'/js/*.js'
    ]).pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
});


// -----------------------------------------------------------------------------
// | Main tasks                                                                |
// -----------------------------------------------------------------------------
gulp.task('clean', function (done) {
    require('del')([
        dirs.dist
    ], done);
});


gulp.task('build', function (done) {
    runSequence(
        ['clean'],
	'concat:js',
	'compress:js',
    done);
});

gulp.task('watch', function () {
    gulp.watch(dirs.src, ['build']);
});



gulp.task('default', ['build']);

