var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, a = function(t) {
    return t && t.__esModule ? t : {
        default: t
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
    onLoad: function(a) {
        var e = this;
        a.id && (this.setData({
            id: a.id
        }), wx.showLoading({
            title: "加载中"
        }), this.queryStoreDetail({
            id: a.id
        })), a && a.openevaluate && this.setData({
            openevaluate: a.openevaluate
        }), 1 == this.data.openevaluate && (this.queryStoreEvaluate(this.data.query, !0), 
        this.setData({
            pingjiaArray: this.data.pingjiaArray.map(function(a) {
                return t({}, a, {
                    num: e.data.storeEvaluateData["" + a.type]
                });
            })
        }));
    },
    queryStoreDetail: function(t) {
        var e = this;
        a.default.getStoreDetail(t).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("bingooooooooooooo", t);
            for (var a = [], o = [], i = 0; i < t.data.couponList.length; i++) t.data.couponList[i].stock > 0 ? a.push(t.data.couponList[i]) : o.push(t.data.couponList[i]);
            a = a.concat(o), e.setData({
                couponlist: a,
                storedetail: t.data,
                isShow: !0
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    queryStoreEvaluate: function(e, o) {
        var i = this;
        wx.showLoading({
            title: "请稍后"
        }), a.default.queryStoreEvaluate(t({}, e, {
            storeId: this.data.id
        })).then(function(a) {
            wx.hideLoading(), i.setData({
                storeEvaluateData: o ? a.data : t({}, i.data.storeEvaluateData, {
                    data: i.data.storeEvaluateData.data.concat(a.data.data)
                }),
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, i.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                }),
                isShow: !0,
                scrollTop: o ? 0 : void 0,
                pingjiaArray: i.data.pingjiaArray.map(function(e) {
                    return t({}, e, {
                        num: a.data["" + e.type]
                    });
                })
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.queryStoreEvaluate(t({}, this.data.query), !1));
    },
    evaluateTab: function(t) {
        var a = t.detail, e = (a.currentType, a.evaluate);
        console.log(t.detail, "........................."), this.setData({
            "query.status": e
        }), this.queryStoreEvaluate(this.data.query, !0);
    },
    calling: function() {
        var t = this.data.storedetail.areaNum, a = this.data.storedetail.tel;
        wx.makePhoneCall({
            phoneNumber: t ? t + a : a
        });
    },
    reciveCoupon: function(t) {
        console.log(t.target.dataset.id, "++++++++++");
        var a = t.target.dataset.id;
        wx.navigateTo({
            url: "/pages/coupons/receive_coupon/index?id=" + a
        });
    },
    handleStoreMap: function(t) {
        var a = t.currentTarget.dataset.storedetail;
        wx.openLocation({
            name: a.storeName,
            address: a.detailAddress,
            latitude: parseFloat(a.lat),
            longitude: parseFloat(a.lng),
            success: function(t) {
                console.log(t);
            }
        });
    },
    collectionOn: function(t) {
        var e = this, o = this.data.storedetail;
        o.hasCollection ? a.default.unfollowStore({
            storeId: o.id
        }).then(function(t) {
            t && 0 == t.status && t.data.result && e.queryStoreDetail({
                id: o.id
            });
        }) : a.default.followStore({
            storeId: o.id
        }).then(function(t) {
            t && 0 == t.status && t.data.result && e.queryStoreDetail({
                id: o.id
            });
        });
    },
    onTapPic: function(t) {
        console.log("4545454545454545", t.currentTarget.dataset.index);
        var a = t.currentTarget.dataset, e = a.imgindex, o = a.type, i = a.index;
        wx.previewImage({
            current: t.currentTarget.dataset.link,
            urls: "first" == o ? this.data.storeEvaluateData.data[i].evaluates[e].firstEvaluateImgs : this.data.storeEvaluateData.data[i].evaluates[e].secondEvaluateImgs
        });
    }
});