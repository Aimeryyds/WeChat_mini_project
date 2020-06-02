var n = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/typeof"));

function r(n) {
    return Object.prototype.toString.call(n);
}

function t(n, r) {
    return Object.prototype.hasOwnProperty.call(n, r);
}

function e(n) {
    return "[object Object]" === r(n);
}

function i(n) {
    return "[object Array]" === r(n);
}

function u(n) {
    return "[object String]" === r(n);
}

function o(n) {
    return "[object Number]" === r(n);
}

function f(n) {
    return "[object Map]" === r(n);
}

function a(n) {
    return "[object Set]" === r(n);
}

function c(n) {
    return "[object Function]" === r(n);
}

function l(n, r) {
    return n === r ? 0 !== n || 0 !== r || 1 / n == 1 / r : n != n && r != r;
}

function s(r, e) {
    if (l(r, e)) return !0;
    if ("object" !== (0, n.default)(r) || null === r || "object" !== (0, n.default)(e) || null === e) return !1;
    var i = Object.keys(r), u = Object.keys(e);
    if (i.length !== u.length) return !1;
    for (var o = 0; o < i.length; ) {
        if (!t(e, i[o]) || !l(r[i[o]], e[i[o]])) return !1;
        o += 1;
    }
    return !0;
}

function v(n, r) {
    if (!e(n)) return !1;
    i(r) || (r = j(r));
    for (var u = -1, o = r.length, f = !1; ++u < o; ) {
        var a = r[u] + "";
        if (!(f = null != n && t(n, a))) break;
        n = n[a];
    }
    return !(!f && ++u == o) && f;
}

function h(n, r) {
    var t = 0, u = arguments[2];
    if (i(n)) {
        for (3 !== arguments.length && (u = n[0]); t < n.length; ) u = r(u, n[t], t, n), 
        t += 1;
        return u;
    }
    if (e(n)) {
        var o = Object.keys(n);
        for (3 !== arguments.length && (u = n[o[0]]); t < o.length; ) {
            var f = o[t];
            u = r(u, n[f], f, n), t += 1;
        }
        return u;
    }
    return u;
}

function g(n, r) {
    var t = 0;
    if (i(n)) for (;t < n.length; ) {
        if (!1 === r(n[t], t, n)) break;
        t += 1;
    } else if (e(n)) for (var u = Object.keys(n); t < u.length; ) {
        var o = u[t];
        if (!1 === r(n[o], o, n)) break;
        t += 1;
    }
}

var b = ".".charCodeAt(0), p = /\\(\\)?/g, d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

function y(n) {
    var r = [];
    return n.charCodeAt(0) === b && r.push(""), n.replace(d, function(n, t, e, i) {
        var u = n;
        e ? u = i.replace(p, "$1") : t && (u = t.trim()), r.push(u);
    }), r;
}

function j(n) {
    return u(n) ? y(n) : [];
}

function m(n, r, t) {
    var i, u, o, f, a, c, l = 0, s = !1, v = !1, h = !0, g = !r && 0 !== r && "function" == typeof requestAnimationFrame;
    if ("function" != typeof n) throw new TypeError("Expected a function");
    function b(r) {
        var t = i, e = u;
        return i = u = void 0, l = r, f = n.apply(e, t);
    }
    function p(n, r) {
        return g ? (cancelAnimationFrame(a), requestAnimationFrame(n)) : setTimeout(n, r);
    }
    function d(n) {
        var t = n - c;
        return void 0 === c || t >= r || t < 0 || v && n - l >= o;
    }
    function y() {
        var n = Date.now();
        if (d(n)) return function(n) {
            if (a = void 0, h && i) return b(n);
            return i = u = void 0, f;
        }(n);
        a = p(y, function(n) {
            var t = n - l, e = r - (n - c);
            return v ? Math.min(e, o - t) : e;
        }(n));
    }
    return r = +r || 0, e(t) && (s = !!t.leading, o = (v = "maxWait" in t) ? Math.max(+t.maxWait || 0, r) : o, 
    h = "trailing" in t ? !!t.trailing : h), function() {
        for (var n = Date.now(), t = d(n), e = arguments.length, o = new Array(e), h = 0; h < e; h++) o[h] = arguments[h];
        if (i = o, u = this, c = n, t) {
            if (void 0 === a) return function(n) {
                return l = n, a = p(y, r), s ? b(n) : f;
            }(c);
            if (v) return a = p(y, r), b(c);
        }
        return void 0 === a && (a = p(y, r)), f;
    };
}

