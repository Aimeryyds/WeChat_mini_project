var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api"));

Page({
    data: {
        shop: {},
        diningTableNo: ""
    },
    onLoad: function(e) {
        var o = this, s = e.storeid;
        e.diningTableNo && this.setData({
            diningTableNo: "" + e.diningTableNo
        }), this.setData({
            shopId: s
        }), wx.showLoading({
            title: "请稍候",
            mask: !0
        }), t.default.getStoreType({
            id: this.data.shopId
        }).then(function(t) {
            o.setData({
                shop: t.data
            }), 1 != o.data.shop.status && wx.hideLoading();
        });
    },
    onShow: function() {
        var t = getApp().getFlash("category");
        if (console.log("category----------\x3e", t), this.data.shop) if (2 == this.data.shop.storeType || 4 == this.data.shop.storeType && 1 == this.data.shop.goodsPattern || !this.data.shop.storeType && 1 == this.data.shop.goodsPattern) {
            var e = this.selectComponent("#storeo2o");
            e && e.queryCartInfo();
        } else if (1 == this.data.shop.storeType || 4 == this.data.shop.storeType && 1 == this.data.shop.mallPattern || !this.data.shop.storeType && 1 == this.data.shop.mallPattern) {
            var o = this.selectComponent("#storemall");
            o && o.queryCartInfo(), t && o && o.setQueryCategory(t);
        }
    },
    onShareAppMessage: function() {
        var e = {}, o = this.selectComponent("#storeo2o"), s = this.selectComponent("#storemall"), a = this.selectComponent("#storeservice"), r = this.selectComponent("#storehotel"), i = this.selectComponent("#storefood");
        console.log("storemallComponent--\x3e", s), o ? e = o.getStoreDetail() : s ? e = s.getStoreDetail() : a ? e = a.getStoreDetail() : r ? e = r.getStoreDetail() : i && (e = i.getStoreDetail()), 
        console.log("门店store----------\x3e", e);
        var n = wx.getStorageSync("userinfo"), h = this.data.shopId;
        return {
            title: e.describe && e.describe.length > 0 ? e.describe : e.storeName,
            imageUrl: this.data.shop.shareImg,
            path: "/pages/shop/products/products?storeid=" + h + "&shareCode=" + n.shareCode,
            success: function() {
                t.default.onShareStore({
                    storeId: h
                });
            }
        };
    }
});