(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ths-headline/ths-headline" ], {
    "0176": function(n, t, e) {
        e.r(t);
        var a = e("b07b"), o = e("56b0");
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("33c4");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "90a41b42", null, !1, a.a, void 0);
        t.default = u.exports;
    },
    "33c4": function(n, t, e) {
        var a = e("7c83");
        e.n(a).a;
    },
    "56b0": function(n, t, e) {
        e.r(t);
        var a = e("74da"), o = e.n(a);
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = o.a;
    },
    "74da": function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                props: [ "newsList", "upDate" ],
                data: function() {
                    return {
                        interval: 2500,
                        duration: 500,
                        showState: !0
                    };
                },
                methods: {
                    change: function() {
                        this.showState = !this.showState;
                    },
                    jumpNews: function(t) {
                        n.navigateTo({
                            url: "/pages/article/article?seq=".concat(t.seq)
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    "7c83": function(n, t, e) {},
    b07b: function(n, t, e) {
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ths-headline/ths-headline-create-component", {
    "components/ths-headline/ths-headline-create-component": function(n, t, e) {
        e("543d").createComponent(e("0176"));
    }
}, [ [ "components/ths-headline/ths-headline-create-component" ] ] ]);