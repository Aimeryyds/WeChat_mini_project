var t = require("../../../utils/https.js"), o = t.imgurl, e = new getApp();

Page({
    data: {
        Cost: "",
        longTime: "",
        longKm: "",
        code: "",
        orderno: "",
        stime: "",
        etime: "",
        mile: "",
        costprice: "",
        dispatchamount: "",
        couponamount: "",
        wcIconri: o + "ri.png",
        myHight: ""
    },
    myEventListener: function(t) {
        this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        wx.setStorageSync("temporaryClock", 0);
        wx.setStorageSync("mytype", "3");
        var o = t.amount, e = t.ridingtime, n = t.mile, a = t.code, i = t.stime, c = t.etime, r = t.costprice, s = t.dispatchamount, m = t.couponamount;
        this.setData({
            Cost: o,
            longTime: e,
            longKm: n,
            code: a,
            stime: i,
            etime: c,
            costprice: r,
            dispatchamount: s,
            couponamount: m
        });
    },
    PayOrder: function() {
        var o = {
            uid: wx.getStorageSync("uid"),
            orderno: wx.getStorageSync("orderno"),
            ordertype: 3,
            paytype: 4
        };
        t.req("veh/PayOrder", o, function(t, o) {
            var e = JSON.parse(JSON.parse(o.data.data).Obj);
            wx.requestPayment({
                timeStamp: e.timeStamp,
                nonceStr: e.nonceStr,
                package: e.package,
                signType: "MD5",
                paySign: e.paySign,
                success: function(t) {
                    wx.setStorageSync("depositstate", 1), wx.showToast({
                        title: "充值成功",
                        icon: "success",
                        duration: 2e3
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 2e3);
                },
                fail: function(t) {
                    console.log("fail:" + JSON.stringify(t));
                }
            });
        });
    },
    showTripCont: function() {
        var t = this, o = wx.getStorageSync("vid"), e = wx.getStorageSync("orderno"), n = t.data.Cost, a = t.data.longTime, i = t.data.longKm, c = t.data.stime, r = t.data.etime, s = t.data.costprice, m = t.data.dispatchamount, d = t.data.couponamount;
        wx.navigateTo({
            url: "../../order/stroke/index?vid=" + o + "&amount=" + n + "&stime=" + c + "&etime=" + r + "&ridingtime=" + a + "&mile=" + i + "&costprice=" + s + "&dispatchamount=" + m + "&couponamount=" + d + "&orderno=" + e
        });
    },
    onReady: function() {},
    onShow: function() {
        e.globalData.isEnd = !0, console.log(e.globalData.isEnd);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});