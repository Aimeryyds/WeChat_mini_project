function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var e, t = getApp(), o = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: (e = {
        mode: "scaleToFill",
        src: ""
    }, a(e, "mode", "scaleToFill"), a(e, "setMeal", []), a(e, "selected", null), a(e, "money", ""), 
    a(e, "payTip", []), a(e, "balance", ""), a(e, "type", 0), a(e, "isSelect", !1), 
    a(e, "mainColor", ""), a(e, "textColor", ""), a(e, "btnText", "开通"), a(e, "deposit", ""), 
    a(e, "depositMoney", 0), a(e, "depositState", -1), e),
    toHistoryRidePackage: function() {
        wx.navigateTo({
            url: "./historyRidePackage/historyRidePackage?type=" + this.data.type
        });
    },
    onLoad: function(a) {
        var e = "" + t.globalData.imagesUrl + t.globalData.accountId + "/ridePackage/qixingtaocan_image@3x.png", o = [ "1、购买以后不支持退款，请确认后再购买。", "2、只能在套餐生效期间使用，逾期无效，超过最大使用次数无效。", "3、骑行会员不支持叠加购买，需要使用完或者到期以后才能再次购买。", "4、如果有骑行时长限制，超过以后只能使用余额支付。", "5、如果有骑行次数限制，超过以后无效。" ];
        1 == a.type ? (e = "" + t.globalData.imagesUrl + t.globalData.accountId + "/ridePackage/mianyataocan_image@3x.png", 
        wx.setNavigationBarTitle({
            title: "免押套餐"
        }), o = [ "1、购买以后不支持退款，请确认后再购买。", "2、只能在有效期内无需提交押金，逾期需要提交押金才能骑行。", "3、支持叠加购买，叠加购买后有效期将会被叠加。", "4、免押套餐不含骑行费用。" ]) : wx.setNavigationBarTitle({
            title: "骑行套餐"
        }), "true" == a.scan && (this.scan = !0), this.setData({
            type: a.type,
            src: e,
            payTip: o,
            mainColor: t.globalData.mainColor,
            textColor: t.globalData.textColor
        });
    },
    onShow: function() {},
    onReady: function() {
        var a = this;
        t.globalData.locationInfo ? (this.initPackage(), this.initDeposit()) : t.getLocationInfo("gcj02", function(e) {
            a.initPackage(), a.initDeposit();
        });
    },
    initDeposit: function() {
        var a = this;
        if (1 == this.data.type) {
            if (!t.globalData.locationInfo) return void o.showModal_nocancel("无法获取位置", function() {
                wx.navigateBack({});
            });
            t.checkToken(function(e) {
                if (e.length > 0) {
                    var i = t.globalData.baseUrl + "adAccountDeposit/getByLocation.do", n = {
                        accountId: t.globalData.accountId,
                        lo: t.globalData.locationInfo.longitude,
                        la: t.globalData.locationInfo.latitude,
                        mapType: 2,
                        token: e
                    };
                    o.request(i, n, function(e) {
                        if (e.ret) {
                            var t = "", o = 0;
                            if (0 != e.data.depositMoney || 0 != e.data.useDeposit) switch (Number(e.data.depositStatus)) {
                              case 0:
                                t = "押金", o = (e.data.depositMoney / 100).toFixed(2);
                                break;

                              case 1:
                                t = "已交押金", o = (e.data.useDeposit / 100).toFixed(2);
                                break;

                              case 2:
                                t = "押金退还中";
                                break;

                              case 3:
                                t = "芝麻信用";
                                break;

                              case 4:
                                t = "押金冻结";
                                break;

                              case 5:
                                t = "学生认证免押";
                                break;

                              case 6:
                                t = "押金不足,请补交", o = ((Number(e.data.depositMoney) - Number(e.data.useDeposit)) / 100).toFixed(2);
                            }
                            a.setData({
                                deposit: t,
                                depositMoney: o,
                                depositState: e.data.depositStatus
                            });
                        } else e.code;
                    });
                }
            });
        }
    },
    returnDeposit: function() {
        var a = this;
        t.checkToken(function(e) {
            e.length > 0 && wx.showModal({
                title: "提示",
                content: "押金退还时间为1-3个工作日，在此期间无法用车，是否仍然退押金？",
                success: function(i) {
                    if (i.confirm) {
                        var n = t.globalData.baseUrl + "returnDeposit/apply.do", c = {
                            token: e
                        };
                        o.request(n, c, function(e) {
                            e && (o.showModal("请留意微信通知!"), a.initDeposit());
                        });
                    }
                }
            });
        });
    },
    initPackage: function() {
        if (t.globalData.locationInfo) {
            var a = this;
            t.checkToken(function(e) {
                if (e.length > 0) {
                    wx.showToast({
                        title: "正在加载",
                        icon: "loading",
                        mask: !0,
                        duration: 1e6
                    });
                    var i = t.globalData.baseUrl + "rideCard/queryPage.do", n = {
                        pageNO: 1,
                        rowCount: 50,
                        accountId: t.globalData.accountId,
                        lo: t.globalData.locationInfo.longitude,
                        la: t.globalData.locationInfo.latitude,
                        mapType: 2,
                        token: e
                    };
                    1 == a.data.type && (i = t.globalData.baseUrl + "memberFee/findMemberFee.do"), o.request(i, n, function(e) {
                        wx.hideToast(), e.ret && 0 != e.data.length ? (a.adAccountId = e.data[0].accountId, 
                        a.setData({
                            money: (Number(e.data[0].money) / 100).toFixed(2),
                            setMeal: e.data
                        })) : (a.setData({
                            isSelect: !1
                        }), o.showModal_nocancel("该套餐暂未开设", function() {
                            wx.navigateBack({});
                        }));
                    });
                }
            });
        } else o.showModal_nocancel("无法获取位置", function() {
            wx.navigateBack({});
        });
    },
    select: function(a) {
        var e = this, t = a.currentTarget.dataset.selected, o = a.currentTarget.dataset.money, i = "";
        i = -2 == t ? "缴付" : "开通", e.setData({
            selected: t,
            money: o,
            isSelect: !0,
            btnText: i
        });
    },
    auth: function(a) {
        if (0 != this.data.setMeal.length && this.data.selected) {
            var e = this;
            wx.showToast({
                title: "请稍候...",
                icon: "loading",
                mask: !0,
                duration: 2e3
            });
            t.checkToken(function(a) {
                a.length > 0 && wx.login({
                    success: function(i) {
                        if (i.code) {
                            var n = t.globalData.baseUrl + "weixinPay/createMemberOrder_weixin.do", c = {
                                token: a,
                                code: i.code,
                                adAccountId: e.adAccountId
                            };
                            0 == e.data.type ? (n = t.globalData.baseUrl + "weixinPay/createRideCardOrder_weixin.do", 
                            c.rideCardId = e.data.selected) : c.memberFeeId = e.data.selected, -2 == e.data.selected && (n = t.globalData.baseUrl + "weixinPay/createOrder_weixin.do", 
                            c.deposit = !0), o.request(n, c, function(a) {
                                var e = JSON.parse("{" + a.data.replace(/'/g, '"') + "}");
                                wx.requestPayment({
                                    timeStamp: e.timeStamp,
                                    nonceStr: e.nonceStr,
                                    package: e.package,
                                    signType: "MD5",
                                    paySign: e.paySign,
                                    success: function(a) {
                                        console.log(a), "ok" == a.errMsg.split(":")[1] && (wx.showToast({
                                            title: "支付成功！",
                                            icon: "success",
                                            duration: 3e3
                                        }), setTimeout(function() {
                                            wx.navigateBack({
                                                delta: 1
                                            });
                                        }, 2e3));
                                    },
                                    fail: function(a) {
                                        console.info("fail res: ", a);
                                        var e = a.errMsg.split(":")[1];
                                        "fail cancel" !== e ? wx.showToast({
                                            title: e,
                                            icon: "none",
                                            duration: 2e3
                                        }) : console.log("用户取消支付");
                                    }
                                });
                            });
                        }
                    }
                });
            });
        }
    },
    valuationRule: function() {
        var a = this;
        wx.navigateTo({
            url: "../valuationRule/valuationRule?machineNO=" + a.data.machineNO,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    }
});