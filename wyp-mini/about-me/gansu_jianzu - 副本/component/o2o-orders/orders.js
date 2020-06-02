function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a, o = t(require("../../network/api")), r = (t(require("../../utils/util")), 
t(require("../../utils/notification"))), i = t(require("../../utils/const.js")), n = {
    loadmore: !1,
    isloadingmore: !1,
    scrollTop: 0,
    pagination: {
        nextCursor: 0,
        previousCursor: 0,
        totalNumber: 0
    },
    query: {
        pageNo: 0
    },
    orderList: [],
    lastMinutes: 40,
    isPaying: !1,
    errGoodList: []
};

exports.default = (a = {
    orderDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/orders/o2oshow/show?id=" + e
        });
    },
    onLoad: function(t) {
        this.setData(n);
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: t
        });
        var e = void 0;
        e = {
            pageNo: 1
        }, t.mobile && this.queryOrdersList(e, !0, !0);
    },
    onHide: function() {
        clearInterval(this.timer);
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        console.log("-----onPullDownRefresh--------");
    },
    onReachBottom: function() {},
    queryOrdersList: function(t, e, a) {
        var r = this, i = t || {};
        e && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        }));
        wx.stopPullDownRefresh(), o.default.queryOrders(i).then(function(t) {
            wx.stopPullDownRefresh(), e && (wx.hideLoading(), r.setData({
                loading: !1
            })), r.setData({
                isloadingmore: !1,
                orderList: a ? t.data.data : r.data.orderList.concat(t.data.data),
                loading: !1,
                loadmore: t.data.nextCursor > 0,
                pagination: {
                    nextCursor: t.data.nextCursor,
                    previousCursor: t.data.previousCursor,
                    totalNumber: t.data.totalNumber
                },
                query: {
                    pageNo: t.data.nextCursor
                }
            });
            var o = r.data.orderList;
            if (o && o.length > 0) for (var i = 0; i < o.length; i++) {
                if (10 == o[i].orderStatus) {
                    o[i].remainMinutes = o[i].remainMinutes > 0 ? o[i].remainMinutes : 0;
                    var n = o[i].remainMinutes / 60 > 0 ? parseInt(o[i].remainMinutes / 60) : 0, s = n < 0 ? "" : n < 10 ? "0" + n + "分钟" : n + "分钟", u = parseInt(o[i].remainMinutes % 60), d = u < 10 ? "0" + u + "秒" : u + "秒";
                    o[i].remainMinutesText = s + d, 0 == o[i].remainMinutes && (o[i].orderStatus = 20, 
                    o[i].actionList = []);
                }
                r.setData({
                    orderList: o
                });
            }
            clearInterval(r.timer), r.timer = setInterval(function() {
                var t = !1;
                if (o && o.length > 0) for (var e = 0; e < o.length; e++) {
                    if (10 == o[e].orderStatus) {
                        t = !0, o[e].remainMinutes = o[e].remainMinutes > 0 ? o[e].remainMinutes - 1 : 0;
                        var a = o[e].remainMinutes / 60 > 0 ? parseInt(o[e].remainMinutes / 60) : 0, i = a < 0 ? "" : a < 10 ? "0" + a + "分钟" : a + "分钟", n = parseInt(o[e].remainMinutes % 60), s = n < 10 ? "0" + n + "秒" : n + "秒";
                        o[e].remainMinutesText = i + s, 0 == o[e].remainMinutes && (o[e].orderStatus = 20, 
                        o[e].actionList = []);
                    }
                    r.setData({
                        orderList: o
                    });
                }
                t || clearInterval(r.timer);
            }, 1e3);
        }).catch(function(t) {
            console.log(t), wx.stopPullDownRefresh(), e && (wx.hideLoading(), r.setData({
                loading: !1
            })), r.setData({
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    lower: function(t) {
        console.log("---------lower--------", this.data.query), this.data.loadmore && !this.data.isloadingmore && (this.setData({
            isloadingmore: !0
        }), this.queryOrdersList(this.data.query, !1, !1));
    },
    onOrderCanceled: function() {
        this.queryOrdersList({}, !0, !0);
    },
    payOrder: function(t) {
        if (console.log("---------payOrder--------------"), !this.data.isPaying) {
            var e = this;
            e.setData({
                isPaying: !1
            });
            var a = t.currentTarget.dataset.id, r = t.currentTarget.dataset.no;
            wx.showLoading({
                title: "请稍候"
            }), o.default.queryPaySign({
                orderNo: r
            }).then(function(t) {
                wx.hideLoading(), 0 == t.status && t.data && t.data.nonceStr ? wx.requestPayment({
                    timeStamp: t.data.timeStamp + "",
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: "MD5",
                    paySign: t.data.paySign,
                    success: function(t) {
                        console.log("支付--success"), this.onOrderPaid(a);
                    },
                    fail: function(t) {
                        console.log("支付--fail"), wx.showToast({
                            title: "支付已取消",
                            duration: 2e3
                        });
                    }
                }) : e.showTopTips("支付信息获取失败"), e.setData({
                    isPaying: !1
                });
            }).catch(function(t) {
                wx.hideLoading(), e.setData({
                    isPaying: !1
                }), e.showTopTips("支付信息获取失败");
            });
        }
    },
    onOrderPaid: function(t) {
        this.queryOrdersList({}, !1, !0), wx.navigateTo({
            url: "/pages/orders/result/index?result=1&id=" + t
        });
    },
    gotoshop: function(t) {
        var e = this;
        console.log("---------gotoshop--------", t);
        var a = t.currentTarget.dataset.id;
        this.gotoshoptimer = setInterval(function() {
            r.default.post(i.default.action.GOTO_SHOP, {
                storeId: a
            }), clearInterval(e.gotoshoptimer);
        }, 700);
    },
    logisticsDetail: function(t) {
        console.log("logisticsDetail---》"), console.log("e---》", t);
        var e = t.currentTarget.dataset.orderid, a = t.currentTarget.dataset.iscanshow;
        console.log("orderId---》", e), console.log("iscanshow---》", a), a ? wx.navigateTo({
            url: "/pages/orders/showlogistics/showlogistics?id=" + e
        }) : wx.navigateTo({
            url: "/pages/orders/o2oshow/show?id=" + e
        });
    }
}, e(a, "onUnload", function() {
    r.default.remove(i.default.action.BIND_PHONE_SUCCESS, this);
}), e(a, "changeuser", function() {
    var t = wx.getStorageSync("userinfo");
    this.setData({
        userinfo: t
    }), this.queryOrdersList({
        pageNo: 1
    }, !0, !0);
}), a);