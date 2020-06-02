function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t = require("../../../utils/https.js"), e = require("../../../utils/util"), n = t.imgurl;

Page({
    data: {
        balance: "",
        givebalance: "",
        coupon: "",
        right: n + "right.png",
        innerText: "我的钱包",
        walletlist: [ {
            src: "../../../Content/images/wallet/02.png",
            listname: "余额",
            listnameRight: "",
            url: "../recharge/index"
        }, {
            src: "../../../Content/images/wallet/03.png",
            listname: "优惠券",
            listnameRight: "查看明细",
            url: "../coupon/index"
        }, {
            src: "../../../Content/images/wallet/04.png",
            listname: "骑行卡",
            listnameRight: " ",
            url: "../myRideCard/index"
        }, {
            src: "../../../Content/images/wallet/05.png",
            listname: "押金",
            listnameRight: " ",
            url: ""
        }, {
            src: "../../../Content/images/wallet/08.png",
            listname: "明细",
            listnameRight: "查看明细",
            right: "../../images/right.png",
            url: "../detail/index"
        } ],
        cardActivity: !1,
        myHight: ""
    },
    myEventListener: function(a) {
        console.log(a.detail), this.setData({
            myHight: a.detail
        });
    },
    goBack: function() {
        wx.navigateBack();
    },
    payCar: function() {
        wx.navigateTo({
            url: "../carCard/index"
        });
    },
    gotobuy: function() {
        wx.navigateTo({
            url: "../buyCard/index"
        });
    },
    onLoad: function(a) {
        console.log("我的浅薄啊"), this.setData({
            adcode: a.adcode
        });
    },
    checkRecharge: function() {
        var a = this.data.balance;
        console.log(a), wx.navigateTo({
            url: "../recharge/index?balance=" + a
        });
    },
    CoinPurse: function() {
        var n = this, i = {
            uid: wx.getStorageSync("uid"),
            areaid: wx.getStorageSync("adcode")
        };
        t.req11("MenberUser/CoinPurse", i, function(i, r) {
            if (0 == r.data.code) {
                var s;
                wx.setStorageSync("balance", r.data.data.balance), wx.setStorageSync("givebalance", r.data.data.givebalance), 
                wx.setStorageSync("depositstate", r.data.data.deposit);
                wx.setStorageSync("hasridingcard", r.data.data.hasridingcard), wx.setStorageSync("zhimacreditstate", r.data.data.zhimacreditstate), 
                wx.setStorageSync("wxpayscorestate", r.data.data.wxpayscorestate), n.setData((s = {
                    balance: r.data.data.balance,
                    givebalance: r.data.data.givebalance,
                    coupon: r.data.data.coupon
                }, a(s, "walletlist[0].listnameRight", e.keepTwoDecimal(r.data.data.balance + r.data.data.givebalance)), 
                a(s, "walletlist[2].listnameRight", r.data.data.ridingcard), a(s, "walletlist[0].test", r.data.data.givebalance), 
                a(s, "cardActivity", r.data.data.cardActivity), s));
                var o = "walletlist[3].listnameRight", d = "walletlist[3].url", l = wx.getStorageSync("depositstate");
                t.req11("V2.0/Area/AreaGrayLevel", {
                    areaid: n.data.adcode,
                    type: "wxpayscore"
                }, function(a, t) {
                    0 == t.data.code && 1 == t.data.data ? n.urlfn(o, d, l, 1) : n.urlfn(o, d, l, 0);
                });
            } else wx.showModal({
                title: "",
                content: r.data.retmsg,
                showCancel: !1,
                success: function(a) {
                    a.confirm && wx.redirectTo({
                        url: "../../login/index"
                    });
                }
            });
        });
    },
    urlfn: function(e, n, i, r) {
        var s = this;
        if (wx.getStorageSync("hasridingcard")) {
            var o;
            this.setData((o = {}, a(o, e, "免押骑行卡"), a(o, n, ""), o));
        } else if (2 == wx.getStorageSync("zhimacreditstate")) {
            var d;
            this.setData((d = {}, a(d, e, "芝麻信用分已免押金"), a(d, n, ""), d));
        } else if (1 == wx.getStorageSync("wxpayscorestate")) {
            var l;
            this.setData((l = {}, a(l, e, "微信支付分已免押金"), a(l, n, ""), l));
        } else if (1 == i) {
            var c;
            this.setData((c = {}, a(c, e, "已交押金"), a(c, n, "../retreat/index"), c));
        } else if (0 == i) {
            var g, u = "../depositRideCard/index";
            r && (u += "?canzff=1"), this.setData((g = {}, a(g, e, "点击缴纳"), a(g, n, u), g));
        } else if (2 == i) t.req11("V2.0/UserWallet/ReturnDepositInfo", {}, function(t, i) {
            if (0 == i.data.code) if (5 == i.data.data.returnstate) {
                var r;
                s.setData((r = {}, a(r, e, "退押金中"), a(r, n, "../refund/index"), r));
            } else {
                var o;
                s.setData((o = {}, a(o, e, "退押金中"), a(o, n, "../returnmon/index"), o));
            }
        }); else if (3 == i) {
            var f, h = "../depositRideCard/index";
            r && (h += "?canzff=1"), this.setData((f = {}, a(f, e, "已退押金"), a(f, n, h), f));
        }
    },
    onReady: function() {},
    onShow: function() {
        this.CoinPurse();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});