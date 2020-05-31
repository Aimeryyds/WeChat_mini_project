(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/EmptyHolder" ], {
    "0c4d": function(t, n, e) {
        e.r(n);
        var a = e("f37a"), o = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    },
    6984: function(t, n, e) {
        var a = e("6c15");
        e.n(a).a;
    },
    "6c15": function(t, n, e) {},
    "7ada": function(t, n, e) {
        e.r(n);
        var a = e("dbcb"), o = e("0c4d");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("6984");
        var u = e("2877"), c = Object(u.a)(o.default, a.a, a.b, !1, null, "a60b5eea", null);
        n.default = c.exports;
    },
    dbcb: function(t, n, e) {
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        e.d(n, "a", function() {
            return a;
        }), e.d(n, "b", function() {
            return o;
        });
    },
    f37a: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            data: function() {
                return {
                    today: new Date(),
                    img1: "https://image.xuangubao.cn/Fnt27oWlbvHt2oFqDUPEIu5VexlL",
                    img2: "https://image.xuangubao.cn/FrCc5TAni3PWgdY0Re6TQBjnObwA"
                };
            },
            props: {
                loading: Boolean,
                tradingDay: Boolean
            },
            computed: {
                rushWorking: function() {
                    var t = new Date(this.today).setHours(9, 0, 0, 0), n = new Date(this.today).setHours(9, 25, 0, 0);
                    return this.tradingDay && this.today > t && this.today < n;
                }
            }
        };
        n.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/EmptyHolder-create-component", {
    "pages/home/EmptyHolder-create-component": function(t, n, e) {
        e("543d").createComponent(e("7ada"));
    }
}, [ [ "pages/home/EmptyHolder-create-component" ] ] ]);