var e = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var a = this;
        console.log(t), wx.showLoading({
            title: "加载中",
            mask: !0
        }), e.toLogin(function() {
            a.unifiedOrder(t);
        });
    },
    unifiedOrder: function(t) {
        var a = this;
        if (!(t && t.out_trade_no && t.total_fee && t.partner_id && t.timestamp && t.sign)) return wx.showToast({
            title: "请求参数错误",
            icon: "none"
        }), void setTimeout(function() {
            wx.navigateBack();
        }, 4e3);
        var n = "";
        t.return_url && (n = t.return_url), wx.request({
            url: e.globalData.domainPath + e.globalData.projectName + "/unifiedOrder.do",
            data: {
                sessionToken: e.globalData.sessionToken,
                out_trade_no: t.out_trade_no,
                total_fee: t.total_fee,
                return_url: n,
                partner_id: t.partner_id,
                timestamp: t.timestamp,
                sign: t.sign
            },
            success: function(e) {
                console.log(e), "0000" == e.data.errcode ? a.toPayment(e.data, t.out_trade_no) : (wx.hideLoading(), 
                wx.showToast({
                    title: "系统错误",
                    icon: "none",
                    duration: 4e4
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 4e3));
            },
            fail: function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "系统错误",
                    icon: "none",
                    duration: 4e4
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 4e3);
            }
        });
    },
    toPayment: function(e, t) {
        var a = this;
        wx.hideLoading(), wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: e.signType,
            paySign: e.paySign,
            success: function(n) {
                if (a.payLogRecord(t, e.batchId, JSON.stringify(n)), e.return_url && "" != e.return_url) {
                    var o = e.return_url;
                    "-1" == o.indexOf("?") ? o += "?tradeNo=" + t : o += "&tradeNo=" + t, o = encodeURIComponent(o), 
                    wx.showToast({
                        title: "支付成功",
                        icon: "success",
                        duration: 2e3
                    }), wx.redirectTo({
                        url: "/pages/webview/webview?url=" + o
                    });
                }
            },
            fail: function(n) {
                a.payLogRecord(t, e.batchId, JSON.stringify(n)), "requestPayment:fail cancel" == n.errMsg ? wx.navigateBack() : (wx.showToast({
                    title: "系统错误",
                    icon: "none",
                    duration: 4e4
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 4e3));
            },
            complete: function(n) {
                "requestPayment:cancel" == n.errMsg && (a.payLogRecord(t, e.batchId, JSON.stringify(n)), 
                wx.navigateBack());
            }
        });
    },
    payLogRecord: function(t, a, n) {
        wx.request({
            url: e.globalData.domainPath + e.globalData.projectName + "/payLog.do",
            data: {
                tradeNo: t,
                batchId: a,
                content: n,
                sessionToken: e.globalData.sessionToken
            },
            success: function(e) {}
        });
    }
});