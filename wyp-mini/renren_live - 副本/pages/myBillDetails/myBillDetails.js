var t = getApp();

Page({
    data: {
        navTxtStr: "账单详情",
        navTopBackShow: !0,
        navHeight: t.globalData.navStatusbarHeight + t.globalData.navTopHeight,
        pageHeight: t.globalData.screenHeight - t.globalData.navStatusbarHeight - t.globalData.navTopHeight,
        details: {},
        type: 0
    },
    onLoad: function(t) {
        var a = this, n = "string" == typeof t.details ? JSON.parse(t.details) : t.details;
        a.setData({
            details: n,
            type: t.type
        });
    },
    onReady: function() {
        this.myComponent = this.selectComponent("#mineTopBar");
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    MethodComponent: function() {
        this.myComponent.ClickBack();
    }
});