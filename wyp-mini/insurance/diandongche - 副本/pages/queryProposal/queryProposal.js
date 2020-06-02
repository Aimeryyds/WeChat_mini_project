var a = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        loadModal: !1,
        qrcode: "",
        cardpasswd: ""
    },
    onLoad: function() {},
    goScanCard: function() {
        var a = this;
        wx.scanCode({
            success: function(t) {
                a.setData({
                    qrcode: t.result
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    getInputValue: function(a) {
        var t = a.currentTarget.id, e = a.detail.value, s = this.data;
        s[t] = e, this.setData(s);
    },
    queryProposal: function() {
        if ("" == (s = this).data.qrcode || "" == s.data.cardpasswd) a.AlertMsg("请输入卡号和密码"); else {
            this.setData({
                loadModal: !0
            });
            var e = this.data, s = this;
            a.GetTokenCallBack(function() {
                a.Requests_json(t.globalData.insuranceUrl + "/ebike/getOrderInfo", e).then(function(t) {
                    if (s.setData({
                        loadModal: !1
                    }), "0" == t.code) {
                        var e = t.msg;
                        wx.navigateTo({
                            url: "../orderDetail/orderDetail?orderId=" + e
                        });
                    } else a.AlertMsg(t.msg);
                });
            });
        }
    }
});