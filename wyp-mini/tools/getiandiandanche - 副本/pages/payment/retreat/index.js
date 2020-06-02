var t = require("../../../utils/https.js"), e = require("../../../utils/util.js"), o = t.imgurl;

Page({
    data: {
        requSM: "退押金后，你将:",
        secimg: o + "r_sec.png",
        secR: o + "r_4.png",
        retreatList: [ {
            icon: o + "r_1.png",
            bon: "不可以再用车",
            nocat: "未交押金不可以用车"
        }, {
            icon: o + "r_2.png",
            bon: "下次用车不方便",
            nocat: "还需重新交押金"
        }, {
            icon: o + "r_3.png",
            bon: "无法获取某些优惠",
            nocat: "如: 优惠券,红包"
        } ],
        ReturnDeposit: !0,
        myHight: "",
        isAutomation: !0,
        show: !1,
        deposit: " "
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("depositstate");
        2 == e ? this.setData({
            ReturnDe: !1,
            QXReturnDe: !0
        }) : 1 == e && this.setData({
            ReturnDe: !0,
            QXReturnDe: !1
        });
    },
    ReturnDe: e.throttle(function() {
        var e = this, o = {
            uid: wx.getStorageSync("uid"),
            account: wx.getStorageSync("account"),
            type: 0
        }, o = {
            cardtype: -1,
            user_name: "",
            mobile: "",
            user_idno: "",
            cardno: "",
            bank: ""
        };
        t.req11("V2.0/UserWallet/ReturnDeposit", o, function(t, o) {
            if (console.log(o.data), 0 == o.data.code) e.setData({
                show: !0
            }); else {
                if (1 == o.data.code) return void wx.redirectTo({
                    url: "../refund/index"
                });
                -1 == o.data.code && wx.showModal({
                    title: "",
                    content: o.data.retmsg,
                    showCancel: !1
                });
            }
        });
    }),
    ReturnProgress: function() {
        var e = {
            uid: wx.getStorageSync("uid")
        };
        t.req("User/ReturnProgress", e, function(t, e) {
            0 == e.data.code && (wx.setStorageSync("depositstate", 0), wx.showModal({
                title: "提示",
                content: e.data.retmsg
            })), 1 == e.data.code && (wx.setStorageSync("depositstate", 1), wx.showModal({
                title: "提示",
                content: e.data.retmsg
            })), -1 == e.data.code && (wx.setStorageSync("depositstate", 1), wx.showToast({
                title: e.data.retmsg,
                icon: "success",
                duration: 2e3
            })), 2 == e.data.code && (wx.setStorageSync("depositstate", 2), wx.showModal({
                title: "提示",
                content: e.data.retmsg
            }));
        });
    },
    QXReturnDe: function() {
        var e = {
            uid: wx.getStorageSync("uid"),
            account: wx.getStorageSync("account"),
            type: 1
        };
        t.req("User/ReturnDeposit", e, function(t, e) {
            0 == e.data.code ? wx.showModal({
                title: "提示",
                content: e.data.retmsg,
                success: function(t) {
                    t.confirm && wx.navigateBack({
                        delta: 1
                    });
                }
            }) : -1 == e.data.code && wx.showModal({
                title: "",
                content: e.data.retmsg,
                showCancel: !1
            });
        });
    },
    NoReturnDe: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    goToProgress: function() {
        this.setData({
            show: !1
        }), wx.redirectTo({
            url: "../returnmon/index"
        });
    },
    close: function() {
        this.setData({
            show: !1
        }), wx.navigateTo({
            url: "../../index/index"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            deposit: wx.getStorageSync("deposit")
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});