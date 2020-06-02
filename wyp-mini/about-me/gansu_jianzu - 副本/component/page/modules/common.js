var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/util.js"));

module.exports = Behavior({
    properties: {},
    data: {},
    attached: function() {},
    methods: {
        jump: function(e) {
            1 == getCurrentPages().length ? wx.navigateTo({
                url: e
            }) : wx.redirectTo({
                url: e
            });
        },
        handlephone: function(e) {
            wx.makePhoneCall({
                phoneNumber: e.currentTarget.dataset.mobile
            });
        },
        makecustome: function(e) {
            this.navigateToCustom(e);
        },
        makedataSource: function(s) {
            var t = s.currentTarget.dataset, a = t.type, o = t.options;
            console.log(a, o, "type, options, dsId");
            var i = o.dsId, d = void 0 === i ? "" : i, p = o.location, n = void 0 === p ? 1 : p, r = o.dataType, l = void 0 === r ? 1 : r, c = o.brandsCategory, u = void 0 === c ? "" : c;
            console.log(s.currentTarget.dataset), "store" == a ? this.jump("/pages/sources/stores/index?dsId=" + d + "&location=" + n + "&dataType=" + l) : "products" == a ? this.jump("/pages/sources/products/index?dsId=" + d + "&location=" + n + "&dataType=" + l + "&type=goodslist&brandsCategory=" + e.default.stringify(u)) : "service" == a ? this.jump("/pages/sources/services/index?dsId=" + d + "&location=" + n + "&dataType=" + l) : "brands" == a ? this.jump("/pages/sources/brands/index?dsId=" + d + "&location=" + n + "&dataType=" + l) : "miaosha" == a ? this.jump("/pages/sources/miaosha/index?dsId=" + d + "&location=" + n + "&dataType=" + l) : "tuan" == a ? this.jump("/pages/sources/tuan/index?dsId=" + d + "&location=" + n + "&dataType=" + l) : "supplyinfo" == a ? this.jump("/pages/sources/supplyinfo/supplyinfo?dsId=" + d + "&location=" + n + "&dataType=" + l) : "newsinfo" == a ? this.jump("/pages/sources/newsinfo/newsinfo?dsId=" + d + "&location=" + n + "&dataType=" + l) : "giftcard" == a && this.jump("/pages/giftcard/sources/giftcardlist/index?dsId=" + d + "&location=" + n + "&dataType=" + l);
        },
        navigateToCustom: function(s) {
            var t = s.currentTarget.dataset.item || s.currentTarget.dataset.link;
            if (console.log(t, "link"), t) if (t.location = t.location || 1, t.dataType = t.dataType || 1, 
            t.dsId = t.dsId || "", t.brandsCategory = t.brandsCategory || "", t.color = t.color || "", 
            "page" == t.type && t.link) this.jump("/modules/custome/custome?id=" + t.link); else if ("homestore" == t.type && t.link) this.jump("/pages/shop/products/products?storeid=" + t.link); else if ("brand" == t.type) this.jump("/pages/sources/brands/index?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType); else if ("store" == t.type) this.jump("/pages/sources/stores/index?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType + "&from=page"); else if ("goods" == t.type) console.log("goods-link", t), 
            this.jump("/pages/sources/products/index?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType + "&type=goodslist&from=page"); else if ("goodscategory" == t.type) console.log("goodscategory-link", t), 
            this.jump("/pages/sources/products/index?location=" + t.location + "&dataType=" + t.dataType + "&type=goodslist&brandsCategory=" + e.default.stringify(t.brandsCategory) + "&from=page"); else if ("project" == t.type) this.jump("/pages/sources/services/index?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType + "&from=page"); else if ("seckill" == t.type) this.jump("/pages/sources/miaosha/index?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType); else if ("groupurchase" == t.type) this.jump("/pages/sources/tuan/index?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType); else if ("info" == t.type) this.jump("/pages/sources/newsinfo/newsinfo?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType + "&from=page"); else if ("supplybuy" == t.type) this.jump("/pages/sources/supplyinfo/supplyinfo?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType + "&from=page"); else if ("fullreduction" == t.type) this.jump("/pages/manjian/index?dsId=" + t.dsId + "&location=" + t.location + "&dataType=" + t.dataType); else if ("miniProgramm" == t.type) wx.navigateToMiniProgram({
                appId: t.appId,
                path: t.path || ""
            }); else if ("customLink" == t.type) this.jump("/pages/webview/index?url=" + e.default.stringify(t.customLink)); else if ("live" == t.type) this.jump("/pages/live/list/index"); else if ("hotel" == t.type) {
                var a = wx.getStorageSync("location");
                this.jump("/pages/hotel/list/index?cityName=" + (a.cityName || "") + "&location=" + (a.location || "") + "&isLocation=2&cityCode=" + a.cityCode);
            } else "coupon" == t.type ? this.jump("/pages/sources/coupon/index?dsId=" + t.dsId + "&dataType=" + t.dataType + "&from=page&color=" + t.color) : "chuzhi" == t.type ? this.jump("/pages/storevalue/mystore/index") : t.imgUrl && wx.previewImage({
                current: t.imgUrl,
                urls: [ t.imgUrl ]
            });
        }
    }
});