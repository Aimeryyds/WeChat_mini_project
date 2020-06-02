var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        index: 1
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onLoad: function(a) {
        var s = this;
        console.log(a), s.setData({
            id: a.id
        }), t.sendRequest({
            url: "?r=wxapp.sns.board.lists",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(t) {
                s.setData({
                    left: t.data.result
                });
                for (var e in t.data.result) s.setData({
                    id: t.data.result[e].id
                }), console.log(s.data.id);
            }
        }), t.sendRequest({
            url: "?r=wxapp.sns.board.get_boardlist",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(t) {
                s.setData({
                    right: t.data.result.list
                });
            }
        });
    },
    tab: function(a) {
        console.log(a.currentTarget.dataset.index);
        var s = this;
        s.setData({
            index: a.currentTarget.dataset.index,
            id: a.currentTarget.dataset.id
        }), t.sendRequest({
            url: "?r=wxapp.sns.board.get_boardlist",
            data: {
                cid: a.currentTarget.dataset.id,
                page: 1,
                utoken: e
            },
            method: "GET",
            success: function(t) {
                console.log(t.data.result), s.setData({
                    right: t.data.result.list
                });
            }
        });
    },
    formSubmit: function(a) {
        var s = this;
        t.sendRequest({
            url: "?r=wxapp.sns.board.get_boardlist",
            data: {
                cid: s.data.id,
                page: 1,
                keywords: a.detail.value,
                utoken: e
            },
            method: "GET",
            success: function(t) {
                console.log(t.data.result), s.setData({
                    right: t.data.result.list
                });
            }
        });
    },
    toList: function(t) {
        console.log(t), wx.reLaunch({
            url: "../list/index/index?id=" + t.currentTarget.dataset.bid
        });
    }
});