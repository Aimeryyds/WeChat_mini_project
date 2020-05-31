(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/plate/MainInfo" ], {
    "6b5f": function(n, e, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return a;
        });
    },
    "80d3": function(n, e, t) {
        t.r(e);
        var o = t("f893"), a = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    a16f: function(n, e, t) {
        t.r(e);
        var o = t("6b5f"), a = t("80d3");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("d62c");
        var c = t("2877"), f = Object(c.a)(a.default, o.a, o.b, !1, null, "1ab3e93c", null);
        e.default = f.exports;
    },
    b353: function(n, e, t) {},
    d62c: function(n, e, t) {
        var o = t("b353");
        t.n(o).a;
    },
    f893: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = t("4be4"), a = {
            components: {
                PercentNumber: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/PercentNumber") ]).then(t.bind(null, "7597"));
                }
            },
            props: {
                info: Object
            },
            computed: {
                formatCir: function() {
                    var n = this.info && this.info.fundFlow;
                    if (!n) return "--";
                    var e, t = (0, o.approxNumber)(n);
                    try {
                        e = parseFloat(t).toFixed(1);
                    } catch (n) {}
                    return "".concat(e).concat(t.slice(-1));
                }
            }
        };
        e.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/plate/MainInfo-create-component", {
    "pages/plate/MainInfo-create-component": function(n, e, t) {
        t("543d").createComponent(t("a16f"));
    }
}, [ [ "pages/plate/MainInfo-create-component" ] ] ]);