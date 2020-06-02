var e = require("../../../utils/https.js");

Page({
    data: {
        cur: null,
        extraData: {},
        load: !1,
        i: 1,
        deposit: "",
        canzff: "",
        candeposit: "",
        myHight: ""
    },
    myEventListener: function(e) {
        console.log(1212), console.log(e.detail), this.setData({
            myHight: e.detail
        });
    },
    navBack: function() {
        wx.reLaunch({
            url: "../../index/index"
        });
    },
    change: function(e) {
        var a = e.currentTarget.dataset.cur;
        this.setData({
            cur: a
        });
    },
    zhifufenconfig: function() {
        var a = this;
        if (!this.data.load) {
            this.setData({
                load: !0
            });
            var t = this;
            setTimeout(function() {
                t.setData({
                    load: !1
                });
            }, 4e3), e.req11("V2.0/UserWxpayScore/CreateWxpayScore", {}, function(e, n) {
                0 == n.data.code ? a.zhifufen(n.data.data) : (wx.showModal({
                    title: "提示",
                    content: n.data.retmsg
                }), t.setData({
                    load: !1
                }));
            });
        }
    },
    zhifufen: function(e) {
        var a = this;
        wx.openBusinessView ? wx.openBusinessView({
            businessType: "wxpayScoreEnable",
            extraData: e,
            envVersion: "release",
            success: function(e) {
                wx.showLoading({
                    title: "正在跳转中...",
                    mask: !0,
                    duration: 3e4
                });
                var t = 0, n = setInterval(function() {
                    t += 1, a.surechange(t, n);
                }, 2e3);
            },
            fail: function(e) {
                console.log(e);
            },
            complete: function(e) {
                console.log(e), a.setData({
                    load: !1
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "您的微信版本低,请升级微信版本"
        });
    },
    surechange: function(a, t) {
        if (a > 20) return wx.hideLoading(), void clearInterval(t);
        e.req11("V2.0/UserWxpayScore/GetWxpayScore", {}, function(e, a) {
            1 == a.data.code && (wx.setStorageSync("wxpayscorestate", 1), wx.hideLoading(), 
            clearInterval(t), wx.redirectTo({
                url: "../../index/index"
            }));
        });
    },
    sure: function(e) {
        var a = e.currentTarget.dataset.cur;
        null !== a && ("0" === a ? wx.navigateTo({
            url: "../rideCard/index"
        }) : "1" === a ? wx.navigateTo({
            url: "../deposit/index"
        }) : "2" === a && this.zhifufenconfig());
    },
    canzfffn: function(a, t) {
        e.req11("V2.0/Area/AreaGrayLevel", {
            areaid: a,
            type: "wxpayscore"
        }, function(e, a) {
            t(0 == a.data.code ? 1 == a.data.data ? !0 : !1 : !1);
        });
    },
    canyajing: function(a, t) {
        e.req11("V2.0/Area/AreaGrayLevel", {
            areaid: a,
            type: "deposit"
        }, function(e, a) {
            0 == a.data.code ? t(1 == a.data.data ? !1 : !0) : -1 == a.data.code && t(!1);
        });
    },
    onLoad: function(e) {
        var a = this;
        this.setData({
            deposit: wx.getStorageSync("deposit")
        });
        var t = wx.getStorageSync("adcode");
        this.canzfffn(t, function(e) {
            a.setData({
                canzff: e
            });
        }), this.canyajing(t, function(e) {
            a.setData({
                candeposit: e
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});