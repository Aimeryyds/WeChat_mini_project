function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../components/utils"), n = require("../../components/bridge"), r = e(require("../../components/http")), u = e(require("../../components/deferred")), o = e(require("../../config"));

exports.default = {
    session: function() {
        var e = new u.default();
        return (0, r.default)({
            url: "" + o.default.API_V2_HOST + o.default.API_V2_PREFIX + "user/info"
        }).done(function(n) {
            var u = (0, t.getProp)(n, "data.data");
            u || (u = {
                anonymous: !0
            }), r.default.setSession(u), e.resolve(u);
        }).fail(function(t) {
            e.reject(t);
        }), e;
    },
    info: function() {
        var e = new u.default();
        return (0, n.login)().done(function(t) {
            (0, n.getUserInfo)().done(function(t) {
                e.resolve(t);
            }).fail(function() {
                e.reject();
            });
        }).fail(function(t) {
            e.reject(t);
        }), e;
    },
    wxAppletOAuth: function(e) {
        var n = e.code, a = new u.default();
        return (0, r.default)({
            method: "get",
            url: "" + o.default.API_V2_HOST + o.default.API_V2_PREFIX + "user/oauth",
            data: {
                code: n
            }
        }, this, !1).done(function(e) {
            var n = (0, t.getProp)(e, "data.data") || {};
            n.wechat.openid ? (r.default.setSessionFromOAuthRes(e), a.resolve(n)) : a.reject(e);
        }).fail(function(e) {
            return a.reject(e);
        }), a;
    },
    updateAppletUser: function(e) {
        var t = e.iv, n = e.encryptedData;
        return (0, r.default)({
            method: "post",
            url: "" + o.default.API_V2_HOST + o.default.API_V2_PREFIX + "user/decrypt",
            data: {
                iv: t,
                encryptedData: n
            }
        }, this, !1);
    },
    getTeleCode: function(e) {
        return (0, r.default)({
            method: "post",
            url: "" + o.default.API_V2_HOST + o.default.API_V2_PREFIX + "user/mobile/ticket",
            data: e
        });
    },
    mobileLogin: function(e) {
        var n = new u.default();
        return (0, r.default)({
            method: "post",
            url: "" + o.default.API_V2_HOST + o.default.API_V2_PREFIX + "user/mobile/login",
            data: e
        }).done(function(e) {
            var u = (0, t.getProp)(e, "data.data");
            u ? (r.default.setSession(u), n.resolve(u)) : n.reject(e);
        }).fail(function(e) {
            return n.reject(e);
        }), n;
    }
};