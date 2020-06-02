var r = [ "hover-class", "hover-start-time", "space", "src" ], t = [ "color", "font-size", "font-weight", "font-family", "backgroundColor", "border", "border-radius", "box-sizing", "line-height" ], e = {
    view: 0,
    image: 1,
    text: 2
}, o = function(r, t) {
    var e = t.backgroundColor, o = t.width, n = t.height;
    r.setFillStyle(e), r.fillRect(0, 0, o, n);
}, n = function(r) {
    for (var t = 0, e = 0, o = r.length; e < o; e++) t += r.charCodeAt(e) < 256 ? 1 : 2;
    return t / 2;
}, i = function(r, t) {
    var e = r["font-size"], o = r.width;
    return n(t) * parseInt(e, 10) > o;
}, a = function(r, t, e) {
    for (var o = t["font-size"], i = t.width, a = t.left, u = t.top, c = t["line-height"], l = "normal" === c ? Math.round(1.2 * o) : c, s = Math.floor(i / parseInt(o, 10)), d = n(e), h = 0; h < d; h += s) {
        var f = e.substring(h, h + s), v = u + Math.floor(h / s) * parseInt(l, 10);
        r.fillText(f, a, v);
    }
}, u = function(r, t) {
    var e = t.dataset.text, o = t.left, n = t.top, u = t.color, c = t["font-weight"], l = t["font-size"], s = t["font-family"], d = Array.isArray(e) ? e[0] : e;
    r.font = c + " " + Math.round(parseFloat(l)) + "px " + s, r.setFillStyle(u), i(t, d) ? a(r, t, d) : r.fillText(d, o, n), 
    r.restore();
}, c = function(r) {
    return new Promise(function(t, e) {
        wx.getImageInfo({
            src: r,
            success: function(r) {
                t(r);
            }
        });
    });
}, l = function(r) {
    return "0px none rgb(0, 0, 0)" !== r;
}, s = function(r) {
    return "0px" !== r;
}, d = function(r) {
    var t = void 0, e = void 0, o = 0;
    return l && (o = parseInt(r.split(/\s/)[0], 10), e = r.split(/\s/)[1], t = r.match(/(rgb).*/gi)[0]), 
    {
        borderWidth: o,
        borderStyle: e,
        borderColor: t
    };
}, h = function(r, t) {
    return {
        imgWidth: r.width - 2 * t,
        imgHeight: r.height - 2 * t,
        imgLeft: r.left + t,
        imgTop: r.top + t
    };
}, f = function(r) {
    var t = r.width, e = r.height;
    return {
        coordX: t / 2 + r.left,
        coordY: e / 2 + r.top
    };
}, v = function(r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return r.width / 2 - t / 2;
}, g = function(r, t, e) {
    var o = r.border, n = d(o).borderWidth, i = h(r, n), a = i.imgWidth, u = i.imgHeight, c = i.imgLeft, l = i.imgTop, s = t / e, f = s > 0 ? a : u * s, v = s > 0 ? a * (1 / s) : u;
    return {
        realWidth: f,
        realHeight: v,
        left: c + (s > 0 ? 0 : (a - f) / 2),
        top: l + (s > 0 ? (u - v) / 2 : 0)
    };
}, p = function(r, t) {
    var e = t.src, o = f(t), n = o.coordX, i = o.coordY;
    return c(e).then(function(o) {
        var a = o.width, u = o.height, c = v(t);
        r.save(), r.beginPath(), r.arc(n, i, c, 0, 2 * Math.PI), r.closePath(), r.clip();
        var l = g(t, a, u), s = l.left, d = l.top, h = l.realWidth, f = l.realHeight;
        r.drawImage(e, 0, 0, a, u, s, d, h, f), r.restore();
    });
}, b = function(r, t) {
    var e = t.src, o = t.width, n = t.height, i = t.left, a = t.top;
    return c(e).then(function(u) {
        var c = u.width, l = u.height;
        r.save(), r.beginPath(), r.rect(i, a, o, n), r.closePath(), r.clip();
        var s = g(t, c, l), d = s.left, h = s.top, f = s.realWidth, v = s.realHeight;
        r.drawImage(e, 0, 0, c, l, d, h, f, v), r.restore();
    });
}, m = function(r, t) {
    var e = t.border, o = f(t), n = o.coordX, i = o.coordY, a = d(e), u = a.borderWidth, c = a.borderColor, l = v(t, u);
    r.save(), r.beginPath(), r.setLineWidth(u), r.setStrokeStyle(c), r.arc(n, i, l, 0, 2 * Math.PI), 
    r.stroke(), r.restore();
}, w = function(r, t) {
    var e = t.border, o = t.left, n = t.top, i = t.width, a = t.height, u = d(e), c = u.borderWidth, l = u.borderColor, s = c + 1;
    r.save(), r.beginPath(), r.setLineWidth(s), r.setStrokeStyle(l), r.rect(o + c / 2, n + c / 2, i - c, a - c), 
    r.stroke(), r.restore();
}, k = function(r, t) {
    var e = t.border, o = t["border-radius"];
    return (s(o) ? p(r, t) : b(r, t)).then(function() {
        return l(e) ? s(o) ? m(r, t) : w(r, t) : Promise.resolve();
    });
}, y = function(r) {
    var t = r.width, e = r.height, o = r["border-radius"], n = parseInt(o, 10);
    if (-1 !== o.indexOf("%")) {
        var i = parseInt(n / 100 * t, 10), a = parseInt(n / 100 * e, 10);
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
}, T = function(r, t) {
    var e = t.width, o = t.height, n = t.left, i = t.top, a = t.backgroundColor, u = t.border, c = y(t).borderRadius, l = d(u), s = l.borderWidth, h = l.borderColor;
    r.beginPath(), r.moveTo(n + c, i), r.lineTo(n + e - c, i), r.arcTo(n + e, i, n + e, i + c, c), 
    r.lineTo(n + e, i + o - c), r.arcTo(n + e, i + o, n + e - c, i + o, c), r.lineTo(n + c, i + o), 
    r.arcTo(n, i + o, n, i + o - c, c), r.lineTo(n, i + c), r.arcTo(n, i, n + c, i, c), 
    r.closePath(), a && (r.setFillStyle(a), r.fill()), h && s && (r.setLineWidth(s), 
    r.setStrokeStyle(h), r.stroke());
}, x = function(r, t) {
    var e = t.width, o = t.height, n = t.left, i = t.top, a = t.backgroundColor, u = t.border, c = d(u), l = c.borderWidth, s = c.borderColor, h = y(t), f = h.borderRadiusX, v = h.borderRadiusY;
    r.beginPath(), r.moveTo(n + f, i), r.lineTo(n + e - f, i), r.quadraticCurveTo(n + e, i, n + e, i + v), 
    r.lineTo(n + e, i + o - v), r.quadraticCurveTo(n + e, i + o, n + e - f, i + o), 
    r.lineTo(n + f, i + o), r.quadraticCurveTo(n, i + o, n, i + o - v), r.lineTo(n, i + v), 
    r.quadraticCurveTo(n, i, n + f, i), r.closePath(), a && (r.setFillStyle(a), r.fill()), 
    s && l && (r.setLineWidth(l), r.setStrokeStyle(s), r.stroke());
}, P = function(r, t) {
    y(t).isCircle ? T(r, t) : x(r, t);
}, C = function(r) {
    var t = r.dataset.text, e = r.type;
    return Boolean(t) || "text" === e;
}, S = function(r) {
    var t = r.src, e = r.type;
    return Boolean(t) || "image" === e;
}, W = function(r) {
    return "view" === r.type;
}, I = function(r) {
    return r.map(function(r) {
        return C(r) ? (r.type = "text", r.rank = e.text) : S(r) ? (r.type = "image", r.rank = e.image) : (r.type = "view", 
        r.rank = e.view), r;
    });
}, R = function(r) {
    return r.sort(function(r, t) {
        return r.rank < t.rank ? -1 : r.rank > t.rank ? 1 : 0;
    });
}, z = function(r, t) {
    var e = [];
    return t.forEach(function(t) {
        if (C(t)) {
            var o = u(r, t);
            e.push(o);
        } else if (S(t)) {
            var n = k(r, t);
            e.push(n);
        } else {
            var i = P(r, t);
            e.push(i);
        }
    }), e;
}, L = function r(t, e) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments[3];
    void 0 === n && (n = Promise.resolve());
    var i = o, a = n.then(function() {
        return e[i] ? Promise.all(z(t, e[i])) : Promise.resolve();
    });
    return o >= Object.keys(e).length ? a : r(t, e, o + 1, a);
}, M = function(r, t, e) {
    var n = wx.createCanvasContext(r);
    n.setTextBaseline("top"), o(n, t[0]);
    var i = {};
    return R(I(e)).forEach(function(r) {
        i[r.rank] || (i[r.rank] = []), (C(r) || S(r) || W(r)) && i[r.rank].push(r);
    }), L(n, i).then(function() {
        return new Promise(function(r, t) {
            n.draw(!0, function() {
                r();
            });
        });
    });
}, F = function(e) {
    return new Promise(function(o, n) {
        try {
            wx.createSelectorQuery().selectAll(e).fields({
                dataset: !0,
                size: !0,
                rect: !0,
                properties: r,
                computedStyle: t
            }, function(r) {
                o(r);
            }).exec();
        } catch (r) {
            n(r);
        }
    });
};

module.exports = function(r, t, e) {
    var o = F(r), n = F(t);
    return Promise.all([ o, n ]).then(function(r) {
        return M(e, r[0], r[1]);
    });
};