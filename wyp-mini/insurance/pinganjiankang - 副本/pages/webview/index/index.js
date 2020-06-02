require("../../../utils/mBuriedPoint.js"), getApp(), require("../../../utils/util.js");

Page({
    data: {
        src: ""
    },
    onLoad: function() {
        this.setData({
            src: wx.getStorageSync("webviewUrl")
        }), console.log(this.data.src);
    }
});