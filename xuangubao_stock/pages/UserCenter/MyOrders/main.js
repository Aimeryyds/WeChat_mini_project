(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/MyOrders/main" ], {
    "0238": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = t("f8c8"), o = {
            components: {
                OrderItem: function() {
                    return t.e("pages/UserCenter/MyOrders/OrderItem").then(t.bind(null, "8a70"));
                },
                TitleBarCapsule: function() {
                    return t.e("components/TitleBarWithCapsule").then(t.bind(null, "3878"));
                }
            },
            data: function() {
                return {
                    orderList: [],
                    showLoading: !1
                };
            },
            onShow: function() {
                var n = this;
                (0, r.getOrderList)().then(function(e) {
                    n.orderList = e.items || [];
                });
            },
            onPullDownRefresh: function() {
                var n = this;
                this.showLoading = !0, (0, r.getOrderList)().then(function(e) {
                    e.items && (n.orderList = e.items), wx.stopPullDownRefresh(), n.showLoading = !1;
                }).catch(function() {
                    wx.stopPullDownRefresh(), n.showLoading = !1;
                });
            }
        };
        e.default = o;
    },
    "69bb": function(n, e, t) {
        t.r(e);
        var r = t("d1e9"), o = t("d2be");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("f240");
        var i = t("2877"), a = Object(i.a)(o.default, r.a, r.b, !1, null, "378ff0de", null);
        e.default = a.exports;
    },
    a517: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), t("921b"), e(t("66fd")), n(e(t("69bb")).default);
        }).call(this, t("543d").createPage);
    },
    d1e9: function(n, e, t) {
        var r = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
        t.d(e, "a", function() {
            return r;
        }), t.d(e, "b", function() {
            return o;
        });
    },
    d2be: function(n, e, t) {
        t.r(e);
        var r = t("0238"), o = t.n(r);
        for (var u in r) "default" !== u && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(u);
        e.default = o.a;
    },
    f240: function(n, e, t) {
        var r = t("fd2f");
        t.n(r).a;
    },
    fd2f: function(n, e, t) {}
}, [ [ "a517", "common/runtime", "common/vendor" ] ] ]);