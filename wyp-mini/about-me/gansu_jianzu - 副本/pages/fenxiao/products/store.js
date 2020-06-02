function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var e, o = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, i = t(require("../../../dist/index")), r = t(require("../../../network/api"));

Page(Object.assign({}, i.default.Toast, (e = {
    data: {},
    onLoad: function(t) {
        console.log(t);
    },
    onShow: function() {}
}, a(e, "data", {
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
}), a(e, "onLoad", function(t) {
    t && t.storeid && this.setData({
        query: o({}, this.data.query, {
            storeId: t.storeid
        }),
        type: t.type,
        storeId: t.storeid
    }), this.queryStoreDetail({
        id: t.storeid
    }), this.distributionGoodsList(this.data.query, !0);
}), a(e, "queryStoreDetail", function(t) {
    var a = this;
    r.default.getStoreDetail(t).then(function(t) {
        console.log(t, "res"), a.setData({
            store: t.data
        });
    });
}), a(e, "distributionGoodsList", function(t, a) {
    var e = this;
    wx.showLoading({
        title: "加载中"
    }), console.log(t, "query"), "list" == this.data.type ? r.default.mycollectionList(t).then(function(t) {
        console.log(t, "++++"), wx.hideLoading(), e.setData({
            goodList: a ? t.data.data : e.data.goodList.concat(t.data.data),
            loadmore: t.data.nextCursor > 0,
            loadingmore: !1,
            query: o({}, e.data.query, {
                pageNo: t.data.nextCursor,
                pageSize: t.data.pageSize
            }),
            scrollTop: a ? 0 : e.data.scrollTop
        });
        var i = t.data.data.map(function(t) {
            return t.isShare;
        });
        e.setData({
            list: e.data.list.concat(i)
        });
    }).catch(function(t) {
        return console.log(t);
    }) : r.default.distributionGoodsList(t).then(function(t) {
        console.log(t, "++++"), wx.hideLoading(), e.setData({
            goodList: a ? t.data.data : e.data.goodList.concat(t.data.data),
            loadmore: t.data.nextCursor > 0,
            loadingmore: !1,
            query: o({}, e.data.query, {
                pageNo: t.data.nextCursor,
                pageSize: t.data.pageSize
            }),
            scrollTop: a ? 0 : ""
        });
        var i = t.data.data.map(function(t) {
            return t.isShare;
        });
        e.setData({
            list: e.data.list.concat(i)
        });
    }).catch(function(t) {
        return console.log(t);
    });
}), a(e, "lower", function(t) {
    console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
        loadingmore: !0
    }), this.distributionGoodsList(o({}, this.data.query), !1));
}), a(e, "handleSwitchSort", function(t) {
    console.log(t.target.dataset, "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    var a = t.currentTarget.dataset.sort;
    console.log(a, "&&&&&&&&5555555555555555&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    var e = this.data.sort;
    "price" != a && a == e || ("price" == a ? a == e ? (this.setData({
        order: "ascend" == this.data.order ? "descend" : "ascend"
    }), this.setData({
        "query.pageNo": 1,
        "query.sort": a + ":" + this.data.order
    })) : (console.log(a, "iiiiiiiiiiiiiiiiiiiiiii"), this.setData({
        sort: a,
        order: "ascend",
        "query.pageNo": 1,
        "query.sort": a + ":ascend"
    })) : this.setData({
        sort: a,
        "query.pageNo": 1,
        "query.sort": a
    }), this.distributionGoodsList(o({}, this.data.query), !0));
}), a(e, "showToast", function(t) {
    this.showZanToast(t);
}), a(e, "collection", function(t) {
    var a = this, e = t.currentTarget.dataset, o = e.id, i = e.type, s = e.index;
    r.default.shareGoodsList({
        goodsId: o,
        type: 0 == i ? "share" : "cancel"
    }).then(function(t) {
        if (t && t.data.result) if ("list" == a.data.type) {
            var e = a.data.goodList;
            e.splice(s, 1), a.setData({
                goodList: e
            });
        } else {
            var o = a.data.list;
            o[s] = o[s] > 0 ? 0 : 1, a.setData({
                list: o
            });
        }
    }).catch(function(t) {
        return console.log(t);
    });
}), a(e, "onSearch", function() {
    var t = this.data.store.id;
    wx.redirectTo({
        url: "/pages/fenxiao/search/index?storeid=" + t
    });
}), a(e, "showProductDetail", function(t) {
    var a = t.currentTarget.dataset.id;
    wx.redirectTo({
        url: "/pages/products/show/show?id=" + a + "&&from=distribution"
    });
}), a(e, "jumpstoredetail", function(t) {
    var a = t.currentTarget.dataset.id;
    wx.navigateTo({
        url: "/pages/shop/desc/desc?id=" + a
    });
}), e)));