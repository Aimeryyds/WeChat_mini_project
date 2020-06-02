var t = getApp(), a = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        userInfo: {},
        nameAuth: "",
        textColor: "",
        mainColor: "",
        headColor: "",
        studentAuth: "",
        isLogin: !1,
        rideCardDate: null,
        depositDate: null,
        version: t.globalData.version,
        fillHeader: !0
    },
    onLoad: function() {
        this.setData({
            textColor: t.globalData.textColor,
            mainColor: t.globalData.mainColor,
            headColor: t.globalData.headColor
        });
    },
    ridePackage: function(t) {
        if (this.data.isLogin) {
            wx.navigateTo({
                url: "../ridePackage/ridePackage?type=" + t.currentTarget.dataset.type
            });
        } else wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    toAgreement: function() {
        wx.navigateTo({
            url: "../agreement/agreement"
        });
    },
    headerAnimation: function(t) {},
    onShow: function() {
        var o = this, e = t.globalData.userInfo;
        console.log(e), e ? (o.infoForm(e), t.checkToken(function(e) {
            if (e.length > 0) {
                var n = t.globalData.baseUrl + "user/getByUserId.do", i = {
                    token: e
                };
                t.globalData.adAccountId && "" != t.globalData.adAccountId && (i.adAccountId = t.globalData.adAccountId), 
                a.request(n, i, function(a) {
                    console.log("用户信息:" + JSON.stringify(a)), void 0 !== a.data && (t.globalData.userInfo = a.data, 
                    o.infoForm(a.data));
                });
            } else t.globalData.userInfo = null, o.setData({
                isLogin: !1
            });
        })) : (t.globalData.userInfo = null, o.setData({
            isLogin: !1
        }));
    },
    infoForm: function(t) {
        wx.setStorageSync("nameAuth", t.nameAuth);
        var a = t.nameAuth ? "已实名" : "点击前往实名认证", o = 5 == t.depositState ? "已认证" : "未认证";
        this.setData({
            nameAuth: a,
            studentAuth: o,
            isLogin: !0,
            rideCardDate: t.rideCardDate ? t.rideCardDate : null,
            depositDate: t.depositDate ? t.depositDate : null
        });
    },
    getMsg: function(o) {
        var e = this, n = t.globalData.baseUrl + "user/getUserInfo.do", i = {
            token: o
        };
        a.request(n, i, function(t) {
            t.ret && e.setData({
                rideCardDate: t.data.rideCardDate ? t.data.rideCardDate : null,
                depositDate: t.data.depositDate ? t.data.depositDate : null
            });
        });
    },
    toLogin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    toWallet: function() {
        if (this.data.isLogin) {
            wx.navigateTo({
                url: "../wallet/wallet?depositState=" + t.globalData.userInfo.depositState + "&depositMoney=" + t.globalData.userInfo.depositMoney + "&actualMoney=" + t.globalData.userInfo.money
            });
        } else wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    toCoupon: function() {
        if (this.data.isLogin) {
            wx.navigateTo({
                url: "../coupon/coupon"
            });
        } else wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    nameAuth: function() {
        this.data.isLogin ? "点击前往实名认证" == this.data.nameAuth && wx.navigateTo({
            url: "../authentication/authentication"
        }) : wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    studentAuth: function() {
        this.data.isLogin ? "未认证" == this.data.studentAuth && wx.navigateTo({
            url: "../studentAuth/studentAuth"
        }) : wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    topUpDetail: function() {
        this.data.isLogin ? wx.navigateTo({
            url: "../historyRecharge/historyRecharge"
        }) : wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    usingRecord: function() {
        this.data.isLogin ? wx.navigateTo({
            url: "../historyOrder/historyOrder"
        }) : wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    exit: function() {
        wx.setStorageSync("token", ""), t.globalData.userInfo = null, wx.navigateBack({});
    }
});