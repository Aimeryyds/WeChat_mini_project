function e(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(i, s) {
                try {
                    var a = r[i](s), o = a.value;
                } catch (e) {
                    return void t(e);
                }
                if (!a.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
        });
    };
}

function r(e) {
    var r = i.dirname(e), t = i.basename(e, ".json"), n = i.relative(a, r);
    return {
        dirPath: r,
        fileName: t,
        relative: n,
        fileBase: i.join(n, t)
    };
}

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, n = function() {
    var a = e(regeneratorRuntime.mark(function e(a, u) {
        var c, f, l, p, h, v, x, m, b, j, y, k, d, w, F, L, P, S, g, R, q, B, E;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (c = s.readJson(a)) {
                    e.next = 3;
                    break;
                }
                throw new Error('json is not valid: "' + a + '"');

              case 3:
                f = r(a), l = f.dirPath, p = f.fileName, h = f.relative, v = f.fileBase, x = !0, 
                m = !1, b = void 0, e.prev = 7, j = o[Symbol.iterator]();

              case 9:
                if (x = (y = j.next()).done) {
                    e.next = 51;
                    break;
                }
                k = y.value, d = c[k] || {}, w = Object.keys(d), F = !0, L = !1, P = void 0, e.prev = 16, 
                S = w[Symbol.iterator]();

              case 18:
                if (F = (g = S.next()).done) {
                    e.next = 34;
                    break;
                }
                if (R = g.value, q = "object" === t(d[R]) ? d[R].default : d[R]) {
                    e.next = 23;
                    break;
                }
                return e.abrupt("continue", 31);

              case 23:
                return q = s.transformPath(q, i.sep), B = i.join(l, q) + ".json", e.next = 27, s.checkFileExists(B);

              case 27:
                if (!(E = e.sent)) {
                    e.next = 31;
                    break;
                }
                return e.next = 31, n(B, u);

              case 31:
                F = !0, e.next = 18;
                break;

              case 34:
                e.next = 40;
                break;

              case 36:
                e.prev = 36, e.t0 = e.catch(16), L = !0, P = e.t0;

              case 40:
                e.prev = 40, e.prev = 41, !F && S.return && S.return();

              case 43:
                if (e.prev = 43, !L) {
                    e.next = 46;
                    break;
                }
                throw P;

              case 46:
                return e.finish(43);

              case 47:
                return e.finish(40);

              case 48:
                x = !0, e.next = 9;
                break;

              case 51:
                e.next = 57;
                break;

              case 53:
                e.prev = 53, e.t1 = e.catch(7), m = !0, b = e.t1;

              case 57:
                e.prev = 57, e.prev = 58, !x && j.return && j.return();

              case 60:
                if (e.prev = 60, !m) {
                    e.next = 63;
                    break;
                }
                throw b;

              case 63:
                return e.finish(60);

              case 64:
                return e.finish(57);

              case 65:
                u.wxmlFileList.push(v + ".wxml"), u.wxssFileList.push(v + ".wxss"), u.jsonFileList.push(v + ".json"), 
                u.jsFileList.push(v + ".js"), u.jsFileMap[v] = i.join(l, p) + ".js";

              case 70:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 7, 53, 57, 65 ], [ 16, 36, 40, 48 ], [ 41, , 43, 47 ], [ 58, , 60, 64 ] ]);
    }));
    return function(e, r) {
        return a.apply(this, arguments);
    };
}(), i = require("path"), s = require("./utils"), a = require("./config").srcPath, o = [ "usingComponents", "componentGenerics" ];

module.exports = function() {
    var t = e(regeneratorRuntime.mark(function e(t) {
        var a, o, u, c, f, l;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = {
                    wxmlFileList: [],
                    wxssFileList: [],
                    jsonFileList: [],
                    jsFileList: [],
                    jsFileMap: {}
                }, e.next = 3, s.checkFileExists(t);

              case 3:
                if (o = e.sent) {
                    e.next = 9;
                    break;
                }
                return u = r(t), c = u.dirPath, f = u.fileName, l = u.fileBase, a.jsFileList.push(l + ".js"), 
                a.jsFileMap[l] = i.join(c, f) + ".js", e.abrupt("return", a);

              case 9:
                return e.next = 11, n(t, a);

              case 11:
                return e.abrupt("return", a);

              case 12:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(e) {
        return t.apply(this, arguments);
    };
}();