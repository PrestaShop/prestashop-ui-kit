'use strict';

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var purge  = require('gulp-css-purge');
var minifyCss      = require('gulp-minify-css');
var util   = require('gulp-util');

var config = {
    sassPattern : './scss/**/*.scss',
    nodeModules : __dirname + '/node_modules',
    production  : !!util.env.production,
    scssIndex   : './scss/application.scss',
    cssDir      : './css'
};

gulp.task('sass', function () {
    gulp.src([config.scssIndex])

        .pipe(sass.sync({
            includePaths : [config.nodeModules]
        }).on('error', sass.logError)) // build sass
        .pipe(purge())                 // purge
        .pipe(minifyCss())                // dedupe
        .pipe(gulp.dest(config.cssDir));     // export
});

gulp.task('sass:watch', function () {
    gulp.watch(config.sassPattern, ['sass']);
});
