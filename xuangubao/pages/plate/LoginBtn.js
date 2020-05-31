(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/plate/LoginBtn" ], {
    "0c3e": function(n, e, t) {
        t.r(e);
        var a = t("749d"), o = t("ae76");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("fdf4");
        var c = t("2877"), f = Object(c.a)(o.default, a.a, a.b, !1, null, "4fced081", null);
        e.default = f.exports;
    },
    "15f3": function(n, e, t) {},
    "749d": function(n, e, t) {
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        t.d(e, "a", function() {
            return a;
        }), t.d(e, "b", function() {
            return o;
        });
    },
    ae76: function(n, e, t) {
        t.r(e);
        var a = t("c19a"), o = t.n(a);
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = o.a;
    },
    c19a: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(t("4360"));
        var o = {
            methods: {
                getuserinfo: function(n) {
                    var e = n.mp;
                    this.$emit("clicklogin"), e.detail.userInfo ? (a.default.commit("user/setWXInfo", e.detail.userInfo), 
                    a.default.dispatch("user/wxLogin", e.detail).then(function(n) {})) : wx.showToast({
                        title: "选股宝需要你的授权",
                        icon: "none",
                        duration: 1500
                    });
                }
            }
        };
        e.default = o;
    },
    fdf4: function(n, e, t) {
        var a = t("15f3");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/plate/LoginBtn-create-component", {
    "pages/plate/LoginBtn-create-component": function(n, e, t) {
        t("543d").createComponent(t("0c3e"));
    }
}, [ [ "pages/plate/LoginBtn-create-component" ] ] ]);