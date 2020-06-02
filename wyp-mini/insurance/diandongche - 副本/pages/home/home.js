var t = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        cardCur: 0,
        show: !1,
        show1: !1,
        adv: e.globalData.staticUrl + "/adv.png",
        swiperList: [ {
            id: 4,
            type: "image",
            url: e.globalData.staticUrl + "/timg5.png"
        }, {
            id: 5,
            type: "image",
            url: e.globalData.staticUrl + "/timg6.png"
        }, {
            id: 6,
            type: "image",
            url: e.globalData.staticUrl + "/timg7.png"
        } ]
    },
    onLoad: function() {
        t.GetToken(), this.towerSwiper("swiperList");
    },
    DotStyle: function(t) {
        this.setData({
            DotStyle: t.detail.value
        });
    },
    cardSwiper: function(t) {
        this.setData({
            cardCur: t.detail.current
        });
    },
    towerSwiper: function(t) {
        for (var e = this.data[t], a = 0; a < e.length; a++) e[a].zIndex = parseInt(e.length / 2) + 1 - Math.abs(a - parseInt(e.length / 2)), 
        e[a].mLeft = a - parseInt(e.length / 2);
        this.setData({
            swiperList: e
        });
    },
    towerStart: function(t) {
        this.setData({
            towerStart: t.touches[0].pageX
        });
    },
    towerMove: function(t) {
        this.setData({
            direction: t.touches[0].pageX - this.data.towerStart > 0 ? "right" : "left"
        });
    },
    towerEnd: function(t) {
        var e = this.data.direction, a = this.data.swiperList;
        if ("right" == e) {
            for (var o = a[0].mLeft, n = a[0].zIndex, r = 1; r < a.length; r++) a[r - 1].mLeft = a[r].mLeft, 
            a[r - 1].zIndex = a[r].zIndex;
            a[a.length - 1].mLeft = o, a[a.length - 1].zIndex = n, this.setData({
                swiperList: a
            });
        } else {
            for (var i = a[a.length - 1].mLeft, l = a[a.length - 1].zIndex, s = a.length - 1; s > 0; s--) a[s].mLeft = a[s - 1].mLeft, 
            a[s].zIndex = a[s - 1].zIndex;
            a[0].mLeft = i, a[0].zIndex = l, this.setData({
                swiperList: a
            });
        }
    },
    goProduct: function() {
        wx.navigateTo({
            url: "/pages/product/product"
        });
    },
    goProductInfo: function() {
        t.GetUserInfoCallBack(function(t) {
            "1" != t.userState ? wx.redirectTo({
                url: "/pages/login/login"
            }) : wx.navigateTo({
                url: "/pages/productInfo/productInfo"
            });
        });
    },
    goForm: function() {
        var a = this;
        wx.showModal({
            title: "投保须知",
            content: "投保的电动自行车必须有南京牌照及行驶证。承保车辆必须是已购买7年（含）以下的电动自行（因线上的方案是3年保期承保方案，公安部规定2020年7月1号起，使用10年以上电动自行车强行报废，不允许上路）。被保险人必须是车主本人。否则自行承担责任。",
            showCancel: !0,
            cancelText: "拒绝",
            cancelColor: "black",
            confirmText: "同意",
            confirmColor: "#0081ff",
            success: function(o) {
                o.cancel || o.confirm && t.GetUserInfoCallBack(function(o) {
                    if ("1" != o.userState) wx.redirectTo({
                        url: "/pages/login/login"
                    }); else {
                        var n = wx.getStorageSync("userToken");
                        if (null == n || "" == n) t.GetUserToken(); else {
                            a.setData({
                                loadModal: !0
                            });
                            var r = a.data;
                            t.GetTokenCallBack(function() {
                                t.Requests_json(e.globalData.insuranceUrl + "/ebike/" + n + "/findProductInfo", r).then(function(e) {
                                    if (a.setData({
                                        loadModal: !1
                                    }), "0" == e.code) {
                                        var o = e.result, n = JSON.stringify(o);
                                        console.info("paramsData====" + n), wx.navigateTo({
                                            url: "/pages/form/form?paramsData=" + n
                                        });
                                    } else t.AlertMsg(e.msg);
                                });
                            });
                        }
                    }
                });
            }
        });
    },
    goClaim: function() {
        wx.navigateTo({
            url: "/pages/form/form"
        });
    },
    goh5Query: function() {
        var a = e.globalData.insuranceMobileUrl + "/vehicleQuery/vehicle";
        t.GoWebview(a);
    },
    goh5Claim: function() {
        var a = e.globalData.staticUrl + "/claim-flow.html";
        t.GoWebview(a);
    },
    goh5Buynote: function() {
        var a = e.globalData.staticUrl + "/buynote.png";
        t.GoWebview(a);
    },
    goOrder: function() {
        console.log("goOrder");
        var e = wx.getStorageSync("userToken");
        null == e || "" == e ? t.GetUserToken() : wx.navigateTo({
            url: "/pages/order/order"
        });
    },
    goLogin: function() {
        wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    goMy: function() {
        var e = wx.getStorageSync("userToken");
        null == e || "" == e ? t.GetUserToken() : wx.navigateTo({
            url: "/pages/my/my"
        });
    },
    goProposal: function(e) {
        var a = wx.getStorageSync("userToken");
        null == a || "" == a ? t.GetUserToken() : wx.navigateTo({
            url: "/pages/proposalList/proposalList"
        });
    },
    goQueryProposal: function(t) {
        wx.navigateTo({
            url: "/pages/queryProposal/queryProposal"
        });
    },
    goPhoneCall: function(t) {
        wx.makePhoneCall({
            phoneNumber: "4006116256"
        });
    }
});