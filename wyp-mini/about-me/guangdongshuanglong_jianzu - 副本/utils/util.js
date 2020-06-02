function n(n) {
    return (n = n.toString())[1] ? n : "0" + n;
}

module.exports = {
    formatTime: function(o) {
        var i = o.getFullYear(), t = o.getMonth() + 1, a = o.getDate(), e = o.getHours(), u = o.getMinutes(), r = o.getSeconds();
        return [ i, t, a ].map(n).join("/") + " " + [ e, u, r ].map(n).join(":");
    },
    showLoadingDialog: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "加载中";
        wx.showToast({
            title: n,
            mask: !0,
            icon: "loading",
            duration: 1e4
        });
    },
    hideLoadingDialog: function() {
        wx.hideToast();
    },
    stopPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    showNavigationBarLoading: function() {
        wx.showNavigationBarLoading();
    },
    hideNavigationBarLoading: function() {
        wx.hideNavigationBarLoading();
    },
    isOptStrNull: function(n) {
        return void 0 == n || null == n || "" == n || "null" == n || "[]" == n || "{}" == n;
    },
    isFunction: function(n) {
        return "function" == typeof n;
    }
};