(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/plate/KLine" ], {
    6459: function(t, n, e) {
        e.r(n);
        var i = e("8d6f"), o = e.n(i);
        for (var r in i) "default" !== r && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(r);
        n.default = o.a;
    },
    "8d6f": function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(e("dfbf"));
        function o(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e;
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var r = 375;
        try {
            r = wx.getSystemInfoSync().windowWidth;
        } catch (t) {
            r = 375;
        }
        var a = r / 750 * 270, c = r / 750 * 684, l = {
            props: {
                kline: Object
            },
            data: function() {
                return {
                    context: null
                };
            },
            mounted: function() {
                this.context || (this.context = wx.createCanvasContext("k-line", this));
            },
            watch: {
                kline: {
                    handler: function() {
                        var t = this;
                        if (this.kline) {
                            this.context || (this.context = wx.createCanvasContext("k-line", this));
                            var n = this.kline, e = n.platekline, r = n.hushenkline, l = e.length, u = Math.min(c / l, 10), f = this.findMaxMin([].concat(o(e.map(function(t) {
                                return t.open;
                            })), o(e.map(function(t) {
                                return t.close;
                            })), o(e.map(function(t) {
                                return t.high;
                            })), o(e.map(function(t) {
                                return t.low;
                            })), o(r.map(function(t) {
                                return t.value;
                            })))), s = f.max, g = f.min;
                            this.max = s, this.min = g, this.biggestDiff = s - g;
                            var h = -1;
                            e.forEach(function(n, o) {
                                var r = o * u, l = (o + 1) * u, f = (r + l) / 2, s = t.getY(Math.max(n.open, n.close)), g = t.getY(Math.min(n.open, n.close));
                                i.default.FillnStroke(t.context, function(t) {
                                    t.lineWidth = "0.5", t.moveTo(r + .5, s), t.lineTo(l - .5, s), t.lineTo(l - .5, g), 
                                    t.lineTo(r + .5, g), t.lineTo(r + .5, s);
                                }, "".concat(n.open > n.close ? "rgb(10,191,155)" : "rgb(230,46,77)"), "".concat(n.open > n.close ? "rgb(10,191,155)" : "rgb(230,46,77)")), 
                                i.default.Stroke(t.context, function(e) {
                                    e.lineWidth = "0.5", e.moveTo(f, s), e.lineTo(f, t.getY(n.high));
                                }, "".concat(n.open > n.close ? "rgb(10,191,155)" : "rgb(230,46,77)")), i.default.Stroke(t.context, function(e) {
                                    e.lineWidth = "0.5", e.moveTo(f, g), e.lineTo(f, t.getY(n.low));
                                }, "".concat(n.open > n.close ? "rgb(10,191,155)" : "rgb(230,46,77)"));
                                try {
                                    var d, p = !1;
                                    if (0 === o && e.length < 60 ? p = !0 : (d = n.timeString.split("-")[1], p = e[o - 1].timeString.split("-")[1] !== d), 
                                    p) {
                                        var x = n.timeString.slice(0, 7), m = t.measureText(x) || 45;
                                        -1 !== h && (h > f - m / 2 || f + m / 2 > c) || (i.default.Stroke(t.context, function(t) {
                                            t.lineWidth = "0.5", t.moveTo(f, 0), t.lineTo(f, a);
                                        }, "#353643"), i.default.Text(t.context, function(t) {
                                            t.textAlign = "center", f - m / 2 < 0 ? (t.textAlign = "left", h = f + m) : h = f + m / 2, 
                                            t.fillText(x, f, a + 14);
                                        }, "rgb(130,130,147)", "11px PingFangSC-Regular"));
                                    }
                                } catch (t) {}
                            }), i.default.Stroke(this.context, function(n) {
                                n.lineWidth = "0.5", r.sort(function(t, n) {
                                    return t.time - n.time;
                                }).forEach(function(e, i) {
                                    0 === i ? n.moveTo((i + .5) * u, t.getY(e.value)) : n.lineTo((i + .5) * u, t.getY(e.value));
                                });
                            }, "rgb(240,124,5)"), i.default.Stroke(this.context, function(t) {
                                t.lineWidth = "0.5", t.moveTo(0, a), t.lineTo(c, a);
                            }, "#353643"), i.default.Text(this.context, function(n) {
                                n.textAlign = "right", n.fillText("".concat(t.max.toFixed(2), "%"), c, 11), n.fillText("".concat(t.min.toFixed(2), "%"), c, a);
                            }, "rgb(130,130,147)", "11px PingFangSC-Regular"), this.context.draw();
                        }
                    },
                    immediate: !0
                }
            },
            methods: {
                findMaxMin: function(t) {
                    var n = 1 / 0, e = -1 / 0;
                    return t.forEach(function(t) {
                        t > e && (e = t), t < n && (n = t);
                    }), {
                        min: n,
                        max: e
                    };
                },
                _getY: function(t, n, e, i, o) {
                    return (n - t) / e * i + o;
                },
                getY: function(t) {
                    return this._getY(t, this.max, this.biggestDiff, a - 6, 3);
                },
                measureText: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "11px PingFangSC-Regular", e = 0;
                    return i.default.Text(this.context, function(n) {
                        e = n.measureText(t).width || 0;
                    }, "rgb(153,153,153)", n), e;
                }
            }
        };
        n.default = l;
    },
    "8f84": function(t, n, e) {
        var i = e("c562");
        e.n(i).a;
    },
    b66d: function(t, n, e) {
        e.r(n);
        var i = e("f7f1"), o = e("6459");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("8f84");
        var a = e("2877"), c = Object(a.a)(o.default, i.a, i.b, !1, null, "485c148b", null);
        n.default = c.exports;
    },
    c562: function(t, n, e) {},
    f7f1: function(t, n, e) {
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        e.d(n, "a", function() {
            return i;
        }), e.d(n, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/plate/KLine-create-component", {
    "pages/plate/KLine-create-component": function(t, n, e) {
        e("543d").createComponent(e("b66d"));
    }
}, [ [ "pages/plate/KLine-create-component" ] ] ]);