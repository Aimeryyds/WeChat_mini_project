(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/UserCenterMain/ActionItem" ], {
    "0bc9": function(e, n, t) {
        t.r(n);
        var r = t("7082"), a = t("e014");
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        t("d6ad");
        var c = t("2877"), i = Object(c.a)(a.default, r.a, r.b, !1, null, "594ef9ab", null);
        n.default = i.exports;
    },
    "15ea": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = {
            name: "ActionItem",
            props: {
                icon: String,
                text: String,
                url: String
            },
            methods: {
                navigate: function() {
                    this.$emit("clickItem"), this.url && wx.navigateTo({
                        url: this.url
                    });
                }
            }
        };
        n.default = r;
    },
    5429: function(e, n, t) {},
    7082: function(e, n, t) {
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        t.d(n, "a", function() {
            return r;
        }), t.d(n, "b", function() {
            return a;
        });
    },
    d6ad: function(e, n, t) {
        var r = t("5429");
        t.n(r).a;
    },
    e014: function(e, n, t) {
        t.r(n);
        var r = t("15ea"), a = t.n(r);
        for (var o in r) "default" !== o && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        n.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/UserCenter/UserCenterMain/ActionItem-create-component", {
    "pages/UserCenter/UserCenterMain/ActionItem-create-component": function(e, n, t) {
        t("543d").createComponent(t("0bc9"));
    }
}, [ [ "pages/UserCenter/UserCenterMain/ActionItem-create-component" ] ] ]);