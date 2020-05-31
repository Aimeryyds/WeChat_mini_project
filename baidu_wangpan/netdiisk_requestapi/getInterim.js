Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pmallItem = exports.abTest = exports.getWxOperate = exports.getWxIcon = exports.getInterim = void 0;

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("../netdisk_utils/wxRequestApi.js"), r = require("../dep/MD5.js"), o = require("../netdisk_utils/activity"), n = (exports.getInterim = function(t) {
    var r = t.id, o = t.uk;
    return (0, e.wxReq)("act/aug/shareshow", {
        id: r,
        uk: o
    }, "GET");
}, exports.getWxIcon = function() {
    return (0, e.wxReq)("act/api/activityentry", {}, "GET", "").then(function(e) {
        "object" !== (void 0 === (e = e.data || {}) ? "undefined" : t(e)) && (e = {});
        var r = [];
        return 0 === e.errno && Array.isArray(e.popup_list) && ((r = e.popup_list).forEach(function(t) {
            var e = (t.entry_info || [])[0] || {};
            Object.assign(t, e), t.showImg = t.popup_content_url || t.popup_icon_url, "string" == typeof t.pop_type && t.pop_type.length && (t.pop_type = +t.pop_type), 
            "string" == typeof t.nav_type && t.nav_type.length && (t.nav_type = +t.nav_type);
        }), (0, o.validateActivity)(r)), r;
    }).catch(function(t) {
        console.warn(t);
    });
}, exports.getWxOperate = function(t) {
    var r = t.id, o = t.uk, n = t.secry;
    return (0, e.wxReq)("act/aug/wxoperate", {
        id: r,
        secry: n,
        frametype: 1,
        taskid: 8,
        fromtyep: "wxshare",
        uk: o
    }, "GET");
}, new Date().getTime()), p = (0, r.hex_md5)("pvxwgg2zf7hw4eqa2siqp4vfc2wfigr7" + n);

exports.abTest = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    return (0, e.wxReq)("rest/2.0/pcs/adx", {
        m: "tab",
        p: "routine-wechat-listicon",
        w: t,
        h: r,
        s: n + ";" + p,
        d: "routine",
        v: 1e3
    }, "GET");
}, exports.pmallItem = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    return (0, e.wxReq)("pmall/recommend/sharetopn", {
        limit: t
    }, "GET");
};