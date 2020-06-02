(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/orderDetail/orderDetail" ], {
    "205c": function(n, a, e) {},
    "2c14": function(n, a, e) {
        e.r(a);
        var t = e("70a5"), o = e("5124");
        for (var u in o) "default" !== u && function(n) {
            e.d(a, n, function() {
                return o[n];
            });
        }(u);
        e("c8a0");
        var r = e("f0c5"), c = Object(r.a)(o.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        a.default = c.exports;
    },
    5124: function(n, a, e) {
        e.r(a);
        var t = e("8ea7"), o = e.n(t);
        for (var u in t) "default" !== u && function(n) {
            e.d(a, n, function() {
                return t[n];
            });
        }(u);
        a.default = o.a;
    },
    "70a5": function(n, a, e) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
        e.d(a, "b", function() {
            return t;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {});
    },
    "79aa": function(n, a, e) {
        (function(n) {
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("e027"), a(e("66fd")), n(a(e("2c14")).default);
        }).call(this, e("543d").createPage);
    },
    "8ea7": function(n, a, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = t(e("5f18")), u = t(e("af1c"));
            t(e("0a9e"));
            var r = new u.default(), c = {
                data: function() {
                    return {
                        loadSuccessFlag: !1,
                        orderData: {}
                    };
                },
                onLoad: function(a) {
                    var e = this;
                    n.getStorageSync("userId"), r.get(o.default.url_online + "/api/v4/bill/info", {
                        id: a.orderId
                    }).then(function(n) {
                        console.log(n);
                        var a = n.data;
                        e.orderData = a, e.loadSuccessFlag = !0;
                    });
                },
                methods: {}
            };
            a.default = c;
        }).call(this, e("543d").default);
    },
    c8a0: function(n, a, e) {
        var t = e("205c");
        e.n(t).a;
    }
}, [ [ "79aa", "common/runtime", "common/vendor" ] ] ]);