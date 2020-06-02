var i = require("../../../network/api.js");

Page({
    data: {},
    onLoad: function(i) {
        wx.showLoading({
            title: "加载中"
        }), this.queryLives();
    },
    queryLives: function() {
        var a = this;
        this.setData({
            loading: !0
        }), (0, i.queryFavoriteLives)({
            pageSize: 999
        }).then(function(i) {
            wx.hideLoading(), a.setData({
                liveList: i.data.data,
                loading: !1
            });
        }).catch(function(i) {
            wx.hideLoading(), a.setData({
                loading: !1
            });
        });
    },
    handleRemoveFavorite: function(i) {
        var a = this.data.liveList, t = i.detail.index;
        a.splice(t, 1), this.setData({
            liveList: a
        });
    },
    onNoDataTap: function(i) {
        wx.navigateTo({
            url: "/pages/live/list/index"
        });
    }
});