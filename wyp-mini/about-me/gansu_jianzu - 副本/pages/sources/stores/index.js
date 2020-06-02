var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, a = require("../../../network/api");

Page({
    data: {
        query: {
            pageNo: 1,
            pageSize: 20,
            sort: "sales:descend"
        }
    },
    onLoad: function(a) {
        a && this.setData({
            query: t({}, this.data.query, {
                dsId: a.dsId,
                location: a.location,
                dataType: a.dataType
            })
        }), a.from && this.setData({
            from: a.from,
            navToDetail: !0
        }), this.queryStoreList(this.data.query, !0);
    },
    onSearch: function(a) {
        var e = a.detail.value, o = this.data.query, s = o.dsId, i = o.location, r = o.dataType;
        this.setData({
            query: {
                dsId: s,
                location: i,
                dataType: r,
                pageSize: 20,
                pageNo: 1,
                sort: "sales:descend",
                q: e
            }
        }), this.queryStoreList(t({}, this.data.query), !0), this.setData({
            serverTime: new Date().getTime()
        });
    },
    queryStoreList: function(e, o) {
        var s = this, i = this.data, r = i.from, d = i.navToDetail;
        wx.showLoading({
            title: "加载中"
        }), (0, a.queryStoreDatasource)(e).then(function(a) {
            if (console.log(a, "++++"), wx.hideLoading(), "page" == r && d && a.data.data && 1 == a.data.data.length) {
                console.log("+++++++++++++++++++++++++-----------------------");
                var e = a.data.data[0];
                s.setData({
                    navToDetail: !1,
                    isShow: !1
                }), wx.redirectTo({
                    url: "/pages/shop/products/products?storeid=" + e.id
                });
            } else s.setData({
                isShow: !0,
                navToDetail: !1
            });
            s.setData({
                data: o ? a.data.data : s.data.data.concat(a.data.data),
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, s.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                })
            }), console.log(a, "++++++++++++");
        }).catch(function(t) {
            return console.log(t);
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(t), 
        this.setData({
            loadingmore: !0
        }), this.queryStoreList(this.data.query, !1));
    },
    makestore: function(t) {
        var a = t.currentTarget.dataset.store;
        wx.navigateTo({
            url: "/pages/shop/products/products?storeid=" + a.id
        });
    },
    handleQuery: function(a) {
        wx.showLoading({
            title: "加载中"
        });
        var e = a.detail, o = e.sort, s = e.query;
        console.log("before", this.data), this.setData({
            query: t({}, this.data.query, {
                sort: o || this.data.sort,
                activityType: s ? s.activityType : void 0,
                logisticsType: s ? s.logisticsType : void 0,
                pageNo: 1,
                pageSize: 20
            })
        }), console.log("after", this.data), console.log(this.data.query), this.queryStoreList(this.data.query, !0);
    },
    clearSearch: function() {
        var t = this.data.query, a = t.dsId, e = t.location, o = t.dataType;
        this.setData({
            query: {
                dsId: a,
                location: e,
                dataType: o,
                pageSize: 20,
                pageNo: 1,
                sort: "sales:descend"
            }
        }), this.setData({
            serverTime: new Date().getTime()
        }), this.queryStoreList(this.data.query, !0);
    },
    handlePopShow: function(t) {
        this.setData({
            popShow: !0
        }), console.log(this.data.popShow);
    },
    handlePopHide: function(t) {
        this.setData({
            popShow: !1
        }), console.log(this.data.popShow);
    },
    makestoredetail: function(t) {
        var a = t.currentTarget.dataset, e = a.storedetail;
        a.store;
        wx.navigateTo({
            url: "/pages/products/show/show?id=" + e.id
        });
    },
    handleServiceClick: function(t) {
        console.log("服务跳门店", t.currentTarget), wx.navigateTo({
            url: "/pages/services/service_detail/index?shopId=" + t.currentTarget.dataset.storeid + "&serviceId=" + t.currentTarget.dataset.storedetail.id
        });
    }
});