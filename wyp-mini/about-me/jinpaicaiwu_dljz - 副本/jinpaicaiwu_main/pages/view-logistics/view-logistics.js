(function(t) {
    t && t.__esModule;
})(require("../../wxParse/util.js")), require("../../wxParse/common.js");

var t = getApp();

Page({
    data: {
        info: 10,
        status: "",
        logisticname: "",
        logisticno: "",
        product: []
    },
    onLoad: function(a) {
        var e = a.oid, o = a.orderid, s = (t.globalData.carts, wx.getStorageSync("openid"), 
        this);
        o ? t.apiRequest("order", "getorder", {
            data: {
                oid: o
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var a = t.data.product;
                    s.setData({
                        product: a
                    });
                } else wx.showToast({
                    title: "参数错误！",
                    duration: 2500
                }), wx.navigateBack({
                    delta: 1
                });
            }
        }) : (wx.showToast({
            title: "参数错误！",
            duration: 2500
        }), wx.navigateBack({
            delta: 1
        })), e ? t.apiRequest("order", "logisticsState", {
            data: {
                oid: e
            },
            success: function(t) {
                if ("OK" == t.data.result) s.setData({
                    info: t.data.content,
                    status: t.data.status,
                    logisticname: t.data.logisticname,
                    logisticno: t.data.logisticno
                }); else {
                    var a = t.data.errmsg || "参数错误！";
                    wx.showToast({
                        title: a,
                        duration: 2500
                    });
                }
            }
        }) : (wx.showToast({
            title: "参数错误！",
            duration: 2500
        }), wx.navigateBack({
            delta: 1
        }));
    }
});