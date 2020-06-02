var t, e = require("../../../../utils/server"), a = require("../../../../wxParse/wxParse.js"), s = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        data: "",
        id: "",
        useInstructions: !1
    },
    onLoad: function(t) {
        s = wx.getStorageSync("utoken");
        var o = this;
        t.check && o.setData({
            check: t.check
        }), o.setData({
            id: t.id,
            source: t.source
        }), 0 == o.data.source ? e.sendRequest({
            url: "?r=wxapp.sale.coupon.detail.get_coupon_list&id=" + t.id,
            showToast: !1,
            data: {
                utoken: s
            },
            method: "GET",
            success: function(t) {
                var e = t.data.result.coupon;
                if ("0" == e.descnoset ? "0" == e.coupontype ? a.wxParse("desc", "html", t.data.result.set.consumedesc, o, 5) : "1" == e.coupontype && a.wxParse("desc", "html", t.data.result.set.rechargedesc, o, 5) : "1" == e.descnoset && a.wxParse("desc", "html", e.desc, o, 5), 
                2 == o.data.check) {
                    var s = t.data.result.coupon.data.usetime, d = t.data.result.coupon.data.ordersn;
                    s = new Date(1e3 * s).toLocaleDateString(), o.setData({
                        data: e,
                        loading: !1,
                        useTime: s,
                        orderId: d
                    });
                } else o.setData({
                    data: e,
                    loading: !1
                });
            }
        }) : 1 == o.data.source && e.sendRequest({
            url: "?r=wxapp.sale.coupon.detail&id=" + t.id,
            showToast: !1,
            data: {
                utoken: s
            },
            method: "GET",
            success: function(t) {
                var e = t.data.result.coupon;
                "0" == e.descnoset ? "0" == e.coupontype ? a.wxParse("desc", "html", t.data.result.set.consumedesc, o, 5) : "1" == e.coupontype && a.wxParse("desc", "html", t.data.result.set.rechargedesc, o, 5) : "1" == e.descnoset && a.wxParse("desc", "html", e.desc, o, 5), 
                o.setData({
                    data: e,
                    loading: !1
                }), console.log(o.data.desc);
            }
        }), e.sendRequest({
            url: "?r=wxapp.sale.coupon.detail.recommand",
            data: {
                utoken: s
            },
            method: "GET",
            success: function(t) {
                o.setData({
                    swiper: t.data.result,
                    store_num: t.data.result.list.list.length
                });
            }
        });
    },
    togoods: function(t) {
        wx.navigateTo({
            url: "/pages/goods/detail/detail?objectId=" + t.currentTarget.dataset.objectid
        });
    },
    toGoods: function() {
        wx.reLaunch({
            url: "../../../index/index"
        });
    },
    getCoupon: function() {
        var a = this;
        wx.showModal({
            title: "提示",
            content: "确认领取吗？",
            success: function(o) {
                o.confirm && e.sendRequest({
                    url: "?r=wxapp.sale.coupon.detail.pay",
                    data: {
                        utoken: s,
                        id: a.data.id,
                        jie: 1
                    },
                    method: "GET",
                    success: function(o) {
                        var d = o.data.msg;
                        if (1 == o.data.status) if (o.data.result.result) {
                            if (o.data.result.result && o.data.result.wechat) {
                                t = o.data.result.logid, e.globalData.wxdata = o.data.result.result, e.globalData.order = o.data.result.wechat, 
                                a.setData({
                                    paydata: o.data.result.data,
                                    order: o.data.result.order
                                });
                                e.globalData.wxdata.timeStamp;
                                return void a.pay();
                            }
                            wx.showModal({
                                title: "提示",
                                content: "请开通企业支付,领取失败"
                            });
                        } else e.sendRequest({
                            url: "?r=wxapp.sale.coupon.detail.payresult",
                            data: {
                                utoken: s,
                                logid: o.data.result.logid
                            },
                            method: "GET",
                            success: function(t) {
                                wx.navigateTo({
                                    url: "../getCoupon/getCoupon"
                                });
                            }
                        }); else wx.showModal({
                            title: "提示",
                            content: "" + d,
                            success: function(t) {}
                        });
                    }
                });
            }
        });
    },
    pay: function() {
        var a = e.globalData.wxdata;
        console.log(a);
        var o = a.timeStamp + "", d = a.nonceStr + "", n = a.package, u = a.sign;
        wx.requestPayment({
            nonceStr: d,
            package: n,
            signType: "MD5",
            timeStamp: o,
            paySign: u,
            success: function(a) {
                e.sendRequest({
                    url: "?r=wxapp.sale.coupon.detail.payresult",
                    data: {
                        utoken: s,
                        logid: t
                    },
                    method: "GET",
                    success: function(t) {
                        wx.navigateTo({
                            url: "../getCoupon/getCoupon"
                        });
                    }
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    showModal: function() {
        this.setData({
            useInstructions: !0
        });
    },
    hideModal: function() {
        this.setData({
            useInstructions: !1
        });
    }
});