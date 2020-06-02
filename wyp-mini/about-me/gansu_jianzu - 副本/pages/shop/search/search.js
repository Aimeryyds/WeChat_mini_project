function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../../../network/api")), a = t(require("../../../utils/util.js"));

Page({
    data: {
        placeholder: "搜索商品"
    },
    onLoad: function(t) {
        t.storeid && (this.setData({
            storeid: t.storeid,
            type: "store"
        }), t.keyword && (this.setData({
            keyword: t.keyword
        }), this.queryStoreGoodsList({
            pageNo: 1,
            pageSize: 1e3,
            name: t.keyword,
            storeId: this.data.storeid
        }))), "goodslist" != t.type && "goods" != t.type || this.setData({
            type: t.type,
            dsId: t.dsId,
            location: t.location,
            dataType: t.dataType,
            brandsCategory: t.brandsCategory ? a.default.parse(t.brandsCategory) : "",
            categoryIds: t.categoryIds
        });
    },
    queryStoreGoodsList: function(t) {
        var a = this;
        wx.showLoading({
            title: "加载中"
        }), o.default.getStoreGoodsList(t).then(function(t) {
            wx.stopPullDownRefresh(), console.log("bingooooooooooooo", t), wx.hideLoading(), 
            a.setData({
                data: t.data.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    handleSearch: function(t) {
        if ("store" == this.data.type) {
            var o = {
                storeId: this.data.storeid,
                name: t.detail.value,
                pageNo: 1,
                pageSize: 1e4
            };
            this.queryStoreGoodsList(o);
        } else if ("goods" == this.data.type) {
            var a = this.data, e = {
                dsId: a.dsId,
                location: a.location,
                dataType: a.dataType,
                goodsName: t.detail.value,
                pageNo: 1,
                pageSize: 1e4
            };
            this.queryProducts(e);
        } else if ("goodslist" == this.data.type) {
            var d = this.data, s = d.dsId, i = d.location, r = d.dataType, n = d.brandsCategory, c = d.categoryIds, u = {
                dsId: s,
                location: i,
                dataType: r,
                goodsName: t.detail.value,
                pageNo: 1,
                pageSize: 1e4,
                brandsCategory: n || "",
                categoryIds: c
            };
            console.log(u, "parse"), this.queryGoodsList(u);
        }
    },
    backpage: function() {
        wx.navigateBack({});
    },
    makeproduct: function(t) {
        console.log(t.currentTarget.dataset.good, "++++++"), wx.redirectTo({
            url: "/pages/products/show/show?id=" + t.currentTarget.dataset.good.id
        });
    },
    queryProducts: function(t) {
        var a = this;
        wx.showLoading({
            title: "加载中"
        }), o.default.queryDatasourceGoods(t).then(function(t) {
            wx.hideLoading(), a.setData({
                data: t.data.data
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    queryGoodsList: function(t) {
        var a = this;
        wx.showLoading({
            title: "加载中"
        }), o.default.queryDatasourceGoodsListPost(t).then(function(t) {
            wx.hideLoading(), a.setData({
                data: t.data.data
            });
        }).catch(function(t) {
            console.log(t);
        });
    }
});