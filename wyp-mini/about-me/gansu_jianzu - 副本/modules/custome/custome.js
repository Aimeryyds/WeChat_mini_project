var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../network/api"));

Page({
    onPullDownRefresh: function() {
        var e = this.data.id;
        this.queryPageById(e);
    },
    onLoad: function(e) {
        this.setData({
            id: e.id
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryPageById(e.id);
    },
    onShareAppMessage: function() {
        return {
            imageUrl: this.data.shareImg,
            title: this.data.desc || this.data.title
        };
    },
    queryPageById: function(a) {
        var i = this;
        t.default.getPageById({
            id: a
        }).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), i.setData(e({}, t.data, {
                serverTime: t.serverTime
            }));
        }).catch(function(e) {
            console.error(e), wx.hideLoading();
        });
    }
});