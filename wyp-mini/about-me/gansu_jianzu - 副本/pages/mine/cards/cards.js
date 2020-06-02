var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../network/api"));

Page({
    data: {},
    onLoad: function(n) {
        this.querycardlist();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    querycardlist: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), n.default.queryCardList().then(function(n) {
            wx.hideLoading(), console.log(n, "+_+_+_+_+_+_+");
            for (var o = [], a = [], e = 0; e < n.data.length; e++) 3 == n.data[e].status ? a.push(n.data[e]) : o.push(n.data[e]);
            o = o.concat(a), t.setData({
                cardlist: o
            });
        }).catch(function(n) {
            return console.log(n);
        });
    }
});