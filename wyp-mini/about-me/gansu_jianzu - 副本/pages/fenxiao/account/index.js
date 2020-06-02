var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../network/api"));

Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {
        this.queryToCenter();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    queryToCenter: function() {
        var o = this;
        n.default.queryToCenter().then(function(n) {
            console.log(n, "++++"), wx.hideLoading(), o.setData({
                toCenterData: n.data,
                isShow: !0
            }), console.log(n, "++++++++++++");
        }).catch(function(n) {
            return console.log(n);
        });
    },
    withdrawLink: function() {
        wx.navigateTo({
            url: "/pages/fenxiao/withdraw/index?balance=" + this.data.toCenterData.balance
        });
    },
    withdrahistorywLink: function() {
        wx.navigateTo({
            url: "/pages/fenxiao/withdraw_histories/index"
        });
    }
});