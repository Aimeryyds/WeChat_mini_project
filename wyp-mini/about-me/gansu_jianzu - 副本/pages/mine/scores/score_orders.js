function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../component/order_action/index.js")), r = t(require("../../../utils/util")), a = t(require("../../../network/api")), o = (t(require("../../../utils/notification")), 
t(require("../../../utils/const.js")), require("../../../dist/index"), {
    data: {
        statusType: [ "全部", "待发货", "待收货", "已完成" ],
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
        isPaying: !1
    },
    statusTap: function(t) {
        var e = t.currentTarget.dataset.index;
        console.log("curType---\x3e", e), console.log("orderStatus---\x3e", 0 == e ? 0 : 1 == e ? 20 : 2 == e ? 30 : 3 == e ? 40 : 0), 
        this.setData({
            currentType: e
        }), this.onShow();
    },
    orderDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/mine/scores/score_order_show?from=list&id=" + e
        });
    },
    onLoad: function(t) {
        this.setData({
            currentType: t.type || 0
        });
    },
    onShow: function() {
        if (!wx.getStorageSync("userinfo")) return this.showZanTopTips("没有登录，请先登录"), void wx.navigateTo({
            url: "/pages/login/login"
        });
        var t = void 0;
        t = {
            orderStatus: 0 == this.data.currentType ? 0 : 1 == this.data.currentType ? 20 : 2 == this.data.currentType ? 30 : 3 == this.data.currentType ? 40 : 0,
            pageNo: 1
        }, this.queryOrdersList(t, !0, !0);
    },
    queryOrdersList: function(t, e, r) {
        var o = this, i = t || {};
        e && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        }));
        wx.stopPullDownRefresh(), a.default.scoreOrderList(i).then(function(t) {
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
                    orderStatus: i ? i.orderStatus : 0
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
    }
});

r.default.registComp(o, e.default), Page(o);