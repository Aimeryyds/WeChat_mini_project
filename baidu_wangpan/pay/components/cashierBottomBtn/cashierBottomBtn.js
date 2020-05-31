Component({
    properties: {
        chooseType: {
            type: String
        },
        userVipStatus: {
            type: String
        },
        productId: {
            type: String
        },
        productIdCanBuy: {
            type: String
        },
        productName: {
            type: String
        },
        productPrice: {
            type: String
        },
        productPriceNote: {
            type: String
        },
        showBottomBtn: {
            type: Boolean
        }
    },
    data: {
        name: {
            vip1_1y: "1年会员",
            vip1_3m: "3个月会员",
            vip1_1m: "1个月会员",
            vip2_1y: "1年超级会员",
            vip2_3m: "3个月超级会员",
            vip2_1m: "1个月超级会员"
        }
    },
    methods: {
        payCheck: function(t) {
            this.triggerEvent("payCallback", t.detail);
        }
    }
});