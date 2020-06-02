function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function s(r, i) {
                try {
                    var a = t[r](i), o = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(o).then(function(e) {
                    s("next", e);
                }, function(e) {
                    s("throw", e);
                });
                e(o);
            }
            return s("next");
        });
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var s = t[n];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, n, s) {
        return n && e(t.prototype, n), s && e(t, s), t;
    };
}(), s = require("path"), r = require("gulp"), i = require("gulp-clean"), a = require("gulp-less"), o = require("gulp-rename"), c = require("gulp-if"), p = require("gulp-sourcemaps"), u = require("webpack"), l = require("gulp-install"), h = require("./config"), m = require("./checkcomponents"), w = require("./utils"), f = h.wxss || {}, d = function() {
    function d(e, n) {
        t(this, d), n && (this.id = e, this.entries = Array.isArray(h.entry) ? h.entry : [ h.entry ], 
        this.srcPath = h.srcPath, this.distPath = h.distPath, this.copyList = Array.isArray(h.copy) ? h.copy : [], 
        this.componentListMap = {}, this.cachedComponentListMap = {}, this.init());
    }
    return n(d, [ {
        key: "wxss",
        value: function(e) {
            if (e.length) return r.src(e, {
                cwd: this.srcPath,
                base: this.srcPath
            }).pipe(c(f.less && f.sourcemap, p.init())).pipe(c(f.less, a({
                paths: [ this.srcPath ]
            }))).pipe(o({
                extname: ".wxss"
            })).pipe(c(f.less && f.sourcemap, p.write("./"))).pipe(w.logger(f.less ? "generate" : void 0)).pipe(r.dest(this.distPath));
        }
    }, {
        key: "js",
        value: function(e) {
            var t = h.webpack, n = function(e, t) {
                e ? console.log(e) : console.log(t.toString({
                    assets: !0,
                    cached: !1,
                    colors: !0,
                    children: !1,
                    errors: !0,
                    warnings: !0,
                    version: !0,
                    modules: !1,
                    publicPath: !0
                }));
            };
            t.entry = e, t.output.path = this.distPath, this.webpackWatcher && (this.webpackWatcher.close(), 
            this.webpackWatcher = null), h.isWatch ? this.webpackWatcher = u(t).watch({
                ignored: /node_modules/
            }, n) : u(t).run(n);
        }
    }, {
        key: "copy",
        value: function(e) {
            if (e.length) return r.src(e, {
                cwd: this.srcPath,
                base: this.srcPath
            }).pipe(w.logger()).pipe(r.dest(this.distPath));
        }
    }, {
        key: "install",
        value: function() {
            var t = this;
            return r.series(e(regeneratorRuntime.mark(function e() {
                var n, r, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = h.demoDist, r = s.join(n, "package.json"), i = w.readJson(s.resolve(__dirname, "../package.json")), 
                        a = i.dependencies || {}, e.next = 6, w.writeFile(r, JSON.stringify({
                            dependencies: a
                        }, null, "\t"));

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, t);
            })), function() {
                var e = h.demoDist, t = s.join(e, "package.json");
                return r.src(t).pipe(l({
                    production: !0
                }));
            });
        }
    }, {
        key: "init",
        value: function() {
            var t = this, n = this.id;
            r.task(n + "-clean-dist", function() {
                return r.src(t.distPath, {
                    read: !1,
                    allowEmpty: !0
                }).pipe(i());
            });
            var a = !1;
            r.task(n + "-demo", r.series(e(regeneratorRuntime.mark(function e() {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = h.demoDist, e.next = 3, w.checkFileExists(s.join(n, "project.config.json"));

                      case 3:
                        a = e.sent;

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, t);
            })), function(e) {
                if (!a) {
                    var t = h.demoSrc, n = h.demoDist;
                    return r.src("**/*", {
                        cwd: t,
                        base: t
                    }).pipe(r.dest(n));
                }
                return e();
            })), r.task(n + "-install", this.install()), r.task(n + "-component-check", e(regeneratorRuntime.mark(function e() {
                var n, r, i, a, o, c, p, u, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n = t.entries, r = {}, i = !0, a = !1, o = void 0, e.prev = 5, c = n[Symbol.iterator]();

                      case 7:
                        if (i = (p = c.next()).done) {
                            e.next = 17;
                            break;
                        }
                        return u = p.value, u = s.join(t.srcPath, u + ".json"), e.next = 12, m(u);

                      case 12:
                        l = e.sent, w.merge(r, l);

                      case 14:
                        i = !0, e.next = 7;
                        break;

                      case 17:
                        e.next = 23;
                        break;

                      case 19:
                        e.prev = 19, e.t0 = e.catch(5), a = !0, o = e.t0;

                      case 23:
                        e.prev = 23, e.prev = 24, !i && c.return && c.return();

                      case 26:
                        if (e.prev = 26, !a) {
                            e.next = 29;
                            break;
                        }
                        throw o;

                      case 29:
                        return e.finish(26);

                      case 30:
                        return e.finish(23);

                      case 31:
                        t.cachedComponentListMap = t.componentListMap, t.componentListMap = r;

                      case 33:
                      case "end":
                        return e.stop();
                    }
                }, e, t, [ [ 5, 19, 23, 31 ], [ 24, , 26, 30 ] ]);
            }))), r.task(n + "-component-json", function(e) {
                var n = t.componentListMap.jsonFileList;
                if (n && n.length) return t.copy(t.componentListMap.jsonFileList);
                e();
            }), r.task(n + "-component-wxml", function(e) {
                var n = t.componentListMap.wxmlFileList;
                if (n && n.length && !w.compareArray(t.cachedComponentListMap.wxmlFileList, n)) return t.copy(n);
                e();
            }), r.task(n + "-component-wxss", function(e) {
                var n = t.componentListMap.wxssFileList;
                if (n && n.length && !w.compareArray(t.cachedComponentListMap.wxssFileList, n)) return t.wxss(n);
                e();
            }), r.task(n + "-component-js", function(e) {
                var n = t.componentListMap.jsFileList;
                n && n.length && !w.compareArray(t.cachedComponentListMap.jsFileList, n) && t.js(t.componentListMap.jsFileMap), 
                e();
            }), r.task(n + "-copy", r.parallel(function(e) {
                var n = t.copyList.map(function(e) {
                    return s.join(e, "**/*.!(wxss)");
                });
                if (n.length) return t.copy(n);
                e();
            }, function(e) {
                var n = t.copyList.map(function(e) {
                    return s.join(e, "**/*.wxss");
                });
                if (n.length) return t.wxss(n);
                e();
            })), r.task(n + "-watch-json", function() {
                return r.watch(t.componentListMap.jsonFileList, {
                    cwd: t.srcPath,
                    base: t.srcPath
                }, r.series(n + "-component-check", r.parallel(n + "-component-wxml", n + "-component-wxss", n + "-component-js", n + "-component-json")));
            }), r.task(n + "-watch-wxml", function() {
                return t.cachedComponentListMap.wxmlFileList = null, r.watch(t.componentListMap.wxmlFileList, {
                    cwd: t.srcPath,
                    base: t.srcPath
                }, r.series(n + "-component-wxml"));
            }), r.task(n + "-watch-wxss", function() {
                return t.cachedComponentListMap.wxssFileList = null, r.watch("**/*.wxss", {
                    cwd: t.srcPath,
                    base: t.srcPath
                }, r.series(n + "-component-wxss"));
            }), r.task(n + "-watch-copy", function() {
                var e = t.copyList.map(function(e) {
                    return s.join(e, "**/*");
                }), n = function(e, n) {
                    return ".wxss" === s.extname(e) ? t.wxss([ e ]) : t.copy([ e ]);
                };
                return r.watch(e, {
                    cwd: t.srcPath,
                    base: t.srcPath
                }).on("change", n).on("add", n).on("unlink", n);
            }), r.task(n + "-watch-install", function() {
                return r.watch(s.resolve(__dirname, "../package.json"), t.install());
            }), r.task(n + "-build", r.series(n + "-clean-dist", n + "-component-check", r.parallel(n + "-component-wxml", n + "-component-wxss", n + "-component-js", n + "-component-json", n + "-copy"))), 
            r.task(n + "-watch", r.series(n + "-build", n + "-demo", n + "-install", r.parallel(n + "-watch-wxml", n + "-watch-wxss", n + "-watch-json", n + "-watch-copy", n + "-watch-install"))), 
            r.task(n + "-dev", r.series(n + "-build", n + "-demo", n + "-install")), r.task(n + "-default", r.series(n + "-build"));
        }
    } ]), d;
}();

module.exports = d;