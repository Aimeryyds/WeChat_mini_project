function r(r) {
    return function() {
        var e = r.apply(this, arguments);
        return new Promise(function(r, t) {
            function n(u, a) {
                try {
                    var o = e[u](a), c = o.value;
                } catch (r) {
                    return void t(r);
                }
                if (!o.done) return Promise.resolve(c).then(function(r) {
                    n("next", r);
                }, function(r) {
                    n("throw", r);
                });
                r(c);
            }
            return n("next");
        });
    };
}

function e(r, e) {
    return function() {
        for (var t = arguments.length, n = Array(t), u = 0; u < t; u++) n[u] = arguments[u];
        if (n.length) {
            var a = n.pop();
            "function" != typeof a && n.push(a);
        }
        return new Promise(function(t, u) {
            n.push(function(r, e) {
                r ? u(r) : t(e);
            }), r.apply(e || null, n);
        });
    };
}

function t(r, e) {
    var t = "string" == typeof r ? new Date(r) : r, n = {};
    return n.yyyy = t.getFullYear(), n.yy = ("" + n.yyyy).substr(2), n.M = t.getMonth() + 1, 
    n.MM = (n.M < 10 ? "0" : "") + n.M, n.d = t.getDate(), n.dd = (n.d < 10 ? "0" : "") + n.d, 
    n.H = t.getHours(), n.HH = (n.H < 10 ? "0" : "") + n.H, n.m = t.getMinutes(), n.mm = (n.m < 10 ? "0" : "") + n.m, 
    n.s = t.getSeconds(), n.ss = (n.s < 10 ? "0" : "") + n.s, e.replace(/\byyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s\b/g, function(r) {
        return n[r];
    });
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
    return typeof r;
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
}, u = function() {
    var e = r(regeneratorRuntime.mark(function r(e) {
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, r.next = 3, y(e);

              case 3:
                return r.abrupt("return", !0);

              case 6:
                return r.prev = 6, r.t0 = r.catch(0), r.abrupt("return", !1);

              case 9:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 0, 6 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), a = function() {
    var e = r(regeneratorRuntime.mark(function r(e) {
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, h(e, "utf8");

              case 2:
                return r.abrupt("return", r.sent);

              case 3:
              case "end":
                return r.stop();
            }
        }, r, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), o = function() {
    var e = r(regeneratorRuntime.mark(function r(e, t) {
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, c(s.dirname(e));

              case 2:
                return r.next = 4, g(e, t, "utf8");

              case 4:
                return r.abrupt("return", r.sent);

              case 5:
              case "end":
                return r.stop();
            }
        }, r, this);
    }));
    return function(r, t) {
        return e.apply(this, arguments);
    };
}(), c = function() {
    var e = r(regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return t = s.dirname(e), r.prev = 1, r.next = 4, y(t);

              case 4:
                r.next = 10;
                break;

              case 6:
                return r.prev = 6, r.t0 = r.catch(1), r.next = 10, c(t);

              case 10:
                return r.prev = 10, r.next = 13, y(e);

              case 13:
                return r.next = 15, p(e);

              case 15:
                if (!(n = r.sent) || n.isDirectory()) {
                    r.next = 21;
                    break;
                }
                return r.next = 19, l(e, e + ".bak");

              case 19:
                return r.next = 21, m(e);

              case 21:
                r.next = 27;
                break;

              case 23:
                return r.prev = 23, r.t1 = r.catch(10), r.next = 27, m(e);

              case 27:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 1, 6 ], [ 10, 23 ] ]);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), i = require("fs"), s = require("path"), f = (require("colors"), require("through2")), y = e(i.access), p = e(i.stat), l = e(i.rename), m = e(i.mkdir), h = e(i.readFile), g = e(i.writeFile);

module.exports = {
    wrap: e,
    transformPath: function(r) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/";
        return r.replace(/[\\\/]/g, e);
    },
    checkFileExists: u,
    readJson: function(r) {
        try {
            var e = require(r);
            return delete require.cache[require.resolve(r)], e;
        } catch (r) {
            return null;
        }
    },
    readFile: a,
    writeFile: o,
    logger: function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
        return f.obj(function(e, n, u) {
            var a = s.extname(e.path).slice(1).toLowerCase();
            console.log("[" + t(new Date(), "yyyy-MM-dd HH:mm:ss").grey + "] [" + r.green + " " + a.green + "] " + "=>".cyan + " " + e.path), 
            this.push(e), u();
        });
    },
    format: t,
    compareArray: function(r, e) {
        if (!Array.isArray(r) || !Array.isArray(e)) return !1;
        if (r.length !== e.length) return !1;
        for (var t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
        return !0;
    },
    merge: function(r, e) {
        return Object.keys(e).forEach(function(t) {
            Array.isArray(r[t]) && Array.isArray(e[t]) ? r[t] = r[t].concat(e[t]) : "object" === n(r[t]) && "object" === n(e[t]) ? r[t] = Object.assign(r[t], e[t]) : r[t] = e[t];
        }), r;
    }
};