var e = require("../../api/vipApi.js"), t = getApp().globalData;

Component({
    properties: {
        chooseType: {
            type: String
        },
        choosedProductPrice: {
            type: String
        },
        choosenProduct: {
            type: String
        },
        choosedProductIdCanBuy: {
            type: String
        },
        userVipStatus: {
            type: String
        },
        styleType: {
            type: String,
            value: ""
        }
    },
    data: {
        btnText: "开通",
        showOverlay: !1
    },
    observers: {
        "userVipStatus, chooseType": function() {
            var e = this.properties.userVipStatus, t = this.properties.chooseType, o = "开通";
            "svip" === e || "vip" === e && "vip" === t ? o = "续费" : "vip" === e && "svip" === t && (o = "升级"), 
            this.setData({
                btnText: o
            });
        }
    },
    methods: {
        showRiskManagement: function(e) {
            switch (e) {
              case "3y":
                this.riskManagementDialog = this.selectComponent("#riskManagementDialog"), this.riskManagementDialog.show({
                    content: "壕，您已经把百度网盘会员承包啦，请下次再来买吧"
                });
            }
        },
        clickPayBtn: function() {
            0 == +this.properties.choosedProductIdCanBuy ? this.showRiskManagement("3y") : this.show();
        },
        show: function() {
            var o = this;
            wx.wetoast({
                content: "订单正在火速处理中",
                loading: !0,
                duration: !0
            });
            var a = this.data.choosenProduct, n = function t(a, n, s) {
                var r = ++a < n;
                return new Promise(function(t, o) {
                    e.vipApi.getOrderPayInfo({
                        order_no: s
                    }).then(function(e) {
                        var o = e.data, a = 1 === o.pay_status;
                        return t({
                            isUpdateToken: !a && r,
                            result: o
                        });
                    });
                }).then(function(e) {
                    var o = e.isUpdateToken, r = e.result;
                    if (o) {
                        for (var i = Date.now(); Date.now() - i < 1e3; ) ;
                        return t(a, n, s);
                    }
                    return Promise.resolve(r);
                }).catch(function(e) {
                    console.log(e), wx.toasthide(), o.setData({
                        showOverlay: !1
                    });
                });
            };
            e.vipApi.placeOrder({
                product_id: a,
                business_no: new Date().getTime() + "" + Math.round(9999 * Math.random()),
                from: this.data.loadData.from || "normal"
            }).then(function(e) {
                var s = e.data;
                if (0 != +s.error_code) return wx.toasthide(), o.setData({
                    showOverlay: !1
                }), void (39513 == +s.error_code ? o.showRiskManagement("3y") : wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none",
                    duration: 2e3
                }));
                var r = s.purchase, i = r.timeStamp, c = r.nonceStr, p = r.signType, u = r.paySign, h = r.package, l = r.order_no, d = {
                    timeStamp: i,
                    nonceStr: c,
                    package: h,
                    signType: p,
                    paySign: u,
                    success: function() {
                        o.setData({
                            showOverlay: !0
                        }), wx.log.send({
                            type: "wx_pay_home_purchase_success",
                            value: "会员中心-首页-下单-成功",
                            reason: t.payScene,
                            product: a,
                            from: o.data.loadData.from || "normal"
                        }), console.log("===orderNo===", l), n(0, 4, l).then(function(e) {
                            console.log("===订单回调结果===", e), 1 === e.pay_status ? o.triggerEvent("paycheck", {
                                payStatus: !0,
                                payInfo: {
                                    price: e.price,
                                    product_name: e.product_name,
                                    end_time: e.end_time
                                }
                            }) : o.triggerEvent("paycheck", {
                                payStatus: !1
                            });
                        }).catch(function(e) {
                            console.log(e);
                        });
                    },
                    fail: function(e) {
                        console.log(e), console.log("wx pay fail"), wx.toasthide(), o.setData({
                            showOverlay: !1
                        });
                    },
                    complete: function(e) {
                        console.log("wx pay complete1"), console.log(e), console.log("wx pay complete2");
                    }
                };
                console.log("====微信支付参数====", d), wx.requestPayment(d);
            }).catch(function() {
                wx.toasthide(), o.setData({
                    showOverlay: !1
                });
            });
        }
    },
    ready: function() {
        this.setData({
            loadData: wx.getCurrentViewPage().options
        });
    }
});