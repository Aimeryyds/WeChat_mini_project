var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../@babel/runtime/helpers/defineProperty")), a = e(require("../utils/mlodash")), o = e(require("../utils/logger")), n = require("../utils/time"), r = require("../utils/common"), i = require("../store/index"), s = require("../services/report"), c = require("./beacon");

function d(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, o);
    }
    return a;
}

function p(e) {
    for (var a = 1; a < arguments.length; a++) {
        var o = null != arguments[a] ? arguments[a] : {};
        a % 2 ? d(Object(o), !0).forEach(function(a) {
            (0, t.default)(e, a, o[a]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
    }
    return e;
}

function u(e, t, o) {
    var n = e[t];
    e[t] = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        a.default.isFunction(o.before) && o.before.apply(this, t), a.default.isFunction(n) && n.apply(this, t), 
        a.default.isFunction(o.after) && o.after.apply(this, t);
    };
}

function l(e) {
    return a.default.isObject(e) ? a.default.map(e, function(e, t) {
        return "".concat(t, ":").concat(e);
    }).join(", ") : e ? JSON.stringify(e) : "";
}

function h(e) {
    var t = this, a = (0, n.timestampToSecond)(Date.now());
    this.query = e, o.default.info("加载页面".concat(this.route, ", query="), e), this._beacon$ = {
        common: {
            pagePath: this.route,
            query: l(e)
        },
        time: {
            pageLoadStartTs: a,
            pageLoadEndTs: 0,
            pageShowStartTs: 0,
            pageShowEndTs: 0,
            pageReadyStartTs: 0,
            pageReadyEndTs: 0,
            pageHideStartTs: 0,
            pageHideEndTs: 0,
            pageUnloadStartTs: 0,
            pageUnloadEndTs: 0,
            pageShowLoadDur: 0,
            pageReadyLoadDur: 0
        },
        onShowSend: function() {
            if (t.isOutsideTarget) {
                var e = "1" === i.global.appColdBoot ? t._beacon$.time.pageShowEndTs - i.global.appLaunchStartTs : t._beacon$.time.pageShowEndTs - i.global.appShowStartTs, a = "1" === i.global.appColdBoot ? t._beacon$.time.pageLoadStartTs - i.global.appLaunchStartTs : t._beacon$.time.pageLoadStartTs - i.global.appShowStartTs;
                t._beaconSend$(c.BEACON_EVENT.outside_page_show_ts, p({}, t._beacon$.time, {
                    coldBoot: i.global.appColdBoot,
                    appLaunchStartTs: i.global.appLaunchStartTs,
                    appShowStartTs: i.global.appShowStartTs,
                    startUpToShowDur: (0, r.toFixed3)(e),
                    startUpToLoadDur: (0, r.toFixed3)(a)
                }));
            } else (i.global.fromOutside || i.global.jumpTargetPagePath) && -1 === t.route.indexOf("jump/jump") || t._beaconSend$(c.BEACON_EVENT.page_show_ts, t._beacon$.time);
        },
        onReadySend: function() {
            if (t.isOutsideTarget) {
                var e = "1" === i.global.appColdBoot ? t._beacon$.time.pageReadyEndTs - i.global.appLaunchStartTs : t._beacon$.time.pageReadyEndTs - i.global.appShowStartTs, a = "1" === i.global.appColdBoot ? t._beacon$.time.pageLoadStartTs - i.global.appLaunchStartTs : t._beacon$.time.pageLoadStartTs - i.global.appShowStartTs;
                t._beaconSend$(c.BEACON_EVENT.outside_page_ready_ts, p({}, t._beacon$.time, {
                    coldBoot: i.global.appColdBoot,
                    appLaunchStartTs: i.global.appLaunchStartTs,
                    appShowStartTs: i.global.appShowStartTs,
                    startUpToReadyDur: (0, r.toFixed3)(e),
                    startUpToLoadDur: (0, r.toFixed3)(a)
                }));
            } else (i.global.fromOutside || i.global.jumpTargetPagePath) && -1 === t.route.indexOf("jump/jump") || t._beaconSend$(c.BEACON_EVENT.page_ready_ts, t._beacon$.time);
        }
    }, this._beaconSend$ = function(e, a) {
        c.beacon.send(e, p({}, t._beacon$.common, {}, a));
    }, this._beacon$.EVENT = c.BEACON_EVENT, this.hasHideOnce = !1, -1 !== i.global.jumpTargetPagePath.indexOf(this.route) && i.global.fromOutside ? (this.isOutsideTarget = !0, 
    i.global.jumpTargetPagePath = "", i.global.fromOutside = !1) : this.isOutsideTarget = !1;
}

function g() {
    var e = (0, n.timestampToSecond)(Date.now());
    this._beacon$.time.pageLoadEndTs = e;
}

function f() {
    var e = (0, n.timestampToSecond)(Date.now());
    this._beacon$.time.pageShowStartTs = e, o.default.info("显示页面".concat(this.route));
}

function b() {
    var e = (0, n.timestampToSecond)(Date.now());
    this._beacon$.time.pageShowEndTs = e, this._beacon$.time.pageShowLoadDur = (0, r.toFixed3)(e - this._beacon$.time.pageLoadStartTs), 
    !this.hasHideOnce && a.default.isFunction(this._beacon$.onShowSend) && (this._beacon$.onShowSend(), 
    delete this._beacon$.onShowSend);
}

function m() {
    var e = (0, n.timestampToSecond)(Date.now());
    o.default.info("ready页面".concat(this.route)), this._beacon$.time.pageReadyStartTs = e, 
    i.global.dev && wx.setNavigationBarTitle({
        title: "腾讯新闻「开发版」"
    });
}

function T() {
    var e = (0, n.timestampToSecond)(Date.now());
    if (this._beacon$.time.pageReadyEndTs = e, this._beacon$.time.pageReadyLoadDur = (0, 
    r.toFixed3)(e - this._beacon$.time.pageLoadStartTs), !this.hasHideOnce && a.default.isFunction(this._beacon$.onReadySend) && (this._beacon$.onReadySend(), 
    delete this._beacon$.onReadySend), this.data.fromPage && !this.notProxyExposureReport) {
        var t = {
            opType: s.OP_TYPE.page_exposure,
            fromPage: this.data.fromPage
        };
        (a.default.has(this.query, "id") || a.default.has(this.data, "articleId")) && (t.articleId = this.query.id || this.data.articleId), 
        (a.default.has(this.query, "atype") || a.default.has(this.data, "atype")) && (t.atyp = this.query.atype || this.data.atype), 
        (0, s.report)(t);
    }
}

function S() {
    var e = (0, n.timestampToSecond)(Date.now());
    o.default.info("隐藏页面".concat(this.route)), this.hasHideOnce = !0, this._beacon$.time.pageHideStartTs = e;
}

function _() {
    var e = Date.now();
    this._beacon$.time.pageHideEndTs = (0, n.timestampToSecond)(e);
    var t = parseInt(1e3 * this._beacon$.time.pageShowStartTs), a = e - t;
    this.data.fromPage && !this.notProxyRetentionReport && (0, s.report)({
        opType: s.OP_TYPE.page_retention_time,
        startTime: t,
        endTime: e,
        duration: a,
        retentionType: s.RETENTION_TYPE.onHide,
        fromPage: this.data.fromPage
    });
}

function E() {
    var e = (0, n.timestampToSecond)(Date.now());
    this._beacon$.time.pageUnloadStartTs = e, o.default.info("卸载页面".concat(this.route));
}

function y() {
    var e = Date.now();
    this._beacon$.time.pageUnloadEndTs = (0, n.timestampToSecond)(e);
    var t = parseInt(1e3 * this._beacon$.time.pageLoadStartTs), a = e - t;
    this.data.fromPage && !this.notProxyRetentionReport && (0, s.report)({
        opType: s.OP_TYPE.page_retention_time,
        startTime: t,
        endTime: e,
        duration: a,
        retentionType: s.RETENTION_TYPE.onUnload,
        fromPage: this.data.fromPage
    });
}

function w(e) {
    var t = this, a = (0, n.timestampToSecond)(Date.now());
    c.beacon.options = e, c.beacon.setChannelId(e.scene), i.global.appLaunchStartTs = a, 
    this._beacon$ = {
        common: {},
        time: {
            appLaunchStartTs: a,
            appLaunchEndTs: 0,
            appShowStartTs: 0,
            appShowEndTs: 0,
            appHideStartTs: 0,
            appHideEndTs: 0
        },
        sendFlag: {}
    }, this._beaconSend$ = function(e, a) {
        c.beacon.send(e, p({}, t._beacon$.common, {}, a));
    }, this._beacon$.EVENT = c.BEACON_EVENT, this.hasHideOnce = !1;
}

function O(e) {
    var t = (0, n.timestampToSecond)(Date.now());
    this._beacon$.time.appLaunchEndTs = t;
}

function v(e) {
    var t = this, o = (0, n.timestampToSecond)(Date.now());
    c.beacon.options = e, c.beacon.setChannelId(e.scene), this._beacon$.time.appShowStartTs = o, 
    this._beacon$.common = {
        appPath: e.path || "app",
        query: l(e.query),
        scene: e.scene + "",
        coldBoot: "1"
    }, i.global.appShowStartTs = o, i.global.appColdBoot = "1", i.global.appHasHideOnce && (a.default.forEach(this._beacon$.time, function(e, a) {
        t._beacon$.time[a] = o;
    }), this._beacon$.common.coldBoot = "0", i.global.appLaunchStartTs = o, i.global.appColdBoot = "0");
}

function $(e) {
    var t = (0, n.timestampToSecond)(Date.now());
    this._beacon$.time.appShowEndTs = t, this._beacon$.time.appShowLaunchDur = (0, r.toFixed3)(t - this._beacon$.time.appLaunchStartTs), 
    i.global.appHasHideOnce || this._beacon$.sendFlag.app_show_ts || (this._beacon$.sendFlag.app_show_ts = !0, 
    this._beaconSend$(c.BEACON_EVENT.app_show_ts, this._beacon$.time));
}

function P() {
    var e = this, t = (0, n.timestampToSecond)(Date.now());
    a.default.forEach(this._beacon$.time, function(t, a) {
        e._beacon$.time[a] = 0;
    }), this._beacon$.time.appHideStartTs = t, i.global.appHideStartTs = t, i.global.appLaunchStartTs = 0, 
    i.global.appShowStartTs = 0, i.global.appColdBoot = "0", i.global.appHasHideOnce = !0;
}

function N() {
    var e = (0, n.timestampToSecond)(Date.now());
    this._beacon$.time.appHideEndTs = e;
}

function L(e) {
    var t = {
        msg: "",
        stackLength: 0
    };
    if (a.default.isString(e)) {
        var o = e.split("\n");
        o.length > 2 ? (t.stackLength = o.length, a.default.forEach(o, function(e, a) {
            t["s".concat(a)] = e.trim();
        })) : t.msg = e;
    } else e = JSON.stringify(e), t.msg = e;
    this._beaconSend$(c.BEACON_EVENT.app_error, t);
}

function q(e) {
    this._beaconSend$(c.BEACON_EVENT.page_not_found, {
        path: e.path,
        query: l(e.query),
        isEntryPage: e.isEntryPage ? "1" : "0",
        res: JSON.stringify(e)
    });
}

var D = Page;

Page = function(e) {
    u(e, "onLoad", {
        before: h,
        after: g
    }), u(e, "onShow", {
        before: f,
        after: b
    }), u(e, "onReady", {
        before: m,
        after: T
    }), u(e, "onHide", {
        before: S,
        after: _
    }), u(e, "onUnload", {
        before: E,
        after: y
    }), a.default.isFunction(e.data) && (e.data = e.data()), D(e);
};

var C = App;

App = function(e) {
    u(e, "onLaunch", {
        before: w,
        after: O
    }), u(e, "onShow", {
        before: v,
        after: $
    }), u(e, "onHide", {
        before: P,
        after: N
    }), u(e, "onError", {
        before: L
    }), u(e, "onPageNotFound", {
        before: q
    }), C(e);
};

var x = /btrace\.qq\.com|[otheve|jrlts]\.beacon\.qq\.com/, B = [ "model", "pixelRatio", "windowWidth", "windowHeight", "system", "language", "version", "screenWidth", "screenHeight", "SDKVersion", "brand", "fontSizeSetting", "batteryLevel", "statusBarHeight", "platform", "network", "app_version", "uuid" ];

function j(e) {
    var t = e.startPagePath, o = e.startTs, i = e.req, s = e.res, d = e.err;
    if (i && i.url && !i.url.match(x)) {
        var u, l = getCurrentPages(), h = a.default.get(l, "[".concat(l.length - 1, "].__route__")), g = [], f = [], b = (0, 
        n.timestampToSecond)(Date.now()), m = {
            startTs: o,
            endTs: b,
            duration: (0, r.toFixed3)(b - o),
            startPagePath: t,
            endPagePath: h,
            pageHasChange: t !== h ? "1" : "0",
            url: i.url,
            method: (i.method || "GET").toUpperCase()
        };
        u = i.data ? p({}, i.data) : {};
        var T = i.url.match(/^(?:([A-Za-z]+):)?(\/{2})?([\w.-]+)(\/[\w.-\/]+)(?:\?(.+))?/);
        T && (Object.assign(m, {
            protocol: T[1] || "",
            host: T[3] || "",
            uri: T[4] || ""
        }), T[5] && a.default.forEach(T[5].split("&"), function(e) {
            var t = e.split("="), a = t[0];
            u[a] && (a += "__1");
            var o = t[1];
            null == o && (o = ""), u[a] = decodeURIComponent(o);
        }), -1 !== m.uri.indexOf("v2/vote") && (m.uri = m.uri.replace(/\/\d+/, ""))), a.default.forEach(u, function(e, t) {
            -1 === B.indexOf(t) && f.push(t);
        }), f.sort(), a.default.forEach(f, function(e) {
            var t = u[e];
            null == t && (t = ""), a.default.isString(t) && t.length > 40 && (t = t.slice(0, 32) + "..." + t.slice(-5)), 
            g.push("".concat(e, ":").concat(t));
        }), m.reqData = g.join(","), m.reqDataFields = f.join(","), s ? (m.status = Number(s.statusCode) || 601, 
        m.msg = s.errMsg, m.ret = a.default.get(s, "data.ret", a.default.get(s, "data.code", "")) + "", 
        m.resType = "success", m.err = "", "" !== m.ret && "0" !== m.ret && (m.err = JSON.stringify(s.data), 
        c.beacon.send(c.BEACON_EVENT.request_error, m))) : (m.status = Number(d && d.statusCode) || 600, 
        m.msg = d && d.errMsg, m.ret = "600", m.resType = "fail", m.err = JSON.stringify(a.default.omit(d, [ "errMsg", "statusCode" ])), 
        c.beacon.send(c.BEACON_EVENT.request_error, m)), c.beacon.send(c.BEACON_EVENT.wx_request, m);
    }
}

var H, R = [], F = !1;

function A() {
    if (F && R.length) {
        var e = R.shift();
        wx.request(e), setTimeout(A, 100);
    }
}

var V = wx.request;

Object.defineProperty(wx, "request", {
    writeable: !0,
    configurable: !0,
    enumerable: !0,
    value: function(e) {
        var t = (0, n.timestampToSecond)(Date.now()), o = getCurrentPages(), r = a.default.get(o, "[".concat(o.length - 1, "].__route__")), i = e.success, s = e.fail;
        e && e.url && !e.url.match(x) ? (F = !1, V(p({}, e, {
            success: function(o) {
                j({
                    startPagePath: r,
                    startTs: t,
                    req: e,
                    res: o
                }), a.default.isFunction(i) && i(o);
            },
            fail: function(o) {
                j({
                    startPagePath: r,
                    startTs: t,
                    req: e,
                    err: o
                }), a.default.isFunction(s) && s(o);
            }
        })), clearTimeout(H), H = setTimeout(function() {
            F = !0, A();
        }, 2e3)) : F ? V(e) : R.push(e);
    }
});

var U = wx.setStorageSync;

Object.defineProperty(wx, "setStorageSync", {
    writeable: !0,
    configurable: !0,
    enumerable: !0,
    value: function() {
        try {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            U.apply(U, t);
        } catch (e) {
            o.default.error("setStorageSync err", e);
        }
    }
});

var I = console.error;

console.error = function() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    var n = t && t[0];
    if (!a.default.isString(n) || "request:fail " !== n && -1 === n.indexOf("模拟器") && -1 === n.indexOf("ERR_BLOCKED_BY_CLIENT")) {
        I.apply(void 0, t);
        var r = {};
        a.default.forEach(t, function(e, t) {
            a.default.isObject(e) || a.default.isArray(e) ? r["arg".concat(t)] = JSON.stringify(e) : r["arg".concat(t)] = "" + e;
        });
        var i = getCurrentPages();
        r.currentPage = a.default.get(i, "[".concat(i.length - 1, "].__route__")), c.beacon.send(c.BEACON_EVENT.console_error, r);
    }
};

var J = c.beacon;

exports.default = J;