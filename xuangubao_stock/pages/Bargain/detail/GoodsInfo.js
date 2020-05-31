(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/detail/GoodsInfo" ], {
    "58f6": function(n, e, o) {
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, t = [];
        o.d(e, "a", function() {
            return a;
        }), o.d(e, "b", function() {
            return t;
        });
    },
    "5d4b": function(n, e, o) {
        o.r(e);
        var a = o("93ec"), t = o.n(a);
        for (var r in a) "default" !== r && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(r);
        e.default = t.a;
    },
    9387: function(n, e, o) {
        o.r(e);
        var a = o("58f6"), t = o("5d4b");
        for (var r in t) "default" !== r && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(r);
        o("c900");
        var c = o("2877"), u = Object(c.a)(t.default, a.a, a.b, !1, null, "22445523", null);
        e.default = u.exports;
    },
    "93ec": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            components: {
                GoodsSwiper: function() {
                    return o.e("pages/Bargain/GoodsSwiper").then(o.bind(null, "6b20"));
                }
            },
            props: {
                userInfo: {
                    type: Object
                },
                goodsInfo: {
                    type: Object,
                    required: !0
                },
                imgs: Array
            }
        };
        e.default = a;
    },
    bec9: function(n, e, o) {},
    c900: function(n, e, o) {
        var a = o("bec9");
        o.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Bargain/detail/GoodsInfo-create-component", {
    "pages/Bargain/detail/GoodsInfo-create-component": function(n, e, o) {
        o("543d").createComponent(o("9387"));
    }
}, [ [ "pages/Bargain/detail/GoodsInfo-create-component" ] ] ]);