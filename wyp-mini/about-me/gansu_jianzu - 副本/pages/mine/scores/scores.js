function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../../utils/util"));

var o = t(require("../../../network/api"));

Page({
    data: {
        pointList: [],
        loadmore: !1,
        isloadingmore: !1,
        remainPoints: 0
    },
    onLoad: function(t) {
        var o = getApp().globalData.color;
        this.setData({
            color: o
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = {
            pageNo: 1,
            pageSize: 10
        };
        this.queryPointList(t, !0, !0);
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    queryPointList: function(t, i, a) {
        var e = this, n = t || {};
        i && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), wx.stopPullDownRefresh(), o.default.queryScoreUserCenter(n).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("api.queryScoreGoodsList-----------\x3e", t), 
            0 == t.status && e.setData({
                isloadingmore: !1,
                remainPoints: t.data.remainPoints,
                pointList: a ? t.data.pointsList.data : e.data.pointList.concat(t.data.pointsList.data),
                loading: !1,
                loadmore: t.data.pointsList.nextCursor > 0,
                query: {
                    pageNo: t.data.pointsList.nextCursor,
                    pageSize: t.data.pointsList.pageSize
                }
            });
        }).catch(function(t) {
            console.log(t), wx.stopPullDownRefresh(), wx.hideLoading(), e.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    lower: function(t) {
        this.data.loadmore && !this.data.isloadingmore && (console.log("true"), this.setData({
            isloadingmore: !0
        }), this.queryPointList(this.data.query, !1, !1));
    }
});