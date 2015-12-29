'use strict';

var gulp           = require('gulp');
var sass           = require('gulp-sass');
var purge          = require('gulp-css-purge');
var nano           = require('gulp-cssnano');
var util           = require('gulp-util');
var csslint        = require('gulp-csslint');
var rename         = require('gulp-rename');
var clean          = require('gulp-clean');
// var sourcemaps  = require('gulp-sourcemaps');
var config         = {
    name           : 'prestakit',
    production     : !!util.env.production,
    scssIndex      : __dirname + '/scss/application.scss',
    jsIndex        : __dirname + '/js/.js',
    scssPattern    : __dirname + '/scss/**/*.scss',
    cssPattern     : __dirname + '/dist/css/*.css',
    nodeModulesDir : __dirname + '/node_modules',
    fontDir        : __dirname + '/fonts',
    dist           : __dirname + '/dist'
};

gulp.task('default', ['scss', 'js', 'css:minify', 'css:lint']);

gulp.task('scss', function () {
    return gulp.src([config.scssIndex])
    // init sourcemaps
        // .pipe(sourcemaps.init())
    // build sass
        .pipe(sass.sync({
            includePaths : [config.nodeModulesDir]
        }).on('error', sass.logError))
    // maps
        // .pipe(sourcemaps.write('./maps'))
    // purge
        .pipe(purge())
    // export
        .pipe(rename({
            basename: config.name,
            extname: '.css'
        }))
        .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('js', function () {
    return gulp.src(config.nodeModulesDir + '/bootstrap/dist/js/bootstrap*.js')
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('scss:watch', function () {
    return gulp.watch(config.scssPattern, ['scss']);
});

gulp.task('css:minify', function () {
    return gulp.src(config.cssPattern)
        .pipe(nano())
        .pipe(rename({
            basename: config.name,
            extname: '.min.css'
        }))
        .pipe(gulp.dest(config.dist + '/css'));
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
    return gulp.src([config.dist + '/*', config.jsDir + '/*'], {read: false})
        .pipe(clean());
});
