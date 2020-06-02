var e = getApp();

module.exports.get_cuser = function(t) {
    if (e.globalData.cuser.length) return "function" == typeof t.success && t.success(e.globalData.cuser), 
    e.globalData.cuser;
    var n = wx.getStorageSync("openid");
    console.log(n), n ? e.apiRequest("weixin", "signin", {
        data: {
            openid: n
        },
        success: function(n) {
            if ("OK" == n.data.result) return e.globalData.cuser = n.data, e.globalData.hadlogin = !0, 
            "function" == typeof t.success && t.success(n.data), n.data;
            "function" == typeof t.success && t.success(!1);
        },
        fail: function() {
            "function" == typeof t.success && t.success(!1);
        }
    }) : "function" == typeof t.success && t.success(!1);
}, module.exports.get_now = function() {
    var e = new Date();
    return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes();
}, module.exports.pay = function(t) {
    wx.requestPayment({
        timeStamp: t.timeStamp,
        nonceStr: t.nonceStr,
        package: t.package,
        signType: t.signType,
        paySign: t.paySign,
        success: function(n) {
            e.apiRequest("order", "getPayStatus", {
                data: {
                    oid: t.oid
                },
                success: function(e) {},
                fail: function() {}
            });
        },
        fail: function(e) {
            console.log("支付失败");
        },
        complete: function() {
            wx.redirectTo({
                url: "../order_detail/order_detail?oid=" + t.oid
            });
        }
    });
}, module.exports.wxPay = function(t, n) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "appoit", o = wx.getStorageSync("openid");
    if (0 == o.trim().length) return wx.showModal({
        title: '"用户标识(Openid)"异常',
        content: "",
        showCancel: !1,
        complete: function() {
            wx.navigateTo({
                url: "../login/login"
            });
        }
    }), !1;
    wx.showLoading({
        mask: !0,
        title: "微信支付"
    });
    var i = a || "appoit";
    e.apiRequest(i, "getprepayid", {
        data: {
            oid: t,
            total_price: n,
            openid: o
        },
        method: "POST",
        success: function(e) {
            var t = e.data || {};
            if ("OK" == t.result) wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.nonceStr,
                package: t.package,
                signType: t.signType,
                paySign: t.paySign,
                success: function(e) {
                    "meal" == i ? wx.navigateTo({
                        url: "../meal_order_list/meal_order_list"
                    }) : wx.navigateTo({
                        url: "../ucenter/ucenter"
                    });
                },
                fail: function(e) {
                    var t = e.errMsg || "";
                    "requestPayment:fail cancel" == t && (t = "已取消订单"), wx.showModal({
                        title: t,
                        content: "",
                        showCancel: !1
                    });
                }
            }); else if ("ERROR" == t.result) switch (t.errmsg) {
              case "unlogin":
                wx.navigateTo({
                    url: "../login/login"
                });
                break;

              default:
                wx.showModal({
                    title: "支付失败，请稍后重试",
                    content: "",
                    showCancel: !1
                });
            }
        },
        fail: function() {
            wx.showModal({
                title: "支付失败，请稍后重试(fail)",
                content: "",
                showCancel: !1
            });
        },
        complete: function() {
            wx.hideLoading();
        }
    });
}, module.exports.alitradePay = function(t) {
    my.tradePay({
        tradeNO: t.trade_no,
        success: function(n) {
            e.apiRequest("order", "getPayStatus", {
                data: {
                    oid: t.oid,
                    apptype: "alipay"
                },
                success: function(e) {},
                fail: function() {}
            });
        },
        fail: function(e) {
            my.alert({
                content: JSON.stringify(e)
            });
        },
        complete: function() {
            wx.redirectTo({
                url: "../order_detail/order_detail?oid=" + t.oid
            });
        }
    });
}, module.exports.aliAutoPay = function(t, n) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "appoit", o = my.getStorageSync({
        key: "openid"
    }).data || "";
    if (0 == o.trim().length) return my.confirm({
        title: '"用户标识(Openid)"异常',
        content: "",
        showCancel: !1,
        complete: function() {
            return my.navigateTo({
                url: "../login/login"
            });
        }
    }), !1;
    my.showLoading({
        mask: !0,
        title: "支付宝支付"
    });
    var i = a || "appoit";
    e.apiRequest(i, "getprepayid", {
        data: {
            oid: t,
            total_price: n,
            openid: o
        },
        method: "POST",
        success: function(e) {
            var t = e.data || {};
            if ("OK" == t.result) my.tradePay({
                tradeNO: t.trade_no,
                success: function(e) {
                    my.navigateTo({
                        url: "meal" == i ? "../meal_order_list/meal_order_list" : "../ucenter/ucenter"
                    });
                },
                fail: function(e) {
                    var t = e.errMsg || "";
                    my.confirm({
                        title: t,
                        content: "",
                        showCancel: !1
                    });
                }
            }); else if ("ERROR" == t.result) switch (t.errmsg) {
              case "unlogin":
                my.navigateTo({
                    url: "../login/login"
                });
                break;

              default:
                my.confirm({
                    title: "支付失败，请稍后重试",
                    content: "",
                    showCancel: !1
                });
            }
        },
        fail: function() {
            my.confirm({
                title: "支付失败，请稍后重试(fail)",
                content: "",
                showCancel: !1
            });
        },
        complete: function() {
            return my.hideLoading();
        }
    });
};