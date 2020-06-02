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
}(require("../../network/api"));

Page({
    data: {
        storelist: [],
        query: {
            pageSize: 20,
            pageNo: 1
        }
    },
    onLoad: function(a) {
        var e = getApp().getFlash("brand");
        console.log(e);
        var o = e.id;
        this.setData({
            brand: e,
            query: t({}, this.data.query, {
                brandId: o
            })
        }), wx.showLoading({
            title: "加载中"
        }), this.queryStoreList(this.data.query);
    },
    makestore: function(t) {
        console.log(t.currentTarget.dataset.store, ")((((((((((((((()))))))))))))))"), wx.redirectTo({
            url: "/pages/shop/products/products?storeid=" + t.currentTarget.dataset.store.id
        });
    },
    queryStoreList: function(e, o) {
        var r = this;
        a.default.getStoreListByLocation(e).then(function(a) {
            wx.hideLoading(), r.setData({
                storelist: o ? a.data.data : r.data.storelist.concat(a.data.data),
                isShow: !0,
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, r.data.query, {
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
    makePhone: function(t) {
        console.log(t.target.dataset), t.target.dataset.phone && wx.makePhoneCall({
            phoneNumber: t.target.dataset.phone
        });
    }
});