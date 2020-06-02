var t = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        select: 0
    },
    onLoad: function(t) {
        var a = this;
        a.loadingData(a.data.select);
    },
    loadingData: function(a) {
        var e = this, s = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.groups.team.get_list",
            showToast: !1,
            data: {
                utoken: s,
                success: e.data.select
            },
            method: "GET",
            success: function(t) {
                console.log(t), e.setData({
                    loading: !1,
                    data: t.data.result.list
                });
            }
        });
    },
    select: function(t) {
        var a = this;
        a.setData({
            data: ""
        }), a.setData({
            select: t.currentTarget.dataset.index
        }), a.loadingData(t.currentTarget.dataset.index);
    },
    toDetail: function(t) {
        var a = this;
        wx.navigateTo({
            url: "./detail/index?id=" + t.currentTarget.dataset.id + "&key=" + a.data.select + "&teamid=" + t.currentTarget.dataset.teamid
        });
    },
    onShareAppMessage: function() {}
});