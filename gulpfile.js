'use strict';

var gulp           = require('gulp');
var sass           = require('gulp-sass');
var purge          = require('gulp-css-purge');
var nano           = require('gulp-cssnano');
var util           = require('gulp-util');
var csslint        = require('gulp-csslint');
var rename         = require('gulp-rename');
var clean          = require('gulp-clean');
var sourcemaps     = require('gulp-sourcemaps');
var config         = {
    name           : 'prestakit',
    production     : !!util.env.production,
    scssIndex      : __dirname + '/scss/application.scss',
    scssPattern    : __dirname + '/scss/**/*.scss',
    cssPattern     : __dirname + '/css/*.css',
    nodeModulesDir : __dirname + '/node_modules',
    cssDir         : __dirname + '/css'
};

gulp.task('default', ['sass', 'css:minify', 'css:lint']);

gulp.task('sass', function () {
    gulp.src([config.scssIndex])
    // init sourcemaps
        .pipe(sourcemaps.init())
    // build sass
        .pipe(sass.sync({
            includePaths : [config.nodeModulesDir]
        }).on('error', sass.logError))
    // maps
        .pipe(sourcemaps.write('./maps'))
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

gulp.task('css:minify', function () {
    gulp.src(config.cssPattern)
        .pipe(nano())
        .pipe(rename({
            basename: config.name,
            extname: '.min.css'
        }))
        .pipe(gulp.dest(config.cssDir));
});

// @TODO link to travis
gulp.task('css:lint', function () {
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
