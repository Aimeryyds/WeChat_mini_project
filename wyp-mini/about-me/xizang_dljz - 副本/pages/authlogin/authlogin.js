var t = getApp();

require("../../utils/util");

Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        shop: {}
    },
    onLoad: function(n) {
        var e = this;
        t.getShopInfo(function(t) {
            e.setData({
                shop: t
            });
        });
    },
    wxLogin: function() {
        wx.navigateBack({});
    }
});