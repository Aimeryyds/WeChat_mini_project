var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api"));

Page({
    data: {},
    onLoad: function(t) {
        console.log(t, "------------------------------------------");
        var a = t.id;
        wx.showLoading({
            title: "请稍后"
        }), this.withdrawDetail({
            id: a
        }, !0);
    },
    withdrawDetail: function(a, i) {
        var e = this;
        t.default.withdrawDetail(a).then(function(t) {
            wx.hideLoading(), e.setData({
                wdDetailData: i ? t.data : e.data.wdDetailData.concat(t.data)
            });
        }).catch(function(t) {
            return console.log(t);
        });
    }
});