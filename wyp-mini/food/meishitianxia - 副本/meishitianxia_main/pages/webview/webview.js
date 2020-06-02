getApp();

Page({
    data: {
        src: ""
    },
    onLoad: function(e) {
        this.setData({
            src: e.src
        });
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/webview/webview?src=" + this.data.src
        };
    }
});