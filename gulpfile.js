"use strict";

const { dest, parallel, series, src, watch } = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function js() {
    return src("./src/js/*.js")
        .pipe(babel())
        .pipe(dest("dist/js"));
}

function scss() {
    return src(["src/scss/app.scss", "./src/scss/projects/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(cleanCSS())
        .pipe(dest("dist/css"))
        .pipe(browserSync.stream());
}

function bSync() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        https: true
    });

    watch("./src/js/*.js", js);
    watch("./src/scss/**/*.scss", scss);
    watch("./*.html").on('change', browserSync.reload);
}

function watchJS() {
    watch("./src/js/**/*.js", js);
}

function watchSCSS() {
    watch("./src/scss/**/*.scss", scss);
}

module.exports = {
    default: series(scss, js),
    sass: scss,
    js: js,
    serve: bSync,
    watch: parallel(watchSCSS, watchJS)
};
