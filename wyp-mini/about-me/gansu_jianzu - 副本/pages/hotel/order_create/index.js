function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/util")), a = (t(require("../../../behaviors/toast.js")), 
t(require("../../../network/api")));

Page({
    data: {
        roomId: 0,
        strategyId: 0,
        order: {},
        number: 1
    },
    onLoad: function(t) {
        this.setData({
            roomId: t.roomId,
            strategyId: t.strategyId
        });
    },
    handleToHotelOrder: function(t) {
        wx.showLoading(), this.setData({
            inTimeObj: t.detail
        }, function() {
            var t = this, o = "";
            o = this.data.inTimeObj.startDate > 0 ? e.default.timestampToYMD(this.data.inTimeObj.startDate) : e.default.getcurrentTimeYMD(), 
            a.default.toHotelOrder({
                roomId: this.data.roomId,
                strategyId: this.data.strategyId,
                inTime: o
            }).then(function(e) {
                console.log(e, "++++"), wx.hideLoading(), t.setData({
                    order: e.data,
                    totalPrice: (e.data.roomPrice * t.data.inTimeObj.statistics_data).toFixed(2)
                });
            }).catch(function(t) {
                console.log(t), wx.stopPullDownRefresh(), wx.hideLoading();
            });
        });
    },
    onShow: function() {},
    onChangeNumber: function(t) {
        console.log(t.detail), this.setData({
            number: t.detail.number,
            totalPrice: (this.data.order.roomPrice * t.detail.number * this.data.inTimeObj.statistics_data).toFixed(2)
        });
    },
    formSubmit: function(t) {
        var o = this;
        if (console.log("form发生了submit事件，携带数据为：", t.detail), this.validateForm(t.detail.value)) {
            wx.showLoading({
                title: "请稍后"
            });
            var i = [];
            for (var r in t.detail.value) r.startsWith("people") && i.push(t.detail.value[r]);
            var s = "";
            s = this.data.inTimeObj.startDate > 0 ? e.default.timestampToYMD(this.data.inTimeObj.startDate) : e.default.getcurrentTimeYMD();
            var n = "";
            n = this.data.inTimeObj.endDate > 0 ? e.default.timestampToYMD(this.data.inTimeObj.endDate) : e.default.getDateYMD(1);
            var d = this;
            a.default.createHotelOrder({
                roomId: d.data.roomId,
                strategyId: d.data.strategyId,
                bookInTime: s,
                bookOutTime: n,
                bookNum: d.data.number,
                custNames: i.join(","),
                custMobile: t.detail.value.phone,
                formId: t.detail.formId
            }).then(function(t) {
                console.log(t, "++++"), wx.hideLoading(), d.setData({
                    order: t.data
                }), 0 == t.status ? 2 == t.data.payType ? wx.redirectTo({
                    url: "/pages/hotel/order_detail/index?id=" + t.data.id
                }) : 1 == t.data.payType && o.dealPayWeiXin(t) : (d.setData({
                    errorvalue: errors[0],
                    $toast: {
                        show: !0
                    }
                }), setTimeout(function() {
                    d.setData({
                        $toast: {
                            show: !1
                        },
                        errorvalue: "预定失败"
                    });
                }, 1500));
            }).catch(function(t) {
                console.log(t), wx.stopPullDownRefresh(), wx.hideLoading();
            });
        }
    },
    dealPayWeiXin: function(t) {
        console.log("dealPayWeiXin------", t);
        var e = t.data.id, o = this;
        a.default.getHotelOrderPagSign({
            orderNo: t.data.orderNo
        }).then(function(t) {
            0 == t.status && t.data && t.data.nonceStr && wx.requestPayment({
                timeStamp: t.data.timeStamp + "",
                nonceStr: t.data.nonceStr,
                package: t.data.package,
                signType: t.data.signType,
                paySign: t.data.paySign,
                success: function(t) {
                    console.log("微信支付成功===========>"), wx.redirectTo({
                        url: "/pages/hotel/order_result/index?result=1&id=" + e
                    }), o.setData({
                        isPaying: !1
                    });
                },
                fail: function(t) {
                    wx.redirectTo({
                        url: "/pages/hotel/order_result/index?result=0&id=" + e
                    }), o.setData({
                        isPaying: !1
                    });
                }
            });
        }).catch(function(t) {
            wx.hideLoading(), o.setData({
                isPaying: !1
            }), o.setData({
                errorvalue: errors[0],
                $toast: {
                    show: !0
                }
            }), setTimeout(function() {
                o.setData({
                    $toast: {
                        show: !1
                    },
                    errorvalue: "支付失败"
                });
            }, 1500);
        });
    },
    validateForm: function(t) {
        var a = this, o = [];
        for (var i in t) i.startsWith("people") && (t[i] ? t[i].length < 2 && o.push("入住人姓名至少2个字") : o.push("请输入入住人姓名"));
        return t.phone ? e.default.testMobile(t.phone) || o.push("请输入合法手机号码") : o.push("请输入手机号码"), 
        !(o.length > 0) || (this.setData({
            errorvalue: o[0],
            $toast: {
                show: !0
            }
        }), setTimeout(function() {
            a.setData({
                $toast: {
                    show: !1
                },
                errorvalue: o[0]
            });
        }, 1500), !1);
    },
    onShareAppMessage: function() {}
});