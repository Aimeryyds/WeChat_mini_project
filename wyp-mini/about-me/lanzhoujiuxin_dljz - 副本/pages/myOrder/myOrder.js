var t = require("../../utils/api"), e = require("../../utils/wxpay"), a = getApp();

Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
        orderList: [],
        orderListProcess: [],
        orderListFinish: [],
        orderListCancel: [],
        orderListWaitPay: []
    },
    onLoad: function(e) {
        var r = this, s = e.currentTab || 0;
        e.fromBookSuc && t.getOrderList(r), r.setData({
            currentTab: s,
            globalColor: a.globalData.globalColor
        }), wx.getSystemInfo({
            success: function(t) {
                r.setData({
                    winWidth: t.windowWidth,
                    winHeight: t.windowHeight
                });
            }
        }), t.getOrderList(r);
    },
    bindChange: function(t) {
        this.setData({
            currentTab: t.detail.current
        });
    },
    swichNav: function(t) {
        var e = this;
        if (this.data.currentTab === t.target.dataset.current) return !1;
        e.setData({
            currentTab: t.target.dataset.current
        });
    },
    finishOrder: function(t) {
        var e = t.target.dataset.orderid, r = this;
        wx.showModal({
            title: "",
            content: "完成预约",
            success: function(t) {
                t.confirm && a.globalData.wxAppRequest.setOrderStatus(1, e, r);
            }
        });
    },
    waitPayCancel: function(t) {
        var e = t.target.dataset.orderid, r = this;
        wx.showModal({
            title: "",
            content: "取消预约",
            success: function(t) {
                t.confirm && a.globalData.wxAppRequest.setOrderStatus(2, e, r);
            }
        });
    },
    cancelOrder: function(t) {
        var e = t.target.dataset.orderid, r = 0 === t.target.dataset.paytype ? 2 : 5, s = this;
        wx.showModal({
            title: "",
            content: "取消预约",
            success: function(t) {
                t.confirm && a.globalData.wxAppRequest.setOrderStatus(r, e, s);
            }
        });
    },
    payOrder: function(a) {
        var r = this, s = a.target.dataset.order, n = getApp().globalData, i = n.extConfigData, o = i.wxappAid, c = i.wxappId, d = n.userInfo.openId, u = i.wxappDomain;
        wx.request({
            url: u + "?cmd=getPayInfo",
            data: {
                wxappAid: o,
                wxappId: c,
                openId: d,
                orderId: s.id
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                console.log(a);
                var s = a.data;
                if (s.success) {
                    var n = s.wxpayInfo;
                    e.callbackObj.fail = function(t) {
                        "requestPayment:fail cancel" != t.errMsg && "requestPayment:cancel" != t.errMsg && r.toastShow("发起支付失败");
                    }, e.callbackObj.success = function(e) {
                        "requestPayment:ok" == e.errMsg && t.getOrderList(r);
                    }, e.requestPayment(n);
                }
            }
        });
    },
    onPullDownRefresh: function() {
        t.getOrderList(this), wx.stopPullDownRefresh();
    }
});