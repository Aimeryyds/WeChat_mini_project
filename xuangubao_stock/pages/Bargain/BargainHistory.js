(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/BargainHistory" ], {
    "1cd7": function(a, n, r) {
        r.r(n);
        var e = r("ab49"), t = r.n(e);
        for (var o in e) "default" !== o && function(a) {
            r.d(n, a, function() {
                return e[a];
            });
        }(o);
        n.default = t.a;
    },
    "8a9f": function(a, n, r) {
        r.r(n);
        var e = r("bc97"), t = r("1cd7");
        for (var o in t) "default" !== o && function(a) {
            r.d(n, a, function() {
                return t[a];
            });
        }(o);
        r("d4c9");
        var i = r("2877"), c = Object(i.a)(t.default, e.a, e.b, !1, null, "e9a675ac", null);
        n.default = c.exports;
    },
    ab49: function(a, n, r) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var e = {
            props: {
                bargainRecord: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                bargainHelpText: {
                    type: String
                },
                ellipseMaskColor: {
                    type: String,
                    default: "rgb(250, 250, 252)"
                }
            },
            data: function() {
                return {
                    records: []
                };
            },
            watch: {
                bargainRecord: {
                    handler: function() {
                        this.bargainRecord && Array.isArray(this.bargainRecord) ? this.records = this.bargainRecord.slice(0, 2) : this.records = [];
                    },
                    immediate: !0
                }
            },
            methods: {
                clickMore: function() {
                    this.records = this.bargainRecord;
                }
            }
        };
        n.default = e;
    },
    bc97: function(a, n, r) {
        var e = function() {
            var a = this;
            a.$createElement;
            a._self._c;
        }, t = [];
        r.d(n, "a", function() {
            return e;
        }), r.d(n, "b", function() {
            return t;
        });
    },
    d235: function(a, n, r) {},
    d4c9: function(a, n, r) {
        var e = r("d235");
        r.n(e).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Bargain/BargainHistory-create-component", {
    "pages/Bargain/BargainHistory-create-component": function(a, n, r) {
        r("543d").createComponent(r("8a9f"));
    }
}, [ [ "pages/Bargain/BargainHistory-create-component" ] ] ]);