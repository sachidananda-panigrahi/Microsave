/**
 * Created by Sachidananda on 9/9/14.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css');
var haml = require('gulp-haml');
var del = require('del');
var paths = {
    scripts: ['js/*.js'],
    css: ['css/*.css'],
    sass: ['sass/*.sass'],
    images: 'images/*',
    haml: '*.haml'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['build'], cb);
});

/*gulp.task('scripts', ['clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});*/

// Copy all static images
/*gulp.task('images', ['clean'], function() {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('build/img'));
});*/


gulp.task('compass', function() {
    gulp.src('sass/*.sass')
        .pipe(compass({
            css: 'css',
            sass: 'sass',
            image: 'images'
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/assets/temp'));
});;

//haml
gulp.task('haml', function() {
    gulp.src('*.haml', {read: false}).
        pipe(haml()).
        pipe(gulp.dest('html'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
//    gulp.watch(paths.scripts, ['scripts']);
//    gulp.watch(paths.css, ['compass']);
    gulp.watch(paths.sass, ['compass']);
    gulp.watch(paths.haml, ['haml']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);