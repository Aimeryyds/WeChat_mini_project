var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e) {
    if ("object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var n;
        "undefined" != typeof window ? n = window : "undefined" != typeof global ? n = global : "undefined" != typeof self && (n = self), 
        n.Promise = e();
    }
}(function() {
    return function t(e, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var c = "function" == typeof _dereq_ && _dereq_;
                    if (!s && c) return c(a, !0);
                    if (o) return o(a, !0);
                    var l = new Error("Cannot find module '" + a + "'");
                    throw l.code = "MODULE_NOT_FOUND", l;
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function(t) {
                    var n = e[a][1][t];
                    return i(n || t);
                }, u, u.exports, t, e, n, r);
            }
            return n[a].exports;
        }
        for (var o = "function" == typeof _dereq_ && _dereq_, a = 0; a < r.length; a++) i(r[a]);
        return i;
    }({
        1: [ function(t, e, n) {
            function r() {
                this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new l(16), 
                this._normalQueue = new l(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
                var t = this;
                this.drainQueues = function() {
                    t._drainQueues();
                }, this._schedule = c;
            }
            function i(t, e, n) {
                this._lateQueue.push(t, e, n), this._queueTick();
            }
            function o(t, e, n) {
                this._normalQueue.push(t, e, n), this._queueTick();
            }
            function a(t) {
                this._normalQueue._pushOne(t), this._queueTick();
            }
            var s;
            try {
                throw new Error();
            } catch (t) {
                s = t;
            }
            var c = t("./schedule"), l = t("./queue"), u = t("./util");
            r.prototype.setScheduler = function(t) {
                var e = this._schedule;
                return this._schedule = t, this._customScheduler = !0, e;
            }, r.prototype.hasCustomScheduler = function() {
                return this._customScheduler;
            }, r.prototype.enableTrampoline = function() {
                this._trampolineEnabled = !0;
            }, r.prototype.disableTrampolineIfNecessary = function() {
                u.hasDevTools && (this._trampolineEnabled = !1);
            }, r.prototype.haveItemsQueued = function() {
                return this._isTickUsed || this._haveDrainedQueues;
            }, r.prototype.fatalError = function(t, e) {
                e ? (process.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), 
                process.exit(2)) : this.throwLater(t);
            }, r.prototype.throwLater = function(t, e) {
                if (1 === arguments.length && (e = t, t = function() {
                    throw e;
                }), "undefined" != typeof setTimeout) setTimeout(function() {
                    t(e);
                }, 0); else try {
                    this._schedule(function() {
                        t(e);
                    });
                } catch (t) {
                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
                }
            }, u.hasDevTools ? (r.prototype.invokeLater = function(t, e, n) {
                this._trampolineEnabled ? i.call(this, t, e, n) : this._schedule(function() {
                    setTimeout(function() {
                        t.call(e, n);
                    }, 100);
                });
            }, r.prototype.invoke = function(t, e, n) {
                this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function() {
                    t.call(e, n);
                });
            }, r.prototype.settlePromises = function(t) {
                this._trampolineEnabled ? a.call(this, t) : this._schedule(function() {
                    t._settlePromises();
                });
            }) : (r.prototype.invokeLater = i, r.prototype.invoke = o, r.prototype.settlePromises = a), 
            r.prototype.invokeFirst = function(t, e, n) {
                this._normalQueue.unshift(t, e, n), this._queueTick();
            }, r.prototype._drainQueue = function(t) {
                for (;t.length() > 0; ) {
                    var e = t.shift();
                    if ("function" == typeof e) {
                        var n = t.shift(), r = t.shift();
                        e.call(n, r);
                    } else e._settlePromises();
                }
            }, r.prototype._drainQueues = function() {
                this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, 
                this._drainQueue(this._lateQueue);
            }, r.prototype._queueTick = function() {
                this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
            }, r.prototype._reset = function() {
                this._isTickUsed = !1;
            }, e.exports = r, e.exports.firstLineError = s;
        }, {
            "./queue": 17,
            "./schedule": 18,
            "./util": 21
        } ],
        2: [ function(t, e, n) {
            e.exports = function(t, e, n, r) {
                var i = !1, o = function(t, e) {
                    this._reject(e);
                }, a = function(t, e) {
                    e.promiseRejectionQueued = !0, e.bindingPromise._then(o, o, null, this, t);
                }, s = function(t, e) {
                    0 == (50397184 & this._bitField) && this._resolveCallback(e.target);
                }, c = function(t, e) {
                    e.promiseRejectionQueued || this._reject(t);
                };
                t.prototype.bind = function(o) {
                    i || (i = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());
                    var l = n(o), u = new t(e);
                    u._propagateFrom(this, 1);
                    var p = this._target();
                    if (u._setBoundTo(l), l instanceof t) {
                        var f = {
                            promiseRejectionQueued: !1,
                            promise: u,
                            target: p,
                            bindingPromise: l
                        };
                        p._then(e, a, void 0, u, f), l._then(s, c, void 0, u, f), u._setOnCancel(l);
                    } else u._resolveCallback(p);
                    return u;
                }, t.prototype._setBoundTo = function(t) {
                    void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField;
                }, t.prototype._isBound = function() {
                    return 2097152 == (2097152 & this._bitField);
                }, t.bind = function(e, n) {
                    return t.resolve(n).bind(e);
                };
            };
        }, {} ],
        3: [ function(t, e, n) {
            var r;
            "undefined" != typeof Promise && (r = Promise);
            var i = t("./promise")();
            i.noConflict = function() {
                try {
                    Promise === i && (Promise = r);
                } catch (t) {}
                return i;
            }, e.exports = i;
        }, {
            "./promise": 15
        } ],
        4: [ function(t, e, n) {
            e.exports = function(e, n, r, i) {
                var o = t("./util"), a = o.tryCatch, s = o.errorObj, c = e._async;
                e.prototype.break = e.prototype.cancel = function() {
                    if (!i.cancellation()) return this._warn("cancellation is disabled");
                    for (var t = this, e = t; t._isCancellable(); ) {
                        if (!t._cancelBy(e)) {
                            e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                            break;
                        }
                        var n = t._cancellationParent;
                        if (null == n || !n._isCancellable()) {
                            t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                            break;
                        }
                        t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = n;
                    }
                }, e.prototype._branchHasCancelled = function() {
                    this._branchesRemainingToCancel--;
                }, e.prototype._enoughBranchesHaveCancelled = function() {
                    return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
                }, e.prototype._cancelBy = function(t) {
                    return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), 
                    !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), 
                    !0));
                }, e.prototype._cancelBranched = function() {
                    this._enoughBranchesHaveCancelled() && this._cancel();
                }, e.prototype._cancel = function() {
                    this._isCancellable() && (this._setCancelled(), c.invoke(this._cancelPromises, this, void 0));
                }, e.prototype._cancelPromises = function() {
                    this._length() > 0 && this._settlePromises();
                }, e.prototype._unsetOnCancel = function() {
                    this._onCancelField = void 0;
                }, e.prototype._isCancellable = function() {
                    return this.isPending() && !this._isCancelled();
                }, e.prototype.isCancellable = function() {
                    return this.isPending() && !this.isCancelled();
                }, e.prototype._doInvokeOnCancel = function(t, e) {
                    if (o.isArray(t)) for (var n = 0; n < t.length; ++n) this._doInvokeOnCancel(t[n], e); else if (void 0 !== t) if ("function" == typeof t) {
                        if (!e) {
                            var r = a(t).call(this._boundValue());
                            r === s && (this._attachExtraTrace(r.e), c.throwLater(r.e));
                        }
                    } else t._resultCancelled(this);
                }, e.prototype._invokeOnCancel = function() {
                    var t = this._onCancel();
                    this._unsetOnCancel(), c.invoke(this._doInvokeOnCancel, this, t);
                }, e.prototype._invokeInternalOnCancel = function() {
                    this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
                }, e.prototype._resultCancelled = function() {
                    this.cancel();
                };
            };
        }, {
            "./util": 21
        } ],
        5: [ function(t, e, n) {
            e.exports = function(e) {
                var n = t("./util"), r = t("./es5").keys, i = n.tryCatch, o = n.errorObj;
                return function(t, a, s) {
                    return function(c) {
                        var l = s._boundValue();
                        t: for (var u = 0; u < t.length; ++u) {
                            var p = t[u];
                            if (p === Error || null != p && p.prototype instanceof Error) {
                                if (c instanceof p) return i(a).call(l, c);
                            } else if ("function" == typeof p) {
                                var f = i(p).call(l, c);
                                if (f === o) return f;
                                if (f) return i(a).call(l, c);
                            } else if (n.isObject(c)) {
                                for (var h = r(p), _ = 0; _ < h.length; ++_) {
                                    var d = h[_];
                                    if (p[d] != c[d]) continue t;
                                }
                                return i(a).call(l, c);
                            }
                        }
                        return e;
                    };
                };
            };
        }, {
            "./es5": 10,
            "./util": 21
        } ],
        6: [ function(t, e, n) {
            e.exports = function(t) {
                function e() {
                    this._trace = new e.CapturedTrace(n());
                }
                function n() {
                    var t = i.length - 1;
                    return t >= 0 ? i[t] : void 0;
                }
                var r = !1, i = [];
                return t.prototype._promiseCreated = function() {}, t.prototype._pushContext = function() {}, 
                t.prototype._popContext = function() {
                    return null;
                }, t._peekContext = t.prototype._peekContext = function() {}, e.prototype._pushContext = function() {
                    void 0 !== this._trace && (this._trace._promiseCreated = null, i.push(this._trace));
                }, e.prototype._popContext = function() {
                    if (void 0 !== this._trace) {
                        var t = i.pop(), e = t._promiseCreated;
                        return t._promiseCreated = null, e;
                    }
                    return null;
                }, e.CapturedTrace = null, e.create = function() {
                    return r ? new e() : void 0;
                }, e.deactivateLongStackTraces = function() {}, e.activateLongStackTraces = function() {
                    var i = t.prototype._pushContext, o = t.prototype._popContext, a = t._peekContext, s = t.prototype._peekContext, c = t.prototype._promiseCreated;
                    e.deactivateLongStackTraces = function() {
                        t.prototype._pushContext = i, t.prototype._popContext = o, t._peekContext = a, t.prototype._peekContext = s, 
                        t.prototype._promiseCreated = c, r = !1;
                    }, r = !0, t.prototype._pushContext = e.prototype._pushContext, t.prototype._popContext = e.prototype._popContext, 
                    t._peekContext = t.prototype._peekContext = n, t.prototype._promiseCreated = function() {
                        var t = this._peekContext();
                        t && null == t._promiseCreated && (t._promiseCreated = this);
                    };
                }, e;
            };
        }, {} ],
        7: [ function(e, n, r) {
            n.exports = function(n, r) {
                function i(t, e) {
                    return {
                        promise: e
                    };
                }
                function o() {
                    return !1;
                }
                function a(t, e, n) {
                    var r = this;
                    try {
                        t(e, n, function(t) {
                            if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + N.toString(t));
                            r._attachCancellationCallback(t);
                        });
                    } catch (t) {
                        return t;
                    }
                }
                function s(t) {
                    if (!this._isCancellable()) return this;
                    var e = this._onCancel();
                    void 0 !== e ? N.isArray(e) ? e.push(t) : this._setOnCancel([ e, t ]) : this._setOnCancel(t);
                }
                function c() {
                    return this._onCancelField;
                }
                function l(t) {
                    this._onCancelField = t;
                }
                function u() {
                    this._cancellationParent = void 0, this._onCancelField = void 0;
                }
                function p(t, e) {
                    if (0 != (1 & e)) {
                        this._cancellationParent = t;
                        var n = t._branchesRemainingToCancel;
                        void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1;
                    }
                    0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
                }
                function f() {
                    var t = this._boundTo;
                    return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value() : void 0 : t;
                }
                function h() {
                    this._trace = new O(this._peekContext());
                }
                function _(t, e) {
                    if (B(t)) {
                        var n = this._trace;
                        if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t); else if (!t.__stackCleaned__) {
                            var r = C(t);
                            N.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")), N.notEnumerableProp(t, "__stackCleaned__", !0);
                        }
                    }
                }
                function d(t, e, r) {
                    if (nt.warnings) {
                        var i, o = new L(t);
                        if (e) r._attachExtraTrace(o); else if (nt.longStackTraces && (i = n._peekContext())) i.attachExtraTrace(o); else {
                            var a = C(o);
                            o.stack = a.message + "\n" + a.stack.join("\n");
                        }
                        J("warning", o) || w(o, "", !0);
                    }
                }
                function v(t, e) {
                    for (var n = 0; n < e.length - 1; ++n) e[n].push("From previous event:"), e[n] = e[n].join("\n");
                    return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n");
                }
                function y(t) {
                    for (var e = 0; e < t.length; ++e) (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), 
                    e--);
                }
                function g(t) {
                    for (var e = t[0], n = 1; n < t.length; ++n) {
                        for (var r = t[n], i = e.length - 1, o = e[i], a = -1, s = r.length - 1; s >= 0; --s) if (r[s] === o) {
                            a = s;
                            break;
                        }
                        for (s = a; s >= 0; --s) {
                            var c = r[s];
                            if (e[i] !== c) break;
                            e.pop(), i--;
                        }
                        e = r;
                    }
                }
                function m(t) {
                    for (var e = [], n = 0; n < t.length; ++n) {
                        var r = t[n], i = "    (No stack trace)" === r || D.test(r), o = i && Z(r);
                        i && !o && (Q && " " !== r.charAt(0) && (r = "    " + r), e.push(r));
                    }
                    return e;
                }
                function b(t) {
                    for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
                        var r = e[n];
                        if ("    (No stack trace)" === r || D.test(r)) break;
                    }
                    return n > 0 && (e = e.slice(n)), e;
                }
                function C(t) {
                    var e = t.stack, n = t.toString();
                    return e = "string" == typeof e && e.length > 0 ? b(t) : [ "    (No stack trace)" ], 
                    {
                        message: n,
                        stack: m(e)
                    };
                }
                function w(e, n, r) {
                    if ("undefined" != typeof console) {
                        var i;
                        if (N.isObject(e)) {
                            var o = e.stack;
                            i = n + V(o, e);
                        } else i = n + String(e);
                        "function" == typeof R ? R(i, r) : ("function" == typeof console.log || "object" == t(console.log)) && console.log(i);
                    }
                }
                function k(t, e, n, r) {
                    var i = !1;
                    try {
                        "function" == typeof e && (i = !0, "rejectionHandled" === t ? e(r) : e(n, r));
                    } catch (t) {
                        A.throwLater(t);
                    }
                    "unhandledRejection" === t ? J(t, n, r) || i || w(n, "Unhandled rejection ") : J(t, r);
                }
                function E(t) {
                    var e;
                    if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]"; else {
                        if (e = t && "function" == typeof t.toString ? t.toString() : N.toString(t), /\[object [a-zA-Z0-9$_]+\]/.test(e)) try {
                            e = JSON.stringify(t);
                        } catch (t) {}
                        0 === e.length && (e = "(empty array)");
                    }
                    return "(<" + j(e) + ">, no stack trace)";
                }
                function j(t) {
                    return t.length < 41 ? t : t.substr(0, 38) + "...";
                }
                function F() {
                    return "function" == typeof et;
                }
                function T(t) {
                    var e = t.match(tt);
                    return e ? {
                        fileName: e[1],
                        line: parseInt(e[2], 10)
                    } : void 0;
                }
                function O(t) {
                    this._parent = t, this._promisesCreated = 0;
                    var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                    et(this, O), e > 32 && this.uncycle();
                }
                var S, P, R, x = n._getDomain, A = n._async, L = e("./errors").Warning, N = e("./util"), B = N.canAttachTrace, U = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, I = /\((?:timers\.js):\d+:\d+\)/, H = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, D = null, V = null, Q = !1, q = !(0 == N.env("BLUEBIRD_DEBUG") || !N.env("BLUEBIRD_DEBUG") && "development" !== N.env("NODE_ENV")), G = !(0 == N.env("BLUEBIRD_WARNINGS") || !q && !N.env("BLUEBIRD_WARNINGS")), M = !(0 == N.env("BLUEBIRD_LONG_STACK_TRACES") || !q && !N.env("BLUEBIRD_LONG_STACK_TRACES")), W = 0 != N.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (G || !!N.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                n.prototype.suppressUnhandledRejections = function() {
                    var t = this._target();
                    t._bitField = -1048577 & t._bitField | 524288;
                }, n.prototype._ensurePossibleRejectionHandled = function() {
                    0 == (524288 & this._bitField) && (this._setRejectionIsUnhandled(), A.invokeLater(this._notifyUnhandledRejection, this, void 0));
                }, n.prototype._notifyUnhandledRejectionIsHandled = function() {
                    k("rejectionHandled", S, void 0, this);
                }, n.prototype._setReturnedNonUndefined = function() {
                    this._bitField = 268435456 | this._bitField;
                }, n.prototype._returnedNonUndefined = function() {
                    return 0 != (268435456 & this._bitField);
                }, n.prototype._notifyUnhandledRejection = function() {
                    if (this._isRejectionUnhandled()) {
                        var t = this._settledValue();
                        this._setUnhandledRejectionIsNotified(), k("unhandledRejection", P, t, this);
                    }
                }, n.prototype._setUnhandledRejectionIsNotified = function() {
                    this._bitField = 262144 | this._bitField;
                }, n.prototype._unsetUnhandledRejectionIsNotified = function() {
                    this._bitField = -262145 & this._bitField;
                }, n.prototype._isUnhandledRejectionNotified = function() {
                    return (262144 & this._bitField) > 0;
                }, n.prototype._setRejectionIsUnhandled = function() {
                    this._bitField = 1048576 | this._bitField;
                }, n.prototype._unsetRejectionIsUnhandled = function() {
                    this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), 
                    this._notifyUnhandledRejectionIsHandled());
                }, n.prototype._isRejectionUnhandled = function() {
                    return (1048576 & this._bitField) > 0;
                }, n.prototype._warn = function(t, e, n) {
                    return d(t, e, n || this);
                }, n.onPossiblyUnhandledRejection = function(t) {
                    var e = x();
                    P = "function" == typeof t ? null === e ? t : N.domainBind(e, t) : void 0;
                }, n.onUnhandledRejectionHandled = function(t) {
                    var e = x();
                    S = "function" == typeof t ? null === e ? t : N.domainBind(e, t) : void 0;
                };
                var $ = function() {};
                n.longStackTraces = function() {
                    if (A.haveItemsQueued() && !nt.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    if (!nt.longStackTraces && F()) {
                        var t = n.prototype._captureStackTrace, e = n.prototype._attachExtraTrace;
                        nt.longStackTraces = !0, $ = function() {
                            if (A.haveItemsQueued() && !nt.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                            n.prototype._captureStackTrace = t, n.prototype._attachExtraTrace = e, r.deactivateLongStackTraces(), 
                            A.enableTrampoline(), nt.longStackTraces = !1;
                        }, n.prototype._captureStackTrace = h, n.prototype._attachExtraTrace = _, r.activateLongStackTraces(), 
                        A.disableTrampolineIfNecessary();
                    }
                }, n.hasLongStackTraces = function() {
                    return nt.longStackTraces && F();
                };
                var z = function() {
                    try {
                        if ("function" == typeof CustomEvent) {
                            t = new CustomEvent("CustomEvent");
                            return N.global.dispatchEvent(t), function(t, e) {
                                var n = new CustomEvent(t.toLowerCase(), {
                                    detail: e,
                                    cancelable: !0
                                });
                                return !N.global.dispatchEvent(n);
                            };
                        }
                        if ("function" == typeof Event) {
                            var t = new Event("CustomEvent");
                            return N.global.dispatchEvent(t), function(t, e) {
                                var n = new Event(t.toLowerCase(), {
                                    cancelable: !0
                                });
                                return n.detail = e, !N.global.dispatchEvent(n);
                            };
                        }
                        return (t = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", !1, !0, {}), 
                        N.global.dispatchEvent(t), function(t, e) {
                            var n = document.createEvent("CustomEvent");
                            return n.initCustomEvent(t.toLowerCase(), !1, !0, e), !N.global.dispatchEvent(n);
                        };
                    } catch (t) {}
                    return function() {
                        return !1;
                    };
                }(), X = N.isNode ? function() {
                    return process.emit.apply(process, arguments);
                } : N.global ? function(t) {
                    var e = "on" + t.toLowerCase(), n = N.global[e];
                    return !!n && (n.apply(N.global, [].slice.call(arguments, 1)), !0);
                } : function() {
                    return !1;
                }, K = {
                    promiseCreated: i,
                    promiseFulfilled: i,
                    promiseRejected: i,
                    promiseResolved: i,
                    promiseCancelled: i,
                    promiseChained: function(t, e, n) {
                        return {
                            promise: e,
                            child: n
                        };
                    },
                    warning: function(t, e) {
                        return {
                            warning: e
                        };
                    },
                    unhandledRejection: function(t, e, n) {
                        return {
                            reason: e,
                            promise: n
                        };
                    },
                    rejectionHandled: i
                }, J = function(t) {
                    var e = !1;
                    try {
                        e = X.apply(null, arguments);
                    } catch (t) {
                        A.throwLater(t), e = !0;
                    }
                    var n = !1;
                    try {
                        n = z(t, K[t].apply(null, arguments));
                    } catch (t) {
                        A.throwLater(t), n = !0;
                    }
                    return n || e;
                };
                n.config = function(t) {
                    if ("longStackTraces" in (t = Object(t)) && (t.longStackTraces ? n.longStackTraces() : !t.longStackTraces && n.hasLongStackTraces() && $()), 
                    "warnings" in t) {
                        var e = t.warnings;
                        nt.warnings = !!e, W = nt.warnings, N.isObject(e) && "wForgottenReturn" in e && (W = !!e.wForgottenReturn);
                    }
                    if ("cancellation" in t && t.cancellation && !nt.cancellation) {
                        if (A.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                        n.prototype._clearCancellationData = u, n.prototype._propagateFrom = p, n.prototype._onCancel = c, 
                        n.prototype._setOnCancel = l, n.prototype._attachCancellationCallback = s, n.prototype._execute = a, 
                        Y = p, nt.cancellation = !0;
                    }
                    "monitoring" in t && (t.monitoring && !nt.monitoring ? (nt.monitoring = !0, n.prototype._fireEvent = J) : !t.monitoring && nt.monitoring && (nt.monitoring = !1, 
                    n.prototype._fireEvent = o));
                }, n.prototype._fireEvent = o, n.prototype._execute = function(t, e, n) {
                    try {
                        t(e, n);
                    } catch (t) {
                        return t;
                    }
                }, n.prototype._onCancel = function() {}, n.prototype._setOnCancel = function(t) {}, 
                n.prototype._attachCancellationCallback = function(t) {}, n.prototype._captureStackTrace = function() {}, 
                n.prototype._attachExtraTrace = function() {}, n.prototype._clearCancellationData = function() {}, 
                n.prototype._propagateFrom = function(t, e) {};
                var Y = function(t, e) {
                    0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
                }, Z = function() {
                    return !1;
                }, tt = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                N.inherits(O, Error), r.CapturedTrace = O, O.prototype.uncycle = function() {
                    var t = this._length;
                    if (!(2 > t)) {
                        for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r) e.push(i), i = i._parent;
                        for (r = (t = this._length = r) - 1; r >= 0; --r) {
                            var o = e[r].stack;
                            void 0 === n[o] && (n[o] = r);
                        }
                        for (r = 0; t > r; ++r) {
                            var a = n[e[r].stack];
                            if (void 0 !== a && a !== r) {
                                a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[r]._parent = void 0, 
                                e[r]._length = 1;
                                var s = r > 0 ? e[r - 1] : this;
                                t - 1 > a ? (s._parent = e[a + 1], s._parent.uncycle(), s._length = s._parent._length + 1) : (s._parent = void 0, 
                                s._length = 1);
                                for (var c = s._length + 1, l = r - 2; l >= 0; --l) e[l]._length = c, c++;
                                return;
                            }
                        }
                    }
                }, O.prototype.attachExtraTrace = function(t) {
                    if (!t.__stackCleaned__) {
                        this.uncycle();
                        for (var e = C(t), n = e.message, r = [ e.stack ], i = this; void 0 !== i; ) r.push(m(i.stack.split("\n"))), 
                        i = i._parent;
                        g(r), y(r), N.notEnumerableProp(t, "stack", v(n, r)), N.notEnumerableProp(t, "__stackCleaned__", !0);
                    }
                };
                var et = function() {
                    var e = /^\s*at\s*/, n = function(t, e) {
                        return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : E(e);
                    };
                    if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                        Error.stackTraceLimit += 6, D = e, V = n;
                        var r = Error.captureStackTrace;
                        return Z = function(t) {
                            return U.test(t);
                        }, function(t, e) {
                            Error.stackTraceLimit += 6, r(t, e), Error.stackTraceLimit -= 6;
                        };
                    }
                    var i = new Error();
                    if ("string" == typeof i.stack && i.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return D = /@/, 
                    V = n, Q = !0, function(t) {
                        t.stack = new Error().stack;
                    };
                    var o;
                    try {
                        throw new Error();
                    } catch (t) {
                        o = "stack" in t;
                    }
                    return "stack" in i || !o || "number" != typeof Error.stackTraceLimit ? (V = function(e, n) {
                        return "string" == typeof e ? e : "object" != (void 0 === n ? "undefined" : t(n)) && "function" != typeof n || void 0 === n.name || void 0 === n.message ? E(n) : n.toString();
                    }, null) : (D = e, V = n, function(t) {
                        Error.stackTraceLimit += 6;
                        try {
                            throw new Error();
                        } catch (e) {
                            t.stack = e.stack;
                        }
                        Error.stackTraceLimit -= 6;
                    });
                }();
                "undefined" != typeof console && void 0 !== console.warn && (R = function(t) {
                    console.warn(t);
                }, N.isNode && process.stderr.isTTY ? R = function(t, e) {
                    var n = e ? "[33m" : "[31m";
                    console.warn(n + t + "[0m\n");
                } : N.isNode || "string" != typeof new Error().stack || (R = function(t, e) {
                    console.warn("%c" + t, e ? "color: darkorange" : "color: red");
                }));
                var nt = {
                    warnings: G,
                    longStackTraces: !1,
                    cancellation: !1,
                    monitoring: !1
                };
                return M && n.longStackTraces(), {
                    longStackTraces: function() {
                        return nt.longStackTraces;
                    },
                    warnings: function() {
                        return nt.warnings;
                    },
                    cancellation: function() {
                        return nt.cancellation;
                    },
                    monitoring: function() {
                        return nt.monitoring;
                    },
                    propagateFromFunction: function() {
                        return Y;
                    },
                    boundValueFunction: function() {
                        return f;
                    },
                    checkForgottenReturns: function(t, e, n, r, i) {
                        if (void 0 === t && null !== e && W) {
                            if (void 0 !== i && i._returnedNonUndefined()) return;
                            if (0 == (65535 & r._bitField)) return;
                            n && (n += " ");
                            var o = "", a = "";
                            if (e._trace) {
                                for (var s = e._trace.stack.split("\n"), c = m(s), l = c.length - 1; l >= 0; --l) {
                                    var u = c[l];
                                    if (!I.test(u)) {
                                        var p = u.match(H);
                                        p && (o = "at " + p[1] + ":" + p[2] + ":" + p[3] + " ");
                                        break;
                                    }
                                }
                                if (c.length > 0) for (var f = c[0], l = 0; l < s.length; ++l) if (s[l] === f) {
                                    l > 0 && (a = "\n" + s[l - 1]);
                                    break;
                                }
                            }
                            var h = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + a;
                            r._warn(h, !0, e);
                        }
                    },
                    setBounds: function(t, e) {
                        if (F()) {
                            for (var n, r, i = t.stack.split("\n"), o = e.stack.split("\n"), a = -1, s = -1, c = 0; c < i.length; ++c) if (l = T(i[c])) {
                                n = l.fileName, a = l.line;
                                break;
                            }
                            for (c = 0; c < o.length; ++c) {
                                var l = T(o[c]);
                                if (l) {
                                    r = l.fileName, s = l.line;
                                    break;
                                }
                            }
                            0 > a || 0 > s || !n || !r || n !== r || a >= s || (Z = function(t) {
                                if (U.test(t)) return !0;
                                var e = T(t);
                                return !!(e && e.fileName === n && a <= e.line && e.line <= s);
                            });
                        }
                    },
                    warn: d,
                    deprecated: function(t, e) {
                        var n = t + " is deprecated and will be removed in a future version.";
                        return e && (n += " Use " + e + " instead."), d(n);
                    },
                    CapturedTrace: O,
                    fireDomEvent: z,
                    fireGlobalEvent: X
                };
            };
        }, {
            "./errors": 9,
            "./util": 21
        } ],
        8: [ function(t, e, n) {
            e.exports = function(t) {
                function e() {
                    return this.value;
                }
                function n() {
                    throw this.reason;
                }
                t.prototype.return = t.prototype.thenReturn = function(n) {
                    return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, {
                        value: n
                    }, void 0);
                }, t.prototype.throw = t.prototype.thenThrow = function(t) {
                    return this._then(n, void 0, void 0, {
                        reason: t
                    }, void 0);
                }, t.prototype.catchThrow = function(t) {
                    if (arguments.length <= 1) return this._then(void 0, n, void 0, {
                        reason: t
                    }, void 0);
                    var e = arguments[1];
                    return this.caught(t, function() {
                        throw e;
                    });
                }, t.prototype.catchReturn = function(n) {
                    if (arguments.length <= 1) return n instanceof t && n.suppressUnhandledRejections(), 
                    this._then(void 0, e, void 0, {
                        value: n
                    }, void 0);
                    var r = arguments[1];
                    r instanceof t && r.suppressUnhandledRejections();
                    return this.caught(n, function() {
                        return r;
                    });
                };
            };
        }, {} ],
        9: [ function(t, e, n) {
            function r(t, e) {
                function n(r) {
                    return this instanceof n ? (p(this, "message", "string" == typeof r ? r : e), p(this, "name", t), 
                    void (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r);
                }
                return u(n, Error), n;
            }
            function i(t) {
                return this instanceof i ? (p(this, "name", "OperationalError"), p(this, "message", t), 
                this.cause = t, this.isOperational = !0, void (t instanceof Error ? (p(this, "message", t.message), 
                p(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(t);
            }
            var o, a, s = t("./es5"), c = s.freeze, l = t("./util"), u = l.inherits, p = l.notEnumerableProp, f = r("Warning", "warning"), h = r("CancellationError", "cancellation error"), _ = r("TimeoutError", "timeout error"), d = r("AggregateError", "aggregate error");
            try {
                o = TypeError, a = RangeError;
            } catch (t) {
                o = r("TypeError", "type error"), a = r("RangeError", "range error");
            }
            for (var v = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), y = 0; y < v.length; ++y) "function" == typeof Array.prototype[v[y]] && (d.prototype[v[y]] = Array.prototype[v[y]]);
            s.defineProperty(d.prototype, "length", {
                value: 0,
                configurable: !1,
                writable: !0,
                enumerable: !0
            }), d.prototype.isOperational = !0;
            var g = 0;
            d.prototype.toString = function() {
                var t = Array(4 * g + 1).join(" "), e = "\n" + t + "AggregateError of:\n";
                g++, t = Array(4 * g + 1).join(" ");
                for (var n = 0; n < this.length; ++n) {
                    for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = t + i[o];
                    e += (r = i.join("\n")) + "\n";
                }
                return g--, e;
            }, u(i, Error);
            var m = Error.__BluebirdErrorTypes__;
            m || (m = c({
                CancellationError: h,
                TimeoutError: _,
                OperationalError: i,
                RejectionError: i,
                AggregateError: d
            }), s.defineProperty(Error, "__BluebirdErrorTypes__", {
                value: m,
                writable: !1,
                enumerable: !1,
                configurable: !1
            })), e.exports = {
                Error: Error,
                TypeError: o,
                RangeError: a,
                CancellationError: m.CancellationError,
                OperationalError: m.OperationalError,
                TimeoutError: m.TimeoutError,
                AggregateError: m.AggregateError,
                Warning: f
            };
        }, {
            "./es5": 10,
            "./util": 21
        } ],
        10: [ function(t, e, n) {
            var r = function() {
                return void 0 === this;
            }();
            if (r) e.exports = {
                freeze: Object.freeze,
                defineProperty: Object.defineProperty,
                getDescriptor: Object.getOwnPropertyDescriptor,
                keys: Object.keys,
                names: Object.getOwnPropertyNames,
                getPrototypeOf: Object.getPrototypeOf,
                isArray: Array.isArray,
                isES5: r,
                propertyIsWritable: function(t, e) {
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    return !(n && !n.writable && !n.set);
                }
            }; else {
                var i = {}.hasOwnProperty, o = {}.toString, a = {}.constructor.prototype, s = function(t) {
                    var e = [];
                    for (var n in t) i.call(t, n) && e.push(n);
                    return e;
                };
                e.exports = {
                    isArray: function(t) {
                        try {
                            return "[object Array]" === o.call(t);
                        } catch (t) {
                            return !1;
                        }
                    },
                    keys: s,
                    names: s,
                    defineProperty: function(t, e, n) {
                        return t[e] = n.value, t;
                    },
                    getDescriptor: function(t, e) {
                        return {
                            value: t[e]
                        };
                    },
                    freeze: function(t) {
                        return t;
                    },
                    getPrototypeOf: function(t) {
                        try {
                            return Object(t).constructor.prototype;
                        } catch (t) {
                            return a;
                        }
                    },
                    isES5: r,
                    propertyIsWritable: function() {
                        return !0;
                    }
                };
            }
        }, {} ],
        11: [ function(t, e, n) {
            e.exports = function(e, n) {
                function r(t, e, n) {
                    this.promise = t, this.type = e, this.handler = n, this.called = !1, this.cancelPromise = null;
                }
                function i(t) {
                    this.finallyHandler = t;
                }
                function o(t, e) {
                    return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), 
                    t.cancelPromise = null, !0);
                }
                function a() {
                    return c.call(this, this.promise._target()._settledValue());
                }
                function s(t) {
                    return o(this, t) ? void 0 : (p.e = t, p);
                }
                function c(t) {
                    var r = this.promise, c = this.handler;
                    if (!this.called) {
                        this.called = !0;
                        var l = this.isFinallyHandler() ? c.call(r._boundValue()) : c.call(r._boundValue(), t);
                        if (void 0 !== l) {
                            r._setReturnedNonUndefined();
                            var f = n(l, r);
                            if (f instanceof e) {
                                if (null != this.cancelPromise) {
                                    if (f._isCancelled()) {
                                        var h = new u("late cancellation observer");
                                        return r._attachExtraTrace(h), p.e = h, p;
                                    }
                                    f.isPending() && f._attachCancellationCallback(new i(this));
                                }
                                return f._then(a, s, void 0, this, void 0);
                            }
                        }
                    }
                    return r.isRejected() ? (o(this), p.e = t, p) : (o(this), t);
                }
                var l = t("./util"), u = e.CancellationError, p = l.errorObj;
                return r.prototype.isFinallyHandler = function() {
                    return 0 === this.type;
                }, i.prototype._resultCancelled = function() {
                    o(this.finallyHandler);
                }, e.prototype._passThrough = function(t, e, n, i) {
                    return "function" != typeof t ? this.then() : this._then(n, i, void 0, new r(this, e, t), void 0);
                }, e.prototype.lastly = e.prototype.finally = function(t) {
                    return this._passThrough(t, 0, c, c);
                }, e.prototype.tap = function(t) {
                    return this._passThrough(t, 1, c);
                }, r;
            };
        }, {
            "./util": 21
        } ],
        12: [ function(t, e, n) {
            e.exports = function(e, n, r, i, o, a) {
                var s = t("./util");
                s.canEvaluate, s.tryCatch, s.errorObj, e.join = function() {
                    var t, e = arguments.length - 1;
                    if (e > 0 && "function" == typeof arguments[e]) {
                        t = arguments[e];
                    }
                    var r = [].slice.call(arguments);
                    t && r.pop();
                    var i = new n(r).promise();
                    return void 0 !== t ? i.spread(t) : i;
                };
            };
        }, {
            "./util": 21
        } ],
        13: [ function(t, e, n) {
            e.exports = function(e, n, r, i, o) {
                var a = t("./util"), s = a.tryCatch;
                e.method = function(t) {
                    if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + a.classString(t));
                    return function() {
                        var r = new e(n);
                        r._captureStackTrace(), r._pushContext();
                        var i = s(t).apply(this, arguments), a = r._popContext();
                        return o.checkForgottenReturns(i, a, "Promise.method", r), r._resolveFromSyncValue(i), 
                        r;
                    };
                }, e.attempt = e.try = function(t) {
                    if ("function" != typeof t) return i("expecting a function but got " + a.classString(t));
                    var r = new e(n);
                    r._captureStackTrace(), r._pushContext();
                    var c;
                    if (arguments.length > 1) {
                        o.deprecated("calling Promise.try with more than 1 argument");
                        var l = arguments[1], u = arguments[2];
                        c = a.isArray(l) ? s(t).apply(u, l) : s(t).call(u, l);
                    } else c = s(t)();
                    var p = r._popContext();
                    return o.checkForgottenReturns(c, p, "Promise.try", r), r._resolveFromSyncValue(c), 
                    r;
                }, e.prototype._resolveFromSyncValue = function(t) {
                    t === a.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0);
                };
            };
        }, {
            "./util": 21
        } ],
        14: [ function(t, e, n) {
            function r(t) {
                return t instanceof Error && c.getPrototypeOf(t) === Error.prototype;
            }
            function i(t) {
                var e;
                if (r(t)) {
                    (e = new s(t)).name = t.name, e.message = t.message, e.stack = t.stack;
                    for (var n = c.keys(t), i = 0; i < n.length; ++i) {
                        var a = n[i];
                        l.test(a) || (e[a] = t[a]);
                    }
                    return e;
                }
                return o.markAsOriginatingFromRejection(t), t;
            }
            var o = t("./util"), a = o.maybeWrapAsError, s = t("./errors").OperationalError, c = t("./es5"), l = /^(?:name|message|stack|cause)$/;
            e.exports = function(t, e) {
                return function(n, r) {
                    if (null !== t) {
                        if (n) {
                            var o = i(a(n));
                            t._attachExtraTrace(o), t._reject(o);
                        } else if (e) {
                            var s = [].slice.call(arguments, 1);
                            t._fulfill(s);
                        } else t._fulfill(r);
                        t = null;
                    }
                };
            };
        }, {
            "./errors": 9,
            "./es5": 10,
            "./util": 21
        } ],
        15: [ function(t, e, n) {
            e.exports = function() {
                function n() {}
                function r(t, e) {
                    if ("function" != typeof e) throw new g("expecting a function but got " + h.classString(e));
                    if (t.constructor !== i) throw new g("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                }
                function i(t) {
                    this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, 
                    this._promise0 = void 0, this._receiver0 = void 0, t !== b && (r(this, t), this._resolveFromExecutor(t)), 
                    this._promiseCreated(), this._fireEvent("promiseCreated", this);
                }
                function o(t) {
                    this.promise._resolveCallback(t);
                }
                function a(t) {
                    this.promise._rejectCallback(t, !1);
                }
                function s(t) {
                    var e = new i(b);
                    e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t;
                }
                var c, l = function() {
                    return new g("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
                }, u = function() {
                    return new i.PromiseInspection(this._target());
                }, p = function(t) {
                    return i.reject(new g(t));
                }, f = {}, h = t("./util");
                c = h.isNode ? function() {
                    var t = process.domain;
                    return void 0 === t && (t = null), t;
                } : function() {
                    return null;
                }, h.notEnumerableProp(i, "_getDomain", c);
                var _ = t("./es5"), d = t("./async"), v = new d();
                _.defineProperty(i, "_async", {
                    value: v
                });
                var y = t("./errors"), g = i.TypeError = y.TypeError;
                i.RangeError = y.RangeError;
                var m = i.CancellationError = y.CancellationError;
                i.TimeoutError = y.TimeoutError, i.OperationalError = y.OperationalError, i.RejectionError = y.OperationalError, 
                i.AggregateError = y.AggregateError;
                var b = function() {}, C = {}, w = {}, k = t("./thenables")(i, b), E = t("./promise_array")(i, b, k, p, n), j = t("./context")(i), F = (j.create, 
                t("./debuggability")(i, j)), T = (F.CapturedTrace, t("./finally")(i, k)), O = t("./catch_filter")(w), S = t("./nodeback"), P = h.errorObj, R = h.tryCatch;
                return i.prototype.toString = function() {
                    return "[object Promise]";
                }, i.prototype.caught = i.prototype.catch = function(t) {
                    var e = arguments.length;
                    if (e > 1) {
                        var n, r = new Array(e - 1), i = 0;
                        for (n = 0; e - 1 > n; ++n) {
                            var o = arguments[n];
                            if (!h.isObject(o)) return p("expecting an object but got A catch statement predicate " + h.classString(o));
                            r[i++] = o;
                        }
                        return r.length = i, t = arguments[n], this.then(void 0, O(r, t, this));
                    }
                    return this.then(void 0, t);
                }, i.prototype.reflect = function() {
                    return this._then(u, u, void 0, this, void 0);
                }, i.prototype.then = function(t, e) {
                    if (F.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                        var n = ".then() only accepts functions but was passed: " + h.classString(t);
                        arguments.length > 1 && (n += ", " + h.classString(e)), this._warn(n);
                    }
                    return this._then(t, e, void 0, void 0, void 0);
                }, i.prototype.done = function(t, e) {
                    this._then(t, e, void 0, void 0, void 0)._setIsFinal();
                }, i.prototype.spread = function(t) {
                    return "function" != typeof t ? p("expecting a function but got " + h.classString(t)) : this.all()._then(t, void 0, void 0, C, void 0);
                }, i.prototype.toJSON = function() {
                    var t = {
                        isFulfilled: !1,
                        isRejected: !1,
                        fulfillmentValue: void 0,
                        rejectionReason: void 0
                    };
                    return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), 
                    t.isRejected = !0), t;
                }, i.prototype.all = function() {
                    return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), 
                    new E(this).promise();
                }, i.prototype.error = function(t) {
                    return this.caught(h.originatesFromRejection, t);
                }, i.getNewLibraryCopy = e.exports, i.is = function(t) {
                    return t instanceof i;
                }, i.fromNode = i.fromCallback = function(t) {
                    var e = new i(b);
                    e._captureStackTrace();
                    var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, r = R(t)(S(e, n));
                    return r === P && e._rejectCallback(r.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), 
                    e;
                }, i.all = function(t) {
                    return new E(t).promise();
                }, i.cast = function(t) {
                    var e = k(t);
                    return e instanceof i || ((e = new i(b))._captureStackTrace(), e._setFulfilled(), 
                    e._rejectionHandler0 = t), e;
                }, i.resolve = i.fulfilled = i.cast, i.reject = i.rejected = function(t) {
                    var e = new i(b);
                    return e._captureStackTrace(), e._rejectCallback(t, !0), e;
                }, i.setScheduler = function(t) {
                    if ("function" != typeof t) throw new g("expecting a function but got " + h.classString(t));
                    return v.setScheduler(t);
                }, i.prototype._then = function(t, e, n, r, o) {
                    var a = void 0 !== o, s = a ? o : new i(b), l = this._target(), u = l._bitField;
                    a || (s._propagateFrom(this, 3), s._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & u) ? this._boundValue() : l === this ? void 0 : this._boundTo), 
                    this._fireEvent("promiseChained", this, s));
                    var p = c();
                    if (0 != (50397184 & u)) {
                        var f, _, d = l._settlePromiseCtx;
                        0 != (33554432 & u) ? (_ = l._rejectionHandler0, f = t) : 0 != (16777216 & u) ? (_ = l._fulfillmentHandler0, 
                        f = e, l._unsetRejectionIsUnhandled()) : (d = l._settlePromiseLateCancellationObserver, 
                        _ = new m("late cancellation observer"), l._attachExtraTrace(_), f = e), v.invoke(d, l, {
                            handler: null === p ? f : "function" == typeof f && h.domainBind(p, f),
                            promise: s,
                            receiver: r,
                            value: _
                        });
                    } else l._addCallbacks(t, e, s, r, p);
                    return s;
                }, i.prototype._length = function() {
                    return 65535 & this._bitField;
                }, i.prototype._isFateSealed = function() {
                    return 0 != (117506048 & this._bitField);
                }, i.prototype._isFollowing = function() {
                    return 67108864 == (67108864 & this._bitField);
                }, i.prototype._setLength = function(t) {
                    this._bitField = -65536 & this._bitField | 65535 & t;
                }, i.prototype._setFulfilled = function() {
                    this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
                }, i.prototype._setRejected = function() {
                    this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
                }, i.prototype._setFollowing = function() {
                    this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
                }, i.prototype._setIsFinal = function() {
                    this._bitField = 4194304 | this._bitField;
                }, i.prototype._isFinal = function() {
                    return (4194304 & this._bitField) > 0;
                }, i.prototype._unsetCancelled = function() {
                    this._bitField = -65537 & this._bitField;
                }, i.prototype._setCancelled = function() {
                    this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
                }, i.prototype._setWillBeCancelled = function() {
                    this._bitField = 8388608 | this._bitField;
                }, i.prototype._setAsyncGuaranteed = function() {
                    v.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
                }, i.prototype._receiverAt = function(t) {
                    var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
                    return e === f ? void 0 : void 0 === e && this._isBound() ? this._boundValue() : e;
                }, i.prototype._promiseAt = function(t) {
                    return this[4 * t - 4 + 2];
                }, i.prototype._fulfillmentHandlerAt = function(t) {
                    return this[4 * t - 4 + 0];
                }, i.prototype._rejectionHandlerAt = function(t) {
                    return this[4 * t - 4 + 1];
                }, i.prototype._boundValue = function() {}, i.prototype._migrateCallback0 = function(t) {
                    var e = (t._bitField, t._fulfillmentHandler0), n = t._rejectionHandler0, r = t._promise0, i = t._receiverAt(0);
                    void 0 === i && (i = f), this._addCallbacks(e, n, r, i, null);
                }, i.prototype._migrateCallbackAt = function(t, e) {
                    var n = t._fulfillmentHandlerAt(e), r = t._rejectionHandlerAt(e), i = t._promiseAt(e), o = t._receiverAt(e);
                    void 0 === o && (o = f), this._addCallbacks(n, r, i, o, null);
                }, i.prototype._addCallbacks = function(t, e, n, r, i) {
                    var o = this._length();
                    if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, 
                    "function" == typeof t && (this._fulfillmentHandler0 = null === i ? t : h.domainBind(i, t)), 
                    "function" == typeof e && (this._rejectionHandler0 = null === i ? e : h.domainBind(i, e)); else {
                        var a = 4 * o - 4;
                        this[a + 2] = n, this[a + 3] = r, "function" == typeof t && (this[a + 0] = null === i ? t : h.domainBind(i, t)), 
                        "function" == typeof e && (this[a + 1] = null === i ? e : h.domainBind(i, e));
                    }
                    return this._setLength(o + 1), o;
                }, i.prototype._proxy = function(t, e) {
                    this._addCallbacks(void 0, void 0, e, t, null);
                }, i.prototype._resolveCallback = function(t, e) {
                    if (0 == (117506048 & this._bitField)) {
                        if (t === this) return this._rejectCallback(l(), !1);
                        var n = k(t, this);
                        if (!(n instanceof i)) return this._fulfill(t);
                        e && this._propagateFrom(n, 2);
                        var r = n._target();
                        if (r === this) return void this._reject(l());
                        var o = r._bitField;
                        if (0 == (50397184 & o)) {
                            var a = this._length();
                            a > 0 && r._migrateCallback0(this);
                            for (var s = 1; a > s; ++s) r._migrateCallbackAt(this, s);
                            this._setFollowing(), this._setLength(0), this._setFollowee(r);
                        } else if (0 != (33554432 & o)) this._fulfill(r._value()); else if (0 != (16777216 & o)) this._reject(r._reason()); else {
                            var c = new m("late cancellation observer");
                            r._attachExtraTrace(c), this._reject(c);
                        }
                    }
                }, i.prototype._rejectCallback = function(t, e, n) {
                    var r = h.ensureErrorObject(t), i = r === t;
                    if (!i && !n && F.warnings()) {
                        var o = "a promise was rejected with a non-error: " + h.classString(t);
                        this._warn(o, !0);
                    }
                    this._attachExtraTrace(r, !!e && i), this._reject(t);
                }, i.prototype._resolveFromExecutor = function(t) {
                    var e = this;
                    this._captureStackTrace(), this._pushContext();
                    var n = !0, r = this._execute(t, function(t) {
                        e._resolveCallback(t);
                    }, function(t) {
                        e._rejectCallback(t, n);
                    });
                    n = !1, this._popContext(), void 0 !== r && e._rejectCallback(r, !0);
                }, i.prototype._settlePromiseFromHandler = function(t, e, n, r) {
                    var i = r._bitField;
                    if (0 == (65536 & i)) {
                        r._pushContext();
                        var o;
                        e === C ? n && "number" == typeof n.length ? o = R(t).apply(this._boundValue(), n) : (o = P, 
                        o.e = new g("cannot .spread() a non-array: " + h.classString(n))) : o = R(t).call(e, n);
                        var a = r._popContext();
                        0 == (65536 & (i = r._bitField)) && (o === w ? r._reject(n) : o === P ? r._rejectCallback(o.e, !1) : (F.checkForgottenReturns(o, a, "", r, this), 
                        r._resolveCallback(o)));
                    }
                }, i.prototype._target = function() {
                    for (var t = this; t._isFollowing(); ) t = t._followee();
                    return t;
                }, i.prototype._followee = function() {
                    return this._rejectionHandler0;
                }, i.prototype._setFollowee = function(t) {
                    this._rejectionHandler0 = t;
                }, i.prototype._settlePromise = function(t, e, r, o) {
                    var a = t instanceof i, s = this._bitField, c = 0 != (134217728 & s);
                    0 != (65536 & s) ? (a && t._invokeInternalOnCancel(), r instanceof T && r.isFinallyHandler() ? (r.cancelPromise = t, 
                    R(e).call(r, o) === P && t._reject(P.e)) : e === u ? t._fulfill(u.call(r)) : r instanceof n ? r._promiseCancelled(t) : a || t instanceof E ? t._cancel() : r.cancel()) : "function" == typeof e ? a ? (c && t._setAsyncGuaranteed(), 
                    this._settlePromiseFromHandler(e, r, o, t)) : e.call(r, o, t) : r instanceof n ? r._isResolved() || (0 != (33554432 & s) ? r._promiseFulfilled(o, t) : r._promiseRejected(o, t)) : a && (c && t._setAsyncGuaranteed(), 
                    0 != (33554432 & s) ? t._fulfill(o) : t._reject(o));
                }, i.prototype._settlePromiseLateCancellationObserver = function(t) {
                    var e = t.handler, n = t.promise, r = t.receiver, o = t.value;
                    "function" == typeof e ? n instanceof i ? this._settlePromiseFromHandler(e, r, o, n) : e.call(r, o, n) : n instanceof i && n._reject(o);
                }, i.prototype._settlePromiseCtx = function(t) {
                    this._settlePromise(t.promise, t.handler, t.receiver, t.value);
                }, i.prototype._settlePromise0 = function(t, e, n) {
                    var r = this._promise0, i = this._receiverAt(0);
                    this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, t, i, e);
                }, i.prototype._clearCallbackDataAtIndex = function(t) {
                    var e = 4 * t - 4;
                    this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0;
                }, i.prototype._fulfill = function(t) {
                    var e = this._bitField;
                    if (!((117506048 & e) >>> 16)) {
                        if (t === this) {
                            var n = l();
                            return this._attachExtraTrace(n), this._reject(n);
                        }
                        this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 != (134217728 & e) ? this._settlePromises() : v.settlePromises(this));
                    }
                }, i.prototype._reject = function(t) {
                    var e = this._bitField;
                    if (!((117506048 & e) >>> 16)) return this._setRejected(), this._fulfillmentHandler0 = t, 
                    this._isFinal() ? v.fatalError(t, h.isNode) : void ((65535 & e) > 0 ? v.settlePromises(this) : this._ensurePossibleRejectionHandled());
                }, i.prototype._fulfillPromises = function(t, e) {
                    for (var n = 1; t > n; n++) {
                        var r = this._fulfillmentHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e);
                    }
                }, i.prototype._rejectPromises = function(t, e) {
                    for (var n = 1; t > n; n++) {
                        var r = this._rejectionHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e);
                    }
                }, i.prototype._settlePromises = function() {
                    var t = this._bitField, e = 65535 & t;
                    if (e > 0) {
                        if (0 != (16842752 & t)) {
                            var n = this._fulfillmentHandler0;
                            this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n);
                        } else {
                            var r = this._rejectionHandler0;
                            this._settlePromise0(this._fulfillmentHandler0, r, t), this._fulfillPromises(e, r);
                        }
                        this._setLength(0);
                    }
                    this._clearCancellationData();
                }, i.prototype._settledValue = function() {
                    var t = this._bitField;
                    return 0 != (33554432 & t) ? this._rejectionHandler0 : 0 != (16777216 & t) ? this._fulfillmentHandler0 : void 0;
                }, i.defer = i.pending = function() {
                    return F.deprecated("Promise.defer", "new Promise"), {
                        promise: new i(b),
                        resolve: o,
                        reject: a
                    };
                }, h.notEnumerableProp(i, "_makeSelfResolutionError", l), t("./method")(i, b, k, p, F), 
                t("./bind")(i, b, k, F), t("./cancel")(i, E, p, F), t("./direct_resolve")(i), t("./synchronous_inspection")(i), 
                t("./join")(i, E, k, b, v, c), i.Promise = i, i.version = "3.4.6", h.toFastProperties(i), 
                h.toFastProperties(i.prototype), s({
                    a: 1
                }), s({
                    b: 2
                }), s({
                    c: 3
                }), s(1), s(function() {}), s(void 0), s(!1), s(new i(b)), F.setBounds(d.firstLineError, h.lastLineError), 
                i;
            };
        }, {
            "./async": 1,
            "./bind": 2,
            "./cancel": 4,
            "./catch_filter": 5,
            "./context": 6,
            "./debuggability": 7,
            "./direct_resolve": 8,
            "./errors": 9,
            "./es5": 10,
            "./finally": 11,
            "./join": 12,
            "./method": 13,
            "./nodeback": 14,
            "./promise_array": 16,
            "./synchronous_inspection": 19,
            "./thenables": 20,
            "./util": 21
        } ],
        16: [ function(t, e, n) {
            e.exports = function(e, n, r, i, o) {
                function a(t) {
                    switch (t) {
                      case -2:
                        return [];

                      case -3:
                        return {};
                    }
                }
                function s(t) {
                    var r = this._promise = new e(n);
                    t instanceof e && r._propagateFrom(t, 3), r._setOnCancel(this), this._values = t, 
                    this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
                }
                var c = t("./util");
                return c.isArray, c.inherits(s, o), s.prototype.length = function() {
                    return this._length;
                }, s.prototype.promise = function() {
                    return this._promise;
                }, s.prototype._init = function t(n, o) {
                    var s = r(this._values, this._promise);
                    if (s instanceof e) {
                        var l = (s = s._target())._bitField;
                        if (this._values = s, 0 == (50397184 & l)) return this._promise._setAsyncGuaranteed(), 
                        s._then(t, this._reject, void 0, this, o);
                        if (0 == (33554432 & l)) return 0 != (16777216 & l) ? this._reject(s._reason()) : this._cancel();
                        s = s._value();
                    }
                    {
                        if (null !== (s = c.asArray(s))) return 0 === s.length ? void (-5 === o ? this._resolveEmptyArray() : this._resolve(a(o))) : void this._iterate(s);
                        var u = i("expecting an array or an iterable object but got " + c.classString(s)).reason();
                        this._promise._rejectCallback(u, !1);
                    }
                }, s.prototype._iterate = function(t) {
                    var n = this.getActualLength(t.length);
                    this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                    for (var i = this._promise, o = !1, a = null, s = 0; n > s; ++s) {
                        var c = r(t[s], i);
                        c instanceof e ? (c = c._target(), a = c._bitField) : a = null, o ? null !== a && c.suppressUnhandledRejections() : null !== a ? 0 == (50397184 & a) ? (c._proxy(this, s), 
                        this._values[s] = c) : o = 0 != (33554432 & a) ? this._promiseFulfilled(c._value(), s) : 0 != (16777216 & a) ? this._promiseRejected(c._reason(), s) : this._promiseCancelled(s) : o = this._promiseFulfilled(c, s);
                    }
                    o || i._setAsyncGuaranteed();
                }, s.prototype._isResolved = function() {
                    return null === this._values;
                }, s.prototype._resolve = function(t) {
                    this._values = null, this._promise._fulfill(t);
                }, s.prototype._cancel = function() {
                    !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
                }, s.prototype._reject = function(t) {
                    this._values = null, this._promise._rejectCallback(t, !1);
                }, s.prototype._promiseFulfilled = function(t, e) {
                    return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), 
                    !0);
                }, s.prototype._promiseCancelled = function() {
                    return this._cancel(), !0;
                }, s.prototype._promiseRejected = function(t) {
                    return this._totalResolved++, this._reject(t), !0;
                }, s.prototype._resultCancelled = function() {
                    if (!this._isResolved()) {
                        var t = this._values;
                        if (this._cancel(), t instanceof e) t.cancel(); else for (var n = 0; n < t.length; ++n) t[n] instanceof e && t[n].cancel();
                    }
                }, s.prototype.shouldCopyValues = function() {
                    return !0;
                }, s.prototype.getActualLength = function(t) {
                    return t;
                }, s;
            };
        }, {
            "./util": 21
        } ],
        17: [ function(t, e, n) {
            function r(t, e, n, r, i) {
                for (var o = 0; i > o; ++o) n[o + r] = t[o + e], t[o + e] = void 0;
            }
            function i(t) {
                this._capacity = t, this._length = 0, this._front = 0;
            }
            i.prototype._willBeOverCapacity = function(t) {
                return this._capacity < t;
            }, i.prototype._pushOne = function(t) {
                var e = this.length();
                this._checkCapacity(e + 1), this[this._front + e & this._capacity - 1] = t, this._length = e + 1;
            }, i.prototype._unshiftOne = function(t) {
                var e = this._capacity;
                this._checkCapacity(this.length() + 1);
                var n = (this._front - 1 & e - 1 ^ e) - e;
                this[n] = t, this._front = n, this._length = this.length() + 1;
            }, i.prototype.unshift = function(t, e, n) {
                this._unshiftOne(n), this._unshiftOne(e), this._unshiftOne(t);
            }, i.prototype.push = function(t, e, n) {
                var r = this.length() + 3;
                if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
                var i = this._front + r - 3;
                this._checkCapacity(r);
                var o = this._capacity - 1;
                this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r;
            }, i.prototype.shift = function() {
                var t = this._front, e = this[t];
                return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, 
                e;
            }, i.prototype.length = function() {
                return this._length;
            }, i.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(this._capacity << 1);
            }, i.prototype._resizeTo = function(t) {
                var e = this._capacity;
                this._capacity = t, r(this, 0, this, e, this._front + this._length & e - 1);
            }, e.exports = i;
        }, {} ],
        18: [ function(t, e, n) {
            var r, i = t("./util"), o = i.getNativePromise();
            if (i.isNode && "undefined" == typeof MutationObserver) {
                var a = global.setImmediate, s = process.nextTick;
                r = i.isRecentNode ? function(t) {
                    a.call(global, t);
                } : function(t) {
                    s.call(process, t);
                };
            } else if ("function" == typeof o && "function" == typeof o.resolve) {
                var c = o.resolve();
                r = function(t) {
                    c.then(t);
                };
            } else r = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof setImmediate ? function(t) {
                setImmediate(t);
            } : "undefined" != typeof setTimeout ? function(t) {
                setTimeout(t, 0);
            } : function() {
                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
            } : function() {
                var t = document.createElement("div"), e = {
                    attributes: !0
                }, n = !1, r = document.createElement("div");
                new MutationObserver(function() {
                    t.classList.toggle("foo"), n = !1;
                }).observe(r, e);
                var i = function() {
                    n || (n = !0, r.classList.toggle("foo"));
                };
                return function(n) {
                    var r = new MutationObserver(function() {
                        r.disconnect(), n();
                    });
                    r.observe(t, e), i();
                };
            }();
            e.exports = r;
        }, {
            "./util": 21
        } ],
        19: [ function(t, e, n) {
            e.exports = function(t) {
                function e(t) {
                    void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, 
                    this._settledValueField = void 0);
                }
                e.prototype._settledValue = function() {
                    return this._settledValueField;
                };
                var n = e.prototype.value = function() {
                    if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                    return this._settledValue();
                }, r = e.prototype.error = e.prototype.reason = function() {
                    if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                    return this._settledValue();
                }, i = e.prototype.isFulfilled = function() {
                    return 0 != (33554432 & this._bitField);
                }, o = e.prototype.isRejected = function() {
                    return 0 != (16777216 & this._bitField);
                }, a = e.prototype.isPending = function() {
                    return 0 == (50397184 & this._bitField);
                }, s = e.prototype.isResolved = function() {
                    return 0 != (50331648 & this._bitField);
                };
                e.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._bitField);
                }, t.prototype.__isCancelled = function() {
                    return 65536 == (65536 & this._bitField);
                }, t.prototype._isCancelled = function() {
                    return this._target().__isCancelled();
                }, t.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._target()._bitField);
                }, t.prototype.isPending = function() {
                    return a.call(this._target());
                }, t.prototype.isRejected = function() {
                    return o.call(this._target());
                }, t.prototype.isFulfilled = function() {
                    return i.call(this._target());
                }, t.prototype.isResolved = function() {
                    return s.call(this._target());
                }, t.prototype.value = function() {
                    return n.call(this._target());
                }, t.prototype.reason = function() {
                    var t = this._target();
                    return t._unsetRejectionIsUnhandled(), r.call(t);
                }, t.prototype._value = function() {
                    return this._settledValue();
                }, t.prototype._reason = function() {
                    return this._unsetRejectionIsUnhandled(), this._settledValue();
                }, t.PromiseInspection = e;
            };
        }, {} ],
        20: [ function(t, e, n) {
            e.exports = function(e, n) {
                function r(t) {
                    return t.then;
                }
                function i(t) {
                    try {
                        return r(t);
                    } catch (t) {
                        return c.e = t, c;
                    }
                }
                function o(t) {
                    try {
                        return u.call(t, "_promise0");
                    } catch (t) {
                        return !1;
                    }
                }
                function a(t, r, i) {
                    var o = new e(n), a = o;
                    i && i._pushContext(), o._captureStackTrace(), i && i._popContext();
                    var l = !0, u = s.tryCatch(r).call(t, function(t) {
                        o && (o._resolveCallback(t), o = null);
                    }, function(t) {
                        o && (o._rejectCallback(t, l, !0), o = null);
                    });
                    return l = !1, o && u === c && (o._rejectCallback(u.e, !0, !0), o = null), a;
                }
                var s = t("./util"), c = s.errorObj, l = s.isObject, u = {}.hasOwnProperty;
                return function(t, r) {
                    if (l(t)) {
                        if (t instanceof e) return t;
                        var s = i(t);
                        if (s === c) return r && r._pushContext(), u = e.reject(s.e), r && r._popContext(), 
                        u;
                        if ("function" == typeof s) {
                            if (o(t)) {
                                var u = new e(n);
                                return t._then(u._fulfill, u._reject, void 0, u, null), u;
                            }
                            return a(t, s, r);
                        }
                    }
                    return t;
                };
            };
        }, {
            "./util": 21
        } ],
        21: [ function(e, n, r) {
            function i() {
                try {
                    var t = p;
                    return p = null, t.apply(this, arguments);
                } catch (t) {
                    return _.e = t, _;
                }
            }
            function o(t) {
                return null == t || !0 === t || !1 === t || "string" == typeof t || "number" == typeof t;
            }
            function a(t, e, n) {
                if (o(t)) return t;
                var r = {
                    value: n,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                };
                return f.defineProperty(t, e, r), t;
            }
            function s(t) {
                try {
                    return t + "";
                } catch (t) {
                    return "[no string representation]";
                }
            }
            function c(e) {
                return null !== e && "object" == (void 0 === e ? "undefined" : t(e)) && "string" == typeof e.message && "string" == typeof e.name;
            }
            function l(t) {
                return c(t) && f.propertyIsWritable(t, "stack");
            }
            function u(t) {
                return {}.toString.call(t);
            }
            var p, f = e("./es5"), h = "undefined" == typeof navigator, _ = {
                e: {}
            }, d = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null, v = function() {
                var t = [ Array.prototype, Object.prototype, Function.prototype ], e = function(e) {
                    for (var n = 0; n < t.length; ++n) if (t[n] === e) return !0;
                    return !1;
                };
                if (f.isES5) {
                    var n = Object.getOwnPropertyNames;
                    return function(t) {
                        for (var r = [], i = Object.create(null); null != t && !e(t); ) {
                            var o;
                            try {
                                o = n(t);
                            } catch (t) {
                                return r;
                            }
                            for (var a = 0; a < o.length; ++a) {
                                var s = o[a];
                                if (!i[s]) {
                                    i[s] = !0;
                                    var c = Object.getOwnPropertyDescriptor(t, s);
                                    null != c && null == c.get && null == c.set && r.push(s);
                                }
                            }
                            t = f.getPrototypeOf(t);
                        }
                        return r;
                    };
                }
                var r = {}.hasOwnProperty;
                return function(n) {
                    if (e(n)) return [];
                    var i = [];
                    t: for (var o in n) if (r.call(n, o)) i.push(o); else {
                        for (var a = 0; a < t.length; ++a) if (r.call(t[a], o)) continue t;
                        i.push(o);
                    }
                    return i;
                };
            }(), y = /this\s*\.\s*\S+\s*=/, g = /^[a-z$_][a-z$_0-9]*$/i, m = "stack" in new Error() ? function(t) {
                return l(t) ? t : new Error(s(t));
            } : function(t) {
                if (l(t)) return t;
                try {
                    throw new Error(s(t));
                } catch (t) {
                    return t;
                }
            }, b = function(t) {
                return f.isArray(t) ? t : null;
            };
            if ("undefined" != typeof Symbol && Symbol.iterator) {
                var C = "function" == typeof Array.from ? function(t) {
                    return Array.from(t);
                } : function(t) {
                    for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done; ) n.push(e.value);
                    return n;
                };
                b = function(t) {
                    return f.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? C(t) : null;
                };
            }
            var w = "undefined" != typeof process && "[object process]" === u(process).toLowerCase(), k = {
                isClass: function(t) {
                    try {
                        if ("function" == typeof t) {
                            var e = f.names(t.prototype), n = f.isES5 && e.length > 1, r = e.length > 0 && !(1 === e.length && "constructor" === e[0]), i = y.test(t + "") && f.names(t).length > 0;
                            if (n || r || i) return !0;
                        }
                        return !1;
                    } catch (t) {
                        return !1;
                    }
                },
                isIdentifier: function(t) {
                    return g.test(t);
                },
                inheritedDataKeys: v,
                getDataPropertyOrDefault: function(t, e, n) {
                    if (!f.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    return null != r ? null == r.get && null == r.set ? r.value : n : void 0;
                },
                thrower: function(t) {
                    throw t;
                },
                isArray: f.isArray,
                asArray: b,
                notEnumerableProp: a,
                isPrimitive: o,
                isObject: function(e) {
                    return "function" == typeof e || "object" == (void 0 === e ? "undefined" : t(e)) && null !== e;
                },
                isError: c,
                canEvaluate: h,
                errorObj: _,
                tryCatch: function(t) {
                    return p = t, i;
                },
                inherits: function(t, e) {
                    function n() {
                        this.constructor = t, this.constructor$ = e;
                        for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n]);
                    }
                    var r = {}.hasOwnProperty;
                    return n.prototype = e.prototype, t.prototype = new n(), t.prototype;
                },
                withAppended: function(t, e) {
                    var n, r = t.length, i = new Array(r + 1);
                    for (n = 0; r > n; ++n) i[n] = t[n];
                    return i[n] = e, i;
                },
                maybeWrapAsError: function(t) {
                    return o(t) ? new Error(s(t)) : t;
                },
                toFastProperties: function(t) {
                    function e() {}
                    e.prototype = t;
                    for (var n = 8; n--; ) new e();
                    return t;
                },
                filledRange: function(t, e, n) {
                    for (var r = new Array(t), i = 0; t > i; ++i) r[i] = e + i + n;
                    return r;
                },
                toString: s,
                canAttachTrace: l,
                ensureErrorObject: m,
                originatesFromRejection: function(t) {
                    return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === t.isOperational);
                },
                markAsOriginatingFromRejection: function(t) {
                    try {
                        a(t, "isOperational", !0);
                    } catch (t) {}
                },
                classString: u,
                copyDescriptors: function(t, e, n) {
                    for (var r = f.names(t), i = 0; i < r.length; ++i) {
                        var o = r[i];
                        if (n(o)) try {
                            f.defineProperty(e, o, f.getDescriptor(t, o));
                        } catch (t) {}
                    }
                },
                hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                isNode: w,
                env: function(t, e) {
                    return w ? process.env[t] : e;
                },
                global: d,
                getNativePromise: function() {
                    if ("function" == typeof Promise) try {
                        var t = new Promise(function() {});
                        if ("[object Promise]" === {}.toString.call(t)) return Promise;
                    } catch (t) {}
                },
                domainBind: function(t, e) {
                    return t.bind(e);
                }
            };
            k.isRecentNode = k.isNode && function() {
                var t = process.versions.node.split(".").map(Number);
                return 0 === t[0] && t[1] > 10 || t[0] > 0;
            }(), k.isNode && k.toFastProperties(process);
            try {
                throw new Error();
            } catch (t) {
                k.lastLineError = t;
            }
            n.exports = k;
        }, {
            "./es5": 10
        } ]
    }, {}, [ 3 ])(3);
}), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);