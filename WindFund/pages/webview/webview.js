Page({
    data: {},
    onLoad: function(t) {
        t && t.url && (this.setData({
            url: decodeURIComponent(t.url)
        }), t.title && (wx.setNavigationBarTitle({
            title: t.title
        }), this.setData({
            title: t.title
        })));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return "指数定投" == this.data.title ? {
            title: "指数定投，是等待春天时的最佳选择",
            desc: "小坚持，大回报，微笑定投，遇见美好未来",
            path: "/pages/webview/webview?url=" + encodeURIComponent(this.data.url)
        } : {
            title: "10元做债主，无惧震荡，稳健理财新选择！",
            path: "/pages/webview/webview?url=" + encodeURIComponent(this.data.url)
        };
    }
});