function e(e) {
    return (1e6 * new Date() + Math.floor(1e6 * Math.random())).toString(e) || "";
}

function n() {
    i.conf.getLocation && wx.getSetting({
        success: function(e) {
            e && e.authSetting && e.authSetting["scope.userLocation"] && wx.getLocation({
                type: i.conf.locationType,
                success: function(e) {
                    wx.setStorageSync(i.prefix + i.lt, JSON.stringify(e));
                }
            });
        }
    });
}

function t() {
    i.conf.getUserInfo && wx.getSetting({
        success: function(e) {
            e && e.authSetting && e.authSetting["scope.userInfo"] && wx.getUserInfo({
                withCredentials: !1,
                success: function(e) {
                    var n = e.userInfo;
                    n.nickName = encodeURIComponent(n.nickName), wx.setStorageSync(i.prefix + i.ui, JSON.stringify(n));
                }
            });
        }
    });
}

function o(n, t, o, r, s, a) {
    (!t || void 0 === t || 0 >= t) && (t = new Date().getTime());
    var c = [ {
        type: 2,
        data: {
            id: e(32),
            start: t,
            status: n,
            duration: o || 0,
            pages: r || [],
            events: s || []
        }
    } ], u = function() {
        for (var e = wx.getSystemInfoSync() || {}, n = Object.keys(e), t = 0; t < n.length; ) {
            var o = e[n[t]];
            "string" == typeof o && (e[n[t]] = o.replace(/[^\w\.]/g, "_")), t += 1;
        }
        return e;
    }(), f = {
        deviceId: function() {
            var n = wx.getStorageSync(i.prefix + i.u);
            return "" == n && (n = e(36), wx.setStorageSync(i.prefix + i.u, n)), n;
        }(),
        appkey: i.conf.appKey,
        versionCode: i.conf.version,
        initTime: t,
        scene: i.options && i.options.scene,
        channelID: i.conf.channelId,
        sdkVersion: u.SDKVersion,
        networkType: i.networkType,
        pixel: u.pixelRatio,
        language: u.language,
        model: encodeURIComponent(u.model),
        wxVersion: u.version,
        system: encodeURIComponent(u.system),
        platform: encodeURIComponent(u.platform),
        windowArea: u.windowWidth + "*" + u.windowHeight,
        brand: u.brand,
        os_version: u.version,
        systemVersion: u.version,
        query: JSON.stringify(i.options),
        opid: i.opid,
        unid: i.unid,
        userInfo: i.conf.getUserInfo && wx.getStorageSync(i.prefix + i.ui) || "",
        location: i.conf.getLocation && wx.getStorageSync(i.prefix + i.lt) || "",
        msgs: c,
        msgEventName: a || n
    };
    wx.request({
        url: i.serverUrl + "&e=".concat(a || n),
        data: f,
        method: "POST"
    });
}

var i = {
    options: null,
    serverUrl: null,
    opid: null,
    unid: null,
    conf: {},
    prefix: "beacon_",
    sdkVersion: "weapp_v1.0.7",
    networkType: "",
    u: "u",
    ui: "ui",
    lt: "lt",
    nt: "nt",
    oik: "oik",
    uik: "uik",
    init: function(e) {
        i.serverUrl = "https://" + (e.isDebug ? "jrlts" : "otheve") + ".beacon.qq.com/analytics/upload?tp=weapp", 
        i.opid = wx.getStorageSync(i.prefix + i.oik), i.unid = wx.getStorageSync(i.prefix + i.uik), 
        i.conf = e, n(), t(), wx.getNetworkType({
            success: function(e) {
                i.networkType = e.networkType;
            }
        }), wx.onNetworkStatusChange(function(e) {
            i.networkType = e.networkType;
        });
    },
    onEvent: function(e, n) {
        var t = new Date().getTime(), i = getCurrentPages(), r = "";
        i && i.length && (r = i[i.length - 1].__route__), o(4, t, 0, [], [ {
            weappPageName: r,
            count: 1,
            start: t,
            name: e,
            params: n || {}
        } ], e);
    },
    sendEvent: function(e, n, t, i) {
        (!n || void 0 === n || 0 >= n) && (n = new Date().getTime());
        var r = 0 === t ? 0 : n - t, s = "", a = getCurrentPages();
        a && a.length && (s = a[a.length - 1].__route__), o(e, n, r, [ {
            name: s,
            start: n,
            duration: r,
            refer: ""
        } ], i);
    },
    setAppKey: function(e) {
        i.conf.appKey = e;
    },
    setChannelId: function(e) {
        i.conf.channelId = e;
    },
    setOpenid: function(e) {
        e && e.length > 0 && (i.opid = e, wx.setStorageSync(i.prefix + i.oik, e));
    },
    setUnionid: function(e) {
        e && e.length > 0 && (i.unid = e, wx.setStorageSync(i.prefix + i.uik, e));
    },
    setGetLocation: function(e) {
        i.conf.getLocation = !0 === e, !0 === e && n();
    },
    setGetUserInfo: function(e) {
        i.conf.getUserInfo = !0 === e, !0 === e && t();
    }
};

module.exports = i;