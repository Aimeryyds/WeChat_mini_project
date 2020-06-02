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
}(require("../../../network/api"));

Page({
    data: {
        toggle: !0,
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 2,
            status: -1
        },
        pingjiaArray: [ {
            name: "全部",
            num: 0,
            type: "reviewsNum"
        }, {
            name: "好评",
            num: 0,
            type: "goodReviewsNum"
        }, {
            name: "中评",
            num: 0,
            type: "middleReviewsNum"
        }, {
            name: "差评",
            num: 0,
            type: "badReviewsNum"
        }, {
            name: "有图",
            num: 0,
            type: "imgReviewsNum"
        } ]
    },
    onLoad: function(t) {
        var e = this;
        t.id && (this.setData({
            id: t.id
        }), wx.showLoading({
            title: "加载中"
        })), t && t.openevaluate && this.setData({
            openevaluate: t.openevaluate
        }), 1 == this.data.openevaluate && (this.queryStoreEvaluate(this.data.query, !0), 
        this.setData({
            pingjiaArray: this.data.pingjiaArray.map(function(t) {
                return a({}, t, {
                    num: e.data.storeEvaluateData["" + t.type]
                });
            })
        }));
    },
    queryStoreEvaluate: function(e, r) {
        var i = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.queryStoreEvaluate(a({}, e, {
            storeId: this.data.id
        })).then(function(t) {
            wx.hideLoading(), i.setData({
                storeEvaluateData: r ? t.data : a({}, i.data.storeEvaluateData, {
                    data: i.data.storeEvaluateData.data.concat(t.data.data)
                }),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, i.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                }),
                isShow: !0,
                scrollTop: r ? 0 : void 0,
                pingjiaArray: i.data.pingjiaArray.map(function(e) {
                    return a({}, e, {
                        num: t.data["" + e.type]
                    });
                })
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.queryStoreEvaluate(a({}, this.data.query), !1));
    },
    evaluateTab: function(a) {
        var t = a.detail, e = (t.currentType, t.evaluate);
        console.log(a.detail, "........................."), this.setData({
            "query.status": e
        }), this.queryStoreEvaluate(this.data.query, !0);
    },
    onTapPic: function(a) {
        console.log("4545454545454545", a.currentTarget.dataset.index);
        var t = a.currentTarget.dataset, e = t.imgindex, r = t.type, i = t.index;
        wx.previewImage({
            current: a.currentTarget.dataset.link,
            urls: "first" == r ? this.data.storeEvaluateData.data[i].evaluates[e].firstEvaluateImgs : this.data.storeEvaluateData.data[i].evaluates[e].secondEvaluateImgs
        });
    }
});