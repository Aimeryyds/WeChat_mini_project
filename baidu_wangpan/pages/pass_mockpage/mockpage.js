var n = require("../../pass_config"), t = require("../../pass_utils/loginFn");

Page({
    data: {
        updateBduss: "updateBduss",
        wechatBindStatus: ""
    },
    onLoad: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    jumpLogin: function() {
        wx.navigateTo({
            url: "/pages/pass_login/login?jumpUrl=&jumpUrl_wx=/pages/pass_login/login",
            success: function() {},
            fail: function() {},
            complete: function() {}
        });
    },
    guideLogin: function() {
        t.passChangeNormal(n.wechatLoginBackUrl);
    },
    setWechatUnbind: function() {
        t.wechatUnbind(n.wechatLoginBackUrl, "b0375b9e8bfc4adb1d33b4f7dc9e2492");
    },
    searchBbuss: function() {
        var n = wx.getStorageSync("userInfo"), t = wx.getStorageSync("wechatBindStatus") || "无";
        n && this.setData({
            updateBduss: n.bduss
        }), this.setData({
            wechatBindStatus: t
        });
    }
});