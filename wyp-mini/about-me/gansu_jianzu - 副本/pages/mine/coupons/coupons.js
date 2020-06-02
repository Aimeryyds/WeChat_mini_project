var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api"));

Page({
    data: {},
    onLoad: function(t) {
        this.querycouponlist();
    },
    querycouponlist: function() {
        var o = this;
        wx.showLoading({
            title: "加载中"
        }), t.default.queryCouponList().then(function(t) {
            if (wx.hideLoading(), t && 0 == t.status) {
                for (var a = [], n = [], e = 0; e < t.data.length; e++) 0 == t.data[e].overTime ? a.push(t.data[e]) : n.push(t.data[e]);
                a = a.concat(n), o.setData({
                    couponlist: a
                });
            }
        }).catch(function(t) {
            return console.log(t);
        });
    }
});