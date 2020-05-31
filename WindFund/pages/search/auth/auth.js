var a = getApp();

Page({
    data: {},
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        a.data.auth = !1;
    },
    onUnload: function() {
        a.data.auth = !1;
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getUserInfo: function(n) {
        if (console.log(n), n && n.detail) {
            a.data.islogincb = !0, a.globalData.userInfo = n.detail;
            var t = n.detail.userInfo;
            t && t.avatarUrl && (a.globalData.headImgUrl = t.avatarUrl, wx.setStorage({
                key: "headImgUrl",
                data: t.avatarUrl
            })), t && t.nickName && (a.globalData.nickName = t.nickName, wx.setStorage({
                key: "nickName",
                data: t.nickName
            })), a.wxLogin(this.loginCallBack);
        }
    },
    loginCallBack: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});