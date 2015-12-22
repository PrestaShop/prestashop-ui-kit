'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var replace = require('gulp-replace');
var rootDir = __dirname;
var nodeModulesDir = rootDir + '/node_modules';

gulp.task('sass', function () {
    var bootstrapDir = '@import "' + nodeModulesDir + '/bootstrap/scss/$2"';
    gulp.src(['./scss/application.scss'])
        .pipe(replace(/@import\s+['"](bootstrap)\/(.+)['"]/g, bootstrapDir)) // get bootsrap root folder

        .pipe(sass() .on('error', sass.logError)) // build sass

        .pipe(gulp.dest('./css')); // export css
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});
