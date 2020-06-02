var o = getApp();

Page({
    data: {
        url: null,
        cookie: "",
        platForm: o.globalData.platform
    },
    onLoad: function(o) {
        var n = this, t = o.url;
        if (t.indexOf("huodong") > -1) {
            var a = wx.getStorageSync("cookiesdata");
            n.setData({
                cookie: a
            });
            var i = a.replace(/;/g, "&");
            t = "https://huodong.renren.com/common/wxhuodong.html?url=" + t + "&" + (i = "ios" == n.data.platForm ? "from=iosminiwx&" + i : "from=miniwx&" + i);
        }
        n.setData({
            url: t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});