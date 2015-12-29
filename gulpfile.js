'use strict';

var gulp           = require('gulp');
var sass           = require('gulp-sass');
var replace        = require('gulp-replace');
var purge = require('gulp-css-purge');
var dedupe = require('gulp-dedupe');
var nano = require('gulp-cssnano');

var rootDir        = __dirname;
var nodeModulesDir = rootDir + '/node_modules';

gulp.task('sass', function () {
    console.log('compiling');

    gulp.src(['./scss/application.scss'])

        .pipe(gsass.sync({
            includePaths : [[__dirname, 'node_modules'].join('/')]
        }).on('error', gsass.logError)) // build sass
        .pipe(purge())
        .pipe(dedupe())
        .pipe(gulp.dest('./css')); // export css

    console.log('done!');
});

gulp.task('sass:watch', function () {
    console.log('watch start');
    gulp.watch('./scss/**/*.scss', ['sass']);
});
