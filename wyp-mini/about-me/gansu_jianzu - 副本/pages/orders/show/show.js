function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../component/order_action/index.js")), i = e(require("../../../utils/util")), n = e(require("../../../network/api")), r = e(require("../../../utils/notification")), a = e(require("../../../utils/const.js")), o = require("../../../dist/index"), s = (getApp(), 
{
    data: {
        loading: !0,
        orderId: 0,
        isO2O: !0,
        isPaying: !1,
        errGoodList: []
    },
    onLoad: function(e) {
        this.setData({
            orderId: e.id,
            loading: !0
        }), wx.showLoading({
            title: "请稍候"
        });
        var t = getApp().globalData.color;
        this.setData({
            color: t
        });
    },
    onShow: function(e) {
        this.queryOrderDetail(this.data.orderId);
    },
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
        e && n.default.showOrder({
            id: e
        }).then(function(e) {
            wx.hideLoading(), clearInterval(t.timer);
            var i = e.data, n = [];
            if (i.actionList && i.actionList.length > 0 && (i.actionList.indexOf("cancel") > -1 && n.push("cancel"), 
            i.actionList.indexOf("pay") > -1 && n.push("pay"), i.actionList.indexOf("logistics") > -1 && n.push("logistics"), 
            i.actionList.indexOf("receive") > -1 && n.push("receive"), i.actionList.indexOf("viewGroup") > -1 && n.push("viewGroup"), 
            i.actionList.indexOf("applyrefund") > -1 && n.push("applyrefund"), i.actionList.indexOf("refunding") > -1 && n.push("refunding"), 
            i.actionList.indexOf("succeed") > -1 && n.push("succeed"), i.actionList.indexOf("viewrefund") > -1 && n.push("viewrefund"), 
            i.actionList.indexOf("firstEvaluate") > -1 && n.push("firstEvaluate"), i.actionList.indexOf("secondEvaluate") > -1 && n.push("secondEvaluate")), 
            i.actionList = n, 10 == i.orderStatus) {
                i.remainMinutes = i.remainMinutes > 0 ? i.remainMinutes : 0;
                var r = i.remainMinutes / 60 > 0 ? parseInt(i.remainMinutes / 60) + "分钟" : "";
                i.remainMinutesText = r + parseInt(i.remainMinutes % 60) + "秒";
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
            r.default.post(a.default.action.GOTO_SHOP, {
                storeId: t.data.orderDetail.storeId
            }), clearInterval(t.gotoshoptimer);
        }, 700);
    },
    onOrderCanceled: function(e) {
        this.queryOrderDetail(this.data.orderId);
    },
    onOrderConfirmed: function(e) {
        this.queryOrderDetail(this.data.orderId);
    },
    onOrderPaid: function(e) {
        console.log("paied"), wx.redirectTo({
            url: "/pages/orders/result/index?result=1&id=" + e
        });
    },
    logisticsDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/orders/showlogistics/showlogistics?id=" + t
        });
    },
    call: function(e) {
        var t = e.currentTarget.dataset.phone;
        if (t) wx.makePhoneCall({
            phoneNumber: t
        }); else {
            var i = e.currentTarget.dataset.tel;
            i && wx.makePhoneCall({
                phoneNumber: i
            });
        }
    }
});

i.default.registComp(s, o.Toast, o.TopTips, t.default), Page(s);