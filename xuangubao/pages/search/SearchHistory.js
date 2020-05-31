(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/SearchHistory" ], {
    1258: function(t, e, a) {
        a.r(e);
        var n = a("8bbb"), r = a.n(n);
        for (var c in n) "default" !== c && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = r.a;
    },
    2114: function(t, e, a) {
        var n = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        a.d(e, "a", function() {
            return n;
        }), a.d(e, "b", function() {
            return r;
        });
    },
    "2f0f": function(t, e, a) {
        var n = a("a61d");
        a.n(n).a;
    },
    "8bbb": function(t, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a("365c"), r = {
            components: {
                HistoryCard: function() {
                    return a.e("pages/search/HistoryCard").then(a.bind(null, "a80f"));
                }
            },
            props: {
                searchRecords: Object
            },
            data: function() {
                return {
                    plates: [],
                    stocks: [],
                    platesData: {}
                };
            },
            watch: {
                searchRecords: {
                    handler: function() {
                        if (!this.searchRecords) return this.plates = [], void (this.stocks = []);
                        var t = this.searchRecords, e = t.plate, a = t.stock;
                        this.plates = e, this.stocks = a, this.fetchPlateData();
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            mounted: function() {
                this.loopFetchPlateData();
            },
            beforeDestroy: function() {
                this.clearTimer();
            },
            methods: {
                clearTimer: function() {
                    this.timer && (clearInterval(this.timer), this.timer = null);
                },
                loopFetchPlateData: function() {
                    var t = this;
                    this.clearTimer(), this.plates.length && (this.timer = setInterval(function() {
                        t.fetchPlateData();
                    }, 5e3));
                },
                fetchPlateData: function() {
                    var t = this;
                    (0, n.getPlateInfo)(this.plates.map(function(t) {
                        return t.key;
                    }).filter(function(t) {
                        return t;
                    }), [ "core_avg_pcp" ]).then(function(e) {
                        t.platesData = e || {};
                    }).catch(function() {});
                }
            }
        };
        e.default = r;
    },
    a61d: function(t, e, a) {},
    f027: function(t, e, a) {
        a.r(e);
        var n = a("2114"), r = a("1258");
        for (var c in r) "default" !== c && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(c);
        a("2f0f");
        var o = a("2877"), s = Object(o.a)(r.default, n.a, n.b, !1, null, "3e450b11", null);
        e.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/search/SearchHistory-create-component", {
    "pages/search/SearchHistory-create-component": function(t, e, a) {
        a("543d").createComponent(a("f027"));
    }
}, [ [ "pages/search/SearchHistory-create-component" ] ] ]);