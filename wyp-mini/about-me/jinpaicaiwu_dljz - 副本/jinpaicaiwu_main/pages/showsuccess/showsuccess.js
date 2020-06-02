var a = getApp();

Page({
    data: {
        oid: 0,
        total_price: 0,
        data: []
    },
    onLoad: function(t) {
        var o = t.id || 60, e = t.oid, i = t.total_price || 0;
        if (o) {
            var n = this;
            a.apiRequest("order", "showsuccess", {
                data: {
                    id: o,
                    oid: e
                },
                success: function(a) {
                    if ("OK" == a.data.result) {
                        var t = a.data.data;
                        a.data.data.total_amount && (i = a.data.data.total_amount), n.setData({
                            oid: e,
                            data: t,
                            para: t.paraval,
                            total_price: i
                        });
                    } else {
                        var o = a.data.errmsg || "请求失败";
                        wx.showModal({
                            title: o,
                            content: ""
                        }), wx.navigateBack();
                    }
                }
            });
        }
    },
    submitOrder: function(a) {
        var t = this.data.oid;
        t ? (wx.showToast({
            title: "提交成功"
        }), wx.redirectTo({
            url: "/pages/order_detail/order_detail?oid=" + t
        })) : wx.showToast({
            title: "提交失败"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});