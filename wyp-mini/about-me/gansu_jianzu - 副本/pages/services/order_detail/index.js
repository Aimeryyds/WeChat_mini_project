var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../network/api.js"));

Page({
    data: {
        store: {}
    },
    onLoad: function(e) {
        var r = e.id;
        this.setData({
            id: r
        }), wx.showLoading({
            title: "请稍后"
        });
    },
    onShow: function() {
        this.queryOrder();
    },
    queryOrder: function() {
        var r = this;
        e.default.queryBookDetail({
            id: this.data.id
        }).then(function(e) {
            wx.hideLoading(), r.setData({
                order: e.data
            });
        });
    },
    call: function(e) {
        console.log(e);
        var r = e.detail.data;
        console.log(r), r && wx.makePhoneCall({
            phoneNumber: r
        });
    },
    onOrderCanceled: function() {
        console.log("------onOrderCanceled--------"), this.queryOrder();
    },
    onOrderPaid: function() {
        this.queryOrder();
    },
    onOrderTailPaid: function() {
        this.queryOrder();
    }
});