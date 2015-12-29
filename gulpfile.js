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
    var bootstrapDir = '@import "' + nodeModulesDir + '/bootstrap/scss/$2"';
    gulp.src(['./scss/application.scss'])

        .pipe(sass() .on('error', sass.logError)) // build sass
        .pipe(purge())
        .pipe(dedupe())
        .pipe(gulp.dest('./css')); // export css
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});
