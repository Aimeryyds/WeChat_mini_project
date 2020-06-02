var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    }
    return t;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api.js"));

Page({
    data: {
        tabs: [ {
            title: "全部",
            content: "全部"
        }, {
            title: "待付款",
            content: "待付款"
        }, {
            title: "待使用",
            content: "待使用"
        }, {
            title: "已取消",
            content: "已取消"
        }, {
            title: "待评价",
            content: "待评价"
        } ],
        activeKey: 0,
        orders: [],
        query: {
            pageNo: 0,
            status: 0
        }
    },
    onShow: function(t) {
        var e = {
            pageNo: 0,
            status: this.data.query.status
        };
        this.queryOrders(e, !0, !0);
    },
    onPullDownRefresh: function() {
        var t = {
            pageNo: 0,
            status: this.data.query.status
        };
        this.queryOrders(t, !1, !0);
    },
    queryOrders: function(t, a, o) {
        var r = this, n = t || {};
        this.data.loading || (a && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), e.default.queryBookList(n).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), r.setData({
                isloadingmore: !1,
                orders: o ? t.data.data : r.data.orders.concat(t.data.data),
                loading: !1,
                loadmore: t.data.nextCursor > 0,
                query: {
                    pageNo: t.data.nextCursor,
                    status: n ? n.status : 0
                }
            });
        }).catch(function(t) {
            console.log(t), wx.stopPullDownRefresh(), wx.hideLoading(), r.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        }));
    },
    lower: function(t) {
        this.data.loadmore && !this.data.isloadingmore && (this.setData({
            isloadingmore: !0
        }), this.queryOrders(this.data.query, !1, !1));
    },
    onClick: function(t) {
        console.log("ComponentId:" + t.detail.componentId + ",you selected:" + t.detail.key);
        var e = {
            pageNo: 0,
            status: 4 == t.detail.key ? 70 : 1 == t.detail.key ? 10 : 2 == t.detail.key ? 1 : 3 == t.detail.key ? 2 : 0
        };
        this.queryOrders(e, !0, !0);
    },
    onOrderCanceled: function() {
        console.log("------onOrderCanceled--------");
        var e = t({}, this.data.query, {
            pageNo: 1
        });
        this.queryOrders(e, !1, !0);
    },
    onOrderPaid: function() {
        console.log("------onOrderPaid--------");
        var e = t({}, this.data.query, {
            pageNo: 1
        });
        this.queryOrders(e, !1, !0);
    },
    onOrderTailPaid: function() {
        console.log("------onOrderTailPaid--------");
        var e = t({}, this.data.query, {
            pageNo: 1
        });
        this.queryOrders(e, !1, !0);
    }
});