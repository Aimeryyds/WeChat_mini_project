var e = getApp(), a = require("../../utils/util.js");

Page({
    data: {
        orderDetail: null,
        baseUrl: e.globalData.baseUrl
    },
    onLoad: function() {
        var e = wx.getStorageSync("orderDetail");
        e.createTime ? e.createTime = a.formatTime(e.createTime) : e.createTime = "时间有误", 
        e && this.setData({
            orderDetail: e
        });
    }
});