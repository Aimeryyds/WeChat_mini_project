function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../network/api")), e = t(require("../../../utils/util")), o = require("../../../dist/index");

Page(Object.assign({}, o.Toast, {
    data: {
        showDialog: !1
    },
    onLoad: function(t) {
        var a = t.result, o = t.iso2o, i = t.autoPushCards ? e.default.parse(t.autoPushCards) : [];
        this.setData({
            result: 1 == a,
            iso2o: o,
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
        this.data.iso2o ? wx.redirectTo({
            url: "/pages/orders/o2oshow/show?id=" + this.data.content.id
        }) : wx.redirectTo({
            url: "/pages/orders/show/show?id=" + this.data.content.id
        });
    },
    onTapResultActionExt: function() {
        wx.navigateBack();
    },
    receivevip: function(t) {
        var e = this;
        console.log(t);
        var o = t.currentTarget.dataset.index;
        this.data.isReceived[o] ? this.showZanToast("已经领取过了") : (wx.showLoading({
            title: "加载中"
        }), a.default.receiveCard({
            id: t.currentTarget.dataset.id
        }).then(function(t) {
            wx.hideLoading(), console.log(t);
            var a = e.data.isReceived;
            a[o] = !0;
            var i = e.data.autoPushCards[o];
            i.cardNo = t.data.cardNo, e.setData({
                autoPushCard: i,
                isReceived: a,
                showDialog: !e.data.showDialog
            });
        }).catch(function(t) {
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