var e = require("../../../utils/server"), t = require("../../../wxParse/wxParse.js"), a = (getApp(), 
wx.getStorageSync("utoken"));

Page({
    data: {},
    onLoad: function(r) {
        var s = this;
        a = wx.getStorageSync("utoken"), e.sendRequest({
            url: "?r=wxapp.commission.register.getApplyContent&utoken=" + a,
            data: {},
            method: "GET",
            success: function(e) {
                e.data.result.applycontent && t.wxParse("article", "html", e.data.result.applycontent, s, 5);
            }
        });
    }
});