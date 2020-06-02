function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("./components/storage-stock")), n = e(require("../../components/deferred")), o = e(require("../../components/http")), r = require("../../components/utils"), u = e(require("../../config")), i = new t.default({
    key: "SNI_APPLET_FAVOURITES"
}), a = getApp();

exports.default = {
    find: function(e) {
        return i.find(e);
    },
    unshift: function(e) {
        var t = this, r = new n.default();
        return a.session().done(function() {
            !1 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).anonymous ? (0, 
            o.default)({
                method: "post",
                url: u.default.SER_URL + "/api/wechat/applet/1.0.0/portfolio/stock",
                data: e
            }, t, !1).done(function() {
                i.unshift(e), t.sort().done(function() {
                    r.resolve();
                }).fail(function() {
                    r.reject();
                });
            }).fail(function() {
                r.reject();
            }) : (i.unshift(e), r.resolve());
        }), r;
    },
    remove: function(e) {
        var t = this, r = new n.default();
        return a.session().done(function() {
            !1 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).anonymous ? (0, 
            o.default)({
                method: "delete",
                url: u.default.SER_URL + "/api/wechat/applet/1.0.0/portfolio/stock",
                data: e
            }, t, !1).done(function() {
                i.remove(e), r.resolve();
            }).fail(function() {
                r.reject();
            }) : (i.remove(e), r.resolve());
        }), r;
    },
    update: function(e) {
        return i.update(e);
    },
    all: function(e) {
        return i.all(e).filter(function(e) {
            return e.market && e.code;
        });
    },
    top: function(e) {
        var t = this;
        i.unshift(e);
        var o = new n.default();
        return a.session().done(function() {
            !1 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).anonymous ? t.sort().done(function() {
                o.resolve();
            }).fail(function() {
                o.reject();
            }) : o.resolve();
        }), o;
    },
    sort: function() {
        var e = this, t = new n.default();
        return a.session().done(function() {
            !1 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).anonymous ? (0, 
            o.default)({
                header: {
                    "X-HTTP-Method-Override": "PATCH"
                },
                method: "post",
                url: u.default.SER_URL + "/api/wechat/applet/1.0.0/portfolio/stock",
                data: {
                    stocks: i.all()
                }
            }, e, !1).done(function() {
                t.resolve();
            }).fail(function() {
                t.reject();
            }) : t.resolve();
        }), t;
    },
    sync: function(e) {
        var t = this, a = new n.default();
        return (0, o.default)({
            method: "get",
            url: u.default.SER_URL + "/api/wechat/applet/1.0.0/portfolio/stock"
        }, this, !1).done(function(e) {
            var n = (i.all() || []).reduce(function(e, t) {
                return e[t.market + "_" + t.code] = t, e;
            }, {}), o = ((0, r.getProp)(e, "data") || []).filter(function(e) {
                return e.market && e.code;
            }).map(function(e) {
                var t = e.market, o = e.code, r = n[t + "_" + o] || {};
                return Object.assign(e, {
                    type: r.type,
                    name: e.name || r.name
                });
            });
            i.all(o), t.sort().done(function() {
                a.resolve();
            }).fail(function() {
                a.reject();
            });
        }).fail(function() {
            a.reject();
        }), a;
    }
};