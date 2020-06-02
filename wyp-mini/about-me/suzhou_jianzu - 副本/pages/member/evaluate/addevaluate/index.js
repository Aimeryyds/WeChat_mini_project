var s = require("../../../../utils/server");

Page({
    data: {},
    blur: function(s) {
        var a = s.detail.value;
        this.setData({
            content: a
        });
    },
    formSubmit: function(a) {
        var t = this, e = getApp();
        setTimeout(function() {
            var a = t.data.content, i = e.globalData.userInfo.user_id, r = t.data.goods_id, g = t.data.order_id, d = t.data.kfValue, o = t.data.shipperValue, f = t.data.descValue;
            s.getJSON("/User/add_comment", {
                user_id: i,
                content: a,
                goods_id: r,
                order_id: g,
                service_rank: d,
                deliver_rank: o,
                goods_rank: f
            }, function(s) {
                wx.showToast({
                    title: s.data.msg,
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3);
            });
        }, 1e3);
    },
    onLoad: function(s) {
        var a = s.goods_name, t = s.goods_id, e = s.order_id, i = s.image, r = s.spec;
        this.setData({
            goods_name: a,
            image: i,
            spec: r,
            goods_id: t,
            order_id: e,
            starsDescIMG: "/images/stars1.gif",
            descValue: 1,
            starsKFIMG: "/images/stars1.gif",
            kfValue: 1,
            starsShipperIMG: "/images/stars1.gif",
            shipperValue: 1
        });
        var g = this;
        wx.getSystemInfo({
            success: function(s) {
                g.setData({
                    width: s.windowWidth
                });
            }
        });
    },
    starsDesc: function(s) {
        s.currentTarget.dataset;
        var a = this.data.width / 750 * 225, t = s.detail.x - s.currentTarget.offsetLeft, e = 0, i = "/images/stars1.gif";
        a / 5 > t ? (e = 0, i = "/images/stars1.gif") : a / 5 * 2 > t ? (e = 1, i = "/images/stars2.gif") : a / 5 * 3 > t ? (e = 2, 
        i = "/images/stars3.gif") : a / 5 * 4 > t ? (e = 3, i = "/images/stars4.gif") : a / 5 * 5 > t && (e = 4, 
        i = "/images/stars5.gif"), this.setData({
            descValue: ++e,
            starsDescIMG: i
        });
    },
    starsKF: function(s) {
        s.currentTarget.dataset;
        var a = this.data.width / 750 * 225, t = s.detail.x - s.currentTarget.offsetLeft, e = 0, i = "/images/stars1.gif";
        a / 5 > t ? (e = 0, i = "/images/stars1.gif") : a / 5 * 2 > t ? (e = 1, i = "/images/stars2.gif") : a / 5 * 3 > t ? (e = 2, 
        i = "/images/stars3.gif") : a / 5 * 4 > t ? (e = 3, i = "/images/stars4.gif") : a / 5 * 5 > t && (e = 4, 
        i = "/images/stars5.gif"), this.setData({
            kfValue: ++e,
            starsKFIMG: i
        });
    },
    starsShipper: function(s) {
        s.currentTarget.dataset;
        var a = this.data.width / 750 * 225, t = s.detail.x - s.currentTarget.offsetLeft, e = 0, i = "/images/stars1.gif";
        a / 5 > t ? (e = 0, i = "/images/stars1.gif") : a / 5 * 2 > t ? (e = 1, i = "/images/stars2.gif") : a / 5 * 3 > t ? (e = 2, 
        i = "/images/stars3.gif") : a / 5 * 4 > t ? (e = 3, i = "/images/stars4.gif") : a / 5 * 5 > t && (e = 4, 
        i = "/images/stars5.gif"), this.setData({
            shipperValue: ++e,
            starsShipperIMG: i
        });
    }
});