var e = require("../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../store/global")), a = e(require("./mlodash")), o = (wx.getSystemInfoSync() || {}).platform, n = wx.canIUse("getLogManager") && wx.getLogManager(), t = a.default.isFunction(wx.getRealtimeLogManager) && wx.getRealtimeLogManager();

function l(e) {
    if (n && n[e] && a.default.isFunction(n[e])) {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) o[t - 1] = arguments[t];
        var l = a.default.reduce(o, function(e, r) {
            return a.default.isObject(r) || a.default.isArray(r) ? e += " " + JSON.stringify(r) : e += " " + r, 
            e;
        }, "[c]");
        n[e](l);
    }
}

module.exports = exports = {
    log: function() {
        if (!r.default.state.dev || "devtools" !== o) {
            for (var e, a = arguments.length, n = new Array(a), t = 0; t < a; t++) n[t] = arguments[t];
            (e = console).log.apply(e, n), l.apply(void 0, [ "log" ].concat(n));
        }
    },
    info: function() {
        if (!r.default.state.dev || "devtools" !== o) {
            for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++) n[i] = arguments[i];
            (e = console).info.apply(e, n), l.apply(void 0, [ "info" ].concat(n)), t && t.info.apply(t, n);
        }
    },
    warn: function() {
        if (!r.default.state.dev || "devtools" !== o) {
            for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++) n[i] = arguments[i];
            (e = console).warn.apply(e, n), l.apply(void 0, [ "warn" ].concat(n)), t && t.warn.apply(t, n);
        }
    },
    error: function() {
        for (var e, r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
        (e = console).error.apply(e, a), l.apply(void 0, [ "debug", "ERROR" ].concat(a)), 
        t && (t.error.apply(t, a), t.debug.apply(t, a));
    },
    realtimeDebug: function() {
        if (t) {
            for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
            t.debug.apply(t, r);
        }
    }
};