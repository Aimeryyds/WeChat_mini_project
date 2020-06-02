var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = {};
    return a.default.forEach(e, function(e, n) {
        a.default.has(e, "name") ? a.default.has(t, e.name) ? r.default.error("模块注册失败，模块名称重复: name=".concat(e.name)) : t[e.name] = Object.freeze(new l(e, t)) : r.default.error("模块注册失败(".concat(n, ")，缺失必要字段：name"));
    }), t;
};

var t = e(require("../@babel/runtime/helpers/classCallCheck")), n = e(require("../@babel/runtime/helpers/createClass")), r = e(require("../utils/logger")), a = e(require("../utils/mlodash")), u = Symbol("name"), i = Symbol("watchMap"), c = (Symbol("watchId"), 
Symbol("notify"), Symbol("eventMap"));

function f(e, t, n, r) {
    var u = Object.getOwnPropertyDescriptor(e, t);
    if (!u || !1 !== u.configurable) {
        var i = u && u.get, c = u && u.set;
        Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return i ? i.call(e) : n;
            },
            set: function(t) {
                var u = i ? i.call(e) : n;
                a.default.isShallowEqual(t, u) || i && !c || (c ? c.call(e, t) : n = t, a.default.isFunction(r) && r(u));
            }
        });
    }
}

function o(e) {
    var t = [ "event", "state" ];
    return -1 === t.indexOf(e) || (r.default.error("".concat(t.join(), " 是store对象的保留关键字，请勿声明使用")), 
    !1);
}

var l = function() {
    function e(n, l) {
        var s = this;
        (0, t.default)(this, e);
        var h = (n = n || {}).event || [], d = n.getter || {}, v = n.setter || {}, g = n.method || {}, p = n.state || {};
        this[u] = n.name, Object.defineProperty(this, "_$store", {
            get: function() {
                return l;
            }
        }), this[c] = new Map(), h = a.default.reduce(h, function(e, t) {
            return a.default.isString(t) && (e[t] = t), e;
        }, {}), Object.freeze(h), Object.defineProperty(this, "event", {
            get: function() {
                return h;
            }
        });
        var y = {};
        a.default.forEach(d, function(e, t) {
            y[t] = y[t] || {}, a.default.isFunction(e) && (y[t].get = function() {
                return e.call(s);
            });
        }), a.default.forEach(v, function(e, t) {
            y[t] = y[t] || {}, a.default.isFunction(e) && (y[t].set = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.apply(s, n);
            });
        }), a.default.forEach(y, function(e, t) {
            a.default.has(s, t) ? r.default.error("模块（".concat(s[u], "）中出现重复的字段（key = ").concat(t, "），") + "请检查state, getter, setter, method") : o(t) && Object.defineProperty(s, t, e);
        }), a.default.forEach(g, function(e, t) {
            a.default.has(s, t) ? r.default.error("模块（".concat(s[u], "）中出现重复的字段（key = ").concat(t, "），") + "请检查state, getter, setter, method") : o(t) && a.default.isFunction(e) && Object.defineProperty(s, t, {
                get: function() {
                    var t = this;
                    return function() {
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return e.apply(t, r);
                    };
                }
            });
        }), this.state = {}, a.default.forEach(p, function(e, t) {
            a.default.has(s, t) ? r.default.error("模块（".concat(s[name], "）中出现重复的字段（key = ").concat(t, "），") + "请检查state, getter, setter, method") : o(t) && (f(s, t, e), 
            s.state[t] = t);
        }), this[i] = new Map(), Object.defineProperty(this, "_$request", {
            get: function() {
                return require("../network/request").request;
            }
        }), Object.defineProperty(this, "_$URL", {
            get: function() {
                return require("../network/url");
            }
        });
    }
    return (0, n.default)(e, [ {
        key: "on",
        value: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            this.event[e] && a.default.isFunction(t) && (this[c].has(e) || this[c].set(e, []), 
            this[c].get(e).push({
                func: t,
                ctx: n
            }));
        }
    }, {
        key: "off",
        value: function(e, t) {
            if (this[c].has(e)) if (t) {
                var n = this[c].get(e), r = a.default.findIndex(n, function(e) {
                    return e.func === t;
                });
                -1 !== r && n.splice(r, 1);
            } else this[c].delete(e);
        }
    }, {
        key: "emit",
        value: function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) n[u - 1] = arguments[u];
            if (this.event[e] && this[c].has(e)) {
                var i = this[c].get(e);
                a.default.forEach(i, function(e) {
                    try {
                        e.func.apply(e.ctx, n);
                    } catch (e) {
                        r.default.error(e);
                    }
                });
            }
        }
    }, {
        key: "watch",
        value: function(e, t) {
            var n = this, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (e && a.default.isString(e)) if (a.default.isFunction(t)) {
                var o = a.default.toPath(e), l = o[0], s = this;
                if (o.length > 1 && (l = o.splice(-1), s = a.default.get(this, o), !a.default.isObject(s))) r.default.error("模块（".concat(this[u], "）中state[").concat(o.join("]["), "]不是object类型,") + "，不能被watch"); else if (this[i].has(e)) {
                    var h = this[i].get(e);
                    -1 === a.default.findIndex(h, function(e) {
                        return e.func === t;
                    }) && h.push({
                        func: t,
                        ctx: c
                    });
                } else this[i].set(e, [ {
                    func: t,
                    ctx: c
                } ]), f(s, l, s[l], function(t) {
                    var r = n[i].get(e);
                    a.default.forEach(r, function(e) {
                        e.func.call(e.ctx, s[l], t, n._$store);
                    });
                });
            } else r.default.error("模块（".concat(this[u], "）: watch第二个参数必填且必须是函数")); else r.default.error("模块（".concat(this[u], "）: watch第一个参数必填且必须是有效字符串"));
        }
    }, {
        key: "unWatch",
        value: function(e, t) {
            if (this[i].has(e)) if (t) {
                var n = this[i].get(e), r = a.default.findIndex(n, function(e) {
                    return e.func === t;
                });
                -1 !== r && n.splice(r, 1);
            } else this[i].delete(e);
        }
    } ]), e;
}();