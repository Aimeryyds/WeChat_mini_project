var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../network/api"));

Page({
    data: {},
    onLoad: function(n) {
        this.distributionClientList();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    distributionClientList: function() {
        var t = this;
        wx.showLoading({
            title: "请稍后"
        }), n.default.distributionClientList({
            pageSize: 999
        }).then(function(n) {
            console.log(n, "++++"), wx.hideLoading(), t.setData({
                clientList: n.data.data,
                isShow: !0
            }), console.log(n, "++++++++++++");
        }).catch(function(n) {
            return console.log(n);
        });
    }
});