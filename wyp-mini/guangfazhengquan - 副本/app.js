function e(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
    return n.default = e, n;
}

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = n(require("./components/view")), o = n(require("./components/deferred")), u = n(require("./components/http")), i = n(require("./services/portal/login")), r = e(require("./components/bridge")), s = e(require("./components/sensors/sensorsdata.min.js")), a = e(require("./components/sensors/sensorsdata_conf"));

s.setPara(a), App({
    oauthQueue: [],
    onOauth: function(e) {
        this.oauthed ? e(u.default.getSession()) : this.oauthQueue.push(e);
    },
    exeOauthQueue: function() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this.oauthQueue.length; ) this.oauthQueue.shift()(e);
    },
    oauthed: !1,
    onLaunch: function() {
        var e = this;
        s.para.autoTrack.appLaunch = {
            mpName: "行情小程序"
        }, this.session = function() {
            try {
                var n = new o.default();
                return e.checkLogin(n).done(function(e) {
                    console.log("onLaunch res", e);
                    var n = e.wechat, t = void 0 === n ? {} : n;
                    s.setOpenid(t.openid), s.init();
                }), function() {
                    return "pending" == n.state ? n : new o.default().resolve(u.default.getSession());
                };
            } catch (e) {}
        }();
    },
    checkLogin: function(e) {
        var n = this;
        return i.default.session().always(function(t) {
            n.loginWechat(t).then(function(t) {
                n.oauthed = !0, n.exeOauthQueue(t), e.resolve(t);
            }).catch(function() {});
        });
    },
    loginWechat: function(e) {
        return e && e.wechat ? Promise.resolve(e) : new Promise(function(e, n) {
            r.login().done(function(t) {
                return i.default.wxAppletOAuth(t).done(function(n) {
                    e(n);
                }).fail(function(e) {
                    n();
                });
            }).fail(function() {
                n({
                    msg: "登录失败"
                });
            });
        });
    },
    View: t.default
});