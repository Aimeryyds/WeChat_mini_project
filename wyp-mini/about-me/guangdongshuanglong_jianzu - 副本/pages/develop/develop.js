var e = require("../../utils/util.js"), o = require("../../utils/address.js"), t = require("../../utils/net.js"), s = getApp();

Page({
    data: {},
    onLoad: function(e) {
        s.IsShowBottomLogo(this), this.request();
    },
    request: function() {
        var a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], i = this, r = {
            appid: s.globalData.appid,
            level: 6,
            pageSize: 100,
            pageIndex: 1
        };
        a && e.showLoadingDialog("正在加载..."), t.POST(o.Address.GET_MODEL_DATA, r, {
            success: function(o, t) {
                e.hideLoadingDialog(), e.stopPullDownRefresh(), e.isOptStrNull(o) || e.isOptStrNull(o.data) ? i.setData({
                    canLoadMore: !1,
                    errorMsg: t
                }) : (console.log(o), i.setData({
                    Title: o.data[0].Title,
                    articles: o.data[0].MiniappdevelopmentList,
                    canLoadMore: !1,
                    errorMsg: "没有更多数据"
                }));
            },
            failure: function(o) {
                e.hideLoadingDialog(), e.stopPullDownRefresh(), console.log(o), i.setData({
                    errorMsg: o
                });
            }
        });
    },
    onPullDownRefresh: function() {
        this.request(!1), s.IsShowBottomLogo(this), wx.stopPullDownRefresh();
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/develop/develop"
        };
    }
});