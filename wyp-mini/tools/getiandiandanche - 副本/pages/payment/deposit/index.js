var t = require("../../../utils/https.js"), a = t.imgurl, e = getApp();

Page({
    data: {
        deposit: "",
        array: [ "微信充值支付" ],
        wxfx: a + "wxfx.png",
        index: 0,
        Depositname: "Depositname",
        cardno: "",
        disabled: !1,
        myHight: "",
        isSao: !1,
        myVeh: "",
        lat: "",
        lng: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        });
    },
    bindKeyInput: function(t) {
        this.setData({
            cardno: t.detail.value
        });
    },
    formSubmit: function(a) {
        var n = this;
        a.detail.value.Depositname;
        n.setData({
            disabled: !0
        });
        var i = {
            uid: wx.getStorageSync("uid"),
            account: wx.getStorageSync("account"),
            amount: wx.getStorageSync("deposit"),
            recharge: 1,
            paytype: 4
        };
        t.req("User/Recharge", i, function(t, a) {
            if (n.setData({
                disabled: !1
            }), 0 == a.data.code) {
                var i = JSON.parse(JSON.parse(a.data.data).Obj);
                wx.requestPayment({
                    timeStamp: i.timeStamp,
                    nonceStr: i.nonceStr,
                    package: i.package,
                    signType: "MD5",
                    paySign: i.paySign,
                    success: function(t) {
                        wx.setStorageSync("depositstate", 1), wx.showToast({
                            title: "充值成功",
                            mask: !0,
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.hideToast(), wx.showLoading({
                                title: "正在跳转中...",
                                mask: !0,
                                duration: 4e3
                            });
                        }, 2e3), setTimeout(function() {
                            var t = n.data.myVeh;
                            n.data.isSao ? (e.globalData.myVeh = {
                                vCarId: t,
                                lat: n.data.lat ? n.data.lat : 0,
                                lng: n.data.lng ? n.data.lng : 0
                            }, wx.navigateTo({
                                url: "../../index/unlock/index"
                            })) : wx.navigateBack({
                                delta: 20
                            });
                        }, 2e3);
                    },
                    fail: function(t) {
                        console.log("fail:" + JSON.stringify(t));
                    }
                });
            } else wx.showModal({
                title: "充值失败",
                content: a.data.retmsg,
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
            });
        });
    },
    onShow: function() {
        e.globalData.myVeh = {};
    },
    onLoad: function(t) {
        var a = wx.getStorageSync("myVeh"), e = wx.getStorageSync("deposit"), n = wx.getStorageSync("isSao");
        this.setData({
            deposit: e,
            isSao: n,
            myVeh: a
        });
    }
});