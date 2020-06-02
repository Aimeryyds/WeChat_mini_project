var e = require("../../../utils/https.js"), t = e.imgurl, n = new getApp();

Page({
    data: {
        retM: t + "retM.png",
        deposit: "",
        myHight: "",
        progress: [],
        card: {},
        refund: !0,
        refundId: ""
    },
    ReturnProgress: function() {
        var t = this, a = this;
        e.req11("V2.0/UserWallet/ReturnDepositInfo", {}, function(e, r) {
            if (console.log(r.data), 0 == r.data.code) {
                var o = r.data.data;
                console.log(o), o.cardno ? o.mycardno = o.cardno.substr(-4) : o.mycardno = " ";
                var d = 0 == o.cardtype ? "支付宝" : 1 == o.cardtype ? "微信" : 2 == o.cardtype ? "尾号" + o.mycardno : "", s = 0 == o.cardtype ? "支付宝" : 1 == o.cardtype ? "微信" : 2 == o.cardtype ? "银行卡" : "", i = o.returnstate;
                n.globalData.refundId = o.id, o.cardtypeWhere = d, o.cardtypeWhat = s, a.setData({
                    card: o,
                    refundId: o.id
                });
                var c = [ {
                    name: "申请退款到" + s,
                    time: o.applytime,
                    type: !0,
                    step: !0,
                    suecces: !0
                }, {
                    name: 3 == i ? "等待平台审核" : "平台审核通过",
                    time: o.examine_time,
                    type: !0,
                    step: 3 != i,
                    suecces: !0
                }, {
                    name: 2 == i ? "平台退款失败" : 3 == i || 0 == i ? "等待平台退款" : 1 == i ? "平台退款成功" : "等待平台退款",
                    time: o.returntime,
                    type: !1,
                    step: 0 != i && 3 != i,
                    suecces: 2 != i
                } ];
                t.setData({
                    progress: c,
                    refund: 2 != i
                });
            } else wx.showModal({
                title: "",
                content: r.data.retmsg,
                showCancel: !1
            });
        });
    },
    cancel: function() {
        var t = this;
        e.req11("V2.0/UserWallet/CancelReturnDeposit", {
            id: t.data.refundId
        }, function(e, t) {
            0 == t.data.code ? wx.redirectTo({
                url: "../wallet/index"
            }) : wx.showModal({
                title: "",
                content: t.data.retmsg,
                showCancel: !1
            });
        });
    },
    gotoRefund: function() {
        var t = this;
        e.req11("V2.0/UserWallet/ApplyReturnDeposit", {
            id: t.data.refundId
        }, function(e, t) {
            0 == t.data.code ? wx.redirectTo({
                url: "../refund/index"
            }) : wx.showModal({
                title: "",
                content: t.data.retmsg,
                showCancel: !1
            });
        });
    },
    myEventListener: function(e) {
        this.setData({
            myHight: e.detail
        });
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        this.setData({
            deposit: wx.getStorageSync("deposit")
        }), this.ReturnProgress();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});