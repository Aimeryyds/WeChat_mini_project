var t = require("../../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        data: "",
        id: "",
        category: "",
        catid: 0,
        sub: 0,
        showDHModal: !1
    },
    clickName: function(e) {
        var o = this, s = e.currentTarget.dataset.id;
        e.currentTarget.dataset.index;
        o.setData({
            catid: s,
            sub: s
        }), t.sendRequest({
            url: "?r=wxapp.sale.coupon.getlist&cateid=" + s,
            data: {
                utoken: a
            },
            method: "GET",
            success: function(t) {
                console.log(t);
                var a = t.data.result.list, e = t.data.result.category;
                o.setData({
                    data: a,
                    category: e
                });
            }
        });
    },
    goDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        this.setData({
            id: a
        }), wx.navigateTo({
            url: "../couponDetail/couponDetail?id=" + a + "&source=1"
        });
    },
    onLoad: function(e) {
        a = wx.getStorageSync("utoken");
        var o = this;
        t.sendRequest({
            url: "?r=wxapp.sale.coupon.getlist",
            showToast: !1,
            data: {
                utoken: a
            },
            method: "GET",
            success: function(t) {
                console.log(t);
                var a = t.data.result.list, e = t.data.result.category;
                o.setData({
                    loading: !1,
                    data: a,
                    category: e
                });
            }
        });
    },
    onPullDownRefresh: function() {
        var e = this;
        t.sendRequest({
            url: "?r=wxapp.sale.coupon.getlist",
            data: {
                utoken: a
            },
            method: "GET",
            success: function(t) {
                wx.stopPullDownRefresh();
                var a = t.data.result.list, o = t.data.result.category;
                e.setData({
                    loading: !1,
                    data: a,
                    category: o
                });
            }
        });
    },
    conversion: function(t) {
        this.setData({
            showDHModal: !0
        });
    },
    closeDHModal: function() {
        this.setData({
            showDHModal: !1
        });
    },
    noCloseDHModal: function() {
        return !1;
    },
    inputCode: function(t) {
        this.setData({
            code: t.detail.value
        });
    },
    getCoupon: function() {
        var e = this;
        t.sendRequest({
            url: "?r=wxapp.sale.coupon.detail.getcoupons",
            data: {
                utoken: a,
                code: e.data.code
            },
            method: "GET",
            success: function(t) {
                console.log(t), 1 == t.data.status ? (e.setData({
                    showDHModal: !1
                }), wx.showToast({
                    title: "领取成功",
                    icon: "success",
                    duration: 3e3,
                    mask: !0,
                    success: function(t) {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                })) : (e.setData({
                    showDHModal: !1
                }), wx.showToast({
                    title: t.data.msg,
                    icon: "none",
                    image: "https://tws.cnweisou.com/images/eidtNo.png",
                    duration: 2e3,
                    mask: !0,
                    success: function(t) {}
                }));
            }
        });
    }
});