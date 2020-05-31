var t = getApp();

Page({
    data: {
        systemInfo: {},
        height: 0
    },
    onLoad: function() {
        this.setData({
            systemInfo: t.globalData.systemInfo,
            height: t.globalData.navHeight
        }), wx.hideShareMenu();
    }
});