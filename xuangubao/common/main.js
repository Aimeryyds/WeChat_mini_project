(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "23be": function(e, n, t) {
        t.r(n);
        var o = t("f342"), u = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = u.a;
    },
    "3dfd": function(e, n, t) {
        t.r(n);
        var o = t("23be");
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        t("5c0b");
        var a = t("2877"), r = Object(a.a)(o.default, void 0, void 0, !1, null, null, null);
        n.default = r.exports;
    },
    "56d7": function(e, n, t) {
        (function(e) {
            t("6cdc"), t("921b");
            var n = u(t("66fd")), o = u(t("3dfd"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            n.default.config.productionTip = !1, n.default.config.warnHandler = function(e, n, t) {}, 
            o.default.mpType = "app", e(new n.default(function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {}, o = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }))), o.forEach(function(n) {
                        a(e, n, t[n]);
                    });
                }
                return e;
            }({}, o.default))).$mount();
        }).call(this, t("543d").createApp);
    },
    "5bf8": function(e, n, t) {},
    "5c0b": function(e, n, t) {
        var o = t("5bf8");
        t.n(o).a;
    },
    f342: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, t("d2a4");
        var o = c(t("4360")), u = c(t("6988")), a = t("365c"), r = t("761b");
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var f = {
            onLaunch: function() {
                try {
                    var e = wx.getSystemInfoSync();
                    o.default.commit("device/setDeviceInfo", e);
                } catch (e) {}
                if (u.default.login().then(function(e) {
                    (0, a.getWeixiInfoWSCN)({
                        code: e.code
                    }).then(function(e) {
                        var n = e.code, t = e.data;
                        2e4 === n && (o.default.commit("user/setLoginInfo", {
                            openId: t.openid,
                            unionId: t.unionid
                        }), r.Taotie.asyncInitWithCommonData({
                            device_id: t.openid
                        }).then(function() {
                            var e = o.default.state.user.wxInfo, n = o.default.state.user.xgbInfo;
                            r.Taotie.resetCommonData({
                                uid: n ? +n.id : 0,
                                userInfo: e && {
                                    city: e.city,
                                    country: e.country,
                                    gender: e.gender,
                                    language: e.language,
                                    nickName: e.nickName,
                                    province: e.province
                                }
                            });
                        }));
                    });
                }), u.default.getSetting().then(function(e) {
                    e.authSetting["scope.userInfo"] && u.default.getUserInfo().then(function(e) {
                        e.userInfo && o.default.commit("user/setWXInfo", e.userInfo);
                    });
                }), wx.canIUse("getUpdateManager")) {
                    var n = wx.getUpdateManager();
                    n.onCheckForUpdate(function(e) {}), n.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success: function(e) {
                                e.confirm && n.applyUpdate();
                            }
                        });
                    }), n.onUpdateFailed(function() {});
                }
            },
            onShow: function() {
                o.default.state.user.token && o.default.dispatch("user/updateUserInfo");
            },
            onError: function(e) {
                console.error("root error", e);
            }
        };
        n.default = f;
    }
}, [ [ "56d7", "common/runtime", "common/vendor" ] ] ]);