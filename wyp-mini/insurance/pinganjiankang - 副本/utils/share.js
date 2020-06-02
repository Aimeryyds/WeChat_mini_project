Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFromParams = function() {
    return {
        from_openId: a,
        from_unionId: u
    };
}, exports.setShareUrl = function() {
    return "?share_openId=".concat(o, "&share_unionId=").concat(n);
};

var e = [ wx.getStorageSync("openId"), wx.getStorageSync("unionId"), getApp() ], o = e[0], n = e[1], r = e[2].globalData.launchOptions.query, t = r.share_openId, a = void 0 === t ? "" : t, s = r.share_unionId, u = void 0 === s ? "" : s;