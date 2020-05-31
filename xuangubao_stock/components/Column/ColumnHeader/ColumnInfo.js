(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Column/ColumnHeader/ColumnInfo" ], {
    "04b9": function(n, o, e) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
        e.d(o, "a", function() {
            return t;
        }), e.d(o, "b", function() {
            return u;
        });
    },
    2122: function(n, o, e) {
        e.r(o);
        var t = e("7370"), u = e.n(t);
        for (var a in t) "default" !== a && function(n) {
            e.d(o, n, function() {
                return t[n];
            });
        }(a);
        o.default = u.a;
    },
    3259: function(n, o, e) {},
    7370: function(n, o, e) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var t = e("ed08"), u = {
            props: {
                subject: {
                    type: Object
                }
            },
            computed: {
                subscribeCount: function() {
                    return (0, t.numberToLocale)(this.subject.subscribeCount, {
                        fixedDigit: 1
                    });
                },
                followerCount: function() {
                    return (0, t.numberToLocale)(this.subject.followerCount, {
                        fixedDigit: 1
                    });
                }
            }
        };
        o.default = u;
    },
    a6a3: function(n, o, e) {
        e.r(o);
        var t = e("04b9"), u = e("2122");
        for (var a in u) "default" !== a && function(n) {
            e.d(o, n, function() {
                return u[n];
            });
        }(a);
        e("c7e3");
        var c = e("2877"), r = Object(c.a)(u.default, t.a, t.b, !1, null, "a3f2da56", null);
        o.default = r.exports;
    },
    c7e3: function(n, o, e) {
        var t = e("3259");
        e.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Column/ColumnHeader/ColumnInfo-create-component", {
    "components/Column/ColumnHeader/ColumnInfo-create-component": function(n, o, e) {
        e("543d").createComponent(e("a6a3"));
    }
}, [ [ "components/Column/ColumnHeader/ColumnInfo-create-component" ] ] ]);