var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e, i) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define([ "exports" ], i) : i(e.zrender = {});
}(void 0, function(e) {
    function i(e) {
        if (null == e || "object" != (void 0 === e ? "undefined" : t(e))) return e;
        var r = e, n = Tr.call(e);
        if ("[object Array]" === n) {
            if (!T(e)) {
                r = [];
                for (var a = 0, o = e.length; a < o; a++) r[a] = i(e[a]);
            }
        } else if (kr[n]) {
            if (!T(e)) {
                var s = e.constructor;
                if (e.constructor.from) r = s.from(e); else {
                    r = new s(e.length);
                    for (var a = 0, o = e.length; a < o; a++) r[a] = i(e[a]);
                }
            }
        } else if (!br[n] && !T(e) && !y(e)) {
            r = {};
            for (var h in e) e.hasOwnProperty(h) && (r[h] = i(e[h]));
        }
        return r;
    }
    function r(t, e, n) {
        if (!_(e) || !_(t)) return n ? i(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a], s = e[a];
            !_(s) || !_(o) || p(s) || p(o) || y(s) || y(o) || m(s) || m(o) || T(s) || T(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n);
        }
        return t;
    }
    function n(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t;
    }
    function a(t, e, i) {
        for (var r in e) e.hasOwnProperty(r) && (i ? null != e[r] : null == t[r]) && (t[r] = e[r]);
        return t;
    }
    function o() {
        return Ir || (Ir = Dr().getContext("2d")), Ir;
    }
    function s(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, r = t.length; i < r; i++) if (t[i] === e) return i;
        }
        return -1;
    }
    function h(t, e) {
        function i() {}
        var r = t.prototype;
        i.prototype = e.prototype, t.prototype = new i();
        for (var n in r) t.prototype[n] = r[n];
        t.prototype.constructor = t, t.superClass = e;
    }
    function l(t, e, i) {
        a(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, i);
    }
    function u(t) {
        if (t) return "string" != typeof t && "number" == typeof t.length;
    }
    function c(t, e, i) {
        if (t && e) if (t.forEach && t.forEach === Sr) t.forEach(e, i); else if (t.length === +t.length) for (var r = 0, n = t.length; r < n; r++) e.call(i, t[r], r, t); else for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t);
    }
    function f(t, e, i) {
        if (t && e) {
            if (t.map && t.map === Lr) return t.map(e, i);
            for (var r = [], n = 0, a = t.length; n < a; n++) r.push(e.call(i, t[n], n, t));
            return r;
        }
    }
    function d(t, e) {
        var i = Pr.call(arguments, 2);
        return function() {
            return t.apply(e, i.concat(Pr.call(arguments)));
        };
    }
    function p(t) {
        return "[object Array]" === Tr.call(t);
    }
    function v(t) {
        return "function" == typeof t;
    }
    function g(t) {
        return "[object String]" === Tr.call(t);
    }
    function _(e) {
        var i = void 0 === e ? "undefined" : t(e);
        return "function" === i || !!e && "object" == i;
    }
    function m(t) {
        return !!br[Tr.call(t)];
    }
    function y(e) {
        return "object" === (void 0 === e ? "undefined" : t(e)) && "number" == typeof e.nodeType && "object" === t(e.ownerDocument);
    }
    function x(t, e) {
        return null != t ? t : e;
    }
    function w(t, e, i) {
        return null != t ? t : null != e ? e : i;
    }
    function b(t) {
        if ("number" == typeof t) return [ t, t, t, t ];
        var e = t.length;
        return 2 === e ? [ t[0], t[1], t[0], t[1] ] : 3 === e ? [ t[0], t[1], t[2], t[1] ] : t;
    }
    function k(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function T(t) {
        return t[Br];
    }
    function M(t) {
        function e(t, e) {
            i ? r.set(t, e) : r.set(e, t);
        }
        var i = p(t), r = this;
        t instanceof M ? t.each(e) : t && c(t, e);
    }
    function S(t, e) {
        var i = new Er(2);
        return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i;
    }
    function C(t) {
        var e = new Er(2);
        return e[0] = t[0], e[1] = t[1], e;
    }
    function P(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
    }
    function L(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
    }
    function A(t) {
        return Math.sqrt(z(t));
    }
    function z(t) {
        return t[0] * t[0] + t[1] * t[1];
    }
    function D(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t;
    }
    function I(t, e) {
        var i = A(e);
        return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t;
    }
    function B(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
    }
    function R(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
    }
    function E(t, e, i) {
        var r = e[0], n = e[1];
        return t[0] = i[0] * r + i[2] * n + i[4], t[1] = i[1] * r + i[3] * n + i[5], t;
    }
    function O(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
    }
    function H(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
    }
    function F() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), 
        this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
    }
    function W(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        };
    }
    function N(t, e, i) {
        return {
            type: t,
            event: i,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: i.zrX,
            offsetY: i.zrY,
            gestureEvent: i.gestureEvent,
            pinchX: i.pinchX,
            pinchY: i.pinchY,
            pinchScale: i.pinchScale,
            wheelDelta: i.zrDelta,
            zrByTouch: i.zrByTouch,
            which: i.which
        };
    }
    function V() {}
    function j(t, e, i) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
            for (var r, n = t; n; ) {
                if (n.clipPath && !n.clipPath.contain(e, i)) return !1;
                n.silent && (r = !0), n = n.parent;
            }
            return !r || qr;
        }
        return !1;
    }
    function q() {
        var t = new Yr(6);
        return X(t), t;
    }
    function X(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }
    function U(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
        t;
    }
    function Y(t, e, i) {
        var r = e[0] * i[0] + e[2] * i[1], n = e[1] * i[0] + e[3] * i[1], a = e[0] * i[2] + e[2] * i[3], o = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], h = e[1] * i[4] + e[3] * i[5] + e[5];
        return t[0] = r, t[1] = n, t[2] = a, t[3] = o, t[4] = s, t[5] = h, t;
    }
    function G(t, e, i) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], 
        t;
    }
    function Z(t, e, i) {
        var r = e[0], n = e[2], a = e[4], o = e[1], s = e[3], h = e[5], l = Math.sin(i), u = Math.cos(i);
        return t[0] = r * u + o * l, t[1] = -r * l + o * u, t[2] = n * u + s * l, t[3] = -n * l + u * s, 
        t[4] = u * a + l * h, t[5] = u * h - l * a, t;
    }
    function Q(t, e, i) {
        var r = i[0], n = i[1];
        return t[0] = e[0] * r, t[1] = e[1] * n, t[2] = e[2] * r, t[3] = e[3] * n, t[4] = e[4] * r, 
        t[5] = e[5] * n, t;
    }
    function $(t, e) {
        var i = e[0], r = e[2], n = e[4], a = e[1], o = e[3], s = e[5], h = i * o - a * r;
        return h ? (h = 1 / h, t[0] = o * h, t[1] = -a * h, t[2] = -r * h, t[3] = i * h, 
        t[4] = (r * s - o * n) * h, t[5] = (a * n - i * s) * h, t) : null;
    }
    function K(t) {
        return t > Qr || t < -Qr;
    }
    function J(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, 
        this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, 
        this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, 
        this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
    }
    function tt(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t;
    }
    function et(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t;
    }
    function it(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t;
    }
    function rt(t) {
        return tt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
    }
    function nt(t) {
        return it(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
    }
    function at(t, e, i) {
        return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t;
    }
    function ot(t, e, i) {
        return t + (e - t) * i;
    }
    function st(t, e, i, r, n) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t;
    }
    function ht(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
    }
    function lt(t, e) {
        ln && ht(ln, e), ln = hn.put(t, ln || e.slice());
    }
    function ut(t, e) {
        if (t) {
            e = e || [];
            var i = hn.get(t);
            if (i) return ht(e, i);
            var r = (t += "").replace(/ /g, "").toLowerCase();
            if (r in sn) return ht(e, sn[r]), lt(t, e), e;
            if ("#" !== r.charAt(0)) {
                var n = r.indexOf("("), a = r.indexOf(")");
                if (-1 !== n && a + 1 === r.length) {
                    var o = r.substr(0, n), s = r.substr(n + 1, a - (n + 1)).split(","), h = 1;
                    switch (o) {
                      case "rgba":
                        if (4 !== s.length) return void st(e, 0, 0, 0, 1);
                        h = nt(s.pop());

                      case "rgb":
                        return 3 !== s.length ? void st(e, 0, 0, 0, 1) : (st(e, rt(s[0]), rt(s[1]), rt(s[2]), h), 
                        lt(t, e), e);

                      case "hsla":
                        return 4 !== s.length ? void st(e, 0, 0, 0, 1) : (s[3] = nt(s[3]), ct(s, e), lt(t, e), 
                        e);

                      case "hsl":
                        return 3 !== s.length ? void st(e, 0, 0, 0, 1) : (ct(s, e), lt(t, e), e);

                      default:
                        return;
                    }
                }
                st(e, 0, 0, 0, 1);
            } else {
                if (4 === r.length) return (l = parseInt(r.substr(1), 16)) >= 0 && l <= 4095 ? (st(e, (3840 & l) >> 4 | (3840 & l) >> 8, 240 & l | (240 & l) >> 4, 15 & l | (15 & l) << 4, 1), 
                lt(t, e), e) : void st(e, 0, 0, 0, 1);
                if (7 === r.length) {
                    var l = parseInt(r.substr(1), 16);
                    return l >= 0 && l <= 16777215 ? (st(e, (16711680 & l) >> 16, (65280 & l) >> 8, 255 & l, 1), 
                    lt(t, e), e) : void st(e, 0, 0, 0, 1);
                }
            }
        }
    }
    function ct(t, e) {
        var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360, r = nt(t[1]), n = nt(t[2]), a = n <= .5 ? n * (r + 1) : n + r - n * r, o = 2 * n - a;
        return e = e || [], st(e, tt(255 * at(o, a, i + 1 / 3)), tt(255 * at(o, a, i)), tt(255 * at(o, a, i - 1 / 3)), 1), 
        4 === t.length && (e[3] = t[3]), e;
    }
    function ft(t) {
        if (t) {
            var e, i, r = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = Math.min(r, n, a), s = Math.max(r, n, a), h = s - o, l = (s + o) / 2;
            if (0 === h) e = 0, i = 0; else {
                i = l < .5 ? h / (s + o) : h / (2 - s - o);
                var u = ((s - r) / 6 + h / 2) / h, c = ((s - n) / 6 + h / 2) / h, f = ((s - a) / 6 + h / 2) / h;
                r === s ? e = f - c : n === s ? e = 1 / 3 + u - f : a === s && (e = 2 / 3 + c - u), 
                e < 0 && (e += 1), e > 1 && (e -= 1);
            }
            var d = [ 360 * e, i, l ];
            return null != t[3] && d.push(t[3]), d;
        }
    }
    function dt(t, e, i) {
        if (e && e.length && t >= 0 && t <= 1) {
            i = i || [];
            var r = t * (e.length - 1), n = Math.floor(r), a = Math.ceil(r), o = e[n], s = e[a], h = r - n;
            return i[0] = tt(ot(o[0], s[0], h)), i[1] = tt(ot(o[1], s[1], h)), i[2] = tt(ot(o[2], s[2], h)), 
            i[3] = it(ot(o[3], s[3], h)), i;
        }
    }
    function pt(t, e, i) {
        if (e && e.length && t >= 0 && t <= 1) {
            var r = t * (e.length - 1), n = Math.floor(r), a = Math.ceil(r), o = ut(e[n]), s = ut(e[a]), h = r - n, l = vt([ tt(ot(o[0], s[0], h)), tt(ot(o[1], s[1], h)), tt(ot(o[2], s[2], h)), it(ot(o[3], s[3], h)) ], "rgba");
            return i ? {
                color: l,
                leftIndex: n,
                rightIndex: a,
                value: r
            } : l;
        }
    }
    function vt(t, e) {
        if (t && t.length) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")";
        }
    }
    function gt(t, e) {
        return t[e];
    }
    function _t(t, e, i) {
        t[e] = i;
    }
    function mt(t, e, i) {
        return (e - t) * i + t;
    }
    function yt(t, e, i) {
        return i > .5 ? e : t;
    }
    function xt(t, e, i, r, n) {
        var a = t.length;
        if (1 == n) for (s = 0; s < a; s++) r[s] = mt(t[s], e[s], i); else for (var o = a && t[0].length, s = 0; s < a; s++) for (var h = 0; h < o; h++) r[s][h] = mt(t[s][h], e[s][h], i);
    }
    function wt(t, e, i) {
        var r = t.length, n = e.length;
        if (r !== n) if (r > n) t.length = n; else for (o = r; o < n; o++) t.push(1 === i ? e[o] : dn.call(e[o]));
        for (var a = t[0] && t[0].length, o = 0; o < t.length; o++) if (1 === i) isNaN(t[o]) && (t[o] = e[o]); else for (var s = 0; s < a; s++) isNaN(t[o][s]) && (t[o][s] = e[o][s]);
    }
    function bt(t, e, i) {
        if (t === e) return !0;
        var r = t.length;
        if (r !== e.length) return !1;
        if (1 === i) {
            for (a = 0; a < r; a++) if (t[a] !== e[a]) return !1;
        } else for (var n = t[0].length, a = 0; a < r; a++) for (var o = 0; o < n; o++) if (t[a][o] !== e[a][o]) return !1;
        return !0;
    }
    function kt(t, e, i, r, n, a, o, s, h) {
        var l = t.length;
        if (1 == h) for (c = 0; c < l; c++) s[c] = Tt(t[c], e[c], i[c], r[c], n, a, o); else for (var u = t[0].length, c = 0; c < l; c++) for (var f = 0; f < u; f++) s[c][f] = Tt(t[c][f], e[c][f], i[c][f], r[c][f], n, a, o);
    }
    function Tt(t, e, i, r, n, a, o) {
        var s = .5 * (i - t), h = .5 * (r - e);
        return (2 * (e - i) + s + h) * o + (-3 * (e - i) - 2 * s - h) * a + s * n + e;
    }
    function Mt(t) {
        if (u(t)) {
            var e = t.length;
            if (u(t[0])) {
                for (var i = [], r = 0; r < e; r++) i.push(dn.call(t[r]));
                return i;
            }
            return dn.call(t);
        }
        return t;
    }
    function St(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), 
        "rgba(" + t.join(",") + ")";
    }
    function Ct(t) {
        var e = t[t.length - 1].value;
        return u(e && e[0]) ? 2 : 1;
    }
    function Pt(t, e, i, r, n, a) {
        var o = t._getter, s = t._setter, h = "spline" === e, l = r.length;
        if (l) {
            var c, f = u(r[0].value), d = !1, p = !1, v = f ? Ct(r) : 0;
            r.sort(function(t, e) {
                return t.time - e.time;
            }), c = r[l - 1].time;
            for (var g = [], _ = [], m = r[0].value, y = !0, x = 0; x < l; x++) {
                g.push(r[x].time / c);
                var w = r[x].value;
                if (f && bt(w, m, v) || !f && w === m || (y = !1), m = w, "string" == typeof w) {
                    var b = ut(w);
                    b ? (w = b, d = !0) : p = !0;
                }
                _.push(w);
            }
            if (a || !y) {
                for (var k = _[l - 1], x = 0; x < l - 1; x++) f ? wt(_[x], k, v) : !isNaN(_[x]) || isNaN(k) || p || d || (_[x] = k);
                f && wt(o(t._target, n), k, v);
                var T, M, S, C, P, L, A = 0, z = 0;
                if (d) var D = [ 0, 0, 0, 0 ];
                var I = new J({
                    target: t._target,
                    life: c,
                    loop: t._loop,
                    delay: t._delay,
                    onframe: function(t, e) {
                        var i;
                        if (e < 0) i = 0; else if (e < z) {
                            for (i = T = Math.min(A + 1, l - 1); i >= 0 && !(g[i] <= e); i--) ;
                            i = Math.min(i, l - 2);
                        } else {
                            for (i = A; i < l && !(g[i] > e); i++) ;
                            i = Math.min(i - 1, l - 2);
                        }
                        A = i, z = e;
                        var r = g[i + 1] - g[i];
                        if (0 !== r) if (M = (e - g[i]) / r, h) if (C = _[i], S = _[0 === i ? i : i - 1], 
                        P = _[i > l - 2 ? l - 1 : i + 1], L = _[i > l - 3 ? l - 1 : i + 2], f) kt(S, C, P, L, M, M * M, M * M * M, o(t, n), v); else {
                            if (d) a = kt(S, C, P, L, M, M * M, M * M * M, D, 1), a = St(D); else {
                                if (p) return yt(C, P, M);
                                a = Tt(S, C, P, L, M, M * M, M * M * M);
                            }
                            s(t, n, a);
                        } else if (f) xt(_[i], _[i + 1], M, o(t, n), v); else {
                            var a;
                            if (d) xt(_[i], _[i + 1], M, D, 1), a = St(D); else {
                                if (p) return yt(_[i], _[i + 1], M);
                                a = mt(_[i], _[i + 1], M);
                            }
                            s(t, n, a);
                        }
                    },
                    ondestroy: i
                });
                return e && "spline" !== e && (I.easing = e), I;
            }
        }
    }
    function Lt(t, e, i, r) {
        i < 0 && (t += i, i = -i), r < 0 && (e += r, r = -r), this.x = t, this.y = e, this.width = i, 
        this.height = r;
    }
    function At(t) {
        for (var e = 0; t >= Mn; ) e |= 1 & t, t >>= 1;
        return t + e;
    }
    function zt(t, e, i, r) {
        var n = e + 1;
        if (n === i) return 1;
        if (r(t[n++], t[e]) < 0) {
            for (;n < i && r(t[n], t[n - 1]) < 0; ) n++;
            Dt(t, e, n);
        } else for (;n < i && r(t[n], t[n - 1]) >= 0; ) n++;
        return n - e;
    }
    function Dt(t, e, i) {
        for (i--; e < i; ) {
            var r = t[e];
            t[e++] = t[i], t[i--] = r;
        }
    }
    function It(t, e, i, r, n) {
        for (r === e && r++; r < i; r++) {
            for (var a, o = t[r], s = e, h = r; s < h; ) n(o, t[a = s + h >>> 1]) < 0 ? h = a : s = a + 1;
            var l = r - s;
            switch (l) {
              case 3:
                t[s + 3] = t[s + 2];

              case 2:
                t[s + 2] = t[s + 1];

              case 1:
                t[s + 1] = t[s];
                break;

              default:
                for (;l > 0; ) t[s + l] = t[s + l - 1], l--;
            }
            t[s] = o;
        }
    }
    function Bt(t, e, i, r, n, a) {
        var o = 0, s = 0, h = 1;
        if (a(t, e[i + n]) > 0) {
            for (s = r - n; h < s && a(t, e[i + n + h]) > 0; ) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
            h > s && (h = s), o += n, h += n;
        } else {
            for (s = n + 1; h < s && a(t, e[i + n - h]) <= 0; ) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
            h > s && (h = s);
            var l = o;
            o = n - h, h = n - l;
        }
        for (o++; o < h; ) {
            var u = o + (h - o >>> 1);
            a(t, e[i + u]) > 0 ? o = u + 1 : h = u;
        }
        return h;
    }
    function Rt(t, e, i, r, n, a) {
        var o = 0, s = 0, h = 1;
        if (a(t, e[i + n]) < 0) {
            for (s = n + 1; h < s && a(t, e[i + n - h]) < 0; ) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
            h > s && (h = s);
            var l = o;
            o = n - h, h = n - l;
        } else {
            for (s = r - n; h < s && a(t, e[i + n + h]) >= 0; ) o = h, (h = 1 + (h << 1)) <= 0 && (h = s);
            h > s && (h = s), o += n, h += n;
        }
        for (o++; o < h; ) {
            var u = o + (h - o >>> 1);
            a(t, e[i + u]) < 0 ? h = u : o = u + 1;
        }
        return h;
    }
    function Et(t, e) {
        function i(i) {
            var s = a[i], l = o[i], u = a[i + 1], c = o[i + 1];
            o[i] = l + c, i === h - 3 && (a[i + 1] = a[i + 2], o[i + 1] = o[i + 2]), h--;
            var f = Rt(t[u], t, s, l, 0, e);
            s += f, 0 !== (l -= f) && 0 !== (c = Bt(t[s + l - 1], t, u, c, c - 1, e)) && (l <= c ? r(s, l, u, c) : n(s, l, u, c));
        }
        function r(i, r, n, a) {
            var o = 0;
            for (o = 0; o < r; o++) l[o] = t[i + o];
            var h = 0, u = n, c = i;
            if (t[c++] = t[u++], 0 != --a) if (1 !== r) {
                for (var f, d, p, v = s; ;) {
                    f = 0, d = 0, p = !1;
                    do {
                        if (e(t[u], l[h]) < 0) {
                            if (t[c++] = t[u++], d++, f = 0, 0 == --a) {
                                p = !0;
                                break;
                            }
                        } else if (t[c++] = l[h++], f++, d = 0, 1 == --r) {
                            p = !0;
                            break;
                        }
                    } while ((f | d) < v);
                    if (p) break;
                    do {
                        if (0 !== (f = Rt(t[u], l, h, r, 0, e))) {
                            for (o = 0; o < f; o++) t[c + o] = l[h + o];
                            if (c += f, h += f, (r -= f) <= 1) {
                                p = !0;
                                break;
                            }
                        }
                        if (t[c++] = t[u++], 0 == --a) {
                            p = !0;
                            break;
                        }
                        if (0 !== (d = Bt(l[h], t, u, a, 0, e))) {
                            for (o = 0; o < d; o++) t[c + o] = t[u + o];
                            if (c += d, u += d, 0 === (a -= d)) {
                                p = !0;
                                break;
                            }
                        }
                        if (t[c++] = l[h++], 1 == --r) {
                            p = !0;
                            break;
                        }
                        v--;
                    } while (f >= Sn || d >= Sn);
                    if (p) break;
                    v < 0 && (v = 0), v += 2;
                }
                if ((s = v) < 1 && (s = 1), 1 === r) {
                    for (o = 0; o < a; o++) t[c + o] = t[u + o];
                    t[c + a] = l[h];
                } else {
                    if (0 === r) throw new Error();
                    for (o = 0; o < r; o++) t[c + o] = l[h + o];
                }
            } else {
                for (o = 0; o < a; o++) t[c + o] = t[u + o];
                t[c + a] = l[h];
            } else for (o = 0; o < r; o++) t[c + o] = l[h + o];
        }
        function n(i, r, n, a) {
            var o = 0;
            for (o = 0; o < a; o++) l[o] = t[n + o];
            var h = i + r - 1, u = a - 1, c = n + a - 1, f = 0, d = 0;
            if (t[c--] = t[h--], 0 != --r) if (1 !== a) {
                for (var p = s; ;) {
                    var v = 0, g = 0, _ = !1;
                    do {
                        if (e(l[u], t[h]) < 0) {
                            if (t[c--] = t[h--], v++, g = 0, 0 == --r) {
                                _ = !0;
                                break;
                            }
                        } else if (t[c--] = l[u--], g++, v = 0, 1 == --a) {
                            _ = !0;
                            break;
                        }
                    } while ((v | g) < p);
                    if (_) break;
                    do {
                        if (0 != (v = r - Rt(l[u], t, i, r, r - 1, e))) {
                            for (r -= v, d = (c -= v) + 1, f = (h -= v) + 1, o = v - 1; o >= 0; o--) t[d + o] = t[f + o];
                            if (0 === r) {
                                _ = !0;
                                break;
                            }
                        }
                        if (t[c--] = l[u--], 1 == --a) {
                            _ = !0;
                            break;
                        }
                        if (0 != (g = a - Bt(t[h], l, 0, a, a - 1, e))) {
                            for (a -= g, d = (c -= g) + 1, f = (u -= g) + 1, o = 0; o < g; o++) t[d + o] = l[f + o];
                            if (a <= 1) {
                                _ = !0;
                                break;
                            }
                        }
                        if (t[c--] = t[h--], 0 == --r) {
                            _ = !0;
                            break;
                        }
                        p--;
                    } while (v >= Sn || g >= Sn);
                    if (_) break;
                    p < 0 && (p = 0), p += 2;
                }
                if ((s = p) < 1 && (s = 1), 1 === a) {
                    for (d = (c -= r) + 1, f = (h -= r) + 1, o = r - 1; o >= 0; o--) t[d + o] = t[f + o];
                    t[c] = l[u];
                } else {
                    if (0 === a) throw new Error();
                    for (f = c - (a - 1), o = 0; o < a; o++) t[f + o] = l[o];
                }
            } else {
                for (d = (c -= r) + 1, f = (h -= r) + 1, o = r - 1; o >= 0; o--) t[d + o] = t[f + o];
                t[c] = l[u];
            } else for (f = c - (a - 1), o = 0; o < a; o++) t[f + o] = l[o];
        }
        var a, o, s = Sn, h = 0, l = [];
        a = [], o = [], this.mergeRuns = function() {
            for (;h > 1; ) {
                var t = h - 2;
                if (t >= 1 && o[t - 1] <= o[t] + o[t + 1] || t >= 2 && o[t - 2] <= o[t] + o[t - 1]) o[t - 1] < o[t + 1] && t--; else if (o[t] > o[t + 1]) break;
                i(t);
            }
        }, this.forceMergeRuns = function() {
            for (;h > 1; ) {
                var t = h - 2;
                t > 0 && o[t - 1] < o[t + 1] && t--, i(t);
            }
        }, this.pushRun = function(t, e) {
            a[h] = t, o[h] = e, h += 1;
        };
    }
    function Ot(t, e, i, r) {
        i || (i = 0), r || (r = t.length);
        var n = r - i;
        if (!(n < 2)) {
            var a = 0;
            if (n < Mn) return a = zt(t, i, r, e), void It(t, i, r, i + a, e);
            var o = new Et(t, e), s = At(n);
            do {
                if ((a = zt(t, i, r, e)) < s) {
                    var h = n;
                    h > s && (h = s), It(t, i, i + h, i + a, e), a = h;
                }
                o.pushRun(i, a), o.mergeRuns(), n -= a, i += a;
            } while (0 !== n);
            o.forceMergeRuns();
        }
    }
    function Ht(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
    }
    function Ft(t, e, i) {
        var r = null == e.x ? 0 : e.x, n = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y, o = null == e.y2 ? 0 : e.y2;
        return e.global || (r = r * i.width + i.x, n = n * i.width + i.x, a = a * i.height + i.y, 
        o = o * i.height + i.y), r = isNaN(r) ? 0 : r, n = isNaN(n) ? 1 : n, a = isNaN(a) ? 0 : a, 
        o = isNaN(o) ? 0 : o, t.createLinearGradient(r, a, n, o);
    }
    function Wt(t, e, i) {
        var r = i.width, n = i.height, a = Math.min(r, n), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y, h = null == e.r ? .5 : e.r;
        return e.global || (o = o * r + i.x, s = s * n + i.y, h *= a), t.createRadialGradient(o, s, 0, o, s, h);
    }
    function Nt() {
        return !1;
    }
    function Vt(t, e, i) {
        var r = Dr(), n = e.getWidth(), a = e.getHeight(), o = r.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = n + "px", 
        o.height = a + "px", r.setAttribute("data-zr-dom-id", t)), r.width = n * i, r.height = a * i, 
        r;
    }
    function jt(t) {
        if ("string" == typeof t) {
            var e = Hn.get(t);
            return e && e.image;
        }
        return t;
    }
    function qt(t, e, i, r, n) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !i) return e;
                var a = Hn.get(t), o = {
                    hostEl: i,
                    cb: r,
                    cbPayload: n
                };
                return a ? !Ut(e = a.image) && a.pending.push(o) : (!e && (e = new Image()), e.onload = Xt, 
                Hn.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [ o ]
                }), e.src = e.__zrImageSrc = t), e;
            }
            return t;
        }
        return e;
    }
    function Xt() {
        var t = this.__cachedImgObj;
        this.onload = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var i = t.pending[e], r = i.cb;
            r && r(this, i.cbPayload), i.hostEl.dirty();
        }
        t.pending.length = 0;
    }
    function Ut(t) {
        return t && t.width && t.height;
    }
    function Yt(t, e) {
        var i = t + ":" + (e = e || jn);
        if (Fn[i]) return Fn[i];
        for (var r = (t + "").split("\n"), n = 0, a = 0, o = r.length; a < o; a++) n = Math.max(ae(r[a], e).width, n);
        return Wn > Nn && (Wn = 0, Fn = {}), Wn++, Fn[i] = n, n;
    }
    function Gt(t, e, i, r, n, a, o) {
        return a ? Qt(t, e, i, r, n, a, o) : Zt(t, e, i, r, n, o);
    }
    function Zt(t, e, i, r, n, a) {
        var o = oe(t, e, n, a), s = Yt(t, e);
        n && (s += n[1] + n[3]);
        var h = o.outerHeight, l = new Lt($t(0, s, i), Kt(0, h, r), s, h);
        return l.lineHeight = o.lineHeight, l;
    }
    function Qt(t, e, i, r, n, a, o) {
        var s = se(t, {
            rich: a,
            truncate: o,
            font: e,
            textAlign: i,
            textPadding: n
        }), h = s.outerWidth, l = s.outerHeight;
        return new Lt($t(0, h, i), Kt(0, l, r), h, l);
    }
    function $t(t, e, i) {
        return "right" === i ? t -= e : "center" === i && (t -= e / 2), t;
    }
    function Kt(t, e, i) {
        return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t;
    }
    function Jt(t, e, i) {
        var r = e.x, n = e.y, a = e.height, o = e.width, s = a / 2, h = "left", l = "top";
        switch (t) {
          case "left":
            r -= i, n += s, h = "right", l = "middle";
            break;

          case "right":
            r += i + o, n += s, l = "middle";
            break;

          case "top":
            r += o / 2, n -= i, h = "center", l = "bottom";
            break;

          case "bottom":
            r += o / 2, n += a + i, h = "center";
            break;

          case "inside":
            r += o / 2, n += s, h = "center", l = "middle";
            break;

          case "insideLeft":
            r += i, n += s, l = "middle";
            break;

          case "insideRight":
            r += o - i, n += s, h = "right", l = "middle";
            break;

          case "insideTop":
            r += o / 2, n += i, h = "center";
            break;

          case "insideBottom":
            r += o / 2, n += a - i, h = "center", l = "bottom";
            break;

          case "insideTopLeft":
            r += i, n += i;
            break;

          case "insideTopRight":
            r += o - i, n += i, h = "right";
            break;

          case "insideBottomLeft":
            r += i, n += a - i, l = "bottom";
            break;

          case "insideBottomRight":
            r += o - i, n += a - i, h = "right", l = "bottom";
        }
        return {
            x: r,
            y: n,
            textAlign: h,
            textVerticalAlign: l
        };
    }
    function te(t, e, i, r, n) {
        if (!e) return "";
        var a = (t + "").split("\n");
        n = ee(e, i, r, n);
        for (var o = 0, s = a.length; o < s; o++) a[o] = ie(a[o], n);
        return a.join("\n");
    }
    function ee(t, e, i, r) {
        (r = n({}, r)).font = e;
        var i = x(i, "...");
        r.maxIterations = x(r.maxIterations, 2);
        var a = r.minChar = x(r.minChar, 0);
        r.cnCharWidth = Yt("国", e);
        var o = r.ascCharWidth = Yt("a", e);
        r.placeholder = x(r.placeholder, "");
        for (var s = t = Math.max(0, t - 1), h = 0; h < a && s >= o; h++) s -= o;
        var l = Yt(i);
        return l > s && (i = "", l = 0), s = t - l, r.ellipsis = i, r.ellipsisWidth = l, 
        r.contentWidth = s, r.containerWidth = t, r;
    }
    function ie(t, e) {
        var i = e.containerWidth, r = e.font, n = e.contentWidth;
        if (!i) return "";
        var a = Yt(t, r);
        if (a <= i) return t;
        for (var o = 0; ;o++) {
            if (a <= n || o >= e.maxIterations) {
                t += e.ellipsis;
                break;
            }
            var s = 0 === o ? re(t, n, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * n / a) : 0;
            a = Yt(t = t.substr(0, s), r);
        }
        return "" === t && (t = e.placeholder), t;
    }
    function re(t, e, i, r) {
        for (var n = 0, a = 0, o = t.length; a < o && n < e; a++) {
            var s = t.charCodeAt(a);
            n += 0 <= s && s <= 127 ? i : r;
        }
        return a;
    }
    function ne(t) {
        return Yt("国", t);
    }
    function ae(t, e) {
        return qn.measureText(t, e);
    }
    function oe(t, e, i, r) {
        null != t && (t += "");
        var n = ne(e), a = t ? t.split("\n") : [], o = a.length * n, s = o;
        if (i && (s += i[0] + i[2]), t && r) {
            var h = r.outerHeight, l = r.outerWidth;
            if (null != h && s > h) t = "", a = []; else if (null != l) for (var u = ee(l - (i ? i[1] + i[3] : 0), e, r.ellipsis, {
                minChar: r.minChar,
                placeholder: r.placeholder
            }), c = 0, f = a.length; c < f; c++) a[c] = ie(a[c], u);
        }
        return {
            lines: a,
            height: o,
            outerHeight: s,
            lineHeight: n
        };
    }
    function se(t, e) {
        var i = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""), !t) return i;
        for (var r, n = Vn.lastIndex = 0; null != (r = Vn.exec(t)); ) {
            var a = r.index;
            a > n && he(i, t.substring(n, a)), he(i, r[2], r[1]), n = Vn.lastIndex;
        }
        n < t.length && he(i, t.substring(n, t.length));
        var o = i.lines, s = 0, h = 0, l = [], u = e.textPadding, c = e.truncate, f = c && c.outerWidth, d = c && c.outerHeight;
        u && (null != f && (f -= u[1] + u[3]), null != d && (d -= u[0] + u[2]));
        for (A = 0; A < o.length; A++) {
            for (var p = o[A], v = 0, g = 0, _ = 0; _ < p.tokens.length; _++) {
                var m = (z = p.tokens[_]).styleName && e.rich[z.styleName] || {}, y = z.textPadding = m.textPadding, b = z.font = m.font || e.font, k = z.textHeight = x(m.textHeight, ne(b));
                if (y && (k += y[0] + y[2]), z.height = k, z.lineHeight = w(m.textLineHeight, e.textLineHeight, k), 
                z.textAlign = m && m.textAlign || e.textAlign, z.textVerticalAlign = m && m.textVerticalAlign || "middle", 
                null != d && s + z.lineHeight > d) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                z.textWidth = Yt(z.text, b);
                var T = m.textWidth, M = null == T || "auto" === T;
                if ("string" == typeof T && "%" === T.charAt(T.length - 1)) z.percentWidth = T, 
                l.push(z), T = 0; else {
                    if (M) {
                        T = z.textWidth;
                        var S = m.textBackgroundColor, C = S && S.image;
                        C && Ut(C = jt(C)) && (T = Math.max(T, C.width * k / C.height));
                    }
                    var P = y ? y[1] + y[3] : 0;
                    T += P;
                    var L = null != f ? f - g : null;
                    null != L && L < T && (!M || L < P ? (z.text = "", z.textWidth = T = 0) : (z.text = te(z.text, L - P, b, c.ellipsis, {
                        minChar: c.minChar
                    }), z.textWidth = Yt(z.text, b), T = z.textWidth + P));
                }
                g += z.width = T, m && (v = Math.max(v, z.lineHeight));
            }
            p.width = g, p.lineHeight = v, s += v, h = Math.max(h, g);
        }
        i.outerWidth = i.width = x(e.textWidth, h), i.outerHeight = i.height = x(e.textHeight, s), 
        u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);
        for (var A = 0; A < l.length; A++) {
            var z = l[A], D = z.percentWidth;
            z.width = parseInt(D, 10) / 100 * h;
        }
        return i;
    }
    function he(t, e, i) {
        for (var r = "" === e, n = e.split("\n"), a = t.lines, o = 0; o < n.length; o++) {
            var s = n[o], h = {
                styleName: i,
                text: s,
                isLineHolder: !s && !r
            };
            if (o) a.push({
                tokens: [ h ]
            }); else {
                var l = (a[a.length - 1] || (a[0] = {
                    tokens: []
                })).tokens, u = l.length;
                1 === u && l[0].isLineHolder ? l[0] = h : (s || !u || r) && l.push(h);
            }
        }
    }
    function le(t) {
        var e = (t.fontSize || t.fontFamily) && [ t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif" ].join(" ");
        return e && k(e) || t.textFont || t.font;
    }
    function ue(t, e) {
        var i, r, n, a, o = e.x, s = e.y, h = e.width, l = e.height, u = e.r;
        h < 0 && (o += h, h = -h), l < 0 && (s += l, l = -l), "number" == typeof u ? i = r = n = a = u : u instanceof Array ? 1 === u.length ? i = r = n = a = u[0] : 2 === u.length ? (i = n = u[0], 
        r = a = u[1]) : 3 === u.length ? (i = u[0], r = a = u[1], n = u[2]) : (i = u[0], 
        r = u[1], n = u[2], a = u[3]) : i = r = n = a = 0;
        var c;
        i + r > h && (i *= h / (c = i + r), r *= h / c), n + a > h && (n *= h / (c = n + a), 
        a *= h / c), r + n > l && (r *= l / (c = r + n), n *= l / c), i + a > l && (i *= l / (c = i + a), 
        a *= l / c), t.moveTo(o + i, s), t.lineTo(o + h - r, s), 0 !== r && t.arc(o + h - r, s + r, r, -Math.PI / 2, 0), 
        t.lineTo(o + h, s + l - n), 0 !== n && t.arc(o + h - n, s + l - n, n, 0, Math.PI / 2), 
        t.lineTo(o + a, s + l), 0 !== a && t.arc(o + a, s + l - a, a, Math.PI / 2, Math.PI), 
        t.lineTo(o, s + i), 0 !== i && t.arc(o + i, s + i, i, Math.PI, 1.5 * Math.PI);
    }
    function ce(t) {
        return fe(t), c(t.rich, fe), t;
    }
    function fe(t) {
        if (t) {
            t.font = le(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || Xn[e] ? e : "left";
            var i = t.textVerticalAlign || t.textBaseline;
            "center" === i && (i = "middle"), t.textVerticalAlign = null == i || Un[i] ? i : "top", 
            t.textPadding && (t.textPadding = b(t.textPadding));
        }
    }
    function de(t, e, i, r, n) {
        r.rich ? ve(t, e, i, r, n) : pe(t, e, i, r, n);
    }
    function pe(t, e, i, r, n) {
        var a = ke(e, "font", r.font || jn), o = r.textPadding, s = t.__textCotentBlock;
        s && !t.__dirty || (s = t.__textCotentBlock = oe(i, a, o, r.truncate));
        var h = s.outerHeight, l = s.lines, u = s.lineHeight, c = be(h, r, n), f = c.baseX, d = c.baseY, p = c.textAlign, v = c.textVerticalAlign;
        _e(e, r, n, f, d);
        var g = Kt(d, h, v), _ = f, m = g, y = ye(r);
        if (y || o) {
            var x = Yt(i, a);
            o && (x += o[1] + o[3]);
            var w = $t(f, x, p);
            y && xe(t, e, r, w, g, x, h), o && (_ = Ce(f, p, o), m += o[0]);
        }
        ke(e, "textAlign", p || "left"), ke(e, "textBaseline", "middle"), ke(e, "shadowBlur", r.textShadowBlur || 0), 
        ke(e, "shadowColor", r.textShadowColor || "transparent"), ke(e, "shadowOffsetX", r.textShadowOffsetX || 0), 
        ke(e, "shadowOffsetY", r.textShadowOffsetY || 0), m += u / 2;
        var b = r.textStrokeWidth, k = Te(r.textStroke, b), T = Me(r.textFill);
        k && (ke(e, "lineWidth", b), ke(e, "strokeStyle", k)), T && ke(e, "fillStyle", T);
        for (var M = 0; M < l.length; M++) k && e.strokeText(l[M], _, m), T && e.fillText(l[M], _, m), 
        m += u;
    }
    function ve(t, e, i, r, n) {
        var a = t.__textCotentBlock;
        a && !t.__dirty || (a = t.__textCotentBlock = se(i, r)), ge(t, e, a, r, n);
    }
    function ge(t, e, i, r, n) {
        var a = i.width, o = i.outerWidth, s = i.outerHeight, h = r.textPadding, l = be(s, r, n), u = l.baseX, c = l.baseY, f = l.textAlign, d = l.textVerticalAlign;
        _e(e, r, n, u, c);
        var p = $t(u, o, f), v = Kt(c, s, d), g = p, _ = v;
        h && (g += h[3], _ += h[0]);
        var m = g + a;
        ye(r) && xe(t, e, r, p, v, o, s);
        for (var y = 0; y < i.lines.length; y++) {
            for (var x, w = i.lines[y], b = w.tokens, k = b.length, T = w.lineHeight, M = w.width, S = 0, C = g, P = m, L = k - 1; S < k && (!(x = b[S]).textAlign || "left" === x.textAlign); ) me(t, e, x, r, T, _, C, "left"), 
            M -= x.width, C += x.width, S++;
            for (;L >= 0 && "right" === (x = b[L]).textAlign; ) me(t, e, x, r, T, _, P, "right"), 
            M -= x.width, P -= x.width, L--;
            for (C += (a - (C - g) - (m - P) - M) / 2; S <= L; ) me(t, e, x = b[S], r, T, _, C + x.width / 2, "center"), 
            C += x.width, S++;
            _ += T;
        }
    }
    function _e(t, e, i, r, n) {
        if (i && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (r = i.width / 2 + i.x, n = i.height / 2 + i.y) : a && (r = a[0] + i.x, 
            n = a[1] + i.y), t.translate(r, n), t.rotate(-e.textRotation), t.translate(-r, -n);
        }
    }
    function me(t, e, i, r, n, a, o, s) {
        var h = r.rich[i.styleName] || {}, l = i.textVerticalAlign, u = a + n / 2;
        "top" === l ? u = a + i.height / 2 : "bottom" === l && (u = a + n - i.height / 2), 
        !i.isLineHolder && ye(h) && xe(t, e, h, "right" === s ? o - i.width : "center" === s ? o - i.width / 2 : o, u - i.height / 2, i.width, i.height);
        var c = i.textPadding;
        c && (o = Ce(o, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2), ke(e, "shadowBlur", w(h.textShadowBlur, r.textShadowBlur, 0)), 
        ke(e, "shadowColor", h.textShadowColor || r.textShadowColor || "transparent"), ke(e, "shadowOffsetX", w(h.textShadowOffsetX, r.textShadowOffsetX, 0)), 
        ke(e, "shadowOffsetY", w(h.textShadowOffsetY, r.textShadowOffsetY, 0)), ke(e, "textAlign", s), 
        ke(e, "textBaseline", "middle"), ke(e, "font", i.font || jn);
        var f = Te(h.textStroke || r.textStroke, p), d = Me(h.textFill || r.textFill), p = x(h.textStrokeWidth, r.textStrokeWidth);
        f && (ke(e, "lineWidth", p), ke(e, "strokeStyle", f), e.strokeText(i.text, o, u)), 
        d && (ke(e, "fillStyle", d), e.fillText(i.text, o, u));
    }
    function ye(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
    }
    function xe(t, e, i, r, n, a, o) {
        var s = i.textBackgroundColor, h = i.textBorderWidth, l = i.textBorderColor, u = g(s);
        if (ke(e, "shadowBlur", i.textBoxShadowBlur || 0), ke(e, "shadowColor", i.textBoxShadowColor || "transparent"), 
        ke(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), ke(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), 
        u || h && l) {
            e.beginPath();
            var c = i.textBorderRadius;
            c ? ue(e, {
                x: r,
                y: n,
                width: a,
                height: o,
                r: c
            }) : e.rect(r, n, a, o), e.closePath();
        }
        if (u) ke(e, "fillStyle", s), e.fill(); else if (_(s)) {
            var f = s.image;
            (f = qt(f, null, t, we, s)) && Ut(f) && e.drawImage(f, r, n, a, o);
        }
        h && l && (ke(e, "lineWidth", h), ke(e, "strokeStyle", l), e.stroke());
    }
    function we(t, e) {
        e.image = t;
    }
    function be(t, e, i) {
        var r = e.x || 0, n = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
        if (i) {
            var s = e.textPosition;
            if (s instanceof Array) r = i.x + Se(s[0], i.width), n = i.y + Se(s[1], i.height); else {
                var h = Jt(s, i, e.textDistance);
                r = h.x, n = h.y, a = a || h.textAlign, o = o || h.textVerticalAlign;
            }
            var l = e.textOffset;
            l && (r += l[0], n += l[1]);
        }
        return {
            baseX: r,
            baseY: n,
            textAlign: a,
            textVerticalAlign: o
        };
    }
    function ke(t, e, i) {
        return t[e] = Ln(t, e, i), t[e];
    }
    function Te(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000000" : t;
    }
    function Me(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000000" : t;
    }
    function Se(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
    }
    function Ce(t, e, i) {
        return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3];
    }
    function Pe(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
    }
    function Le(t) {
        t = t || {}, xn.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new zn(t.style, this), this._rect = null, this.__clipPaths = [];
    }
    function Ae(t) {
        Le.call(this, t);
    }
    function ze(t) {
        return parseInt(t, 10);
    }
    function De(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh);
    }
    function Ie(t, e, i) {
        return Zn.copy(t.getBoundingRect()), t.transform && Zn.applyTransform(t.transform), 
        Qn.width = e, Qn.height = i, !Zn.intersect(Qn);
    }
    function Be(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0;
    }
    function Re(t, e) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.setTransform(e), e.beginPath(), r.buildPath(e, r.shape), e.clip(), r.restoreTransform(e);
        }
    }
    function Ee(t, e) {
        var i = document.createElement("div");
        return i.style.cssText = [ "position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0" ].join(";") + ";", 
        i;
    }
    function Oe(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {
            left: 0,
            top: 0
        };
    }
    function He(t, e, i, r) {
        return i = i || {}, r || !wr.canvasSupported ? Fe(t, e, i) : wr.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, 
        i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : Fe(t, e, i), 
        i;
    }
    function Fe(t, e, i) {
        var r = Oe(t);
        i.zrX = e.clientX - r.left, i.zrY = e.clientY - r.top;
    }
    function We(t, e, i) {
        if (null != (e = e || window.event).zrX) return e;
        var r = e.type;
        if (r && r.indexOf("touch") >= 0) {
            var n = "touchend" != r ? e.targetTouches[0] : e.changedTouches[0];
            n && He(t, n, e, i);
        } else He(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var a = e.button;
        return null == e.which && void 0 !== a && Jn.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
        e;
    }
    function Ne(t, e, i) {
        Kn ? t.addEventListener(e, i) : t.attachEvent("on" + e, i);
    }
    function Ve(t, e, i) {
        Kn ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i);
    }
    function je(t) {
        var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
        return Math.sqrt(e * e + i * i);
    }
    function qe(t) {
        return [ (t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2 ];
    }
    function Xe(t) {
        return "mousewheel" === t && wr.browser.firefox ? "DOMMouseScroll" : t;
    }
    function Ue(t, e, i) {
        var r = t._gestureMgr;
        "start" === i && r.clear();
        var n = r.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === i && r.clear(), n) {
            var a = n.type;
            e.gestureEvent = a, t.handler.dispatchToElement({
                target: n.target
            }, a, n.event);
        }
    }
    function Ye(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
            t._touching = !1;
        }, 700);
    }
    function Ge(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e;
    }
    function Ze(t) {
        function e(t, e) {
            return function() {
                if (!e._touching) return t.apply(e, arguments);
            };
        }
        c(na, function(e) {
            t._handlers[e] = d(sa[e], t);
        }), c(oa, function(e) {
            t._handlers[e] = d(sa[e], t);
        }), c(ra, function(i) {
            t._handlers[i] = e(sa[i], t);
        });
    }
    function Qe(t) {
        function e(e, i) {
            c(e, function(e) {
                Ne(t, Xe(e), i._handlers[e]);
            }, i);
        }
        jr.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new ea(), 
        this._handlers = {}, Ze(this), wr.pointerEventsSupported ? e(oa, this) : (wr.touchEventsSupported && e(na, this), 
        e(ra, this));
    }
    function $e(t, e) {
        ua[t] = e;
    }
    function Ke(t) {
        delete ca[t];
    }
    function Je(t) {
        return t > -va && t < va;
    }
    function ti(t) {
        return t > va || t < -va;
    }
    function ei(t, e, i, r, n) {
        var a = 1 - n;
        return a * a * (a * t + 3 * n * e) + n * n * (n * r + 3 * a * i);
    }
    function ii(t, e, i, r, n) {
        var a = 1 - n;
        return 3 * (((e - t) * a + 2 * (i - e) * n) * a + (r - i) * n * n);
    }
    function ri(t, e, i, r, n, a) {
        var o = r + 3 * (e - i) - t, s = 3 * (i - 2 * e + t), h = 3 * (e - t), l = t - n, u = s * s - 3 * o * h, c = s * h - 9 * o * l, f = h * h - 3 * s * l, d = 0;
        if (Je(u) && Je(c)) Je(s) ? a[0] = 0 : (T = -h / s) >= 0 && T <= 1 && (a[d++] = T); else {
            var p = c * c - 4 * u * f;
            if (Je(p)) {
                var v = c / u, g = -v / 2;
                (T = -s / o + v) >= 0 && T <= 1 && (a[d++] = T), g >= 0 && g <= 1 && (a[d++] = g);
            } else if (p > 0) {
                var _ = pa(p), m = u * s + 1.5 * o * (-c + _), y = u * s + 1.5 * o * (-c - _);
                (T = (-s - ((m = m < 0 ? -da(-m, ma) : da(m, ma)) + (y = y < 0 ? -da(-y, ma) : da(y, ma)))) / (3 * o)) >= 0 && T <= 1 && (a[d++] = T);
            } else {
                var x = (2 * u * s - 3 * o * c) / (2 * pa(u * u * u)), w = Math.acos(x) / 3, b = pa(u), k = Math.cos(w), T = (-s - 2 * b * k) / (3 * o), g = (-s + b * (k + _a * Math.sin(w))) / (3 * o), M = (-s + b * (k - _a * Math.sin(w))) / (3 * o);
                T >= 0 && T <= 1 && (a[d++] = T), g >= 0 && g <= 1 && (a[d++] = g), M >= 0 && M <= 1 && (a[d++] = M);
            }
        }
        return d;
    }
    function ni(t, e, i, r, n) {
        var a = 6 * i - 12 * e + 6 * t, o = 9 * e + 3 * r - 3 * t - 9 * i, s = 3 * e - 3 * t, h = 0;
        if (Je(o)) ti(a) && (c = -s / a) >= 0 && c <= 1 && (n[h++] = c); else {
            var l = a * a - 4 * o * s;
            if (Je(l)) n[0] = -a / (2 * o); else if (l > 0) {
                var u = pa(l), c = (-a + u) / (2 * o), f = (-a - u) / (2 * o);
                c >= 0 && c <= 1 && (n[h++] = c), f >= 0 && f <= 1 && (n[h++] = f);
            }
        }
        return h;
    }
    function ai(t, e, i, r, n, a) {
        var o = (e - t) * n + t, s = (i - e) * n + e, h = (r - i) * n + i, l = (s - o) * n + o, u = (h - s) * n + s, c = (u - l) * n + l;
        a[0] = t, a[1] = o, a[2] = l, a[3] = c, a[4] = c, a[5] = u, a[6] = h, a[7] = r;
    }
    function oi(t, e, i, r, n, a, o, s, h, l, u) {
        var c, f, d, p, v, g = .005, _ = 1 / 0;
        ya[0] = h, ya[1] = l;
        for (var m = 0; m < 1; m += .05) xa[0] = ei(t, i, n, o, m), xa[1] = ei(e, r, a, s, m), 
        (p = Wr(ya, xa)) < _ && (c = m, _ = p);
        _ = 1 / 0;
        for (var y = 0; y < 32 && !(g < ga); y++) f = c - g, d = c + g, xa[0] = ei(t, i, n, o, f), 
        xa[1] = ei(e, r, a, s, f), p = Wr(xa, ya), f >= 0 && p < _ ? (c = f, _ = p) : (wa[0] = ei(t, i, n, o, d), 
        wa[1] = ei(e, r, a, s, d), v = Wr(wa, ya), d <= 1 && v < _ ? (c = d, _ = v) : g *= .5);
        return u && (u[0] = ei(t, i, n, o, c), u[1] = ei(e, r, a, s, c)), pa(_);
    }
    function si(t, e, i, r) {
        var n = 1 - r;
        return n * (n * t + 2 * r * e) + r * r * i;
    }
    function hi(t, e, i, r) {
        return 2 * ((1 - r) * (e - t) + r * (i - e));
    }
    function li(t, e, i, r, n) {
        var a = t - 2 * e + i, o = 2 * (e - t), s = t - r, h = 0;
        if (Je(a)) ti(o) && (c = -s / o) >= 0 && c <= 1 && (n[h++] = c); else {
            var l = o * o - 4 * a * s;
            if (Je(l)) (c = -o / (2 * a)) >= 0 && c <= 1 && (n[h++] = c); else if (l > 0) {
                var u = pa(l), c = (-o + u) / (2 * a), f = (-o - u) / (2 * a);
                c >= 0 && c <= 1 && (n[h++] = c), f >= 0 && f <= 1 && (n[h++] = f);
            }
        }
        return h;
    }
    function ui(t, e, i) {
        var r = t + i - 2 * e;
        return 0 === r ? .5 : (t - e) / r;
    }
    function ci(t, e, i, r, n) {
        var a = (e - t) * r + t, o = (i - e) * r + e, s = (o - a) * r + a;
        n[0] = t, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = i;
    }
    function fi(t, e, i, r, n, a, o, s, h) {
        var l, u = .005, c = 1 / 0;
        ya[0] = o, ya[1] = s;
        for (var f = 0; f < 1; f += .05) xa[0] = si(t, i, n, f), xa[1] = si(e, r, a, f), 
        (g = Wr(ya, xa)) < c && (l = f, c = g);
        c = 1 / 0;
        for (var d = 0; d < 32 && !(u < ga); d++) {
            var p = l - u, v = l + u;
            xa[0] = si(t, i, n, p), xa[1] = si(e, r, a, p);
            var g = Wr(xa, ya);
            if (p >= 0 && g < c) l = p, c = g; else {
                wa[0] = si(t, i, n, v), wa[1] = si(e, r, a, v);
                var _ = Wr(wa, ya);
                v <= 1 && _ < c ? (l = v, c = _) : u *= .5;
            }
        }
        return h && (h[0] = si(t, i, n, l), h[1] = si(e, r, a, l)), pa(c);
    }
    function di(t, e, i, r, n, a) {
        n[0] = ba(t, i), n[1] = ba(e, r), a[0] = ka(t, i), a[1] = ka(e, r);
    }
    function pi(t, e, i, r, n, a, o, s, h, l) {
        var u, c = ni, f = ei, d = c(t, i, n, o, Aa);
        for (h[0] = 1 / 0, h[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0, u = 0; u < d; u++) {
            var p = f(t, i, n, o, Aa[u]);
            h[0] = ba(p, h[0]), l[0] = ka(p, l[0]);
        }
        for (d = c(e, r, a, s, za), u = 0; u < d; u++) {
            var v = f(e, r, a, s, za[u]);
            h[1] = ba(v, h[1]), l[1] = ka(v, l[1]);
        }
        h[0] = ba(t, h[0]), l[0] = ka(t, l[0]), h[0] = ba(o, h[0]), l[0] = ka(o, l[0]), 
        h[1] = ba(e, h[1]), l[1] = ka(e, l[1]), h[1] = ba(s, h[1]), l[1] = ka(s, l[1]);
    }
    function vi(t, e, i, r, n, a, o, s) {
        var h = ui, l = si, u = ka(ba(h(t, i, n), 1), 0), c = ka(ba(h(e, r, a), 1), 0), f = l(t, i, n, u), d = l(e, r, a, c);
        o[0] = ba(t, n, f), o[1] = ba(e, a, d), s[0] = ka(t, n, f), s[1] = ka(e, a, d);
    }
    function gi(t, e, i, r, n, a, o, s, h) {
        var l = O, u = H, c = Math.abs(n - a);
        if (c % Sa < 1e-4 && c > 1e-4) return s[0] = t - i, s[1] = e - r, h[0] = t + i, 
        void (h[1] = e + r);
        if (Ca[0] = Ma(n) * i + t, Ca[1] = Ta(n) * r + e, Pa[0] = Ma(a) * i + t, Pa[1] = Ta(a) * r + e, 
        l(s, Ca, Pa), u(h, Ca, Pa), (n %= Sa) < 0 && (n += Sa), (a %= Sa) < 0 && (a += Sa), 
        n > a && !o ? a += Sa : n < a && o && (n += Sa), o) {
            var f = a;
            a = n, n = f;
        }
        for (var d = 0; d < a; d += Math.PI / 2) d > n && (La[0] = Ma(d) * i + t, La[1] = Ta(d) * r + e, 
        l(s, La, s), u(h, La, h));
    }
    function _i(t, e, i, r, n, a, o) {
        if (0 === n) return !1;
        var s = n, h = 0, l = t;
        if (o > e + s && o > r + s || o < e - s && o < r - s || a > t + s && a > i + s || a < t - s && a < i - s) return !1;
        if (t === i) return Math.abs(a - t) <= s / 2;
        var u = (h = (e - r) / (t - i)) * a - o + (l = (t * r - i * e) / (t - i));
        return u * u / (h * h + 1) <= s / 2 * s / 2;
    }
    function mi(t, e, i, r, n, a, o, s, h, l, u) {
        if (0 === h) return !1;
        var c = h;
        return !(u > e + c && u > r + c && u > a + c && u > s + c || u < e - c && u < r - c && u < a - c && u < s - c || l > t + c && l > i + c && l > n + c && l > o + c || l < t - c && l < i - c && l < n - c && l < o - c) && oi(t, e, i, r, n, a, o, s, l, u, null) <= c / 2;
    }
    function yi(t, e, i, r, n, a, o, s, h) {
        if (0 === o) return !1;
        var l = o;
        return !(h > e + l && h > r + l && h > a + l || h < e - l && h < r - l && h < a - l || s > t + l && s > i + l && s > n + l || s < t - l && s < i - l && s < n - l) && fi(t, e, i, r, n, a, s, h, null) <= l / 2;
    }
    function xi(t) {
        return (t %= Xa) < 0 && (t += Xa), t;
    }
    function wi(t, e, i, r, n, a, o, s, h) {
        if (0 === o) return !1;
        var l = o;
        s -= t, h -= e;
        var u = Math.sqrt(s * s + h * h);
        if (u - l > i || u + l < i) return !1;
        if (Math.abs(r - n) % Ua < 1e-4) return !0;
        if (a) {
            var c = r;
            r = xi(n), n = xi(c);
        } else r = xi(r), n = xi(n);
        r > n && (n += Ua);
        var f = Math.atan2(h, s);
        return f < 0 && (f += Ua), f >= r && f <= n || f + Ua >= r && f + Ua <= n;
    }
    function bi(t, e, i, r, n, a) {
        if (a > e && a > r || a < e && a < r) return 0;
        if (r === e) return 0;
        var o = r < e ? 1 : -1, s = (a - e) / (r - e);
        return 1 !== s && 0 !== s || (o = r < e ? .5 : -.5), s * (i - t) + t > n ? o : 0;
    }
    function ki(t, e) {
        return Math.abs(t - e) < Za;
    }
    function Ti() {
        var t = $a[0];
        $a[0] = $a[1], $a[1] = t;
    }
    function Mi(t, e, i, r, n, a, o, s, h, l) {
        if (l > e && l > r && l > a && l > s || l < e && l < r && l < a && l < s) return 0;
        var u = ri(e, r, a, s, l, Qa);
        if (0 === u) return 0;
        for (var c, f, d = 0, p = -1, v = 0; v < u; v++) {
            var g = Qa[v], _ = 0 === g || 1 === g ? .5 : 1;
            ei(t, i, n, o, g) < h || (p < 0 && (p = ni(e, r, a, s, $a), $a[1] < $a[0] && p > 1 && Ti(), 
            c = ei(e, r, a, s, $a[0]), p > 1 && (f = ei(e, r, a, s, $a[1]))), 2 == p ? g < $a[0] ? d += c < e ? _ : -_ : g < $a[1] ? d += f < c ? _ : -_ : d += s < f ? _ : -_ : g < $a[0] ? d += c < e ? _ : -_ : d += s < c ? _ : -_);
        }
        return d;
    }
    function Si(t, e, i, r, n, a, o, s) {
        if (s > e && s > r && s > a || s < e && s < r && s < a) return 0;
        var h = li(e, r, a, s, Qa);
        if (0 === h) return 0;
        var l = ui(e, r, a);
        if (l >= 0 && l <= 1) {
            for (var u = 0, c = si(e, r, a, l), f = 0; f < h; f++) {
                d = 0 === Qa[f] || 1 === Qa[f] ? .5 : 1;
                (p = si(t, i, n, Qa[f])) < o || (Qa[f] < l ? u += c < e ? d : -d : u += a < c ? d : -d);
            }
            return u;
        }
        var d = 0 === Qa[0] || 1 === Qa[0] ? .5 : 1, p = si(t, i, n, Qa[0]);
        return p < o ? 0 : a < e ? d : -d;
    }
    function Ci(t, e, i, r, n, a, o, s) {
        if ((s -= e) > i || s < -i) return 0;
        l = Math.sqrt(i * i - s * s);
        Qa[0] = -l, Qa[1] = l;
        var h = Math.abs(r - n);
        if (h < 1e-4) return 0;
        if (h % Ga < 1e-4) {
            r = 0, n = Ga;
            p = a ? 1 : -1;
            return o >= Qa[0] + t && o <= Qa[1] + t ? p : 0;
        }
        if (a) {
            var l = r;
            r = xi(n), n = xi(l);
        } else r = xi(r), n = xi(n);
        r > n && (n += Ga);
        for (var u = 0, c = 0; c < 2; c++) {
            var f = Qa[c];
            if (f + t > o) {
                var d = Math.atan2(s, f), p = a ? 1 : -1;
                d < 0 && (d = Ga + d), (d >= r && d <= n || d + Ga >= r && d + Ga <= n) && (d > Math.PI / 2 && d < 1.5 * Math.PI && (p = -p), 
                u += p);
            }
        }
        return u;
    }
    function Pi(t, e, i, r, n) {
        for (var a = 0, o = 0, s = 0, h = 0, l = 0, u = 0; u < t.length; ) {
            var c = t[u++];
            switch (c === Ya.M && u > 1 && (i || (a += bi(o, s, h, l, r, n))), 1 == u && (h = o = t[u], 
            l = s = t[u + 1]), c) {
              case Ya.M:
                o = h = t[u++], s = l = t[u++];
                break;

              case Ya.L:
                if (i) {
                    if (_i(o, s, t[u], t[u + 1], e, r, n)) return !0;
                } else a += bi(o, s, t[u], t[u + 1], r, n) || 0;
                o = t[u++], s = t[u++];
                break;

              case Ya.C:
                if (i) {
                    if (mi(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, r, n)) return !0;
                } else a += Mi(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], r, n) || 0;
                o = t[u++], s = t[u++];
                break;

              case Ya.Q:
                if (i) {
                    if (yi(o, s, t[u++], t[u++], t[u], t[u + 1], e, r, n)) return !0;
                } else a += Si(o, s, t[u++], t[u++], t[u], t[u + 1], r, n) || 0;
                o = t[u++], s = t[u++];
                break;

              case Ya.A:
                var f = t[u++], d = t[u++], p = t[u++], v = t[u++], g = t[u++], _ = t[u++], m = (t[u++], 
                1 - t[u++]), y = Math.cos(g) * p + f, x = Math.sin(g) * v + d;
                u > 1 ? a += bi(o, s, y, x, r, n) : (h = y, l = x);
                var w = (r - f) * v / p + f;
                if (i) {
                    if (wi(f, d, v, g, g + _, m, e, w, n)) return !0;
                } else a += Ci(f, d, v, g, g + _, m, w, n);
                o = Math.cos(g + _) * p + f, s = Math.sin(g + _) * v + d;
                break;

              case Ya.R:
                h = o = t[u++], l = s = t[u++];
                var y = h + t[u++], x = l + t[u++];
                if (i) {
                    if (_i(h, l, y, l, e, r, n) || _i(y, l, y, x, e, r, n) || _i(y, x, h, x, e, r, n) || _i(h, x, h, l, e, r, n)) return !0;
                } else a += bi(y, l, y, x, r, n), a += bi(h, x, h, l, r, n);
                break;

              case Ya.Z:
                if (i) {
                    if (_i(o, s, h, l, e, r, n)) return !0;
                } else a += bi(o, s, h, l, r, n);
                o = h, s = l;
            }
        }
        return i || ki(s, l) || (a += bi(o, s, h, l, r, n) || 0), 0 !== a;
    }
    function Li(t, e, i) {
        return Pi(t, 0, !1, e, i);
    }
    function Ai(t, e, i, r) {
        return Pi(t, e, !0, i, r);
    }
    function zi(t) {
        Le.call(this, t), this.path = null;
    }
    function Di(t, e, i, r, n, a, o, s, h, l, u) {
        var c = h * (uo / 180), f = lo(c) * (t - i) / 2 + ho(c) * (e - r) / 2, d = -1 * ho(c) * (t - i) / 2 + lo(c) * (e - r) / 2, p = f * f / (o * o) + d * d / (s * s);
        p > 1 && (o *= so(p), s *= so(p));
        var v = (n === a ? -1 : 1) * so((o * o * (s * s) - o * o * (d * d) - s * s * (f * f)) / (o * o * (d * d) + s * s * (f * f))) || 0, g = v * o * d / s, _ = v * -s * f / o, m = (t + i) / 2 + lo(c) * g - ho(c) * _, y = (e + r) / 2 + ho(c) * g + lo(c) * _, x = po([ 1, 0 ], [ (f - g) / o, (d - _) / s ]), w = [ (f - g) / o, (d - _) / s ], b = [ (-1 * f - g) / o, (-1 * d - _) / s ], k = po(w, b);
        fo(w, b) <= -1 && (k = uo), fo(w, b) >= 1 && (k = 0), 0 === a && k > 0 && (k -= 2 * uo), 
        1 === a && k < 0 && (k += 2 * uo), u.addData(l, m, y, o, s, x, k, c, a);
    }
    function Ii(t) {
        if (!t) return [];
        var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
        for (e = 0; e < oo.length; e++) i = i.replace(new RegExp(oo[e], "g"), "|" + oo[e]);
        var r, n = i.split("|"), a = 0, o = 0, s = new qa(), h = qa.CMD;
        for (e = 1; e < n.length; e++) {
            var l, u = n[e], c = u.charAt(0), f = 0, d = u.slice(1).replace(/e,-/g, "e-").split(",");
            d.length > 0 && "" === d[0] && d.shift();
            for (var p = 0; p < d.length; p++) d[p] = parseFloat(d[p]);
            for (;f < d.length && !isNaN(d[f]) && !isNaN(d[0]); ) {
                var v, g, _, m, y, x, w, b = a, k = o;
                switch (c) {
                  case "l":
                    a += d[f++], o += d[f++], l = h.L, s.addData(l, a, o);
                    break;

                  case "L":
                    a = d[f++], o = d[f++], l = h.L, s.addData(l, a, o);
                    break;

                  case "m":
                    a += d[f++], o += d[f++], l = h.M, s.addData(l, a, o), c = "l";
                    break;

                  case "M":
                    a = d[f++], o = d[f++], l = h.M, s.addData(l, a, o), c = "L";
                    break;

                  case "h":
                    a += d[f++], l = h.L, s.addData(l, a, o);
                    break;

                  case "H":
                    a = d[f++], l = h.L, s.addData(l, a, o);
                    break;

                  case "v":
                    o += d[f++], l = h.L, s.addData(l, a, o);
                    break;

                  case "V":
                    o = d[f++], l = h.L, s.addData(l, a, o);
                    break;

                  case "C":
                    l = h.C, s.addData(l, d[f++], d[f++], d[f++], d[f++], d[f++], d[f++]), a = d[f - 2], 
                    o = d[f - 1];
                    break;

                  case "c":
                    l = h.C, s.addData(l, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o), 
                    a += d[f - 2], o += d[f - 1];
                    break;

                  case "S":
                    v = a, g = o;
                    var T = s.len(), M = s.data;
                    r === h.C && (v += a - M[T - 4], g += o - M[T - 3]), l = h.C, b = d[f++], k = d[f++], 
                    a = d[f++], o = d[f++], s.addData(l, v, g, b, k, a, o);
                    break;

                  case "s":
                    v = a, g = o;
                    var T = s.len(), M = s.data;
                    r === h.C && (v += a - M[T - 4], g += o - M[T - 3]), l = h.C, b = a + d[f++], k = o + d[f++], 
                    a += d[f++], o += d[f++], s.addData(l, v, g, b, k, a, o);
                    break;

                  case "Q":
                    b = d[f++], k = d[f++], a = d[f++], o = d[f++], l = h.Q, s.addData(l, b, k, a, o);
                    break;

                  case "q":
                    b = d[f++] + a, k = d[f++] + o, a += d[f++], o += d[f++], l = h.Q, s.addData(l, b, k, a, o);
                    break;

                  case "T":
                    v = a, g = o;
                    var T = s.len(), M = s.data;
                    r === h.Q && (v += a - M[T - 4], g += o - M[T - 3]), a = d[f++], o = d[f++], l = h.Q, 
                    s.addData(l, v, g, a, o);
                    break;

                  case "t":
                    v = a, g = o;
                    var T = s.len(), M = s.data;
                    r === h.Q && (v += a - M[T - 4], g += o - M[T - 3]), a += d[f++], o += d[f++], l = h.Q, 
                    s.addData(l, v, g, a, o);
                    break;

                  case "A":
                    _ = d[f++], m = d[f++], y = d[f++], x = d[f++], w = d[f++], Di(b = a, k = o, a = d[f++], o = d[f++], x, w, _, m, y, l = h.A, s);
                    break;

                  case "a":
                    _ = d[f++], m = d[f++], y = d[f++], x = d[f++], w = d[f++], Di(b = a, k = o, a += d[f++], o += d[f++], x, w, _, m, y, l = h.A, s);
                }
            }
            "z" !== c && "Z" !== c || (l = h.Z, s.addData(l)), r = l;
        }
        return s.toStatic(), s;
    }
    function Bi(t, e) {
        var i = Ii(t);
        return e = e || {}, e.buildPath = function(t) {
            if (t.setData) t.setData(i.data), (e = t.getContext()) && t.rebuildPath(e); else {
                var e = t;
                i.rebuildPath(e);
            }
        }, e.applyTransform = function(t) {
            ao(i, t), this.dirty(!0);
        }, e;
    }
    function Ri(t) {
        Le.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, 
        this.notClear = !0;
    }
    function Ei(t, e, i) {
        var r = t.cpx2, n = t.cpy2;
        return null === r || null === n ? [ (i ? ii : ei)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? ii : ei)(t.y1, t.cpy1, t.cpy2, t.y2, e) ] : [ (i ? hi : si)(t.x1, t.cpx1, t.x2, e), (i ? hi : si)(t.y1, t.cpy1, t.y2, e) ];
    }
    function Oi(t, e, i, r, n, a, o) {
        var s = .5 * (i - t), h = .5 * (r - e);
        return (2 * (e - i) + s + h) * o + (-3 * (e - i) - 2 * s - h) * a + s * n + e;
    }
    function Hi(t, e, i) {
        var r = e.points, n = e.smooth;
        if (r && r.length >= 2) {
            if (n && "spline" !== n) {
                var a = Do(r, n, i, e.smoothConstraint);
                t.moveTo(r[0][0], r[0][1]);
                for (var o = r.length, s = 0; s < (i ? o : o - 1); s++) {
                    var h = a[2 * s], l = a[2 * s + 1], u = r[(s + 1) % o];
                    t.bezierCurveTo(h[0], h[1], l[0], l[1], u[0], u[1]);
                }
            } else {
                "spline" === n && (r = zo(r, i)), t.moveTo(r[0][0], r[0][1]);
                for (var s = 1, c = r.length; s < c; s++) t.lineTo(r[s][0], r[s][1]);
            }
            i && t.closePath();
        }
    }
    function Fi(t) {
        return document.createElementNS(Jo, t);
    }
    function Wi(t) {
        return rs(1e4 * t) / 1e4;
    }
    function Ni(t) {
        return t < ls && t > -ls;
    }
    function Vi(t, e) {
        var i = e ? t.textFill : t.fill;
        return null != i && i !== is;
    }
    function ji(t, e) {
        var i = e ? t.textStroke : t.stroke;
        return null != i && i !== is;
    }
    function qi(t, e) {
        e && Xi(t, "transform", "matrix(" + es.call(e, ",") + ")");
    }
    function Xi(t, e, i) {
        (!i || "linear" !== i.type && "radial" !== i.type) && t.setAttribute(e, i);
    }
    function Ui(t, e, i) {
        t.setAttributeNS("http://www.w3.org/1999/xlink", e, i);
    }
    function Yi(t, e, i) {
        if (Vi(e, i)) {
            var r = i ? e.textFill : e.fill;
            r = "transparent" === r ? is : r, "none" !== t.getAttribute("clip-path") && r === is && (r = "rgba(0, 0, 0, 0.002)"), 
            Xi(t, "fill", r), Xi(t, "fill-opacity", e.opacity);
        } else Xi(t, "fill", is);
        if (ji(e, i)) {
            var n = i ? e.textStroke : e.stroke;
            Xi(t, "stroke", n = "transparent" === n ? is : n), Xi(t, "stroke-width", (i ? e.textStrokeWidth : e.lineWidth) / (!i && e.strokeNoScale ? e.host.getLineScale() : 1)), 
            Xi(t, "paint-order", i ? "stroke" : "fill"), Xi(t, "stroke-opacity", e.opacity), 
            e.lineDash ? (Xi(t, "stroke-dasharray", e.lineDash.join(",")), Xi(t, "stroke-dashoffset", rs(e.lineDashOffset || 0))) : Xi(t, "stroke-dasharray", ""), 
            e.lineCap && Xi(t, "stroke-linecap", e.lineCap), e.lineJoin && Xi(t, "stroke-linejoin", e.lineJoin), 
            e.miterLimit && Xi(t, "stroke-miterlimit", e.miterLimit);
        } else Xi(t, "stroke", is);
    }
    function Gi(t) {
        for (var e = [], i = t.data, r = t.len(), n = 0; n < r; ) {
            var a = "", o = 0;
            switch (i[n++]) {
              case ts.M:
                a = "M", o = 2;
                break;

              case ts.L:
                a = "L", o = 2;
                break;

              case ts.Q:
                a = "Q", o = 4;
                break;

              case ts.C:
                a = "C", o = 6;
                break;

              case ts.A:
                var s = i[n++], h = i[n++], l = i[n++], u = i[n++], c = i[n++], f = i[n++], d = i[n++], p = i[n++], v = Math.abs(f), g = Ni(v - ss) && !Ni(v), _ = !1;
                _ = v >= ss || !Ni(v) && (f > -os && f < 0 || f > os) == !!p;
                var m = Wi(s + l * as(c)), y = Wi(h + u * ns(c));
                g && (f = p ? ss - 1e-4 : 1e-4 - ss, _ = !0, 9 === n && e.push("M", m, y));
                var x = Wi(s + l * as(c + f)), w = Wi(h + u * ns(c + f));
                e.push("A", Wi(l), Wi(u), rs(d * hs), +_, +p, x, w);
                break;

              case ts.Z:
                a = "Z";
                break;

              case ts.R:
                var x = Wi(i[n++]), w = Wi(i[n++]), b = Wi(i[n++]), k = Wi(i[n++]);
                e.push("M", x, w, "L", x + b, w, "L", x + b, w + k, "L", x, w + k, "L", x, w);
            }
            a && e.push(a);
            for (var T = 0; T < o; T++) e.push(Wi(i[n++]));
        }
        return e.join(" ");
    }
    function Zi(t) {
        return "middle" === t ? "middle" : "bottom" === t ? "baseline" : "hanging";
    }
    function Qi() {}
    function $i(t, e, i, r) {
        for (var n = 0, a = e.length, o = 0, s = 0; n < a; n++) {
            var h = e[n];
            if (h.removed) {
                for (var l = [], u = s; u < s + h.count; u++) l.push(u);
                h.indices = l, s += h.count;
            } else {
                for (var l = [], u = o; u < o + h.count; u++) l.push(u);
                h.indices = l, o += h.count, h.added || (s += h.count);
            }
        }
        return e;
    }
    function Ki(t) {
        return {
            newPos: t.newPos,
            components: t.components.slice(0)
        };
    }
    function Ji(t, e, i, r, n) {
        this._zrId = t, this._svgRoot = e, this._tagNames = "string" == typeof i ? [ i ] : i, 
        this._markLabel = r, this._domName = n || "_dom", this.nextId = 0;
    }
    function tr(t, e) {
        Ji.call(this, t, e, [ "linearGradient", "radialGradient" ], "__gradient_in_use__");
    }
    function er(t, e) {
        Ji.call(this, t, e, "clipPath", "__clippath_in_use__");
    }
    function ir(t, e) {
        Ji.call(this, t, e, [ "filter" ], "__filter_in_use__", "_shadowDom");
    }
    function rr(t) {
        return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY || t.textShadowBlur || t.textShadowOffsetX || t.textShadowOffsetY);
    }
    function nr(t) {
        return parseInt(t, 10);
    }
    function ar(t) {
        return t instanceof zi ? us : t instanceof Ae ? cs : t instanceof _o ? fs : us;
    }
    function or(t, e) {
        return e && t && e.parentNode !== t;
    }
    function sr(t, e, i) {
        if (or(t, e) && i) {
            var r = i.nextSibling;
            r ? t.insertBefore(e, r) : t.appendChild(e);
        }
    }
    function hr(t, e) {
        if (or(t, e)) {
            var i = t.firstChild;
            i ? t.insertBefore(e, i) : t.appendChild(e);
        }
    }
    function lr(t, e) {
        e && t && e.parentNode === t && t.removeChild(e);
    }
    function ur(t) {
        return t.__textSvgEl;
    }
    function cr(t) {
        return t.__svgEl;
    }
    function fr(t) {
        return function() {
            mn('In SVG mode painter not support method "' + t + '"');
        };
    }
    function dr(t) {
        return ms(t);
    }
    function pr() {
        if (!ws && bs) {
            ws = !0;
            var t = bs.styleSheets;
            t.length < 31 ? bs.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)");
        }
    }
    function vr(t) {
        return parseInt(t, 10);
    }
    function gr(t, e) {
        pr(), this.root = t, this.storage = e;
        var i = document.createElement("div"), r = document.createElement("div");
        i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", 
        r.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = r, 
        this._vmlViewport = i, this.resize();
        var n = e.delFromStorage, a = e.addToStorage;
        e.delFromStorage = function(t) {
            n.call(e, t), t && t.onRemove && t.onRemove(r);
        }, e.addToStorage = function(t) {
            t.onAdd && t.onAdd(r), a.call(e, t);
        }, this._firstPaint = !0;
    }
    function _r(t) {
        return function() {
            mn('In IE8.0 VML mode painter not support method "' + t + '"');
        };
    }
    var mr = 2311, yr = function() {
        return mr++;
    }, xr = {}, wr = xr = "undefined" != typeof wx ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0
    } : function(t) {
        var e = {}, i = {}, r = t.match(/Firefox\/([\d.]+)/), n = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/), o = /micromessenger/i.test(t);
        return r && (i.firefox = !0, i.version = r[1]), n && (i.ie = !0, i.version = n[1]), 
        a && (i.edge = !0, i.version = a[1]), o && (i.weChat = !0), {
            browser: i,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
            pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11)
        };
    }(navigator.userAgent), br = {
        "[object Function]": 1,
        "[object RegExp]": 1,
        "[object Date]": 1,
        "[object Error]": 1,
        "[object CanvasGradient]": 1,
        "[object CanvasPattern]": 1,
        "[object Image]": 1,
        "[object Canvas]": 1
    }, kr = {
        "[object Int8Array]": 1,
        "[object Uint8Array]": 1,
        "[object Uint8ClampedArray]": 1,
        "[object Int16Array]": 1,
        "[object Uint16Array]": 1,
        "[object Int32Array]": 1,
        "[object Uint32Array]": 1,
        "[object Float32Array]": 1,
        "[object Float64Array]": 1
    }, Tr = Object.prototype.toString, Mr = Array.prototype, Sr = Mr.forEach, Cr = Mr.filter, Pr = Mr.slice, Lr = Mr.map, Ar = Mr.reduce, zr = {}, Dr = function() {
        return zr.createCanvas();
    };
    zr.createCanvas = function() {
        return document.createElement("canvas");
    };
    var Ir, Br = "__ec_primitive__";
    M.prototype = {
        constructor: M,
        get: function(t) {
            return this.hasOwnProperty(t) ? this[t] : null;
        },
        set: function(t, e) {
            return this[t] = e;
        },
        each: function(t, e) {
            void 0 !== e && (t = d(t, e));
            for (var i in this) this.hasOwnProperty(i) && t(this[i], i);
        },
        removeKey: function(t) {
            delete this[t];
        }
    };
    var Rr = (Object.freeze || Object)({
        $override: function(t, e) {
            "createCanvas" === t && (Ir = null), zr[t] = e;
        },
        clone: i,
        merge: r,
        mergeAll: function(t, e) {
            for (var i = t[0], n = 1, a = t.length; n < a; n++) i = r(i, t[n], e);
            return i;
        },
        extend: n,
        defaults: a,
        createCanvas: Dr,
        getContext: o,
        indexOf: s,
        inherits: h,
        mixin: l,
        isArrayLike: u,
        each: c,
        map: f,
        reduce: function(t, e, i, r) {
            if (t && e) {
                if (t.reduce && t.reduce === Ar) return t.reduce(e, i, r);
                for (var n = 0, a = t.length; n < a; n++) i = e.call(r, i, t[n], n, t);
                return i;
            }
        },
        filter: function(t, e, i) {
            if (t && e) {
                if (t.filter && t.filter === Cr) return t.filter(e, i);
                for (var r = [], n = 0, a = t.length; n < a; n++) e.call(i, t[n], n, t) && r.push(t[n]);
                return r;
            }
        },
        find: function(t, e, i) {
            if (t && e) for (var r = 0, n = t.length; r < n; r++) if (e.call(i, t[r], r, t)) return t[r];
        },
        bind: d,
        curry: function(t) {
            var e = Pr.call(arguments, 1);
            return function() {
                return t.apply(this, e.concat(Pr.call(arguments)));
            };
        },
        isArray: p,
        isFunction: v,
        isString: g,
        isObject: _,
        isBuiltInObject: m,
        isTypedArray: function(t) {
            return !!kr[Tr.call(t)];
        },
        isDom: y,
        eqNaN: function(t) {
            return t !== t;
        },
        retrieve: function(t) {
            for (var e = 0, i = arguments.length; e < i; e++) if (null != arguments[e]) return arguments[e];
        },
        retrieve2: x,
        retrieve3: w,
        slice: function() {
            return Function.call.apply(Pr, arguments);
        },
        normalizeCssArray: b,
        assert: function(t, e) {
            if (!t) throw new Error(e);
        },
        trim: k,
        setAsPrimitive: function(t) {
            t[Br] = !0;
        },
        isPrimitive: T,
        createHashMap: function(t) {
            return new M(t);
        },
        concatArray: function(t, e) {
            for (var i = new t.constructor(t.length + e.length), r = 0; r < t.length; r++) i[r] = t[r];
            var n = t.length;
            for (r = 0; r < e.length; r++) i[r + n] = e[r];
            return i;
        },
        noop: function() {}
    }), Er = "undefined" == typeof Float32Array ? Array : Float32Array, Or = A, Hr = z, Fr = B, Wr = R, Nr = (Object.freeze || Object)({
        create: S,
        copy: function(t, e) {
            return t[0] = e[0], t[1] = e[1], t;
        },
        clone: C,
        set: function(t, e, i) {
            return t[0] = e, t[1] = i, t;
        },
        add: P,
        scaleAndAdd: function(t, e, i, r) {
            return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t;
        },
        sub: L,
        len: A,
        length: Or,
        lenSquare: z,
        lengthSquare: Hr,
        mul: function(t, e, i) {
            return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t;
        },
        div: function(t, e, i) {
            return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t;
        },
        dot: function(t, e) {
            return t[0] * e[0] + t[1] * e[1];
        },
        scale: D,
        normalize: I,
        distance: B,
        dist: Fr,
        distanceSquare: R,
        distSquare: Wr,
        negate: function(t, e) {
            return t[0] = -e[0], t[1] = -e[1], t;
        },
        lerp: function(t, e, i, r) {
            return t[0] = e[0] + r * (i[0] - e[0]), t[1] = e[1] + r * (i[1] - e[1]), t;
        },
        applyTransform: E,
        min: O,
        max: H
    });
    F.prototype = {
        constructor: F,
        _dragStart: function(t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, 
            this._y = t.offsetY, this.dispatchToElement(W(e, t), "dragstart", t.event));
        },
        _drag: function(t) {
            var e = this._draggingTarget;
            if (e) {
                var i = t.offsetX, r = t.offsetY, n = i - this._x, a = r - this._y;
                this._x = i, this._y = r, e.drift(n, a, t), this.dispatchToElement(W(e, t), "drag", t.event);
                var o = this.findHover(i, r, e).target, s = this._dropTarget;
                this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(W(s, t), "dragleave", t.event), 
                o && o !== s && this.dispatchToElement(W(o, t), "dragenter", t.event));
            }
        },
        _dragEnd: function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(W(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(W(this._dropTarget, t), "drop", t.event), 
            this._draggingTarget = null, this._dropTarget = null;
        }
    };
    var Vr = Array.prototype.slice, jr = function() {
        this._$handlers = {};
    };
    jr.prototype = {
        constructor: jr,
        one: function(t, e, i) {
            var r = this._$handlers;
            if (!e || !t) return this;
            r[t] || (r[t] = []);
            for (var n = 0; n < r[t].length; n++) if (r[t][n].h === e) return this;
            return r[t].push({
                h: e,
                one: !0,
                ctx: i || this
            }), this;
        },
        on: function(t, e, i) {
            var r = this._$handlers;
            if (!e || !t) return this;
            r[t] || (r[t] = []);
            for (var n = 0; n < r[t].length; n++) if (r[t][n].h === e) return this;
            return r[t].push({
                h: e,
                one: !1,
                ctx: i || this
            }), this;
        },
        isSilent: function(t) {
            var e = this._$handlers;
            return e[t] && e[t].length;
        },
        off: function(t, e) {
            var i = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (i[t]) {
                    for (var r = [], n = 0, a = i[t].length; n < a; n++) i[t][n].h != e && r.push(i[t][n]);
                    i[t] = r;
                }
                i[t] && 0 === i[t].length && delete i[t];
            } else delete i[t];
            return this;
        },
        trigger: function(t) {
            if (this._$handlers[t]) {
                var e = arguments, i = e.length;
                i > 3 && (e = Vr.call(e, 1));
                for (var r = this._$handlers[t], n = r.length, a = 0; a < n; ) {
                    switch (i) {
                      case 1:
                        r[a].h.call(r[a].ctx);
                        break;

                      case 2:
                        r[a].h.call(r[a].ctx, e[1]);
                        break;

                      case 3:
                        r[a].h.call(r[a].ctx, e[1], e[2]);
                        break;

                      default:
                        r[a].h.apply(r[a].ctx, e);
                    }
                    r[a].one ? (r.splice(a, 1), n--) : a++;
                }
            }
            return this;
        },
        triggerWithContext: function(t) {
            if (this._$handlers[t]) {
                var e = arguments, i = e.length;
                i > 4 && (e = Vr.call(e, 1, e.length - 1));
                for (var r = e[e.length - 1], n = this._$handlers[t], a = n.length, o = 0; o < a; ) {
                    switch (i) {
                      case 1:
                        n[o].h.call(r);
                        break;

                      case 2:
                        n[o].h.call(r, e[1]);
                        break;

                      case 3:
                        n[o].h.call(r, e[1], e[2]);
                        break;

                      default:
                        n[o].h.apply(r, e);
                    }
                    n[o].one ? (n.splice(o, 1), a--) : o++;
                }
            }
            return this;
        }
    };
    var qr = "silent";
    V.prototype.dispose = function() {};
    var Xr = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], Ur = function(t, e, i, r) {
        jr.call(this), this.storage = t, this.painter = e, this.painterRoot = r, i = i || new V(), 
        this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, 
        F.call(this), this.setHandlerProxy(i);
    };
    Ur.prototype = {
        constructor: Ur,
        setHandlerProxy: function(t) {
            this.proxy && this.proxy.dispose(), t && (c(Xr, function(e) {
                t.on && t.on(e, this[e], this);
            }, this), t.handler = this), this.proxy = t;
        },
        mousemove: function(t) {
            var e = t.zrX, i = t.zrY, r = this._hovered, n = r.target;
            n && !n.__zr && (n = (r = this.findHover(r.x, r.y)).target);
            var a = this._hovered = this.findHover(e, i), o = a.target, s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), n && o !== n && this.dispatchToElement(r, "mouseout", t), 
            this.dispatchToElement(a, "mousemove", t), o && o !== n && this.dispatchToElement(a, "mouseover", t);
        },
        mouseout: function(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, i = t.toElement || t.relatedTarget;
            do {
                i = i && i.parentNode;
            } while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
            !e && this.trigger("globalout", {
                event: t
            });
        },
        resize: function(t) {
            this._hovered = {};
        },
        dispatch: function(t, e) {
            var i = this[t];
            i && i.call(this, e);
        },
        dispose: function() {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
        },
        setCursorStyle: function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t);
        },
        dispatchToElement: function(t, e, i) {
            var r = (t = t || {}).target;
            if (!r || !r.silent) {
                for (var n = "on" + e, a = N(e, t, i); r && (r[n] && (a.cancelBubble = r[n].call(r, a)), 
                r.trigger(e, a), r = r.parent, !a.cancelBubble); ) ;
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[n] && t[n].call(t, a), t.trigger && t.trigger(e, a);
                }));
            }
        },
        findHover: function(t, e, i) {
            for (var r = this.storage.getDisplayList(), n = {
                x: t,
                y: e
            }, a = r.length - 1; a >= 0; a--) {
                var o;
                if (r[a] !== i && !r[a].ignore && (o = j(r[a], t, e)) && (!n.topTarget && (n.topTarget = r[a]), 
                o !== qr)) {
                    n.target = r[a];
                    break;
                }
            }
            return n;
        }
    }, c([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(t) {
        Ur.prototype[t] = function(e) {
            var i = this.findHover(e.zrX, e.zrY), r = i.target;
            if ("mousedown" === t) this._downEl = r, this._downPoint = [ e.zrX, e.zrY ], this._upEl = r; else if ("mouseup" === t) this._upEl = r; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Fr(this._downPoint, [ e.zrX, e.zrY ]) > 4) return;
                this._downPoint = null;
            }
            this.dispatchToElement(i, t, e);
        };
    }), l(Ur, jr), l(Ur, F);
    var Yr = "undefined" == typeof Float32Array ? Array : Float32Array, Gr = (Object.freeze || Object)({
        create: q,
        identity: X,
        copy: U,
        mul: Y,
        translate: G,
        rotate: Z,
        scale: Q,
        invert: $,
        clone: function(t) {
            var e = q();
            return U(e, t), e;
        }
    }), Zr = X, Qr = 5e-5, $r = function(t) {
        (t = t || {}).position || (this.position = [ 0, 0 ]), null == t.rotation && (this.rotation = 0), 
        t.scale || (this.scale = [ 1, 1 ]), this.origin = this.origin || null;
    }, Kr = $r.prototype;
    Kr.transform = null, Kr.needLocalTransform = function() {
        return K(this.rotation) || K(this.position[0]) || K(this.position[1]) || K(this.scale[0] - 1) || K(this.scale[1] - 1);
    }, Kr.updateTransform = function() {
        var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), r = this.transform;
        i || e ? (r = r || q(), i ? this.getLocalTransform(r) : Zr(r), e && (i ? Y(r, t.transform, r) : U(r, t.transform)), 
        this.transform = r, this.invTransform = this.invTransform || q(), $(this.invTransform, r)) : r && Zr(r);
    }, Kr.getLocalTransform = function(t) {
        return $r.getLocalTransform(this, t);
    }, Kr.setTransform = function(t) {
        this.transform, t.dpr;
    }, Kr.restoreTransform = function(t) {
        t.dpr;
    };
    var Jr = [];
    Kr.decomposeTransform = function() {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (Y(Jr, t.invTransform, e), e = Jr);
            var i = e[0] * e[0] + e[1] * e[1], r = e[2] * e[2] + e[3] * e[3], n = this.position, a = this.scale;
            K(i - 1) && (i = Math.sqrt(i)), K(r - 1) && (r = Math.sqrt(r)), e[0] < 0 && (i = -i), 
            e[3] < 0 && (r = -r), n[0] = e[4], n[1] = e[5], a[0] = i, a[1] = r, this.rotation = Math.atan2(-e[1] / r, e[0] / i);
        }
    }, Kr.getGlobalScale = function() {
        var t = this.transform;
        if (!t) return [ 1, 1 ];
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [ e, i ];
    }, Kr.transformCoordToLocal = function(t, e) {
        var i = [ t, e ], r = this.invTransform;
        return r && E(i, i, r), i;
    }, Kr.transformCoordToGlobal = function(t, e) {
        var i = [ t, e ], r = this.transform;
        return r && E(i, i, r), i;
    }, $r.getLocalTransform = function(t, e) {
        Zr(e = e || []);
        var i = t.origin, r = t.scale || [ 1, 1 ], n = t.rotation || 0, a = t.position || [ 0, 0 ];
        return i && (e[4] -= i[0], e[5] -= i[1]), Q(e, e, r), n && Z(e, e, n), i && (e[4] += i[0], 
        e[5] += i[1]), e[4] += a[0], e[5] += a[1], e;
    };
    var tn = {
        linear: function(t) {
            return t;
        },
        quadraticIn: function(t) {
            return t * t;
        },
        quadraticOut: function(t) {
            return t * (2 - t);
        },
        quadraticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        cubicIn: function(t) {
            return t * t * t;
        },
        cubicOut: function(t) {
            return --t * t * t + 1;
        },
        cubicInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        quarticIn: function(t) {
            return t * t * t * t;
        },
        quarticOut: function(t) {
            return 1 - --t * t * t * t;
        },
        quarticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        quinticIn: function(t) {
            return t * t * t * t * t;
        },
        quinticOut: function(t) {
            return --t * t * t * t * t + 1;
        },
        quinticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        sinusoidalIn: function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
        },
        sinusoidalOut: function(t) {
            return Math.sin(t * Math.PI / 2);
        },
        sinusoidalInOut: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
        },
        exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        exponentialInOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        },
        circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        circularOut: function(t) {
            return Math.sqrt(1 - --t * t);
        },
        circularInOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        elasticIn: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4));
        },
        elasticOut: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1);
        },
        elasticInOut: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1);
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
        },
        backOut: function(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
        },
        backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
        },
        bounceIn: function(t) {
            return 1 - tn.bounceOut(1 - t);
        },
        bounceOut: function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        bounceInOut: function(t) {
            return t < .5 ? .5 * tn.bounceIn(2 * t) : .5 * tn.bounceOut(2 * t - 1) + .5;
        }
    };
    J.prototype = {
        constructor: J,
        step: function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), 
            this._paused) this._pausedTime += e; else {
                var i = (t - this._startTime - this._pausedTime) / this._life;
                if (!(i < 0)) {
                    i = Math.min(i, 1);
                    var r = this.easing, n = "string" == typeof r ? tn[r] : r, a = "function" == typeof n ? n(i) : i;
                    return this.fire("frame", a), 1 == i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, 
                    "destroy") : null;
                }
            }
        },
        restart: function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
        },
        fire: function(t, e) {
            this[t = "on" + t] && this[t](this._target, e);
        },
        pause: function() {
            this._paused = !0;
        },
        resume: function() {
            this._paused = !1;
        }
    };
    var en = function() {
        this.head = null, this.tail = null, this._len = 0;
    }, rn = en.prototype;
    rn.insert = function(t) {
        var e = new nn(t);
        return this.insertEntry(e), e;
    }, rn.insertEntry = function(t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, 
        this._len++;
    }, rn.remove = function(t) {
        var e = t.prev, i = t.next;
        e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, 
        this._len--;
    }, rn.len = function() {
        return this._len;
    }, rn.clear = function() {
        this.head = this.tail = null, this._len = 0;
    };
    var nn = function(t) {
        this.value = t, this.next, this.prev;
    }, an = function(t) {
        this._list = new en(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
    }, on = an.prototype;
    on.put = function(t, e) {
        var i = this._list, r = this._map, n = null;
        if (null == r[t]) {
            var a = i.len(), o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = i.head;
                i.remove(s), delete r[s.key], n = s.value, this._lastRemovedEntry = s;
            }
            o ? o.value = e : o = new nn(e), o.key = t, i.insertEntry(o), r[t] = o;
        }
        return n;
    }, on.get = function(t) {
        var e = this._map[t], i = this._list;
        if (null != e) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
    }, on.clear = function() {
        this._list.clear(), this._map = {};
    };
    var sn = {
        transparent: [ 0, 0, 0, 0 ],
        aliceblue: [ 240, 248, 255, 1 ],
        antiquewhite: [ 250, 235, 215, 1 ],
        aqua: [ 0, 255, 255, 1 ],
        aquamarine: [ 127, 255, 212, 1 ],
        azure: [ 240, 255, 255, 1 ],
        beige: [ 245, 245, 220, 1 ],
        bisque: [ 255, 228, 196, 1 ],
        black: [ 0, 0, 0, 1 ],
        blanchedalmond: [ 255, 235, 205, 1 ],
        blue: [ 0, 0, 255, 1 ],
        blueviolet: [ 138, 43, 226, 1 ],
        brown: [ 165, 42, 42, 1 ],
        burlywood: [ 222, 184, 135, 1 ],
        cadetblue: [ 95, 158, 160, 1 ],
        chartreuse: [ 127, 255, 0, 1 ],
        chocolate: [ 210, 105, 30, 1 ],
        coral: [ 255, 127, 80, 1 ],
        cornflowerblue: [ 100, 149, 237, 1 ],
        cornsilk: [ 255, 248, 220, 1 ],
        crimson: [ 220, 20, 60, 1 ],
        cyan: [ 0, 255, 255, 1 ],
        darkblue: [ 0, 0, 139, 1 ],
        darkcyan: [ 0, 139, 139, 1 ],
        darkgoldenrod: [ 184, 134, 11, 1 ],
        darkgray: [ 169, 169, 169, 1 ],
        darkgreen: [ 0, 100, 0, 1 ],
        darkgrey: [ 169, 169, 169, 1 ],
        darkkhaki: [ 189, 183, 107, 1 ],
        darkmagenta: [ 139, 0, 139, 1 ],
        darkolivegreen: [ 85, 107, 47, 1 ],
        darkorange: [ 255, 140, 0, 1 ],
        darkorchid: [ 153, 50, 204, 1 ],
        darkred: [ 139, 0, 0, 1 ],
        darksalmon: [ 233, 150, 122, 1 ],
        darkseagreen: [ 143, 188, 143, 1 ],
        darkslateblue: [ 72, 61, 139, 1 ],
        darkslategray: [ 47, 79, 79, 1 ],
        darkslategrey: [ 47, 79, 79, 1 ],
        darkturquoise: [ 0, 206, 209, 1 ],
        darkviolet: [ 148, 0, 211, 1 ],
        deeppink: [ 255, 20, 147, 1 ],
        deepskyblue: [ 0, 191, 255, 1 ],
        dimgray: [ 105, 105, 105, 1 ],
        dimgrey: [ 105, 105, 105, 1 ],
        dodgerblue: [ 30, 144, 255, 1 ],
        firebrick: [ 178, 34, 34, 1 ],
        floralwhite: [ 255, 250, 240, 1 ],
        forestgreen: [ 34, 139, 34, 1 ],
        fuchsia: [ 255, 0, 255, 1 ],
        gainsboro: [ 220, 220, 220, 1 ],
        ghostwhite: [ 248, 248, 255, 1 ],
        gold: [ 255, 215, 0, 1 ],
        goldenrod: [ 218, 165, 32, 1 ],
        gray: [ 128, 128, 128, 1 ],
        green: [ 0, 128, 0, 1 ],
        greenyellow: [ 173, 255, 47, 1 ],
        grey: [ 128, 128, 128, 1 ],
        honeydew: [ 240, 255, 240, 1 ],
        hotpink: [ 255, 105, 180, 1 ],
        indianred: [ 205, 92, 92, 1 ],
        indigo: [ 75, 0, 130, 1 ],
        ivory: [ 255, 255, 240, 1 ],
        khaki: [ 240, 230, 140, 1 ],
        lavender: [ 230, 230, 250, 1 ],
        lavenderblush: [ 255, 240, 245, 1 ],
        lawngreen: [ 124, 252, 0, 1 ],
        lemonchiffon: [ 255, 250, 205, 1 ],
        lightblue: [ 173, 216, 230, 1 ],
        lightcoral: [ 240, 128, 128, 1 ],
        lightcyan: [ 224, 255, 255, 1 ],
        lightgoldenrodyellow: [ 250, 250, 210, 1 ],
        lightgray: [ 211, 211, 211, 1 ],
        lightgreen: [ 144, 238, 144, 1 ],
        lightgrey: [ 211, 211, 211, 1 ],
        lightpink: [ 255, 182, 193, 1 ],
        lightsalmon: [ 255, 160, 122, 1 ],
        lightseagreen: [ 32, 178, 170, 1 ],
        lightskyblue: [ 135, 206, 250, 1 ],
        lightslategray: [ 119, 136, 153, 1 ],
        lightslategrey: [ 119, 136, 153, 1 ],
        lightsteelblue: [ 176, 196, 222, 1 ],
        lightyellow: [ 255, 255, 224, 1 ],
        lime: [ 0, 255, 0, 1 ],
        limegreen: [ 50, 205, 50, 1 ],
        linen: [ 250, 240, 230, 1 ],
        magenta: [ 255, 0, 255, 1 ],
        maroon: [ 128, 0, 0, 1 ],
        mediumaquamarine: [ 102, 205, 170, 1 ],
        mediumblue: [ 0, 0, 205, 1 ],
        mediumorchid: [ 186, 85, 211, 1 ],
        mediumpurple: [ 147, 112, 219, 1 ],
        mediumseagreen: [ 60, 179, 113, 1 ],
        mediumslateblue: [ 123, 104, 238, 1 ],
        mediumspringgreen: [ 0, 250, 154, 1 ],
        mediumturquoise: [ 72, 209, 204, 1 ],
        mediumvioletred: [ 199, 21, 133, 1 ],
        midnightblue: [ 25, 25, 112, 1 ],
        mintcream: [ 245, 255, 250, 1 ],
        mistyrose: [ 255, 228, 225, 1 ],
        moccasin: [ 255, 228, 181, 1 ],
        navajowhite: [ 255, 222, 173, 1 ],
        navy: [ 0, 0, 128, 1 ],
        oldlace: [ 253, 245, 230, 1 ],
        olive: [ 128, 128, 0, 1 ],
        olivedrab: [ 107, 142, 35, 1 ],
        orange: [ 255, 165, 0, 1 ],
        orangered: [ 255, 69, 0, 1 ],
        orchid: [ 218, 112, 214, 1 ],
        palegoldenrod: [ 238, 232, 170, 1 ],
        palegreen: [ 152, 251, 152, 1 ],
        paleturquoise: [ 175, 238, 238, 1 ],
        palevioletred: [ 219, 112, 147, 1 ],
        papayawhip: [ 255, 239, 213, 1 ],
        peachpuff: [ 255, 218, 185, 1 ],
        peru: [ 205, 133, 63, 1 ],
        pink: [ 255, 192, 203, 1 ],
        plum: [ 221, 160, 221, 1 ],
        powderblue: [ 176, 224, 230, 1 ],
        purple: [ 128, 0, 128, 1 ],
        red: [ 255, 0, 0, 1 ],
        rosybrown: [ 188, 143, 143, 1 ],
        royalblue: [ 65, 105, 225, 1 ],
        saddlebrown: [ 139, 69, 19, 1 ],
        salmon: [ 250, 128, 114, 1 ],
        sandybrown: [ 244, 164, 96, 1 ],
        seagreen: [ 46, 139, 87, 1 ],
        seashell: [ 255, 245, 238, 1 ],
        sienna: [ 160, 82, 45, 1 ],
        silver: [ 192, 192, 192, 1 ],
        skyblue: [ 135, 206, 235, 1 ],
        slateblue: [ 106, 90, 205, 1 ],
        slategray: [ 112, 128, 144, 1 ],
        slategrey: [ 112, 128, 144, 1 ],
        snow: [ 255, 250, 250, 1 ],
        springgreen: [ 0, 255, 127, 1 ],
        steelblue: [ 70, 130, 180, 1 ],
        tan: [ 210, 180, 140, 1 ],
        teal: [ 0, 128, 128, 1 ],
        thistle: [ 216, 191, 216, 1 ],
        tomato: [ 255, 99, 71, 1 ],
        turquoise: [ 64, 224, 208, 1 ],
        violet: [ 238, 130, 238, 1 ],
        wheat: [ 245, 222, 179, 1 ],
        white: [ 255, 255, 255, 1 ],
        whitesmoke: [ 245, 245, 245, 1 ],
        yellow: [ 255, 255, 0, 1 ],
        yellowgreen: [ 154, 205, 50, 1 ]
    }, hn = new an(20), ln = null, un = dt, cn = pt, fn = (Object.freeze || Object)({
        parse: ut,
        lift: function(t, e) {
            var i = ut(t);
            if (i) {
                for (var r = 0; r < 3; r++) i[r] = e < 0 ? i[r] * (1 - e) | 0 : (255 - i[r]) * e + i[r] | 0, 
                i[r] > 255 ? i[r] = 255 : t[r] < 0 && (i[r] = 0);
                return vt(i, 4 === i.length ? "rgba" : "rgb");
            }
        },
        toHex: function(t) {
            var e = ut(t);
            if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1);
        },
        fastLerp: dt,
        fastMapToColor: un,
        lerp: pt,
        mapToColor: cn,
        modifyHSL: function(t, e, i, r) {
            if (t = ut(t)) return t = ft(t), null != e && (t[0] = et(e)), null != i && (t[1] = nt(i)), 
            null != r && (t[2] = nt(r)), vt(ct(t), "rgba");
        },
        modifyAlpha: function(t, e) {
            if ((t = ut(t)) && null != e) return t[3] = it(e), vt(t, "rgba");
        },
        stringify: vt
    }), dn = Array.prototype.slice, pn = function(t, e, i, r) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || gt, 
        this._setter = r || _t, this._clipCount = 0, this._delay = 0, this._doneList = [], 
        this._onframeList = [], this._clipList = [];
    };
    pn.prototype = {
        when: function(t, e) {
            var i = this._tracks;
            for (var r in e) if (e.hasOwnProperty(r)) {
                if (!i[r]) {
                    i[r] = [];
                    var n = this._getter(this._target, r);
                    if (null == n) continue;
                    0 !== t && i[r].push({
                        time: 0,
                        value: Mt(n)
                    });
                }
                i[r].push({
                    time: t,
                    value: e[r]
                });
            }
            return this;
        },
        during: function(t) {
            return this._onframeList.push(t), this;
        },
        pause: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0;
        },
        resume: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1;
        },
        isPaused: function() {
            return !!this._paused;
        },
        _doneCallback: function() {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, i = 0; i < e; i++) t[i].call(this);
        },
        start: function(t, e) {
            var i, r = this, n = 0;
            for (var a in this._tracks) if (this._tracks.hasOwnProperty(a)) {
                var o = Pt(this, t, function() {
                    --n || r._doneCallback();
                }, this._tracks[a], a, e);
                o && (this._clipList.push(o), n++, this.animation && this.animation.addClip(o), 
                i = o);
            }
            if (i) {
                var s = i.onframe;
                i.onframe = function(t, e) {
                    s(t, e);
                    for (var i = 0; i < r._onframeList.length; i++) r._onframeList[i](t, e);
                };
            }
            return n || this._doneCallback(), this;
        },
        stop: function(t) {
            for (var e = this._clipList, i = this.animation, r = 0; r < e.length; r++) {
                var n = e[r];
                t && n.onframe(this._target, 1), i && i.removeClip(n);
            }
            e.length = 0;
        },
        delay: function(t) {
            return this._delay = t, this;
        },
        done: function(t) {
            return t && this._doneList.push(t), this;
        },
        getClips: function() {
            return this._clipList;
        }
    };
    var vn = 1;
    "undefined" != typeof window && (vn = Math.max(window.devicePixelRatio || 1, 1));
    var gn = vn, _n = function() {}, mn = _n, yn = function() {
        this.animators = [];
    };
    yn.prototype = {
        constructor: yn,
        animate: function(t, e) {
            var i, r = !1, n = this, a = this.__zr;
            if (t) {
                var o = t.split("."), h = n;
                r = "shape" === o[0];
                for (var l = 0, u = o.length; l < u; l++) h && (h = h[o[l]]);
                h && (i = h);
            } else i = n;
            if (i) {
                var c = n.animators, f = new pn(i, e);
                return f.during(function(t) {
                    n.dirty(r);
                }).done(function() {
                    c.splice(s(c, f), 1);
                }), c.push(f), a && a.animation.addAnimator(f), f;
            }
            mn('Property "' + t + '" is not existed in element ' + n.id);
        },
        stopAnimation: function(t) {
            for (var e = this.animators, i = e.length, r = 0; r < i; r++) e[r].stop(t);
            return e.length = 0, this;
        },
        animateTo: function(t, e, i, r, n, a) {
            g(i) ? (n = r, r = i, i = 0) : v(r) ? (n = r, r = "linear", i = 0) : v(i) ? (n = i, 
            i = 0) : v(e) ? (n = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i);
            var o = this.animators.slice(), s = o.length;
            s || n && n();
            for (var h = 0; h < o.length; h++) o[h].done(function() {
                --s || n && n();
            }).start(r, a);
        },
        _animateToShallow: function(t, e, i, r, n) {
            var a = {}, o = 0;
            for (var s in i) if (i.hasOwnProperty(s)) if (null != e[s]) _(i[s]) && !u(i[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], i[s], r, n) : (a[s] = i[s], 
            o++); else if (null != i[s]) if (t) {
                var h = {};
                h[t] = {}, h[t][s] = i[s], this.attr(h);
            } else this.attr(s, i[s]);
            return o > 0 && this.animate(t, !1).when(null == r ? 500 : r, a).delay(n || 0), 
            this;
        }
    };
    var xn = function(t) {
        $r.call(this, t), jr.call(this, t), yn.call(this, t), this.id = t.id || yr();
    };
    xn.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
            switch (this.draggable) {
              case "horizontal":
                e = 0;
                break;

              case "vertical":
                t = 0;
            }
            var i = this.transform;
            i || (i = this.transform = [ 1, 0, 0, 1, 0, 0 ]), i[4] += t, i[5] += e, this.decomposeTransform(), 
            this.dirty(!1);
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
            this.updateTransform();
        },
        traverse: function(t, e) {},
        attrKV: function(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var i = this[t];
                    i || (i = this[t] = []), i[0] = e[0], i[1] = e[1];
                }
            } else this[t] = e;
        },
        hide: function() {
            this.ignore = !0, this.__zr && this.__zr.refresh();
        },
        show: function() {
            this.ignore = !1, this.__zr && this.__zr.refresh();
        },
        attr: function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (_(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
            return this.dirty(!1), this;
        },
        setClipPath: function(t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), 
            this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
        },
        removeClipPath: function() {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, 
            this.clipPath = null, this.dirty(!1));
        },
        addSelfToZr: function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
            this.clipPath && this.clipPath.addSelfToZr(t);
        },
        removeSelfFromZr: function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
            this.clipPath && this.clipPath.removeSelfFromZr(t);
        }
    }, l(xn, yn), l(xn, $r), l(xn, jr);
    var wn = E, bn = Math.min, kn = Math.max;
    Lt.prototype = {
        constructor: Lt,
        union: function(t) {
            var e = bn(t.x, this.x), i = bn(t.y, this.y);
            this.width = kn(t.x + t.width, this.x + this.width) - e, this.height = kn(t.y + t.height, this.y + this.height) - i, 
            this.x = e, this.y = i;
        },
        applyTransform: function() {
            var t = [], e = [], i = [], r = [];
            return function(n) {
                if (n) {
                    t[0] = i[0] = this.x, t[1] = r[1] = this.y, e[0] = r[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, 
                    wn(t, t, n), wn(e, e, n), wn(i, i, n), wn(r, r, n), this.x = bn(t[0], e[0], i[0], r[0]), 
                    this.y = bn(t[1], e[1], i[1], r[1]);
                    var a = kn(t[0], e[0], i[0], r[0]), o = kn(t[1], e[1], i[1], r[1]);
                    this.width = a - this.x, this.height = o - this.y;
                }
            };
        }(),
        calculateTransform: function(t) {
            var e = this, i = t.width / e.width, r = t.height / e.height, n = q();
            return G(n, n, [ -e.x, -e.y ]), Q(n, n, [ i, r ]), G(n, n, [ t.x, t.y ]), n;
        },
        intersect: function(t) {
            if (!t) return !1;
            t instanceof Lt || (t = Lt.create(t));
            var e = this, i = e.x, r = e.x + e.width, n = e.y, a = e.y + e.height, o = t.x, s = t.x + t.width, h = t.y, l = t.y + t.height;
            return !(r < o || s < i || a < h || l < n);
        },
        contain: function(t, e) {
            var i = this;
            return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
        },
        clone: function() {
            return new Lt(this.x, this.y, this.width, this.height);
        },
        copy: function(t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
        },
        plain: function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }
    }, Lt.create = function(t) {
        return new Lt(t.x, t.y, t.width, t.height);
    };
    var Tn = function(t) {
        t = t || {}, xn.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0;
    };
    Tn.prototype = {
        constructor: Tn,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function() {
            return this._children.slice();
        },
        childAt: function(t) {
            return this._children[t];
        },
        childOfName: function(t) {
            for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i];
        },
        childCount: function() {
            return this._children.length;
        },
        add: function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), 
            this;
        },
        addBefore: function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var i = this._children, r = i.indexOf(e);
                r >= 0 && (i.splice(r, 0, t), this._doAdd(t));
            }
            return this;
        },
        _doAdd: function(t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, i = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof Tn && t.addChildrenToStorage(e)), 
            i && i.refresh();
        },
        remove: function(t) {
            var e = this.__zr, i = this.__storage, r = this._children, n = s(r, t);
            return n < 0 ? this : (r.splice(n, 1), t.parent = null, i && (i.delFromStorage(t), 
            t instanceof Tn && t.delChildrenFromStorage(i)), e && e.refresh(), this);
        },
        removeAll: function() {
            var t, e, i = this._children, r = this.__storage;
            for (e = 0; e < i.length; e++) t = i[e], r && (r.delFromStorage(t), t instanceof Tn && t.delChildrenFromStorage(r)), 
            t.parent = null;
            return i.length = 0, this;
        },
        eachChild: function(t, e) {
            for (var i = this._children, r = 0; r < i.length; r++) {
                var n = i[r];
                t.call(e, n, r);
            }
            return this;
        },
        traverse: function(t, e) {
            for (var i = 0; i < this._children.length; i++) {
                var r = this._children[i];
                t.call(e, r), "group" === r.type && r.traverse(t, e);
            }
            return this;
        },
        addChildrenToStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.addToStorage(i), i instanceof Tn && i.addChildrenToStorage(t);
            }
        },
        delChildrenFromStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.delFromStorage(i), i instanceof Tn && i.delChildrenFromStorage(t);
            }
        },
        dirty: function() {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
        },
        getBoundingRect: function(t) {
            for (var e = null, i = new Lt(0, 0, 0, 0), r = t || this._children, n = [], a = 0; a < r.length; a++) {
                var o = r[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(), h = o.getLocalTransform(n);
                    h ? (i.copy(s), i.applyTransform(h), (e = e || i.clone()).union(i)) : (e = e || s.clone()).union(s);
                }
            }
            return e || i;
        }
    }, h(Tn, xn);
    var Mn = 32, Sn = 7, Cn = function() {
        this._roots = [], this._displayList = [], this._displayListLen = 0;
    };
    Cn.prototype = {
        constructor: Cn,
        traverse: function(t, e) {
            for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e);
        },
        getDisplayList: function(t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList;
        },
        updateDisplayList: function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, i = this._displayList, r = 0, n = e.length; r < n; r++) this._updateAndAddDisplayable(e[r], null, t);
            i.length = this._displayListLen, wr.canvasSupported && Ot(i, Ht);
        },
        _updateAndAddDisplayable: function(t, e, i) {
            if (!t.ignore || i) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var r = t.clipPath;
                if (r) {
                    e = e ? e.slice() : [];
                    for (var n = r, a = t; n; ) n.parent = a, n.updateTransform(), e.push(n), a = n, 
                    n = n.clipPath;
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var h = o[s];
                        t.__dirty && (h.__dirty = !0), this._updateAndAddDisplayable(h, e, i);
                    }
                    t.__dirty = !1;
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
            }
        },
        addRoot: function(t) {
            t.__storage !== this && (t instanceof Tn && t.addChildrenToStorage(this), this.addToStorage(t), 
            this._roots.push(t));
        },
        delRoot: function(t) {
            if (null == t) {
                for (i = 0; i < this._roots.length; i++) {
                    var e = this._roots[i];
                    e instanceof Tn && e.delChildrenFromStorage(this);
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
            }
            if (t instanceof Array) for (var i = 0, r = t.length; i < r; i++) this.delRoot(t[i]); else {
                var n = s(this._roots, t);
                n >= 0 && (this.delFromStorage(t), this._roots.splice(n, 1), t instanceof Tn && t.delChildrenFromStorage(this));
            }
        },
        addToStorage: function(t) {
            return t && (t.__storage = this, t.dirty(!1)), this;
        },
        delFromStorage: function(t) {
            return t && (t.__storage = null), this;
        },
        dispose: function() {
            this._renderList = this._roots = null;
        },
        displayableSortFunc: Ht
    };
    var Pn = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1
    }, Ln = function(t, e, i) {
        return Pn.hasOwnProperty(e) ? i *= t.dpr : i;
    }, An = [ [ "shadowBlur", 0 ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ], [ "shadowColor", "#000000" ], [ "lineCap", "butt" ], [ "lineJoin", "miter" ], [ "miterLimit", 10 ] ], zn = function(t, e) {
        this.extendFrom(t, !1), this.host = e;
    };
    zn.prototype = {
        constructor: zn,
        host: null,
        fill: "#000000",
        stroke: null,
        opacity: 1,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, i) {
            for (var r = this, n = i && i.style, a = !n, o = 0; o < An.length; o++) {
                var s = An[o], h = s[0];
                (a || r[h] !== n[h]) && (t[h] = Ln(t, h, r[h] || s[1]));
            }
            if ((a || r.fill !== n.fill) && (t.fillStyle = r.fill), (a || r.stroke !== n.stroke) && (t.strokeStyle = r.stroke), 
            (a || r.opacity !== n.opacity) && (t.globalAlpha = null == r.opacity ? 1 : r.opacity), 
            (a || r.blend !== n.blend) && (t.globalCompositeOperation = r.blend || "source-over"), 
            this.hasStroke()) {
                var l = r.lineWidth;
                t.lineWidth = l / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            }
        },
        hasFill: function() {
            var t = this.fill;
            return null != t && "none" !== t;
        },
        hasStroke: function() {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0;
        },
        extendFrom: function(t, e) {
            if (t) for (var i in t) !t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i]);
        },
        set: function(t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
        },
        clone: function() {
            var t = new this.constructor();
            return t.extendFrom(this, !0), t;
        },
        getGradient: function(t, e, i) {
            for (var r = ("radial" === e.type ? Wt : Ft)(t, e, i), n = e.colorStops, a = 0; a < n.length; a++) r.addColorStop(n[a].offset, n[a].color);
            return r;
        }
    };
    for (var Dn = zn.prototype, In = 0; In < An.length; In++) {
        var Bn = An[In];
        Bn[0] in Dn || (Dn[Bn[0]] = Bn[1]);
    }
    zn.getGradient = Dn.getGradient;
    var Rn = function(t, e) {
        this.image = t, this.repeat = e, this.type = "pattern";
    };
    Rn.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || "repeat");
    };
    var En = function(t, e, i) {
        var r;
        i = i || gn, "string" == typeof t ? r = Vt(t, e, i) : _(t) && (t = (r = t).id), 
        this.id = t, this.dom = r;
        var n = r.style;
        n && (r.onselectstart = Nt, n["-webkit-user-select"] = "none", n["user-select"] = "none", 
        n["-webkit-touch-callout"] = "none", n["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", 
        n.padding = 0, n.margin = 0, n["border-width"] = 0), this.domBack = null, this.ctxBack = null, 
        this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, 
        this.lastFrameAlpha = .7, this.dpr = i;
    };
    En.prototype = {
        constructor: En,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
            return this.__endIndex - this.__startIndex;
        },
        initContext: function() {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
        },
        createBackBuffer: function() {
            var t = this.dpr;
            this.domBack = Vt("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 
            1 != t && this.ctxBack.scale(t, t);
        },
        resize: function(t, e) {
            var i = this.dpr, r = this.dom, n = r.style, a = this.domBack;
            n && (n.width = t + "px", n.height = e + "px"), r.width = t * i, r.height = e * i, 
            a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i));
        },
        clear: function(t, e) {
            var i = this.dom, r = this.ctx, n = i.width, a = i.height, e = e || this.clearColor, o = this.motionBlur && !t, s = this.lastFrameAlpha, h = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", 
            this.ctxBack.drawImage(i, 0, 0, n / h, a / h)), r.clearRect(0, 0, n, a), e && "transparent" !== e) {
                var l;
                e.colorStops ? (l = e.__canvasGradient || zn.getGradient(r, e, {
                    x: 0,
                    y: 0,
                    width: n,
                    height: a
                }), e.__canvasGradient = l) : e.image && (l = Rn.prototype.getCanvasPattern.call(e, r)), 
                r.save(), r.fillStyle = l || e, r.fillRect(0, 0, n, a), r.restore();
            }
            if (o) {
                var u = this.domBack;
                r.save(), r.globalAlpha = s, r.drawImage(u, 0, 0, n, a), r.restore();
            }
        }
    };
    var On = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
        setTimeout(t, 16);
    }, Hn = new an(50), Fn = {}, Wn = 0, Nn = 5e3, Vn = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, jn = "12px sans-serif", qn = {};
    qn.measureText = function(t, e) {
        return o().font = e || jn, {
            width: parseInt(e.substring(0, 1))
        };
    };
    var Xn = {
        left: 1,
        right: 1,
        center: 1
    }, Un = {
        top: 1,
        bottom: 1,
        middle: 1
    }, Yn = new Lt(), Gn = function() {};
    Gn.prototype = {
        constructor: Gn,
        drawRectText: function(t, e) {
            var i = this.style;
            e = i.textRect || e, this.__dirty && ce(i);
            var r = i.text;
            if (null != r && (r += ""), Pe(r, i)) {
                t.save();
                var n = this.transform;
                i.transformText ? this.setTransform(t) : n && (Yn.copy(e), Yn.applyTransform(n), 
                e = Yn), de(this, t, r, i, e), t.restore();
            }
        }
    }, Le.prototype = {
        constructor: Le,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        inplace: !1,
        beforeBrush: function(t) {},
        afterBrush: function(t) {},
        brush: function(t, e) {},
        getBoundingRect: function() {},
        contain: function(t, e) {
            return this.rectContain(t, e);
        },
        traverse: function(t, e) {
            t.call(e, this);
        },
        rectContain: function(t, e) {
            var i = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(i[0], i[1]);
        },
        dirty: function() {
            this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh();
        },
        animateStyle: function(t) {
            return this.animate("style", t);
        },
        attrKV: function(t, e) {
            "style" !== t ? xn.prototype.attrKV.call(this, t, e) : this.style.set(e);
        },
        setStyle: function(t, e) {
            return this.style.set(t, e), this.dirty(!1), this;
        },
        useStyle: function(t) {
            return this.style = new zn(t, this), this.dirty(!1), this;
        }
    }, h(Le, xn), l(Le, Gn), Ae.prototype = {
        constructor: Ae,
        type: "image",
        brush: function(t, e) {
            var i = this.style, r = i.image;
            i.bind(t, this, e);
            var n = this._image = qt(r, this._image, this, this.onload);
            if (n && Ut(n)) {
                var a = i.x || 0, o = i.y || 0, s = i.width, h = i.height, l = n.width / n.height;
                if (null == s && null != h ? s = h * l : null == h && null != s ? h = s / l : null == s && null == h && (s = n.width, 
                h = n.height), this.setTransform(t), i.sWidth && i.sHeight) {
                    var u = i.sx || 0, c = i.sy || 0;
                    t.drawImage(n, u, c, i.sWidth, i.sHeight, a, o, s, h);
                } else if (i.sx && i.sy) {
                    var f = s - (u = i.sx), d = h - (c = i.sy);
                    t.drawImage(n, u, c, f, d, a, o, s, h);
                } else t.drawImage(n, a, o, s, h);
                null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
            }
        },
        getBoundingRect: function() {
            var t = this.style;
            return this._rect || (this._rect = new Lt(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), 
            this._rect;
        }
    }, h(Ae, Le);
    var Zn = new Lt(0, 0, 0, 0), Qn = new Lt(0, 0, 0, 0), $n = function(t, e, i) {
        this.type = "canvas";
        var r = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = i = n({}, i || {}), this.dpr = i.devicePixelRatio || gn, this._singleCanvas = r, 
        this.root = t;
        var a = t.style;
        a && (a["-webkit-tap-highlight-color"] = "transparent", a["-webkit-user-select"] = a["user-select"] = a["-webkit-touch-callout"] = "none", 
        t.innerHTML = ""), this.storage = e;
        var o = this._zlevelList = [], s = this._layers = {};
        if (this._layerConfig = {}, this._needsManuallyCompositing = !1, r) {
            var h = t.width, l = t.height;
            null != i.width && (h = i.width), null != i.height && (l = i.height), this.dpr = i.devicePixelRatio || 1, 
            t.width = h * this.dpr, t.height = l * this.dpr, this._width = h, this._height = l;
            var u = new En(t, this, this.dpr);
            u.__builtin__ = !0, u.initContext(), s[314159] = u, o.push(314159), this._domRoot = t;
        } else {
            this._width = this._getSize(0), this._height = this._getSize(1);
            var c = this._domRoot = Ee(this._width, this._height);
            t.appendChild(c);
        }
        this._hoverlayer = null, this._hoverElements = [];
    };
    $n.prototype = {
        constructor: $n,
        getType: function() {
            return "canvas";
        },
        isSingleCanvas: function() {
            return this._singleCanvas;
        },
        getViewportRoot: function() {
            return this._domRoot;
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            if (t) return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            };
        },
        refresh: function(t) {
            var e = this.storage.getDisplayList(!0), i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var r = 0; r < i.length; r++) {
                var n = i[r], a = this._layers[n];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === r ? this._backgroundColor : null;
                    a.refresh(o);
                }
            }
            return this.refreshHover(), this;
        },
        addHover: function(t, e) {
            if (!t.__hoverMir) {
                var i = new t.constructor({
                    style: t.style,
                    shape: t.shape
                });
                i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i);
            }
        },
        removeHover: function(t) {
            var e = t.__hoverMir, i = this._hoverElements, r = s(i, e);
            r >= 0 && i.splice(r, 1), t.__hoverMir = null;
        },
        clearHover: function(t) {
            for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                var r = e[i].__from;
                r && (r.__hoverMir = null);
            }
            e.length = 0;
        },
        refreshHover: function() {
            var t = this._hoverElements, e = t.length, i = this._hoverlayer;
            if (i && i.clear(), e) {
                Ot(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                var r = {};
                i.ctx.save();
                for (var n = 0; n < e; ) {
                    var a = t[n], o = a.__from;
                    o && o.__zr ? (n++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, 
                    a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, r))) : (t.splice(n, 1), 
                    o.__hoverMir = null, e--);
                }
                i.ctx.restore();
            }
        },
        getHoverLayer: function() {
            return this.getLayer(1e5);
        },
        _paintList: function(t, e, i) {
            if (this._redrawId === i) {
                e = e || !1, this._updateLayerStatus(t);
                var r = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !r) {
                    var n = this;
                    On(function() {
                        n._paintList(t, e, i);
                    });
                }
            }
        },
        _compositeManually: function() {
            var t = this.getLayer(314159).ctx, e = this._domRoot.width, i = this._domRoot.height;
            t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function(r) {
                r.virtual && t.drawImage(r.dom, 0, 0, e, i);
            });
        },
        _doPaintList: function(t, e) {
            for (var i = [], r = 0; r < this._zlevelList.length; r++) {
                var n = this._zlevelList[r];
                (s = this._layers[n]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && i.push(s);
            }
            for (var a = !0, o = 0; o < i.length; o++) {
                var s = i[o], h = s.ctx, l = {};
                h.save();
                var u = e ? s.__startIndex : s.__drawIndex, f = !e && s.incremental && Date.now, d = f && Date.now(), p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, p); else if (u === s.__startIndex) {
                    var v = t[u];
                    v.incremental && v.notClear && !e || s.clear(!1, p);
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);
                for (var g = u; g < s.__endIndex; g++) {
                    var _ = t[g];
                    if (this._doPaintEl(_, s, e, l), _.__dirty = !1, f && Date.now() - d > 15) break;
                }
                s.__drawIndex = g, s.__drawIndex < s.__endIndex && (a = !1), l.prevElClipPaths && h.restore(), 
                h.restore();
            }
            return wr.wxa && c(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
            }), a;
        },
        _doPaintEl: function(t, e, i, r) {
            var n = e.ctx, a = t.transform;
            if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !Ie(t, this._width, this._height))) {
                var o = t.__clipPaths;
                r.prevElClipPaths && !Be(o, r.prevElClipPaths) || (r.prevElClipPaths && (e.ctx.restore(), 
                r.prevElClipPaths = null, r.prevEl = null), o && (n.save(), Re(o, n), r.prevElClipPaths = o)), 
                t.beforeBrush && t.beforeBrush(n), t.brush(n, r.prevEl || null), r.prevEl = t, t.afterBrush && t.afterBrush(n);
            }
        },
        getLayer: function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
            var i = this._layers[t];
            return i || ((i = new En("zr_" + t, this, this.dpr)).zlevel = t, i.__builtin__ = !0, 
            this._layerConfig[t] && r(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), 
            i.initContext()), i;
        },
        insertLayer: function(t, e) {
            var i = this._layers, r = this._zlevelList, n = r.length, a = null, o = -1, s = this._domRoot;
            if (i[t]) mn("ZLevel " + t + " has been used already"); else if (De(e)) {
                if (n > 0 && t > r[0]) {
                    for (o = 0; o < n - 1 && !(r[o] < t && r[o + 1] > t); o++) ;
                    a = i[r[o]];
                }
                if (r.splice(o + 1, 0, t), i[t] = e, !e.virtual) if (a) {
                    var h = a.dom;
                    h.nextSibling ? s.insertBefore(e.dom, h.nextSibling) : s.appendChild(e.dom);
                } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
            } else mn("Layer of zlevel " + t + " is not valid");
        },
        eachLayer: function(t, e) {
            var i, r, n = this._zlevelList;
            for (r = 0; r < n.length; r++) i = n[r], t.call(e, this._layers[i], i);
        },
        eachBuiltinLayer: function(t, e) {
            var i, r, n, a = this._zlevelList;
            for (n = 0; n < a.length; n++) r = a[n], (i = this._layers[r]).__builtin__ && t.call(e, i, r);
        },
        eachOtherLayer: function(t, e) {
            var i, r, n, a = this._zlevelList;
            for (n = 0; n < a.length; n++) r = a[n], (i = this._layers[r]).__builtin__ || t.call(e, i, r);
        },
        getLayers: function() {
            return this._layers;
        },
        _updateLayerStatus: function(t) {
            function e(t) {
                i && (i.__endIndex !== t && (i.__dirty = !0), i.__endIndex = t);
            }
            if (this.eachBuiltinLayer(function(t, e) {
                t.__dirty = t.__used = !1;
            }), this._singleCanvas) for (n = 1; n < t.length; n++) if ((o = t[n]).zlevel !== t[n - 1].zlevel || o.incremental) {
                this._needsManuallyCompositing = !0;
                break;
            }
            for (var i = null, r = 0, n = 0; n < t.length; n++) {
                var a, o = t[n], s = o.zlevel;
                o.incremental ? ((a = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, 
                r = 1) : a = this.getLayer(s + (r > 0 ? .01 : 0), this._needsManuallyCompositing), 
                a.__builtin__ || mn("ZLevel " + s + " has been used by unkown layer " + a.id), a !== i && (a.__used = !0, 
                a.__startIndex !== n && (a.__dirty = !0), a.__startIndex = n, a.incremental ? a.__drawIndex = -1 : a.__drawIndex = n, 
                e(n), i = a), o.__dirty && (a.__dirty = !0, a.incremental && a.__drawIndex < 0 && (a.__drawIndex = n));
            }
            e(n), this.eachBuiltinLayer(function(t, e) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), 
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        },
        clear: function() {
            return this.eachBuiltinLayer(this._clearLayer), this;
        },
        _clearLayer: function(t) {
            t.clear();
        },
        setBackgroundColor: function(t) {
            this._backgroundColor = t;
        },
        configLayer: function(t, e) {
            if (e) {
                var i = this._layerConfig;
                i[t] ? r(i[t], e, !0) : i[t] = e;
                for (var n = 0; n < this._zlevelList.length; n++) {
                    var a = this._zlevelList[n];
                    a !== t && a !== t + .01 || r(this._layers[a], i[t], !0);
                }
            }
        },
        delLayer: function(t) {
            var e = this._layers, i = this._zlevelList, r = e[t];
            r && (r.dom.parentNode.removeChild(r.dom), delete e[t], i.splice(s(i, t), 1));
        },
        resize: function(t, e) {
            if (this._domRoot.style) {
                var i = this._domRoot;
                i.style.display = "none";
                var r = this._opts;
                if (null != t && (r.width = t), null != e && (r.height = e), t = this._getSize(0), 
                e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                    i.style.width = t + "px", i.style.height = e + "px";
                    for (var n in this._layers) this._layers.hasOwnProperty(n) && this._layers[n].resize(t, e);
                    c(this._progressiveLayers, function(i) {
                        i.resize(t, e);
                    }), this.refresh(!0);
                }
                this._width = t, this._height = e;
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(314159).resize(t, e);
            }
            return this;
        },
        clearLayer: function(t) {
            var e = this._layers[t];
            e && e.clear();
        },
        dispose: function() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
        },
        getRenderedCanvas: function(t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
            var e = new En("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, r = e.dom.height, n = e.ctx;
                this.eachLayer(function(t) {
                    t.__builtin__ ? n.drawImage(t.dom, 0, 0, i, r) : t.renderToCanvas && (e.ctx.save(), 
                    t.renderToCanvas(e.ctx), e.ctx.restore());
                });
            } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                var h = o[s];
                this._doPaintEl(h, e, !0, a);
            }
            return e.dom;
        },
        getWidth: function() {
            return this._width;
        },
        getHeight: function() {
            return this._height;
        },
        _getSize: function(t) {
            var e = this._opts, i = [ "width", "height" ][t], r = [ "clientWidth", "clientHeight" ][t], n = [ "paddingLeft", "paddingTop" ][t], a = [ "paddingRight", "paddingBottom" ][t];
            if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
            var o = this.root, s = document.defaultView.getComputedStyle(o);
            return (o[r] || ze(s[i]) || ze(o.style[i])) - (ze(s[n]) || 0) - (ze(s[a]) || 0) | 0;
        },
        pathToImage: function(t, e) {
            e = e || this.dpr;
            var i = document.createElement("canvas"), r = i.getContext("2d"), n = t.getBoundingRect(), a = t.style, o = a.shadowBlur * e, s = a.shadowOffsetX * e, h = a.shadowOffsetY * e, l = a.hasStroke() ? a.lineWidth : 0, u = Math.max(l / 2, -s + o), c = Math.max(l / 2, s + o), f = Math.max(l / 2, -h + o), d = Math.max(l / 2, h + o), p = n.width + u + c, v = n.height + f + d;
            i.width = p * e, i.height = v * e, r.scale(e, e), r.clearRect(0, 0, p, v), r.dpr = e;
            var g = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [ u - n.x, f - n.y ], t.rotation = 0, t.scale = [ 1, 1 ], t.updateTransform(), 
            t && t.brush(r);
            var _ = new Ae({
                style: {
                    x: 0,
                    y: 0,
                    image: i
                }
            });
            return null != g.position && (_.position = t.position = g.position), null != g.rotation && (_.rotation = t.rotation = g.rotation), 
            null != g.scale && (_.scale = t.scale = g.scale), _;
        }
    };
    var Kn = "undefined" != typeof window && !!window.addEventListener, Jn = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ta = function(t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, 
        this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, 
        this._paused = !1, jr.call(this);
    };
    ta.prototype = {
        constructor: ta,
        addClip: function(t) {
            this._clips.push(t);
        },
        addAnimator: function(t) {
            t.animation = this;
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i]);
        },
        removeClip: function(t) {
            var e = s(this._clips, t);
            e >= 0 && this._clips.splice(e, 1);
        },
        removeAnimator: function(t) {
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
            t.animation = null;
        },
        _update: function() {
            for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, i = this._clips, r = i.length, n = [], a = [], o = 0; o < r; o++) {
                var s = i[o], h = s.step(t, e);
                h && (n.push(h), a.push(s));
            }
            for (o = 0; o < r; ) i[o]._needsRemove ? (i[o] = i[r - 1], i.pop(), r--) : o++;
            r = n.length;
            for (o = 0; o < r; o++) a[o].fire(n[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
        },
        _startLoop: function() {
            function t() {
                e._running && (On(t), !e._paused && e._update());
            }
            var e = this;
            this._running = !0, On(t);
        },
        start: function() {
            this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
        },
        stop: function() {
            this._running = !1;
        },
        pause: function() {
            this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
        },
        resume: function() {
            this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
        },
        clear: function() {
            this._clips = [];
        },
        isFinished: function() {
            return !this._clips.length;
        },
        animate: function(t, e) {
            var i = new pn(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(i), i;
        }
    }, l(ta, jr);
    var ea = function() {
        this._track = [];
    };
    ea.prototype = {
        constructor: ea,
        recognize: function(t, e, i) {
            return this._doTrack(t, e, i), this._recognize(t);
        },
        clear: function() {
            return this._track.length = 0, this;
        },
        _doTrack: function(t, e, i) {
            var r = t.touches;
            if (r) {
                for (var n = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, a = 0, o = r.length; a < o; a++) {
                    var s = r[a], h = He(i, s, {});
                    n.points.push([ h.zrX, h.zrY ]), n.touches.push(s);
                }
                this._track.push(n);
            }
        },
        _recognize: function(t) {
            for (var e in ia) if (ia.hasOwnProperty(e)) {
                var i = ia[e](this._track, t);
                if (i) return i;
            }
        }
    };
    var ia = {
        pinch: function(t, e) {
            var i = t.length;
            if (i) {
                var r = (t[i - 1] || {}).points, n = (t[i - 2] || {}).points || r;
                if (n && n.length > 1 && r && r.length > 1) {
                    var a = je(r) / je(n);
                    !isFinite(a) && (a = 1), e.pinchScale = a;
                    var o = qe(r);
                    return e.pinchX = o[0], e.pinchY = o[1], {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    };
                }
            }
        }
    }, ra = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], na = [ "touchstart", "touchend", "touchmove" ], aa = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
    }, oa = f(ra, function(t) {
        var e = t.replace("mouse", "pointer");
        return aa[e] ? e : t;
    }), sa = {
        mousemove: function(t) {
            t = We(this.dom, t), this.trigger("mousemove", t);
        },
        mouseout: function(t) {
            var e = (t = We(this.dom, t)).toElement || t.relatedTarget;
            if (e != this.dom) for (;e && 9 != e.nodeType; ) {
                if (e === this.dom) return;
                e = e.parentNode;
            }
            this.trigger("mouseout", t);
        },
        touchstart: function(t) {
            (t = We(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date(), Ue(this, t, "start"), 
            sa.mousemove.call(this, t), sa.mousedown.call(this, t), Ye(this);
        },
        touchmove: function(t) {
            (t = We(this.dom, t)).zrByTouch = !0, Ue(this, t, "change"), sa.mousemove.call(this, t), 
            Ye(this);
        },
        touchend: function(t) {
            (t = We(this.dom, t)).zrByTouch = !0, Ue(this, t, "end"), sa.mouseup.call(this, t), 
            +new Date() - this._lastTouchMoment < 300 && sa.click.call(this, t), Ye(this);
        },
        pointerdown: function(t) {
            sa.mousedown.call(this, t);
        },
        pointermove: function(t) {
            Ge(t) || sa.mousemove.call(this, t);
        },
        pointerup: function(t) {
            sa.mouseup.call(this, t);
        },
        pointerout: function(t) {
            Ge(t) || sa.mouseout.call(this, t);
        }
    };
    c([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(t) {
        sa[t] = function(e) {
            e = We(this.dom, e), this.trigger(t, e);
        };
    });
    var ha = Qe.prototype;
    ha.dispose = function() {
        for (var t = ra.concat(na), e = 0; e < t.length; e++) {
            var i = t[e];
            Ve(this.dom, Xe(i), this._handlers[i]);
        }
    }, ha.setCursor = function(t) {
        this.dom.style && (this.dom.style.cursor = t || "default");
    }, l(Qe, jr);
    var la = !wr.canvasSupported, ua = {
        canvas: $n
    }, ca = {}, fa = function(t, e, i) {
        i = i || {}, this.dom = e, this.id = t;
        var r = this, n = new Cn(), a = i.renderer;
        if (la) {
            if (!ua.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml";
        } else a && ua[a] || (a = "canvas");
        var o = new ua[a](e, n, i, t);
        this.storage = n, this.painter = o;
        var s = wr.node || wr.worker ? null : new Qe(o.getViewportRoot());
        this.handler = new Ur(n, o, s, o.root), this.animation = new ta({
            stage: {
                update: d(this.flush, this)
            }
        }), this.animation.start(), this._needsRefresh;
        var h = n.delFromStorage, l = n.addToStorage;
        n.delFromStorage = function(t) {
            h.call(n, t), t && t.removeSelfFromZr(r);
        }, n.addToStorage = function(t) {
            l.call(n, t), t.addSelfToZr(r);
        };
    };
    fa.prototype = {
        constructor: fa,
        getId: function() {
            return this.id;
        },
        add: function(t) {
            this.storage.addRoot(t), this._needsRefresh = !0;
        },
        remove: function(t) {
            this.storage.delRoot(t), this._needsRefresh = !0;
        },
        configLayer: function(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
        },
        setBackgroundColor: function(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
        },
        refreshImmediately: function() {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
        },
        refresh: function() {
            this._needsRefresh = !0;
        },
        flush: function() {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, 
            this.refreshHoverImmediately()), t && this.trigger("rendered");
        },
        addHover: function(t, e) {
            this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover());
        },
        removeHover: function(t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
        },
        clearHover: function() {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
        },
        refreshHover: function() {
            this._needsRefreshHover = !0;
        },
        refreshHoverImmediately: function() {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
        },
        resize: function(t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
        },
        clearAnimation: function() {
            this.animation.clear();
        },
        getWidth: function() {
            return this.painter.getWidth();
        },
        getHeight: function() {
            return this.painter.getHeight();
        },
        pathToImage: function(t, e) {
            return this.painter.pathToImage(t, e);
        },
        setCursorStyle: function(t) {
            this.handler.setCursorStyle(t);
        },
        findHover: function(t, e) {
            return this.handler.findHover(t, e);
        },
        on: function(t, e, i) {
            this.handler.on(t, e, i);
        },
        off: function(t, e) {
            this.handler.off(t, e);
        },
        trigger: function(t, e) {
            this.handler.trigger(t, e);
        },
        clear: function() {
            this.storage.delRoot(), this.painter.clear();
        },
        dispose: function() {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), 
            this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, 
            Ke(this.id);
        }
    };
    var da = Math.pow, pa = Math.sqrt, va = 1e-8, ga = 1e-4, _a = pa(3), ma = 1 / 3, ya = S(), xa = S(), wa = S(), ba = Math.min, ka = Math.max, Ta = Math.sin, Ma = Math.cos, Sa = 2 * Math.PI, Ca = S(), Pa = S(), La = S(), Aa = [], za = [], Da = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    }, Ia = [], Ba = [], Ra = [], Ea = [], Oa = Math.min, Ha = Math.max, Fa = Math.cos, Wa = Math.sin, Na = Math.sqrt, Va = Math.abs, ja = "undefined" != typeof Float32Array, qa = function(t) {
        this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
    };
    qa.prototype = {
        constructor: qa,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e) {
            this._ux = Va(1 / gn / t) || 0, this._uy = Va(1 / gn / e) || 0;
        },
        getContext: function() {
            return this._ctx;
        },
        beginPath: function(t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), 
            this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
        },
        moveTo: function(t, e) {
            return this.addData(Da.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, 
            this._y0 = e, this._xi = t, this._yi = e, this;
        },
        lineTo: function(t, e) {
            var i = Va(t - this._xi) > this._ux || Va(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Da.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), 
            i && (this._xi = t, this._yi = e), this;
        },
        bezierCurveTo: function(t, e, i, r, n, a) {
            return this.addData(Da.C, t, e, i, r, n, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, r, n, a) : this._ctx.bezierCurveTo(t, e, i, r, n, a)), 
            this._xi = n, this._yi = a, this;
        },
        quadraticCurveTo: function(t, e, i, r) {
            return this.addData(Da.Q, t, e, i, r), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, r) : this._ctx.quadraticCurveTo(t, e, i, r)), 
            this._xi = i, this._yi = r, this;
        },
        arc: function(t, e, i, r, n, a) {
            return this.addData(Da.A, t, e, i, i, r, n - r, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, r, n, a), 
            this._xi = Fa(n) * i + t, this._yi = Wa(n) * i + t, this;
        },
        arcTo: function(t, e, i, r, n) {
            return this._ctx && this._ctx.arcTo(t, e, i, r, n), this;
        },
        rect: function(t, e, i, r) {
            return this._ctx && this._ctx.rect(t, e, i, r), this.addData(Da.R, t, e, i, r), 
            this;
        },
        closePath: function() {
            this.addData(Da.Z);
            var t = this._ctx, e = this._x0, i = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, 
            this._yi = i, this;
        },
        fill: function(t) {
            t && t.fill(), this.toStatic();
        },
        stroke: function(t) {
            t && t.stroke(), this.toStatic();
        },
        setLineDash: function(t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                this._dashSum = e;
            }
            return this;
        },
        setLineDashOffset: function(t) {
            return this._dashOffset = t, this;
        },
        len: function() {
            return this._len;
        },
        setData: function(t) {
            var e = t.length;
            this.data && this.data.length == e || !ja || (this.data = new Float32Array(e));
            for (var i = 0; i < e; i++) this.data[i] = t[i];
            this._len = e;
        },
        appendPath: function(t) {
            t instanceof Array || (t = [ t ]);
            for (var e = t.length, i = 0, r = this._len, n = 0; n < e; n++) i += t[n].len();
            ja && this.data instanceof Float32Array && (this.data = new Float32Array(r + i));
            for (n = 0; n < e; n++) for (var a = t[n].data, o = 0; o < a.length; o++) this.data[r++] = a[o];
            this._len = r;
        },
        addData: function(t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                this._prevCmd = t;
            }
        },
        _expandData: function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t;
            }
        },
        _needsDash: function() {
            return this._lineDash;
        },
        _dashedLineTo: function(t, e) {
            var i, r, n = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, h = this._xi, l = this._yi, u = t - h, c = e - l, f = Na(u * u + c * c), d = h, p = l, v = o.length;
            for (u /= f, c /= f, a < 0 && (a = n + a), d -= (a %= n) * u, p -= a * c; u > 0 && d <= t || u < 0 && d >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e); ) d += u * (i = o[r = this._dashIdx]), 
            p += c * i, this._dashIdx = (r + 1) % v, u > 0 && d < h || u < 0 && d > h || c > 0 && p < l || c < 0 && p > l || s[r % 2 ? "moveTo" : "lineTo"](u >= 0 ? Oa(d, t) : Ha(d, t), c >= 0 ? Oa(p, e) : Ha(p, e));
            u = d - t, c = p - e, this._dashOffset = -Na(u * u + c * c);
        },
        _dashedBezierTo: function(t, e, i, r, n, a) {
            var o, s, h, l, u, c = this._dashSum, f = this._dashOffset, d = this._lineDash, p = this._ctx, v = this._xi, g = this._yi, _ = ei, m = 0, y = this._dashIdx, x = d.length, w = 0;
            for (f < 0 && (f = c + f), f %= c, o = 0; o < 1; o += .1) s = _(v, t, i, n, o + .1) - _(v, t, i, n, o), 
            h = _(g, e, r, a, o + .1) - _(g, e, r, a, o), m += Na(s * s + h * h);
            for (;y < x && !((w += d[y]) > f); y++) ;
            for (o = (w - f) / m; o <= 1; ) l = _(v, t, i, n, o), u = _(g, e, r, a, o), y % 2 ? p.moveTo(l, u) : p.lineTo(l, u), 
            o += d[y] / m, y = (y + 1) % x;
            y % 2 != 0 && p.lineTo(n, a), s = n - l, h = a - u, this._dashOffset = -Na(s * s + h * h);
        },
        _dashedQuadraticTo: function(t, e, i, r) {
            var n = i, a = r;
            i = (i + 2 * t) / 3, r = (r + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, 
            this._dashedBezierTo(t, e, i, r, n, a);
        },
        toStatic: function() {
            var t = this.data;
            t instanceof Array && (t.length = this._len, ja && (this.data = new Float32Array(t)));
        },
        getBoundingRect: function() {
            Ia[0] = Ia[1] = Ra[0] = Ra[1] = Number.MAX_VALUE, Ba[0] = Ba[1] = Ea[0] = Ea[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, i = 0, r = 0, n = 0, a = 0; a < t.length; ) {
                var o = t[a++];
                switch (1 == a && (r = e = t[a], n = i = t[a + 1]), o) {
                  case Da.M:
                    e = r = t[a++], i = n = t[a++], Ra[0] = r, Ra[1] = n, Ea[0] = r, Ea[1] = n;
                    break;

                  case Da.L:
                    di(e, i, t[a], t[a + 1], Ra, Ea), e = t[a++], i = t[a++];
                    break;

                  case Da.C:
                    pi(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Ra, Ea), e = t[a++], i = t[a++];
                    break;

                  case Da.Q:
                    vi(e, i, t[a++], t[a++], t[a], t[a + 1], Ra, Ea), e = t[a++], i = t[a++];
                    break;

                  case Da.A:
                    var s = t[a++], h = t[a++], l = t[a++], u = t[a++], c = t[a++], f = t[a++] + c, d = (t[a++], 
                    1 - t[a++]);
                    1 == a && (r = Fa(c) * l + s, n = Wa(c) * u + h), gi(s, h, l, u, c, f, d, Ra, Ea), 
                    e = Fa(f) * l + s, i = Wa(f) * u + h;
                    break;

                  case Da.R:
                    di(r = e = t[a++], n = i = t[a++], r + t[a++], n + t[a++], Ra, Ea);
                    break;

                  case Da.Z:
                    e = r, i = n;
                }
                O(Ia, Ia, Ra), H(Ba, Ba, Ea);
            }
            return 0 === a && (Ia[0] = Ia[1] = Ba[0] = Ba[1] = 0), new Lt(Ia[0], Ia[1], Ba[0] - Ia[0], Ba[1] - Ia[1]);
        },
        rebuildPath: function(t) {
            for (var e, i, r, n, a, o, s = this.data, h = this._ux, l = this._uy, u = this._len, c = 0; c < u; ) {
                var f = s[c++];
                switch (1 == c && (e = r = s[c], i = n = s[c + 1]), f) {
                  case Da.M:
                    e = r = s[c++], i = n = s[c++], t.moveTo(r, n);
                    break;

                  case Da.L:
                    a = s[c++], o = s[c++], (Va(a - r) > h || Va(o - n) > l || c === u - 1) && (t.lineTo(a, o), 
                    r = a, n = o);
                    break;

                  case Da.C:
                    t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), r = s[c - 2], n = s[c - 1];
                    break;

                  case Da.Q:
                    t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), r = s[c - 2], n = s[c - 1];
                    break;

                  case Da.A:
                    var d = s[c++], p = s[c++], v = s[c++], g = s[c++], _ = s[c++], m = s[c++], y = s[c++], x = s[c++], w = v > g ? v : g, b = v > g ? 1 : v / g, k = v > g ? g / v : 1, T = _ + m;
                    Math.abs(v - g) > .001 ? (t.translate(d, p), t.rotate(y), t.scale(b, k), t.arc(0, 0, w, _, T, 1 - x), 
                    t.scale(1 / b, 1 / k), t.rotate(-y), t.translate(-d, -p)) : t.arc(d, p, w, _, T, 1 - x), 
                    1 == c && (e = Fa(_) * v + d, i = Wa(_) * g + p), r = Fa(T) * v + d, n = Wa(T) * g + p;
                    break;

                  case Da.R:
                    e = r = s[c], i = n = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                    break;

                  case Da.Z:
                    t.closePath(), r = e, n = i;
                }
            }
        }
    }, qa.CMD = Da;
    var Xa = 2 * Math.PI, Ua = 2 * Math.PI, Ya = qa.CMD, Ga = 2 * Math.PI, Za = 1e-4, Qa = [ -1, -1, -1 ], $a = [ -1, -1 ], Ka = Rn.prototype.getCanvasPattern, Ja = Math.abs, to = new qa(!0);
    zi.prototype = {
        constructor: zi,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        brush: function(t, e) {
            var i = this.style, r = this.path || to, n = i.hasStroke(), a = i.hasFill(), o = i.fill, s = i.stroke, h = a && !!o.colorStops, l = n && !!s.colorStops, u = a && !!o.image, c = n && !!s.image;
            if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var f;
                h && (f = f || this.getBoundingRect(), this._fillGradient = i.getGradient(t, o, f)), 
                l && (f = f || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, f));
            }
            h ? t.fillStyle = this._fillGradient : u && (t.fillStyle = Ka.call(o, t)), l ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Ka.call(s, t));
            var d = i.lineDash, p = i.lineDashOffset, v = !!t.setLineDash, g = this.getGlobalScale();
            r.setScale(g[0], g[1]), this.__dirtyPath || d && !v && n ? (r.beginPath(t), d && !v && (r.setLineDash(d), 
            r.setLineDashOffset(p)), this.buildPath(r, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), 
            this.path.rebuildPath(t)), a && r.fill(t), d && v && (t.setLineDash(d), t.lineDashOffset = p), 
            n && r.stroke(t), d && v && t.setLineDash([]), null != i.text && (this.restoreTransform(t), 
            this.drawRectText(t, this.getBoundingRect()));
        },
        buildPath: function(t, e, i) {},
        createPathProxy: function() {
            this.path = new qa();
        },
        getBoundingRect: function() {
            var t = this._rect, e = this.style, i = !t;
            if (i) {
                var r = this.path;
                r || (r = this.path = new qa()), this.__dirtyPath && (r.beginPath(), this.buildPath(r, this.shape, !1)), 
                t = r.getBoundingRect();
            }
            if (this._rect = t, e.hasStroke()) {
                var n = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || i) {
                    n.copy(t);
                    var a = e.lineWidth, o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (n.width += a / o, 
                    n.height += a / o, n.x -= a / o / 2, n.y -= a / o / 2);
                }
                return n;
            }
            return t;
        },
        contain: function(t, e) {
            var i = this.transformCoordToLocal(t, e), r = this.getBoundingRect(), n = this.style;
            if (t = i[0], e = i[1], r.contain(t, e)) {
                var a = this.path.data;
                if (n.hasStroke()) {
                    var o = n.lineWidth, s = n.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (n.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), 
                    Ai(a, o / s, t, e))) return !0;
                }
                if (n.hasFill()) return Li(a, t, e);
            }
            return !1;
        },
        dirty: function(t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, 
            this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
        },
        animateShape: function(t) {
            return this.animate("shape", t);
        },
        attrKV: function(t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Le.prototype.attrKV.call(this, t, e);
        },
        setShape: function(t, e) {
            var i = this.shape;
            if (i) {
                if (_(t)) for (var r in t) t.hasOwnProperty(r) && (i[r] = t[r]); else i[t] = e;
                this.dirty(!0);
            }
            return this;
        },
        getLineScale: function() {
            var t = this.transform;
            return t && Ja(t[0] - 1) > 1e-10 && Ja(t[3] - 1) > 1e-10 ? Math.sqrt(Ja(t[0] * t[3] - t[2] * t[1])) : 1;
        }
    }, zi.extend = function(t) {
        var e = function(e) {
            zi.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var i = t.shape;
            if (i) {
                this.shape = this.shape || {};
                var r = this.shape;
                for (var n in i) !r.hasOwnProperty(n) && i.hasOwnProperty(n) && (r[n] = i[n]);
            }
            t.init && t.init.call(this, e);
        };
        h(e, zi);
        for (var i in t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
        return e;
    }, h(zi, Le);
    var eo = qa.CMD, io = [ [], [], [] ], ro = Math.sqrt, no = Math.atan2, ao = function(t, e) {
        var i, r, n, a, o, s, h = t.data, l = eo.M, u = eo.C, c = eo.L, f = eo.R, d = eo.A, p = eo.Q;
        for (n = 0, a = 0; n < h.length; ) {
            switch (i = h[n++], a = n, r = 0, i) {
              case l:
              case c:
                r = 1;
                break;

              case u:
                r = 3;
                break;

              case p:
                r = 2;
                break;

              case d:
                var v = e[4], g = e[5], _ = ro(e[0] * e[0] + e[1] * e[1]), m = ro(e[2] * e[2] + e[3] * e[3]), y = no(-e[1] / m, e[0] / _);
                h[n] *= _, h[n++] += v, h[n] *= m, h[n++] += g, h[n++] *= _, h[n++] *= m, h[n++] += y, 
                h[n++] += y, a = n += 2;
                break;

              case f:
                s[0] = h[n++], s[1] = h[n++], E(s, s, e), h[a++] = s[0], h[a++] = s[1], s[0] += h[n++], 
                s[1] += h[n++], E(s, s, e), h[a++] = s[0], h[a++] = s[1];
            }
            for (o = 0; o < r; o++) (s = io[o])[0] = h[n++], s[1] = h[n++], E(s, s, e), h[a++] = s[0], 
            h[a++] = s[1];
        }
    }, oo = [ "m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A" ], so = Math.sqrt, ho = Math.sin, lo = Math.cos, uo = Math.PI, co = function(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    }, fo = function(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (co(t) * co(e));
    }, po = function(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(fo(t, e));
    }, vo = (Object.freeze || Object)({
        createFromString: function(t, e) {
            return new zi(Bi(t, e));
        },
        extendFromString: function(t, e) {
            return zi.extend(Bi(t, e));
        },
        mergePath: function(t, e) {
            for (var i = [], r = t.length, n = 0; n < r; n++) {
                var a = t[n];
                a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), 
                i.push(a.path);
            }
            var o = new zi(e);
            return o.createPathProxy(), o.buildPath = function(t) {
                t.appendPath(i);
                var e = t.getContext();
                e && t.rebuildPath(e);
            }, o;
        }
    }), go = zi.extend({
        type: "compound",
        shape: {
            paths: null
        },
        _updatePathDirty: function() {
            for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
            this.__dirtyPath = t, this.__dirty = this.__dirty || t;
        },
        beforeBrush: function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), 
            t[i].path.setScale(e[0], e[1]);
        },
        buildPath: function(t, e) {
            for (var i = e.paths || [], r = 0; r < i.length; r++) i[r].buildPath(t, i[r].shape, !0);
        },
        afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
        },
        getBoundingRect: function() {
            return this._updatePathDirty(), zi.prototype.getBoundingRect.call(this);
        }
    }), _o = function(t) {
        Le.call(this, t);
    };
    _o.prototype = {
        constructor: _o,
        type: "text",
        brush: function(t, e) {
            var i = this.style;
            this.__dirty && ce(i), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
            var r = i.text;
            null != r && (r += ""), i.bind(t, this, e), Pe(r, i) && (this.setTransform(t), de(this, t, r, i), 
            this.restoreTransform(t));
        },
        getBoundingRect: function() {
            var t = this.style;
            if (this.__dirty && ce(t), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var i = Gt(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (i.x += t.x || 0, i.y += t.y || 0, Te(t.textStroke, t.textStrokeWidth)) {
                    var r = t.textStrokeWidth;
                    i.x -= r / 2, i.y -= r / 2, i.width += r, i.height += r;
                }
                this._rect = i;
            }
            return this._rect;
        }
    }, h(_o, Le), Ri.prototype.incremental = !0, Ri.prototype.clearDisplaybles = function() {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), 
        this.notClear = !1;
    }, Ri.prototype.addDisplayable = function(t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
    }, Ri.prototype.addDisplayables = function(t, e) {
        e = e || !1;
        for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e);
    }, Ri.prototype.eachPendingDisplayable = function(t) {
        for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
    }, Ri.prototype.update = function() {
        this.updateTransform();
        for (t = this._cursor; t < this._displayables.length; t++) (e = this._displayables[t]).parent = this, 
        e.update(), e.parent = null;
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null;
        }
    }, Ri.prototype.brush = function(t, e) {
        for (i = this._cursor; i < this._displayables.length; i++) (r = this._temporaryDisplayables[i]).beforeBrush && r.beforeBrush(t), 
        r.brush(t, i === this._cursor ? null : this._displayables[i - 1]), r.afterBrush && r.afterBrush(t);
        this._cursor = i;
        for (var i = 0; i < this._temporaryDisplayables.length; i++) {
            var r = this._temporaryDisplayables[i];
            r.beforeBrush && r.beforeBrush(t), r.brush(t, 0 === i ? null : this._temporaryDisplayables[i - 1]), 
            r.afterBrush && r.afterBrush(t);
        }
        this._temporaryDisplayables = [], this.notClear = !0;
    };
    var mo = [];
    Ri.prototype.getBoundingRect = function() {
        if (!this._rect) {
            for (var t = new Lt(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var i = this._displayables[e], r = i.getBoundingRect().clone();
                i.needLocalTransform() && r.applyTransform(i.getLocalTransform(mo)), t.union(r);
            }
            this._rect = t;
        }
        return this._rect;
    }, Ri.prototype.contain = function(t, e) {
        var i = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(i[0], i[1])) for (var r = 0; r < this._displayables.length; r++) if (this._displayables[r].contain(t, e)) return !0;
        return !1;
    }, h(Ri, Le);
    var yo = zi.extend({
        type: "arc",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        style: {
            stroke: "#000000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.cx, r = e.cy, n = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise, h = Math.cos(a), l = Math.sin(a);
            t.moveTo(h * n + i, l * n + r), t.arc(i, r, n, a, o, !s);
        }
    }), xo = [], wo = zi.extend({
        type: "bezier-curve",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            percent: 1
        },
        style: {
            stroke: "#000000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.x1, r = e.y1, n = e.x2, a = e.y2, o = e.cpx1, s = e.cpy1, h = e.cpx2, l = e.cpy2, u = e.percent;
            0 !== u && (t.moveTo(i, r), null == h || null == l ? (u < 1 && (ci(i, o, n, u, xo), 
            o = xo[1], n = xo[2], ci(r, s, a, u, xo), s = xo[1], a = xo[2]), t.quadraticCurveTo(o, s, n, a)) : (u < 1 && (ai(i, o, h, n, u, xo), 
            o = xo[1], h = xo[2], n = xo[3], ai(r, s, l, a, u, xo), s = xo[1], l = xo[2], a = xo[3]), 
            t.bezierCurveTo(o, s, h, l, n, a)));
        },
        pointAt: function(t) {
            return Ei(this.shape, t, !1);
        },
        tangentAt: function(t) {
            var e = Ei(this.shape, t, !0);
            return I(e, e);
        }
    }), bo = zi.extend({
        type: "circle",
        shape: {
            cx: 0,
            cy: 0,
            r: 0
        },
        buildPath: function(t, e, i) {
            i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
        }
    }), ko = zi.extend({
        type: "droplet",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, r = e.cy, n = e.width, a = e.height;
            t.moveTo(i, r + n), t.bezierCurveTo(i + n, r + n, i + 3 * n / 2, r - n / 3, i, r - a), 
            t.bezierCurveTo(i - 3 * n / 2, r - n / 3, i - n, r + n, i, r + n), t.closePath();
        }
    }), To = zi.extend({
        type: "ellipse",
        shape: {
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0
        },
        buildPath: function(t, e) {
            var i = .5522848, r = e.cx, n = e.cy, a = e.rx, o = e.ry, s = a * i, h = o * i;
            t.moveTo(r - a, n), t.bezierCurveTo(r - a, n - h, r - s, n - o, r, n - o), t.bezierCurveTo(r + s, n - o, r + a, n - h, r + a, n), 
            t.bezierCurveTo(r + a, n + h, r + s, n + o, r, n + o), t.bezierCurveTo(r - s, n + o, r - a, n + h, r - a, n), 
            t.closePath();
        }
    }), Mo = zi.extend({
        type: "heart",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, r = e.cy, n = e.width, a = e.height;
            t.moveTo(i, r), t.bezierCurveTo(i + n / 2, r - 2 * a / 3, i + 2 * n, r + a / 3, i, r + a), 
            t.bezierCurveTo(i - 2 * n, r + a / 3, i - n / 2, r - 2 * a / 3, i, r);
        }
    }), So = Math.PI, Co = Math.sin, Po = Math.cos, Lo = zi.extend({
        type: "isogon",
        shape: {
            x: 0,
            y: 0,
            r: 0,
            n: 0
        },
        buildPath: function(t, e) {
            var i = e.n;
            if (i && !(i < 2)) {
                var r = e.x, n = e.y, a = e.r, o = 2 * So / i, s = -So / 2;
                t.moveTo(r + a * Po(s), n + a * Co(s));
                for (var h = 0, l = i - 1; h < l; h++) s += o, t.lineTo(r + a * Po(s), n + a * Co(s));
                t.closePath();
            }
        }
    }), Ao = zi.extend({
        type: "line",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1
        },
        style: {
            stroke: "#000000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.x1, r = e.y1, n = e.x2, a = e.y2, o = e.percent;
            0 !== o && (t.moveTo(i, r), o < 1 && (n = i * (1 - o) + n * o, a = r * (1 - o) + a * o), 
            t.lineTo(n, a));
        },
        pointAt: function(t) {
            var e = this.shape;
            return [ e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t ];
        }
    }), zo = function(t, e) {
        for (var i = t.length, r = [], n = 0, a = 1; a < i; a++) n += B(t[a - 1], t[a]);
        var o = n / 2;
        o = o < i ? i : o;
        for (a = 0; a < o; a++) {
            var s, h, l, u = a / (o - 1) * (e ? i : i - 1), c = Math.floor(u), f = u - c, d = t[c % i];
            e ? (s = t[(c - 1 + i) % i], h = t[(c + 1) % i], l = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], 
            h = t[c > i - 2 ? i - 1 : c + 1], l = t[c > i - 3 ? i - 1 : c + 2]);
            var p = f * f, v = f * p;
            r.push([ Oi(s[0], d[0], h[0], l[0], f, p, v), Oi(s[1], d[1], h[1], l[1], f, p, v) ]);
        }
        return r;
    }, Do = function(t, e, i, r) {
        var n, a, o, s, h = [], l = [], u = [], c = [];
        if (r) {
            o = [ 1 / 0, 1 / 0 ], s = [ -1 / 0, -1 / 0 ];
            for (var f = 0, d = t.length; f < d; f++) O(o, o, t[f]), H(s, s, t[f]);
            O(o, o, r[0]), H(s, s, r[1]);
        }
        for (var f = 0, d = t.length; f < d; f++) {
            var p = t[f];
            if (i) n = t[f ? f - 1 : d - 1], a = t[(f + 1) % d]; else {
                if (0 === f || f === d - 1) {
                    h.push(C(t[f]));
                    continue;
                }
                n = t[f - 1], a = t[f + 1];
            }
            L(l, a, n), D(l, l, e);
            var v = B(p, n), g = B(p, a), _ = v + g;
            0 !== _ && (v /= _, g /= _), D(u, l, -v), D(c, l, g);
            var m = P([], p, u), y = P([], p, c);
            r && (H(m, m, o), O(m, m, s), H(y, y, o), O(y, y, s)), h.push(m), h.push(y);
        }
        return i && h.push(h.shift()), h;
    }, Io = zi.extend({
        type: "polygon",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        buildPath: function(t, e) {
            Hi(t, e, !0);
        }
    }), Bo = zi.extend({
        type: "polyline",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        style: {
            stroke: "#000000",
            fill: null
        },
        buildPath: function(t, e) {
            Hi(t, e, !1);
        }
    }), Ro = zi.extend({
        type: "rect",
        shape: {
            r: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.x, r = e.y, n = e.width, a = e.height;
            e.r ? ue(t, e) : t.rect(i, r, n, a), t.closePath();
        }
    }), Eo = zi.extend({
        type: "ring",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, r = e.cy, n = 2 * Math.PI;
            t.moveTo(i + e.r, r), t.arc(i, r, e.r, 0, n, !1), t.moveTo(i + e.r0, r), t.arc(i, r, e.r0, 0, n, !0);
        }
    }), Oo = Math.sin, Ho = Math.cos, Fo = Math.PI / 180, Wo = zi.extend({
        type: "rose",
        shape: {
            cx: 0,
            cy: 0,
            r: [],
            k: 0,
            n: 1
        },
        style: {
            stroke: "#000000",
            fill: null
        },
        buildPath: function(t, e) {
            var i, r, n, a = e.r, o = e.k, s = e.n, h = e.cx, l = e.cy;
            t.moveTo(h, l);
            for (var u = 0, c = a.length; u < c; u++) {
                n = a[u];
                for (var f = 0; f <= 360 * s; f++) i = n * Oo(o / s * f % 360 * Fo) * Ho(f * Fo) + h, 
                r = n * Oo(o / s * f % 360 * Fo) * Oo(f * Fo) + l, t.lineTo(i, r);
            }
        }
    }), No = [ [ "shadowBlur", 0 ], [ "shadowColor", "#000000" ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ] ], Vo = zi.extend({
        type: "sector",
        shape: {
            cx: 0,
            cy: 0,
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        brush: function(t) {
            return wr.browser.ie && wr.browser.version >= 11 ? function() {
                var e, i = this.__clipPaths, r = this.style;
                if (i) for (var n = 0; n < i.length; n++) {
                    var a = i[n], o = a && a.shape, s = a && a.type;
                    if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                        for (h = 0; h < No.length; h++) No[h][2] = r[No[h][0]], r[No[h][0]] = No[h][1];
                        e = !0;
                        break;
                    }
                }
                if (t.apply(this, arguments), e) for (var h = 0; h < No.length; h++) r[No[h][0]] = No[h][2];
            } : t;
        }(zi.prototype.brush),
        buildPath: function(t, e) {
            var i = e.cx, r = e.cy, n = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle, h = e.clockwise, l = Math.cos(o), u = Math.sin(o);
            t.moveTo(l * n + i, u * n + r), t.lineTo(l * a + i, u * a + r), t.arc(i, r, a, o, s, !h), 
            t.lineTo(Math.cos(s) * n + i, Math.sin(s) * n + r), 0 !== n && t.arc(i, r, n, s, o, h), 
            t.closePath();
        }
    }), jo = Math.PI, qo = Math.cos, Xo = Math.sin, Uo = zi.extend({
        type: "star",
        shape: {
            cx: 0,
            cy: 0,
            n: 3,
            r0: null,
            r: 0
        },
        buildPath: function(t, e) {
            var i = e.n;
            if (i && !(i < 2)) {
                var r = e.cx, n = e.cy, a = e.r, o = e.r0;
                null == o && (o = i > 4 ? a * qo(2 * jo / i) / qo(jo / i) : a / 3);
                var s = jo / i, h = -jo / 2, l = r + a * qo(h), u = n + a * Xo(h);
                h += s, t.moveTo(l, u);
                for (var c, f = 0, d = 2 * i - 1; f < d; f++) c = f % 2 == 0 ? o : a, t.lineTo(r + c * qo(h), n + c * Xo(h)), 
                h += s;
                t.closePath();
            }
        }
    }), Yo = Math.cos, Go = Math.sin, Zo = zi.extend({
        type: "trochoid",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0,
            d: 0,
            location: "out"
        },
        style: {
            stroke: "#000000",
            fill: null
        },
        buildPath: function(t, e) {
            var i, r, n, a, o = e.r, s = e.r0, h = e.d, l = e.cx, u = e.cy, c = "out" == e.location ? 1 : -1;
            if (!(e.location && o <= s)) {
                var f, d = 0, p = 1;
                i = (o + c * s) * Yo(0) - c * h * Yo(0) + l, r = (o + c * s) * Go(0) - h * Go(0) + u, 
                t.moveTo(i, r);
                do {
                    d++;
                } while (s * d % (o + c * s) != 0);
                do {
                    f = Math.PI / 180 * p, n = (o + c * s) * Yo(f) - c * h * Yo((o / s + c) * f) + l, 
                    a = (o + c * s) * Go(f) - h * Go((o / s + c) * f) + u, t.lineTo(n, a), p++;
                } while (p <= s * d / (o + c * s) * 360);
            }
        }
    }), Qo = function(t) {
        this.colorStops = t || [];
    };
    Qo.prototype = {
        constructor: Qo,
        addColorStop: function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            });
        }
    };
    var $o = function(t, e, i, r, n, a) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, 
        this.y2 = null == r ? 0 : r, this.type = "linear", this.global = a || !1, Qo.call(this, n);
    };
    $o.prototype = {
        constructor: $o
    }, h($o, Qo);
    var Ko = function(t, e, i, r, n) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, 
        this.type = "radial", this.global = n || !1, Qo.call(this, r);
    };
    Ko.prototype = {
        constructor: Ko
    }, h(Ko, Qo);
    var Jo = "http://www.w3.org/2000/svg", ts = qa.CMD, es = Array.prototype.join, is = "none", rs = Math.round, ns = Math.sin, as = Math.cos, os = Math.PI, ss = 2 * Math.PI, hs = 180 / os, ls = 1e-4, us = {};
    us.brush = function(t) {
        var e = t.style, i = t.__svgEl;
        i || (i = Fi("path"), t.__svgEl = i), t.path || t.createPathProxy();
        var r = t.path;
        if (t.__dirtyPath) {
            r.beginPath(), t.buildPath(r, t.shape), t.__dirtyPath = !1;
            var n = Gi(r);
            n.indexOf("NaN") < 0 && Xi(i, "d", n);
        }
        Yi(i, e), qi(i, t.transform), null != e.text && ps(t, t.getBoundingRect());
    };
    var cs = {};
    cs.brush = function(t) {
        var e = t.style, i = e.image;
        if (i instanceof HTMLImageElement && (i = i.src), i) {
            var r = e.x || 0, n = e.y || 0, a = e.width, o = e.height, s = t.__svgEl;
            s || (s = Fi("image"), t.__svgEl = s), i !== t.__imageSrc && (Ui(s, "href", i), 
            t.__imageSrc = i), Xi(s, "width", a), Xi(s, "height", o), Xi(s, "x", r), Xi(s, "y", n), 
            qi(s, t.transform), null != e.text && ps(t, t.getBoundingRect());
        }
    };
    var fs = {}, ds = new Lt(), ps = function(t, e, i) {
        var r = t.style;
        t.__dirty && ce(r);
        var n = r.text;
        if (null != n) {
            n += "";
            var a = t.__textSvgEl;
            a || (a = Fi("text"), t.__textSvgEl = a);
            var o, s, h = r.textPosition, l = r.textDistance, u = r.textAlign || "left";
            "number" == typeof r.fontSize && (r.fontSize += "px");
            var c = r.font || [ r.fontStyle || "", r.fontWeight || "", r.fontSize || "", r.fontFamily || "" ].join(" ") || jn, f = Zi(r.textVerticalAlign), d = (i = Gt(n, c, u, f)).lineHeight;
            if (h instanceof Array) o = e.x + h[0], s = e.y + h[1]; else {
                var p = Jt(h, e, l);
                o = p.x, s = p.y, f = Zi(p.textVerticalAlign), u = p.textAlign;
            }
            Xi(a, "alignment-baseline", f), c && (a.style.font = c);
            var v = r.textPadding;
            if (Xi(a, "x", o), Xi(a, "y", s), Yi(a, r, !0), t instanceof _o || t.style.transformText) qi(a, t.transform); else {
                if (t.transform) ds.copy(e), ds.applyTransform(t.transform), e = ds; else {
                    var g = t.transformCoordToGlobal(e.x, e.y);
                    e.x = g[0], e.y = g[1];
                }
                var _ = r.textOrigin;
                "center" === _ ? (o = i.width / 2 + o, s = i.height / 2 + s) : _ && (o = _[0] + o, 
                s = _[1] + s), Xi(a, "transform", "rotate(" + 180 * -r.textRotation / Math.PI + "," + o + "," + s + ")");
            }
            var m = n.split("\n"), y = m.length, x = u;
            "left" === x ? (x = "start", v && (o += v[3])) : "right" === x ? (x = "end", v && (o -= v[1])) : "center" === x && (x = "middle", 
            v && (o += (v[3] - v[1]) / 2));
            var w = 0;
            if ("baseline" === f ? (w = -i.height + d, v && (w -= v[2])) : "middle" === f ? (w = (-i.height + d) / 2, 
            v && (s += (v[0] - v[2]) / 2)) : v && (w += v[0]), t.__text !== n || t.__textFont !== c) {
                var b = t.__tspanList || [];
                t.__tspanList = b;
                for (T = 0; T < y; T++) (M = b[T]) ? M.innerHTML = "" : (M = b[T] = Fi("tspan"), 
                a.appendChild(M), Xi(M, "alignment-baseline", f), Xi(M, "text-anchor", x)), Xi(M, "x", o), 
                Xi(M, "y", s + T * d + w), M.appendChild(document.createTextNode(m[T]));
                for (;T < b.length; T++) a.removeChild(b[T]);
                b.length = y, t.__text = n, t.__textFont = c;
            } else if (t.__tspanList.length) for (var k = t.__tspanList.length, T = 0; T < k; ++T) {
                var M = t.__tspanList[T];
                M && (Xi(M, "x", o), Xi(M, "y", s + T * d + w));
            }
        }
    };
    fs.drawRectText = ps, fs.brush = function(t) {
        var e = t.style;
        null != e.text && (e.textPosition = [ 0, 0 ], ps(t, {
            x: e.x || 0,
            y: e.y || 0,
            width: 0,
            height: 0
        }, t.getBoundingRect()));
    }, Qi.prototype = {
        diff: function(t, e, i) {
            i || (i = function(t, e) {
                return t === e;
            }), this.equals = i;
            var r = this;
            t = t.slice();
            var n = (e = e.slice()).length, a = t.length, o = 1, s = n + a, h = [ {
                newPos: -1,
                components: []
            } ], l = this.extractCommon(h[0], e, t, 0);
            if (h[0].newPos + 1 >= n && l + 1 >= a) {
                for (var u = [], c = 0; c < e.length; c++) u.push(c);
                return [ {
                    indices: u,
                    count: e.length
                } ];
            }
            for (;o <= s; ) {
                var f = function() {
                    for (var i = -1 * o; i <= o; i += 2) {
                        var s, l = h[i - 1], u = h[i + 1], c = (u ? u.newPos : 0) - i;
                        l && (h[i - 1] = void 0);
                        var f = l && l.newPos + 1 < n, d = u && 0 <= c && c < a;
                        if (f || d) {
                            if (!f || d && l.newPos < u.newPos ? (s = Ki(u), r.pushComponent(s.components, void 0, !0)) : ((s = l).newPos++, 
                            r.pushComponent(s.components, !0, void 0)), c = r.extractCommon(s, e, t, i), s.newPos + 1 >= n && c + 1 >= a) return $i(0, s.components);
                            h[i] = s;
                        } else h[i] = void 0;
                    }
                    o++;
                }();
                if (f) return f;
            }
        },
        pushComponent: function(t, e, i) {
            var r = t[t.length - 1];
            r && r.added === e && r.removed === i ? t[t.length - 1] = {
                count: r.count + 1,
                added: e,
                removed: i
            } : t.push({
                count: 1,
                added: e,
                removed: i
            });
        },
        extractCommon: function(t, e, i, r) {
            for (var n = e.length, a = i.length, o = t.newPos, s = o - r, h = 0; o + 1 < n && s + 1 < a && this.equals(e[o + 1], i[s + 1]); ) o++, 
            s++, h++;
            return h && t.components.push({
                count: h
            }), t.newPos = o, s;
        },
        tokenize: function(t) {
            return t.slice();
        },
        join: function(t) {
            return t.slice();
        }
    };
    var vs = new Qi(), gs = function(t, e, i) {
        return vs.diff(t, e, i);
    };
    Ji.prototype.createElement = Fi, Ji.prototype.getDefs = function(t) {
        var e = this._svgRoot, i = this._svgRoot.getElementsByTagName("defs");
        return 0 === i.length ? t ? ((i = e.insertBefore(this.createElement("defs"), e.firstChild)).contains || (i.contains = function(t) {
            var e = i.children;
            if (!e) return !1;
            for (var r = e.length - 1; r >= 0; --r) if (e[r] === t) return !0;
            return !1;
        }), i) : null : i[0];
    }, Ji.prototype.update = function(t, e) {
        if (t) {
            var i = this.getDefs(!1);
            if (t[this._domName] && i.contains(t[this._domName])) "function" == typeof e && e(t); else {
                var r = this.add(t);
                r && (t[this._domName] = r);
            }
        }
    }, Ji.prototype.addDom = function(t) {
        this.getDefs(!0).appendChild(t);
    }, Ji.prototype.removeDom = function(t) {
        var e = this.getDefs(!1);
        e && t[this._domName] && (e.removeChild(t[this._domName]), t[this._domName] = null);
    }, Ji.prototype.getDoms = function() {
        var t = this.getDefs(!1);
        if (!t) return [];
        var e = [];
        return c(this._tagNames, function(i) {
            var r = t.getElementsByTagName(i);
            e = e.concat([].slice.call(r));
        }), e;
    }, Ji.prototype.markAllUnused = function() {
        var t = this;
        c(this.getDoms(), function(e) {
            e[t._markLabel] = "0";
        });
    }, Ji.prototype.markUsed = function(t) {
        t && (t[this._markLabel] = "1");
    }, Ji.prototype.removeUnused = function() {
        var t = this.getDefs(!1);
        if (t) {
            var e = this;
            c(this.getDoms(), function(i) {
                "1" !== i[e._markLabel] && t.removeChild(i);
            });
        }
    }, Ji.prototype.getSvgProxy = function(t) {
        return t instanceof zi ? us : t instanceof Ae ? cs : t instanceof _o ? fs : us;
    }, Ji.prototype.getTextSvgElement = function(t) {
        return t.__textSvgEl;
    }, Ji.prototype.getSvgElement = function(t) {
        return t.__svgEl;
    }, h(tr, Ji), tr.prototype.addWithoutUpdate = function(t, e) {
        if (e && e.style) {
            var i = this;
            c([ "fill", "stroke" ], function(r) {
                if (e.style[r] && ("linear" === e.style[r].type || "radial" === e.style[r].type)) {
                    var n, a = e.style[r], o = i.getDefs(!0);
                    a._dom ? (n = a._dom, o.contains(a._dom) || i.addDom(n)) : n = i.add(a), i.markUsed(e);
                    var s = n.getAttribute("id");
                    t.setAttribute(r, "url(#" + s + ")");
                }
            });
        }
    }, tr.prototype.add = function(t) {
        var e;
        if ("linear" === t.type) e = this.createElement("linearGradient"); else {
            if ("radial" !== t.type) return mn("Illegal gradient type."), null;
            e = this.createElement("radialGradient");
        }
        return t.id = t.id || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-gradient-" + t.id), 
        this.updateDom(t, e), this.addDom(e), e;
    }, tr.prototype.update = function(t) {
        var e = this;
        Ji.prototype.update.call(this, t, function() {
            var i = t.type, r = t._dom.tagName;
            "linear" === i && "linearGradient" === r || "radial" === i && "radialGradient" === r ? e.updateDom(t, t._dom) : (e.removeDom(t), 
            e.add(t));
        });
    }, tr.prototype.updateDom = function(t, e) {
        if ("linear" === t.type) e.setAttribute("x1", t.x), e.setAttribute("y1", t.y), e.setAttribute("x2", t.x2), 
        e.setAttribute("y2", t.y2); else {
            if ("radial" !== t.type) return void mn("Illegal gradient type.");
            e.setAttribute("cx", t.x), e.setAttribute("cy", t.y), e.setAttribute("r", t.r);
        }
        t.global ? e.setAttribute("gradientUnits", "userSpaceOnUse") : e.setAttribute("gradientUnits", "objectBoundingBox"), 
        e.innerHTML = "";
        for (var i = t.colorStops, r = 0, n = i.length; r < n; ++r) {
            var a = this.createElement("stop");
            a.setAttribute("offset", 100 * i[r].offset + "%"), a.setAttribute("stop-color", i[r].color), 
            e.appendChild(a);
        }
        t._dom = e;
    }, tr.prototype.markUsed = function(t) {
        if (t.style) {
            var e = t.style.fill;
            e && e._dom && Ji.prototype.markUsed.call(this, e._dom), (e = t.style.stroke) && e._dom && Ji.prototype.markUsed.call(this, e._dom);
        }
    }, h(er, Ji), er.prototype.update = function(t) {
        var e = this.getSvgElement(t);
        e && this.updateDom(e, t.__clipPaths, !1);
        var i = this.getTextSvgElement(t);
        i && this.updateDom(i, t.__clipPaths, !0), this.markUsed(t);
    }, er.prototype.updateDom = function(t, e, i) {
        if (e && e.length > 0) {
            var r, n, a = this.getDefs(!0), o = e[0], s = i ? "_textDom" : "_dom";
            o[s] ? (n = o[s].getAttribute("id"), r = o[s], a.contains(r) || a.appendChild(r)) : (n = "zr" + this._zrId + "-clip-" + this.nextId, 
            ++this.nextId, (r = this.createElement("clipPath")).setAttribute("id", n), a.appendChild(r), 
            o[s] = r);
            var h = this.getSvgProxy(o);
            if (o.transform && o.parent.invTransform && !i) {
                var l = Array.prototype.slice.call(o.transform);
                Y(o.transform, o.parent.invTransform, o.transform), h.brush(o), o.transform = l;
            } else h.brush(o);
            var u = this.getSvgElement(o);
            r.innerHTML = "", r.appendChild(u.cloneNode()), t.setAttribute("clip-path", "url(#" + n + ")"), 
            e.length > 1 && this.updateDom(r, e.slice(1), i);
        } else t && t.setAttribute("clip-path", "none");
    }, er.prototype.markUsed = function(t) {
        var e = this;
        t.__clipPaths && t.__clipPaths.length > 0 && c(t.__clipPaths, function(t) {
            t._dom && Ji.prototype.markUsed.call(e, t._dom), t._textDom && Ji.prototype.markUsed.call(e, t._textDom);
        });
    }, h(ir, Ji), ir.prototype.addWithoutUpdate = function(t, e) {
        if (e && rr(e.style)) {
            var i, r = e.style;
            r._shadowDom ? (i = r._shadowDom, this.getDefs(!0).contains(r._shadowDom) || this.addDom(i)) : i = this.add(e), 
            this.markUsed(e);
            var n = i.getAttribute("id");
            t.style.filter = "url(#" + n + ")";
        }
    }, ir.prototype.add = function(t) {
        var e = this.createElement("filter"), i = t.style;
        return i._shadowDomId = i._shadowDomId || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-shadow-" + i._shadowDomId), 
        this.updateDom(t, e), this.addDom(e), e;
    }, ir.prototype.update = function(t, e) {
        var i = e.style;
        if (rr(i)) {
            var r = this;
            Ji.prototype.update.call(this, e, function(t) {
                r.updateDom(e, t._shadowDom);
            });
        } else this.remove(t, i);
    }, ir.prototype.remove = function(t, e) {
        null != e._shadowDomId && (this.removeDom(e), t.style.filter = "");
    }, ir.prototype.updateDom = function(t, e) {
        var i = e.getElementsByTagName("feDropShadow");
        i = 0 === i.length ? this.createElement("feDropShadow") : i[0];
        var r, n, a, o, s = t.style, h = t.scale ? t.scale[0] || 1 : 1, l = t.scale ? t.scale[1] || 1 : 1;
        if (s.shadowBlur || s.shadowOffsetX || s.shadowOffsetY) r = s.shadowOffsetX || 0, 
        n = s.shadowOffsetY || 0, a = s.shadowBlur, o = s.shadowColor; else {
            if (!s.textShadowBlur) return void this.removeDom(e, s);
            r = s.textShadowOffsetX || 0, n = s.textShadowOffsetY || 0, a = s.textShadowBlur, 
            o = s.textShadowColor;
        }
        i.setAttribute("dx", r / h), i.setAttribute("dy", n / l), i.setAttribute("flood-color", o);
        var u = a / 2 / h + " " + a / 2 / l;
        i.setAttribute("stdDeviation", u), e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), 
        e.setAttribute("width", Math.ceil(a / 2 * 200) + "%"), e.setAttribute("height", Math.ceil(a / 2 * 200) + "%"), 
        e.appendChild(i), s._shadowDom = e;
    }, ir.prototype.markUsed = function(t) {
        var e = t.style;
        e && e._shadowDom && Ji.prototype.markUsed.call(this, e._shadowDom);
    };
    var _s = function(t, e, i, r) {
        this.root = t, this.storage = e, this._opts = i = n({}, i || {});
        var a = Fi("svg");
        a.setAttribute("xmlns", "http://www.w3.org/2000/svg"), a.setAttribute("version", "1.1"), 
        a.setAttribute("baseProfile", "full"), a.style.cssText = "user-select:none;position:absolute;left:0;top:0;", 
        this.gradientManager = new tr(r, a), this.clipPathManager = new er(r, a), this.shadowManager = new ir(r, a);
        var o = document.createElement("div");
        o.style.cssText = "overflow:hidden;position:relative", this._svgRoot = a, this._viewport = o, 
        t.appendChild(o), o.appendChild(a), this.resize(i.width, i.height), this._visibleList = [];
    };
    _s.prototype = {
        constructor: _s,
        getType: function() {
            return "svg";
        },
        getViewportRoot: function() {
            return this._viewport;
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            if (t) return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            };
        },
        refresh: function() {
            var t = this.storage.getDisplayList(!0);
            this._paintList(t);
        },
        setBackgroundColor: function(t) {
            this._viewport.style.background = t;
        },
        _paintList: function(t) {
            this.gradientManager.markAllUnused(), this.clipPathManager.markAllUnused(), this.shadowManager.markAllUnused();
            var e, i = this._svgRoot, r = this._visibleList, n = t.length, a = [];
            for (e = 0; e < n; e++) {
                var o = ar(d = t[e]), s = cr(d) || ur(d);
                d.invisible || (d.__dirty && (o && o.brush(d), this.clipPathManager.update(d), d.style && (this.gradientManager.update(d.style.fill), 
                this.gradientManager.update(d.style.stroke), this.shadowManager.update(s, d)), d.__dirty = !1), 
                a.push(d));
            }
            var h, l = gs(r, a);
            for (e = 0; e < l.length; e++) if ((c = l[e]).removed) for (f = 0; f < c.count; f++) {
                var s = cr(d = r[c.indices[f]]), u = ur(d);
                lr(i, s), lr(i, u);
            }
            for (e = 0; e < l.length; e++) {
                var c = l[e];
                if (c.added) for (f = 0; f < c.count; f++) {
                    var s = cr(d = a[c.indices[f]]), u = ur(d);
                    h ? sr(i, s, h) : hr(i, s), s ? sr(i, u, s) : h ? sr(i, u, h) : hr(i, u), sr(i, u, s), 
                    h = u || s || h, this.gradientManager.addWithoutUpdate(s, d), this.shadowManager.addWithoutUpdate(h, d), 
                    this.clipPathManager.markUsed(d);
                } else if (!c.removed) for (var f = 0; f < c.count; f++) {
                    var d = a[c.indices[f]];
                    h = s = ur(d) || cr(d) || h, this.gradientManager.markUsed(d), this.gradientManager.addWithoutUpdate(s, d), 
                    this.shadowManager.markUsed(d), this.shadowManager.addWithoutUpdate(s, d), this.clipPathManager.markUsed(d);
                }
            }
            this.gradientManager.removeUnused(), this.clipPathManager.removeUnused(), this.shadowManager.removeUnused(), 
            this._visibleList = a;
        },
        _getDefs: function(t) {
            var e = this._svgRoot, i = this._svgRoot.getElementsByTagName("defs");
            return 0 === i.length ? t ? ((i = e.insertBefore(Fi("defs"), e.firstChild)).contains || (i.contains = function(t) {
                var e = i.children;
                if (!e) return !1;
                for (var r = e.length - 1; r >= 0; --r) if (e[r] === t) return !0;
                return !1;
            }), i) : null : i[0];
        },
        resize: function(t, e) {
            var i = this._viewport;
            i.style.display = "none";
            var r = this._opts;
            if (null != t && (r.width = t), null != e && (r.height = e), t = this._getSize(0), 
            e = this._getSize(1), i.style.display = "", this._width !== t || this._height !== e) {
                this._width = t, this._height = e;
                var n = i.style;
                n.width = t + "px", n.height = e + "px";
                var a = this._svgRoot;
                a.setAttribute("width", t), a.setAttribute("height", e);
            }
        },
        getWidth: function() {
            return this._width;
        },
        getHeight: function() {
            return this._height;
        },
        _getSize: function(t) {
            var e = this._opts, i = [ "width", "height" ][t], r = [ "clientWidth", "clientHeight" ][t], n = [ "paddingLeft", "paddingTop" ][t], a = [ "paddingRight", "paddingBottom" ][t];
            if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
            var o = this.root, s = document.defaultView.getComputedStyle(o);
            return (o[r] || nr(s[i]) || nr(o.style[i])) - (nr(s[n]) || 0) - (nr(s[a]) || 0) | 0;
        },
        dispose: function() {
            this.root.innerHTML = "", this._svgRoot = this._viewport = this.storage = null;
        },
        clear: function() {
            this._viewport && this.root.removeChild(this._viewport);
        },
        pathToDataUrl: function() {
            return this.refresh(), "data:image/svg+xml;charset=UTF-8," + this._svgRoot.outerHTML;
        }
    }, c([ "getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage" ], function(t) {
        _s.prototype[t] = fr(t);
    }), $e("svg", _s);
    var ms, ys = "urn:schemas-microsoft-com:vml", xs = "undefined" == typeof window ? null : window, ws = !1, bs = xs && xs.document;
    if (bs && !wr.canvasSupported) try {
        !bs.namespaces.zrvml && bs.namespaces.add("zrvml", ys), ms = function(t) {
            return bs.createElement("<zrvml:" + t + ' class="zrvml">');
        };
    } catch (t) {
        ms = function(t) {
            return bs.createElement("<" + t + ' xmlns="' + ys + '" class="zrvml">');
        };
    }
    var ks = qa.CMD, Ts = Math.round, Ms = Math.sqrt, Ss = Math.abs, Cs = Math.cos, Ps = Math.sin, Ls = Math.max;
    if (!wr.canvasSupported) {
        var As = 21600, zs = As / 2, Ds = function(t) {
            t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = As + "," + As, 
            t.coordorigin = "0,0";
        }, Is = function(t) {
            return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
        }, Bs = function(t, e, i) {
            return "rgb(" + [ t, e, i ].join(",") + ")";
        }, Rs = function(t, e) {
            e && t && e.parentNode !== t && t.appendChild(e);
        }, Es = function(t, e) {
            e && t && e.parentNode === t && t.removeChild(e);
        }, Os = function(t, e, i) {
            return 1e5 * (parseFloat(t) || 0) + 1e3 * (parseFloat(e) || 0) + i;
        }, Hs = function(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
        }, Fs = function(t, e, i) {
            var r = ut(e);
            i = +i, isNaN(i) && (i = 1), r && (t.color = Bs(r[0], r[1], r[2]), t.opacity = i * r[3]);
        }, Ws = function(t) {
            var e = ut(t);
            return [ Bs(e[0], e[1], e[2]), e[3] ];
        }, Ns = function(t, e, i) {
            var r = e.fill;
            if (null != r) if (r instanceof Qo) {
                var n, a = 0, o = [ 0, 0 ], s = 0, h = 1, l = i.getBoundingRect(), u = l.width, c = l.height;
                if ("linear" === r.type) {
                    n = "gradient";
                    var f = i.transform, d = [ r.x * u, r.y * c ], p = [ r.x2 * u, r.y2 * c ];
                    f && (E(d, d, f), E(p, p, f));
                    var v = p[0] - d[0], g = p[1] - d[1];
                    (a = 180 * Math.atan2(v, g) / Math.PI) < 0 && (a += 360), a < 1e-6 && (a = 0);
                } else {
                    n = "gradientradial";
                    var d = [ r.x * u, r.y * c ], f = i.transform, _ = i.scale, m = u, y = c;
                    o = [ (d[0] - l.x) / m, (d[1] - l.y) / y ], f && E(d, d, f), m /= _[0] * As, y /= _[1] * As;
                    var x = Ls(m, y);
                    s = 0 / x, h = 2 * r.r / x - s;
                }
                var w = r.colorStops.slice();
                w.sort(function(t, e) {
                    return t.offset - e.offset;
                });
                for (var b = w.length, k = [], T = [], M = 0; M < b; M++) {
                    var S = w[M], C = Ws(S.color);
                    T.push(S.offset * h + s + " " + C[0]), 0 !== M && M !== b - 1 || k.push(C);
                }
                if (b >= 2) {
                    var P = k[0][0], L = k[1][0], A = k[0][1] * e.opacity, z = k[1][1] * e.opacity;
                    t.type = n, t.method = "none", t.focus = "100%", t.angle = a, t.color = P, t.color2 = L, 
                    t.colors = T.join(","), t.opacity = z, t.opacity2 = A;
                }
                "radial" === n && (t.focusposition = o.join(","));
            } else Fs(t, r, e.opacity);
        }, Vs = function(t, e) {
            null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof Qo || Fs(t, e.stroke, e.opacity);
        }, js = function(t, e, i, r) {
            var n = "fill" == e, a = t.getElementsByTagName(e)[0];
            null != i[e] && "none" !== i[e] && (n || !n && i.lineWidth) ? (t[n ? "filled" : "stroked"] = "true", 
            i[e] instanceof Qo && Es(t, a), a || (a = dr(e)), n ? Ns(a, i, r) : Vs(a, i), Rs(t, a)) : (t[n ? "filled" : "stroked"] = "false", 
            Es(t, a));
        }, qs = [ [], [], [] ], Xs = function(t, e) {
            var i, r, n, a, o, s, h = ks.M, l = ks.C, u = ks.L, c = ks.A, f = ks.Q, d = [], p = t.data, v = t.len();
            for (a = 0; a < v; ) {
                switch (n = p[a++], r = "", i = 0, n) {
                  case h:
                    r = " m ", i = 1, o = p[a++], s = p[a++], qs[0][0] = o, qs[0][1] = s;
                    break;

                  case u:
                    r = " l ", i = 1, o = p[a++], s = p[a++], qs[0][0] = o, qs[0][1] = s;
                    break;

                  case f:
                  case l:
                    r = " c ", i = 3;
                    var g, _, m = p[a++], y = p[a++], x = p[a++], w = p[a++];
                    n === f ? (g = x, _ = w, x = (x + 2 * m) / 3, w = (w + 2 * y) / 3, m = (o + 2 * m) / 3, 
                    y = (s + 2 * y) / 3) : (g = p[a++], _ = p[a++]), qs[0][0] = m, qs[0][1] = y, qs[1][0] = x, 
                    qs[1][1] = w, qs[2][0] = g, qs[2][1] = _, o = g, s = _;
                    break;

                  case c:
                    var b = 0, k = 0, T = 1, M = 1, S = 0;
                    e && (b = e[4], k = e[5], T = Ms(e[0] * e[0] + e[1] * e[1]), M = Ms(e[2] * e[2] + e[3] * e[3]), 
                    S = Math.atan2(-e[1] / M, e[0] / T));
                    var C = p[a++], P = p[a++], L = p[a++], A = p[a++], z = p[a++] + S, D = p[a++] + z + S;
                    a++;
                    var I = p[a++], B = C + Cs(z) * L, R = P + Ps(z) * A, m = C + Cs(D) * L, y = P + Ps(D) * A, O = I ? " wa " : " at ";
                    Math.abs(B - m) < 1e-4 && (Math.abs(D - z) > .01 ? I && (B += .0125) : Math.abs(R - P) < 1e-4 ? I && B < C || !I && B > C ? y -= .0125 : y += .0125 : I && R < P || !I && R > P ? m += .0125 : m -= .0125), 
                    d.push(O, Ts(((C - L) * T + b) * As - zs), ",", Ts(((P - A) * M + k) * As - zs), ",", Ts(((C + L) * T + b) * As - zs), ",", Ts(((P + A) * M + k) * As - zs), ",", Ts((B * T + b) * As - zs), ",", Ts((R * M + k) * As - zs), ",", Ts((m * T + b) * As - zs), ",", Ts((y * M + k) * As - zs)), 
                    o = m, s = y;
                    break;

                  case ks.R:
                    var H = qs[0], F = qs[1];
                    H[0] = p[a++], H[1] = p[a++], F[0] = H[0] + p[a++], F[1] = H[1] + p[a++], e && (E(H, H, e), 
                    E(F, F, e)), H[0] = Ts(H[0] * As - zs), F[0] = Ts(F[0] * As - zs), H[1] = Ts(H[1] * As - zs), 
                    F[1] = Ts(F[1] * As - zs), d.push(" m ", H[0], ",", H[1], " l ", F[0], ",", H[1], " l ", F[0], ",", F[1], " l ", H[0], ",", F[1]);
                    break;

                  case ks.Z:
                    d.push(" x ");
                }
                if (i > 0) {
                    d.push(r);
                    for (var W = 0; W < i; W++) {
                        var N = qs[W];
                        e && E(N, N, e), d.push(Ts(N[0] * As - zs), ",", Ts(N[1] * As - zs), W < i - 1 ? "," : "");
                    }
                }
            }
            return d.join("");
        };
        zi.prototype.brushVML = function(t) {
            var e = this.style, i = this._vmlEl;
            i || (i = dr("shape"), Ds(i), this._vmlEl = i), js(i, "fill", e, this), js(i, "stroke", e, this);
            var r = this.transform, n = null != r, a = i.getElementsByTagName("stroke")[0];
            if (a) {
                var o = e.lineWidth;
                if (n && !e.strokeNoScale) {
                    var s = r[0] * r[3] - r[1] * r[2];
                    o *= Ms(Ss(s));
                }
                a.weight = o + "px";
            }
            var h = this.path || (this.path = new qa());
            this.__dirtyPath && (h.beginPath(), this.buildPath(h, this.shape), h.toStatic(), 
            this.__dirtyPath = !1), i.path = Xs(h, this.transform), i.style.zIndex = Os(this.zlevel, this.z, this.z2), 
            Rs(t, i), null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t);
        }, zi.prototype.onRemove = function(t) {
            Es(t, this._vmlEl), this.removeRectText(t);
        }, zi.prototype.onAdd = function(t) {
            Rs(t, this._vmlEl), this.appendRectText(t);
        };
        var Us = function(e) {
            return "object" === (void 0 === e ? "undefined" : t(e)) && e.tagName && "IMG" === e.tagName.toUpperCase();
        };
        Ae.prototype.brushVML = function(t) {
            var e, i, r = this.style, n = r.image;
            if (Us(n)) {
                var a = n.src;
                if (a === this._imageSrc) e = this._imageWidth, i = this._imageHeight; else {
                    var o = n.runtimeStyle, s = o.width, h = o.height;
                    o.width = "auto", o.height = "auto", e = n.width, i = n.height, o.width = s, o.height = h, 
                    this._imageSrc = a, this._imageWidth = e, this._imageHeight = i;
                }
                n = a;
            } else n === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
            if (n) {
                var l = r.x || 0, u = r.y || 0, c = r.width, f = r.height, d = r.sWidth, p = r.sHeight, v = r.sx || 0, g = r.sy || 0, _ = d && p, m = this._vmlEl;
                m || (m = bs.createElement("div"), Ds(m), this._vmlEl = m);
                var y, x = m.style, w = !1, b = 1, k = 1;
                if (this.transform && (y = this.transform, b = Ms(y[0] * y[0] + y[1] * y[1]), k = Ms(y[2] * y[2] + y[3] * y[3]), 
                w = y[1] || y[2]), w) {
                    var T = [ l, u ], M = [ l + c, u ], S = [ l, u + f ], C = [ l + c, u + f ];
                    E(T, T, y), E(M, M, y), E(S, S, y), E(C, C, y);
                    var P = Ls(T[0], M[0], S[0], C[0]), L = Ls(T[1], M[1], S[1], C[1]), A = [];
                    A.push("M11=", y[0] / b, ",", "M12=", y[2] / k, ",", "M21=", y[1] / b, ",", "M22=", y[3] / k, ",", "Dx=", Ts(l * b + y[4]), ",", "Dy=", Ts(u * k + y[5])), 
                    x.padding = "0 " + Ts(P) + "px " + Ts(L) + "px 0", x.filter = "progid:DXImageTransform.Microsoft.Matrix(" + A.join("") + ", SizingMethod=clip)";
                } else y && (l = l * b + y[4], u = u * k + y[5]), x.filter = "", x.left = Ts(l) + "px", 
                x.top = Ts(u) + "px";
                var z = this._imageEl, D = this._cropEl;
                z || (z = bs.createElement("div"), this._imageEl = z);
                var I = z.style;
                if (_) {
                    if (e && i) I.width = Ts(b * e * c / d) + "px", I.height = Ts(k * i * f / p) + "px"; else {
                        var B = new Image(), R = this;
                        B.onload = function() {
                            B.onload = null, e = B.width, i = B.height, I.width = Ts(b * e * c / d) + "px", 
                            I.height = Ts(k * i * f / p) + "px", R._imageWidth = e, R._imageHeight = i, R._imageSrc = n;
                        }, B.src = n;
                    }
                    D || ((D = bs.createElement("div")).style.overflow = "hidden", this._cropEl = D);
                    var O = D.style;
                    O.width = Ts((c + v * c / d) * b), O.height = Ts((f + g * f / p) * k), O.filter = "progid:DXImageTransform.Microsoft.Matrix(Dx=" + -v * c / d * b + ",Dy=" + -g * f / p * k + ")", 
                    D.parentNode || m.appendChild(D), z.parentNode != D && D.appendChild(z);
                } else I.width = Ts(b * c) + "px", I.height = Ts(k * f) + "px", m.appendChild(z), 
                D && D.parentNode && (m.removeChild(D), this._cropEl = null);
                var H = "", F = r.opacity;
                F < 1 && (H += ".Alpha(opacity=" + Ts(100 * F) + ") "), H += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + n + ", SizingMethod=scale)", 
                I.filter = H, m.style.zIndex = Os(this.zlevel, this.z, this.z2), Rs(t, m), null != r.text && this.drawRectText(t, this.getBoundingRect());
            }
        }, Ae.prototype.onRemove = function(t) {
            Es(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, 
            this.removeRectText(t);
        }, Ae.prototype.onAdd = function(t) {
            Rs(t, this._vmlEl), this.appendRectText(t);
        };
        var Ys, Gs = {}, Zs = 0, Qs = document.createElement("div"), $s = function(t) {
            var e = Gs[t];
            if (!e) {
                Zs > 100 && (Zs = 0, Gs = {});
                var i, r = Qs.style;
                try {
                    r.font = t, i = r.fontFamily.split(",")[0];
                } catch (t) {}
                e = {
                    style: r.fontStyle || "normal",
                    variant: r.fontVariant || "normal",
                    weight: r.fontWeight || "normal",
                    size: 0 | parseFloat(r.fontSize || 12),
                    family: i || "Microsoft YaHei"
                }, Gs[t] = e, Zs++;
            }
            return e;
        };
        !function(t, e) {
            qn[t] = e;
        }("measureText", function(t, e) {
            var i = bs;
            Ys || ((Ys = i.createElement("div")).style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", 
            bs.body.appendChild(Ys));
            try {
                Ys.style.font = e;
            } catch (t) {}
            return Ys.innerHTML = "", Ys.appendChild(i.createTextNode(t)), {
                width: Ys.offsetWidth
            };
        });
        for (var Ks = new Lt(), Js = [ Gn, Le, Ae, zi, _o ], th = 0; th < Js.length; th++) {
            var eh = Js[th].prototype;
            eh.drawRectText = function(t, e, i, r) {
                var n = this.style;
                this.__dirty && ce(n);
                var a = n.text;
                if (null != a && (a += ""), a) {
                    if (n.rich) {
                        var o = se(a, n);
                        a = [];
                        for (var s = 0; s < o.lines.length; s++) {
                            for (var h = o.lines[s].tokens, l = [], u = 0; u < h.length; u++) l.push(h[u].text);
                            a.push(l.join(""));
                        }
                        a = a.join("\n");
                    }
                    var c, f, d = n.textAlign, p = n.textVerticalAlign, v = $s(n.font), g = v.style + " " + v.variant + " " + v.weight + " " + v.size + 'px "' + v.family + '"';
                    i = i || Gt(a, g, d, p);
                    var _ = this.transform;
                    if (_ && !r && (Ks.copy(e), Ks.applyTransform(_), e = Ks), r) c = e.x, f = e.y; else {
                        var m = n.textPosition, y = n.textDistance;
                        if (m instanceof Array) c = e.x + Hs(m[0], e.width), f = e.y + Hs(m[1], e.height), 
                        d = d || "left"; else {
                            var x = Jt(m, e, y);
                            c = x.x, f = x.y, d = d || x.textAlign, p = p || x.textVerticalAlign;
                        }
                    }
                    c = $t(c, i.width, d), f = Kt(f, i.height, p), f += i.height / 2;
                    var w, b, k, T = dr, M = this._textVmlEl;
                    M ? b = (w = (k = M.firstChild).nextSibling).nextSibling : (M = T("line"), w = T("path"), 
                    b = T("textpath"), k = T("skew"), b.style["v-text-align"] = "left", Ds(M), w.textpathok = !0, 
                    b.on = !0, M.from = "0 0", M.to = "1000 0.05", Rs(M, k), Rs(M, w), Rs(M, b), this._textVmlEl = M);
                    var S = [ c, f ], C = M.style;
                    _ && r ? (E(S, S, _), k.on = !0, k.matrix = _[0].toFixed(3) + "," + _[2].toFixed(3) + "," + _[1].toFixed(3) + "," + _[3].toFixed(3) + ",0,0", 
                    k.offset = (Ts(S[0]) || 0) + "," + (Ts(S[1]) || 0), k.origin = "0 0", C.left = "0px", 
                    C.top = "0px") : (k.on = !1, C.left = Ts(c) + "px", C.top = Ts(f) + "px"), b.string = Is(a);
                    try {
                        b.style.font = g;
                    } catch (t) {}
                    js(M, "fill", {
                        fill: n.textFill,
                        opacity: n.opacity
                    }, this), js(M, "stroke", {
                        stroke: n.textStroke,
                        opacity: n.opacity,
                        lineDash: n.lineDash
                    }, this), M.style.zIndex = Os(this.zlevel, this.z, this.z2), Rs(t, M);
                }
            }, eh.removeRectText = function(t) {
                Es(t, this._textVmlEl), this._textVmlEl = null;
            }, eh.appendRectText = function(t) {
                Rs(t, this._textVmlEl);
            };
        }
        _o.prototype.brushVML = function(t) {
            var e = this.style;
            null != e.text ? this.drawRectText(t, {
                x: e.x || 0,
                y: e.y || 0,
                width: 0,
                height: 0
            }, this.getBoundingRect(), !0) : this.removeRectText(t);
        }, _o.prototype.onRemove = function(t) {
            this.removeRectText(t);
        }, _o.prototype.onAdd = function(t) {
            this.appendRectText(t);
        };
    }
    gr.prototype = {
        constructor: gr,
        getType: function() {
            return "vml";
        },
        getViewportRoot: function() {
            return this._vmlViewport;
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            if (t) return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            };
        },
        refresh: function() {
            var t = this.storage.getDisplayList(!0, !0);
            this._paintList(t);
        },
        _paintList: function(t) {
            for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
                var r = t[i];
                r.invisible || r.ignore ? (r.__alreadyNotVisible || r.onRemove(e), r.__alreadyNotVisible = !0) : (r.__alreadyNotVisible && r.onAdd(e), 
                r.__alreadyNotVisible = !1, r.__dirty && (r.beforeBrush && r.beforeBrush(), (r.brushVML || r.brush).call(r, e), 
                r.afterBrush && r.afterBrush())), r.__dirty = !1;
            }
            this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1);
        },
        resize: function(t, e) {
            var t = null == t ? this._getWidth() : t, e = null == e ? this._getHeight() : e;
            if (this._width != t || this._height != e) {
                this._width = t, this._height = e;
                var i = this._vmlViewport.style;
                i.width = t + "px", i.height = e + "px";
            }
        },
        dispose: function() {
            this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null;
        },
        getWidth: function() {
            return this._width;
        },
        getHeight: function() {
            return this._height;
        },
        clear: function() {
            this._vmlViewport && this.root.removeChild(this._vmlViewport);
        },
        _getWidth: function() {
            var t = this.root, e = t.currentStyle;
            return (t.clientWidth || vr(e.width)) - vr(e.paddingLeft) - vr(e.paddingRight) | 0;
        },
        _getHeight: function() {
            var t = this.root, e = t.currentStyle;
            return (t.clientHeight || vr(e.height)) - vr(e.paddingTop) - vr(e.paddingBottom) | 0;
        }
    }, c([ "getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage" ], function(t) {
        gr.prototype[t] = _r(t);
    }), $e("vml", gr), e.version = "4.0.3", e.init = function(t, e) {
        var i = new fa(yr(), t, e);
        return ca[i.id] = i, i;
    }, e.dispose = function(t) {
        if (t) t.dispose(); else {
            for (var e in ca) ca.hasOwnProperty(e) && ca[e].dispose();
            ca = {};
        }
        return this;
    }, e.getInstance = function(t) {
        return ca[t];
    }, e.registerPainter = $e, e.matrix = Gr, e.vector = Nr, e.color = fn, e.path = vo, 
    e.util = Rr, e.Group = Tn, e.Path = zi, e.Image = Ae, e.CompoundPath = go, e.Text = _o, 
    e.IncrementalDisplayable = Ri, e.Arc = yo, e.BezierCurve = wo, e.Circle = bo, e.Droplet = ko, 
    e.Ellipse = To, e.Heart = Mo, e.Isogon = Lo, e.Line = Ao, e.Polygon = Io, e.Polyline = Bo, 
    e.Rect = Ro, e.Ring = Eo, e.Rose = Wo, e.Sector = Vo, e.Star = Uo, e.Trochoid = Zo, 
    e.LinearGradient = $o, e.RadialGradient = Ko, e.Pattern = Rn, e.BoundingRect = Lt;
});