(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Login/LoginMain/main" ], {
    "26cd": function(n, e, t) {},
    6880: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), t("921b"), e(t("66fd")), n(e(t("7bb1")).default);
        }).call(this, t("543d").createPage);
    },
    "6dea": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return a;
        });
    },
    "7bb1": function(n, e, t) {
        t.r(e);
        var o = t("6dea"), a = t("a67a");
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        t("91d2");
        var i = t("2877"), c = Object(i.a)(a.default, o.a, o.b, !1, null, "1309de8a", null);
        e.default = c.exports;
    },
    "91d2": function(n, e, t) {
        var o = t("26cd");
        t.n(o).a;
    },
    a67a: function(n, e, t) {
        t.r(e);
        var o = t("f524"), a = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    },
    f524: function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = o(t("4360")), u = o(t("761b")), i = {
            name: "LoginMain",
            components: {
                TitleBarCapsule: function() {
                    return t.e("components/TitleBarWithCapsule").then(t.bind(null, "3878"));
                },
                LoginPassCard: function() {
                    return t.e("components/LoginPassCard").then(t.bind(null, "16ab"));
                }
            },
            mixins: [ o(t("d05d")).default ],
            data: function() {
                return {};
            },
            onShow: function() {
                a.default.commit("bindAccount/setWscnAccounts", []), a.default.commit("bindAccount/setActiveWscnAccount", null);
            },
            methods: {
                getuserinfo: function(n) {
                    var e = n.mp;
                    (0, u.default)("login_click", {
                        type: "weixin"
                    }), e.detail.userInfo ? (a.default.commit("user/setWxInfo", e.detail.userInfo), 
                    a.default.dispatch("user/wxLogin", e.detail).then(function(n) {
                        n && wx.navigateBack({
                            delta: 1
                        });
                    })) : wx.showToast({
                        title: "选股宝需要你的授权",
                        icon: "none",
                        duration: 1500
                    });
                },
                jumpToPhoneLogin: function() {
                    (0, u.default)("login_click", {
                        type: "phone"
                    }), wx.navigateTo({
                        url: "/pages/Login/LoginWithPhone/main"
                    });
                },
                goToWebview: function() {
                    wx.navigateTo({
                        url: "/pages/WebViewPage/main?src=https://m.xuangubao.cn/agreements/user"
                    });
                }
            }
        };
        e.default = i;
    }
}, [ [ "6880", "common/runtime", "common/vendor" ] ] ]);