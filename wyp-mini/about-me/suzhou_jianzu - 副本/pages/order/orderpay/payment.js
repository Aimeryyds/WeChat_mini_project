var t, e = require("../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        orderId: "",
        loading: !0,
        myList: ""
    },
    onLoad: function(o) {
        var s = this;
        if (console.log(o), o.formId && s.setData({
            formId: o.formId
        }), "myList" == o.myList && s.setData({
            myList: !0
        }), s.time(), t = o.order_id, a = wx.getStorageSync("utoken"), o.tabindex) n = "?r=wxapp.services.order.do_pay"; else var n = "?r=wxapp.order.pay";
        e.sendRequest({
            url: n,
            showToast: !1,
            data: {
                utoken: a,
                id: t,
                formId: s.data.formId
            },
            method: "GET",
            success: function(t) {
                if (console.log(t), 1 != t.data.status) return t.data.status, s.setData({
                    loading: !1
                }), wx.showToast({
                    title: t.data.msg,
                    icon: "success",
                    duration: 2e3
                }), void wx.switchTab({});
                e.globalData.wxdata = t.data.result.data, e.globalData.order = t.data.result.order, 
                s.setData({
                    loading: !1,
                    paydata: t.data.result.data,
                    order: t.data.result.order
                });
            }
        });
    },
    time: function() {
        var t = this, e = new Date(), a = (e.getFullYear(), e.getMonth(), e.getDate(), e.getHours() + 1), o = e.getMinutes();
        24 == a && (a = 0);
        var s = a + ":" + o;
        t.setData({
            now: s
        });
    },
    toweixin: function(t) {
        a = wx.getStorageSync("utoken");
        var o = this, s = t.detail.formId, n = t.currentTarget.dataset.id;
        e.sendRequest({
            url: "?r=wxapp.formid.getFormidList",
            data: {
                utoken: a,
                formId: s
            },
            method: "GET",
            success: function(t) {}
        }), wx.showModal({
            title: "提示",
            content: "确定付款吗？",
            success: function(t) {
                a = wx.getStorageSync("utoken"), t.confirm ? 0 == o.data.order.price ? e.sendRequest({
                    url: "?r=wxapp.order.pay.creditpay",
                    data: {
                        utoken: a,
                        id: n,
                        type: "member_card"
                    },
                    method: "GET",
                    success: function(t) {
                        t.data.status > 0 ? wx.reLaunch({
                            url: "../success/index"
                        }) : wx.showModal({
                            title: "提示",
                            content: t.data.msg,
                            showCancel: !1,
                            success: function(t) {
                                t.confirm && console.log("用户点击确定");
                            }
                        });
                    }
                }) : e.sendRequest({
                    url: "?r=wxapp.order.pay.creditpay",
                    data: {
                        utoken: a,
                        id: n
                    },
                    method: "GET",
                    success: function(t) {
                        t.data.status > 0 ? wx.reLaunch({
                            url: "../success/index"
                        }) : wx.showModal({
                            title: "提示",
                            content: t.data.msg,
                            showCancel: !1,
                            success: function(t) {
                                t.confirm && console.log("用户点击确定");
                            }
                        });
                    }
                }) : t.cancel && (console.log("取消--------------------"), wx.showToast({
                    title: "支付失败",
                    icon: "none",
                    image: "https://tws.cnweisou.com/images/eidtNo.png",
                    duration: 1500
                }), o.data.myList ? setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1500) : setTimeout(function() {
                    wx.redirectTo({
                        url: "../list/list?id=1&currid=1"
                    });
                }, 1500));
            }
        });
    },
    toStart: function() {
        wx.reLaunch({
            url: "../../index/index"
        });
    },
    pay: function() {
        var t = this;
        a = wx.getStorageSync("utoken");
        var o = e.globalData.wxdata, s = o.timeStamp + "", n = o.nonceStr + "", i = o.package, r = o.sign;
        wx.requestPayment({
            nonceStr: n,
            package: i,
            signType: "MD5",
            timeStamp: s,
            paySign: r,
            success: function(t) {
                a = wx.getStorageSync("utoken"), setTimeout(function() {
                    wx.switchTab({
                        url: "../../member/index/index"
                    });
                }, 500);
            },
            fail: function(e) {
                wx.showToast({
                    title: "支付失败",
                    icon: "none",
                    image: "https://tws.cnweisou.com/images/eidtNo.png",
                    duration: 1500
                }), t.data.myList ? setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1500) : setTimeout(function() {
                    wx.redirectTo({
                        url: "../list/list?id=1&currid=1"
                    });
                }, 1500);
            }
        });
    }
});