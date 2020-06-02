var t = require("../../utils/net"), o = require("../../utils/address"), a = require("../../utils/util"), e = require("../../wxParse/wxParse.js"), r = getApp();

Page({
    data: {
        articles: [],
        canLoadMore: !0,
        errorMsg: null
    },
    onLoad: function(t) {
        r.IsShowBottomLogo(this), console.log(t), this.loadDataFormNet();
    },
    onPullDownRefresh: function() {
        this.setData({
            canLoadMore: !0,
            errorMsg: null
        }), this.loadDataFormNet(!1), r.IsShowBottomLogo(this), wx.stopPullDownRefresh();
    },
    loadDataFormNet: function() {
        var s = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = this, i = {
            appid: r.globalData.appid,
            level: 5,
            pageSize: 100
        };
        s && a.showLoadingDialog("正在加载..."), t.POST(o.Address.GET_MODEL_DATA, i, {
            success: function(t, o) {
                if (a.hideLoadingDialog(), a.stopPullDownRefresh(), a.isOptStrNull(t) || a.isOptStrNull(t.data)) n.setData({
                    canLoadMore: !1,
                    errorMsg: o
                }); else {
                    console.log(t);
                    var r = [];
                    "[object Array]" == Object.prototype.toString.call(t.data) && t.data.forEach(function(t, o) {
                        t.Content = e.wxParse("Content", "html", t.Content, n, 5);
                    }), n.setData({
                        articles: r.concat(t.data),
                        canLoadMore: !1,
                        errorMsg: "没有更多数据"
                    });
                }
            },
            failure: function(t) {
                a.hideLoadingDialog(), a.stopPullDownRefresh(), console.log(t), n.setData({
                    errorMsg: t
                });
            }
        });
    },
    nextPage: function() {
        this.data.canLoadMore && this.loadDataFormNet();
    },
    onItemClick: function(t) {
        wx.navigateTo({
            url: "../detail/detail?id=" + t.currentTarget.dataset.index + "&isProduct=1"
        });
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/product/product"
        };
    }
});