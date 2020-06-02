var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : t(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
};

!function(t) {
    function r(t, e, r, n) {
        var i = e && e.prototype instanceof o ? e : o, a = Object.create(i.prototype), c = new p(n || []);
        return a._invoke = f(t, r, c), a;
    }
    function n(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    function o() {}
    function i() {}
    function a() {}
    function c(t) {
        [ "next", "throw", "return" ].forEach(function(e) {
            t[e] = function(t) {
                return this._invoke(e, t);
            };
        });
    }
    function u(t) {
        function r(o, i, a, c) {
            var u = n(t[o], t, i);
            if ("throw" !== u.type) {
                var f = u.arg, l = f.value;
                return l && "object" === (void 0 === l ? "undefined" : e(l)) && g.call(l, "__await") ? Promise.resolve(l.__await).then(function(t) {
                    r("next", t, a, c);
                }, function(t) {
                    r("throw", t, a, c);
                }) : Promise.resolve(l).then(function(t) {
                    f.value = t, a(f);
                }, c);
            }
            c(u.arg);
        }
        "object" === ("undefined" == typeof process ? "undefined" : e(process)) && process.domain && (r = process.domain.bind(r));
        var o;
        this._invoke = function(t, e) {
            function n() {
                return new Promise(function(n, o) {
                    r(t, e, n, o);
                });
            }
            return o = o ? o.then(n, n) : n();
        };
    }
    function f(t, e, r) {
        var o = S;
        return function(i, a) {
            if (o === _) throw new Error("Generator is already running");
            if (o === O) {
                if ("throw" === i) throw a;
                return d();
            }
            for (r.method = i, r.arg = a; ;) {
                var c = r.delegate;
                if (c) {
                    var u = l(c, r);
                    if (u) {
                        if (u === k) continue;
                        return u;
                    }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                    if (o === S) throw o = O, r.arg;
                    r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                o = _;
                var f = n(t, e, r);
                if ("normal" === f.type) {
                    if (o = r.done ? O : j, f.arg === k) continue;
                    return {
                        value: f.arg,
                        done: r.done
                    };
                }
                "throw" === f.type && (o = O, r.method = "throw", r.arg = f.arg);
            }
        };
    }
    function l(t, e) {
        var r = t.iterator[e.method];
        if (r === v) {
            if (e.delegate = null, "throw" === e.method) {
                if (t.iterator.return && (e.method = "return", e.arg = v, l(t, e), "throw" === e.method)) return k;
                e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return k;
        }
        var o = n(r, t.iterator, e.arg);
        if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
        k;
        var i = o.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
        e.arg = v), e.delegate = null, k) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
        e.delegate = null, k);
    }
    function s(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
        this.tryEntries.push(e);
    }
    function h(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function p(t) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], t.forEach(s, this), this.reset(!0);
    }
    function y(t) {
        if (t) {
            var e = t[b];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var r = -1, n = function e() {
                    for (;++r < t.length; ) if (g.call(t, r)) return e.value = t[r], e.done = !1, e;
                    return e.value = v, e.done = !0, e;
                };
                return n.next = n;
            }
        }
        return {
            next: d
        };
    }
    function d() {
        return {
            value: v,
            done: !0
        };
    }
    var v, m = Object.prototype, g = m.hasOwnProperty, w = "function" == typeof Symbol ? Symbol : {}, b = w.iterator || "@@iterator", L = w.toStringTag || "@@toStringTag", x = "object" === ("undefined" == typeof module ? "undefined" : e(module)), E = t.regeneratorRuntime;
    if (E) x && (module.exports = E); else {
        (E = t.regeneratorRuntime = x ? module.exports : {}).wrap = r;
        var S = "suspendedStart", j = "suspendedYield", _ = "executing", O = "completed", k = {}, G = {};
        G[b] = function() {
            return this;
        };
        var N = Object.getPrototypeOf, P = N && N(N(y([])));
        P && P !== m && g.call(P, b) && (G = P);
        var F = a.prototype = o.prototype = Object.create(G);
        i.prototype = F.constructor = a, a.constructor = i, a[L] = i.displayName = "GeneratorFunction", 
        E.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name));
        }, E.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, L in t || (t[L] = "GeneratorFunction")), 
            t.prototype = Object.create(F), t;
        }, E.awrap = function(t) {
            return {
                __await: t
            };
        }, c(u.prototype), E.AsyncIterator = u, E.async = function(t, e, n, o) {
            var i = new u(r(t, e, n, o));
            return E.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                return t.done ? t.value : i.next();
            });
        }, c(F), F[L] = "Generator", F.toString = function() {
            return "[object Generator]";
        }, E.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(), function r() {
                for (;e.length; ) {
                    var n = e.pop();
                    if (n in t) return r.value = n, r.done = !1, r;
                }
                return r.done = !0, r;
            };
        }, E.values = y, p.prototype = {
            constructor: p,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, 
                this.method = "next", this.arg = v, this.tryEntries.forEach(h), !t) for (var e in this) "t" === e.charAt(0) && g.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = v);
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
            },
            dispatchException: function(t) {
                function e(e, n) {
                    return i.type = "throw", i.arg = t, r.next = e, n && (r.method = "next", r.arg = v), 
                    !!n;
                }
                if (this.done) throw t;
                for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n], i = o.completion;
                    if ("root" === o.tryLoc) return e("end");
                    if (o.tryLoc <= this.prev) {
                        var a = g.call(o, "catchLoc"), c = g.call(o, "finallyLoc");
                        if (a && c) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                        } else if (a) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (n.tryLoc <= this.prev && g.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break;
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, 
                k) : this.complete(i);
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                k;
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), h(r), k;
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            h(r);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: y(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = v), k;
            }
        };
    }
}("object" === ("undefined" == typeof global ? "undefined" : e(global)) ? global : "object" === ("undefined" == typeof window ? "undefined" : e(window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : e(self)) ? self : void 0);