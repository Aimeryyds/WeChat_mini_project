var t = require("../../netdisk_utils/account.js"), e = require("../../netdisk_utils/common.js"), n = getApp();

Page({
    data: {
        height: 0
    },
    onReady: function() {
        this.pageType = "bindAccount";
    },
    blueBtnClick: function() {
        wx.log.guide.accountNormal.send();
        var e = wx.getCurrentViewPage().options;
        (0, t.bindNormalAccount)(e);
    },
    onLoad: function() {
        e.DETAIL_SHARE || wx.hideShareMenu(), this.setData({
            height: n.globalData.navHeight
        });
    },
    move: function(t) {}
});