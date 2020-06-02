function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("../../../network/api")), r = a(require("../../../utils/util"));

Page({
    data: {},
    onLoad: function(a) {
        this.setData({
            orderId: a.id
        });
    },
    onReady: function() {},
    onShow: function() {
        this.queryOrderDetail(this.data.orderId);
    },
    queryOrderDetail: function(a) {
        var r = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.showOrder({
            id: a
        }).then(function(a) {
            console.log(a, "++++"), wx.hideLoading(), r.setData({
                applyformData: a.data
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    applyformUrl: function(a) {
        console.log(a, "{{{{{{{{{{{");
        var t = a.currentTarget.dataset.name;
        "仅退款" == t ? wx.redirectTo({
            url: "/pages/returngoods/applyform/index?id=" + this.data.orderId + "&refundType=2&applyformData=" + r.default.stringify(this.data.applyformData)
        }) : "退货退款" == t ? wx.redirectTo({
            url: "/pages/returngoods/applyform/index?id=" + this.data.orderId + "&refundType=3&applyformData=" + r.default.stringify(this.data.applyformData)
        }) : wx.redirectTo({
            url: "/pages/returngoods/applyform/index?id=" + this.data.orderId + "&refundType=1&applyformData=" + r.default.stringify(this.data.applyformData)
        });
    }
});