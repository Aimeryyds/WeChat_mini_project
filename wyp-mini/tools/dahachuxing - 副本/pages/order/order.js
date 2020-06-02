var a = getApp(), e = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        mainColor: "",
        textColor: "",
        headColor: ""
    },
    onLoad: function(t) {
        this.setData({
            mainColor: a.globalData.mainColor,
            textColor: a.globalData.textColor,
            headColor: a.globalData.headColor
        });
        var o = a.globalData.baseUrl + "rideLog/queryPage.do", i = this;
        wx.showToast({
            title: "正在加载",
            icon: "loading",
            mask: !0
        }), a.checkToken(function(a) {
            if (a.length > 0) {
                var t = {
                    token: a,
                    rowCount: 1,
                    pageNO: 1
                };
                e.request(o, t, function(a) {
                    wx.hideToast(), i.setData({
                        machineNO: a.data[0].userCode,
                        stopTime: e.formatTime_curret(Math.ceil(a.data[0].stopTime / 60)),
                        money: (Number(a.data[0].money) / 100).toFixed(2),
                        time: e.timeDifference(a.data[0].startTime, a.data[0].endTime),
                        mileage: a.data[0].mileage,
                        remark: void 0 === a.data[0].remark ? "无数据" : a.data[0].remark
                    });
                });
            }
        });
    },
    getHistory: function(t, o, i) {
        a.checkToken(function(n) {
            if (n.length > 0) {
                var r = a.globalData.baseUrl + "history/query.do", l = {
                    mapType: 2,
                    machineId: i,
                    startTime: t,
                    endTime: o,
                    token: n
                };
                e.request(r, l, function(a) {
                    a.ret && console.log(a);
                });
            }
        });
    },
    back: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    detail: function() {
        var a = this.data.remark.replace(/,/g, "  ");
        e.tip(a);
    },
    valuationRule: function() {
        var a = this;
        wx.navigateTo({
            url: "../valuationRule/valuationRule?machineNO=" + a.data.machineNO,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    onReady: function() {},
    onShow: function() {}
});