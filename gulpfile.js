var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;
var less = require('gulp-less');
var _browserify = require('browserify');
var source = require('vinyl-source-stream');
var _ = require('lodash');

var browserify = function(opt) {
    return _browserify(_.extend({
        bundleExternal: false
    }, opt));
};

gulp.task('browserify-build', function() {
    var b = browserify();
    b.add('./src/js/index.js');
    return b.bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest(dirs.dist))
});

gulp.task('jshint', function() {
    return gulp.src([
            'gulpfile.js',
            dirs.src + '/js/*.js'
        ]).pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
});

gulp.task('img', function() {
    return gulp.src(dirs.src + '/less/img/**')
        .pipe(gulp.dest(dirs.dist + '/img'));
});

gulp.task('less', function() {
    gulp.src(dirs.src + '/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest(dirs.dist+'/css'));
});


// -----------------------------------------------------------------------------
// | Main tasks                                                                |
// -----------------------------------------------------------------------------
gulp.task('clean', function(done) {
    require('del')([
        dirs.dist
    ], done);
});


gulp.task('build', function(done) {
    runSequence(
        ['clean'],
        'less',
        'img',
        'browserify-build',
        done);
});

gulp.task('watch', function() {
    gulp.watch(dirs.src, ['build']);
});



gulp.task('default', ['build']);
