(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/TitleBarWithCapsule" ], {
    "186e": function(e, n, t) {},
    3878: function(e, n, t) {
        t.r(n);
        var a = t("59a4"), o = t("e6ce");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("8b4b");
        var u = t("2877"), c = Object(u.a)(o.default, a.a, a.b, !1, null, "5b43fdb2", null);
        n.default = c.exports;
    },
    "59a4": function(e, n, t) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        t.d(n, "a", function() {
            return a;
        }), t.d(n, "b", function() {
            return o;
        });
    },
    "8b4b": function(e, n, t) {
        var a = t("186e");
        t.n(a).a;
    },
    "9deb": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            name: "TitleBarWithCapsule",
            props: {
                title: String,
                showLoading: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                TitleBar: function() {
                    return t.e("components/TitleBar").then(t.bind(null, "1e1d"));
                }
            },
            data: function() {
                return {
                    showBack: !0
                };
            },
            onShow: function() {
                var e = getCurrentPages().length;
                this.showBack = e > 1;
            },
            created: function() {
                var e = getCurrentPages().length;
                this.showBack = e > 1;
            }
        };
        n.default = a;
    },
    e6ce: function(e, n, t) {
        t.r(n);
        var a = t("9deb"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/TitleBarWithCapsule-create-component", {
    "components/TitleBarWithCapsule-create-component": function(e, n, t) {
        t("543d").createComponent(t("3878"));
    }
}, [ [ "components/TitleBarWithCapsule-create-component" ] ] ]);