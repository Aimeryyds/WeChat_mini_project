var o = getApp();

Page({
    data: {
        url: ""
    },
    onShow: function() {
        console.log("onShow");
    },
    onLoad: function(e) {
        var n = wx.getStorageSync("openid"), i = wx.getStorageSync("unionid"), t = e.m, a = void 0 === t ? "" : t, d = e.r, r = void 0 === d ? "" : d, c = e.token, l = void 0 === c ? "" : c, g = e.redirectUrl, s = void 0 === g ? o.globalData.webViewUrl + "/#/cshop_frame_index" : g;
        console.log("onLoad", s + "?openid=" + n + "&customFlag=" + r + "&introducerMobile=" + a);
        var u = new Date().getTime();
        this.setData({
            url: s + "?unionid=" + i + "&openid=" + n + "&customFlag=" + r + "&introducerMobile=" + a + "&time=" + u
        }), wx.setStorageSync("token", l);
    },
    bindmessage: function(o) {
        console.log("bindmessage", o);
    },
    bindload: function(o) {}
});