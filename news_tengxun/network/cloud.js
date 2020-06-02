var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../@babel/runtime/helpers/defineProperty")), r = e(require("../utils/mlodash")), a = e(require("../utils/logger")), n = require("../utils/time"), u = require("../utils/common"), o = require("../services/beacon");

function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, a);
    }
    return r;
}

var c = [];

function i(e) {
    var a = e.startPagePath, i = e.startTs, l = e.req, f = e.res, d = e.err;
    if (l && l.funcName) {
        var g, p = getCurrentPages(), P = r.default.get(p, "[".concat(p.length - 1, "].__route__")), h = [], O = [], m = (0, 
        n.timestampToSecond)(Date.now()), b = {
            startTs: i,
            endTs: m,
            duration: (0, u.toFixed3)(m - i),
            startPagePath: a,
            endPagePath: P,
            pageHasChange: a && P && a !== P ? "1" : "0",
            funcName: "entry/".concat(l.funcName)
        };
        g = l.data ? function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var a = null != arguments[r] ? arguments[r] : {};
                r % 2 ? s(Object(a), !0).forEach(function(r) {
                    (0, t.default)(e, r, a[r]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
            return e;
        }({}, l.data) : {}, r.default.forEach(g, function(e, t) {
            -1 === c.indexOf(t) && O.push(t);
        }), O.sort(), r.default.forEach(O, function(e) {
            var t = g[e];
            null == t && (t = ""), r.default.isString(t) && t.length > 40 && (t = t.slice(0, 32) + "..." + t.slice(-5)), 
            h.push("".concat(e, ":").concat(t));
        }), b.reqData = h.join(","), b.reqDataFields = O.join(","), f ? (b.requestID = f.requestID, 
        b.msg = f.errMsg, b.resType = "success", b.err = "") : (b.requestID = d.requestID, 
        b.msg = d && d.errMsg, b.resType = "fail", b.err = JSON.stringify(r.default.omit(d, "errMsg")), 
        o.beacon.send(o.BEACON_EVENT.wx_cloud_function_error, b)), o.beacon.send(o.BEACON_EVENT.wx_cloud_function, b);
    }
}

var l = r.default.reduce([ "getOpenId", "getOpenGId" ], function(e, t) {
    return e[t] = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            r.default.isObject(t) ? t = {
                data: t,
                funcName: e
            } : t.funcName = e;
            var u = (0, n.timestampToSecond)(Date.now()), o = getCurrentPages(), s = r.default.get(o, "[".concat(o.length - 1, "].__route__"));
            return wx.cloud.callFunction({
                name: "entry",
                data: t
            }).catch(function(e) {
                return a.default.error("云函数调用发生异常：", e), i({
                    startPagePath: s,
                    startTs: u,
                    req: t,
                    err: e
                }), Promise.reject(e);
            }).then(function(e) {
                return e ? (i({
                    startPagePath: s,
                    startTs: u,
                    req: t,
                    res: e
                }), e.result) : (a.default.error("云函数调用返回空值：res = ", e), i({
                    startPagePath: s,
                    startTs: u,
                    req: t,
                    err: e
                }), Promise.reject(e));
            });
        };
    }(t), e;
}, {});

exports.default = l;