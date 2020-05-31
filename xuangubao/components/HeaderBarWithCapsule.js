(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/HeaderBarWithCapsule" ], {
    "0814": function(e, n, t) {},
    "09bd": function(e, n, t) {
        t.r(n);
        var a = t("5bda"), o = t("439f");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("b80a");
        var u = t("2877"), c = Object(u.a)(o.default, a.a, a.b, !1, null, "18bbf942", null);
        n.default = c.exports;
    },
    "0ac0": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            components: {
                HeaderBarWithTitle: function() {
                    return t.e("components/HeaderBarWithTitle").then(t.bind(null, "2860"));
                }
            },
            props: {
                title: {
                    type: String,
                    default: ""
                },
                showLoading: {
                    type: Boolean,
                    default: !1
                },
                theme: {
                    type: String,
                    default: "light"
                }
            },
            data: function() {
                return {
                    showBack: !0
                };
            },
            created: function() {
                var e = getCurrentPages().length;
                this.showBack = e > 1;
            }
        };
        n.default = a;
    },
    "439f": function(e, n, t) {
        t.r(n);
        var a = t("0ac0"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    "5bda": function(e, n, t) {
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        t.d(n, "a", function() {
            return a;
        }), t.d(n, "b", function() {
            return o;
        });
    },
    b80a: function(e, n, t) {
        var a = t("0814");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/HeaderBarWithCapsule-create-component", {
    "components/HeaderBarWithCapsule-create-component": function(e, n, t) {
        t("543d").createComponent(t("09bd"));
    }
}, [ [ "components/HeaderBarWithCapsule-create-component" ] ] ]);