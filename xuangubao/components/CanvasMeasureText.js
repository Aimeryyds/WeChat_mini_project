(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/CanvasMeasureText" ], {
    2537: function(t, e, n) {
        n.r(e);
        var a = n("6b4f"), o = n("4b27");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        var c = n("2877"), r = Object(c.a)(o.default, a.a, a.b, !1, null, null, null);
        e.default = r.exports;
    },
    "4b27": function(t, e, n) {
        n.r(e);
        var a = n("c75f"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    },
    "6b4f": function(t, e, n) {
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return a;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    c75f: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            name: "CanvasMeasureText",
            props: {
                width: Number,
                height: Number
            },
            data: function() {
                return {
                    ctx: null
                };
            },
            onReady: function() {
                this.ctx = wx.createCanvasContext("canvas-measure");
            },
            methods: {
                multLineText: function(t) {
                    var e = t.MaxLineNumber, n = void 0 === e ? -1 : e, a = t.content, o = void 0 === a ? "" : a, i = t.fontSize, c = void 0 === i ? 16 : i, r = t.lineHeight, s = void 0 === r ? 20 : r, u = t.width;
                    if (this.ctx || (this.ctx = wx.createCanvasContext("canvas-measure")), this.ctx) {
                        this.ctx.setFontSize(c);
                        for (var f = "", l = 0, x = 1, d = 0, h = 0; h < o.length; h++) if (f += [ o[h] ], 
                        d += 1, this.ctx.measureText(f).width > u) {
                            if (x === n && h !== o.length) {
                                f = f.substring(0, f.length - 1) + "...", f = "";
                                break;
                            }
                            f = "", l += s, x++;
                        }
                        return f && (f = "", l += s, x++), {
                            lineNum: x,
                            fillTop: l,
                            index: d
                        };
                    }
                },
                measureWidth: function(t) {
                    var e = t.fontSize, n = t.content;
                    if (this.ctx || (this.ctx = wx.createCanvasContext("canvas-measure")), this.ctx && e && n) return this.ctx.setFontSize(e), 
                    this.ctx.measureText(n).width;
                }
            }
        };
        e.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/CanvasMeasureText-create-component", {
    "components/CanvasMeasureText-create-component": function(t, e, n) {
        n("543d").createComponent(n("2537"));
    }
}, [ [ "components/CanvasMeasureText-create-component" ] ] ]);