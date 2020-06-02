function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../../network/api"));

t(require("../../../../behaviors/toast.js"));

Component({
    properties: {
        shopId: {
            type: String,
            value: ""
        }
    },
    data: {
        shopService: {
            shop: {},
            products: {
                data: [],
                nextCursor: 1
            },
            loadmore: !1
        }
    },
    attached: function() {},
    methods: {
        getProducts: function(t) {
            var a = this, o = t.shopId, s = t.pageNo, r = void 0 === s ? 1 : s, d = (t.pageSize, 
            this.data.shopService.products);
            e.default.queryStoreGoodsList({
                storeId: o,
                pageNo: r,
                pageSize: 10
            }).then(function(t) {
                var e = [];
                t && t.data && t.data.data && t.data.data.length > 0 && d.pageNo != t.data.nextCursor && (e = d.data.concat(t.data.data)), 
                console.log("shopService.products.data-------\x3e", a.data.shopService.products.data), 
                a.setData({
                    "shopService.products": t.data,
                    "shopService.products.data": e
                });
            });
        },
        onReachBottom: function(t) {
            if (console.log("onReachBottom"), 3 != this.data.shopService.shop.storeType) {
                this.data.shopService.products.nextCursor > 0 && !this.data.shopService.loadmore && (this.setData({
                    "shopServcie.loadmore": !0
                }), this.getProducts({
                    shopId: this.data.shopId,
                    pageNo: this.data.shopService.products.nextCursor,
                    pageSize: 10
                }));
            }
        },
        handleOpenMap: function() {
            var t = this.data.shopService.shop;
            console.log("store", t), wx.openLocation({
                name: t.storeName,
                address: t.detailAddress,
                latitude: parseFloat(t.lat),
                longitude: parseFloat(t.lng),
                success: function(t) {
                    console.log(t);
                }
            });
        },
        callShop: function(t) {
            var e = t.currentTarget.dataset.areanum, a = t.currentTarget.dataset.phone;
            wx.makePhoneCall({
                phoneNumber: e.toString() + a.toString()
            });
        },
        jumpstoredetail: function(t) {
            var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.openevaluate;
            wx.navigateTo({
                url: "/pages/shop/desc/desc?id=" + e + "&openevaluate=" + a
            });
        },
        setStoreDetail: function(t) {
            this.setData({
                "shopService.shop": t.detail.store
            }), 3 != t.detail.store.storeType && this.getProducts({
                shopId: this.data.shopId
            });
        },
        getStoreDetail: function() {
            return console.log("data.detail===>", this.data.shopService.shop), this.data.shopService.shop;
        }
    }
});