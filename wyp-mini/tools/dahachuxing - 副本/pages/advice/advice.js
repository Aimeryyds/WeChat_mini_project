var t = getApp(), o = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        advice: "",
        title: "",
        mainColor: "",
        textColor: ""
    },
    selectAdvice: function(t) {
        var o = t.currentTarget.dataset.title;
        this.setData({
            title: o
        });
    },
    bindTextAreaBlur: function(t) {
        this.setData({
            advice: t.detail.value
        });
    },
    inputTitle: function(t) {
        this.setData({
            title: t.detail.value
        });
    },
    commitAdvice: function() {
        var o = this;
        t.globalData.locationInfo ? this.sendAdvice() : t.getLocationInfo("gcj02", function(t) {
            o.sendAdvice();
        });
    },
    sendAdvice: function() {
        var n = this.data.title, a = this.data.advice;
        0 != n.indexOf(" ") && 0 != n.length ? 0 != a.indexOf(" ") && 0 != a.length ? t.checkToken(function(e) {
            if (e.length > 0) {
                var i = t.globalData.baseUrl + "suggestion/add.do", l = {
                    token: e,
                    title: n,
                    content: a,
                    accountId: t.globalData.accountId,
                    lo: t.globalData.locationInfo.longitude,
                    la: t.globalData.locationInfo.latitude,
                    mapType: 2
                };
                o.request(i, l, function(t) {
                    t.ret && o.showModal_nocancel("提交成功！", function() {
                        wx.navigateBack({});
                    });
                });
            }
        }) : wx.showToast({
            title: "请输入问题反馈",
            icon: "none"
        }) : wx.showToast({
            title: "请选择问题类型",
            icon: "none"
        });
    },
    onLoad: function(o) {
        this.setData({
            mainColor: t.globalData.mainColor,
            textColor: t.globalData.textColor
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});