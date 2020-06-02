var e = function() {
    return wx.getStorageSync("from") || "";
}, t = function() {
    return wx.getStorageSync("refferAppId") || "";
};

module.exports = {
    loadAd: function(a) {
        var o = getApp(), r = wx.getStorageSync("showAD") || void 0, n = wx.getStorageSync("updateTime") || 0, p = Date.parse(n) / 1e3, c = Date.parse(new Date()) / 1e3;
        void 0 === r || p < c - 0 ? wx.request({
            url: "https://api.51gsl.com/program/advet",
            data: {
                type: 2,
                from: e(),
                refferAppId: t(),
                appname: o.globalData.appname
            },
            method: "POST",
            header: {
                "content-type": "application/json",
                Accept: "application/vnd.51gsl.v6+json"
            },
            success: function(e) {
                r = e.data.code + "", wx.setStorageSync("showAD", r), wx.setStorageSync("updateTime", new Date()), 
                a && a("200" == r);
            }
        }) : a && a("200" == r);
    },
    ad: function(e) {
        e && wx.navigateTo({
            url: "../webview/webview"
        });
    },
    setFrom: function(e) {
        e.from && wx.setStorageSync("from", e.from);
    },
    getFrom: e,
    getRefferAppId: t
};