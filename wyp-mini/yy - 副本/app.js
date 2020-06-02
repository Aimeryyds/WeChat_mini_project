var e = require("utils/hdweapp.js"), n = require("utils/paramConfig.js").ParamConfig, t = require("utils/request.js").RequestCookie;

App({
    onLaunch: function(n) {
        e.launch({
            appkey: "63355c798889681ef5280daa2bf7f343",
            appName: "YY直播",
            version: "2.10.0",
            scene: n.scene,
            autoAppReport: !0,
            autoPageReport: !0,
            autoPullDownRefreshReport: !0,
            autoReachBottomReport: !0,
            autoShareReport: !0,
            debug: !1
        }), this.globalData.scene = n.scene, this.globalData.udbInfo = wx.getStorageSync("udbInfo"), 
        this.HDLoginEvent(), this.getSystemInfo(), this.getYYUserInfo(this.globalData.udbInfo);
    },
    onShow: function() {
        this.getOpenId();
    },
    reportChnInfo: function(n) {
        var t = wx.getStorageSync("origin_channel"), o = wx.getStorageSync("father_openId");
        t || (wx.setStorageSync("origin_channel", n.origin_channel), t = n && n.origin_channel || ""), 
        o || (wx.setStorageSync("father_openId", n.father_openId), o = n && n.father_openId || ""), 
        e.setReserveData({
            key1: t || "",
            key2: o || "",
            key3: n && n.origin_channel || ""
        });
    },
    HDLoginEvent: function() {
        var n = wx.getStorageSync("udbInfo");
        n && n.yyuid && e.login({
            uid: n.yyuid
        });
    },
    getOpenId: function() {
        var n = wx.getStorageSync("HDSDK_openid");
        n ? (e.setOpenid(n), e.run()) : wx.login({
            success: function(n) {
                n.code && wx.request({
                    url: "https://miniapp.yy.com/mini/auth/code2session",
                    data: {
                        appId: 90920020,
                        jsCode: n.code
                    },
                    success: function(n) {
                        var t = n.data;
                        t.data && wx.setStorage({
                            key: "HDSDK_openid",
                            data: t.data,
                            success: function() {
                                e.setOpenid(t.data), e.run();
                            },
                            fail: function() {
                                wx.getLogManager(1).warn("设置缓存失败");
                            }
                        });
                    }
                });
            }
        });
    },
    getSystemInfo: function(e) {
        var n = this;
        wx.getSystemInfo({
            success: function(t) {
                n.globalData.systemInfo = t, "function" == typeof e && e(this.globalData.systemInfo);
            }
        });
    },
    getUdbLogin: function(e) {
        var n = this;
        return new Promise(function(t, o) {
            e.iv || o("需要微信授权~"), wx.login({
                success: function(a) {
                    a.code ? wx.request({
                        url: "https://thirdlogin.yy.com/open/wx/mplogin.do",
                        data: {
                            bindMobile: !0,
                            reqid: "112123",
                            lgnappid: "yymwebh5",
                            appid: 5838,
                            wxappid: "wx3538e651c432208a",
                            jscode: a.code,
                            jsdata: e.encryptedData,
                            jsiv: e.iv
                        },
                        success: function(e) {
                            var o = e.data;
                            if (-500 == o.rcode) {
                                var a = o.params;
                                wx.hideLoading(), wx.navigateTo({
                                    url: "/pages/lgnbindmob/lgnbindmob?logintoken=" + a.logintoken + "&acct=" + a.acct
                                });
                            } else 1 == o.rcode && (wx.setStorageSync("udbInfo", o), n.globalData.udbInfo = o, 
                            o.yyuid && wx.setStorageSync("uid", o.yyuid), o.udb_c && wx.setStorageSync("udb_c", o.udb_c), 
                            o.username && wx.setStorageSync("username", o.username), n.getYYUserInfo(o)), t(o);
                        }
                    }) : o("登录失败~");
                },
                fail: function(e) {
                    o("登录失败~");
                }
            });
        });
    },
    collector: function(e, n) {
        var t = this;
        n && n.indexOf(" ") > -1 ? e && this.redirectToRoom(e) : wx.login({
            success: function(o) {
                var a = void 0, i = wx.getStorageSync("udbInfo");
                a = i && i.yyuid ? "wxTicket=" + n + "&jsCode=" + o.code + "&yyuid=" + i.yyuid + "&userName=" + i.username + "&udbOar=" + i.udb_oar + "&type=0&appId=90920020" : "wxTicket=" + n + "&jsCode=" + o.code + "&type=0&appId=90920020", 
                wx.request({
                    url: "https://miniapp.yy.com/mini/collector/ticket/v2?" + a,
                    method: "POST",
                    success: function() {},
                    fail: function() {}
                }), e && t.redirectToRoom(e);
            }
        });
    },
    redirectToRoom: function(e) {
        if (!e) return !1;
        wx.navigateTo({
            url: e
        });
    },
    getYYUserInfo: function(e) {
        var o = this;
        if (e && e.yyuid) {
            var a = "", i = n.YY_COM_HOST + "/zone/userinfo/getUserInfo.json";
            for (var r in e) "partnerImage" != r && "partnerNickname" != r && (a += r + "=" + e[r] + "; ");
            t(i, a).then(function(e) {
                e.code || (o.globalData.udbInfo.yy_num = e.data.yy_num);
            });
        }
    },
    globalData: {
        scene: 0,
        pullScrollTop: 0,
        statusBarHeight: 0,
        systemInfo: null,
        changeIndex: null,
        udbInfo: {},
        changeList: []
    }
});