var a = require("../../utils/net"), e = require("../../utils/address"), t = require("../../utils/util"), o = require("./DateFormat"), r = getApp();

Page({
    data: {
        articles: [],
        currentPageIndex: 1,
        canLoadMore: !0,
        errorMsg: null
    },
    onLoad: function(a) {
        r.IsShowBottomLogo(this), console.log(a), this.loadDataFormNet();
    },
    onPullDownRefresh: function() {
        this.setData({
            currentPageIndex: 1,
            canLoadMore: !0,
            errorMsg: null
        }), this.loadDataFormNet(!1), r.IsShowBottomLogo(this), wx.stopPullDownRefresh();
    },
    loadDataFormNet: function() {
        var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], s = this, d = {
            appid: r.globalData.appid,
            level: 8,
            pageIndex: s.data.currentPageIndex
        };
        n && t.showLoadingDialog("正在加载..."), a.POST(e.Address.GET_MODEL_DATA, d, {
            success: function(a, e) {
                if (t.hideLoadingDialog(), t.stopPullDownRefresh(), t.isOptStrNull(a) || t.isOptStrNull(a.data)) s.setData({
                    canLoadMore: !1,
                    errorMsg: e
                }); else {
                    console.log(a);
                    for (var r = 1 == s.data.currentPageIndex ? [] : s.data.articles, n = 0; n < a.data.length; n++) {
                        var d = a.data[n];
                        d.Lastdate = o.dateParse(d.Lastdate), d.Createdate = o.dateParse(d.Createdate);
                    }
                    s.setData({
                        articles: r.concat(a.data),
                        currentPageIndex: s.data.currentPageIndex + 1
                    });
                }
            },
            failure: function(a) {
                t.hideLoadingDialog(), t.stopPullDownRefresh(), console.log(a), s.setData({
                    errorMsg: a
                });
            }
        });
    },
    onReachBottom: function() {
        this.data.canLoadMore && this.loadDataFormNet();
    },
    onItemClick: function(a) {
        var e = this.data.articles[a.currentTarget.dataset.index].Id;
        wx.navigateTo({
            url: "../detail/detail?id=" + e
        });
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/news/news"
        };
    }
});