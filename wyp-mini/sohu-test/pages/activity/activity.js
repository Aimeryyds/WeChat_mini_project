getApp();

Page({
    data: {
        targetUrl: ""
    },
    onLoad: function(t) {
        if (t.targetUrl) {
            var r = t.isFromCode ? "miniprogram-code" : "miniprogram";
            t.targetUrl = "https://3g.k.sohu.com/h5apps/heihuadabipin/index.html?entry=" + r, 
            this.setData({
                targetUrl: decodeURIComponent(t.targetUrl)
            });
        }
    }
});