require("./utils/ald-stat.js");

App({
    onLaunch: function() {
        var a = this;
        this.globalData.userInfo = wx.getStorageSync("userInfo") || {}, this.globalData.userInfo.hasOwnProperty("openid") || wx.login({
            success: function(e) {
                wx.request({
                    url: "https://api.huaxun66.cn/mp/user/getLoginInfo",
                    method: "POST",
                    header: {
                        "content-type": "application/json",
                        token: "e35755230782476ad195a23eae107751"
                    },
                    data: {
                        appid: a.globalData.appid,
                        code: e.code
                    },
                    success: function(e) {
                        if (0 == e.data.errCode) {
                            a.globalData.userInfo.appid = a.globalData.appid, a.globalData.userInfo.appname = a.globalData.appname, 
                            a.globalData.userInfo.openid = e.data.data.openid, e.data.data.hasOwnProperty("unionid") && (a.globalData.userInfo.unionid = e.data.data.unionid), 
                            wx.setStorage({
                                key: "userInfo",
                                data: a.globalData.userInfo,
                                success: function(a) {
                                    console.log("========userInfo local save success========");
                                }
                            });
                            var o = {
                                appid: a.globalData.appid,
                                openid: a.globalData.userInfo.openid,
                                autoregister: !0
                            };
                            null != a.globalData.userInfo.unionid && (o.unionid = a.globalData.userInfo.unionid), 
                            wx.request({
                                url: "https://api.huaxun66.cn/mp/user/getUserInfo",
                                method: "POST",
                                header: {
                                    "content-type": "application/json",
                                    token: "e35755230782476ad195a23eae107751"
                                },
                                data: o,
                                success: function(e) {
                                    if (0 == e.data.errCode) a.globalData.userInfo = e.data.data, console.log(a.globalData.userInfo), 
                                    wx.setStorage({
                                        key: "userInfo",
                                        data: a.globalData.userInfo,
                                        success: function(a) {
                                            console.log("========userInfo local save success========");
                                        }
                                    }); else {
                                        var o = {
                                            appid: a.globalData.appid,
                                            openid: a.globalData.userInfo.openid,
                                            appname: a.globalData.appname,
                                            apptype: "小程序"
                                        };
                                        a.globalData.userInfo.hasOwnProperty("unionid") && (o.unionid = a.globalData.userInfo.unionid), 
                                        wx.request({
                                            url: "https://api.huaxun66.cn/mp/user/addUser",
                                            method: "POST",
                                            header: {
                                                "content-type": "application/json",
                                                token: "e35755230782476ad195a23eae107751"
                                            },
                                            data: o,
                                            success: function(a) {
                                                0 == a.data.errCode && console.log("========userInfo server save success========");
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }), wx.request({
            url: "https://api.huaxun66.cn/common/sget/mp:app:" + this.globalData.appid,
            method: "GET",
            header: {
                "content-type": "application/json",
                token: "e35755230782476ad195a23eae107751"
            },
            data: {},
            success: function(e) {
                if (null != e && null != e.data && "" != e.data && e.data.hasOwnProperty("supplyCache")) {
                    var o = e.data;
                    o.hasOwnProperty("adsInfo") && "" != o.adsInfo && o.adsInfo != {} && (a.globalData.adsInfo = o.adsInfo);
                }
            }
        });
    },
    globalData: {
        channel: null,
        currentTime: 0,
        appid: "wx379225f6e8e77376",
        appname: "华讯股票新闻资讯",
        userInfo: {},
        adsInfo: {}
    }
});