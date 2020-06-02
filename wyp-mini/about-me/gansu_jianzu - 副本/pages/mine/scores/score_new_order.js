function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../network/api")), i = (t(require("../../../utils/notification.js")), 
t(require("../../../utils/const.js")), t(require("../../../utils/util"))), o = require("../../../dist/index");

Page(Object.assign({}, o.Quantity, o.TopTips, o.Toast, {
    data: {
        num: {
            quantity: 0,
            min: 1,
            max: 999
        },
        order: {},
        goods: {},
        formData: {},
        isPaying: !1,
        showDialog: !1
    },
    onLoad: function(t) {
        var a = i.default.parse(t.scoreorder), o = t.max, s = t.formData ? i.default.parse(t.formData) : {};
        console.log("formData----\x3e", s);
        var e = {
            quantity: a.buyCount,
            min: 1,
            max: o
        };
        a.goods.num = a.buyCount, this.setData({
            order: a,
            formData: s,
            num: e,
            total: a.buyCount * a.goods.price
        });
    },
    onShow: function() {},
    showTopTips: function(t) {
        this.showZanTopTips(t);
    },
    handleZanQuantityChange: function(t) {
        t.componentId;
        var a = parseInt(t.quantity);
        (isNaN(a) ? 1 : a) == this.data.num.max && this.showZanTopTips("已达最大库存数量");
        var i = this.data.num;
        i.quantity = a;
        var o = this.data.order;
        o.goods.num = a, this.setData({
            num: i,
            order: o,
            total: a * o.goods.price
        });
    },
    bindUserMsgInput: function(t) {
        var a = this.data.formData;
        a.userMsg = t.detail.value, this.setData({
            formData: a
        });
    },
    bindWeixinInput: function(t) {
        var a = this.data.formData;
        a.weixin = t.detail.value, this.setData({
            formData: a
        });
    },
    gopay: function(t) {
        var a = this.data.order;
        if (0 == a.type) {
            if (!a.consignee || !a.consignee.id) return void this.showTopTips("请选择收货地址");
            this.paySingleProduct(a);
        } else this.paySingleProduct(a);
    },
    paySingleProduct: function(t) {
        var i = this;
        if (!this.data.isPaying) {
            wx.showLoading({
                title: "请稍后"
            });
            var o = void 0;
            this.setData({
                isPaying: !0
            });
            var s = this;
            a.default.scoreOrderCreate({
                consigneeId: t.consignee.id,
                goodsId: t.goods.id,
                buyCount: t.goods.num,
                userMsg: this.data.formData.userMsg,
                weixin: this.data.formData.weixin
            }).then(function(t) {
                i.setData({
                    isPaying: !1
                }), wx.hideLoading(), o = t.data.id, console.log("orderNo------\x3e", o), s.showZanToast("积分支付成功"), 
                wx.redirectTo({
                    url: "/pages/mine/scores/score_order_show?from=zhifu&id=" + o
                });
            }).catch(function(t) {
                wx.hideLoading(), i.setData({
                    isPaying: !1
                }), s.showTopTips(a.default.errors(t.error) || "订单创建失败");
            });
        }
    },
    addAddress: function() {
        wx.redirectTo({
            url: "/pages/address/list/list?scoreorder=" + i.default.stringify(this.data.order) + "&formData=" + i.default.stringify(this.data.formData)
        });
    },
    selectAddress: function() {
        wx.redirectTo({
            url: "/pages/address/list/list?scoreorder=" + i.default.stringify(this.data.order) + "&formData=" + i.default.stringify(this.data.formData)
        });
    },
    toggleStoreDialog: function() {
        console.log("close"), this.setData({
            showDialog: !this.data.showDialog
        });
    }
}));