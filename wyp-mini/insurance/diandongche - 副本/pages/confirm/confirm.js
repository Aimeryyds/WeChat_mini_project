var e = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        orderId: "",
        isDisabled: !1
    },
    onLoad: function(a) {
        var r = this;
        e.GetToken();
        var i = a.orderId;
        this.setData({
            orderId: i
        });
        var s = this.data;
        e.Requests_json(t.globalData.insuranceUrl + "/api/order/orderConfirmDetail", s).then(function(e) {
            if ("0" == e.code) {
                var t = e.result;
                r.setData({
                    order: t
                });
            }
        });
    },
    payOrder: function(a) {
        var r = this, i = this.data, s = wx.getStorageSync("userToken");
        0 == r.data.isDisabled && (r.setData({
            isDisabled: !0
        }), e.Requests_json(t.globalData.insuranceUrl + "/ebike/" + i.orderId + "/" + s + "/wxEbikePay", i).then(function(a) {
            if ("0" == a.code) {
                var i = a.result;
                wx.requestPayment({
                    timeStamp: i.timeStamp,
                    nonceStr: i.nonceStr,
                    package: i.package,
                    signType: i.signType,
                    paySign: i.paySign,
                    success: function(a) {
                        e.AlertSuccess("支付成功"), e.Requests_json(t.globalData.insuranceUrl + "/ebike/" + i.outTradeNo + "/queryEbikeOnlineWxOrder", {}), 
                        wx.redirectTo({
                            url: "../home/home"
                        });
                    },
                    fail: function(t) {
                        e.AlertError("支付失败"), r.setData({
                            isDisabled: !1
                        });
                    },
                    complete: function(e) {
                        console.info("支付结束"), r.setData({
                            isDisabled: !1
                        });
                    }
                });
            }
        }));
    },
    cancelOrder: function(e) {
        setTimeout(function() {
            wx.redirectTo({
                url: "../home/home"
            });
        }, 1e3);
    }
});