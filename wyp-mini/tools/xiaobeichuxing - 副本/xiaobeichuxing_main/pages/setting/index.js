var t = getApp(), n = require("../../utils/https.js"), e = n.imgurl;

Page({
    data: {
        right: e + "right.png",
        setting: [ {
            text: "清理缓存",
            url: "",
            rightNav: "",
            bintap: "clearStorage"
        }, {
            text: "法律条款及隐私政策",
            url: "privacyPolicy/index",
            rightNav: ""
        }, {
            text: "关于我们",
            url: "about/index",
            rightNav: ""
        } ],
        myHight: ""
    },
    myEventListener: function(t) {
        this.setData({
            myHight: t.detail
        });
    },
    inspect: function() {},
    Cancellation: function() {
        console.log(1212), n.req11("MenberUser/MemberUserLogout", {}, function(n, e) {
            0 == e.data.code && (wx.clearStorage(), t.globalData.exitlogin = !0, wx.reLaunch({
                url: "../login/phoneLogin"
            }));
        });
    },
    clearStorage: function() {
        wx.clearStorage({
            success: function(t) {
                wx.showToast({
                    title: "清理完毕！",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});