(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/PriceText" ], {
    "0518": function(e, t, n) {
        n.r(t);
        var a = n("d6aa"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    6011: function(e, t, n) {
        n.r(t);
        var a = n("ed9b"), o = n("0518");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("6aac");
        var c = n("2877"), u = Object(c.a)(o.default, a.a, a.b, !1, null, "eb89bef4", null);
        t.default = u.exports;
    },
    "6aac": function(e, t, n) {
        var a = n("ebb2");
        n.n(a).a;
    },
    d6aa: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = n("4be4"), o = {
            props: {
                price: {
                    type: Number,
                    default: 16
                },
                type: {
                    type: String,
                    default: "primary"
                },
                size1: {
                    type: [ String, Number ],
                    default: 32
                },
                size2: {
                    type: [ String, Number ],
                    default: 17
                },
                hasUnit: {
                    type: Boolean,
                    default: !0
                },
                unit: {
                    type: String,
                    default: "元宝"
                },
                customstyle: {
                    type: String
                }
            },
            computed: {
                priceDesc: function() {
                    return (0, a.toFixed)(this.price, 2);
                }
            }
        };
        t.default = o;
    },
    ebb2: function(e, t, n) {},
    ed9b: function(e, t, n) {
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
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/PriceText-create-component", {
    "components/PriceText-create-component": function(e, t, n) {
        n("543d").createComponent(n("6011"));
    }
}, [ [ "components/PriceText-create-component" ] ] ]);