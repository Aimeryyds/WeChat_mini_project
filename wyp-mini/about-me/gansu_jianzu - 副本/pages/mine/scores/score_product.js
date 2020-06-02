function t(t, a, o) {
    return a in t ? Object.defineProperty(t, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = o, t;
}

var a, o = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api")), n = require("../../../utils/wxParse/wxParse.js"), e = require("../../../dist/index");

Page(Object.assign({}, e.Quantity, e.Tab, e.TopTips, e.Toast, (a = {
    data: {
        loading: !0,
        showDialog: !1,
        action: 0,
        cartCount: 0,
        formData: {
            num: {
                quantity: 1,
                min: 1,
                max: 9999,
                hasSelect: !1
            }
        },
        tabs: {
            list: [ {
                id: "2",
                title: "商品详情"
            } ],
            selectedId: "1",
            scroll: !1,
            height: 42
        },
        goods: {
            id: 0,
            name: "",
            price: 0,
            props: [],
            content: "",
            images: []
        }
    },
    onLoad: function(t) {
        wx.getSystemInfoSync();
        this.setData({
            id: t.id,
            height: 750
        }), this.queryProductById();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShare: function() {
        this.onShareAppMessage();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.goods.name
        };
    }
}, t(a, "onReachBottom", function() {}), t(a, "onPullDownRefresh", function() {}), 
t(a, "queryProductById", function() {
    var t = this, a = {};
    a.id = this.data.id, wx.showLoading({
        title: "请稍候"
    }), o.default.queryScoreGoodsDetail(a).then(function(a) {
        wx.stopPullDownRefresh(), wx.hideLoading();
        var o = a.data.imageUrl.map(function(t) {
            return {
                imgUrl: t.img1,
                link: t.img1,
                title: t.img1
            };
        });
        t.setData({
            goods: {
                id: a.data.id,
                name: a.data.goodsName,
                goprice: a.data.price,
                gstock: a.data.count,
                images: o,
                imgs: a.data.imageUrl,
                content: a.data.goodsDetail,
                type: a.data.type,
                coupon: a.data.coupon,
                card: a.data.card
            },
            loading: !1,
            formData: {
                num: {
                    quantity: 0 == a.data.count ? 0 : 1,
                    min: 0 == a.data.count ? 0 : 1,
                    max: a.data.count,
                    hasSelect: !1
                }
            }
        }), n.wxParse("content", "html", a.data.goodsDetail ? a.data.goodsDetail : "暂无", t, 5);
    }).catch(function(t) {
        wx.stopPullDownRefresh(), wx.hideLoading();
    });
}), t(a, "onTapCarousel", function(t) {
    wx.previewImage({
        current: t.currentTarget.dataset.link,
        urls: this.data.goods.imgs
    });
}), t(a, "handleZanQuantityChange", function(a) {
    a.componentId;
    var o = parseInt(a.quantity), n = isNaN(o) ? 1 : o;
    n == this.data.formData.num.max && this.showZanTopTips("已达最大库存数量"), this.setData(t({}, "formData.num.quantity", n));
}), t(a, "handleBuyNow", function() {
    var t = this, a = this.data.formData.num.hasSelect, n = this.data.formData.num.quantity;
    if (0 == this.data.goods.gstock) this.showZanTopTips("库存为零"); else if (a || n) {
        wx.showLoading({
            title: "请稍候"
        }), this.setData({
            showDialog: !1,
            action: 0
        });
        var e = this;
        o.default.checkScoreOrder({
            goodsId: this.data.goods.id,
            buyCount: n
        }).then(function(a) {
            wx.hideLoading(), wx.navigateTo({
                url: "/pages/mine/scores/score_new_order?scoreorder=" + JSON.stringify(a.data) + "&max=" + t.data.goods.gstock
            }), t.setData({
                showDialog: !1,
                action: 0
            });
        }).catch(function(a) {
            e.showZanTopTips("提交订单失败"), wx.hideLoading(), t.setData({
                showDialog: !1,
                action: 0
            });
        });
    } else this.showZanTopTips("选择数量");
}), t(a, "toggleStoreDialog", function() {
    console.log("close"), this.setData({
        showDialog: !this.data.showDialog
    });
}), a)));