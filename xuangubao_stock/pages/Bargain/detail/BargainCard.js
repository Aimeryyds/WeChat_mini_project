(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/detail/BargainCard" ], {
    "60fd": function(e, n, t) {},
    "913f": function(e, n, t) {
        t.r(n);
        var a = t("eed1"), o = t("e602");
        for (var i in o) "default" !== i && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        t("a55e");
        var r = t("2877"), c = Object(r.a)(o.default, a.a, a.b, !1, null, "30d45d53", null);
        n.default = c.exports;
    },
    a55e: function(e, n, t) {
        var a = t("60fd");
        t.n(a).a;
    },
    e602: function(e, n, t) {
        t.r(n);
        var a = t("ea44"), o = t.n(a);
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        n.default = o.a;
    },
    ea44: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("4360")), o = t("f8c8"), i = t("ed08"), r = {
            props: {
                activityState: String,
                bargainState: String,
                originalPrice: {
                    type: Number
                },
                bargainMoney: {
                    type: Number
                },
                finish: Boolean
            },
            computed: {
                processPrice: function() {
                    return this.originalPrice ? [ 0, Math.floor(.3 * this.originalPrice), Math.floor(.5 * this.originalPrice), this.originalPrice ] : [];
                },
                token: function() {
                    return a.default.state.user.token;
                },
                phoneNumber: function() {
                    return a.default.state.user.user && a.default.state.user.user.mobile;
                }
            },
            methods: {
                getUserPhone: function(e) {
                    var n = e.detail;
                    if ("getPhoneNumber:ok" !== n.errMsg) return (0, i.dataAnalytic)("bargain_wx_refusemobile_click"), 
                    void wx.showToast({
                        title: "参加活动需要手机号",
                        icon: "none",
                        duration: 1500
                    });
                    (0, i.dataAnalytic)("bargain_wx_agreemobile_click"), (0, o.exchangeMobileWSCN)({
                        encryptedData: n.encryptedData,
                        iv: n.iv
                    }).then(function(e) {
                        console.log("exchangeMobileWSCN error", e), 60205 === e.code ? wx.showToast({
                            title: "该手机号已注册,请在右上角返回首页-点击头像-切换账号后用该手机号登录!",
                            icon: "none",
                            duration: 3500
                        }) : 60243 === e.code ? wx.showToast({
                            title: "网络波动,请重试!",
                            icon: "none",
                            duration: 1500
                        }) : 2e4 !== e.code && e.message && wx.showToast({
                            title: e.message,
                            icon: "none",
                            duration: 1500
                        }), a.default.dispatch("user/updateUserInfo");
                    }).catch(function(e) {
                        wx.showToast({
                            title: "发生错误，请稍后重试！",
                            icon: "none",
                            duration: 1500
                        });
                    });
                },
                formSubmit: function(e) {
                    this.$emit("createBargain");
                    var n = e.detail.formId;
                    n && a.default.state.user.loginInfo && (0, o.submitFormId)({
                        formId: n,
                        openId: a.default.state.user.loginInfo.openId
                    }).then(function() {}).catch(function() {});
                }
            }
        };
        n.default = r;
    },
    eed1: function(e, n, t) {
        var a = function() {
            var e = this, n = (e.$createElement, e._self._c, e.bargainMoney.toFixed(2)), t = (e.originalPrice - e.bargainMoney).toFixed(2), a = Math.ceil(e.bargainMoney / e.originalPrice * 100);
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n,
                    g1: t,
                    g2: a
                }
            });
        }, o = [];
        t.d(n, "a", function() {
            return a;
        }), t.d(n, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Bargain/detail/BargainCard-create-component", {
    "pages/Bargain/detail/BargainCard-create-component": function(e, n, t) {
        t("543d").createComponent(t("913f"));
    }
}, [ [ "pages/Bargain/detail/BargainCard-create-component" ] ] ]);