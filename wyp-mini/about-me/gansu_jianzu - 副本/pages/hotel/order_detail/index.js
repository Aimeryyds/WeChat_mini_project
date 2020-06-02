function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
}, a = e(require("../components/btn_action/index.js")), r = e(require("../../../utils/util")), i = e(require("../../../network/api")), n = require("../../../dist/index"), o = (getApp(), 
{
    data: {
        orderDetail: {},
        loading: !0,
        isPaying: !1,
        errGoodList: [],
        pay: !1,
        cancel: !1,
        evaluate: !1
    },
    onLoad: function(e) {
        this.setData({
            orderId: e.id,
            loading: !0
        }), wx.showLoading({
            title: "请稍候"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.queryOrderDetail(this.data.orderId);
    },
    onHide: function() {
        clearInterval(this.timer);
    },
    onUnload: function() {
        clearInterval(this.timer);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    queryOrderDetail: function(e) {
        var a = this;
        e && i.default.queryMyHotelRoomDetail({
            id: e
        }).then(function(e) {
            wx.hideLoading();
            var r = e.data.actionList;
            if (a.setData({
                pay: -1 !== r.indexOf("pay"),
                cancel: -1 !== r.indexOf("cancel"),
                evaluate: -1 !== r.indexOf("evaluate")
            }), a.setData({
                orderDetail: e.data,
                loading: !1
            }), 10 === e.data.status) {
                var i = e.data.remainTime;
                if (i > 1) {
                    var n = Math.floor(i / 60), o = i % 60;
                    a.setData({
                        remainTime: i,
                        minute: n < 10 ? "0" + n : n,
                        seconds: o < 10 ? "0" + o : o
                    }), a.countDown();
                } else a.setData({
                    orderDetail: t({}, a.data.orderDetail, {
                        status: 60,
                        orderStatusName: "已取消"
                    }),
                    pay: !1
                });
            }
        }).catch(function(e) {
            wx.hideLoading(), console.log(e);
        });
    },
    countDown: function() {
        var e = this;
        this.timer = setInterval(function() {
            var a = e.data.remainTime;
            if (a > 1) {
                var r = Math.floor((a - 1) / 60), i = (a - 1) % 60;
                e.setData({
                    remainTime: a - 1,
                    minute: r < 10 ? "0" + r : r,
                    seconds: i < 10 ? "0" + i : i
                });
            } else clearInterval(timer), e.setData({
                orderDetail: t({}, e.data.orderDetail, {
                    status: 60,
                    orderStatusName: "已取消"
                }),
                pay: !1
            });
        }, 1e3);
    },
    toCancelOrder: function() {
        this.cancelOrder(this.data.orderId);
    },
    toPayOrder: function() {
        this.payOrder(this.data.orderDetail.orderNo, this.data.orderDetail.id);
    },
    toEvaluate: function() {
        wx.navigateTo({
            url: "/pages/pingjia/evaluateform/index?type=3&orderNo=" + this.data.orderDetail.orderNo
        });
    }
});

r.default.registComp(o, n.Toast, n.TopTips, a.default), Page(o);