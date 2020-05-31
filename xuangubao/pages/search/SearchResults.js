(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/SearchResults" ], {
    "0a55": function(t, e, n) {
        n.r(e);
        var c = n("47c7"), o = n("6b08");
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        n("c189");
        var r = n("2877"), a = Object(r.a)(o.default, c.a, c.b, !1, null, "7090ecf4", null);
        e.default = a.exports;
    },
    "1c1f": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = n("365c"), o = {
            components: {
                PercentNumber: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/PercentNumber") ]).then(n.bind(null, "7597"));
                },
                HighLightkeyword: function() {
                    return n.e("components/HighLightkeyword").then(n.bind(null, "f531"));
                },
                BottomTip: function() {
                    return n.e("components/BottomTip").then(n.bind(null, "d848"));
                }
            },
            props: {
                keyword: String,
                searchResults: Object
            },
            data: function() {
                return {
                    plates: [],
                    stocks: [],
                    stocksPrice: null
                };
            },
            watch: {
                searchResults: {
                    handler: function() {
                        var t = this;
                        if (this.searchResults) {
                            var e = this.searchResults, n = e.plate, o = e.stock;
                            n && n.total ? this.plates = n.items.slice(0, 10) : this.plates = [], o && o.total ? (this.stocks = o.items, 
                            (0, c.getStockReal)(this.stocks.map(function(t) {
                                return t.key;
                            }).filter(function(t) {
                                return t;
                            }), [ "price" ]).then(function(e) {
                                t.stocksPrice = e || null;
                            }).catch(function() {})) : this.stocks = [];
                        }
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                toFixed: function(t) {
                    return t.toFixed(2);
                }
            }
        };
        e.default = o;
    },
    "47c7": function(t, e, n) {
        var c = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return c;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    "6b08": function(t, e, n) {
        n.r(e);
        var c = n("1c1f"), o = n.n(c);
        for (var s in c) "default" !== s && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(s);
        e.default = o.a;
    },
    b173: function(t, e, n) {},
    c189: function(t, e, n) {
        var c = n("b173");
        n.n(c).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/search/SearchResults-create-component", {
    "pages/search/SearchResults-create-component": function(t, e, n) {
        n("543d").createComponent(n("0a55"));
    }
}, [ [ "pages/search/SearchResults-create-component" ] ] ]);