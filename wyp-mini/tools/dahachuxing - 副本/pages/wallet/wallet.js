var t = getApp(), o = require("../../utils/util.js");

Page({
    data: {
        totalMoney: Number(0).toFixed(2),
        actualMoney: Number(0).toFixed(2),
        cardMoney: Number(0).toFixed(2),
        deposit: "",
        depositState: -1,
        textColor: "",
        mainColor: "",
        showInput: !1,
        cardNO: ""
    },
    onLoad: function(o) {
        this.setData({
            textColor: t.globalData.textColor,
            mainColor: t.globalData.mainColor
        }), this.depositState = o.depositState, this.useDeposit = o.depositMoney, this.actualMoney = o.actualMoney;
    },
    onShow: function() {
        var o = this;
        this.depositState = t.globalData.userInfo.depositState, this.useDeposit = t.globalData.userInfo.depositMoney, 
        this.actualMoney = t.globalData.userInfo.money, t.globalData.locationInfo ? this.depositFormat() : t.getLocationInfo("gcj02", function(t) {
            o.depositFormat();
        });
    },
    inputCtrl: function() {
        this.setData({
            showInput: !this.data.showInput
        });
    },
    inputCardNO: function(t) {
        this.setData({
            cardNO: t.detail.value
        });
    },
    exchange: function() {
        var e = this, a = this.data.cardNO;
        0 != a.length ? t.checkToken(function(n) {
            if (n.length > 0) {
                var i = t.globalData.baseUrl + "giftCard/exchange.do", s = {
                    accountId: t.globalData.accountId,
                    lo: t.globalData.locationInfo.longitude,
                    la: t.globalData.locationInfo.latitude,
                    mapType: 2,
                    cardNO: a,
                    token: n
                };
                o.request(i, s, function(t) {
                    t.ret && (console.log(t.data), e.inputCtrl(), e.getGiftCard());
                });
            }
        }) : wx.showToast({
            title: "请输入卡券号码",
            icon: "none"
        });
    },
    depositFormat: function() {
        var e = this;
        t.globalData.locationInfo ? this.getDeposit(function(t) {
            e.depositMoney = t ? t.depositMoney : 0, e.useDeposit = t && 0 != t.useDeposit ? t.useDeposit : e.useDeposit, 
            e.adAccountId = t ? t.accountId : "", e.depositState = t && 0 == e.depositState ? t.depositStatus : e.depositState, 
            e.actualMoney = t && 0 != t.actualMoney ? t.actualMoney : e.actualMoney;
            var o = "";
            if (console.log((e.depositMoney / 100).toFixed(2)), 0 != e.depositMoney || 0 != e.useDeposit) switch (Number(e.depositState)) {
              case 0:
                o = "押金" + (e.depositMoney / 100).toFixed(2) + "元";
                break;

              case 1:
                o = "已交" + (e.useDeposit / 100).toFixed(2) + "元押金";
                break;

              case 2:
                o = "押金退还中";
                break;

              case 3:
                o = "芝麻信用";
                break;

              case 4:
                o = "押金冻结";
                break;

              case 5:
                o = "学生认证免押";
                break;

              case 6:
                var a = Number(e.depositMoney) - Number(e.useDeposit);
                o = "押金不足,请补交" + (a / 100).toFixed(2) + "元", e.depositMoney = a;
                break;

              case 7:
                o = "";
            }
            e.setData({
                depositState: e.depositState,
                deposit: o,
                actualMoney: (Number(e.actualMoney) / 100).toFixed(2),
                cardMoney: (Number(t ? t.cardMoney : 0) / 100).toFixed(2),
                totalMoney: (Number(t && 0 != t.totalMoney ? t.totalMoney : e.actualMoney) / 100).toFixed(2)
            });
        }) : o.showModal_nocancel("无法获取位置", function() {
            wx.navigateBack({});
        });
    },
    recharge: function() {
        wx.navigateTo({
            url: "../recharge/recharge"
        });
    },
    toDeposit: function() {
        wx.navigateTo({
            url: "../deposit/deposit?money=" + this.depositMoney + "&adAccountId=" + this.adAccountId
        });
    },
    toRecord: function() {
        wx.navigateTo({
            url: "./record/record"
        });
    },
    returnDeposit: function() {
        var e = this;
        t.checkToken(function(a) {
            a.length > 0 && wx.showModal({
                title: "提示",
                content: "押金退还时间为1-3个工作日，在此期间无法用车，是否仍然退押金？",
                success: function(n) {
                    if (n.confirm) {
                        var i = t.globalData.baseUrl + "returnDeposit/apply.do", s = {
                            token: a
                        };
                        o.request(i, s, function(t) {
                            t && (o.showModal("请留意微信通知!"), e.useDeposit = 0, e.depositFormat());
                        });
                    }
                }
            });
        });
    },
    getDeposit: function(e) {
        t.checkToken(function(a) {
            if (a.length > 0) {
                var n = t.globalData.baseUrl + "adAccountDeposit/getByLocation.do", i = {
                    accountId: t.globalData.accountId,
                    lo: t.globalData.locationInfo.longitude,
                    la: t.globalData.locationInfo.latitude,
                    mapType: 2,
                    token: a
                };
                o.request(n, i, function(t) {
                    t.ret ? (console.log(t.data), e && e(t.data)) : "-3050" == t.code && e && e(!1);
                });
            }
        });
    },
    getGiftCard: function() {
        var e = this;
        t.checkToken(function(a) {
            if (a.length > 0) {
                var n = t.globalData.baseUrl + "giftCardUser/getByLocation.do", i = {
                    accountId: t.globalData.accountId,
                    lo: t.globalData.locationInfo.longitude,
                    la: t.globalData.locationInfo.latitude,
                    mapType: 2,
                    token: a
                };
                o.request(n, i, function(t) {
                    console.log(t), e.depositFormat();
                });
            }
        });
    }
});