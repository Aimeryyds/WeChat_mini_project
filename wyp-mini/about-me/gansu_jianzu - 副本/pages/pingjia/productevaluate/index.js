var a = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = e[i]);
    }
    return a;
}, t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../network/api"));

Page({
    data: {
        query: {
            pageNo: 1,
            pageSize: 5,
            status: -1,
            sType: ""
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
        this.setData({
            "query.sType": t.sType,
            "query.sid": t.sid,
            "query.storeId": t.storeId
        }), this.queryEvaluateList(this.data.query, !0), this.setData({
            pingjiaArray: this.data.pingjiaArray.map(function(t) {
                return a({}, t, {
                    num: e.data.evaluateData["" + t.type]
                });
            })
        });
    },
    queryEvaluateList: function(e, i) {
        var r = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.queryEvaluateList(e).then(function(t) {
            wx.hideLoading(), r.setData({
                evaluateData: i ? t.data : a({}, r.data.evaluateData, {
                    data: r.data.evaluateData.data.concat(t.data.data)
                }),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, r.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                }),
                isShow: !0,
                scrollTop: i ? 0 : void 0,
                pingjiaArray: r.data.pingjiaArray.map(function(e) {
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
        }), this.queryEvaluateList(a({}, this.data.query), !1));
    },
    evaluateTab: function(t) {
        var e = t.detail, i = (e.currentType, e.evaluate);
        console.log(t.detail, "........................."), this.setData({
            "query.status": i
        }), this.queryEvaluateList(a({}, this.data.query, {
            pageNo: 1
        }), !0);
    }
});