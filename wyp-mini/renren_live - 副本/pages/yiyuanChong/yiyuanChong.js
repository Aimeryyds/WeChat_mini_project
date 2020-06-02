var n = require("../../14E98D478A740DDF728FE5401BCCC841.js"), o = getApp();

Page({
    data: {
        navTxtStr: "一元大礼包",
        navTopBackShow: !0,
        navHeight: o.globalData.navStatusbarHeight + o.globalData.navTopHeight
    },
    onLoad: function(n) {},
    onReady: function() {
        this.myComponent = this.selectComponent("#mineTopBar");
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    MethodComponent: function() {
        this.myComponent.ClickBack();
    },
    onbuy: function() {
        o.aldstat.sendEvent("一元大礼包页面点击首次充值", "一元大礼包页面点击首次充值");
        var t = {
            id: 37,
            tokensCount: 1
        };
        n.createRenrenguoOrder("token/createRechargeOrder", t), n.paySuccessCheckCallback = function(n) {
            o.hasyiyuan = !1, wx.showToast({
                title: "购买成功~",
                icon: "none"
            }), wx.switchTab({
                url: "./../home/home"
            });
        }, n.payFailCheckCallback = function(n) {
            wx.showToast({
                title: "购买失败,请稍等再试~",
                icon: "none"
            });
        };
    }
});