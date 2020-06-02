var t = getApp(), s = require("../../utils/hdweapp.js");

Page({
    data: {
        statusBar: {
            title: "7天贡献榜",
            height: t.globalData.systemInfo.statusBarHeight
        },
        sid: "",
        sortedConsumesList: [],
        hasPullReq: !1
    },
    onRefreshData: function() {
        this.setSortedConsumesInfo();
    },
    setSortedConsumesInfo: function() {
        var t = wx.getStorageSync("sortedConsumesInfo");
        (t = t.length && JSON.parse(t)) && 0 == t.result && t.total > 0 && t.chId == this.data.sid && (t.list = t.list.length > 10 ? t.list.slice(0, 10) : t.list, 
        this.setData({
            sortedConsumesList: t.list
        }));
        for (var s = this.data.sortedConsumesList; s.length < 3; ) s.push({});
        this.setData({
            sortedConsumesList: s,
            hasPullReq: !1
        });
    },
    onLoad: function(t) {
        this.setData({
            sid: t.sid
        }), this.setSortedConsumesInfo(), s.Page.init();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});