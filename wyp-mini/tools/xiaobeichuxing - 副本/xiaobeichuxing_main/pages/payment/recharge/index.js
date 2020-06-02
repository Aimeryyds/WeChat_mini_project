var t = require("../../../utils/https.js");

Page({
    data: {
        account: "",
        amount: "",
        state: [],
        payList: [],
        myHight: ""
    },
    myEventListener: function(t) {
        this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        var a = this, e = wx.getStorageSync("username");
        console.log(e), a.setData({
            account: e
        }), this.GetRechargePrice();
    },
    select: function(t) {
        this.setData({
            state: t.currentTarget.dataset.id,
            amount: t.currentTarget.dataset.amount
        });
    },
    Recharge: function() {
        var a = wx.getStorageSync("uid"), e = wx.getStorageSync("account"), n = this.data.amount, o = (wx.getStorageSync("code"), 
        {
            uid: a,
            account: e,
            amount: n,
            recharge: 0,
            paytype: 4
        });
        t.req("User/Recharge", o, function(t, a) {
            if (0 == a.data.code) {
                var e = JSON.parse(JSON.parse(a.data.data).Obj);
                wx.requestPayment({
                    timeStamp: e.timeStamp,
                    nonceStr: e.nonceStr,
                    package: e.package,
                    signType: "MD5",
                    paySign: e.paySign,
                    success: function(t) {
                        wx.showToast({
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
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 6e3);
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
    GetRechargePrice: function() {
        var a = this, e = wx.getStorageSync("uid"), n = wx.getStorageSync("adcode"), o = {
            uid: e,
            areaid: n = n || 0
        };
        t.req11("V2.0/UserWallet/GetRechargePrice", o, function(t, e) {
            0 == e.data.code && a.setData({
                payList: e.data.data
            });
            var n = e.data.data[0];
            n.type && 3 == n.type ? a.setData({
                amount: n.volumeAmount
            }) : a.setData({
                amount: n.amount
            });
        });
    },
    userProtocol: function() {
        wx.navigateTo({
            url: "userProtocol/index"
        });
    }
});