var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api")), e = require("../../../dist/index.js");

Page(Object.assign({}, e.TopTips, {
    onLoad: function(t) {
        console.log(t, "????????????????????????????"), this.setData({
            tradeNo: t.tradeNo,
            pkgId: t.pkgId,
            loading: !0,
            imgUrl: t.imgUrl,
            urlType: t.urlType
        }), wx.showLoading({
            title: "请稍候"
        }), this.queryGiftOrderDetail(t.tradeNo);
    },
    queryGiftOrderDetail: function(e) {
        var a = this;
        t.default.queryGiftOrderDetail({
            orderNo: e
        }).then(function(t) {
            wx.hideLoading(), console.log("++++===============", t), a.setData({
                loading: !1,
                result: 1,
                content: {
                    resultTxt: "支付成功",
                    name: t.data.giftCardsName,
                    price: t.data.giftCardsPrice,
                    btnText: "立即赠送",
                    btnExtText: "查看详情"
                }
            });
        }).catch(function(t) {
            wx.hideLoading(), a.setData({
                loading: !1
            });
        });
    },
    onShareAppMessage: function(e) {
        var a = this;
        return console.log("path---\x3e", "/pages/giftcard/receive/index?pkgId=" + this.data.pkgId), 
        console.log("this.data.imgUrl---\x3e", this.data.imgUrl), {
            title: a.data.content.name + " " + a.data.content.price,
            path: "/pages/giftcard/receive/index?pkgId=" + this.data.pkgId + "&urlType=" + this.data.urlType,
            imageUrl: this.data.imgUrl,
            success: function() {
                var e = this;
                t.default.giftcardLargess({
                    pkgId: a.data.pkgId
                }).then(function(t) {
                    wx.switchTab({
                        url: "/tabs/home/index"
                    });
                }).catch(function(t) {
                    e.showTopTips("赠送失败，请重新赠送");
                });
            }
        };
    },
    onTapResultActionExt: function() {
        wx.redirectTo({
            url: "/pages/giftcard/mygiftcard/index"
        });
    },
    showTopTips: function(t) {
        this.showZanTopTips(t);
    }
}));