function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../../network/api")), t(require("../../../utils/util"));

var e = require("../../../dist/index");

Page(Object.assign({}, e.Toast, {
    onLoad: function(t) {
        var e = t.result;
        this.setData({
            result: 1 == e,
            content: {
                id: t.id,
                title: 1 == e ? "支付成功" : "支付已取消",
                btnText: "查看预定订单",
                btnExtText: "返  回"
            }
        });
    },
    onTapResultAction: function() {
        this.data.iso2o, wx.redirectTo({
            url: "/pages/hotel/order_detail/index?id=" + this.data.content.id
        });
    },
    onTapResultActionExt: function() {
        wx.navigateBack();
    }
}));