var a = getApp(), o = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        money: 0,
        userInfo: {},
        disabled: !1,
        mainColor: "",
        textColor: ""
    },
    onLoad: function(o) {
        this.setData({
            mainColor: a.globalData.mainColor,
            textColor: a.globalData.textColor
        });
        var t = this, e = (Number(o.money) / 100).toFixed(2);
        this.adAccountId = o.adAccountId, a.globalData.adAccountId && 0 != a.globalData.adAccountId.length && (this.adAccountId = a.globalData.adAccountId), 
        t.setData({
            money: e
        });
    },
    deposit: function() {
        wx.showToast({
            title: "请稍候...",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), a.checkToken(function(t) {
            t.length > 0 && wx.login({
                success: function(e) {
                    if (e.code) {
                        console.log(e.code);
                        var n = a.globalData.baseUrl + "weixinPay/createOrder_weixin.do", c = {
                            token: t,
                            deposit: !0,
                            code: e.code
                        };
                        a.globalData.adAccountId && 0 != a.globalData.adAccountId.length && (c.adAccountId = a.globalData.adAccountId), 
                        o.request(n, c, function(a) {
                            console.info("order_param", c);
                            var o = JSON.parse("{" + a.data.replace(/'/g, '"') + "}");
                            wx.hideToast(), wx.requestPayment({
                                timeStamp: o.timeStamp,
                                nonceStr: o.nonceStr,
                                package: o.package,
                                signType: "MD5",
                                paySign: o.paySign,
                                success: function(a) {
                                    wx.navigateBack({
                                        delta: 1,
                                        success: function(a) {},
                                        fail: function() {},
                                        complete: function() {}
                                    });
                                },
                                fail: function(a) {}
                            });
                        });
                    }
                }
            });
        });
    }
});