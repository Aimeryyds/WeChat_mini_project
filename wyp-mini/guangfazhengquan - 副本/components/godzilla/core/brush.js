Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./config")), i = require("../../utils"), o = {
    line: function(t) {
        var i = t.ctx, o = t.lines, e = void 0 === o ? [] : o, n = t.options, s = (n = void 0 === n ? {} : n).thickness, r = void 0 === s ? 1 : s, c = n.color, l = void 0 === c ? "#D8D8D8" : c, x = n.segments, h = void 0 === x ? [] : x;
        i.save(), i.setLineDash(h), i.setLineWidth(r), i.setStrokeStyle(l);
        for (var a = 0, y = e.length; a < y; a++) {
            var v = e[a];
            i.beginPath();
            for (var d = 0, f = v.length; d < f; d++) {
                var u = v[d];
                !d || u.notLine ? i.moveTo(this.cx(u.x), this.cy(u.y)) : i.lineTo(this.cx(u.x), this.cy(u.y));
            }
            i.stroke();
        }
        i.restore();
    },
    rect: function(t) {
        var i = t.ctx, o = t.rect, e = o.x0, n = o.y0, s = o.x1, r = o.y1, c = t.options, l = c.color, x = c.linecolor;
        i.save(), i.setFillStyle(l), i.setStrokeStyle(x || l), i.beginPath(), Math.abs(e - s) < .001 ? (i.moveTo(this.cx(e), this.cy(n)), 
        i.lineTo(this.cx(e), this.cy(r))) : (i.moveTo(this.cx(e), this.cy(n)), i.lineTo(this.cx(s), this.cy(n)), 
        i.lineTo(this.cx(s), this.cy(r)), i.lineTo(this.cx(e), this.cy(r)), i.closePath()), 
        i.fill(), i.stroke(), i.restore();
    },
    fan: function(t) {
        var i = t.ctx, o = t.options, e = o.x, n = o.y, s = o.radius, r = o.thickness, c = o.startAngle, l = o.endAngle, x = o.color;
        i.save(), i.beginPath(), i.setFillStyle(x), e = this.cx(e), n = this.cy(n), s = this.cx(s), 
        r = this.cx(r), i.beginPath(), i.moveTo(e + Math.cos(c) * s, n + Math.sin(c) * s), 
        i.arc(e, n, s, c, l, !1), i.lineTo(e + Math.cos(l) * (s - r), n + Math.sin(l) * (s - r)), 
        i.arc(e, n, s - r, l, c, !0), i.closePath(), i.fill(), i.restore();
    },
    path: function(t) {
        var i = t.ctx, o = t.points, e = void 0 === o ? [] : o, n = t.rect, s = ((n = void 0 === n ? {} : n).x0, 
        n.y0, n.x1, n.y1, t.options), r = (s = void 0 === s ? {} : s).fill, c = void 0 === r ? null : r;
        i.save(), i.setFillStyle(c), i.beginPath();
        for (var l = 0, x = e.length; l < x; l++) {
            var h = e[l];
            l ? i.lineTo(this.cx(h.x), this.cy(h.y)) : i.moveTo(this.cx(h.x), this.cy(h.y));
        }
        i.closePath(), i.fill(), i.restore();
    },
    label: function(t) {
        var o = t.text, e = t.options, n = (e = void 0 === e ? {} : e).color, s = void 0 === n ? "#999999" : n, r = e.x, c = void 0 === r ? 0 : r, l = e.y, x = void 0 === l ? 0 : l, h = e.x2, a = void 0 === h ? void 0 : h, y = e.width, v = void 0 === y ? 60 : y, d = e.height, f = void 0 === d ? 0 : d, u = e.size, p = void 0 === u ? 12 : u, g = e.weight, b = void 0 === g ? "normal" : g, T = e.align, P = void 0 === T ? "center" : T, m = e.zIndex, M = void 0 === m ? 0 : m, k = e.opacity, I = void 0 === k ? 1 : k, S = e.margin, w = void 0 === S ? {} : S, L = e.display, z = void 0 === L ? "block" : L, D = e.bgColor, _ = void 0 === D ? "" : D, q = e.lineHeight, F = void 0 === q ? "" : q, A = e.top, C = void 0 === A ? "" : A, E = "\n      display: block;\n      position: absolute;\n      margin-left: " + (void 0 === w.left ? -v / 2 : w.left) + "px;\n      margin-top: " + (void 0 === w.top ? -(f || p) / 2 : w.top) + "px;\n      top: " + ("" === C ? x : C) + "px;\n      height: " + (f || p) + "px;\n      line-height: " + (F || f || p) + "px;\n      font-size: " + p + "px;\n      font-weight: " + b + ";\n      color: " + s + ";\n      text-align: " + P + ";\n      z-index: " + M + ";\n      opacity: " + I + ";\n      display: " + z + ";\n      background-color: " + _ + ";\n      white-space: nowrap;\n    ";
        return E += a ? "right: " + a + "px;" : "left: " + c + "px;", v && (E += "width: " + v + "px;"), 
        {
            id: (0, i.getUnique)(),
            text: o,
            style: E
        };
    },
    clear: function(t) {
        var i = t.ctx, o = t.x0, e = t.y0, n = t.x1, s = t.y1, r = this.cx(o), c = this.cy(e), l = this.cx(n), x = this.cy(s);
        i.clearRect(r, c, l - r, x - x);
    },
    cx: function(i) {
        return Math.floor(t.default.PIXEL * i) + .5;
    },
    cy: function(i) {
        return Math.floor(t.default.PIXEL * i) + .5;
    },
    fit: function(t, i) {
        return Math.floor(i / t / 1.4);
    },
    isIn: function(t, i) {
        var o = i.x0 < i.x1 ? {
            sx0: i.x0,
            sx1: i.x1
        } : {
            sx0: i.x1,
            sx1: i.x0
        }, e = o.sx0, n = o.sx1, s = i.y0 < i.y1 ? {
            sy0: i.y0,
            sy1: i.y1
        } : {
            sy0: i.y1,
            sy1: i.y0
        }, r = s.sy0, c = s.sy1;
        return t.x >= e && t.x <= n && t.y >= r && t.y <= c;
    },
    isCover: function(t, i) {
        return this.isIn({
            x: t.x0,
            y: t.y0
        }, i) || this.isIn({
            x: t.x0,
            y: t.y1
        }, i) || this.isIn({
            x: t.x1,
            y: t.y1
        }, i) || this.isIn({
            x: t.x1,
            y: t.y0
        }, i);
    }
};

exports.default = o;