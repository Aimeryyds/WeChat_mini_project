var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../network/api.js"));

Page({
    data: {
        services: {}
    },
    onLoad: function(e) {
        var t = e.shopId || e.storeId;
        this.setData({
            shopId: t
        }), this.queryServices({
            shopId: t
        });
    },
    queryServices: function(t) {
        var o = this, i = t.shopId;
        wx.showLoading({
            title: "请稍后"
        }), e.default.queryProjectList({
            storeId: i,
            pageNo: 1,
            pageSize: 999
        }).then(function(e) {
            wx.hideLoading(), o.setData({
                services: e.data
            });
        });
    },
    onTapOrder: function(e) {
        var t = e.target.dataset.service;
        wx.navigateTo({
            url: "/pages/services/order_create/index?storeId=" + this.data.shopId + "&serviceId=" + t.id + "&serviceName=" + t.serviceName + "&servicePrice=" + t.price
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});