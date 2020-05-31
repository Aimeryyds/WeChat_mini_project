(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/MyOrders/OrderItem" ], {
    "3d47": function(e, n, r) {
        r.r(n);
        var t = r("a895"), a = r.n(t);
        for (var o in t) "default" !== o && function(e) {
            r.d(n, e, function() {
                return t[e];
            });
        }(o);
        n.default = a.a;
    },
    "8a70": function(e, n, r) {
        r.r(n);
        var t = r("f9f0"), a = r("3d47");
        for (var o in a) "default" !== o && function(e) {
            r.d(n, e, function() {
                return a[e];
            });
        }(o);
        r("92f6");
        var c = r("2877"), u = Object(c.a)(a.default, t.a, t.b, !1, null, null, null);
        n.default = u.exports;
    },
    "92f6": function(e, n, r) {
        var t = r("cc4f");
        r.n(t).a;
    },
    a895: function(e, n, r) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            props: {
                orderDetail: Object
            },
            data: function() {
                return {
                    mapperStatus: {
                        pending_payment: "待付款",
                        pending_ship: "待发货",
                        pending_receipt: "待收货",
                        trade_success: "交易成功",
                        trade_close: "交易关闭"
                    }
                };
            }
        };
        n.default = t;
    },
    cc4f: function(e, n, r) {},
    f9f0: function(e, n, r) {
        var t = function() {
            var e = this, n = (e.$createElement, e._self._c, (e.orderDetail.finalPrice / 100).toFixed(2));
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n
                }
            });
        }, a = [];
        r.d(n, "a", function() {
            return t;
        }), r.d(n, "b", function() {
            return a;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/UserCenter/MyOrders/OrderItem-create-component", {
    "pages/UserCenter/MyOrders/OrderItem-create-component": function(e, n, r) {
        r("543d").createComponent(r("8a70"));
    }
}, [ [ "pages/UserCenter/MyOrders/OrderItem-create-component" ] ] ]);