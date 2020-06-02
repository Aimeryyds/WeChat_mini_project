function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function a(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function r(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var r = e[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, a, r) {
        return a && t(e.prototype, a), r && t(e, r), e;
    };
}(), n = t(require("../core/view")), i = t(require("../core/brush")), l = require("../../utils"), p = function(t) {
    function p(t) {
        e(this, p);
        var r = a(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, t));
        return r.initialize(), r;
    }
    return r(p, n.default), o(p, [ {
        key: "initialize",
        value: function() {}
    }, {
        key: "setData",
        value: function(t) {
            return this.data = t.data, this.capflow = t, this.drawData(), this;
        }
    }, {
        key: "drawData",
        value: function() {
            var t = this, e = this.options, a = e.dataCtx, r = e.startAngle, o = e.radius, n = e.bbox, p = e.labels, u = e.shapes, h = n.x0, s = n.y0, x = n.x1, y = n.y1, c = (h + x) / 2, f = (s + y) / 2, d = "\n      position: absolute;\n      width: " + 2 * o + "px;\n      height: " + 2 * o + "px;\n      clip: rect(0px, " + 2 * o + "px, " + 2 * o + "px, " + o + "px);\n      left: " + ((x - h) / 2 - o) + "px;\n      top: " + ((y - s) / 2 - o) + "px;", b = "\n      position: absolute;\n      width: " + 2 * o + "px;\n      height: " + 2 * o + "px;\n      clip: rect(0px, " + o + "px, " + 2 * o + "px, 0px);\n      border-radius: " + o + "px;", g = [], M = [], v = !0, P = !1, m = void 0;
            try {
                for (var w, I = this.data[Symbol.iterator](); !(v = (w = I.next()).done); v = !0) {
                    var _ = w.value, O = _.value, k = _.prop, j = _.outterLabel, z = _.innerLabel, q = _.color, C = _.type, S = _.fontSize;
                    if (O) {
                        var D = r, E = k / 100 * Math.PI * 2, L = D + E;
                        L - D > Math.PI ? u.push({
                            id: (0, l.getUnique)(),
                            hold: d + ";transform: rotate(" + D / Math.PI * 180 + "deg);clip: rect(auto, auto, auto, auto);",
                            pie0: b + ";transform: rotate(180deg);background-color: " + q + ";",
                            pie1: b + ";transform: rotate(" + E / Math.PI * 180 + "deg);background-color: " + q + ";"
                        }) : u.push({
                            id: (0, l.getUnique)(),
                            hold: d + ";transform: rotate(" + D / Math.PI * 180 + "deg);",
                            pie0: b + ";transform: rotate(" + E / Math.PI * 180 + "deg);background-color: " + q + ";",
                            pie1: b + ";display: none;"
                        }), j && function() {
                            var e = (D + L) / 2 - Math.PI / 2, a = {
                                lx0: c + Math.cos(e) * (o + 4),
                                ly0: f + Math.sin(e) * (o + 4)
                            }, r = a.lx0, n = a.ly0, i = {
                                lx1: c + Math.cos(e) * (o + 15),
                                ly1: f + Math.sin(e) * (o + 15)
                            }, l = i.lx1, p = i.ly1, u = function() {
                                var t = 0, a = p;
                                return e >= .5 * Math.PI && e <= 1.5 * Math.PI ? (t = l - 50, t = Math.min(c - 1.2 * o, t)) : (t = l + 50, 
                                t = Math.max(c + 1.2 * o, t)), {
                                    lx2: t,
                                    ly2: a
                                };
                            }.call(t), h = u.lx2, s = u.ly2;
                            g.push({
                                type: C,
                                middle: e,
                                align: e >= .5 * Math.PI && e <= 1.5 * Math.PI ? "left" : "right",
                                text0: j + " " + k.toFixed(2) + "%",
                                p0: {
                                    x: r,
                                    y: n
                                },
                                p1: {
                                    x: l,
                                    y: p
                                },
                                p2: {
                                    x: h,
                                    y: s
                                }
                            });
                        }(), z && M.push({
                            text: "" + z,
                            color: q,
                            fontSize: S
                        }), r = L;
                    }
                }
            } catch (t) {
                P = !0, m = t;
            } finally {
                try {
                    !v && I.return && I.return();
                } finally {
                    if (P) throw m;
                }
            }
            if (g && g.length) {
                for (var T = null, U = 0, A = g.length; U < A; U++) {
                    var F = g[U], H = F.middle, R = F.align, B = F.text0, G = (F.text1, F.p0), J = F.p1, K = F.p2;
                    if (H >= .5 * Math.PI && H <= 1.5 * Math.PI ? K.x + Math.abs(J.x - K.x) / 2 : K.x - Math.abs(J.x - K.x) / 2, 
                    T && i.default.isCover({
                        x0: K.x,
                        y0: K.y - 12,
                        x1: J.x,
                        y1: K.y + 12
                    }, {
                        x0: T.p2.x,
                        y0: T.p2.y - 12,
                        x1: T.p1.x,
                        y1: T.p2.y + 12
                    }) && (H >= .5 * Math.PI && H <= 1.5 * Math.PI ? K.y -= Math.abs(K.y - (T.p2.y - 12)) : K.y += Math.abs(K.y - (T.p2.y + 12))), 
                    K.y - 12 < s && (K.y = 1, U >= 1)) {
                        var N = g[U - 1];
                        if (N.align == R && Math.abs(K.y - N.p2.y) < 24) if ("left" == R) {
                            K.x = N.p2.x + 60;
                            for (var Q = U - 1; Q >= 1; Q--) {
                                var V = g[Q];
                                g[Q - 1];
                                if (Math.abs(V.p2.y - N.p2.y) > 5) break;
                                N.p2.y = V.p2.y + 5;
                            }
                        } else K.x = N.p2.x - 60, Math.abs(K.y - N.p2.y) < 5 && (N.p2.y = K.y + 5);
                    }
                    T = F;
                }
                for (var W = 0, X = g.length; W < X; W++) {
                    var Y = g[W], C = Y.type, H = Y.middle, R = Y.align, B = Y.text0, G = (Y.text1, 
                    Y.p0), J = Y.p1, K = Y.p2, Z = {
                        in: "" + (0, l.getColor)(1),
                        out: "" + (0, l.getColor)(-1)
                    };
                    H >= .5 * Math.PI && H <= 1.5 * Math.PI ? K.x + Math.abs(J.x - K.x) / 2 : K.x - Math.abs(J.x - K.x) / 2, 
                    p.dynamics.push(i.default.label({
                        text: B,
                        options: {
                            x: K.x,
                            y: K.y,
                            size: 12,
                            width: 80,
                            height: 12,
                            color: "" + Z[C],
                            align: R
                        }
                    }));
                    var $ = J.x - K.x;
                    K.x = $ >= 0 ? K.x + 40 : K.x - 40, i.default.line({
                        ctx: a,
                        lines: [ [ G, {
                            x: J.x,
                            y: K.y
                        }, {
                            x: K.x,
                            y: K.y
                        } ] ],
                        options: {
                            color: "#ccc"
                        }
                    });
                }
            }
            if (M && M.length) for (var tt = 0, et = M.length; tt < et; tt++) {
                var at = M[tt], q = at.color, rt = at.text, S = at.fontSize;
                p.dynamics.push(i.default.label({
                    text: rt,
                    options: {
                        x: c,
                        y: f + 18 * tt,
                        size: S,
                        width: 2 * o,
                        margin: {
                            left: -o,
                            top: -et / 2 * 18
                        },
                        height: 18,
                        lineHeight: 18,
                        color: q,
                        align: "center"
                    }
                }));
            }
        }
    } ]), p;
}();

exports.default = p;