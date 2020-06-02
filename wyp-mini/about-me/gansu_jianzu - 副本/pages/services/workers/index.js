var o = function(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}(require("../../../network/api"));

Page({
    onLoad: function(o) {
        var t = o.shopId;
        this.setData({
            shopId: t
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryStaffList({
            storeId: o.shopId
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    queryStaffList: function(t) {
        var n = this;
        o.default.queryStaffList(t).then(function(o) {
            console.log(o, "++++"), wx.hideLoading(), n.setData({
                list: o.data.data,
                isShow: !0
            }), console.log(o, "++++++++++++");
        }).catch(function(o) {
            return console.log(o);
        });
    }
});