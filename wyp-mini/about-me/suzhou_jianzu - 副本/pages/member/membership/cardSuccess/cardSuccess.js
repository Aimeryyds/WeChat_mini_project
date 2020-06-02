var a = require("../../../../utils/server"), e = wx.getStorageSync("utoken"), t = void 0;

Page({
    data: {
        orderid: "",
        cardid: "",
        weixin_app: "",
        weixin_app_paycon: "",
        weixin_app_payimg: "",
        now: ""
    },
    onLoad: function(d) {
        e = wx.getStorageSync("utoken"), t = "";
        var r = this;
        console.log("options", d), d.recharge && (t = d.recharge), r.setData({
            orderid: d.orderid,
            cardid: d.cardid,
            weixin_app: d.weixin_app,
            realname: d.realname,
            mobile: d.mobile
        }), 1 == r.data.weixin_app ? "" != t || a.sendRequest({
            url: "?r=wxapp.member.vipcard.card",
            data: {
                utoken: e,
                orderid: r.data.orderid,
                cardid: r.data.cardid,
                realname: r.data.realname,
                mobile: r.data.mobile
            },
            method: "POST",
            success: function(a) {}
        }) : a.sendRequest({
            url: "?r=wxapp.member.vipcard.card",
            data: {
                utoken: e,
                orderid: r.data.orderid,
                cardid: r.data.cardid,
                realname: r.data.realname,
                mobile: r.data.mobile
            },
            method: "POST",
            success: function(a) {
                a.data.result;
            }
        }), r.setData({
            weixin_app_paycon: d.weixin_app_paycon,
            weixin_app_payimg: d.weixin_app_payimg
        }), a.sendRequest({
            url: "?r=wxapp.member.vipcard.paymain",
            data: {
                utoken: e,
                id: d.orderid
            },
            method: "GET",
            success: function(a) {
                if (1 != a.data.status) return a.data.status, void wx.showToast({
                    title: a.data.msg,
                    icon: "success",
                    duration: 2e3
                });
                r.setData({
                    paydata: a.data.result.data,
                    order: a.data.result.order
                });
                var e = new Date(), t = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + (e.getDate() + 1);
                r.setData({
                    now: t
                });
            }
        });
    },
    pay: function() {
        var t = this;
        console.log("pay", t);
        var d = wx.getStorageSync("wxdata").timeStamp.toString(), r = wx.getStorageSync("wxdata").nonceStr, i = wx.getStorageSync("wxdata").package, n = wx.getStorageSync("wxdata").sign;
        wx.requestPayment({
            nonceStr: r,
            package: i,
            signType: "MD5",
            timeStamp: d,
            paySign: n,
            success: function(d) {
                a.sendRequest({
                    url: "?r=wxapp.member.vipcard.card",
                    data: {
                        utoken: e,
                        orderid: t.data.orderid,
                        cardid: t.data.cardid,
                        realname: t.data.realname,
                        mobile: t.data.mobile
                    },
                    method: "POST",
                    success: function(t) {
                        var d = t.data.result;
                        a.sendRequest({
                            url: "?r=wxapp.member.vipcard.updateStatus&cardid=" + d + "&utoken=" + e,
                            data: {},
                            method: "POST",
                            success: function(a) {}
                        });
                    }
                }), wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    toStart: function() {
        wx.switchTab({
            url: "../../../index/index"
        });
    }
});