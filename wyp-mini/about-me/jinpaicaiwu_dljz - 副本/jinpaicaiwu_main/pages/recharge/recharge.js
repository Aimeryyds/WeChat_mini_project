var e = getApp();

Page({
    data: {
        btncolor: "",
        focus: !1,
        money: "",
        mlist: [ 100, 50, 30, 20, 10, 5 ]
    },
    _showTips: function(e, t) {
        wx.showModal({
            title: "友情提醒",
            content: e || "",
            showCancel: !1,
            complete: t
        });
    },
    doRecharge: function(t) {
        var a = this, n = t.detail.value, i = wx.getStorageSync("openid");
        return 0 == i.trim().length ? (a._showTips('"用户标识(Openid)"异常', function() {
            wx.navigateTo({
                url: "../login/login"
            });
        }), !1) : /^\d{1,}(\.\d{1,2})?$/.test(n.amount || "") ? (wx.showLoading({
            mask: !0,
            title: "处理中..."
        }), void e.apiRequest("user", "getprepayid", {
            data: {
                openid: i,
                amount: n.amount
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
                    tradeNO: t.trade_no,
                    success: function(e) {
                        if (wx.canIUse("alert") && 6001 == e.resultCode) return a._showTips("已取消"), !1;
                        wx.showToast({
                            title: "充值成功",
                            complete: function() {
                                wx.navigateTo({
                                    url: "../ucenter/ucenter"
                                });
                            }
                        });
                    },
                    fail: function(e) {
                        var t = e.errMsg;
                        "requestPayment:fail cancel" == t && (t = "已取消"), a._showTips(t);
                    }
                }); else if ("ERROR" == t.result) switch (t.errmsg) {
                  case "unlogin":
                    wx.navigateTo({
                        url: "../login/login"
                    });
                    break;

                  case "invalid":
                    a._showTips("请输入合法的充值金额");
                    break;

                  default:
                    a._showTips("请求失败，请稍后重试");
                }
            },
            fail: function() {
                a._showTips("请求失败，请稍后重试");
            },
            complete: function() {
                wx.hideLoading();
            }
        })) : (a._showTips("请输入合法的充值金额", function() {
            a.setData({
                focus: !0
            });
        }), !1);
    },
    onLoad: function(e) {
        var t = require("../../static/config.js");
        this.setData({
            btncolor: t.insidepage_themecolor || "#d80134"
        });
    },
    Selmoney: function(e) {
        var t = e.currentTarget.dataset.id, a = this.data.mlist;
        this.setData({
            money: a[t] || ""
        });
    },
    Checkmoney: function(e) {
        var t = e.detail.value;
        this.setData({
            money: t || ""
        });
    }
});