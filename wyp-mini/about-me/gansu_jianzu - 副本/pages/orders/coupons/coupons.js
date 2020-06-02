function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../../../network/api")), a = t(require("../../../utils/const.js")), d = t(require("../../../utils/notification.js")), e = t(require("../../../utils/util"));

Page({
    data: {},
    onLoad: function(t) {
        if (t) {
            var o = e.default.parse(t.order), a = o.goodsList[0];
            this.setData({
                good: a,
                order: o
            });
            var d = {
                goodsId: a.id,
                propertiesId: a.propertiesId,
                num: a.num,
                storeId: o.storeId,
                customerCardId: "",
                goodsTotalMoney: o.goodsTotalMoney,
                couponListMoney: o.couponListMoney,
                userDistributionType: o.userDistributionType || ""
            };
            o.card.userCardId && (this.setData({
                card: o.card
            }), d.customerCardId = o.card.userCardId), this.queryOrderCouponList(d);
        }
    },
    queryOrderCouponList: function(t) {
        var a = this;
        wx.showLoading({
            title: "加载中"
        }), o.default.queryOrderCouponList(t).then(function(t) {
            wx.hideLoading(), console.log(t), a.setData({
                datalist: t.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    choosecoupon: function(t) {
        console.log(t.target.dataset.coupon);
        var o = t.currentTarget.dataset.coupon.id;
        this.data.card ? d.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: this.data.card.userCardId,
            couponid: o
        }) : d.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: "",
            couponid: o
        }), wx.navigateBack();
    },
    nocoupon: function() {
        this.data.card ? d.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: this.data.card.userCardId,
            couponid: ""
        }) : d.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: "",
            couponid: ""
        }), wx.navigateBack();
    }
});