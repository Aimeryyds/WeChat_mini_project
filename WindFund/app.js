var e = Object.assign || function(e) {
    for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o];
        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
}, o = require("pages/template/wetoast/wetoast.js").WeToast, a = require("pages/template/wemodal/wemodal.js").WeModal, t = wx.getSystemInfoSync();

App({
    WeToast: o,
    WeModal: a,
    data: {
        systeminfo: t,
        isIpx: JSON.stringify(t).indexOf("iPhone X") >= 0
    },
    onLaunch: function(e) {
        console.log("app.js onLaunch param:", e);
        var o = this;
        wx.getSystemInfo({
            success: function(e) {
                o.data.systeminfo = e;
                var a = new RegExp("ios", "i"), t = new RegExp("android", "i");
                o.data.IOS = a.test(e.system), o.data.ARD = t.test(e.system);
            }
        }), o.checkLogin();
    },
    onShow: function(e) {
        console.log("app.js onshow param:", e, "globalData", this.globalData);
        var o = this;
        e && (o.data.scene = e.scene);
        var a = o.getAppId(e);
        a && o.getAdvisorInfo(a), wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(e) {
            e.isConnected || wx.showToast({
                image: "../../img/close.png",
                title: "暂无网络"
            });
        });
    },
    getAppId: function(e) {
        if (console.log("getAppid:", e), e) {
            var o = [ 1020, 1035, 1036, 1037, 1038, 1043 ], a = e.scene;
            return -1 != o.indexOf(a) && e.referrerInfo && (e.referrerInfo.appId || e.referrerInfo.appid) ? e.referrerInfo.appId || e.referrerInfo.appid : e.query && (e.query.appId || e.query.appid) ? e.query.appId || e.query.appid : void 0;
        }
    },
    getAdvisorInfo: function(e) {
        if (e) {
            var o = this;
            o.getData("CMD_QUERY_TOKEN_KEY", {
                tokenCode: e
            }, function(a) {
                if (a && a.result) {
                    a = a.result, console.log("getAdvisorInfo success", a);
                    var t = {
                        tokenCode: e
                    };
                    a && a.advisorCode && (t.advisorCode = a.advisorCode), a && a.platformType && (t.platformType = a.platformType), 
                    o.globalData.advisorInfo = t;
                }
            }, function(e) {
                console.log("getAdvisorInfo failed:", e);
            }, !1, "", !1);
        }
    },
    checkLogin: function(e, o) {
        var a = this;
        wx.checkSession({
            success: function(t) {
                console.log("wx checkSession success");
                var n = wx.getStorageSync("sessionId");
                n && "" != n ? (console.log("有sessionid"), a.globalData.sessionId = wx.getStorageSync("sessionId"), 
                a.globalData.userId = wx.getStorageSync("userId"), a.globalData.mobile = wx.getStorageSync("mobile"), 
                a.globalData.headImgUrl = wx.getStorageSync("headImgUrl"), a.globalData.nickName = wx.getStorageSync("nickName"), 
                "function" == typeof e && e.apply(this, o)) : (console.log("没有sessionid"), a.wxLogin(e, o));
            },
            fail: function(t) {
                console.log("wx checkSession fail"), a.wxLogin(e, o);
            }
        });
    },
    wxLogin: function(e, o, a) {
        var t = this;
        wx.showLoading({
            title: "正在登陆..."
        }), wx.login({
            success: function(n) {
                wx.hideLoading(), n && n.code ? (console.log("wx login success with code"), t.crmLogin(n.code, e, o, a)) : console.log("wx login success without code:", n);
            },
            fail: function(e) {
                wx.hideLoading(), console.log("wx login fail:", e);
            }
        });
    },
    crmLogin: function(e, o, a, t) {
        if (e) {
            var n = this, s = {
                cmdcode: "CHECK_LOGIN_XCX_PARTY_USER",
                params: {
                    userCode: e,
                    type: 1
                },
                success: function(e) {
                    wx.hideLoading(), console.log(e), e.sessionId ? (console.log("找到uinionId，数据正常"), 
                    n.saveLoginInfo(e), n.execb(), e.headImgUrl && e.nickName || wx.getUserInfo({
                        success: function(e) {
                            console.log("wx.getUserInfo:", e), n.globalData.userInfo = e.userInfo, e.userInfo && e.userInfo.avatarUrl && (n.globalData.headImgUrl = e.userInfo.avatarUrl, 
                            wx.setStorage({
                                key: "headImgUrl",
                                data: e.userInfo.avatarUrl
                            })), e.userInfo && e.userInfo.nickName && (n.globalData.nickName = e.userInfo.nickName, 
                            wx.setStorage({
                                key: "nickName",
                                data: e.userInfo.nickName
                            }));
                        },
                        fail: function(e) {
                            console.log(e), n.gotoAuthPage();
                        }
                    })) : (n.globalData.serialNo = e.serialNo, console.log("未找到uinionId，可能为新用户"), n.unlock(), 
                    n.checkAuth(o, a, t));
                },
                fail: function(e) {
                    wx.hideLoading(), console.log(e);
                }
            };
            "function" == typeof o && n.pushcb(o, a), n.islock() || (wx.showLoading({
                title: "正在登陆..."
            }), n.lock(), n.getDataWithLogin(s));
        } else console.log("no wxlogincode");
    },
    checkAuth: function(e, o, a) {
        var t = this;
        wx.getSetting({
            success: function(a) {
                console.log("wx.getSetting success", a), a.authSetting["scope.userInfo"] ? t.getUserInfoToLogin(e, o) : t.gotoAuthPage(e, o);
            },
            fail: function(a) {
                console.log("wx.getSetting fail: ", a), t.gotoAuthPage(e, o);
            }
        });
    },
    gotoAuthPage: function(e, o) {
        this.data.auth || (this.data.auth = !0, wx.navigateTo({
            url: "/pages/search/auth/auth"
        }));
    },
    getUserInfoToLogin: function(e, o) {
        console.log("进行CRM账号注册并登录");
        var a = this;
        wx.getUserInfo({
            success: function(t) {
                console.log(t), a.globalData.userInfo = t.userInfo, t.userInfo && t.userInfo.avatarUrl && (a.globalData.headImgUrl = t.userInfo.avatarUrl, 
                wx.setStorage({
                    key: "headImgUrl",
                    data: t.userInfo.avatarUrl
                })), t.userInfo && t.userInfo.nickName && (a.globalData.nickName = t.userInfo.nickName, 
                wx.setStorage({
                    key: "nickName",
                    data: t.userInfo.nickName
                })), a.newWindLogin(t, e, o);
            },
            fail: function(t) {
                console.log(t), a.gotoAuthPage(e, o);
            }
        });
    },
    getUserInfoToLoginNew: function(e, o, a) {
        console.log("进行CRM账号登录（无头像）");
        var t = this;
        wx.getUserInfo({
            success: function(n) {
                console.log(n), t.globalData.userInfo = n.userInfo, n.userInfo && n.userInfo.avatarUrl && (t.globalData.headImgUrl = n.userInfo.avatarUrl, 
                wx.setStorage({
                    key: "headImgUrl",
                    data: n.userInfo.avatarUrl
                })), n.userInfo && n.userInfo.nickName && (t.globalData.nickName = n.userInfo.nickName, 
                wx.setStorage({
                    key: "nickName",
                    data: n.userInfo.nickName
                })), t.newWindLogin1(n, e, o, a);
            },
            fail: function(a) {
                console.log(a), t.gotoAuthPage(e, o);
            }
        });
    },
    newWindLogin: function(e, o, a) {
        console.log("开始注册");
        var t = this;
        this.globalData.userinfo = e;
        var n = {
            serialNo: t.globalData.serialNo,
            offset: e.iv,
            data: e.encryptedData,
            type: 1
        };
        "function" == typeof o && t.pushcb(o, a), t.islock() || (t.lock(), t.getData("LOGIN_SERIALNO_XCX_PARTY_USER", n, function(e) {
            e.sessionId ? (console.log("注册成功"), t.saveLoginInfo(e), t.globalData.serialNo = "", 
            t.execb()) : (t.unlock(), console.log("crm注册失败：" + e));
        }, function(e) {
            t.globalData.serialNo = "", console.log(e), t.unlock();
        }, 1, "微信登录"));
    },
    newWindLogin1: function(e, o, a, t) {
        console.log("开始注册(无头像)");
        var n = this;
        this.globalData.userinfo = e;
        var s = {
            serialNo: n.globalData.serialNo,
            offset: e.iv,
            data: e.encryptedData,
            type: 1
        };
        console.log(s), n.getData("SAVE_XCX_NICKNAME_HEADIMG", s, function(e) {
            e ? (console.log("头像获取成功"), e.authFlag = t.authFlag, e.sessionId = t.sessionId, 
            e.userId = t.userId, e.mobilePhone = t.mobilePhone, n.saveLoginInfo(e), n.globalData.serialNo = "", 
            console.log(e), "function" == typeof o && o.apply(this, a)) : console.log("crm注册失败：" + e);
        }, function(e) {
            n.globalData.serialNo = "", console.log(e);
        }, 1, "微信登录");
    },
    saveLoginInfo: function(e) {
        if (this.globalData.sessionId = e.sessionId, this.globalData.userId = e.userId, 
        this.globalData.mobile = e.mobilePhone, this.globalData.headImgUrl = e.headImgUrl, 
        this.globalData.nickName = e.nickName, wx.setStorage({
            key: "sessionId",
            data: e.sessionId
        }), wx.setStorage({
            key: "userId",
            data: e.userId
        }), wx.setStorage({
            key: "mobile",
            data: e.mobilePhone
        }), wx.setStorage({
            key: "headImgUrl",
            data: e.headImgUrl
        }), wx.setStorage({
            key: "nickName",
            data: e.nickName
        }), e.userSettings && e.userSettings.length > 0) {
            var o = 1, a = 1, t = 1;
            e.userSettings.forEach(function(e, n) {
                1 == e.settingType && (o = e.settingStatus), 2 == e.settingType && (a = e.settingStatus), 
                3 == e.settingType && (t = e.settingStatus);
            }), wx.setStorage({
                key: "switches",
                data: JSON.stringify({
                    switch1: o,
                    switch2: a,
                    switch3: t
                })
            });
        }
    },
    updateuserInfo: function(e, o) {
        this.globalData.nickName = e, this.globalData.headImgUrl = o, wx.setStorage({
            key: "headImgUrl",
            data: o
        }), wx.setStorage({
            key: "nickName",
            data: e
        });
    },
    checkUserHasUinionId: function(e, o, a) {
        var t = this;
        this.globalData.sessionId && "" != this.globalData.sessionId ? "function" == typeof o && o.apply(this, a) : t.wxLogin(o, a, !0);
    },
    getswitch: function(e) {
        var o = wx.getStorageSync("switches");
        if (o) {
            var a = JSON.parse(o);
            if (1 == e) return a.switch1;
            if (2 == e) return a.switch2;
            if (3 == e) return a.switch3;
        }
        return 0;
    },
    getFundPage: function() {
        return 1 === this.globalData.istonewpage ? "/new/new" : "/single/single";
    },
    getUserInfo: function(e) {
        var o = this;
        wx.login({
            success: function(a) {
                console.log(a), wx.getUserInfo({
                    success: function(t) {
                        console.log(t), o.globalData.userInfo = t.userInfo, t.userInfo && t.userInfo.avatarUrl && (o.globalData.headImgUrl = t.userInfo.avatarUrl, 
                        wx.setStorage({
                            key: "headImgUrl",
                            data: t.userInfo.avatarUrl
                        })), t.userInfo && t.userInfo.nickName && (o.globalData.nickName = t.userInfo.nickName, 
                        wx.setStorage({
                            key: "nickName",
                            data: t.userInfo.nickName
                        })), "function" == typeof e && e(t, a);
                    },
                    fail: function(a) {
                        console.log(a), o.gotoAuthPage(e, cbparams);
                    }
                });
            }
        });
    },
    addformid: function(e) {
        e && "the formId is a mock one" != e && this.globalData.formIds.push(e);
    },
    submitFormIds: function() {
        if (this.globalData.formIds.length > 0) {
            var e = this, o = {
                formIds: this.globalData.formIds.join(",")
            };
            console.log(o), this.getData("CMD_XCX_SAVE_FORMID", o, function(o) {
                console.log("submit formid is success"), e.globalData.formIds = [];
            }, function(e) {
                console.log("CMD_XCX_SAVE_FORMID " + e);
            });
        } else console.log("now is no formids");
    },
    checkUserId: function(e, o, a) {
        !this.globalData.userId && this.checkUserHasUinionId(e, o, a);
    },
    getDataWithLogin: function(o) {
        if (o && o.cmdcode) {
            var a = o.loadtype, t = this;
            a && wx.showLoading && wx.showLoading({
                title: o.loadmsg || "加载中"
            });
            var n = o.cmdcode, s = o.params || {}, i = o.isrelogin, l = {
                device: JSON.stringify(t.globalData.device),
                cmdCode: n,
                sessionId: t.globalData.sessionId,
                business: JSON.stringify(s)
            }, r = o.success, g = o.fail;
            t.globalData.reqStartTime[n] = Date.now(), wx.request({
                url: t.globalData.server,
                data: l,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(s) {
                    if (a && wx.showLoading && wx.hideLoading(), s.data && "200" === s.statusCode.toString()) {
                        var l = s.data;
                        "E0000" === l.resultCode && l.messageBody ? "function" == typeof r && r(l.messageBody) : "E00000001" === l.resultCode ? (console.log(n + " sessionId过期"), 
                        t.globalData.sessionId = "", i ? (wx.showToast({
                            title: "重新登录",
                            icon: "loading",
                            duration: 1e4
                        }), t.checkUserHasUinionId(!0, t.getDataWithLogin, [ e({}, o, {
                            isrelogin: !1
                        }) ])) : "function" == typeof g && g("sessionout")) : (console.log(n + l.message), 
                        "function" == typeof g && g(l.message));
                    } else console.log(n + s.errMsg), "function" == typeof g && g(s.errMsg);
                },
                fail: function(e) {
                    a && wx.hideLoading(), console.log("fail " + e.errMsg), console.log(e), "request:fail timeout" == e.errMsg ? "function" == typeof g && g("timeout") : "function" == typeof g && g("wx.request failed!");
                },
                complete: function(e) {
                    var o = Date.now() - t.globalData.reqStartTime[n];
                    console.log(n + " Timing:", o + "ms"), delete t.globalData[n];
                }
            });
        }
    },
    getData: function(e, o, a, t, n, s, i) {
        var l = {
            cmdcode: e,
            params: o,
            success: a,
            fail: t,
            loadtype: n,
            loadmsg: s,
            isrelogin: !0
        };
        this.getDataWithLogin(l);
    },
    islock: function() {
        return this.globalData.lock;
    },
    lock: function() {
        this.globalData.lock = !0;
    },
    unlock: function() {
        this.globalData.lock = !1;
    },
    pushcb: function(e, o) {
        var a = this;
        "function" == typeof e && a.globalData.cbQueue.push({
            fn: e,
            params: o
        });
    },
    execb: function() {
        var e = this;
        e.globalData.cbQueue.forEach(function(e, o) {
            e && "function" == typeof e.fn && e.fn.apply(null, e.params);
        }), e.globalData.cbQueue = [], e.unlock();
    },
    globalData: {
        lock: !1,
        cbQueue: [],
        reqStartTime: {},
        channelCode: "999",
        userInfo: null,
        sessionId: "",
        userId: "",
        mobile: "",
        headImgUrl: "",
        nickName: "",
        formIds: [],
        device: {
            appId: "40000001",
            mobilePlatform: "4",
            clientType: "8.2.2",
            appType: "211",
            appVersion: "1.5.0",
            userAgent: JSON.stringify(t)
        },
        istonewpage: "" == wx.getStorageSync("istonewpage") ? 1 : wx.getStorageSync("istonewpage"),
        server: "https://www.windmoney.com.cn/jfire/wxmp/request?"
    },
    jumpMap: function(e, o, a) {
        if ("m001" == e) this.jump(o); else if ("m03" == e) this.jump("/pages/fund/new/new?code=" + o); else if ("m31" == e) this.jump("/pages/portfolio/single/index?code=" + o); else if ("m99" == e) this.jump("/pages/webview/webview?url=" + encodeURIComponent(o) + (a ? "&title=" + a : "")); else if ("m01" == e) this.jump("/pages/fundrank/index/index"); else if ("m02" == e) this.jump("/pages/fundrank/index/index?ismore=" + o); else if ("m03" == e) this.jump("/pages/fund/new/new"); else if ("m10" == e) this.jump("/pages/company/companyindex/companyindex"); else if ("m11" == e) this.jump("/pages/company/company?code=" + o); else if ("m20" == e) this.jump("/pages/managerrank/list/list?type=" + o); else if ("m21" == e) this.jump("/pages/managerrank/index/index"); else if ("m22" == e) this.jump("/pages/manager/manager_new?managerid=" + o); else if ("m30" == e) this.jump("/pages/portfolio/recommendation/index"); else if ("m32" == e) this.jump("/pages/portfolio/warehouse/warehouse?code=" + o); else if ("m40" == e) this.jump("/pages/bigVipColumn/index"); else if ("m41" == e) this.jump("/pages/bigVipColumn/bigVip/bigVip?weixinAccount=" + o); else if ("m98" == e) this.jump("/pages/static/setting/switch/switch"); else if ("m97" == e) this.jump("/pages/search/auth/auth"); else {
            if ("m04" != e) return;
            this.jump("/pages/fund/funddetail/funddetail?code=" + o);
        }
    },
    savePoint: function(e) {
        this.getData("CMD_SAVE_FUNCTION_POINT", e, function(o) {
            console.log(e);
        }, function(e) {
            console.log("功能点调用失败");
        }, 1);
    },
    jump: function(e) {
        e && wx.navigateTo({
            url: e
        });
    }
});