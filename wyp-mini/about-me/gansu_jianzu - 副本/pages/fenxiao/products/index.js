function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var o = arguments[a];
        for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
    }
    return t;
}, o = t(require("../../../dist/index")), e = t(require("../../../network/api"));

Page(Object.assign({}, o.default.Toast, {
    data: {
        goodList: [],
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 10,
            sort: "saleNum:descend"
        },
        sort: "saleNum",
        order: "descend",
        list: []
    },
    onLoad: function(t) {
        console.log(t, "PPPPPPPPPPPPPPPPP"), t && t.type && this.setData({
            query: a({}, this.data.query),
            type: t.type
        }), this.distributionGoodsList(this.data.query, !0);
    },
    distributionGoodsList: function(t, o) {
        var i = this;
        wx.showLoading({
            title: "加载中"
        }), console.log(t, "query"), "list" == this.data.type ? e.default.mycollectionList(t).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), i.setData({
                isShow: !0,
                goodList: o ? t.data.data : i.data.goodList.concat(t.data.data),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, i.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                }),
                scrollTop: o ? 0 : void 0
            });
            var e = t.data.data.map(function(t) {
                return t.isShare;
            });
            i.setData({
                list: i.data.list.concat(e)
            });
        }).catch(function(t) {
            return console.log(t);
        }) : e.default.distributionGoodsList(t).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), i.setData({
                isShow: !0,
                goodList: o ? t.data.data : i.data.goodList.concat(t.data.data),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, i.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                }),
                scrollTop: o ? 0 : void 0
            });
            var e = t.data.data.map(function(t) {
                return t.isShare;
            });
            i.setData({
                list: i.data.list.concat(e)
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.distributionGoodsList(a({}, this.data.query), !1));
    },
    handleSwitchSort: function(t) {
        console.log(t.target.dataset, "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        var o = t.currentTarget.dataset.sort;
        console.log(o, "&&&&&&&&5555555555555555&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        var e = this.data.sort;
        "price" != o && o == e || ("price" == o ? o == e ? (this.setData({
            order: "ascend" == this.data.order ? "descend" : "ascend"
        }), this.setData({
            "query.pageNo": 1,
            "query.sort": o + ":" + this.data.order
        })) : (console.log(o, "iiiiiiiiiiiiiiiiiiiiiii"), this.setData({
            sort: o,
            order: "ascend",
            "query.pageNo": 1,
            "query.sort": o + ":ascend"
        })) : this.setData({
            sort: o,
            "query.pageNo": 1,
            "query.sort": o
        }), this.distributionGoodsList(a({}, this.data.query), !0));
    },
    showToast: function(t) {
        this.showZanToast(t);
    },
    collection: function(t) {
        var a = this, o = t.currentTarget.dataset, i = o.id, s = o.type, r = o.index;
        console.log(s, "/////////////////////////////////222222222"), e.default.shareGoodsList({
            goodsId: i,
            type: 0 == s ? "share" : "cancel"
        }).then(function(t) {
            if (t && t.data.result) if ("list" == a.data.type) {
                var o = a.data.goodList;
                o.splice(r, 1), a.setData({
                    goodList: o
                });
            } else {
                var e = a.data.list;
                e[r] = e[r] > 0 ? 0 : 1, a.setData({
                    list: e
                });
            }
        }).catch(function(t) {
            return console.log(t);
        });
    },
    onSearch: function() {
        wx.navigateTo({
            url: "/pages/fenxiao/search/index"
        });
    },
    showProductDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/products/show/show?id=" + a + "&&from=distribution"
        });
    },
    handleOpenstore: function(t) {
        console.log(t, "e");
        var a = t.currentTarget.dataset.storeid;
        wx.redirectTo({
            url: "/pages/fenxiao/products/store?storeid=" + a
        });
    }
}));