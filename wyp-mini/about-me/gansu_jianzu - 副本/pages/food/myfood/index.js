function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
}, r = (t(require("../../../component/order_action/index.js")), t(require("../../../utils/util")), 
t(require("../../../network/api")));

t(require("../../../utils/notification")), t(require("../../../utils/const.js")), 
require("../../../dist/index");

Page({
    data: {
        statusType: [ "全部", "待付款", "待就餐", "已完成" ],
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
            orderStatus: 0 == this.data.currentType ? 0 : 1 == this.data.currentType ? 10 : 2 == this.data.currentType ? 30 : 3 == this.data.currentType ? 70 : 20,
            pageNo: 1
        }, this.queryOrdersList(e, !0, !0);
    },
    queryOrdersList: function(t, e, a) {
        var o = this, i = t || {};
        e && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), wx.stopPullDownRefresh(), r.default.cyOrderList(i).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("api.queryOrdersList-----------\x3e", t), 
            o.setData({
                isloadingmore: !1,
                orderList: a ? t.data.data : o.data.orderList.concat(t.data.data),
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
    statusTap: function(t) {
        var e = t.currentTarget.dataset.index;
        console.log("curType---\x3e", e), console.log("orderStatus---\x3e", 0 == e ? 0 : 1 == e ? 10 : 2 == e ? 30 : 3 == e ? 70 : 20), 
        this.setData({
            currentType: e
        }), this.onShow();
    },
    onOrderPaid: function() {
        var t = e({}, this.data.query, {
            pageNo: 1
        });
        this.queryOrdersList(t, !1, !0);
    },
    onTimeOver: function(t) {
        var e = this.data.orderList;
        e.splice(t.detail.index, 1), this.setData({
            orderList: e
        });
    }
});