Component({
    properties: {
        chooseType: {
            type: String
        },
        productType: {
            type: String
        }
    },
    data: {
        vipTab: [ {
            titleName: "会员VIP",
            type: "vip"
        }, {
            titleName: "超级会员SVIP",
            type: "svip"
        } ],
        isDialogShow: !1,
        dialogList: [ {
            text: "日常价：是指非限时活动的超级会员商品销售价格。"
        }, {
            text: "月均价：平均单月价格，计算方式为超级会员/会员商品的销售标价除以对应月份。"
        } ]
    },
    methods: {
        clickSvip: function() {
            this.triggerEvent("changeTab", {
                type: "svip"
            });
        },
        clickVip: function() {
            this.triggerEvent("changeTab", {
                type: "vip"
            });
        },
        showPriceNoteDialog: function() {
            this.setData({
                isDialogShow: !0
            });
        },
        hidePriceNoteDialog: function() {
            this.setData({
                isDialogShow: !1
            });
        }
    }
});