var e = require("gulp"), r = require("gulp-clean"), t = require("./tools/config"), s = require("./tools/build"), i = require("./package.json").name || "miniprogram-custom-component";

new s(i, t.entry), e.task("clean", e.series(function() {
    return e.src(t.distPath, {
        read: !1,
        allowEmpty: !0
    }).pipe(r());
}, function(s) {
    if (t.isDev) return e.src(t.demoDist, {
        read: !1,
        allowEmpty: !0
    }).pipe(r());
    s();
})), e.task("watch", e.series(i + "-watch")), e.task("dev", e.series(i + "-dev")), 
e.task("default", e.series(i + "-default"));