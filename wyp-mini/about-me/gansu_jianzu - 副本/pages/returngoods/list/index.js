function o(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}

var t = o(require("../../../component/order_action/index.js")), e = o(require("../../../utils/util")), a = o(require("../../../network/api")), r = o(require("../../../utils/notification")), i = o(require("../../../utils/const.js")), s = require("../../../dist/index"), n = {
    data: {
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
    onLoad: function(o) {
        this.setData({
            currentType: o.type || 0
        });
    },
    onShow: function() {
        var o = wx.getStorageSync("userinfo");
        if (!o && !o.mobile) return this.showZanToast("没有登录，请先登录"), void wx.navigateTo({
            url: "/pages/login/login"
        });
        var t = void 0;
        t = {
            pageNo: 1
        }, this.queryOrdersList(t, !0, !0);
    },
    onPullDownRefresh: function() {
        console.log("-----onPullDownRefresh--------");
        var o = void 0;
        o = {
            pageNo: 1
        }, this.queryOrdersList(o, !1, !0);
    },
    onReachBottom: function() {
        console.log("-----onReachBottom--------"), this.data.loadmore && !this.data.isloadingmore && (this.setData({
            isloadingmore: !0
        }), this.queryOrdersList(this.data.query, !1, !1));
    },
    queryOrdersList: function(o, t, e) {
        var r = this, i = o || {};
        t && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), wx.stopPullDownRefresh(), a.default.queryRefundList(i).then(function(o) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("api.queryRefundList-----------\x3e", o), 
            r.setData({
                isloadingmore: !1,
                orderList: e ? o.data.data : r.data.orderList.concat(o.data.data),
                loading: !1,
                loadmore: o.data.nextCursor > 0,
                pagination: {
                    nextCursor: o.data.nextCursor,
                    previousCursor: o.data.previousCursor,
                    totalNumber: o.data.totalNumber
                },
                query: {
                    pageNo: o.data.nextCursor
                }
            });
        }).catch(function(o) {
            console.log(o), wx.stopPullDownRefresh(), wx.hideLoading(), r.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    gotoshop: function(o) {
        var t = this, e = o.currentTarget.dataset.id;
        console.log("gotostore---\x3e", e), wx.navigateBack({
            delta: getCurrentPages().length - 1
        }), this.gotoshoptimer = setInterval(function() {
            r.default.post(i.default.action.GOTO_SHOP, {
                storeId: e
            }), console.log("发通知gotostore---\x3e", e), clearInterval(t.gotoshoptimer);
        }, 1e3);
    }
};

e.default.registComp(n, s.Toast, s.TopTips, t.default), Page(n);