var t = getApp();

Page({
    data: {},
    onLoad: function(t) {
        this.getShopInfo();
    },
    getShopInfo: function() {
        t.getShopInfo(function(t) {
            wx.setNavigationBarTitle({
                title: t.name
            }), 2 == t.authStat && wx.reLaunch({
                url: "/pages/index/index"
            });
        }), setTimeout(this.getShopInfo, 3e5);
    },
    concat: function() {
        t.concat();
    }
});