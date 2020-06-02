function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../network/api")), e = t(require("../../../utils/util")), i = require("../../../dist/index");

Page(Object.assign({}, i.Toast, {
    data: {
        showDialog: !1
    },
    onLoad: function(t) {
        var a = t.result, i = t.autoPushCards ? e.default.parse(t.autoPushCards) : [];
        this.setData({
            result: 1 == a,
            content: {
                id: t.id,
                title: 1 == a ? "支付成功" : "支付已取消",
                btnText: "查看订单",
                btnExtText: "返  回"
            },
            autoPushCards: i,
            autoPushCard: {},
            isReceived: []
        });
    },
    onTapResultAction: function() {
        wx.redirectTo({
            url: "/pages/food/fooddetail/index?id=" + this.data.content.id
        });
    },
    onTapResultActionExt: function() {
        wx.navigateBack();
    },
    receivevip: function(t) {
        var e = this;
        console.log(t);
        var i = t.currentTarget.dataset.index;
        this.data.isReceived[i] ? this.showZanToast("已经领取过了") : (wx.showLoading({
            title: "加载中"
        }), a.default.receiveCard({
            id: t.currentTarget.dataset.id
        }).then(function(t) {
            wx.hideLoading(), console.log(t);
            var a = e.data.isReceived;
            a[i] = !0;
            var o = e.data.autoPushCards[i];
            o.cardNo = t.data.cardNo, e.setData({
                autoPushCard: o,
                isReceived: a,
                showDialog: !e.data.showDialog
            });
        }).catch(function() {
            e.showZanToast("网络链接错误"), wx.hideLoading();
        }));
    },
    toggleDialog: function() {
        this.setData({
            showDialog: !this.data.showDialog
        });
    },
    close: function() {
        this.setData({
            showDialog: !1
        });
    }
}));