var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define([ "exports" ], n) : n(e.TuaMp = {});
}(void 0, function(e) {
    var n = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
        return void 0 === e ? "undefined" : t(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
    }, r = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
        };
    }(), a = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }, i = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
    }, u = function(t, e) {
        var n = {};
        for (var r in t) 0 <= e.indexOf(r) || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
    }, c = function(t, e, n) {
        var r, o, a;
        this.triggerEvent(t, (o = (r = e).detail, a = r.currentTarget, i({}, o, a.dataset)), n);
    }, f = /^__.*__$/, l = [ String, Number, Boolean, Object, Array, null ], p = {
        enumerable: !0,
        configurable: !0
    }, s = Object.prototype.toString, d = "__TUA_PATH__", y = "__dep__", v = function(t) {
        return console.warn("[TUA-MP warn]: " + t);
    }, b = function(t) {
        return "function" == typeof t;
    }, h = function(t) {
        return !f.test(t);
    }, m = function(t, e) {
        return "" === t ? e : t + "." + e;
    }, j = function(t, e) {
        Object.keys(t).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }, O = function(t, e) {
        var r, o, a, i = void 0, u = (o = (r = e) && r.toString().match(/^\s*function (\w+)/)) ? o[1] : "";
        if (/(String|Number|Boolean)/.test(u)) {
            var c = void 0 === t ? "undefined" : n(t);
            (i = c === u.toLowerCase()) || "object" !== c || (i = t instanceof e);
        } else "Object" === u ? (a = t, i = "[object Object]" === s.call(a)) : i = "Array" === u ? Array.isArray(t) : t instanceof e;
        return {
            valid: i,
            expectedType: u
        };
    }, w = function(t) {
        var e = t.prop, n = t.name, r = t.value;
        if (null == r) return !0;
        var o, a = [], i = e.type, u = !i;
        return i && (Array.isArray(i) ? i : [ i ]).forEach(function(t) {
            var e = O(r, t), n = e.valid, o = e.expectedType;
            a.push(o), u = n;
        }), u || v('Invalid prop: type check failed for prop "' + n + '". Expected ' + a.join(", ") + ", got " + (o = r, 
        s.call(o).slice(8, -1)) + "."), u;
    }, g = function(t) {
        var e, n = t.name, r = t.type, o = t.value, i = t.propObj;
        return a({}, n, {
            type: r,
            value: o,
            observer: (e = n, function(t) {
                return function(n) {
                    var r = this;
                    Promise.resolve().then(function() {
                        r[e] = n;
                    });
                    var o = w({
                        prop: t,
                        name: e,
                        value: n
                    }), a = t.validator;
                    return a && !a(n) ? (v('Invalid prop: custom validator check failed for prop "' + e + '".'), 
                    !1) : o;
                };
            })(i)
        });
    }, S = function(t) {
        var e = t.__wxWebviewId__, n = t.__wxExparserNodeId__;
        return e + "_" + (void 0 === n ? "wxExparserNodeId" : n);
    }, _ = new (function() {
        function t() {
            r(this, t), this.VM_MAP = Object.create(null), this.newStateByVM = Object.create(null), 
            this.oldStateByVM = Object.create(null);
        }
        return o(t, [ {
            key: "updateState",
            value: function(t) {
                var e = t.vm, n = t.watch, r = t.path, o = t.newVal, u = t.oldVal, c = S(e);
                this.newStateByVM = i({}, this.newStateByVM, a({}, c, i({}, this.newStateByVM[c], a({}, r, o)))), 
                this.oldStateByVM = i({}, this.oldStateByVM, a({}, c, i(a({}, r, u), this.oldStateByVM[c]))), 
                this.VM_MAP[c] || (this.VM_MAP[c] = {
                    vm: e,
                    watch: n
                });
            }
        }, {
            key: "flushState",
            value: function() {
                var t = this;
                Object.keys(this.newStateByVM).filter(function(e) {
                    return t.VM_MAP[e];
                }).forEach(function(e) {
                    var n = t.VM_MAP[e], r = n.vm, o = n.watch, a = t.newStateByVM[e], i = t.oldStateByVM[e];
                    r.setData(a), Object.keys(a).filter(function(t) {
                        return b(o[t]);
                    }).forEach(function(t) {
                        var e = o[t], n = a[t], u = i[t];
                        e.call(r, n, u);
                    });
                }), this.newStateByVM = Object.create(null), this.oldStateByVM = Object.create(null);
            }
        }, {
            key: "deleteVm",
            value: function(t) {
                var e = S(t);
                delete this.VM_MAP[e];
            }
        } ]), t;
    }())(), V = function(t, e) {
        return function(n) {
            var r, o, a, i, u = n.path, c = n.newVal, f = n.oldVal, l = n.isArrDirty, p = void 0 !== l && l;
            _.updateState({
                vm: t,
                watch: e,
                path: u,
                newVal: c,
                oldVal: f
            }), p && (o = (r = {
                obj: t,
                val: c,
                path: u
            }).obj, a = r.path, i = r.val, a.split(".").map(function(t) {
                return t.split(/\[(.*?)\]/).filter(function(t) {
                    return t;
                });
            }).reduce(function(t, e) {
                return t.concat(e);
            }, []).reduce(function(t, e, n, r) {
                if (n !== r.length - 1) return t[e] || (t[e] = /\d/.test(e) ? [] : {}), t[e];
                t[e] = i;
            }, o)), Promise.resolve().then(_.flushState.bind(_));
        };
    }, A = _.deleteVm.bind(_), M = Array.prototype, P = [ "pop", "push", "sort", "shift", "splice", "unshift", "reverse" ], k = function() {
        function t() {
            r(this, t), this.subs = [];
        }
        return o(t, [ {
            key: "addSub",
            value: function(t) {
                -1 < this.subs.indexOf(t) || this.subs.push(t);
            }
        }, {
            key: "notify",
            value: function() {
                this.subs.forEach(function(t) {
                    return t();
                });
            }
        } ]), t;
    }();
    k.targetCb = null;
    var x = function(t) {
        var e = t.obj, r = t.key, o = t.val, a = t.observeDeep, u = t.asyncSetData, c = e[y] || new k();
        Object.defineProperty(e, y, {
            value: c,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, r, i({}, p, {
            get: function() {
                return k.targetCb && (c.addSub(k.targetCb), Array.isArray(o) && (o.forEach(function(t) {
                    t[y] && t[y].addSub(k.targetCb);
                }), o[y] = c)), o;
            },
            set: function(t) {
                if (t !== o) {
                    var i = o, f = e[d] || "", l = m(f, r);
                    (o = a(t, l)) && i && !o[y] && i[y] && "object" === (void 0 === o ? "undefined" : n(o)) && (o[y] = i[y]), 
                    u({
                        path: l,
                        newVal: t,
                        oldVal: i
                    }), c.notify();
                }
            }
        }));
    }, B = function(t) {
        return function e(r) {
            var o, a, i, u, c, f, l, p = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
            if (Array.isArray(r)) {
                var s = r.map(function(t, n) {
                    return !t[y] && r[y] && (t[y] = r[y]), e(t, p + "[" + n + "]");
                });
                return s[d] = p, a = (o = {
                    arr: s,
                    arrayMethods: (c = (u = {
                        observeDeep: e,
                        asyncSetData: t
                    }).observeDeep, f = u.asyncSetData, l = Object.create(M), P.forEach(function(t) {
                        var e = M[t];
                        l[t] = function() {
                            for (var n = this[d], r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                            var i = e.apply(this, o);
                            if ("pop" === t) f({
                                path: n,
                                newVal: this
                            }); else {
                                var u = c(this, n);
                                Object.assign(this, u), f({
                                    path: n,
                                    newVal: u,
                                    isArrDirty: !0
                                });
                            }
                            return i;
                        };
                    }), l)
                }).arr, i = o.arrayMethods, Object.setPrototypeOf ? Object.setPrototypeOf(a, i) : "__proto__" in a ? a.__proto__ = i : j(i, a), 
                a;
            }
            if (null !== r && "object" === (void 0 === r ? "undefined" : n(r))) {
                var v = Object.create(null);
                return r[y] && Object.defineProperty(v, y, {
                    value: r[y],
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(v, d, {
                    enumerable: !1,
                    value: p
                }), Object.keys(r).filter(h).map(function(n) {
                    return {
                        obj: v,
                        key: n,
                        val: e(r[n], m(p, n)),
                        observeDeep: e,
                        asyncSetData: t
                    };
                }).forEach(x), v;
            }
            return r;
        };
    }, E = function(t, e) {
        var n = e(t.data);
        t.$data = n, j(n, t);
    }, C = function(t, e, n) {
        var r = Object.create(null);
        Object.keys(e).forEach(function(o) {
            var a = new k(), u = e[o].bind(t), c = u(), f = !0;
            Object.defineProperty(r, o, i({}, p, {
                get: function() {
                    return k.targetCb && a.addSub(k.targetCb), f ? (k.targetCb = function() {
                        var t = u();
                        n({
                            path: o,
                            newVal: t,
                            oldVal: c
                        }), a.notify();
                    }, k.targetCb.key = o, c = u(), k.targetCb = null, f = !1, c) : c = u();
                },
                set: function() {
                    v("请勿对 computed 属性 " + o + " 赋值，它应该由 data 中的依赖自动计算得到！");
                }
            }));
        }), t.$computed = r, j(r, t), t.setData(r);
    };
    console.log("[TUA-MP]: Version 0.6.3"), e.TuaComp = function(t) {
        var e, n = t.data, r = void 0 === n ? {} : n, o = t.props, a = void 0 === o ? {} : o, f = t.watch, p = void 0 === f ? {} : f, s = t.methods, d = void 0 === s ? {} : s, y = t.computed, v = void 0 === y ? {} : y, h = t.properties, m = void 0 === h ? {} : h, j = u(t, [ "data", "props", "watch", "methods", "computed", "properties" ]), O = b(r) ? r() : r;
        return Component(i({}, j, {
            data: O,
            methods: i({}, d, {
                $emit: c
            }),
            properties: i({}, m, (e = a, Array.isArray(e) ? e.map(function(t) {
                return g({
                    name: t,
                    type: null,
                    propObj: {
                        type: null
                    }
                });
            }).reduce(function(t, e) {
                return i({}, t, e);
            }, {}) : Object.keys(e).map(function(t) {
                var n = e[t];
                return g(-1 !== l.indexOf(n) ? {
                    name: t,
                    type: n,
                    propObj: {
                        type: n
                    }
                } : Array.isArray(n) ? {
                    name: t,
                    type: null,
                    propObj: {
                        type: n
                    }
                } : {
                    name: t,
                    type: n.type || null,
                    value: b(n.default) ? n.default() : n.default,
                    propObj: n
                });
            }).reduce(function(t, e) {
                return i({}, t, e);
            }, {}))),
            attached: function() {
                var t = V(this, p), e = B(t);
                E(this, e), C(this, v, t);
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                j.attached && j.attached.apply(this, r);
            },
            detached: function() {
                A(this);
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                j.detached && j.detached.apply(this, e);
            }
        }));
    }, e.TuaPage = function(t) {
        var e = t.data, n = void 0 === e ? {} : e, r = t.watch, o = void 0 === r ? {} : r, a = t.methods, c = void 0 === a ? {} : a, f = t.computed, l = void 0 === f ? {} : f, p = u(t, [ "data", "watch", "methods", "computed" ]), s = b(n) ? n() : n;
        return Page(i({}, p, c, {
            data: s,
            onLoad: function() {
                var t = V(this, o), e = B(t);
                E(this, e), C(this, l, t);
                for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                p.onLoad && p.onLoad.apply(this, r);
            },
            onUnload: function() {
                A(this);
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                p.onUnload && p.onUnload.apply(this, e);
            }
        }));
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    });
});