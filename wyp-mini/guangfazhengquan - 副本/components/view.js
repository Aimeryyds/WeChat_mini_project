function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("./utils"), n = require("./bridge"), r = e(require("./circus/network/network")), i = e(require("./msgstore")), o = e(require("./event")), a = e(require("../components/sensors/sensors")), s = !1, u = {
    lifecycles: {
        onLoad: function() {
            this._timeoutids = [], this._intervalids = [];
        },
        onShow: function() {
            var e = this;
            a.default.track({
                event: "$MPViewScreen"
            }), (0, n.getNetworkType)().done(function(t) {
                "none" == t.networkType ? (r.default.error(e), s = !1) : s = !0;
            }), this.stopListening(i.default, "app:network"), this.listenTo(i.default, "app:network", function(t) {
                "none" == t.networkType ? (r.default.error(e), s = !1) : (s || r.default.recover(e), 
                s = !0);
            });
        },
        onHide: function() {
            this.stopListening(i.default, "app:network");
        },
        onUnload: function() {
            this._timeoutids.forEach(function(e) {
                clearTimeout(e);
            }), this._intervalids.forEach(function(e) {
                clearInterval(e);
            });
        },
        onShareAppMessage: function() {
            var e = this.beacon, t = void 0 === e ? {} : e, n = this.__route__, r = t.name, i = void 0 === r ? "广发证券行情" : r, o = t.shareOptions, s = void 0 === o ? {} : o;
            return a.default.track({
                event: "$MPShare"
            }), s.path || (s.path = n), !s.title && i && (s.title = i), console.log("onShareAppMessage shareOptions", s), 
            s;
        }
    },
    utils: {
        _dot: function(e) {
            a.default.track(e);
        },
        _input: function(e) {
            var n = e.currentTarget.dataset.property;
            if (null != n && "" != n) {
                var r = e ? e.detail.value.trim() : "";
                (0, t.setData)(this, n, r);
            }
        },
        timeout: function(e, t) {
            var n = setTimeout(e.bind(this), t);
            return this._timeoutids.push(n), function() {
                clearTimeout(n);
            };
        },
        interval: function(e, t) {
            var n = setInterval(e.bind(this), t);
            return this._intervalids.push(n), function() {
                clearInterval(n);
            };
        }
    }
};

exports.default = function(e) {
    var n = (0, t.assign)({}, e), r = n.beacon, i = void 0 === r ? {} : r, a = u.lifecycles;
    for (var s in a) if ("onShareAppMessage" !== s) !function(t) {
        e[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            n[t] && n[t].apply(this, e), a[t].apply(this, e);
        };
    }(s); else {
        var l = i.canShare;
        void 0 !== l && l && function(t) {
            e[t] = function() {
                var e = Array.prototype.slice.call(arguments);
                return a[t].apply(this, e);
            };
        }(s);
    }
    var c = e.events;
    if (c) for (var f in c) {
        if (e[f]) throw "events have same hanlder";
        !function(t) {
            e[t] = function() {
                var e = c[t], n = e.name, r = e.handler, i = Array.prototype.slice.call(arguments);
                r.apply(this, i), n && this._dot({
                    props: {
                        buttonNameSuffix: n
                    }
                });
            };
        }(f);
    }
    var p = u.utils;
    if (p) for (var h in p) {
        if (e[h]) throw "utils have same hanlder";
        !function(t) {
            e[t] = function() {
                var e = Array.prototype.slice.call(arguments);
                return p[t].apply(this, e);
            };
        }(h);
    }
    Page(Object.assign(e, o.default));
};