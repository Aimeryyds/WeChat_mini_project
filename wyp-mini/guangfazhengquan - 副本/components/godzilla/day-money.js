function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function o(t, e) {
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

var a = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var r = e[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, o, r) {
        return o && t(e.prototype, o), r && t(e, r), e;
    };
}(), n = t(require("./core/view")), i = t(require("./components/doughnut")), l = t(require("./components/pie")), u = t(require("./core/brush")), s = require("../utils"), p = function(t) {
    function p(t) {
        e(this, p);
        var r = o(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, t));
        return r.initialize(), r.exportCanvas(), r;
    }
    return r(p, n.default), a(p, [ {
        key: "initialize",
        value: function() {
            var t = this.options.labels = {
                statics: [],
                dynamics: []
            }, e = this.options.shapes = [], o = this.options.dataCtx;
            this.clearContext();
            var r = this.options.bbox, a = r.x0, n = r.y0, u = r.x1, s = r.y1, p = Math.abs(s - n) < Math.abs(u - a) ? Math.abs(s - n) / 2 - 15 : Math.abs(u - a) / 2 - 15;
            this.doughnut = new i.default({
                dataCtx: o,
                labels: t,
                shapes: e,
                bbox: {
                    x0: a,
                    y0: n,
                    x1: u,
                    y1: s
                },
                startAngle: 0,
                radius: Math.floor(1 * p * .7),
                thickness: Math.floor(.4 * p * .7)
            }), this.pie = new l.default({
                dataCtx: o,
                labels: t,
                shapes: e,
                bbox: {
                    x0: a,
                    y0: n,
                    x1: u,
                    y1: s
                },
                startAngle: 0,
                radius: Math.floor(.7 * p * .7)
            });
        }
    }, {
        key: "setData",
        value: function(t) {
            var e = t.id, o = void 0 === e ? {} : e, r = t.capflow, a = void 0 === r ? {} : r;
            if (o.market + "" == this.options.market + "" && o.code + "" == this.options.code + "") {
                if (this.clearContext(), 0 == a.total || null === a.total) return this.drawNoRecord(), 
                void this.exportCanvas();
                var n = [ {
                    value: a.hout,
                    prop: a.houtprop / 100,
                    outterLabel: "超大单",
                    color: "#409057",
                    type: "out"
                }, {
                    value: a.bout,
                    prop: a.boutprop / 100,
                    outterLabel: "大单",
                    color: "#52b66e",
                    type: "out"
                }, {
                    value: a.mout,
                    prop: a.moutprop / 100,
                    outterLabel: "中单",
                    color: "#5dcc83",
                    type: "out"
                }, {
                    value: a.sout,
                    prop: a.soutprop / 100,
                    outterLabel: "小单",
                    color: "#67e193",
                    type: "out"
                }, {
                    value: a.sin,
                    prop: a.sinprop / 100,
                    outterLabel: "小单",
                    color: "#FF7E7E",
                    type: "in"
                }, {
                    value: a.min,
                    prop: a.minprop / 100,
                    outterLabel: "中单",
                    color: "#FF5A5A",
                    type: "in"
                }, {
                    value: a.bin,
                    prop: a.binprop / 100,
                    outterLabel: "大单",
                    color: "#F91A1A",
                    type: "in"
                }, {
                    value: a.hin,
                    prop: a.hinprop / 100,
                    outterLabel: "超大单",
                    color: "#D90909",
                    type: "in"
                } ], i = a.time + "", l = i.substring(0, 4), u = i.substring(4, 6), s = i.substring(6, 8), p = {
                    data: n,
                    time: l + "-" + u + "-" + s,
                    total: a.total
                };
                this.doughnut.setData(p), this.pie.setData({
                    data: [ {
                        value: "资金分布",
                        innerLabel: "资金分布",
                        color: "#333",
                        fontSize: 14
                    }, {
                        value: l + "-" + u + "-" + s,
                        innerLabel: l + "-" + u + "-" + s,
                        color: "#333",
                        fontSize: 12
                    } ]
                }), this.exportCanvas();
            }
        }
    }, {
        key: "drawValue",
        value: function(t) {
            var e = this.options, o = e.bbox;
            e.shapes, e.labels, o.x0, o.y0, o.x1, o.y1;
        }
    }, {
        key: "drawLegend",
        value: function() {
            for (var t = this.options, e = t.bbox, o = t.shapes, r = t.labels, a = (e.x0, e.y0, 
            e.x1 - 30), n = e.y1 - 30, i = [ {
                label: "卖出",
                color: (0, s.getColor)(-1)
            }, {
                label: "买入",
                color: (0, s.getColor)(1)
            } ], l = 0, p = i.length; l < p; l++) {
                var c = i[l], b = a, h = n - 20 * l;
                o.push({
                    id: (0, s.getUnique)(),
                    hold: "\n          position:absolute;\n          left: " + b + "px;\n          top: " + h + "px;\n          width: 8px;\n          height: 8px;\n          background-color: " + c.color + ";\n        "
                }), r.dynamics.push(u.default.label({
                    text: c.label,
                    options: {
                        x: b + 15,
                        y: h,
                        width: 30,
                        size: 13,
                        align: "left",
                        opacity: .8,
                        zIndex: 0,
                        margin: {
                            left: 0,
                            top: -4
                        }
                    }
                }));
            }
        }
    } ]), p;
}();

exports.default = p;