(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/BargainCard" ], {
    "078f": function(e, n, t) {
        var a = function() {
            var e = this, n = (e.$createElement, e._self._c, e.bargainMoney.toFixed(2)), t = (e.originalPrice - e.bargainMoney).toFixed(2), a = Math.ceil(e.bargainMoney / e.originalPrice * 100);
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n,
                    g1: t,
                    g2: a
                }
            });
        }, r = [];
        t.d(n, "a", function() {
            return a;
        }), t.d(n, "b", function() {
            return r;
        });
    },
    "0ecc": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("4360")), r = t("f8c8"), o = {
            props: {
                activityState: String,
                bargainState: String,
                originalPrice: {
                    type: Number
                },
                bargainMoney: {
                    type: Number
                },
                paymentOrderNo: String
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
                    "getPhoneNumber:ok" === n.errMsg ? (0, r.exchangeMobileWSCN)({
                        encryptedData: n.encryptedData,
                        iv: n.iv
                    }).then(function(e) {
                        60205 !== e.code ? a.default.dispatch("user/updateUserInfo") : wx.showToast({
                            title: "该手机已被绑定，请以手机号直接登录！",
                            icon: "none",
                            duration: 1500
                        });
                    }).catch(function(e) {
                        wx.showToast({
                            title: "发生错误，请稍后重试！",
                            icon: "none",
                            duration: 1500
                        });
                    }) : wx.showToast({
                        title: "参加活动需要手机号",
                        icon: "none",
                        duration: 1500
                    });
                },
                formSubmit: function(e) {
                    this.$emit("createBargain");
                    var n = e.detail.formId;
                    n && a.default.state.user.loginInfo && (0, r.submitFormId)({
                        formId: n,
                        openId: a.default.state.user.loginInfo.openId
                    }).then(function() {}).catch(function() {});
                },
                jumpToOrderList: function() {
                    wx.navigateTo({
                        url: "/pages/UserCenter/MyOrders/main"
                    });
                }
            }
        };
        n.default = o;
    },
    "12e4": function(e, n, t) {
        t.r(n);
        var a = t("078f"), r = t("b8d3");
        for (var o in r) "default" !== o && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        t("586c");
        var i = t("2877"), u = Object(i.a)(r.default, a.a, a.b, !1, null, "36d80224", null);
        n.default = u.exports;
    },
    1562: function(e, n, t) {},
    "586c": function(e, n, t) {
        var a = t("1562");
        t.n(a).a;
    },
    b8d3: function(e, n, t) {
        t.r(n);
        var a = t("0ecc"), r = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Bargain/BargainCard-create-component", {
    "pages/Bargain/BargainCard-create-component": function(e, n, t) {
        t("543d").createComponent(t("12e4"));
    }
}, [ [ "pages/Bargain/BargainCard-create-component" ] ] ]);