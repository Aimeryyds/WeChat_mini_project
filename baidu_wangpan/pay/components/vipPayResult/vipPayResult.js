Component({
    properties: {
        getResultSuc: {
            type: Boolean
        },
        type: {
            type: String
        },
        price: {
            type: String
        },
        productName: {
            type: String
        },
        endTime: {
            type: String
        },
        backurl: {
            type: String
        },
        username: {
            type: String
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
        },
        isSvip: !0
    },
    ready: function() {
        this.setData({
            isSvip: this.properties.productName && this.properties.productName.indexOf("vip2") > -1
        });
    }
});