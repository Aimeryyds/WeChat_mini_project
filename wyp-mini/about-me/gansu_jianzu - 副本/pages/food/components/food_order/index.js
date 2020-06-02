function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../../network/api")), a = t(require("../../../../behaviors/toast.js"));

Component({
    behaviors: [ a.default ],
    properties: {
        item: {
            type: Array,
            value: []
        },
        index: {
            type: Number
        }
    },
    data: {
        orderstatus: {
            0: "全部",
            10: "待付款",
            20: "已关闭",
            30: "待核销",
            70: "已完成"
        },
        isPaying: !1,
        numStyle: "color: #f00000;",
        format: "mm分ss秒"
    },
    ready: function() {
        this.data.item;
    },
    methods: {
        toPayOrder: function(t) {
            var a = this;
            console.log("123112233");
            var r = this, n = t.currentTarget.dataset.id;
            wx.showLoading({
                title: "请稍候"
            }), e.default.cyOrderPay({
                orderNo: n
            }).then(function(t) {
                wx.hideLoading(), 0 == t.status && t.data && t.data.nonceStr && wx.requestPayment({
                    timeStamp: t.data.timeStamp + "",
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: "MD5",
                    paySign: t.data.paySign,
                    success: function(t) {
                        r.triggerEvent("orderpaied", {});
                    },
                    fail: function(t) {}
                });
            }).catch(function(t) {
                r.setData({
                    isPaying: !1
                }), wx.hideLoading(), console.log("------that---111----", t), a.showToast(e.default.errors(t.error) || "调起支付失败");
            });
        },
        onEndCount: function(t) {
            this.triggerEvent("timeover", {
                index: this.data.index
            });
        }
    }
});