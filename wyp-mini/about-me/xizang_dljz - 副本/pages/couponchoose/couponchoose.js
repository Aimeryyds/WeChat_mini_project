getApp();

var t, i = require("../../utils/functions");

require("../../utils/util");

Page({
    data: {
        tags: [ "可使用", "不可使用" ],
        list: null,
        invalidList: null,
        payPrice: 0,
        chooseId: 0,
        selected: 0,
        rebateDiscount: !1
    },
    onLoad: function(i) {
        t = this;
        var n = JSON.parse(i.orders);
        t.setData({
            payPrice: n.payPrice,
            chooseId: n.chooseId
        });
    },
    onShow: function() {
        t.getUseList(), t.getInvalidList();
    },
    getUseList: function() {
        i.getCouponChooseList(t.data.payPrice, 1, function(i) {
            i.list = i.list.map(function(t) {
                if (t.coupon) {
                    null != t.coupon.beginTime && (t.coupon.beginTime = t.coupon.beginTime.split(" ")[0]), 
                    null != t.coupon.endtTime && (t.coupon.endTime = t.coupon.endTime.split(" ")[0]);
                    var i = [];
                    1 == t.coupon.openAmountLimit && i.push("满" + t.limitAmount + "元可用"), 1 == t.coupon.openOriginalLimit && i.push("仅限原价购买使用"), 
                    t.limitStr = i.length > 0 ? i.join("、") : "无使用限制";
                } else t.limitStr = "满" + t.limitAmount + "元可用";
                return t;
            }), t.setData({
                list: i.list
            });
        });
    },
    getInvalidList: function() {
        i.getCouponChooseList(t.data.payPrice, 2, function(i) {
            i.list = i.list.map(function(t) {
                if (t.coupon) {
                    t.coupon.beginTime = t.coupon.beginTime.split(" ")[0], t.coupon.endTime = t.coupon.endTime.split(" ")[0];
                    var i = [];
                    1 == t.coupon.openAmountLimit && i.push("满" + t.coupon.limitAmount + "元可用"), 1 == t.coupon.openOriginalLimit && i.push("仅限原价购买使用"), 
                    t.limitStr = i.length > 0 ? i.join("、") : "无使用门槛";
                } else t.limitStr = "满" + t.limitAmount + "元可用";
                return t;
            }), t.setData({
                invalidList: i.list
            });
        });
    },
    chooseCoupon: function(i) {
        var n = t.data.list[i.currentTarget.id], e = getCurrentPages();
        e[e.length - 2].setData({
            coupon: n,
            payPrice: (t.data.payPrice - n.amount).toFixed(2)
        }), wx.navigateBack();
    },
    noUseCoupon: function() {
        var i = getCurrentPages();
        i[i.length - 2].setData({
            coupon: null,
            payPrice: t.data.payPrice
        }), wx.navigateBack();
    },
    clickTag: function(t) {
        var i = parseInt(t.currentTarget.id);
        this.setData({
            selected: i
        });
    },
    scrollContent: function(t) {
        var i = t.detail.current;
        this.setData({
            selected: i
        });
    }
});