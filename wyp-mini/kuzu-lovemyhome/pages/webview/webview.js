var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

Page({
    data: {
        url: ""
    },
    onLoad: function(n) {
        var t = decodeURIComponent(n.url).replace(/"/g, "");
        console.log(void 0 === t ? "undefined" : o(t)), console.log(t), this.setData({
            url: t
        }), console.log(this.data.url);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var o = this.data.url;
        return o = encodeURIComponent(o), console.log(o), {
            title: "我爱我家房产租房二手房买房房价",
            path: "pages/webview/webview?url=" + o
        };
    }
});