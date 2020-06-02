var a = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
    }
    return a;
}, t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../../network/api.js"));

Page({
    data: {
        giftcardlistData: [],
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 20
        }
    },
    onLoad: function(a) {
        console.log(a, "{{{{{{{{{{{{{{{}}}}}}}}}}}");
        var t = a.dsId;
        this.setData({
            "query.dsId": t
        }), this.queryGiftcardList(this.data.query, !0);
    },
    queryGiftcardList: function(e, r) {
        var o = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.queryGiftcardList(a({}, e)).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), o.setData({
                giftcardlistData: r ? t.data.data : o.data.giftcardlistData.concat(t.data.data),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, o.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                })
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.queryGiftcardList(this.data.query, !1));
    },
    giftCardToBuy: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/giftcard/buy/index?urlType=cardIndex&id=" + t
        });
    }
});