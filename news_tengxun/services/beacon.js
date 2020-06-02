var e = require("../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../@babel/runtime/helpers/defineProperty")), t = e(require("../utils/mlodash")), n = require("../store/index"), o = e(require("./beaconLib")), i = require("./beaconConst");

function u(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}

o.default.init({
    appKey: "MA0CD0VA3SZPJW",
    version: n.systemInfo.app_version + "",
    channelId: "",
    getLocation: !0,
    locationType: "wgs84",
    getUserInfo: !0,
    isDebug: !1
}), o.default.custom = {};

var s = new Map();

o.default.send = function(e, i) {
    if (e) {
        var c = Date.now(), a = s.get(e);
        if (a) {
            if (c - a.ts < 500 ? a.count += 1 : a.count = 1, a.ts = c, a.count > 100) return;
        } else s.set(e, {
            count: 1,
            ts: c
        });
        var l = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach(function(t) {
                    (0, r.default)(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
            }
            return e;
        }({
            openid: n.userInfo.openid || n.userInfo.uuid,
            scene: n.global.scene + ""
        }, n.systemInfo.beaconParams, {}, i);
        t.default.forEach(l, function(e, r) {
            null == e ? l[r] = "" : t.default.isString(e) && (l[r] = e.replace(/&/g, ",").replace(/=/g, ":"));
        }), n.global.dev && (e = "dev_" + e), o.default.onEvent(e, l);
    } else console.error("灯塔上报出现未定义的事件", i);
}, exports = module.exports = {
    beacon: o.default,
    BEACON_EVENT: i.EVENT
};