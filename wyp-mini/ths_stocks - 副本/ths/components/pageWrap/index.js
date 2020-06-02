(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/pageWrap/index" ], {
    "2d7b": function(n, e, t) {
        t.r(e);
        var o = t("9ded"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    "4bfe": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
    },
    "800b": function(n, e, t) {
        var o = t("b087");
        t.n(o).a;
    },
    "9ded": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, getApp().globalData;
        var o = {
            data: function() {
                return {
                    isX: !1
                };
            },
            components: {},
            props: {},
            beforeMount: function() {
                getApp().globalData.isX && this.setData({
                    isX: !0
                });
            },
            methods: {}
        };
        e.default = o;
    },
    b087: function(n, e, t) {},
    e1f4: function(n, e, t) {
        t.r(e);
        var o = t("4bfe"), a = t("2d7b");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("800b");
        var r = t("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/pageWrap/index-create-component", {
    "components/pageWrap/index-create-component": function(n, e, t) {
        t("543d").createComponent(t("e1f4"));
    }
}, [ [ "components/pageWrap/index-create-component" ] ] ]);