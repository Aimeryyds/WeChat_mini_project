Page({
    data: {
        src: "",
        errMsg: ""
    },
    onLoad: function(e) {
        var n = decodeURIComponent(e.src);
        wx.hideShareMenu(), this.setData({
            src: n
        });
    },
    handleError: function() {},
    handleLoad: function() {}
});