var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    }
    return t;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../network/api"));

Page({
    data: {
        width: 750
    },
    onLoad: function(t) {
        var e = getApp().globalConfig;
        this.setData({
            globalConfig: e
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryCustom();
    },
    onShareAppMessage: function() {
        return {
            imageUrl: this.data.shareImg,
            path: "/tabs/custome/custome",
            title: this.data.desc || this.data.title
        };
    },
    onPullDownRefresh: function() {
        this.queryCustom(), console.log("++++++++++++++++");
    },
    queryCustom: function() {
        var o = this;
        e.default.queryCustom().then(function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading(), o.setData(t({}, e.data, {
                serverTime: e.serverTime
            }));
        }).catch(function(t) {
            console.log(t), wx.hideLoading();
        });
    }
});