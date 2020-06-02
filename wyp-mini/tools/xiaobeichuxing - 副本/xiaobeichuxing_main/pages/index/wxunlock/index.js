var t = require("../../../utils/util.js"), n = require("../../../utils/https.js").imgurl, e = 0;

Page({
    data: {
        carimg: n + "car.png",
        carId: "",
        scene: "",
        lat: "",
        lng: "",
        progress: ""
    },
    onLoad: function(n) {
        var o = this;
        wx.getLocation({
            type: "gcj02",
            success: function(t) {
                var n = t.latitude, e = t.longitude;
                o.setData({
                    lat: n,
                    lng: e
                });
            }
        });
        var a = decodeURIComponent(n.q), i = t.parseURL(a).id, r = setInterval(function() {
            ++e >= 100 && clearInterval(r), o.setData({
                progress: e
            });
        });
        setTimeout(function() {
            wx.redirectTo({
                url: "../?id=" + i + "&lat=" + o.data.lat + "&lng=" + o.data.lng
            });
        }, 2e3);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});