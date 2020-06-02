require("../../58268180480303CF3E40E9872402F6C0.js"), getApp();

Page({
    data: {},
    onLoad: function(e) {
        var t = decodeURIComponent(e.url);
        console.log("reurl" + t), this.setData({
            url: t
        });
    }
});