(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Topic/TopicHeader/TopicBkj" ], {
    "1dc3": function(n, t, e) {},
    2651: function(n, t, e) {
        e.r(t);
        var o = e("68b4"), c = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = c.a;
    },
    "39c4": function(n, t, e) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(t) {
                return n.$emit("clickStock", t);
            });
        }, c = [];
        e.d(t, "a", function() {
            return o;
        }), e.d(t, "b", function() {
            return c;
        });
    },
    "68b4": function(n, t, e) {
        function o(n, t) {
            return i(n) || r(n, t) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function r(n, t) {
            var e = [], o = !0, c = !1, r = void 0;
            try {
                for (var i, a = n[Symbol.iterator](); !(o = (i = a.next()).done) && (e.push(i.value), 
                !t || e.length !== t); o = !0) ;
            } catch (n) {
                c = !0, r = n;
            } finally {
                try {
                    o || null == a.return || a.return();
                } finally {
                    if (c) throw r;
                }
            }
            return e;
        }
        function i(n) {
            if (Array.isArray(n)) return n;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = e("f8c8"), u = {
            components: {
                StockCards: function() {
                    return e.e("components/StockCards").then(e.bind(null, "d1be"));
                },
                TopicBkjHeader: function() {
                    return e.e("components/Topic/TopicHeader/TopicBkj/TopicBkjHeader").then(e.bind(null, "2856"));
                }
            },
            props: {
                subject: {
                    type: Object
                }
            },
            data: function() {
                return {
                    bkjInfo: null,
                    longtou: []
                };
            },
            watch: {
                subject: function(n, t) {
                    this.subject && n !== t && this.getWowsDetail();
                }
            },
            mounted: function() {
                this.getWowsDetail();
            },
            onUnload: function() {
                this.bkjInfo = null, this.longtou = [];
            },
            methods: {
                getWowsDetail: function() {
                    var n = this;
                    Promise.all([ (0, a.getPlatesDetail)([ this.subject.bkjId ]), (0, a.getPlateTopStocks)(this.subject.bkjId) ]).then(function(t) {
                        var e = o(t, 2), c = e[0], r = e[1];
                        c && (n.bkjInfo = c), r && (n.longtou = r.map(function(n) {
                            return {
                                pcp: n.pcp,
                                name: n.prodName,
                                symbol: n.code
                            };
                        }));
                    });
                }
            }
        };
        t.default = u;
    },
    7126: function(n, t, e) {
        e.r(t);
        var o = e("39c4"), c = e("2651");
        for (var r in c) "default" !== r && function(n) {
            e.d(t, n, function() {
                return c[n];
            });
        }(r);
        e("764a");
        var i = e("2877"), a = Object(i.a)(c.default, o.a, o.b, !1, null, "68ecd2aa", null);
        t.default = a.exports;
    },
    "764a": function(n, t, e) {
        var o = e("1dc3");
        e.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Topic/TopicHeader/TopicBkj-create-component", {
    "components/Topic/TopicHeader/TopicBkj-create-component": function(n, t, e) {
        e("543d").createComponent(e("7126"));
    }
}, [ [ "components/Topic/TopicHeader/TopicBkj-create-component" ] ] ]);