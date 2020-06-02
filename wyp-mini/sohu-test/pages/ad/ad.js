getApp();

Page({
    data: {
        targetUrl: ""
    },
    onLoad: function(t) {
        t.targetUrl && this.setData({
            targetUrl: decodeURIComponent(t.targetUrl)
        });
    }
});