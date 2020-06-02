var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../network/api.js"));

Component({
    properties: {
        shopId: {
            type: String,
            value: ""
        },
        numTotal: {
            type: String,
            value: ""
        },
        priceTotal: {
            type: String,
            value: ""
        },
        selectFullMoney: {
            type: String,
            value: ""
        },
        action: {
            type: String,
            value: "store"
        },
        diningTableNo: {
            type: String,
            value: ""
        },
        cyType: {
            type: String,
            value: ""
        },
        minSendFeeDifference: {
            type: Number,
            value: ""
        },
        minSendFee: {
            type: Number,
            value: ""
        }
    },
    data: {},
    ready: function() {
        console.log(this.data, "data");
    },
    attached: function() {
        this.queryCartInfo();
    },
    methods: {
        queryCartInfo: function() {
            var t = this;
            this.data.shopId && e.default.queryCartStatics({
                storeId: this.data.shopId
            }).then(function(e) {
                t.setData({
                    numTotal: e.data.cartNum,
                    priceTotal: e.data.cartGoodsTotal,
                    showTip: !0,
                    selectFullMoney: e.data.fullMoney,
                    minSendFeeDifference: e.data.minSendFeeDifference,
                    minSendFee: e.data.minSendFee
                }), t.triggerEvent("changesendfee", {
                    data: e.data
                });
            }).catch(function() {
                t.setData({
                    cart: {
                        cartNum: 20,
                        cartGoodsTotal: 200
                    }
                });
            });
        },
        handleCheckout: function() {
            console.log("this.data.shopId----\x3e", this.data.shopId);
            var e = wx.getStorageSync("userinfo");
            e && e.mobile ? "checkout" == this.data.action ? this.triggerEvent("checkout", {}) : wx.navigateTo({
                url: "/pages/shop/carts/index?storeId=" + this.data.shopId + "&diningTableNo=" + this.data.diningTableNo + "&cyType=" + this.data.cyType
            }) : this.setData({
                showModal: !0,
                url: "/pages/login/login"
            });
        }
    }
});