module.exports = exports = {
    getTag: r,
    hasOwnProperty: t,
    isObject: e,
    isArray: i,
    isString: u,
    isBoolean: function(n) {
        return "[object Boolean]" === r(n);
    },
    isNumber: o,
    isMap: f,
    isSet: a,
    isFunction: c,
    isEmpty: function(n) {
        return null == n || (i(n) || u(n) ? 0 === n.length : e(n) ? 0 === Object.keys(n).length : !f(n) && !a(n) || 0 === n.size);
    },
    isShallowEqual: s,
    has: v,
    reduce: h,
    forEach: g,
    map: function(n, r) {
        var t = [], u = 0;
        if (i(n)) for (;u < n.length; ) t.push(r(n[u], u, n)), u += 1; else if (e(n)) for (var o = Object.keys(n); u < o.length; ) {
            var f = o[u];
            t.push(r(n[f], f, n)), u += 1;
        }
        return t;
    },
    findIndex: function(n, r) {
        var t = -1;
        return g(n, function(n, i, u) {
            if (c(r)) {
                if (!0 === r(n, i, u)) return t = i, !1;
            } else {
                if (l(n, r)) return t = i, !1;
                if (e(n) && e(r)) {
                    var o = !0;
                    if (g(r, function(r, t) {
                        return o = s(n[t], r);
                    }), o) return t = i, !1;
                }
            }
        }), t;
    },
    find: function(n, r) {
        var t = void 0;
        return g(n, function(n, i, u) {
            if (c(r)) {
                if (!0 === r(n, i, u)) return t = n, !1;
            } else {
                if (l(n, r)) return t = n, !1;
                if (e(n) && e(r)) {
                    var o = !0;
                    if (g(r, function(r, t) {
                        return o = s(n[t], r);
                    }), o) return t = n, !1;
                }
            }
        }), t;
    },
    toPath: j,
    get: function(r, t, e) {
        if (null == r) return e;
        if (!Array.isArray(t)) {
            var i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u = /^\w*$/;
            t = function(r, t) {
                var e = (0, n.default)(r);
                return "number" == e || "boolean" == e || null == r || u.test(r) || !i.test(r) || null != t && r in Object(t);
            }(t, r) ? [ t ] : y(t);
        }
        for (var o = 0, f = t.length; null != r && o < f; ) r = r[t[o]], o += 1;
        return o && o === f ? void 0 === r ? e : r : e;
    },
    debounce: m,
    throttle: function(n, r, t) {
        var i = !0, u = !0;
        if ("function" != typeof n) throw new TypeError("Expected a function");
        return e(t) && (i = "leading" in t ? !!t.leading : i, u = "trailing" in t ? !!t.trailing : u), 
        m(n, r, {
            leading: i,
            trailing: u,
            maxWait: r
        });
    },
    pick: function(n) {
        if (null == n) return {};
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];
        return h(t, function(r, t) {
            return i(t) ? g(t, function(t) {
                v(n, t) && (r[t] = n[t]);
            }) : v(n, t) && (r[t] = n[t]), r;
        }, {});
    },
    omit: function(n) {
        if (null == n) return {};
        for (var r = Object.assign({}, n), t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), f = 1; f < t; f++) e[f - 1] = arguments[f];
        return g(e, function(n) {
            i(n) ? g(n, function(n) {
                (u(n) || o(n)) && delete r[n];
            }) : (u(n) || o(n)) && delete r[n];
        }), r;
    }
};