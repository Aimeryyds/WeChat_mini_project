function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
}, n = require("./utils"), i = require("./bridge"), r = e(require("./deferred")), s = e(require("./circus/loading/loading")), o = null, a = {
    isConnected: !0,
    tasks: [],
    initialize: function() {
        var e = this, t = function() {
            (0, i.getNetworkType)().done(function(t) {
                var n = t.networkType;
                e.isConnected = "none" != n;
            });
        };
        setInterval(t, 3e3), setTimeout(function() {
            (0, i.onNetworkStatusChange)(function(t) {
                var n = t.networkType;
                e.isConnected = "none" != n;
            });
        }, 10), t(), setInterval(function() {
            e.watcher();
        }, 1e3);
    },
    push: function(e) {
        var t = this;
        this.isConnected || e.deferred.reject("connect error"), this.tasks.length >= 50 ? e.deferred.reject("to many request") : (e.options.timestamp = +new Date(), 
        e.options.timeout = e.options.timeout || 1e4, e.timeoutid = setTimeout(function() {
            e.deferred.reject("timeout", e.options), t.remove(e);
        }, e.options.timeout), this.tasks.push(Object.assign(e, {
            status: 0
        })), this.next());
    },
    next: function() {
        var e = this, t = this.tasks;
        if (t.length) {
            var n = t.filter(function(e) {
                return 1 == e.status;
            });
            t.reduce(function(e, t) {
                return e.length + n.length <= 5 && 0 == t.status && e.push(t), e;
            }, []).forEach(function(t) {
                t.deferred.always(function() {
                    clearTimeout(t.timeoutid), e.remove(t), e.next();
                }), e.isConnected ? (t.status = 1, t.handler()) : t.deferred.reject("connect error");
            });
        }
    },
    remove: function(e) {
        for (var t = this.tasks, n = 0, i = t.length; n < i; n++) if (t[n].id == e.id) return "pending" == e.deferred.status && e.deferred.reject("error"), 
        t.splice(n, 1);
    },
    watcher: function() {
        if (this.tasks.length) {
            for (var e = +new Date(), t = this.tasks.filter(function(t) {
                if (0 != t.status || e - t.options.timestamp >= t.options.timeout) return !0;
            }), n = 0, i = t.length; n < i; n++) this.remove(t[n]);
            this.next();
        }
    }
};

a.initialize();

var u = function e(t) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = new r.default();
    !0 === u && s.default.show(o), t.header = t.header || {};
    var c = e.getSession();
    return c && c.sid && (t.header["X-WX-Applet-SID"] = c.sid), a.push({
        id: (0, n.getUnique)(),
        options: t,
        ctx: o,
        mask: u,
        deferred: d,
        handler: function() {
            return (0, i.request)(t, d).done(function(e) {
                d.resolve(e);
            }).fail(function(e) {
                d.reject(e);
            }).always(function() {
                !0 === u && s.default.hide(o);
            });
        }
    }), d;
};

u.getSession = function() {
    return o || (o = (0, i.getStorageSync)("SNI_APPLET_SESSION")), o || {};
}, u.setSession = function(e) {
    if (e.sid || console.log("无sid setssion"), e) {
        var t = u.getSession();
        e.sid = e.sid || t.sid, (0, i.setStorageSync)("SNI_APPLET_SESSION", e), o = JSON.parse(JSON.stringify(e));
    }
}, u.setSessionFromOAuthRes = function(e) {
    var i = (0, n.getProp)(e, "data.data") || {}, r = u.getSession();
    r.wechat = t({}, r.wechat, i.wechat);
    var s = e.header["X-Wx-Applet-Sid"];
    r.sid = s || r.sid, u.setSession(r);
}, exports.default = u;