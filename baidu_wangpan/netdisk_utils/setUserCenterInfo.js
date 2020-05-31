Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setUserCenterInfo = void 0;

var e = function() {
    function e(e, t) {
        var r = [], a = !0, n = !1, o = void 0;
        try {
            for (var u, i = e[Symbol.iterator](); !(a = (u = i.next()).done) && (r.push(u.value), 
            !t || r.length !== t); a = !0) ;
        } catch (e) {
            n = !0, o = e;
        } finally {
            try {
                !a && i.return && i.return();
            } finally {
                if (n) throw o;
            }
        }
        return r;
    }
    return function(t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), t = require("../netdiisk_requestapi/getUserCenterInfo.js"), r = require("./transform.js"), a = require("./common.js");

exports.setUserCenterInfo = function() {
    return Promise.all([ t.userCenter.getUserQuota(), t.userCenter.getUserBaseInfo() ]).then(function(t) {
        if (t[0] && t[0].data && t[1] && t[1].data) {
            var n = e(t, 2), o = n[0].data, u = o.used, i = o.total, s = n[1].data, l = s.uk, d = s.avatar_url, f = s.displayname, p = s.is_vip, c = (0, 
            r.toFriendlyQuotaSize)(u), y = (0, r.toFriendlyQuotaSize)(i), v = (u / i * 100).toFixed(2);
            (0, a.setUk)(l), d = d.replace(/^http\:/, "https:"), getApp().globalData.userCenterInfo = {
                quotaSize: {
                    usedQuota: c,
                    totalQuota: y,
                    used: u,
                    total: i
                },
                quotaUsageRate: v >= 100 ? 100 : v,
                avatar: d,
                name: f,
                memberType: p,
                uk: l
            };
        }
    });
};