var t, e, a, o, n, s = require("../../../utils/server"), r = 0, d = 0, i = wx.getStorageSync("utoken"), c = "";

Page({
    data: {},
    onLoad: function(o) {
        console.log(o);
        s = this;
        i = wx.getStorageSync("utoken");
        var s = this;
        t = o.orderid, "integral" == o.name ? (n = "integral", e = o.addressid, wx.getStorageSync("result") && (a = wx.getStorageSync("result")), 
        s.integral()) : "undefined" != o.teamid ? (d = 1, r = o.teamid, s.loadData()) : (r = 0, 
        s.loadData()), console.log(r), wx.getStorageSync("result") && wx.removeStorageSync("result");
    },
    integral: function() {
        var t = this;
        t.setData({
            orderno: a.orderid,
            money: a.money
        }), a.logid && (o = a.logid), a.wechat && a.wechat.data ? (c = a.wechat.data, t.setData({
            data: a.wechat.data
        })) : t.setData({
            data: a.wechat
        }), c && t.setData({
            wxpay: c
        });
    },
    loadData: function() {
        var e = this;
        s.sendRequest({
            url: "?r=wxapp.groups.pay",
            data: {
                utoken: i,
                orderid: t,
                teamid: r
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    orderno: t.data.result.order.orderno,
                    money: t.data.result.money,
                    data: t.data.result.data
                }), t.data.result && t.data.result.wechat && t.data.result.wechat.data && (c = t.data.result.wechat.data), 
                c ? e.setData({
                    wxpay: c
                }) : e.setData({
                    wxpay: ""
                });
            }
        });
    },
    toStart: function() {
        wx.reLaunch({
            url: "../../index/index"
        });
    },
    pay: function() {
        i = wx.getStorageSync("utoken");
        var e = c.timeStamp + "", a = c.nonceStr + "";
        wx.requestPayment({
            nonceStr: a,
            package: c.package,
            signType: "MD5",
            timeStamp: e,
            paySign: c.sign,
            success: function(e) {
                "integral" == n ? (s.sendRequest({
                    url: "?r=wxapp.creditshop.detail.lottery",
                    data: {
                        utoken: i,
                        logid: o,
                        id: t,
                        type: "pay"
                    },
                    method: "POST",
                    success: function(t) {
                        console.log(t);
                    }
                }), wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "../../member/index/index"
                    });
                }, 2e3)) : (s.sendRequest({
                    url: "?r=wxapp.groups.pay.complete",
                    data: {
                        utoken: i,
                        orderid: t,
                        teamid: r,
                        isteam: d,
                        type: "wechat"
                    },
                    method: "POST",
                    success: function(t) {
                        console.log(t);
                    }
                }), wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "../../member/index/index"
                    });
                }, 2e3));
            },
            fail: function(t) {
                wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    }
});