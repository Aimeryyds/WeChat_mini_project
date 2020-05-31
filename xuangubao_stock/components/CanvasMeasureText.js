(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/CanvasMeasureText" ], {
    2537: function(e, t, n) {
        n.r(t);
        var a = n("762a"), o = n("4b27");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        var u = n("2877"), c = Object(u.a)(o.default, a.a, a.b, !1, null, null, null);
        t.default = c.exports;
    },
    "4b27": function(e, t, n) {
        n.r(t);
        var a = n("c75f"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    "762a": function(e, t, n) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(t, "a", function() {
            return a;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    c75f: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
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
                multLineText: function(e) {
                    var t = e.MaxLineNumber, n = void 0 === t ? -1 : t, a = e.content, o = void 0 === a ? "" : a, r = e.fontSize, u = void 0 === r ? 16 : r, c = e.lineHeight, i = void 0 === c ? 20 : c, s = e.width;
                    if (this.ctx || (this.ctx = wx.createCanvasContext("canvas-measure")), this.ctx) {
                        this.ctx.setFontSize(u);
                        for (var l = "", f = 0, d = 0, v = 0; v < o.length; v++) if (l += [ o[v] ], this.ctx.measureText(l).width > s) {
                            if (d === n && v !== o.length) {
                                l = l.substring(0, l.length - 1) + "...", l = "";
                                break;
                            }
                            l = "", f += i, d++;
                        }
                        return l && (l = "", f += i, d++), {
                            lineNum: d,
                            fillTop: f
                        };
                    }
                }
            }
        };
        t.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/CanvasMeasureText-create-component", {
    "components/CanvasMeasureText-create-component": function(e, t, n) {
        n("543d").createComponent(n("2537"));
    }
}, [ [ "components/CanvasMeasureText-create-component" ] ] ]);