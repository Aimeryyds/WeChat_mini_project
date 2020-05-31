(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/stock/KindsLine/Kline" ], {
    5777: function(t, e, n) {},
    "5a25": function(t, e, n) {
        var i = function() {
            var t = this, e = (t.$createElement, t._self._c, {
                positiveSignInNeed: !1,
                fixedDigits: 2
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e,
                    a1: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    },
                    a2: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    }
                }
            });
        }, o = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    "5e9d": function(t, e, n) {
        var i = n("5777");
        n.n(i).a;
    },
    "9e47": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = a(n("70f2")), o = a(n("f32a")), l = a(n("3a8f")), r = a(n("dfbf"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function c(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n;
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        function u(t) {
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
        var h = s / 750 * 600, x = s / 750 * 400, g = s / 750 * 428, d = s / 750 * 464, p = s / 750 * 700, m = "rgb(219,46,83)", T = "rgb(20,178,159)", v = 0, b = 0, P = {
            props: {
                kline: Object,
                kLineType: Number
            },
            components: {
                PercentNumber: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/PercentNumber") ]).then(n.bind(null, "7597"));
                }
            },
            data: function() {
                return {
                    context: null,
                    contextTip: null,
                    touches: null,
                    selectedIndex: null,
                    toFixedLocal: l.default
                };
            },
            computed: {
                toolTipInfo: function() {
                    if (!this.kline) return this.$emit("focusing", null), null;
                    var t = this.selectedIndex;
                    return t ? (this.$emit("focusing", this.kline[t - 1]), this.kline[t - 1] || null) : this.kline.slice(-1)[0] || null;
                }
            },
            watch: {
                kline: {
                    handler: function() {
                        var t = this;
                        if (this.kline && (this.context || (this.context = wx.createCanvasContext("k-line", this)), 
                        this.context)) {
                            v = this.kline.length, b = Math.min(p / v, 10);
                            var e = this.kline.map(function(t) {
                                return u({}, t, {
                                    turnoverVolume: t.turnoverVolume / 100,
                                    time: Math.floor(t.tickAt / 60),
                                    timeString: (0, i.default)(1e3 * t.tickAt, "YYYY-MM-DD")
                                });
                            }), n = this.findMaxMin([].concat(c(e.map(function(t) {
                                return t.openPx;
                            })), c(e.map(function(t) {
                                return t.closePx;
                            })), c(e.map(function(t) {
                                return t.highPx;
                            })), c(e.map(function(t) {
                                return t.lowPx;
                            })), c(e.map(function(t) {
                                return t.ma5;
                            }).filter(function(t) {
                                return t > -999999;
                            })), c(e.map(function(t) {
                                return t.ma10;
                            }).filter(function(t) {
                                return t > -999999;
                            })), c(e.map(function(t) {
                                return t.ma20;
                            }).filter(function(t) {
                                return t > -999999;
                            })))), l = n.max, a = n.min;
                            this.max1 = l, this.min1 = a, this.biggestDiff1 = this.max1 - this.min1, this.biggestDiff1Real = this.biggestDiff1 * x / (x - 10);
                            var f = this.findMaxMin([].concat(c(e.map(function(t) {
                                return t.highPx;
                            })), c(e.map(function(t) {
                                return t.lowPx;
                            })))), s = f.max, h = f.min;
                            this.maxKline = s, this.minKline = h;
                            var g = this.findMaxMin(e.map(function(t) {
                                return t.turnoverVolume;
                            })).max;
                            this.biggestDiff3 = g, this.drawKline(e), this.drawMALine(e, "ma5", "rgb(255,0,209)"), 
                            this.drawMALine(e, "ma10", "rgb(54,134,242)"), this.drawMALine(e, "ma20", "rgb(255,170,0)"), 
                            this.drawTurnover(e), this.drawGrid(), this.context.draw(), this.contextTip || (this.contextTip = wx.createCanvasContext("tool-tip", this)), 
                            this.contextTip && (r.default.Text(this.contextTip, function(e) {
                                e.textAlign = "left", e.fillText(" ".concat(t.toolTipInfo.turnoverVolume / 100 > 1e4 ? (0, 
                                o.default)(t.toolTipInfo.turnoverVolume / 100) : t.toolTipInfo.turnoverVolume / 100, "手 "), 0, d + 13);
                            }, "rgb(153,153,153)", "11px PingFangSC-Regular"), this.contextTip.draw());
                        }
                    },
                    immediate: !0,
                    deep: !0
                },
                touches: function() {
                    var t = this;
                    if (this.contextTip || (this.contextTip = wx.createCanvasContext("tool-tip", this)), 
                    this.contextTip) {
                        if (!this.touches || !this.toolTipInfo) return this.selectedIndex = null, this.contextTip.clearRect(0, 0, p, h), 
                        r.default.Text(this.contextTip, function(e) {
                            e.textAlign = "left", e.fillText(" ".concat(t.toolTipInfo.turnoverVolume / 100 > 1e4 ? (0, 
                            o.default)(t.toolTipInfo.turnoverVolume / 100) : t.toolTipInfo.turnoverVolume / 100, "手 "), 0, d + 13);
                        }, "rgb(153,153,153)", "11px PingFangSC-Regular"), void this.contextTip.draw();
                        var e = this.touches, n = e.x, l = e.y;
                        if (!(l > x && l < d)) {
                            this.selectedIndex = Math.max(1, Math.min(Math.ceil(n / b), this.kline.length));
                            var a = (this.selectedIndex - .5) * b;
                            r.default.Stroke(this.contextTip, function(t) {
                                t.lineWidth = "0.5", t.moveTo(0, l), t.lineTo(p, l), t.moveTo(a, 0), t.lineTo(a, h);
                            }, "rgb(102,102,102)");
                            var c = 86400 === this.kLineType ? "".concat((0, i.default)(1e3 * this.toolTipInfo.tickAt, "YYYY-MM-DD")) : "".concat((0, 
                            i.default)(1e3 * this.toolTipInfo.tickAt, "YYYY-MM")), u = this.measureText(c) || 30;
                            if (r.default.Fill(this.contextTip, function(t) {
                                var e = a - u / 2 - 2, n = a + u / 2 + 2;
                                a < u / 2 ? (e = a, n = a + u) : a > p - u / 2 && (e = a - u, n = a), t.moveTo(e, g + 1), 
                                t.lineTo(n, g + 1), t.lineTo(n, g + 17), t.lineTo(e, g + 17), t.lineTo(e, g + 1);
                            }, "rgba(51,51,51,0.8)"), r.default.Text(this.contextTip, function(t) {
                                t.textAlign = "center", a < u / 2 ? t.textAlign = "left" : a > p - u / 2 && (t.textAlign = "right"), 
                                t.fillText(c, a, g + 13);
                            }, "rgb(255,255,255)", "11px PingFangSC-Regular"), l <= x) {
                                var f = this.max1 + (this.biggestDiff1Real - this.biggestDiff1) / 2 - this.biggestDiff1Real * (l / x), s = this.measureText("".concat(f.toFixed(2))) || 30;
                                r.default.Fill(this.contextTip, function(t) {
                                    var e = 5 + s + 1;
                                    t.moveTo(1, l - 7), t.lineTo(e, l - 7), t.lineTo(e, l + 6), t.lineTo(1, l + 6), 
                                    t.lineTo(1, l - 7);
                                }, "rgba(51,51,51,0.8)"), r.default.Text(this.contextTip, function(t) {
                                    t.fillText("".concat(f.toFixed(2)), 4, l + 4);
                                }, "rgb(255,255,255)", "11px PingFangSC-Regular"), r.default.Text(this.contextTip, function(e) {
                                    e.textAlign = "left", e.fillText(" ".concat(t.toolTipInfo.turnoverVolume / 100 > 1e4 ? (0, 
                                    o.default)(t.toolTipInfo.turnoverVolume / 100) : t.toolTipInfo.turnoverVolume / 100, "手 "), 0, d + 13);
                                }, "rgb(153,153,153)", "11px PingFangSC-Regular");
                            }
                            if (l >= d) {
                                var m = (1 - (l - d) / (h - d)) * this.biggestDiff3, T = "".concat(m > 1e4 ? (0, 
                                o.default)(m) : m.toFixed(0), "手"), v = this.measureText(T) || 30;
                                r.default.Fill(this.contextTip, function(t) {
                                    var e = 5 + v + 1;
                                    t.moveTo(1, l - 7), t.lineTo(e, l - 7), t.lineTo(e, l + 6), t.lineTo(1, l + 6), 
                                    t.lineTo(1, l - 7);
                                }, "rgba(51,51,51,0.8)"), r.default.Text(this.contextTip, function(t) {
                                    t.fillText(T, 4, l + 4);
                                }, "rgb(255,255,255)", "11px PingFangSC-Regular");
                            }
                            this.contextTip.draw();
                        }
                    }
                }
            },
            mounted: function() {
                this.context || (this.context = wx.createCanvasContext("k-line", this)), this.contextTip || (this.contextTip = wx.createCanvasContext("tool-tip", this));
            },
            beforeDestroy: function() {
                this.context = null, this.contextTip = null, this.touches = null, this.selectedIndex = null;
            },
            methods: {
                drawKline: function(t) {
                    var e = this, n = .1 * b, i = -1, o = function(t) {
                        return e._getY(t, e.max1, e.biggestDiff1, x - 10, 5);
                    };
                    t.forEach(function(l, a) {
                        var c = a * b + n, u = (a + 1) * b - n, f = (c + u) / 2, s = o(Math.max(l.openPx, l.closePx)), x = o(Math.min(l.openPx, l.closePx));
                        if (x - s < 1) {
                            var v = (s + x) / 2;
                            s = v - .5, x = v + .5;
                        }
                        var P = l.openPx > l.closePx ? T : l.openPx === l.closePx ? l.pxChangeRate >= 0 ? m : T : m;
                        function w(t, e, n) {
                            var i = 1;
                            t > p / 2 && (i = 0), r.default.Stroke(this.context, function(n) {
                                n.setLineDash([ 1, 1 ]), n.lineWidth = "0.5", n.moveTo(t, e), n.lineTo(i ? t + 10 : t - 10, e);
                            }, "#000000"), r.default.Text(this.context, function(o) {
                                o.textAlign = i ? "left" : "right", o.fillText("".concat(n.toFixed(2)), i ? t + 10 : t - 10, e + 3);
                            }, "#000000", "8px PingFangSC-Regular");
                        }
                        r.default.FillnStroke(e.context, function(t) {
                            t.lineWidth = "0.5", t.moveTo(c, s), t.lineTo(u, s), t.lineTo(u, x), t.lineTo(c, x), 
                            t.lineTo(c, s);
                        }, P, P), r.default.Stroke(e.context, function(t) {
                            t.lineWidth = "0.5", t.moveTo(f, s), t.lineTo(f, o(l.highPx));
                        }, P), r.default.Stroke(e.context, function(t) {
                            t.lineWidth = "0.5", t.moveTo(f, x), t.lineTo(f, o(l.lowPx));
                        }, P), e.maxKline === l.highPx && w.call(e, f, o(l.highPx), l.highPx), e.minKline === l.lowPx && w.call(e, f, o(l.lowPx), l.lowPx);
                        try {
                            var k, S = !1;
                            if (0 === a ? S = !0 : 86400 === e.kLineType ? (k = l.timeString.split("-")[1], 
                            S = t[a - 1].timeString.split("-")[1] !== k) : 604800 === e.kLineType ? (k = l.timeString.split("-")[1], 
                            S = t[a - 1].timeString.split("-")[1] !== k && ("01" === k || "06" === k)) : (k = l.timeString.split("-")[0], 
                            S = t[a - 1].timeString.split("-")[0] !== k), S) {
                                var D = l.timeString.slice(0, 7), C = e.measureText(D) || 45;
                                0 !== a && (i > f - C / 2 || f + C / 2 > p) || (r.default.Text(e.context, function(t) {
                                    t.textAlign = "center", f - C / 2 < 0 ? (t.textAlign = "left", i = f + C) : i = f + C / 2, 
                                    t.fillText(D, f, g + 13);
                                }, "rgb(130,130,147)", "11px PingFangSC-Regular"), r.default.Stroke(e.context, function(t) {
                                    t.lineWidth = "0.5", t.moveTo(f, 0), t.lineTo(f, g), t.moveTo(f, d), t.lineTo(f, h);
                                }, "rgba(229,229,229,0.8)"));
                            }
                        } catch (t) {
                            console.error(t);
                        }
                    });
                },
                drawMALine: function(t, e, n) {
                    var i = this, o = function(t) {
                        return i._getY(t, i.max1, i.biggestDiff1, x - 10, 5);
                    };
                    r.default.Stroke(this.context, function(n) {
                        n.lineWidth = "0.5";
                        var i = !1;
                        t.sort(function(t, e) {
                            return t.time - e.time;
                        }).forEach(function(t, l) {
                            t[e] <= -999999 || (i ? n.lineTo((l + .5) * b, o(t[e])) : (n.moveTo((l + .5) * b, o(t[e])), 
                            i = !0));
                        });
                    }, n);
                },
                drawTurnover: function(t) {
                    var e = this, n = .1 * b;
                    t.sort(function(t, e) {
                        return t.time - e.time;
                    }).forEach(function(t, i) {
                        if (t.turnoverVolume) {
                            var o = (e.biggestDiff3 - t.turnoverVolume) / e.biggestDiff3 * (h - d) + d, l = m;
                            t.closePx < t.openPx && (l = T), r.default.Fill(e.context, function(t) {
                                var e = i * b + n, l = (i + 1) * b - n;
                                t.moveTo(e, h), t.lineTo(e, o), t.lineTo(l, o), t.lineTo(l, h), t.moveTo(e, h);
                            }, l);
                        }
                    });
                },
                drawGrid: function() {
                    var t = this;
                    r.default.Stroke(this.context, function(t) {
                        t.setLineDash([ 3, 5 ]), t.lineWidth = "0.5", t.moveTo(0, x / 2), t.lineTo(p, x / 2);
                    }, "rgba(229,229,229,0.8)"), r.default.Stroke(this.context, function(t) {
                        t.lineWidth = "0.5", t.moveTo(0, g), t.lineTo(p, g), t.moveTo(0, d), t.lineTo(p, d);
                    }, "rgba(229,229,229,0.8)"), r.default.Text(this.context, function(e) {
                        e.fillText(" ".concat(((t.max1 + t.min1) / 2).toFixed(2)), 0, x / 2 + 3), e.textAlign = "right", 
                        e.fillText("".concat(t.biggestDiff3 > 1e4 ? (0, o.default)(t.biggestDiff3) : t.biggestDiff3, "手 "), p, d + 13), 
                        e.fillText("".concat(t.biggestDiff3 / 2 > 1e4 ? (0, o.default)(t.biggestDiff3 / 2) : Math.round(t.biggestDiff3 / 2), "手 "), p, d + 47);
                    }, "rgb(153,153,153)", "11px PingFangSC-Regular"), r.default.Text(this.context, function(e) {
                        e.fillText(" ".concat((t.max1 + (t.biggestDiff1Real - t.biggestDiff1) / 2).toFixed(2), " "), 0, 12);
                    }, m, "11px PingFangSC-Regular"), r.default.Text(this.context, function(e) {
                        e.fillText(" ".concat((t.min1 - (t.biggestDiff1Real - t.biggestDiff1) / 2).toFixed(2)), 0, g - 3);
                    }, T, "11px PingFangSC-Regular");
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
                measureText: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "11px PingFangSC-Regular";
                    this.contextTip || (this.contextTip = wx.createCanvasContext("tool-tip", this));
                    var n = 0;
                    return r.default.Text(this.contextTip, function(e) {
                        n = e.measureText(t).width || 0;
                    }, "rgb(153,153,153)", e), n;
                },
                _getY: function(t, e, n, i, o) {
                    return (e - t) / n * i + o;
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
                    this.$emit("focusing", null), this.touches = null, this.touching = !1;
                },
                touchcancel: function() {
                    this.$emit("focusing", null), this.touches = null, this.touching = !1;
                }
            }
        };
        e.default = P;
    },
    a3ce: function(t, e, n) {
        n.r(e);
        var i = n("5a25"), o = n("f4bf");
        for (var l in o) "default" !== l && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(l);
        n("5e9d");
        var r = n("2877"), a = Object(r.a)(o.default, i.a, i.b, !1, null, "7d4dc743", null);
        e.default = a.exports;
    },
    f4bf: function(t, e, n) {
        n.r(e);
        var i = n("9e47"), o = n.n(i);
        for (var l in i) "default" !== l && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(l);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/stock/KindsLine/Kline-create-component", {
    "pages/stock/KindsLine/Kline-create-component": function(t, e, n) {
        n("543d").createComponent(n("a3ce"));
    }
}, [ [ "pages/stock/KindsLine/Kline-create-component" ] ] ]);