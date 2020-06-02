var a = require("../../../network/api.js");

Page({
    data: {},
    onLoad: function(a) {
        this.queryLives();
    },
    queryLives: function() {
        var i = this;
        this.setData({
            loading: !0
        }), (0, a.queryMyLives)({
            pageSize: 999
        }).then(function(a) {
            wx.hideLoading(), i.setData({
                liveList: a.data.data,
                loading: !1
            });
        }).catch(function(a) {
            wx.hideLoading(), i.setData({
                loading: !1
            });
        });
    }
});