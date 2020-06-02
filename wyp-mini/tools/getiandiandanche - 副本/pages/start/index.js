function t(t, n, o) {
    return n in t ? Object.defineProperty(t, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = o, t;
}

var n, o = require("../../utils/https.js"), e = (getApp(), o.imgurl);

Page({
    data: (n = {
        item: e + "ad4.jpg",
        imgUrls: [],
        vertical: !0,
        indicatorDots: !0,
        autoplay: !0,
        circular: !0
    }, t(n, "circular", !0), t(n, "interval", 3e3), t(n, "duration", 500), t(n, "previousMargin", 0), 
    t(n, "nextMargin", 0), t(n, "color", "#f2f2f2"), t(n, "activcol", "#e4e4e4"), t(n, "Loading", ""), 
    t(n, "Formid", ""), n),
    func: function() {
        var t = this.data.Formid;
        wx.request({
            url: "http://118.31.73.107:8002/api/Veh/test?form_id=" + t,
            method: "get",
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log("request fail ", t);
            },
            complete: function(t) {
                console.log("request completed!");
            }
        });
    },
    testSubmit: function(t) {
        var n = this;
        wx.setStorageSync("formid", t.detail.formId);
        n.setData({
            Formid: t.detail.formId
        });
    },
    startBind: function() {
        wx.navigateTo({});
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = this;
        setInterval(function() {
            t.func();
        }, 1e4);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});