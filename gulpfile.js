const { dest, parallel, series, src } = require("gulp");
const babel = require("gulp-babel");

function defaultTask() {
    return src("src/js/app.js")
        .pipe(babel())
        .pipe(dest("dist/js"));
}

module.exports = {
    default: defaultTask
};
