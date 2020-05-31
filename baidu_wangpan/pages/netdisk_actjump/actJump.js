var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
}, t = require("../../netdiisk_requestapi/reportUser.js"), a = getApp();

Page({
    data: {
        appid: "wx4150e878e2194395"
    },
    onLoad: function(e) {
        this.handleData(e), wx.hideShareMenu(), wx.log.send({
            type: "activity_jump_onshow_" + e.id,
            value: "跳转小程序中间页展现"
        }), a.mtj && a.mtj.trackEvent("act_jump_page_show");
    },
    handleData: function(t) {
        var a = "";
        if (Object.keys(t).length > 0) {
            var r = t.project, n = t.page;
            if (r && n) {
                a = "/pages/" + r + "/" + n;
                for (var i in t) "project" !== i && "page" !== i && (a += -1 === a.indexOf("?") ? "?" : "&", 
                a += i + "=" + t[i]);
            }
        }
        !a && (a = "/pages/1/index"), a += -1 === a.indexOf("?") ? "?" : "&", a += "miniprogram=true", 
        this.setData(e({
            url: a
        }, t));
    },
    onReady: function() {
        (0, t.reportUser)(), this.confirmAct = this.selectComponent("#ConfirmAct"), this.confirmAct.show();
    }
});