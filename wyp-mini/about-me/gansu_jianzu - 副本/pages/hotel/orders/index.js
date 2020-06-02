function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../components/btn_action/index.js")), o = t(require("../../../utils/util")), a = t(require("../../../network/api")), r = require("../../../dist/index"), i = {
    data: {
        statusType: [ "全部", "待支付", "待入住", "入住中", "已取消", "已退房" ],
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
        errGoodList: [],
        hide: !1
    },
    onLoad: function(t) {
        this.setData({
            currentType: t.type || 0
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            hide: !1
        });
        var t = wx.getStorageSync("userinfo");
        if (!t && !t.mobile) return this.showZanToast("没有登录，请先登录"), void wx.navigateTo({
            url: "/pages/login/login"
        });
        var e = void 0;
        e = {
            status: 0 == this.data.currentType ? 0 : 1 == this.data.currentType ? 10 : 2 == this.data.currentType ? 40 : 3 == this.data.currentType ? 50 : 4 == this.data.currentType ? 60 : 5 == this.data.currentType ? 70 : 0,
            pageNo: 1
        }, this.queryOrdersList(e, !0, !0);
    },
    onHide: function() {
        this.setData({
            hide: !0
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    queryOrdersList: function(t, e, o) {
        var r = this, i = t || {};
        e && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), wx.stopPullDownRefresh(), a.default.queryMyHotelRoomList(i).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("api.queryMyHotelRoomList-----------\x3e", t), 
            r.setData({
                isloadingmore: !1,
                orderList: o ? t.data.data : r.data.orderList.concat(t.data.data),
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
            console.log(t), wx.stopPullDownRefresh(), wx.hideLoading(), r.setData({
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
        console.log("curType---\x3e", e), console.log("orderStatus---\x3e", 0 == e ? 0 : 1 == e ? 10 : 2 == e ? 50 : 3 == e ? 60 : 4 == e ? 70 : 20), 
        this.setData({
            currentType: e
        }), console.log(this), this.onShow();
    },
    removeData: function(t) {
        if (1 === this.data.currentType) {
            var e = this.data.orderList.filter(function(e) {
                return e.id !== t.detail;
            });
            this.setData({
                orderList: e
            });
        }
    }
};

o.default.registComp(i, r.Toast, r.TopTips, e.default), Page(i);