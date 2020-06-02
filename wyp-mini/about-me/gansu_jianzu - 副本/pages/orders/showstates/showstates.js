var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../network/api"));

Page({
    data: {
        orderId: 0,
        steps: [],
        loading: !0
    },
    onLoad: function(e) {
        this.setData({
            orderId: e.id,
            loading: !0
        }), wx.showLoading({
            title: "请稍候"
        }), this.queryOrderLogistics(e.id);
    },
    onPullDownRefresh: function() {
        this.queryOrderLogistics(this.data.orderId);
    },
    queryOrderLogistics: function(t) {
        var o = this;
        t && e.default.getStates({
            orderId: t
        }).then(function(e) {
            wx.hideLoading(), o.setData({
                steps: e.data,
                loading: !1
            });
        }).catch(function(e) {
            console.log(e), wx.hideLoading();
        });
    },
    call: function(e) {
        var t = e.currentTarget.dataset.mobile;
        console.log("e--mobile-》", t), wx.makePhoneCall({
            phoneNumber: t || ""
        });
    }
});