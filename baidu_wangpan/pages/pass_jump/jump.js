var t = require("../../pass_config");

Page({
    data: {
        delta: "",
        jumpUrl: "",
        hostName: t.hostName
    },
    onLoad: function(t) {
        this.setData({
            webId: Math.random().toString(36).substring(2, 7),
            delta: t.delta,
            jumpUrl: wx.getStorageSync("jumpUrl"),
            jumpUrl_wx: wx.getStorageSync("jumpUrl_wx"),
            encryptInfo: encodeURIComponent(t.encryptInfo)
        }), console.log(this.data);
    }
});