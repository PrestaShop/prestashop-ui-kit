'use strict';

var gulp      = require('gulp');
var sass      = require('gulp-sass');
var purge     = require('gulp-css-purge');
var minifyCss = require('gulp-minify-css');
var util      = require('gulp-util');
var csslint   = require('gulp-csslint');
var rename    = require('gulp-rename');
var clean     = require('gulp-clean');

var config = {
    production  : !!util.env.production,
    name        : 'prestakit',

    scssPattern : './scss/**/*.scss',
    cssPattern  : './css/*.css',
    nodeModules : __dirname + '/node_modules',
    scssIndex   : './scss/application.scss',
    cssDir      : './css'
};

gulp.task('default', ['sass', 'css:minify', 'css:lint']);

gulp.task('sass', function () {
    gulp.src([config.scssIndex])
    // build sass
        .pipe(sass.sync({
            includePaths : [config.nodeModules]
        }).on('error', sass.logError))
    // purge
        .pipe(purge())
    // export
        .pipe(rename({
            basename: config.name,
            extname: '.css'
        }))
        .pipe(gulp.dest(config.cssDir));
});

gulp.task('sass:watch', function () {
    gulp.watch(config.sassPattern, ['sass']);
});

gulp.task('css:minify', function (){
    gulp.src(config.cssPattern)
        .pipe(minifyCss())
        .pipe(rename({
            basename: config.name,
            extname: '.min.css'
        }))
        .pipe(gulp.dest(config.cssDir));
});

gulp.task('css:lint', function (){
    return gulp.src(config.cssPattern)
        .pipe(csslint('csslintrc.json'))
        .pipe(csslint.reporter(function(file) {
            util.log('founds ' + util.colors.cyan(file.csslint.errorCount)+ ' errors in ' + util.colors.magenta(file.path));
            file.csslint.results.forEach(function(result) {
                util.log(result.error.message + ' on line ' + result.error.line);
            });
        }));
});

gulp.task('clean', function() {
    gulp.src([config.cssDir + '/' + config.name + '.css',
              config.cssDir + '/' + config.name + '.min.css'], {read: false})
        .pipe(clean());
});
