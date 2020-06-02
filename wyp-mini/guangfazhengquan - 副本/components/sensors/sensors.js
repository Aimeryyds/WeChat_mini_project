Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    track: function(e) {
        var t = e.app, o = e.event, a = void 0 === o ? "MPClickButton" : o, n = e.props, i = void 0 === n ? {} : n;
        t = t || getApp();
        var u = wx.getStorageSync("SNI_APPLET_SESSION") || {}, r = u.wechat, p = void 0 === r ? {} : r, l = u.portal, m = void 0 === l ? {} : l, s = getCurrentPages(), d = s[s.length - 1], c = d.__route__, b = d.beacon, f = void 0 === b ? {} : b, v = {
            pageTitle: f.name,
            $url_path: c,
            mpName: "行情小程序",
            unionId: p && p.unionid,
            portalId: m && m.portal_id,
            mobile: m && m.mobile
        };
        i.buttonNameSuffix && (!i.buttonName && f.name && (v.buttonName = f.name + "-" + i.buttonNameSuffix), 
        i.buttonNameSuffix = null), setTimeout(function() {
            var e = Object.assign({}, v, i);
            t.sensors.track(a, e);
        }, 100);
    }
};