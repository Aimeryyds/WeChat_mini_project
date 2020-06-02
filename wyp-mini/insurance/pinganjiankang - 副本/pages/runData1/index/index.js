var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), n = e(require("../../../@babel/runtime/helpers/asyncToGenerator")), o = e(require("../../../@babel/runtime/helpers/defineProperty")), a = e(require("../../vant/dialog/dialog")), r = e(require("../../vant/toast/toast")), s = (require("../../../utils/version.js"), 
getApp());

Page({
    data: {
        hrImg: s.globalData.baseUrl + "/wxresource/app/img/hellorun.png",
        show: !1,
        showUserInfo: !1,
        showWeRunData: !1,
        showUnfinishUserInfo: !1,
        step: 0,
        scopeUserInfo: void 0,
        scopeWerun: void 0,
        appName: "",
        userId: "",
        appParameter: {},
        appParameterString: ""
    },
    onCancel: function(e) {
        console.log(e), this.setData((0, o.default)({}, e.target.id, !1));
    },
    launchApp: function(e) {
        console.log(e);
    },
    launchAppError: function(e) {
        console.log(e), (0, r.default)("跳转失败,请稍后再试");
    },
    getWeRunData: function() {
        var e = this;
        wx.showLoading({
            title: "获取中"
        }), wx.getWeRunData({
            success: function(t) {
                t.encryptedData;
                var n = t.cloudID;
                wx.cloud.callFunction({
                    name: "weRunData",
                    data: {
                        weRunData: wx.cloud.CloudID(n)
                    },
                    success: function(t) {
                        console.log(t);
                        var n = 0;
                        if (t.errMsg.includes("ok")) {
                            var o = t.result.event.weRunData.data.stepInfoList, a = t.result.openid;
                            n = o[30].step;
                            var s = Object.assign({}, e.data.appParameter, {
                                step: n,
                                openId: a,
                                timestamp: Date.now()
                            });
                            console.log(s), e.setData({
                                show: !0,
                                step: n,
                                appParameter: s,
                                appParameterString: JSON.stringify(s)
                            }), e.onSet();
                        } else (0, r.default)("暂未获取到微信步数，请稍后再试");
                    },
                    fail: function(e) {
                        (0, r.default)("暂未获取到微信步数，请稍后再试");
                    },
                    complete: function(e) {
                        wx.hideLoading();
                    }
                });
            },
            fail: function(e) {},
            complete: function(e) {
                wx.hideLoading();
            }
        });
    },
    getUserInfo: function() {
        var e = (0, n.default)(t.default.mark(function e(n) {
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log(n), !n.detail.errMsg.includes("ok")) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 4, this.openSetting();

                  case 4:
                    void 0 === e.sent["scope.werun"] ? this.authRun() : this.getRundata(), e.next = 9;
                    break;

                  case 8:
                    this.setData({
                        showUnfinishUserInfo: !0
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(),
    authRun: function() {
        var e = this;
        wx.authorize({
            scope: "scope.werun",
            success: function(t) {
                console.log("1" + JSON.stringify(t)), t.errMsg.includes("ok") ? e.getWeRunData() : (0, 
                r.default)("用户拒绝授权微信运动信息");
            },
            fail: function(t) {
                console.log(t), e.openSetting(), t.errMsg.includes("deny") && null == e.data.scopeWerun && a.default.confirm({
                    title: "提示信息",
                    message: "授权未完成",
                    confirmButtonText: "立即授权",
                    confirmButtonOpenType: "werun",
                    confirmButtonColor: "#ff6600"
                }).then(function(t) {
                    console.log(t), e.openSettingRun();
                }).catch(function() {});
            },
            complete: function(e) {}
        });
    },
    openSettingRun: function() {
        wx.openSetting({
            data: {
                "scope.werun": !0
            },
            success: function(e) {
                console.log(e);
            },
            fail: function(e) {
                console.log("fail" + JSON.stringify(e));
            }
        });
    },
    getRundata: function() {
        var e = (0, n.default)(t.default.mark(function e() {
            var n, o = this;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.openSetting();

                  case 2:
                    if ((n = e.sent)["scope.userInfo"]) {
                        e.next = 6;
                        break;
                    }
                    return this.setData({
                        showUserInfo: !0
                    }), e.abrupt("return");

                  case 6:
                    if (void 0 !== n["scope.werun"]) {
                        e.next = 9;
                        break;
                    }
                    return a.default.confirm({
                        title: "还差一步就能同步啦~",
                        message: "温馨提示：需要您授权微信运动，才可以进行步数同步",
                        confirmButtonText: "立即授权",
                        confirmButtonColor: "#ff6600"
                    }).then(function(e) {
                        console.log(e), o.authRun();
                    }).catch(function() {}), e.abrupt("return");

                  case 9:
                    if (!1 !== n["scope.werun"]) {
                        e.next = 12;
                        break;
                    }
                    return a.default.confirm({
                        title: "还差一步就能同步啦~",
                        message: "温馨提示：需要您授权微信运动，才可以进行步数同步",
                        confirmButtonText: "立即授权",
                        confirmButtonOpenType: "werun",
                        confirmButtonColor: "#ff6600"
                    }).then(function(e) {
                        console.log(e), o.openSettingRun();
                    }).catch(function() {}), e.abrupt("return");

                  case 12:
                    this.getWeRunData();

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    openSetting: function() {
        var e = this;
        return new Promise(function(t, n) {
            wx.getSetting({
                success: function(n) {
                    console.log(n.authSetting), e.setData({
                        scopeUserInfo: n.authSetting["scope.userInfo"],
                        scopeWerun: n.authSetting["scope.werun"]
                    }), t(n.authSetting);
                },
                fail: function(e) {
                    n(e);
                },
                complete: function(e) {}
            });
        });
    },
    onShareAppMessage: function(e) {
        return "button" === e.from && console.log(e.target), {
            title: "平安健康保险，您身边的健康管家！",
            path: "pages/index/index"
        };
    },
    onShow: function() {
        var e = this;
        wx.login({
            success: function(t) {
                t.code && e.setData({
                    jscode: t.code
                });
            }
        }), this.openSetting();
    },
    onPullDownRefresh: function() {},
    onSet: function() {
        var e = wx.cloud.database(), t = this.data.appParameter.openId || "";
        t && e.collection("appUser").doc(t).set({
            data: {
                userId: this.data.appParameter.userId,
                updateTime: new Date()
            },
            success: function(e) {
                console.log(e);
            },
            error: function(e) {
                console.log(e);
            }
        });
    },
    onLoad: function(e) {
        console.log(e);
        e.appName;
        var t = e.userId;
        this.setData({
            appParameter: {
                userId: t
            }
        }), console.log(wx.getLaunchOptionsSync());
    }
});