var a = getApp();

Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        wx_logo: a.globalData.test1Url + "/wxresource/home/wx_logo.jpg"
    },
    toEsbplus: function() {
        wx.navigateTo({
            url: "../P005_01/index/index"
        });
    },
    bindGetUserInfo: function(t) {
        console.log(t);
        t = t.detail;
        wx.setStorageSync("rawData", t.rawData);
        var o = encodeURIComponent(t.encryptedData), e = t.iv;
        wx.showLoading({
            title: "加载中"
        }), wx.request({
            url: a.globalData.baseUrl + "/miniapp/oauth2/getWxUserInfo?encryptedData=" + o + "&iv=" + e + "&jscode=" + this.data.jscode + "&appId=" + a.globalData.appId,
            method: "GET",
            success: function(a) {
                console.log(a.data), 1102 == a.data.status ? wx.showToast({
                    title: "登录失败，请稍候再试",
                    icon: "loading",
                    duration: 1e3
                }) : "0000" == a.data.status && (console.log(a.data.data.accessToken), wx.setStorageSync("accessToken", a.data.data.accessToken), 
                wx.setStorageSync("unionId", a.data.data.unionId), wx.setStorageSync("openId", a.data.data.openId), 
                wx.hideToast(), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1e3));
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    onShow: function() {
        var a = this;
        wx.login({
            success: function(t) {
                t.code && a.setData({
                    jscode: t.code
                });
            }
        });
    },
    onLoad: function() {}
});