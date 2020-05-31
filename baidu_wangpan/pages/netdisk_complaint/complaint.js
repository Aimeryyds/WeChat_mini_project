var a = getApp();

Page({
    data: {
        surl: "",
        height: 0
    },
    onLoad: function(t) {
        wx.hideShareMenu(), t && t.surl && this.setData({
            surl: "https://pan.baidu.com/s/" + t.surl,
            height: a.globalData.navHeight
        });
    },
    complainBtn: function() {
        wx.setClipboardData({
            data: this.data.surl
        }), wx.log.sharepage.reportCopyLink.send();
    }
});