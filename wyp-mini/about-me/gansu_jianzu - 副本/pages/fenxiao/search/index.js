function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = Object.assign || function(t) {
    for (var o = 1; o < arguments.length; o++) {
        var e = arguments[o];
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
}, e = t(require("../../../dist/index")), a = t(require("../../../network/api"));

Page(Object.assign({}, e.default.Toast, {
    data: {
        placeholder: "搜索商品",
        type2: "share",
        query: {
            pageNo: 1,
            pageSize: 1e3
        }
    },
    onLoad: function(t) {
        t && t.storeid && (console.log("++++++++++++++++++++++"), this.setData({
            query: o({}, this.data.query, {
                storeId: t.storeid
            })
        }));
    },
    distributionGoodsList: function(t) {
        var o = this;
        a.default.distributionGoodsList(t).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), o.setData({
                goodList: t.data.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    handleSearch: function(t) {
        var e = o({
            keyword: t.detail.value
        }, this.data.query);
        this.setData({
            query: e
        }), wx.showLoading({
            title: "加载中"
        }), this.distributionGoodsList(e);
    },
    collection: function(t) {
        var e = this, s = t.currentTarget.dataset, i = s.id, r = s.type;
        console.log(r, "/////////////////////////////////222222222"), a.default.shareGoodsList({
            goodsId: i,
            type: 0 == r ? "share" : "cancel"
        }).then(function(t) {
            0 == r ? e.showToast("收藏成功") : e.showToast("已取消收藏"), e.distributionGoodsList(o({}, e.data.query), !0);
        }).catch(function(t) {
            return console.log(t);
        });
    },
    showToast: function(t) {
        this.showZanToast(t);
    },
    showProductDetail: function(t) {
        var o = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/products/show/show?id=" + o + "&&isFromShop=false&&from=distribution"
        });
    }
}));