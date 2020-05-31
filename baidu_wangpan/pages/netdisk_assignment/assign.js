var e = require("../../netdisk_utils/common.js");

Page({
    data: {
        url: ""
    },
    onReady: function() {},
    onLoad: function(t) {
        var n = t.url;
        this.setData({
            url: decodeURIComponent(n) + "&iswx=Applet"
        }), e.DETAIL_SHARE || wx.hideShareMenu();
    }
});