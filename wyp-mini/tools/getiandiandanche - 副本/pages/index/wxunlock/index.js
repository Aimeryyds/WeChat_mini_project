var n = require("../../../utils/util.js"), t = require("../../../utils/https.js").imgurl, e = 0;

Page({
    data: {
        carimg: t + "car.png",
        carId: "",
        scene: "",
        lat: "",
        lng: "",
        progress: ""
    },
    onLoad: function(t) {
        var o = this;
        wx.getLocation({
            type: "gcj02",
            success: function(n) {
                var t = n.latitude, e = n.longitude;
                o.setData({
                    lat: t,
                    lng: e
                });
            }
        });
        var a = decodeURIComponent(t.q), i = n.parseURL(a).id, r = setInterval(function() {
            ++e >= 100 && clearInterval(r), o.setData({
                progress: e
            });
        });
        setTimeout(function() {
            wx.redirectTo({
                url: "../unlock/index?id=" + i + "&lat=" + o.data.lat + "&lng=" + o.data.lng
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