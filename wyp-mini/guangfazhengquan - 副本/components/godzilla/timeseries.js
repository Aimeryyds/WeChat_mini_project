function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function i(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), s = e(require("./core/view")), a = e(require("./components/price")), r = e(require("./components/xlabel")), l = e(require("./components/volume")), u = e(require("./components/gesture")), c = require("../utils"), h = function(e) {
    function h(e) {
        t(this, h);
        var n = i(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, e));
        return n.initialize(), n.exportCanvas(), n;
    }
    return n(h, s.default), o(h, [ {
        key: "initialize",
        value: function() {
            var e = this.options.bbox, t = e.x0, i = e.y0, n = e.x1, o = e.y1, s = this.options.labels = {
                statics: [],
                dynamics: []
            }, c = this.options.dataCtx, h = this.options.touchCtx, m = this.options.hintCtx;
            this.clearContext();
            var p = this.options.xaxis = this.calcXAxis();
            this.price = new a.default({
                dataCtx: c,
                touchCtx: h,
                hintCtx: m,
                xaxis: p,
                labels: s,
                bbox: {
                    x0: t,
                    y0: i,
                    x1: n,
                    y1: .7 * (o - i)
                }
            }), this.xlabel = new r.default({
                dataCtx: c,
                hintCtx: m,
                xaxis: p,
                labels: s,
                bbox: {
                    x0: t,
                    y0: .7 * (o - i),
                    x1: n,
                    y1: .7 * (o - i) + 20
                },
                dynamics: !1
            }), this.volume = new l.default({
                price_base: this.options.price_base,
                chartType: this.options.chartType,
                typeNumber: this.options.type,
                market: this.options.market,
                type: l.default.const.type.timeshare.volume,
                dataCtx: c,
                hintCtx: m,
                xaxis: p,
                labels: s,
                bbox: {
                    x0: t,
                    y0: .7 * (o - i) + 20,
                    x1: n,
                    y1: o - .5
                }
            }), this.gesture = new u.default({
                dataCtx: c,
                touchCtx: h,
                bbox: {
                    x0: t,
                    y0: i,
                    x1: n,
                    y1: o
                },
                bboxs: [ this.price.options.bbox, this.volume.options.bbox ],
                system: this.options.system,
                onlinestart: this.onlinestart.bind(this),
                onlinefocus: this.onlinefocus.bind(this),
                onlineend: this.onlineend.bind(this)
            }).setXAxis(p);
        }
    }, {
        key: "onlinestart",
        value: function() {
            this.price.onlinestart(), this.xlabel.onlinestart(), this.volume.onlinestart(), 
            this.options.onlinestart();
        }
    }, {
        key: "onlinefocus",
        value: function(e, t) {
            this.price.onlinefocus(e, t), this.xlabel.onlinefocus(e, t), this.volume.onlinefocus(e, t), 
            this.options.onlinefocus(this.data[e]), this.options.touchCtx.draw(), this.options.hintCtx.draw();
        }
    }, {
        key: "onlineend",
        value: function(e) {
            this.price.onlineend(), this.xlabel.onlineend(), this.volume.onlineend(), this.options.onlineend(e);
        }
    }, {
        key: "calcTradingTime",
        value: function() {
            return this.options.type == c.QUOTETYPE.hkstock ? {
                ams: "09:30",
                ame: "12:00",
                pms: "13:00",
                pme: "16:10"
            } : this.options.isReturnBond ? {
                ams: "09:30",
                ame: "11:30",
                pms: "13:00",
                pme: "15:30"
            } : this.options.type == c.QUOTETYPE.us_secu ? {
                ams: "09:30",
                ame: "12:00",
                pms: "12:00",
                pme: "16:00"
            } : {
                ams: "09:30",
                ame: "11:30",
                pms: "13:00",
                pme: "15:00"
            };
        }
    }, {
        key: "calcXAxis",
        value: function() {
            var e = "fiveday" === this.options.chartType, t = this.calcTradingTime(), i = this.transform(t.ams), n = this.transform(t.ame), o = this.transform(t.pms), s = this.transform(t.pme), a = n + s - i - o + 1, r = a, l = {};
            if (e) {
                var u = Math.floor(a / 2);
                l["" + u] = {
                    label: "--",
                    align: "center",
                    margin: {
                        left: "-35"
                    }
                }, l["" + (a + u)] = {
                    label: "--",
                    align: "center",
                    margin: {}
                }, l["" + (2 * a + u)] = {
                    label: "--",
                    align: "center",
                    margin: {}
                }, l["" + (3 * a + u)] = {
                    label: "--",
                    align: "center",
                    margin: {}
                }, l["" + (4 * a + u)] = {
                    label: "--",
                    align: "center",
                    margin: {
                        left: "-65"
                    }
                }, a *= 5;
            } else l[0] = {
                label: t.pme,
                align: "right",
                margin: {}
            }, l[(n - i) / 2 + s - o + ""] = {
                line: !0
            }, l[s - o + ""] = {
                label: this.options.type == c.QUOTETYPE.us_secu ? t.ame : t.ame + "/" + t.pms,
                align: "center",
                line: !0,
                margin: {}
            }, l[(s - o) / 2 + ""] = {
                line: !0
            }, l[a - 1 + ""] = {
                label: t.ams,
                align: "left",
                margin: {}
            };
            for (var h = [], m = 0, p = a; m < p; m++) {
                var f = l[m + ""] || {}, v = {
                    value: m,
                    label: f.label,
                    align: f.align,
                    line: f.line,
                    margin: f.margin
                };
                e && 0 !== m && m % r == 0 && (v.line = !0), h.push(v);
            }
            return h.max = a - 1, h.min = 0, h.tradingTime = t, h.total = a, h;
        }
    }, {
        key: "transform",
        value: function(e) {
            var t = e.indexOf(":");
            return 60 * (e.substring(0, t) - 0) + (e.substring(t + 1) - 0);
        }
    }, {
        key: "setData",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            e.market + "" == this.options.market + "" && e.code + "" == this.options.code + "" && (e = this.data = this.formatData(e), 
            this.clearContext(), this.price.setData(e), this.xlabel.setData(e), this.volume.setData(e), 
            this.gesture.setData(e), this.exportCanvas());
        }
    }, {
        key: "ontouchstart",
        value: function(e) {
            this.gesture.ontouchstart(e);
        }
    }, {
        key: "ontouchmove",
        value: function(e) {
            this.gesture.ontouchmove(e);
        }
    }, {
        key: "ontouchend",
        value: function(e) {
            this.gesture.ontouchend(e);
        }
    }, {
        key: "formatData",
        value: function(e) {
            for (var t = this, i = this.options.xaxis.total, n = [], o = 0, s = i; o < s; o++) n[o] = {
                index: o,
                visible: !1
            };
            e.scale;
            var a = e.pclose, r = "fiveday" === this.options.chartType, l = this.options.xaxis.tradingTime, u = this.transform(l.ams), h = this.transform(l.ame), m = this.transform(l.pms), p = this.transform(l.pme), f = r ? i / 5 : i, v = e.market, d = "ggt" == v || "shgt" == v || "szgt" == v ? 1 : 100;
            (e = e.data).forEach(function(e, i) {
                for (var o = f * i, s = o + u, a = o + h, r = o + m, l = o + p, v = void 0, x = void 0, b = 0, g = e.length; b < g; b++) {
                    var y = e[b], _ = o + t.transform(y.time), w = -1;
                    if (_ >= s && _ <= a && (_ >= a && (_ = a), w = f * (i + 1) - 1 - (_ - s)), _ >= r && _ <= l && (_ >= l && (_ = l), 
                    w = f * (i + 1) - 1 - (_ - r + a - s)), w - v > 1) {
                        x = new Date("2008-08-08 " + x);
                        for (var C = v + 1; C < w; C++) {
                            x = function(e) {
                                var t = e.getMinutes();
                                return new Date(e.setMinutes(t - 1));
                            }(x);
                            var k = (0, c.formatDate)(x, "hh:mm");
                            n[C] = {
                                index: n[C].index,
                                time: k,
                                time_d: k,
                                now: y.price,
                                now_d: (y.price || 0).toFixed(2),
                                pclose: y.pclose,
                                volume: 0,
                                volume_d: 0,
                                avg: y.avg,
                                avg_d: (y.avg || 0).toFixed(2),
                                amount: 0,
                                change: 0,
                                change_d: 0,
                                rise: 0,
                                rise_d: "0%",
                                color: (0, c.getColor)(0),
                                visible: !0
                            };
                        }
                    }
                    var T = y.price - y.pclose || 0, O = T / y.pclose * 100 || 0;
                    n[w] = {
                        index: n[w].index,
                        time: y.time,
                        time_d: y.time,
                        now: y.price,
                        now_d: (y.price || 0).toFixed(2),
                        pclose: y.pclose,
                        volume: y.volume,
                        volume_d: (0, c.getNumeric)(y.volume / d),
                        avg: y.avg,
                        avg_d: t.options.isReturnBond ? "--" : (y.avg || 0).toFixed(2),
                        amount: y.amount,
                        change: T,
                        change_d: T.toFixed(2),
                        rise: O,
                        rise_d: (O > 0 ? "+" + O.toFixed(2) : O.toFixed(2)) + "%",
                        color: (0, c.getColor)(O),
                        visible: !0
                    }, v = w, x = y.time;
                }
            });
            var x = function() {
                for (var e = 0, t = i; e < t; e++) if (n[e].visible) return e;
                return -1;
            }.call(this);
            if (x >= 0) for (var b = x, g = i; b < g; b++) n[b].visible || (n[b].visible = !0);
            return n.pclose = a, n;
        }
    } ]), h;
}();

exports.default = h;