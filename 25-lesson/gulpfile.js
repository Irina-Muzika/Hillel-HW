const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const { path } = require('./gulp/const.js');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');


function cleanDist() {
    return src("./dist", { read: false, allowEmpty: true, })
        .pipe(clean());
}

function copyJs() {
    return src([
        './src/js/StudentsApi.js',
        './src/js/main.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist'));
}

function copyVendorJs() {
    return src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(concat('vendor.js'))
        .pipe(dest('dist'));
}

function copyCss() {
    return src('./src/css/**/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('app.css'))
        .pipe(dest('dist'));
}

function copyHtml() {
    return src('./src/*.html').pipe(dest('dist'));
}

function serve(done) {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    watch('./src/*.html', series(copyHtml, reloadBrowser));
    watch('./src/js/**/*.js', series(copyJs, reloadBrowser));
    watch('./src/css/**/*.css', series(copyCss, reloadBrowser));
    done();
}
function reloadBrowser(done) {
    browserSync.reload();
    done();
}

function taskBuild() {
    return series(
        cleanDist,
        parallel(
            copyJs,
            copyVendorJs,
            copyCss,
            copyHtml
        )
    );
}


exports.build = taskBuild();
exports.serve = series(taskBuild(), serve);
