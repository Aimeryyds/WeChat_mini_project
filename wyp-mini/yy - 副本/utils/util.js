function e(e) {
    var t = void 0;
    switch (e.toString().length) {
      case 1:
        t = "00" + e;
        break;

      case 2:
        t = "0" + e;
        break;

      default:
        t = e;
    }
    return t;
}

function t() {
    var t = new Date();
    return "nearLive-yy " + t.toLocaleTimeString("en-US", {
        hour12: !1
    }) + "." + e(t.getMilliseconds()) + ": ";
}

function n(e, t) {
    e = e.split("."), t = t.split(".");
    for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
    for (;t.length < n; ) t.push("0");
    for (var r = 0; r < n; r++) {
        var o = parseInt(e[r]), a = parseInt(t[r]);
        if (o > a) return 1;
        if (o < a) return -1;
    }
    return 0;
}

var r = function() {
    if ("undefined" == typeof window && wx) {
        var e = wx.getSystemInfoSync().SDKVersion;
        if (n(e, "2.1.0") >= 0) return wx.getLogManager(1).log("I can use wx log. SDKVersion=" + e), 
        !0;
    }
    return !1;
}(), o = {
    debug: function(e) {
        r && (e = t() + e, wx.getLogManager(1).debug(e));
    },
    log: function(e) {
        r && (e = t() + e, wx.getLogManager(1).log(e));
    },
    info: function(e) {
        r && (e = t() + e, wx.getLogManager(1).info(e));
    },
    warn: function(e) {
        r && (e = t() + e, wx.getLogManager(1).warn(e));
    }
}, a = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null, i = {
    info: function() {
        a && a.info.apply(a, arguments);
    },
    warn: function() {
        a && a.warn.apply(a, arguments);
    },
    error: function() {
        a && a.error.apply(a, arguments);
    },
    setFilterMsg: function(e) {
        a && a.setFilterMsg && "string" == typeof e && a.setFilterMsg(e);
    },
    addFilterMsg: function(e) {
        a && a.addFilterMsg && "string" == typeof e && a.addFilterMsg(e);
    }
};

module.exports = {
    formatTime: function(e) {
        var t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate(), o = e.getHours(), a = e.getMinutes(), i = e.getSeconds();
        return [ t, n, r ].map(formatNumber).join("/") + " " + [ o, a, i ].map(formatNumber).join(":");
    },
    formateNumber: function(e) {
        var t = parseInt(e);
        return t > 9999 ? (t / 1e4).toFixed(1) + "万" : t;
    },
    checkNetwork: function(e) {
        wx.getNetworkType({
            success: function(t) {
                var n = t.networkType;
                e && "function" == typeof e && e.call(this, n);
            }
        });
    },
    excuteFunction: function(e, t) {
        var n = t || null;
        e && "function" == typeof e && e.call(this, n);
    },
    logger: o,
    rLog: i
};