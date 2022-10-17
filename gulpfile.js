"use strict";

const { dest, parallel, series, src, watch } = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require('gulp-clean-css');

function js() {
    return src("src/js/app.js")
        .pipe(babel())
        .pipe(dest("dist/js"));
}

function scss() {
    return src("src/scss/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(cleanCSS())
        .pipe(dest("dist/css"));
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
    watch: parallel(watchSCSS, watchJS)
};
