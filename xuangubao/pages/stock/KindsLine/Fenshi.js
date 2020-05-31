(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/stock/KindsLine/Fenshi" ], {
    "22c6": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = c(n("70f2")), o = c(n("f32a")), a = c(n("3a8f")), r = c(n("dfbf"));
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), i.forEach(function(e) {
                    f(t, e, n[e]);
                });
            }
            return t;
        }
        function f(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var s = 375;
        try {
            s = wx.getSystemInfoSync().windowWidth;
        } catch (t) {
            s = 375;
        }
        var u = s / 750 * 600, h = s / 750 * 400, g = s / 750 * 428, x = s / 750 * 464, d = s / 750 * 700, T = d / 240, p = "rgb(20,178,159)", m = 0, v = 0, b = 0, D = {
            props: {
                fenshi: Object,
                stockInfo: Object
            },
            components: {
                PercentNumber: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/PercentNumber") ]).then(n.bind(null, "7597"));
                },
                ApproxNumber: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/ApproxNumber") ]).then(n.bind(null, "6ec9"));
                }
            },
            data: function() {
                return {
                    context: null,
                    touches: null,
                    selectedIndex: null,
                    toFixedLocal: a.default
                };
            },
            computed: {
                toolTipInfo: function() {
                    if (!this.fenshi) return null;
                    var t = this.selectedIndex;
                    return t ? this.fenshi.lines[t - 1] || null : this.fenshi.lines.slice(-1)[0] || null;
                }
            },
            watch: {
                fenshi: {
                    handler: function() {
                        if (this.fenshi) {
                            this.context || (this.context = wx.createCanvasContext("fenshi-line", this));
                            var t = this.fenshi.lines;
                            m = new Date((0, i.default)(new Date(1e3 * t[0].tickAt), "YYYY/MM/DD")).getTime() / 6e4, 
                            v = m + 570, b = m + 780;
                            var e = this.findMaxMin(t.map(function(t) {
                                return t.pxChangeRate;
                            })), n = e.min, o = e.max;
                            this.biggestDiff1 = Math.max(Math.abs(n), Math.abs(o));
                            var a = this.findMaxMin(t.map(function(t) {
                                return t.pxChange;
                            })), r = a.min, c = a.max;
                            this.biggestDiff2 = Math.max(Math.abs(r), Math.abs(c));
                            var f = this.findMaxMin(t.map(function(t) {
                                return t.turnoverVolume / 100;
                            })).max;
                            this.biggestDiff3 = f;
                            var s = t.map(function(t) {
                                return l({}, t, {
                                    turnoverVolume: t.turnoverVolume / 100,
                                    time: Math.floor(t.tickAt / 60)
                                });
                            });
                            this.drawChangeRate(s), this.drawAvgPriceLine(s), this.drawTurnover(s), this.drawGrid(), 
                            this.context.draw();
                        }
                    },
                    immediate: !0,
                    deep: !0
                },
                touches: function() {
                    var t = this;
                    if (!this.touches || !this.toolTipInfo) return this.contextTip.clearRect(0, 0, d, u), 
                    this.contextTip.draw(), void (this.selectedIndex = null);
                    var e = this.touches, n = e.x, a = e.y;
                    if (!(a > h && a < x)) {
                        this.selectedIndex = Math.max(1, Math.min(Math.round(n / T) + 1, this.fenshi.lines.length));
                        var c = (this.selectedIndex - 1) * T;
                        r.default.Stroke(this.contextTip, function(t) {
                            t.lineWidth = "0.5", t.moveTo(0, a), t.lineTo(d, a), t.moveTo(c, 0), t.lineTo(c, u);
                        }, "rgb(102,102,102)");
                        var l = this.measureText("".concat((0, i.default)(1e3 * this.toolTipInfo.tickAt, "HH:mm"))) || 30;
                        if (r.default.Fill(this.contextTip, function(t) {
                            var e = c - l / 2 - 2, n = c + l / 2 + 2;
                            c < l / 2 ? (e = c, n = c + l) : c > d - l / 2 && (e = c - l, n = c), t.moveTo(e, g + 1), 
                            t.lineTo(n, g + 1), t.lineTo(n, g + 17), t.lineTo(e, g + 17), t.lineTo(e, g + 1);
                        }, "rgba(51,51,51,0.8)"), r.default.Text(this.contextTip, function(e) {
                            e.textAlign = "center", c < l / 2 ? e.textAlign = "left" : c > d - l / 2 && (e.textAlign = "right"), 
                            e.fillText("".concat((0, i.default)(1e3 * t.toolTipInfo.tickAt, "HH:mm")), c, g + 13);
                        }, "rgb(255,255,255)", "11px PingFangSC-Regular"), a <= h) {
                            var f = this.biggestDiff2 + this.fenshi.preClosePx - 2 * this.biggestDiff2 * a / h, s = this.measureText("".concat(f.toFixed(2))) || 30;
                            r.default.Fill(this.contextTip, function(t) {
                                var e = 5 + s + 1;
                                t.moveTo(1, a - 7), t.lineTo(e, a - 7), t.lineTo(e, a + 6), t.lineTo(1, a + 6), 
                                t.lineTo(1, a - 7);
                            }, "rgba(51,51,51,0.8)"), r.default.Text(this.contextTip, function(t) {
                                t.fillText("".concat(f.toFixed(2)), 4, a + 4);
                            }, "rgb(255,255,255)", "11px PingFangSC-Regular");
                        }
                        if (a >= x) {
                            var p = (1 - (a - x) / (u - x)) * this.biggestDiff3, m = "".concat(p > 1e4 ? (0, 
                            o.default)(p) : p.toFixed(0), "手"), v = this.measureText(m) || 30;
                            r.default.Fill(this.contextTip, function(t) {
                                var e = 5 + v + 1;
                                t.moveTo(1, a - 7), t.lineTo(e, a - 7), t.lineTo(e, a + 6), t.lineTo(1, a + 6), 
                                t.lineTo(1, a - 7);
                            }, "rgba(51,51,51,0.8)"), r.default.Text(this.contextTip, function(t) {
                                t.fillText(m, 4, a + 4);
                            }, "rgb(153,153,153)", "11px PingFangSC-Regular");
                        }
                        this.contextTip.draw();
                    }
                }
            },
            mounted: function() {
                this.context || (this.context = wx.createCanvasContext("fenshi-line", this)), this.contextTip || (this.contextTip = wx.createCanvasContext("tool-tip", this));
            },
            methods: {
                drawChangeRate: function(t) {
                    var e = this, n = this.context.createLinearGradient(0, 0, 0, h);
                    n.addColorStop(0, "rgba(73,124,226,0.70)"), n.addColorStop(1, "rgba(73,124,226,0)"), 
                    r.default.Fill(this.context, function(n) {
                        n.moveTo(0, h), n.lineTo(0, e._getY(t[0].pxChangeRate, e.biggestDiff1, h, 0)), t.sort(function(t, e) {
                            return t.time - e.time;
                        }).forEach(function(i, o) {
                            var a = e.getDeltaGaps(i.time);
                            n.lineTo(a * T, e._getY(i.pxChangeRate, e.biggestDiff1, h, 0)), o === t.length - 1 && n.lineTo(a * T, h);
                        }), n.lineTo(0, h);
                    }, n), r.default.Stroke(this.context, function(n) {
                        n.lineWidth = "1", n.moveTo(0, e._getY(t[0].pxChangeRate, e.biggestDiff1, h, 0)), 
                        t.sort(function(t, e) {
                            return t.time - e.time;
                        }).forEach(function(t) {
                            var i = e.getDeltaGaps(t.time);
                            n.lineTo(i * T, e._getY(t.pxChangeRate, e.biggestDiff1, h, 0));
                        });
                    }, "rgb(73,124,226)");
                },
                drawAvgPriceLine: function(t) {
                    var e = this, n = this.fenshi.preClosePx;
                    r.default.Stroke(this.context, function(i) {
                        i.lineWidth = "0.5", i.moveTo(0, e._getY(t[0].avgPx - n, e.biggestDiff2, h, 0)), 
                        t.sort(function(t, e) {
                            return t.time - e.time;
                        }).forEach(function(t) {
                            var o = e.getDeltaGaps(t.time);
                            i.lineTo(o * T, e._getY(t.avgPx - n, e.biggestDiff2, h, 0));
                        });
                    }, "rgb(255,170,0)");
                },
                drawTurnover: function(t) {
                    var e = this, n = T / 2 * .7;
                    t.sort(function(t, e) {
                        return t.time - e.time;
                    }).forEach(function(i, o) {
                        var a = e.getDeltaGaps(i.time), c = i.turnoverVolume ? (e.biggestDiff3 - i.turnoverVolume) / e.biggestDiff3 * (u - x) + x : u, l = "rgb(219,46,83)";
                        0 === o ? i.closePx < (e.fenshi.preClosePx || 0) && (l = p) : t[o].closePx < t[o - 1].closePx && (l = p), 
                        r.default.Fill(e.context, function(t) {
                            t.moveTo(a * T - n, u), t.lineTo(a * T - n, c), t.lineTo(a * T + n, c), t.lineTo(a * T + n, u), 
                            t.moveTo(a * T - n, u);
                        }, l);
                    });
                },
                drawGrid: function() {
                    var t = this;
                    r.default.Stroke(this.context, function(t) {
                        t.setLineDash([ 3, 5 ]), t.lineWidth = "0.5", t.moveTo(0, h / 2), t.lineTo(d, h / 2);
                    }, "rgba(229,229,229,0.8)"), r.default.Stroke(this.context, function(t) {
                        t.lineWidth = "0.5", t.moveTo(0, g), t.lineTo(d, g), t.moveTo(0, x), t.lineTo(d, x), 
                        t.moveTo(d / 2, 0), t.lineTo(d / 2, g), t.moveTo(d / 2, x), t.lineTo(d / 2, u);
                    }, "rgba(229,229,229,0.8)"), r.default.Text(this.context, function(e) {
                        e.fillText(" ".concat(t.fenshi.preClosePx.toFixed(2)), 0, h / 2 + 3), e.fillText(" 09:30", 0, g + 13), 
                        t.stockInfo && e.fillText(" 总量:".concat((0, o.default)(t.stockInfo.turnoverVolume / 100), "手"), 0, x + 13), 
                        e.textAlign = "center", e.fillText("11:30/13:00", d / 2, g + 13);
                        try {
                            var n = t.fenshi.lines.slice(-1)[0].turnoverVolume / 100;
                            e.fillText("现量:".concat(n > 1e4 ? (0, o.default)(n) : n, "手"), d / 2, x + 13);
                        } catch (t) {}
                        e.textAlign = "right", e.fillText("15:00 ", d, g + 13), e.fillText("".concat(t.biggestDiff3 > 1e4 ? (0, 
                        o.default)(t.biggestDiff3) : t.biggestDiff3, "手 "), d, x + 13), e.fillText("".concat(t.biggestDiff3 / 2 > 1e4 ? (0, 
                        o.default)(t.biggestDiff3 / 2) : Math.round(t.biggestDiff3 / 2), "手 "), d, x + 47);
                    }, "rgb(153,153,153)", "11px PingFangSC-Regular"), r.default.Text(this.context, function(e) {
                        e.fillText(" ".concat((t.fenshi.preClosePx + t.biggestDiff2).toFixed(2)), 0, 12), 
                        e.textAlign = "right", e.fillText("".concat(t.biggestDiff1.toFixed(2), "% "), d, 12);
                    }, "rgb(219,46,83)", "11px PingFangSC-Regular"), r.default.Text(this.context, function(e) {
                        e.fillText(" ".concat((t.fenshi.preClosePx - t.biggestDiff2).toFixed(2)), 0, g - 3), 
                        e.textAlign = "right", e.fillText("-".concat(t.biggestDiff1.toFixed(2), "% "), d, g - 3);
                    }, "rgb(20,178,159)", "11px PingFangSC-Regular");
                },
                findMaxMin: function(t) {
                    var e = 1 / 0, n = -1 / 0;
                    return t.forEach(function(t) {
                        t > n && (n = t), t < e && (e = t);
                    }), {
                        min: e,
                        max: n
                    };
                },
                getDeltaGaps: function(t) {
                    return t > b ? 120 + Math.floor(t - b) : Math.floor(t - v);
                },
                measureText: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "11px PingFangSC-Regular", n = 0;
                    return r.default.Text(this.contextTip, function(e) {
                        n = e.measureText(t).width || 0;
                    }, "rgb(153,153,153)", e), n;
                },
                _getY: function(t, e, n) {
                    return (e - t) / (2 * e) * n + (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
                },
                longtap: function(t) {
                    this.contextTip || (this.contextTip = wx.createCanvasContext("tool-tip", this)), 
                    this.touching = !0, this.touches = t.touches[0];
                },
                touchstart: function() {},
                touchmove: function(t) {
                    this.touching && (this.touches = t.touches[0]);
                },
                touchend: function() {
                    this.touches = null, this.touching = !1;
                },
                touchcancel: function() {
                    this.touches = null, this.touching = !1;
                }
            }
        };
        e.default = D;
    },
    "325e": function(t, e, n) {
        n.r(e);
        var i = n("22c6"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    },
    "44dd": function(t, e, n) {
        n.r(e);
        var i = n("e5d2"), o = n("325e");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("de4e");
        var r = n("2877"), c = Object(r.a)(o.default, i.a, i.b, !1, null, "4c1a977a", null);
        e.default = c.exports;
    },
    8283: function(t, e, n) {},
    de4e: function(t, e, n) {
        var i = n("8283");
        n.n(i).a;
    },
    e5d2: function(t, e, n) {
        var i = function() {
            var t = this, e = (t.$createElement, t._self._c, {
                positiveSignInNeed: !1,
                fixedDigits: 2
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e
                }
            });
        }, o = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/stock/KindsLine/Fenshi-create-component", {
    "pages/stock/KindsLine/Fenshi-create-component": function(t, e, n) {
        n("543d").createComponent(n("44dd"));
    }
}, [ [ "pages/stock/KindsLine/Fenshi-create-component" ] ] ]);