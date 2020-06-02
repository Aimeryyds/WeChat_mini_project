var t, e = require("../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../@babel/runtime/helpers/toConsumableArray")), o = (e(require("../utils/logger")), 
[ "hover-class", "hover-start-time", "space", "src" ]), n = [ "color", "font-size", "font-weight", "font-family", "backgroundColor", "border", "border-radius", "box-sizing", "line-height", "letter-spacing", "z-index" ], i = [], a = 0, s = 1, c = 2, l = function(t, e) {
    var r = e.backgroundColor, o = e.width, n = e.height;
    t.setFillStyle(r), t.fillRect(0, 0, o, n);
}, h = function(t, e) {
    var o = e.dataset.text, n = e.left, i = e.top, a = e.color, s = e["font-weight"], c = e["font-size"], l = e["font-family"], h = Array.isArray(o) ? o[0] : o;
    t.font = "".concat(s, " ").concat(Math.round(parseFloat(c)), "px ").concat(l), t.setFillStyle(a), 
    function(t, e, r) {
        var o = t["font-size"], n = t.width, i = (t.left, t.top, t.height, t["line-height"]);
        "normal" === i && Math.round(1.2 * o);
        return r.measureText(e).width - 5 > n;
    }(e, h, t) ? function(t, e, o) {
        var n = e["font-size"], i = e.width, a = e.left, s = e.top, c = e.dataset.clamp, l = e["line-height"];
        c = parseInt(c, 10);
        var h = "normal" === l ? Math.round(1.2 * n) : l;
        h = parseInt(h, 10);
        for (var u = (0, r.default)(o), f = t.measureText("...").width, d = "", p = "", v = 1, g = 0, b = s, m = 0, w = !1, y = 0; y < u.length; y++) m = g, 
        d = p + u[y], (g = t.measureText(d).width) + f > i && m + f <= i && v == c ? (p = d + "...", 
        w = !0) : m + f >= i && v == c + 1 ? (p = (d = u.splice(0, y - 2).join("")) + "...", 
        w = !0) : g > i && y > 0 && !w ? (t.fillText(p, a, b), v++, p = u[y], b += h) : w || (p = d);
        t.fillText(p, a, b);
    }(t, e, h) : t.fillText(h, n, i), t.restore();
}, u = function(t) {
    return new Promise(function(e, r) {
        wx.getImageInfo({
            src: t,
            success: function(t) {
                e(t);
            }
        });
    });
}, f = function(t) {
    return "0px none rgb(0, 0, 0)" !== t;
}, d = function(t) {
    return "0px" !== t;
}, p = function(t) {
    var e, r, o = 0;
    return f && (o = parseInt(t.split(/\s/)[0], 10), r = t.split(/\s/)[1], e = t.match(/(rgb).*/gi)[0]), 
    {
        borderWidth: o,
        borderStyle: r,
        borderColor: e
    };
}, v = function(t) {
    var e = t.width, r = t.height;
    return {
        coordX: e / 2 + t.left,
        coordY: r / 2 + t.top
    };
}, g = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return t.width / 2 - e / 2;
}, b = function(t, e, r, o, n, i) {
    var a = t.border, s = function(t, e) {
        return {
            imgWidth: t.width - 2 * e,
            imgHeight: t.height - 2 * e,
            imgLeft: t.left + e,
            imgTop: t.top + e
        };
    }(t, p(a).borderWidth), c = s.imgWidth, l = s.imgHeight, h = s.imgLeft, u = s.imgTop, f = e / r, d = f > 0 ? c : l * f, v = f > 0 ? c * (1 / f) : l, g = f > 0 ? 0 : (c - d) / 2, b = f > 0 ? (l - v) / 2 : 0;
    return i && (d / v > o / n ? g = Math.ceil((o - d) / 2) : b = Math.ceil((n - v) / 2)), 
    {
        realWidth: d,
        realHeight: v,
        left: h + g,
        top: u + b
    };
}, m = function(t, e) {
    var r, o, n = e.src, a = e.width, s = e.height, c = e.left, l = e.top, h = e.dataset.imgwrap;
    return u(n).then(function(u) {
        var f = u.width, d = u.height;
        if (/^https:\/\//.test(n) && (n = u.path), h) {
            var p = function(t) {
                var e = {};
                return t && i.map(function(r) {
                    r.dataset.imgwrap == t && T(r) && (e = r);
                }), e;
            }(h);
            r = p.width, o = p.height;
            var v = r / o;
            t.save(), t.beginPath(), t.rect(p.left, p.top, r, o), t.setFillStyle("#ffffff"), 
            t.fill(), t.closePath(), t.clip(), f / d > v ? (s = .75 * o, a = .75 * Math.ceil(o * f / d)) : (a = f, 
            s = f / v), t.drawImage(n, 0, 0, parseInt(a), parseInt(s), c, l, r, o), t.restore();
        } else {
            t.save(), t.beginPath(), t.rect(c, l, a, s), t.closePath(), t.clip();
            var g = b(e, f, d, a, s), m = g.left, w = g.top, y = g.realWidth, x = g.realHeight;
            t.drawImage(n, 0, 0, f, d, m, w, y, x), t.restore();
        }
    });
}, w = function(t, e) {
    var r = e.border, o = v(e), n = o.coordX, i = o.coordY, a = p(r), s = a.borderWidth, c = a.borderColor, l = g(e, s);
    t.save(), t.beginPath(), t.setLineWidth(s), t.setStrokeStyle(c), t.arc(n, i, l, 0, 2 * Math.PI), 
    t.stroke(), t.restore();
}, y = function(t, e) {
    var r = e.border, o = e["border-radius"];
    return (d(o) ? function(t, e) {
        var r = e.src, o = (e.width, e.height, e.left, e.top, v(e)), n = o.coordX, i = o.coordY, a = g(e);
        return u(r).then(function(o) {
            var s = o.width, c = o.height;
            /^https:\/\//.test(r) && (r = o.path), t.save(), t.beginPath(), t.arc(n, i, a, 0, 2 * Math.PI), 
            t.closePath(), t.clip();
            var l = b(e, s, c), h = l.left, u = l.top, f = l.realWidth, d = l.realHeight;
            t.drawImage(r, 0, 0, s, c, h, u, f, d), t.restore();
        });
    }(t, e) : m(t, e)).then(function() {
        return f(r) ? d(o) ? w(t, e) : function(t, e) {
            var r = e.border, o = e.left, n = e.top, i = e.width, a = e.height, s = p(r), c = s.borderWidth, l = s.borderColor, h = c + 1;
            t.save(), t.beginPath(), t.setLineWidth(h), t.setStrokeStyle(l), t.rect(o + c / 2, n + c / 2, i - c, a - c), 
            t.stroke(), t.restore();
        }(t, e) : Promise.resolve();
    });
}, x = function(t) {
    var e = t.width, r = t.height, o = t["border-radius"], n = parseInt(o, 10);
    if (-1 !== o.indexOf("%")) {
        var i = parseInt(n / 100 * e, 10), a = parseInt(n / 100 * r, 10);
        return {
            isCircle: i === a,
            borderRadius: i,
            borderRadiusX: i,
            borderRadiusY: a
        };
    }
    return {
        isCircle: !0,
        borderRadius: n
    };
}, P = function(t, e) {
    var r = e.border, o = e.dataset.circle, n = x(e).isCircle, i = p(r).borderWidth;
    "fill" == o ? function(t, e) {
        var r = e.backgroundColor, o = v(e), n = o.coordX, i = o.coordY, a = g(e, 0);
        t.save(), t.beginPath(), t.arc(n, i, a, 0, 2 * Math.PI), t.setFillStyle(r), t.closePath(), 
        t.fill(), t.restore();
    }(t, e) : "solid" == o && w(t, e), n && i ? w(t, e) : n ? function(t, e) {
        var r = e.width, o = e.height, n = e.left, i = e.top, a = e.backgroundColor, s = e.border, c = x(e).borderRadius, l = p(s), h = l.borderWidth, u = l.borderColor;
        t.beginPath(), t.moveTo(n + c, i), t.lineTo(n + r - c, i), t.arcTo(n + r, i, n + r, i + c, c), 
        t.lineTo(n + r, i + o - c), t.arcTo(n + r, i + o, n + r - c, i + o, c), t.lineTo(n + c, i + o), 
        t.arcTo(n, i + o, n, i + o - c, c), t.lineTo(n, i + c), t.arcTo(n, i, n + c, i, c), 
        t.closePath(), a && (t.setFillStyle(a), t.fill()), u && h && (t.setLineWidth(h), 
        t.setStrokeStyle(u), t.stroke());
    }(t, e) : l(t, e);
}, k = function(t) {
    var e = t.dataset.text, r = t.type;
    return Boolean(e) || "text" === r;
}, I = function(t) {
    var e = t.src, r = t.type;
    return Boolean(e) || "image" === r;
}, T = function(t) {
    return "view" === t.type;
}, C = function(e) {
    return e.map(function(e, r) {
        return r > 0 && (e.left = e.left - t.left, e.top = e.top - t.top), k(e) ? (e.type = "text", 
        e.rank = c) : I(e) ? (e.type = "image", e.rank = s) : (e.type = "view", e.rank = a), 
        e;
    });
}, S = function t(e, r) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 ? arguments[3] : void 0;
    void 0 === n && (n = Promise.resolve());
    var i = Object.keys(r), a = i[o], s = n.then(function() {
        return r[a] ? Promise.all(function(t, e) {
            var r = [];
            return e.forEach(function(e) {
                if (k(e)) {
                    var o = h(t, e);
                    r.push(o);
                } else if (I(e)) {
                    var n = y(t, e);
                    r.push(n);
                } else {
                    var i = P(t, e);
                    r.push(i);
                }
            }), r;
        }(e, r[a])) : Promise.resolve();
    });
    return o >= i.length ? s : t(e, r, o + 1, s);
}, W = function(t, e, r, o) {
    var n = wx.createCanvasContext(t, o);
    n.setTextBaseline("top"), l(n, e[0]);
    var i, h = C(r);
    return z(h), i = function(t) {
        var e = {};
        t.map(function(t) {
            var r = t["z-index"];
            "auto" === r && (r = 0), e[r] || (e[r] = {}), t.rank == c ? e[r][c] ? e[r][c].push(t) : (e[r][c] = [], 
            e[r][c].push(t)) : t.rank == s ? e[r][s] ? e[r][s].push(t) : (e[r][s] = [], e[r][s].push(t)) : e[r][a] ? e[r][a].push(t) : (e[r][a] = [], 
            e[r][a].push(t));
        });
        var r = {};
        return Object.keys(e).forEach(function(t) {
            r[t] = [];
            var o = [], n = [], i = [];
            Object.keys(e[t]).forEach(function(r) {
                r == c ? i = e[t][r] : r == s ? n = e[t][r] : r == a && (o = e[t][r]);
            }), r[t] = o.concat(n).concat(i);
        }), r;
    }(h), S(n, i).then(function() {
        return new Promise(function(t, e) {
            n.draw(!1, function() {
                t();
            });
        });
    });
}, M = function(t, e) {
    return new Promise(function(r, i) {
        try {
            wx.createSelectorQuery().in(e).selectAll(t).fields({
                dataset: !0,
                size: !0,
                rect: !0,
                properties: o,
                computedStyle: n
            }, function(t) {
                r(t);
            }).exec();
        } catch (t) {
            i(t);
        }
    });
}, z = function(t) {
    t.forEach(function(t) {
        if (I(t)) {
            var e = t.src;
            /^http:\/\//.test(e) && (t.src = e.replace("http", "https")), /^https:\/\//.test(e) && u(e).then(function(e) {
                t.src = e.path;
            });
        }
    });
};

module.exports = function(e) {
    var r = e.wrapperId, o = e.drawElementsClass, n = e.canvasId, a = e.context, s = M(r, a), c = M(o, a);
    return Promise.all([ s, c ]).then(function(e) {
        return t = e[0][0], i = e[1], W(n, e[0], e[1], a);
    });
};