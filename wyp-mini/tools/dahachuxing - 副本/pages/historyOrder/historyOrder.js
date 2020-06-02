var a = getApp(), t = require("../../utils/util");

require("../../utils/config.js").appColor;

Page({
    data: {
        historyOrders: [],
        tip: "",
        mainColor: "",
        textColor: ""
    },
    onLoad: function() {
        this.setData({
            mainColor: a.globalData.mainColor,
            textColor: a.globalData.textColor
        });
        var e = this, o = a.globalData.baseUrl + "rideLog/getByUserId.do";
        wx.showToast({
            title: "正在加载",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), a.checkToken(function(a) {
            a.length > 0 && t.request(o, {
                token: a
            }, function(a) {
                if (wx.hideToast(), void 0 !== a.data && 0 != a.data.length) {
                    for (var o = [], i = 0; i < a.data.length; i++) {
                        var r = "骑行中";
                        a.data[i].endTime && (r = t.timeDifference(a.data[i].startTime, a.data[i].endTime));
                        var n = {
                            userCode: a.data[i].userCode,
                            machineId: a.data[i].machineId,
                            startTime: a.data[i].startTime,
                            endTime: a.data[i].endTime,
                            mileage: a.data[i].mileage,
                            time: r,
                            money: a.data[i].money,
                            remark: a.data[i].remark
                        };
                        o.push(n);
                    }
                    e.setData({
                        historyOrders: o
                    });
                } else e.setData({
                    tip: "没有更多记录了 "
                });
            });
        });
    },
    toTrack: function(t) {
        var e = t.currentTarget.dataset.item;
        a.globalData.historyItem = e, wx.navigateTo({
            url: "./historicalTrack/historicalTrack?action=history"
        });
    },
    onReady: function() {},
    onShow: function() {}
});