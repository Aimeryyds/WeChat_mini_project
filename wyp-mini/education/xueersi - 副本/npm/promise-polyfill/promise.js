!function(e) {
    function n() {}
    function t(e, n) {
        return function() {
            e.apply(n, arguments);
        };
    }
    function o(e) {
        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], 
        a(e, this);
    }
    function i(e, n) {
        for (;3 === e._state; ) e = e._value;
        if (0 === e._state) return void e._deferreds.push(n);
        e._handled = !0, o._immediateFn(function() {
            var t = 1 === e._state ? n.onFulfilled : n.onRejected;
            if (null === t) return void (1 === e._state ? r : u)(n.promise, e._value);
            var o;
            try {
                o = t(e._value);
            } catch (e) {
                return void u(n.promise, e);
            }
            r(n.promise, o);
        });
    }
    function r(e, n) {
        try {
            if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (n && ("object" == typeof n || "function" == typeof n)) {
                var i = n.then;
                if (n instanceof o) return e._state = 3, e._value = n, void f(e);
                if ("function" == typeof i) return void a(t(i, n), e);
            }
            e._state = 1, e._value = n, f(e);
        } catch (n) {
            u(e, n);
        }
    }
    function u(e, n) {
        e._state = 2, e._value = n, f(e);
    }
    function f(e) {
        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
            e._handled || o._unhandledRejectionFn(e._value);
        });
        for (var n = 0, t = e._deferreds.length; n < t; n++) i(e, e._deferreds[n]);
        e._deferreds = null;
    }
    function c(e, n, t) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, 
        this.promise = t;
    }
    function a(e, n) {
        var t = !1;
        try {
            e(function(e) {
                t || (t = !0, r(n, e));
            }, function(e) {
                t || (t = !0, u(n, e));
            });
        } catch (e) {
            if (t) return;
            t = !0, u(n, e);
        }
    }
    var s = setTimeout;
    o.prototype.catch = function(e) {
        return this.then(null, e);
    }, o.prototype.then = function(e, t) {
        var o = new this.constructor(n);
        return i(this, new c(e, t, o)), o;
    }, o.all = function(e) {
        return new o(function(n, t) {
            function o(e, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var f = u.then;
                        if ("function" == typeof f) return void f.call(u, function(n) {
                            o(e, n);
                        }, t);
                    }
                    i[e] = u, 0 == --r && n(i);
                } catch (e) {
                    t(e);
                }
            }
            if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return n([]);
            for (var r = i.length, u = 0; u < i.length; u++) o(u, i[u]);
        });
    }, o.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === o ? e : new o(function(n) {
            n(e);
        });
    }, o.reject = function(e) {
        return new o(function(n, t) {
            t(e);
        });
    }, o.race = function(e) {
        return new o(function(n, t) {
            for (var o = 0, i = e.length; o < i; o++) e[o].then(n, t);
        });
    }, o._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e);
    } || function(e) {
        s(e, 0);
    }, o._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
    }, o._setImmediateFn = function(e) {
        o._immediateFn = e;
    }, o._setUnhandledRejectionFn = function(e) {
        o._unhandledRejectionFn = e;
    }, "undefined" != typeof module && module.exports ? module.exports = o : e.Promise || (e.Promise = o);
}(this);