var e = getApp();

Page({
    data: {},
    onLoad: function(o) {
        console.log(o);
        var n = this;
        e.toCheckSession(function() {
            n.sendRedirectByUrl(o);
        });
    },
    sendRedirectByUrl: function(o) {
        o && o.url ? (wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.request({
            url: e.globalData.domainPath + e.globalData.projectName + "/redirect.do",
            data: {
                url: o.url,
                sessionToken: e.globalData.sessionToken
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (console.log(e), wx.hideLoading(), "0000" == e.data.errcode) {
                    var o = e.data.url;
                    o = encodeURIComponent(o), wx.reLaunch({
                        url: "/pages/webview/webview?url=" + o
                    });
                } else wx.reLaunch({
                    url: "/pages/home/home"
                });
            },
            complete: function(e) {},
            fail: function(e) {
                wx.reLaunch({
                    url: "/pages/home/home"
                });
            }
        })) : (wx.hideLoading(), wx.reLaunch({
            url: "/pages/home/home"
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});