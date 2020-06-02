var t = require("../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        width: 2 * Math.ceil(wx.getSystemInfoSync().windowWidth),
        loading: !0
    },
    onLoad: function(t) {
        var a = this;
        a.setData({
            id: t.id,
            type: t.type
        }), a.loadPageData();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    loadPageData: function() {
        a = wx.getStorageSync("utoken");
        var e = this;
        t.sendRequest({
            url: "?r=wxapp.groups.goods.openGroups",
            showToast: !1,
            data: {
                utoken: a,
                id: e.data.id
            },
            method: "GET",
            success: function(t) {
                console.log(t), e.setData({
                    data: t.data.result,
                    loading: !1
                });
            }
        });
    },
    toopen: function(t) {
        var a = this;
        wx.reLaunch({
            url: "../confirmOrder/index?id=" + t.currentTarget.dataset.id + "&type=" + a.data.type + "&heads=1"
        });
    },
    tofight: function(t) {
        wx.navigateTo({
            url: "../fightGroups/index?id=" + t.currentTarget.dataset.id
        });
    },
    todetail: function(t) {
        wx.navigateBack({
            delta: 2
        });
    }
});