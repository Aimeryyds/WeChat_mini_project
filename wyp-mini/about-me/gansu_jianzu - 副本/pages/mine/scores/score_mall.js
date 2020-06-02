function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
}, o = (e(require("../../../utils/util")), e(require("../../../network/api")));

require("../../../dist/index");

Page({
    data: {
        bannerList: [],
        width: 750,
        goodsList: [],
        loadmore: !1,
        isloadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 6,
            sort: "points:ascend",
            type: -1
        },
        sort: "points",
        array: [ "全部", "普通商品", "优惠券", "礼品卡" ],
        index: 0
    },
    onLoad: function(e) {
        try {
            wx.getSystemInfoSync();
        } catch (e) {}
        var t = getApp().globalData.color;
        this.setData({
            color: t
        }), this.queryBannerList(!0), this.queryGoodList(this.data.query, !0, !0);
    },
    onShow: function() {
        var e = getApp().getFlash("keyword");
        console.log(getApp().getFlash("keyword"), "++++++++++++++++", e), e || "" == e ? (this.setData({
            keyword: e,
            "query.goodsName": e,
            isShow: !1
        }), this.queryGoodList(this.data.query, !0, !0)) : this.setData({
            keyword: "",
            "query.goodsName": ""
        });
    },
    onPullDownRefresh: function() {
        this.queryBannerList(!0);
        this.queryGoodList(this.data.query, !0, !0);
    },
    queryBannerList: function(e) {
        var t = this;
        e && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), wx.stopPullDownRefresh(), o.default.queryScoreBannerList({}).then(function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("api.queryScoreBannerList-----------\x3e", e), 
            t.setData({
                bannerList: e.data.bannerList
            });
        }).catch(function(e) {
            console.log(e), wx.stopPullDownRefresh(), wx.hideLoading(), t.setData({
                loading: !1
            });
        });
    },
    queryGoodList: function(e, a, s) {
        var r = this;
        a && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), wx.stopPullDownRefresh(), o.default.queryScoreGoodsList(e).then(function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("api.queryScoreGoodsList-----------\x3e", e), 
            0 == e.status && r.setData({
                isloadingmore: !1,
                goodsList: s ? e.data.data : r.data.goodsList.concat(e.data.data),
                loading: !1,
                loadmore: e.data.nextCursor > 0,
                query: t({}, r.data.query, {
                    pageNo: e.data.nextCursor,
                    pageSize: e.data.pageSize
                }),
                scrollTop: s ? 0 : void 0,
                isShow: !0
            });
        }).catch(function(e) {
            console.log(e), wx.stopPullDownRefresh(), wx.hideLoading(), r.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    lower: function(e) {
        console.log(this.data.loadmore), this.data.loadmore && !this.data.isloadingmore && (this.setData({
            isloadingmore: !0
        }), this.queryGoodList(t({}, this.data.query), !1, !1));
    },
    bindPickerChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value);
        var o = e.detail.value;
        this.setData({
            index: e.detail.value,
            "query.type": 0 == o ? "-1" : 1 == o ? "0" : 2 == o ? "1" : "2"
        }), this.queryGoodList(t({}, this.data.query, {
            pageNo: 1
        }), !0, !0);
    },
    handleSwitchSort: function(e) {
        console.log(e.target.dataset, "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        var o = e.currentTarget.dataset.sort;
        console.log(o, "&&&&&&&&5555555555555555&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"), "points" == o ? this.setData({
            sort: o,
            "query.pageNo": 1,
            "query.sort": o + ":ascend"
        }) : this.setData({
            sort: o,
            "query.pageNo": 1,
            "query.sort": o + ":descend"
        }), this.queryGoodList(t({}, this.data.query), !0, !0);
    },
    handlesearch: function() {
        var e = this.data.keyword || "";
        wx.navigateTo({
            url: "/pages/sources/newsinfo/newssearch?keyword=" + e
        });
    },
    toDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/mine/scores/score_product?id=" + t
        });
    },
    toPay: function(e) {
        var t = e.currentTarget.dataset.id;
        console.log(t, "mmmmmmmmmmmmmmmmmmmmmm"), o.default.checkScoreOrder({
            goodsId: t,
            buyCount: 1
        }).then(function(e) {
            wx.hideLoading(), wx.navigateTo({
                url: "/pages/mine/scores/score_new_order?scoreorder=" + JSON.stringify(e.data)
            });
        }).catch(function(e) {});
    }
});