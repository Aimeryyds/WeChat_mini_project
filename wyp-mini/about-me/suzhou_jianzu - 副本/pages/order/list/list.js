function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a, r = require("../../../utils/server"), s = 1, o = "", n = wx.getStorageSync("utoken");

Page((e = {
    data: {
        scrollTopMy: !1
    },
    tabClick: function(t) {
        var e = t.currentTarget.dataset.index;
        a = parseInt(t.currentTarget.dataset.index) - 1;
        var r = [ "", "0", "1", "2", "3" ], n = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        n[e] = "text-select", this.setData({
            tabClasss: n,
            tab: e,
            currIndex: e,
            indexCurr: e,
            myIndex: e
        }), s = 1, o = r[e], this.data.orders = [], this.getOrderLists(r[e], s);
    },
    pay: function(t) {
        var e = this, a = t.currentTarget.dataset.index, r = this.data.orders[a];
        e.get_order(r.id);
    },
    get_order: function(t, e) {
        var a = this;
        n = wx.getStorageSync("utoken");
        r.sendRequest({
            url: "?r=wxapp.order.pay",
            data: {
                utoken: n,
                id: t,
                formId: e
            },
            method: "GET",
            success: function(s) {
                if (1 != s.data.status) return s.data.status, wx.showToast({
                    title: s.data.msg,
                    icon: "success",
                    duration: 2e3
                }), void wx.switchTab({
                    url: "../../member/index/index"
                });
                r.globalData.wxdata = s.data.result.data, r.globalData.order = s.data.result.order, 
                a.setData({
                    paydata: s.data.result.data,
                    order: s.data.result.order
                }), r.globalData.wxdata.timeStamp && s.data.result.order && "1" != s.data.result.order.creditpay ? a.to_pay() : wx.navigateTo({
                    url: "../orderpay/payment?order_id=" + t + "&formId=" + e + "&myList=myList"
                });
            }
        });
    },
    to_pay: function() {
        var t = r.globalData.wxdata, e = t.timeStamp + "", a = t.nonceStr + "", s = t.package, o = t.sign;
        wx.requestPayment({
            nonceStr: a,
            package: s,
            signType: "MD5",
            timeStamp: e,
            paySign: o,
            success: function(t) {
                r.sendRequest({
                    url: "?r=wxapp.services.order.updateStatus",
                    data: {
                        utoken: n,
                        orderid: orderId
                    },
                    method: "GET",
                    success: function(t) {
                        wx.showToast({
                            title: "支付成功",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "../member/index/index"
                    });
                }, 2e3);
            },
            fail: function(t) {
                wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    cancel: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.orders[e], n = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(t) {
                if (t.confirm) {
                    var e = wx.getStorageSync("utoken");
                    r.sendRequest({
                        url: "?r=wxapp.order.op.cancel",
                        data: {
                            utoken: e,
                            id: a.id
                        },
                        method: "GET",
                        success: function(t) {
                            wx.showToast({
                                title: t.data.msg,
                                icon: "success",
                                duration: 2e3
                            }), s = 1, n.data.orders = [], n.getOrderLists(o, 1);
                        }
                    });
                }
            }
        });
    },
    confirm: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.orders[e], n = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定已收货吗？",
            success: function(t) {
                if (t.confirm) {
                    var e = wx.getStorageSync("utoken");
                    r.sendRequest({
                        url: "?r=wxapp.order.op.finish",
                        data: {
                            utoken: e,
                            id: a.id
                        },
                        method: "GET",
                        success: function(t) {
                            wx.showToast({
                                title: t.data.msg,
                                icon: "success",
                                duration: 2e3
                            }), s = 1, n.data.orders = [], n.getOrderLists(o, 1);
                        }
                    });
                }
            }
        });
    },
    details: function(t) {
        var e = this, a = t.currentTarget.dataset.index, r = this.data.orders[a];
        wx.redirectTo({
            url: "../details/index?order_id=" + r.id + "&currIndex=" + e.data.orders[a].status + "&myIndex=" + e.data.myIndex
        });
    },
    onPageScroll: function(t) {
        var e = this;
        t.scrollTop > 510 ? e.setData({
            scrollTopMy: !0
        }) : e.setData({
            scrollTopMy: !1
        });
    },
    toTop: function() {
        this.setData({
            scrollTopMy: !1
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    onReachBottom: function(t) {
        console.log(t);
        var e = this;
        if (e.data.refresh) return !1;
        e.data.refresh = !0, e.getOrderLists(o, ++s), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        console.log("onPullDownRefresh----------"), s = 1, this.data.orders = [], this.getOrderLists(o, 1), 
        wx.stopPullDownRefresh();
    }
}, t(e, "data", {
    loading: !0,
    refresh: !1,
    orders: [],
    tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
}), t(e, "getOrderLists", function(t, e, a) {
    var o = this, n = wx.getStorageSync("utoken");
    r.sendRequest({
        url: "?r=wxapp.order",
        showToast: a,
        data: {
            utoken: n,
            status: t,
            page: e
        },
        method: "GET",
        success: function(t) {
            if (t.data.result) {
                (s <= 1 || !s) && o.setData({
                    orders: []
                });
                var e = t.data.result, a = o.data.orders;
                for (var r in e) a.push(e[r]);
                wx.stopPullDownRefresh(), o.setData({
                    loading: !1,
                    orders: a
                });
            }
            t.data.result.length > 0 && o.setData({
                refresh: !1
            });
        }
    });
}), t(e, "evaluation", function(t) {
    var e = t.currentTarget.dataset.index, a = this.data.orders[e];
    wx.navigateTo({
        url: "../pinjia/index?order_id=" + a.id
    });
}), t(e, "goToAnotherEvalute", function(t) {
    var e = t.currentTarget.dataset.index, a = this.data.orders[e];
    wx.navigateTo({
        url: "../pinjia/index?order_id=" + a.id + "&evaluteType=2"
    });
}), t(e, "onShow", function(t) {
    s = 1;
    this.data.orders = [], this.getOrderLists(a, s, !1), this.setData({});
}), t(e, "onLoad", function(t) {
    console.log(t), s = 1;
    var e = t.id;
    a = parseInt(t.id) - 1;
    var r = [ "", "0", "1", "2", "3" ], d = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
    d[e] = "text-select", this.setData({
        tabClasss: d,
        tab: e,
        indexCurr: a,
        myIndex: e
    }), o = r[e], n = wx.getStorageSync("utoken");
}), e));