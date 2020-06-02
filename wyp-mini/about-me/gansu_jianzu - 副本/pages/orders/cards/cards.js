function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../../../network/api")), a = t(require("../../../utils/const.js")), i = t(require("../../../utils/notification.js")), d = t(require("../../../utils/util"));

Page({
    data: {},
    onLoad: function(t) {
        if (t) {
            var o = d.default.parse(t.order), a = o.goodsList[0];
            this.setData({
                good: a,
                order: o
            });
            var i = {
                goodsId: a.id,
                propertiesId: a.propertiesId,
                num: a.num
            };
            o.coupon.id && (this.setData({
                coupon: o.coupon
            }), i.couponId = o.coupon.id), this.queryOrderCardList(i);
        }
    },
    queryOrderCardList: function(t) {
        var a = this;
        wx.showLoading({
            title: "加载中"
        }), o.default.queryOrderCardList(t).then(function(t) {
            wx.hideLoading(), console.log(t, "++++==============="), a.setData({
                cardlist: t.data.availableList
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    chooseCard: function(t) {
        console.log(t.currentTarget.dataset.id);
        var o = t.currentTarget.dataset.id;
        this.data.coupon ? (console.log("选择了会员卡，发通知-------------------------"), i.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: o,
            couponid: ""
        })) : i.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: o,
            couponid: ""
        }), wx.navigateBack();
    },
    nocard: function(t) {
        this.data.coupon ? i.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: "",
            couponid: this.data.coupon.id
        }) : i.default.post(a.default.action.SELECT_CARD_AND_COUPON, {
            cardid: "",
            couponid: ""
        }), wx.navigateBack();
    }
});