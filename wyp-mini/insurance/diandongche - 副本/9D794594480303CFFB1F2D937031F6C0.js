function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return i(t) || n(t) || r();
}

function r() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function n(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
}

function i(t) {
    if (Array.isArray(t)) {
        for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
    }
}

function o(t) {
    for (var e = 1; e < arguments.length; e++) if (e % 2) {
        var r = null != arguments[e] ? arguments[e] : {}, n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
        }))), n.forEach(function(e) {
            u(t, e, r[e]);
        });
    } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
    return t;
}

function u(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

function a(t, e) {
    return l(t) || f(t, e) || c();
}

function c() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function f(t, e) {
    var r = [], n = !0, i = !1, o = void 0;
    try {
        for (var u, a = t[Symbol.iterator](); !(n = (u = a.next()).done) && (r.push(u.value), 
        !e || r.length !== e); n = !0) ;
    } catch (t) {
        i = !0, o = t;
    } finally {
        try {
            n || null == a.return || a.return();
        } finally {
            if (i) throw o;
        }
    }
    return r;
}

function l(t) {
    if (Array.isArray(t)) return t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var s = t(require("A29700E4480303CFC4F168E31281F6C0.js")), d = t(require("0301B584480303CF6567DD83B8D1F6C0.js")), p = function(t) {
    return (0 < arguments.length && void 0 !== t ? t : "").replace(/\s/g, "");
}, y = Behavior({
    lifetimes: {
        attached: function() {
            this.initComputed();
        }
    },
    definitionFilter: function(t) {
        var r = t.computed, n = void 0 === r ? {} : r, i = Object.keys(n).reduce(function(t, e) {
            var r = a(Array.isArray(n[e]) ? n[e] : [ "**", n[e] ], 2), i = r[0], c = r[1];
            return o({}, t, u({}, i, function() {
                if ("function" == typeof c) {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    var i = c.apply(this, r), o = this.data[e];
                    (0, s.default)(i) || (0, d.default)(i, o) || this.setData(u({}, e, i));
                }
            }));
        }, {});
        Object.assign(t.observers = t.observers || {}, i), Object.assign(t.methods = t.methods || {}, {
            initComputed: function(t, r) {
                var n = 0 < arguments.length && void 0 !== t ? t : {}, u = 1 < arguments.length && void 0 !== r && r;
                if (!this.runInitComputed || u) {
                    this.runInitComputed = !1;
                    var a = this, c = o({}, this.data, {}, n);
                    Object.keys(i).forEach(function(t) {
                        var r = p(t).split(",").reduce(function(t, r) {
                            return [].concat(e(t), [ c[r] ]);
                        }, []);
                        i[t].apply(a, r);
                    }), this.runInitComputed = !0;
                }
            }
        });
    }
});

exports.default = y;