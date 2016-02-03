'use strict';

var gulp           = require('gulp');
var scss           = require('gulp-sass');
var nano           = require('gulp-cssnano');
var util           = require('gulp-util');
var csslint        = require('gulp-csslint');
var uglify         = require('gulp-uglify');
var concatcss      = require('gulp-concat-css');
var concat         = require('gulp-concat');
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
    jsPattern      : __dirname + '/js/*.js',
    nodeModulesDir : __dirname + '/node_modules',
    fontDir        : __dirname + '/fonts',
    dist           : __dirname + '/dist'
};

var root_scss = [
    'scss/application.scss'
];

var jsfiles = [
    config.nodeModulesDir + '/bootstrap/dist/js/bootstrap.min.js',
    config.nodeModulesDir + '/tether/dist/js/tether.min.js',
    config.nodeModulesDir + '/pstagger/jquery.pstagger.min.js',
    config.nodeModulesDir + '/jquery.growl/javascripts/jquery.growl.js',
    'js/prestakit.js'
];

var cssfiles = [
    config.nodeModulesDir + '/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
    config.nodeModulesDir + '/pstagger/jquery.pstagger.css',
    config.nodeModulesDir + '/jquery.growl/stylesheets/jquery.growl.css',
    config.nodeModulesDir + '/pstagger/jquery.pstagger.css'
];

var fontsfiles = [
    config.nodeModulesDir + '/material-design-iconic-font/dist/fonts/*'
];

var imgfiles = [
    config.imgIndex + '/logo.png'
];

gulp.task('default', ['scss', 'js', 'css', 'fonts', 'img', 'css:minify', 'styleguide']);

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
    return gulp.src(jsfiles)
        .pipe(concat('bundle-' + config.name + '.js'))
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(uglify())
        .pipe(rename({
            prefix: 'bundle-',
            basename: config.name,
            extname: '.min.js'
        }))
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(gulp.dest(config.dist + '/doc/public'));
});

gulp.task('fonts', function () {
    return gulp.src(fontsfiles)
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(gulp.dest(config.dist + '/docs/fonts'));
});

gulp.task('css', function () {
    return gulp.src(cssfiles)
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(gulp.dest(config.dist + '/docs/public'));
});

gulp.task('js', function () {
    return gulp.src(jsfiles)
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(gulp.dest(config.dist + '/docs/public'));;

});

gulp.task('img', function () {
    return gulp.src(imgfiles)
        .pipe(gulp.dest(config.dist + '/docs/img'));
});

gulp.task('scss:watch', function () {
    return gulp.watch([config.scssPattern, config.tplPattern, config.jsPattern], ['scss', 'js', 'img', 'css', 'styleguide']);
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
    return gulp.src(cssfiles)
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

gulp.task('clean', function() {
    return gulp.src([config.dist + '/*', config.jsDir + '/*'], {read: false})
        .pipe(clean());
});

