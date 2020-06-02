var n = getApp();

Page({
    data: {
        statusBar: {
            title: "登录YY",
            height: n.globalData.systemInfo.statusBarHeight
        },
        lgnbindmobdata: {
            appid: "5838",
            logintoken: "",
            acct: ""
        },
        downBtnTxt: "立即登录",
        upBtnTxt: "我已经发送，立即登录"
    },
    onLoad: function(n) {
        wx.hideToast(), n && n.logintoken && n.acct && this.setData({
            "lgnbindmobdata.logintoken": n.logintoken,
            "lgnbindmobdata.acct": n.acct
        });
    },
    onReady: function() {
        this.lgnbindmobComp = this.selectComponent("#lgnbindmobComp"), this.lgnbindmobComp.initLgnbindmobComp();
    },
    onLgnBindMobSuccess: function(t) {
        if (t) {
            var o = t.detail.data;
            wx.setStorageSync("udbInfo", o), o.yyuid && wx.setStorageSync("uid", o.yyuid), o.udb_c && wx.setStorageSync("udb_c", o.udb_c), 
            o.username && wx.setStorageSync("username", o.username), n.getYYUserInfo(o);
        }
        wx.navigateBack({
            delta: 1
        });
    },
    onLgnBindMobError: function() {
        wx.showToast({
            title: "绑定手机失败，请重试~",
            icon: "none",
            duration: 3e3
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});