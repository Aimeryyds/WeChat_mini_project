module.exports = {};

var r, e, t, i = {}, n = window = require("../../../labrador/global.js"), o = require("./_library.js"), n = require("./_global.js"), s = require("./_ctx.js"), c = require("./_classof.js"), u = require("./_export.js"), a = require("./_is-object.js"), h = require("./_a-function.js"), f = require("./_an-instance.js"), _ = require("./_for-of.js"), l = require("./_species-constructor.js"), v = require("./_task.js").set, d = require("./_microtask.js")(), j = n.TypeError, i = n.process, m = n.Promise, p = "process" == c(i = n.process), q = function() {}, y = !!function() {
    try {
        var r = m.resolve(1), e = (r.constructor = {})[require("./_wks.js")("species")] = function(r) {
            r(q, q);
        };
        return (p || "function" == typeof PromiseRejectionEvent) && r.then(q) instanceof e;
    } catch (r) {}
}(), w = function(r, e) {
    return r === e || r === m && e === t;
}, P = function(r) {
    var e;
    return !(!a(r) || "function" != typeof (e = r.then)) && e;
}, b = function(r) {
    return w(m, r) ? new g(r) : new e(r);
}, g = e = function(r) {
    var e, t;
    this.promise = new r(function(r, i) {
        if (void 0 !== e || void 0 !== t) throw j("Bad Promise constructor");
        e = r, t = i;
    }), this.resolve = h(e), this.reject = h(t);
}, k = function(r) {
    try {
        r();
    } catch (r) {
        return {
            error: r
        };
    }
}, x = function(r, e) {
    if (!r._n) {
        r._n = !0;
        var t = r._c;
        d(function() {
            for (var i = r._v, n = 1 == r._s, o = 0; t.length > o; ) !function(e) {
                var t, o, s = n ? e.ok : e.fail, c = e.resolve, u = e.reject, a = e.domain;
                try {
                    s ? (n || (2 == r._h && E(r), r._h = 1), !0 === s ? t = i : (a && a.enter(), t = s(i), 
                    a && a.exit()), t === e.promise ? u(j("Promise-chain cycle")) : (o = P(t)) ? o.call(t, c, u) : c(t)) : u(i);
                } catch (r) {
                    u(r);
                }
            }(t[o++]);
            r._c = [], r._n = !1, e && !r._h && F(r);
        });
    }
}, F = function(r) {
    v.call(n, function() {
        var e, t, o, s = r._v;
        if (S(r) && (e = k(function() {
            p ? i.emit("unhandledRejection", s, r) : (t = n.onunhandledrejection) ? t({
                promise: r,
                reason: s
            }) : (o = n.console) && o.error && o.error("Unhandled promise rejection", s);
        }), r._h = p || S(r) ? 2 : 1), r._a = void 0, e) throw e.error;
    });
}, S = function r(e) {
    if (1 == e._h) return !1;
    for (var t, i = e._a || e._c, n = 0; i.length > n; ) if ((t = i[n++]).fail || !r(t.promise)) return !1;
    return !0;
}, E = function(r) {
    v.call(n, function() {
        var e;
        p ? i.emit("rejectionHandled", r) : (e = n.onrejectionhandled) && e({
            promise: r,
            reason: r._v
        });
    });
}, R = function(r) {
    var e = this;
    e._d || (e._d = !0, (e = e._w || e)._v = r, e._s = 2, e._a || (e._a = e._c.slice()), 
    x(e, !0));
}, B = function r(e) {
    var t, i = this;
    if (!i._d) {
        i._d = !0, i = i._w || i;
        try {
            if (i === e) throw j("Promise can't be resolved itself");
            (t = P(e)) ? d(function() {
                var n = {
                    _w: i,
                    _d: !1
                };
                try {
                    t.call(e, s(r, n, 1), s(R, n, 1));
                } catch (r) {
                    R.call(n, r);
                }
            }) : (i._v = e, i._s = 1, x(i, !1));
        } catch (r) {
            R.call({
                _w: i,
                _d: !1
            }, r);
        }
    }
};

y || (m = function(e) {
    f(this, m, "Promise", "_h"), h(e), r.call(this);
    try {
        e(s(B, this, 1), s(R, this, 1));
    } catch (r) {
        R.call(this, r);
    }
}, (r = function(r) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
    this._n = !1;
}).prototype = require("./_redefine-all.js")(m.prototype, {
    then: function(r, e) {
        var t = b(l(this, m));
        return t.ok = "function" != typeof r || r, t.fail = "function" == typeof e && e, 
        t.domain = p ? i.domain : void 0, this._c.push(t), this._a && this._a.push(t), this._s && x(this, !1), 
        t.promise;
    },
    catch: function(r) {
        return this.then(void 0, r);
    }
}), g = function() {
    var e = new r();
    this.promise = e, this.resolve = s(B, e, 1), this.reject = s(R, e, 1);
}), u(u.G + u.W + u.F * !y, {
    Promise: m
}), require("./_set-to-string-tag.js")(m, "Promise"), require("./_set-species.js")("Promise"), 
t = require("./_core.js").Promise, u(u.S + u.F * !y, "Promise", {
    reject: function(r) {
        var e = b(this);
        return (0, e.reject)(r), e.promise;
    }
}), u(u.S + u.F * (o || !y), "Promise", {
    resolve: function(r) {
        if (r instanceof m && w(r.constructor, this)) return r;
        var e = b(this);
        return (0, e.resolve)(r), e.promise;
    }
}), u(u.S + u.F * !(y && require("./_iter-detect.js")(function(r) {
    m.all(r).catch(q);
})), "Promise", {
    all: function(r) {
        var e = this, t = b(e), i = t.resolve, n = t.reject, o = k(function() {
            var t = [], o = 0, s = 1;
            _(r, !1, function(r) {
                var c = o++, u = !1;
                t.push(void 0), s++, e.resolve(r).then(function(r) {
                    u || (u = !0, t[c] = r, --s || i(t));
                }, n);
            }), --s || i(t);
        });
        return o && n(o.error), t.promise;
    },
    race: function(r) {
        var e = this, t = b(e), i = t.reject, n = k(function() {
            _(r, !1, function(r) {
                e.resolve(r).then(t.resolve, i);
            });
        });
        return n && i(n.error), t.promise;
    }
});