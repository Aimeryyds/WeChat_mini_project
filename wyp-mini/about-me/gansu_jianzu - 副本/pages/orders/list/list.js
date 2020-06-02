function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../component/order_action/index.js")), r = t(require("../../../utils/util")), a = t(require("../../../network/api")), o = t(require("../../../utils/notification")), s = t(require("../../../utils/const.js")), i = require("../../../dist/index"), n = {
    data: {
        statusType: [ "全部", "待付款", "待发货", "待收货", "待评价" ],
        currentType: 0,
        loadmore: !1,
        isloadingmore: !1,
        scrollTop: 0,
        pagination: {
            nextCursor: 0,
            previousCursor: 0,
            totalNumber: 0
        },
        query: {
            pageNo: 0,
            type: 0
        },
        orderList: [],
        isPaying: !1,
        errGoodList: []
    },
    statusTap: function(t) {
        var e = t.currentTarget.dataset.index;
        console.log("curType---\x3e", e), console.log("orderStatus---\x3e", 0 == e ? 0 : 1 == e ? 10 : 2 == e ? 50 : 3 == e ? 60 : 4 == e ? 70 : 20), 
        this.setData({
            currentType: e
        }), this.onShow();
    },
    orderDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/orders/show/show?id=" + e
        });
    },
    onLoad: function(t) {
        this.setData({
            currentType: t.type || 0
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.getStorageSync("userinfo");
        if (!t && !t.mobile) return this.showZanToast("没有登录，请先登录"), void wx.navigateTo({
            url: "/pages/login/login"
        });
        var e = void 0;
        e = {
            orderStatus: 0 == this.data.currentType ? 0 : 1 == this.data.currentType ? 10 : 2 == this.data.currentType ? 50 : 3 == this.data.currentType ? 60 : 4 == this.data.currentType ? 70 : 20,
            pageNo: 1
        }, this.queryOrdersList(e, !0, !0);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        console.log("-----onPullDownRefresh--------");
    },
    onReachBottom: function() {},
    queryOrdersList: function(t, e, r) {
        var o = this, s = t || {};
        e && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), wx.stopPullDownRefresh(), a.default.queryOrders(s).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("api.queryOrdersList-----------\x3e", t), 
            o.setData({
                isloadingmore: !1,
                orderList: r ? t.data.data : o.data.orderList.concat(t.data.data),
                loading: !1,
                loadmore: t.data.nextCursor > 0,
                pagination: {
                    nextCursor: t.data.nextCursor,
                    previousCursor: t.data.previousCursor,
                    totalNumber: t.data.totalNumber
                },
                query: {
                    pageNo: t.data.nextCursor,
                    orderStatus: s ? s.orderStatus : 0
                }
            });
        }).catch(function(t) {
            console.log(t), wx.stopPullDownRefresh(), wx.hideLoading(), o.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    lower: function(t) {
        this.data.loadmore && !this.data.isloadingmore && (this.setData({
            isloadingmore: !0
        }), this.queryOrdersList(this.data.query, !1, !1));
    },
    onOrderConfirmed: function() {
        var t = {
            orderStatus: 0 == this.data.currentType ? 0 : 1 == this.data.currentType ? 10 : 2 == this.data.currentType ? 50 : 3 == this.data.currentType ? 60 : 4 == this.data.currentType ? 70 : 20,
            pageNo: 1
        };
        this.queryOrdersList(t, !0, !0);
    },
    onOrderCanceled: function() {
        var t = {
            orderStatus: 0 == this.data.currentType ? 0 : 1 == this.data.currentType ? 10 : 2 == this.data.currentType ? 50 : 3 == this.data.currentType ? 60 : 4 == this.data.currentType ? 70 : 20,
            pageNo: 1
        };
        this.queryOrdersList(t, !0, !0);
    },
    onOrderPaid: function(t, e) {
        var r = {
            orderStatus: 0 == this.data.currentType ? 0 : 1 == this.data.currentType ? 10 : 2 == this.data.currentType ? 50 : 3 == this.data.currentType ? 60 : 4 == this.data.currentType ? 70 : 20,
            pageNo: 1
        };
        this.queryOrdersList(r, !1, !0), wx.navigateTo({
            url: "/pages/orders/result/index?result=1&id=" + t + "iso2o=" + e
        });
    },
    gotoshop: function(t) {
        var e = this, r = t.currentTarget.dataset.id;
        console.log("gotostore---\x3e", r), wx.navigateBack({
            delta: getCurrentPages().length - 1
        }), this.gotoshoptimer = setInterval(function() {
            o.default.post(s.default.action.GOTO_SHOP, {
                storeId: r
            }), console.log("发通知gotostore---\x3e", r), clearInterval(e.gotoshoptimer);
        }, 1e3);
    }
};

r.default.registComp(n, i.Toast, i.TopTips, e.default), Page(n);