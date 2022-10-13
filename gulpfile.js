"use strict";

const { dest, parallel, series, src } = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

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
        .pipe(dest("dist/css"));
}

module.exports = {
    default: series(scss, js),
    sass: scss,
    js: js
};
