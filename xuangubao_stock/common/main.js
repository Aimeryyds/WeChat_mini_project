(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "23be": function(e, n, t) {
        t.r(n);
        var o = t("f342"), i = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = i.a;
    },
    "3dfd": function(e, n, t) {
        t.r(n);
        var o = t("23be");
        for (var i in o) "default" !== i && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        t("5c0b");
        var r = t("2877"), c = Object(r.a)(o.default, void 0, void 0, !1, null, null, null);
        n.default = c.exports;
    },
    "56d7": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            t("6cdc"), t("921b"), n(t("a846"));
            var i = n(t("66fd")), r = n(t("3dfd"));
            i.default.config.productionTip = !1, r.default.mpType = "app", e(new i.default(function(e) {
                for (var n = 1; n < arguments.length; n++) if (n % 2) {
                    var t = null != arguments[n] ? arguments[n] : {}, i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }))), i.forEach(function(n) {
                        o(e, n, t[n]);
                    });
                } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[n]));
                return e;
            }({}, r.default))).$mount();
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
        }), n.default = void 0, t("2d0a");
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("4360")), i = t("ed08"), r = t("f8c8"), c = t("761b"), a = {
            onLaunch: function() {
                try {
                    var e = wx.getSystemInfoSync();
                    o.default.commit("device/setDeviceInfo", e);
                } catch (e) {}
                if (i.wxp.login().then(function(e) {
                    (0, r.getWeixiInfoWSCN)({
                        code: e.code
                    }).then(function(e) {
                        var n = e.code, t = e.data;
                        2e4 === n && (o.default.commit("user/setLoginInfo", {
                            openId: t.openid,
                            unionId: t.unionid
                        }), c.Taotie.asyncInitWithCommonData({
                            device_id: t.openid
                        }).then(function() {
                            var e, n = o.default.state.user.wxInfo, t = o.default.state.user.user;
                            c.Taotie.resetCommonData({
                                uid: t ? +t.id : 0,
                                userInfo: n && {
                                    city: n.city,
                                    country: n.country,
                                    gender: n.gender,
                                    language: n.language,
                                    nickName: n.nickName,
                                    province: n.province
                                }
                            });
                            try {
                                e = wx.getLaunchOptionsSync();
                            } catch (n) {
                                e = "";
                            }
                            if (e) try {
                                c.Taotie.forceTrack({
                                    eventName: "MiniActivatedEvent",
                                    topicName: "MiniActivatedEvent",
                                    uid: t ? +t.id : 0,
                                    additional: {
                                        path: e.path,
                                        scene: "" + e.scene,
                                        query: JSON.stringify(e.query),
                                        shareTicket: JSON.stringify(e.shareTicket),
                                        referrerInfo: JSON.stringify(e.referrerInfo)
                                    },
                                    userInfo: n && {
                                        city: n.city,
                                        country: n.country,
                                        gender: n.gender,
                                        language: n.language,
                                        nickName: n.nickName,
                                        province: n.province
                                    }
                                });
                            } catch (e) {}
                        }));
                    });
                }), i.wxp.getSetting().then(function(e) {
                    e.authSetting["scope.userInfo"] && i.wxp.getUserInfo().then(function(e) {
                        e.userInfo && o.default.commit("user/setWxInfo", e.userInfo);
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
            onShow: function(e) {
                (0, i.ifLogin)() && o.default.dispatch("user/updateUserInfo");
                var n = e.query, t = n.distributioncode, r = n.subjectId;
                if (r && r.includes("?")) {
                    var c = r.split("?")[1].split("=");
                    "distributioncode" === c[0] && c[1] && o.default.commit("user/setDistributioncode", c[1]);
                }
                t && o.default.commit("user/setDistributioncode", t);
            },
            onError: function(e) {
                console.error("root error", e);
            }
        };
        n.default = a;
    }
}, [ [ "56d7", "common/runtime", "common/vendor" ] ] ]);