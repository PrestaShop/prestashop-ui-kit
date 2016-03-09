'use strict';

// Include gulp
var gulp           = require('gulp');

// Include Our Plugins
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

// Iterate Configuration
var config         = {
    name           : 'prestashop-ui-kit',
    projectDir     : __dirname + '/',
    scssIndex      : __dirname + '/scss/application.scss',
    imgPattern     : __dirname + '/img',
    scssPattern    : __dirname + '/scss/**/*.scss',
    tplPattern     : __dirname + '/template/index.html',
    jsPattern      : __dirname + '/js/*.js',
    nodeModulesDir : __dirname + '/node_modules',
    dist           : __dirname + '/dist'
};

// List Dependencies JS
var jsfiles = [
    // Vendors js
    config.nodeModulesDir + '/bootstrap/dist/js/bootstrap.min.js',
    config.nodeModulesDir + '/tether/dist/js/tether.min.js',
    config.nodeModulesDir + '/pstagger/jquery.pstagger.min.js',
    config.nodeModulesDir + '/jquery.growl/javascripts/jquery.growl.js',
    config.nodeModulesDir + '/select2/dist/js/select2.min.js',

    // Kit js
    config.projectDir + 'js/prestashop-ui-kit.js'
];

// List Dependencies CSS
var cssfiles = [
    config.nodeModulesDir + '/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
    config.nodeModulesDir + '/pstagger/jquery.pstagger.css',
    config.nodeModulesDir + '/jquery.growl/stylesheets/jquery.growl.css',
];

// Material Icons Fonts
var fontsfiles = [
    config.nodeModulesDir + '/material-design-icons/iconfont/*'
];

// PrestaShop Logo
var imgfiles = [
    config.imgPattern + '/logo.png'
];

// Default Task
gulp.task('default', ['scss', 'js', 'css', 'fonts', 'img', 'css:minify', 'styleguide']);

// Compile Our Scss
gulp.task('scss', function () {
    return gulp.src(config.scssIndex)
    // Init Sourcemaps
        .pipe(sourcemaps.init())
    // Build Scss
        .pipe(scss.sync({
            includePaths : [config.nodeModulesDir]
        }).on('error', scss.logError))
    // Maps
        .pipe(sourcemaps.write('./maps'))
    // Export
        .pipe(rename({
            prefix: 'bootstrap-',
            basename: config.name,
            extname: '.css'
        }))
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(gulp.dest(config.dist + '/docs/css'));
});

// Concatenate & Minify JS
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
        .pipe(gulp.dest(config.dist + '/doc/js'));
});

// Import Material Icons Fonts
gulp.task('fonts', function () {
    return gulp.src(fontsfiles)
        .pipe(gulp.dest(config.dist + '/fonts'))
        .pipe(gulp.dest(config.dist + '/docs/fonts'));
});

// Import Dependencies CSS
gulp.task('css', function () {
    return gulp.src(cssfiles)
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(gulp.dest(config.dist + '/docs/css'));
});

// Import Dependencies JS
gulp.task('js', function () {
    return gulp.src(jsfiles)
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(gulp.dest(config.dist + '/docs/js'));;

});

// Import PrestaShop Logo
gulp.task('img', function () {
    return gulp.src(imgfiles)
        .pipe(gulp.dest(config.dist + '/docs/img'));
});

// Watch Files For Change
gulp.task('scss:watch', function () {
    return gulp.watch([config.scssPattern, config.tplPattern, config.jsPattern], ['scss', 'js', 'img', 'css', 'styleguide']);
});

// Concatenate CSS
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

// Minify SCSS
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

// Knyle Style Sheets Documentation
gulp.task('styleguide', function() {
    gulp.src(config.scssPattern)
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

    // Import Template CSS
    gulp.src('template/public/kss.css')
        .pipe(gulp.dest(config.dist + '/docs/css'));
});

// Clean Dist
gulp.task('clean', function() {
    return gulp.src([config.dist + '/*'], {read: false})
        .pipe(clean());
});

