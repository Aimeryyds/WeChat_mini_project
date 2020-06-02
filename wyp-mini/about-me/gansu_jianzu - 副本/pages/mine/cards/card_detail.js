var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../network/api"));

Page({
    data: {},
    onLoad: function(n) {
        console.log(n, "+++++++"), this.querycarddetail({
            id: n.id
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    querycarddetail: function(o) {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), n.default.queryCardDetail(o).then(function(n) {
            wx.hideLoading(), console.log(n, "+_+_+_+_+_+_+"), t.setData({
                carddata: n.data
            });
        }).catch(function(n) {
            return console.log(n);
        });
    }
});