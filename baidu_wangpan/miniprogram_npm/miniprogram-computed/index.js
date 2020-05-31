var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function(t) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var o = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    var r = {};
    return n.m = t, n.c = r, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(t, r) {
        if (1 & r && (t = n(t)), 8 & r) return t;
        if (4 & r && "object" === (void 0 === t ? "undefined" : e(t)) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & r && "string" != typeof t) for (var i in t) n.d(o, i, function(e) {
            return t[e];
        }.bind(null, i));
        return o;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
}([ function(e, t, n) {
    e.exports = n(1).behavior;
}, function(t, n, r) {
    var o = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
    }, i = r(2)({
        proto: !0
    }), a = r(3), u = r(4), c = r(5), f = [ String, Number, Boolean, Object, Array, null ], d = [ "", 0, !1, null, [], null ], l = function(e, t) {
        var n = e;
        return t.forEach(function(e) {
            n = "object" !== (void 0 === n ? "undefined" : o(n)) || null === n ? void 0 : n[e];
        }), n;
    }, s = function(e, t, n) {
        for (var r = e, i = 0; i < t.length - 1; ) {
            var a = t[i++];
            "number" == typeof a ? r[a] instanceof Array || (r[a] = []) : "object" === o(r[a]) && null !== r[a] || (r[a] = {}), 
            r = r[a];
        }
        r[t[i]] = n;
    }, p = function(e, t) {
        var n = {};
        return Object.keys(e).forEach(function(t) {
            n[t] = e[t];
        }), t && Object.keys(t).forEach(function(e) {
            var r = null, o = t[e], i = f.indexOf(o);
            if (i >= 0) r = d[i]; else if (o.value) r = o.value; else {
                var a = f.indexOf(o.type);
                a >= 0 && (r = d[a]);
            }
            n[e] = r;
        }), n;
    };
    n.behavior = Behavior({
        lifetimes: {
            created: function() {
                this._initComputedWatchInfo();
            }
        },
        definitionFilter: function(e) {
            var t = e.computed || {}, n = e.watch || {}, r = [];
            if (e.methods || (e.methods = {}), e.data || (e.data = {}), e.methods._initComputedWatchInfo) throw new Error("Please do not use this behavior more than once in a single component");
            var f = [];
            e.methods._initComputedWatchInfo = function() {
                var e = this;
                this._computedWatchInfo || (this._computedWatchInfo = {
                    computedRelatedPathValues: {},
                    watchCurVal: {}
                }, f.forEach(function(t) {
                    return t.call(e);
                }));
            };
            var d = [];
            if (Object.keys(t).forEach(function(n) {
                var r = u.parseSingleDataPath(n).path, o = t[n], i = [], a = p(e.data, e.properties), h = o(c.create(a, i));
                s(e.data, r, c.unwrap(h)), f.push(function() {
                    var e = this, t = i.map(function(t) {
                        var n = t.path;
                        return {
                            path: n,
                            value: l(e.data, n)
                        };
                    });
                    this._computedWatchInfo.computedRelatedPathValues[n] = t;
                }), d.push(function() {
                    for (var e, t = this._computedWatchInfo.computedRelatedPathValues[n], r = !1, i = 0; i < t.length; i++) {
                        var a = t[i], u = a.path;
                        if (a.value !== l(this.data, u)) {
                            r = !0;
                            break;
                        }
                    }
                    if (!r) return !1;
                    var f = [], d = o(c.create(this.data, f));
                    return this.setData((e = {}, e[n] = d, e)), this._computedWatchInfo.computedRelatedPathValues[n] = f, 
                    !0;
                });
            }), d.length && r.push({
                fields: "**",
                observer: function() {
                    var e = this;
                    if (this._computedWatchInfo) {
                        var t = void 0;
                        do {
                            t = !1, d.forEach(function(n) {
                                n.call(e) && (t = !0);
                            });
                        } while (t);
                    }
                }
            }), Object.keys(n).forEach(function(e) {
                var t = u.parseMultiDataPaths(e);
                f.push(function() {
                    var n = this, r = t.map(function(e) {
                        var t = e.path, r = e.options, o = l(n.data, t);
                        return r.deepCmp ? i(o) : o;
                    });
                    this._computedWatchInfo.watchCurVal[e] = r;
                }), r.push({
                    fields: e,
                    observer: function() {
                        var r = this;
                        if (this._computedWatchInfo) {
                            var o = this._computedWatchInfo.watchCurVal[e], u = t.map(function(e) {
                                var t = e.path, n = e.options;
                                return {
                                    val: l(r.data, t),
                                    options: n
                                };
                            }), c = u.map(function(e) {
                                var t = e.val;
                                return e.options.deepCmp ? i(t) : t;
                            });
                            this._computedWatchInfo.watchCurVal[e] = c;
                            for (var f = !1, d = 0; d < c.length; d++) if (t[d].options.deepCmp ? !a(o[d], c[d]) : o[d] !== c[d]) {
                                f = !0;
                                break;
                            }
                            f && n[e].apply(this, u.map(function(e) {
                                return e.val;
                            }));
                        }
                    }
                });
            }), "object" !== o(e.observers) && (e.observers = {}), e.observers instanceof Array) {
                var h;
                (h = e.observers).push.apply(h, r);
            } else r.forEach(function(t) {
                e.observers[t.fields] = t.observer;
            });
        }
    });
}, function(e, t) {
    e.exports = require("rfdc");
}, function(e, t) {
    e.exports = require("fast-deep-equal");
}, function(e, t, n) {
    var r = /^\s/, o = function(e, t) {
        throw new Error('Parsing data path "' + e + '" failed at char "' + e[t] + '" (index ' + t + ")");
    }, i = function(e, t) {
        for (var n = t.index; t.index < t.length; ) {
            var r = e[t.index];
            {
                if (!/^[0-9]/.test(r)) break;
                t.index++;
            }
        }
        return n === t.index && o(e, t.index), parseInt(e.slice(n, t.index), 10);
    }, a = function(e, t) {
        var n = t.index, r = e[n];
        if (/^[_a-zA-Z$]/.test(r)) for (t.index++; t.index < t.length; ) {
            var i = e[t.index];
            {
                if (!/^[_a-zA-Z0-9$]/.test(i)) break;
                t.index++;
            }
        } else o(e, t.index);
        return e.slice(n, t.index);
    }, u = function(e, t) {
        for (var n = [ a(e, t) ], r = {
            deepCmp: !1
        }; t.index < t.length; ) {
            var u = e[t.index];
            if ("[" === u) t.index++, n.push(i(e, t)), "]" !== e[t.index] && o(e, t.index), 
            t.index++; else {
                if ("." !== u) break;
                if (t.index++, "*" === e[t.index]) {
                    if (t.index++, "*" === e[t.index]) {
                        t.index++, r.deepCmp = !0;
                        break;
                    }
                    o(e, t.index);
                }
                n.push(a(e, t));
            }
        }
        return {
            path: n,
            options: r
        };
    }, c = function(e, t) {
        for (;r.test(e[t.index]); ) t.index++;
        for (var n = [ u(e, t) ], i = !1; t.index < t.length; ) {
            var a = e[t.index];
            r.test(a) ? t.index++ : "," === a ? (i = !0, t.index++) : i ? (i = !1, n.push(u(e, t))) : o(e, t.index);
        }
        return n;
    }, f = function(e, t) {
        t.index < t.length && o(e, t.index);
    };
    t.parseSingleDataPath = function(e) {
        var t = {
            length: e.length,
            index: 0
        }, n = u(e, t);
        return f(e, t), n;
    }, t.parseMultiDataPaths = function(e) {
        var t = {
            length: e.length,
            index: 0
        }, n = c(e, t);
        return f(e, t), n;
    };
}, function(t, n, r) {
    var o = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
    }, i = function e(t, n, r) {
        if ("object" !== (void 0 === t ? "undefined" : o(t)) || null === t) return t;
        var i = t instanceof Array, a = {};
        Object.keys(t).forEach(function(o) {
            var i = null;
            a[o] = {
                get: function() {
                    if (!i) {
                        var a = r.concat(o);
                        n.push({
                            path: a,
                            value: t[o]
                        }), i = e(t[o], n, a);
                    }
                    return i;
                },
                set: function() {
                    throw new Error("Setting data is not allowed");
                },
                enumerable: !0
            };
        }), i && (a.length = {
            value: t.length,
            enumerable: !1
        }), a.__rawObject__ = {
            get: function() {
                return t;
            },
            set: function() {
                throw new Error("Setting data is not allowed");
            },
            enumerable: !1
        };
        var u = i ? Array.prototype : Object.prototype;
        return Object.create(u, a);
    };
    n.create = function(e, t) {
        return i(e, t, []);
    }, n.unwrap = function(e) {
        return "object" !== (void 0 === e ? "undefined" : o(e)) || null === e || "object" !== o(e.__rawObject__) ? e : e.__rawObject__;
    };
} ]);