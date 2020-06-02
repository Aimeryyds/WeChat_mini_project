Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../network/api"));

exports.default = {
    cancelOrder: function(t) {
        var a = t.detail ? t.detail.id : t, o = this;
        wx.showModal({
            title: "提示",
            content: "确定要取消该订单吗？",
            success: function(t) {
                t.confirm && (wx.showLoading({
                    title: "请稍候"
                }), e.default.cancelMyHotelBook({
                    id: a
                }).then(function(e) {
                    wx.hideLoading(), o.showZanToast("订单已取消"), "pages/hotel/order_detail/index" === o.getCurrentPageUrl() ? o.onShow() : wx.navigateTo({
                        url: "/pages/hotel/order_detail/index?id=" + a
                    });
                }).catch(function(e) {
                    console.log(e), wx.hideLoading();
                }));
            }
        });
    },
    payOrder: function(t, a) {
        var o = t.detail ? t.detail.orderNo : t, n = t.detail ? t.detail.id : a, i = this;
        i.data.isPaying || (i.setData({
            isPaying: !0
        }), wx.showLoading({
            title: "请稍候"
        }), e.default.payMyHotelBook({
            orderNo: o
        }).then(function(e) {
            0 === e.status && (console.log(e.data), wx.hideLoading(), wx.requestPayment({
                timeStamp: e.data.timeStamp + "",
                nonceStr: e.data.nonceStr,
                package: e.data.package,
                signType: "MD5",
                paySign: e.data.paySign,
                success: function(e) {
                    i.setData({
                        isPaying: !1
                    }), "pages/hotel/order_detail/index" === i.getCurrentPageUrl() ? i.onShow() : wx.navigateTo({
                        url: "/pages/hotel/order_detail/index?id=" + n
                    });
                },
                fail: function(e) {
                    i.setData({
                        isPaying: !1
                    });
                }
            }));
        }).catch(function(t) {
            console.log(t), t.data && t.data.data && t.data.data.length > 0 ? i.setData({
                errGoodList: t.data.data
            }) : i.showZanTopTips(e.default.errors(t.error) || t.errorMessage || "网络错误"), i.setData({
                isPaying: !1
            }), wx.hideLoading();
        }));
    },
    getCurrentPageUrl: function() {
        var e = getCurrentPages();
        return e[e.length - 1].route;
    }
};