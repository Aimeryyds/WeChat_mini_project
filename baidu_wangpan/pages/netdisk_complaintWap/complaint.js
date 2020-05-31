Page({
    data: {
        src: "",
        errMsg: ""
    },
    onLoad: function(a) {
        var r = wx.ENV.hostPanName + "wap/reportbad?shareid=" + a.shareId + "&reporthref=https://pan.baidu.com/s/" + a.shortUrl + "&origin=applet";
        wx.hideShareMenu(), this.setData({
            src: r
        });
    },
    handleError: function() {},
    handleLoad: function() {}
});