require("../../../utils/util.js");

var e = require("../../../utils/https.js").imgurl;

Page({
    data: {
        phone: "",
        phongImg: e + "phone12.png"
    },
    onLoad: function(e) {
        wx.getStorageSync("certify");
        this.setData({
            phone: wx.getStorageSync("account")
        });
    },
    replacePhone: function() {
        var e = this.data.phone;
        wx.navigateTo({
            url: "../repPhone/index?phone=" + e
        });
    }
});