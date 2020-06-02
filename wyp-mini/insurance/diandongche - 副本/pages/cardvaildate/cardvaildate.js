var a = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        loadModal: !1,
        qrcode: "",
        cardpasswd: "",
        cardzm: t.globalData.staticUrl + "/cardzm.png",
        cardfm: t.globalData.staticUrl + "/cardfm.png",
        orderId: ""
    },
    onLoad: function(a) {
        var t = wx.getStorageSync("userToken");
        null != t && "" != t || wx.redirectTo({
            url: "../login/login"
        }), this.setData({
            userToken: t
        });
    },
    goCForm: function() {
        wx.navigateTo({
            url: "../cform/cform"
        });
    },
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
    validateCard: function() {
        this.setData({
            loadModal: !0
        });
        var o = this.data, e = this;
        a.GetTokenCallBack(function() {
            a.Requests_json(t.globalData.insuranceUrl + "/ebike/getCardInfo", o).then(function(t) {
                if (e.setData({
                    loadModal: !1
                }), console.info(t), "0" == t.code) {
                    var o = t.data;
                    o.qrcode = e.data.qrcode, o.cardpasswd = e.data.cardpasswd;
                    var r = JSON.stringify(o);
                    wx.navigateTo({
                        url: "../cform/cform?paramsData=" + r
                    });
                } else a.AlertMsg(t.msg);
            });
        });
    },
    getInputValue: function(a) {
        var t = a.currentTarget.id, o = a.detail.value, e = this.data;
        e[t] = o, this.setData(e);
    }
});