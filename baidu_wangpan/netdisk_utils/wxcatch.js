Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = "_deadtime";

exports.wxcatch = {
    setStorage: function(t, r, a) {
        wx.setStorageSync(t, r);
        var o = parseInt(a, 10);
        if (o > 0) {
            var n = Date.parse(new Date());
            n = n / 1e3 + o, wx.setStorageSync(t + e, n + "");
        } else wx.removeStorageSync(t + e);
    },
    getStorage: function(t, r) {
        var a = parseInt(wx.getStorageSync(t + e), 10);
        if (a && parseInt(a, 10) < Date.parse(new Date()) / 1e3) return r || void 0;
        var o = wx.getStorageSync(t);
        return o || r;
    },
    removeStorage: function(t) {
        wx.removeStorageSync(t), wx.removeStorageSync(t + e);
    }
};