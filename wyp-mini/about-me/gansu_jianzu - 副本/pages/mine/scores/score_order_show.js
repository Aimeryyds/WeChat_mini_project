function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../component/order_action/index.js")), i = e(require("../../../utils/util")), r = e(require("../../../network/api")), n = e(require("../../../utils/notification")), a = e(require("../../../utils/const.js")), o = (require("../../../dist/index"), 
getApp(), {
    data: {
        loading: !0,
        orderId: 0,
        isO2O: !0,
        isPaying: !1,
        isTipVisible: !1,
        showDialog: !1
    },
    onLoad: function(e) {
        this.setData({
            orderId: e.id,
            loading: !0,
            isTipVisible: !(!e.from || "zhifu" != e.from)
        }), wx.showLoading({
            title: "请稍候"
        }), this.queryOrderDetail(e.id);
        var t = getApp().globalData.color;
        this.setData({
            color: t
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.queryOrderDetail(this.data.orderId);
    },
    onUnload: function() {
        clearInterval(this.timer);
    },
    queryOrderDetail: function(e) {
        function t(t) {
            return e.apply(this, arguments);
        }
        return t.toString = function() {
            return e.toString();
        }, t;
    }(function(e) {
        var t = this;
        e && r.default.scoreOrderDetail({
            id: e
        }).then(function(e) {
            wx.hideLoading(), clearInterval(t.timer);
            var i = e.data, r = [];
            if (i.actionList && i.actionList.length > 0 && (i.actionList.indexOf("cancel") > -1 && r.push("cancel"), 
            i.actionList.indexOf("pay") > -1 && r.push("pay")), i.actionList = r, 10 == i.orderStatus) {
                i.remainMinutes = i.remainMinutes > 0 ? i.remainMinutes : 0;
                var n = i.remainMinutes / 60 > 0 ? parseInt(i.remainMinutes / 60) + "分钟" : "";
                i.remainMinutesText = n + parseInt(i.remainMinutes % 60) + "秒";
            }
            t.setData({
                orderDetail: i,
                loading: !1
            }), 10 == i.orderStatus && i.remainMinutes > 0 && (clearInterval(t.timer), t.timer = setInterval(function() {
                i.remainMinutes = i.remainMinutes > 0 ? i.remainMinutes - 1 : 0;
                var e = i.remainMinutes / 60 > 0 ? parseInt(i.remainMinutes / 60) + "分钟" : "";
                i.remainMinutesText = e + parseInt(i.remainMinutes % 60) + "秒", t.setData({
                    orderDetail: i
                }), i.remainMinutes <= 0 && (clearInterval(t.timer), queryOrderDetail(i.id));
            }, 1e3));
        }).catch(function(e) {
            wx.hideLoading(), console.log(e);
        });
    }),
    gotoshop: function(e) {
        var t = this;
        wx.navigateBack({
            delta: getCurrentPages().length - 1
        }), this.gotoshoptimer = setInterval(function() {
            n.default.post(a.default.action.GOTO_SHOP, {
                storeId: t.data.orderDetail.storeId
            }), clearInterval(t.gotoshoptimer);
        }, 700);
    },
    onOrderCanceled: function(e) {
        this.queryOrderDetail(this.data.orderId);
    },
    onOrderPaid: function(e) {
        console.log("paied"), wx.redirectTo({
            url: "/pages/orders/result/index?result=1&id=" + e
        });
    },
    logisticsDetail: function(e) {
        console.log("e---》", e);
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/orders/showlogistics/showlogistics?id=" + t
        });
    },
    call: function(e) {
        console.log("e---》", e);
        var t = e.currentTarget.dataset.phone;
        if (t) wx.makePhoneCall({
            phoneNumber: t
        }); else {
            var i = e.currentTarget.dataset.phone;
            i && wx.makePhoneCall({
                phoneNumber: i
            });
        }
    },
    toggleStoreDialog: function() {
        console.log("close"), this.setData({
            showDialog: !this.data.showDialog
        });
    }
});

i.default.registComp(o, t.default), Page(o);