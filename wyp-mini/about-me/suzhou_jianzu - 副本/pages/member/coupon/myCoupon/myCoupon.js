var t = require("../../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        cate: "",
        check: 1
    },
    onLoad: function(e) {
        a = wx.getStorageSync("utoken");
        var o = this;
        t.sendRequest({
            url: "?r=wxapp.sale.coupon.my.getlist",
            method: "GET",
            showToast: !1,
            data: {
                cate: "",
                utoken: a
            },
            success: function(t) {
                o.setData({
                    loading: !1,
                    data: t.data.result
                });
            }
        });
    },
    onShow: function() {
        var e = this;
        t.sendRequest({
            url: "?r=wxapp.sale.coupon.my.getlist",
            method: "GET",
            data: {
                cate: e.data.cate,
                utoken: a
            },
            success: function(t) {
                e.setData({
                    loading: !1,
                    data: t.data.result
                });
            }
        });
    },
    toCouponDetail: function(t) {
        var a = this, e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../couponDetail/couponDetail?id=" + e + "&check=" + a.data.check + "&source=0"
        });
    },
    ToCoupon: function() {
        wx.navigateTo({
            url: "../Couponcenter/Couponcenter"
        });
    },
    tarbar: function(e) {
        var o = this, n = e.target.dataset.index, s = e.currentTarget.dataset.check;
        this.setData({
            cate: n,
            check: s
        }), t.sendRequest({
            url: "?r=wxapp.sale.coupon.my.getlist",
            method: "GET",
            data: {
                cate: n,
                utoken: a
            },
            success: function(t) {
                t.data.result.list;
                o.setData({
                    data: t.data.result
                });
            }
        });
    }
});