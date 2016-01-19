'use strict';

var gulp           = require('gulp');
var scss           = require('gulp-sass');
var nano           = require('gulp-cssnano');
var util           = require('gulp-util');
var csslint        = require('gulp-csslint');
var uglify         = require('gulp-uglify');
var concatcss      = require('gulp-concat-css');
var rename         = require('gulp-rename');
var clean          = require('gulp-clean');
var gulpkss        = require('gulp-kss-druff');
var sourcemaps     = require('gulp-sourcemaps');

var config         = {
    name           : 'prestakit',
    production     : !!util.env.production,
    scssIndex      : __dirname + '/scss/application.scss',
    jsIndex        : __dirname + '/js/.js',
    imgIndex       : __dirname + '/img',
    scssPattern    : __dirname + '/scss/**/*.scss',
    tplPattern     : __dirname + '/template/index.html',
    cssPattern     : __dirname + '/dist/css/*.css',
    jsPattern      : __dirname + '/js/*.js',
    nodeModulesDir : __dirname + '/node_modules',
    fontDir        : __dirname + '/fonts',
    dist           : __dirname + '/dist'
};

var root_scss = [
    'scss/application.scss'
];

var root_css = [
    'dist/css/application.css'
];

var jsfiles = [
    config.nodeModulesDir + '/bootstrap/dist/js/bootstrap.min.js',
    config.nodeModulesDir + '/tether/dist/js/tether.min.js',
    'js/prestakit.js'
];

gulp.task('default', ['scss', 'js', 'fonts', 'img', 'css:minify', 'styleguide']);

gulp.task('scss', function () {
    return gulp.src(root_scss)
    // init sourcemaps
        .pipe(sourcemaps.init())
    // build scss
        .pipe(scss.sync({
            includePaths : [config.nodeModulesDir]
        }).on('error', scss.logError))
    // maps
        .pipe(sourcemaps.write('./maps'))
    // export
        .pipe(rename({
            prefix: 'bootstrap-',
            basename: config.name,
            extname: '.css'
        }))
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(gulp.dest(config.dist + '/docs/public'));
});

gulp.task('js:uglify', ['js'], function () {
    return gulp.src([config.dist + '/js/*min.js',
                     '!' + config.dist + '/js/bundle-*'])
        .pipe(uglify())
        .pipe(rename({
            prefix: 'bundle-',
            basename: config.name,
            extname: '.js'
        }))
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('fonts', function () {
    gulp.src([config.nodeModulesDir + '/font-awesome/fonts/*'])
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(gulp.dest(config.dist + '/docs/fonts'));
});

gulp.task('js', function () {
    return gulp.src(jsfiles)
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('img', function () {
    return gulp.src([config.imgIndex + '/logo.png'])
        .pipe(gulp.dest(config.dist + '/docs/img'));
});

gulp.task('scss:watch', function () {
    gulp.watch(config.scssPattern, ['scss', 'js', 'img', 'styleguide']);
    gulp.watch(config.tplPattern, ['scss', 'js', 'img', 'styleguide']);
    gulp.watch(config.jsPattern, ['scss', 'js', 'img', 'styleguide']);
});

gulp.task('css:concat', ['css:minify'], function () {
    return gulp.src('dist/css/**/*.min.css')
        .pipe(concatcss())
        .pipe(rename({
            prefix: 'bundle-',
            basename: config.name,
            extname: '.min.css'
        }))
        .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('css:minify', ['scss'], function () {
    return gulp.src(config.cssPattern)
        .pipe(nano())
        .pipe(rename({
            prefix: 'bootstrap-',
            basename: config.name,
            extname: '.min.css'
        }))
        .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('styleguide', function() {
    gulp.src(['scss/**/*.scss'])
        .pipe(gulpkss({
            template: 'template/',
            multiline: true,
            typos: false,
            custom: [],
            helpers: '',
            css: [],
            js: [],
            homepage: __dirname + '/doc/styleguide.md'
        }))
        .pipe(gulp.dest(config.dist + '/docs'));

    gulp.src('template/public/kss.css')
        .pipe(gulp.dest(config.dist + '/docs/public'));
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

