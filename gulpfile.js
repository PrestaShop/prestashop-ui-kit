'use strict';

var gulp           = require('gulp');
var sass           = require('gulp-sass');
var replace        = require('gulp-replace');
var purge          = require('gulp-css-purge');
var minifyCss      = require('gulp-minify-css');
var rootDir        = __dirname;
var nodeModulesDir = rootDir + '/node_modules';

gulp.task('sass', function () {
    console.log('compiling');

    gulp.src(['./scss/application.scss'])
        .pipe(sass() .on('error', sass.logError)) // build sass
        .pipe(purge())
        .pipe(minifyCss())
        .pipe(gulp.dest('./css')); // export css
});

gulp.task('sass:watch', function () {
    console.log('watch start');
    gulp.watch('./scss/**/*.scss', ['sass']);
});
