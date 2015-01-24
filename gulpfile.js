var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;
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
    b.add('./src/js/zepto.js');
    b.add('./src/js/overlay.js');
    b.add('./src/js/toast.js');
    return b.bundle()
        .pipe(source('node_modules.js'))
        .pipe(gulp.dest(dirs.dist))
});

gulp.task('jshint', function() {
    return gulp.src([
            'gulpfile.js',
            dirs.src + '/js/*.js'
        ]).pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
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
        'concat:js',
        'compress:js',
        done);
});

gulp.task('watch', function() {
    gulp.watch(dirs.src, ['build']);
});



gulp.task('default', ['build']);
