var _webview = require("../../../we7/resource/js/webview"), app = getApp();

Page({
    data: {
        canIUse: wx.canIUse("web-view"),
        url: ""
    },
    onLoad: function(e) {
        var w = "";
        if (e.url && (w = decodeURIComponent(e.url)), !w) try {
            (w = wx.getStorageSync("we7_webview")) && wx.removeStorageSync("we7_webview");
        } catch (e) {}
        w || (w = app.util.url("wxapp/home/wxapp_web")), (0, _webview.urlAddCode)(w);
    },
    onShow: function() {
        var e = "";
        try {
            (e = wx.getStorageSync("we7_webview")) && wx.removeStorageSync("we7_webview");
        } catch (e) {}
        if (e) {
            e = (0, _webview.urlAddCode)(e);
            this.setData({
                url: e
            });
        }
    },
    onShareAppMessage: function(e) {
        var w = app.util.url("wxapp/home/wxapp_web");
        return w = w + "&url=" + encodeURIComponent(e.webViewUrl), console.log(w), {
            path: "/wn_storex/pages/view/index?url=" + encodeURIComponent(w),
            success: function(e) {},
            fail: function(e) {}
        };
    }
});