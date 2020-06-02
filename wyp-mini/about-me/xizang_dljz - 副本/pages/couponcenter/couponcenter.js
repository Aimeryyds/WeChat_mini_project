var t, i = getApp(), n = require("../../utils/functions"), o = require("../../utils/util");

Page({
    data: {
        shop: null,
        list: null
    },
    onLoad: function(n) {
        (t = this).setData({
            shop: i.globalData.shopInfo
        }), t.getCouponList();
    },
    onShow: function() {},
    getCouponList: function() {
        n.getShopCouponList(function(i) {
            i.list = i.list.map(function(t) {
                return t.beginTime = t.beginTime.split(" ")[0], t.endTime = t.endTime.split(" ")[0], 
                t.amount = t.amount.toFixed(2), t;
            }), t.setData({
                list: i.list
            });
        });
    },
    receiveCoupon: function(i) {
        o.loading();
        var e = i.currentTarget.dataset.id;
        n.receiveCoupon(e, function(i) {
            wx.hideToast(), o.toast("领取成功"), t.getCouponList();
        });
    },
    onShareAppMessage: function() {}
});