'use strict';

var gulp    = require('gulp');
var sass    = require('node-sass');
var gsass   = require('gulp-sass');
var replace = require('gulp-replace');

gulp.task('sass', function () {
    console.log('compiling');

    gulp.src(['./scss/application.scss'])

        .pipe(gsass.sync({
            includePaths : [[__dirname, 'node_modules'].join('/')]
        }).on('error', gsass.logError)) // build sass

        .pipe(gulp.dest('./css')); // export css

    console.log('done!');
});

gulp.task('sass:watch', function () {
    console.log('watch start');
    gulp.watch('./scss/**/*.scss', ['sass']);
});
