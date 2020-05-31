function t() {
    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return getCurrentPages().length > 9 && (t && wx.wetoast({
        content: "因小程序层级限制，请在百度网盘APP完成操作",
        duration: 1600
    }), wx.log.file.outDirLimit.send(), !0);
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

wx.getCurrentViewPage = function() {
    var t = getCurrentPages() || [];
    return t[t.length - 1];
};

var n = Object.create(null);

wx.setPageData = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    n[t] || (n[t] = {}), "function" == typeof e ? n[t].update = e : n[t].data = e;
}, wx.getPageData = function(t) {
    var e = n[t] || {};
    return {
        query: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = e.data;
            return t && "*" !== t ? String(t).split(".").reduce(function(t, e) {
                return t ? t[e] : t;
            }, n) : n;
        },
        update: function(t) {
            t && e.update && e.update(t);
        }
    };
}, wx.safeNavigateTo = function(n) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    t() || ("object" === (void 0 === o ? "undefined" : e(o)) && (o = Object.keys(o).map(function(t) {
        return t + "=" + o[t];
    }).join("&")), o && (n = n + (/\?/.test(n) ? "&" : "?") + o), wx.navigateTo({
        url: n
    }));
};

var o = "";

wx.getCurrentViewMode = function() {
    return o || (o = wx.getStorageSync("viewMode") || "list");
}, wx.setCurrentViewMode = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    t && wx.setStorageSync("viewMode", o = t);
};