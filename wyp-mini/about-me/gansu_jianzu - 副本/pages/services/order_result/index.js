function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("../../../network/api")), e(require("../../../utils/util"));

Page({
    data: {
        order: {
            store: {}
        }
    },
    onLoad: function(e) {
        this.setData({
            result: 1 == e.result,
            content: {
                title: 1 == e.result ? "支付成功" : "支付已取消",
                btnText: "查看订单",
                btnExtText: "返  回"
            },
            order: getApp().getFlash("service_create_orderdata")
        });
    },
    call: function(e) {
        console.log(e);
        var t = e.detail.data;
        console.log(t), t && wx.makePhoneCall({
            phoneNumber: t
        });
    },
    onTapResultAction: function() {
        this.data.order.union ? wx.redirectTo({
            url: "/pages/services/orders/index"
        }) : wx.redirectTo({
            url: "/pages/services/order_detail/index?id=" + this.data.order.id
        });
    },
    onTapResultActionExt: function() {
        wx.navigateBack();
    },
    preview: function(e) {
        var t = e.currentTarget.dataset, r = t.current, n = t.urls;
        wx.previewImage({
            current: n[r],
            urls: n
        });
    },
    str2arr: function(e) {
        var t = e.split("");
        return console.log("result=", t), t;
    }
});