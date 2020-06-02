var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getExpId = exports.formatABTestExp = exports.getABTestExp = void 0;

var t = e(require("../utils/logger")), r = require("./index"), n = require("../store/index");

function o(e) {
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return a(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t);
        }(e))) {
            var t = 0, r = function() {};
            return {
                s: r,
                n: function() {
                    return t >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[t++]
                    };
                },
                e: function(e) {
                    throw e;
                },
                f: r
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var n, o, i = !0, u = !1;
    return {
        s: function() {
            n = e[Symbol.iterator]();
        },
        n: function() {
            var e = n.next();
            return i = e.done, e;
        },
        e: function(e) {
            u = !0, o = e;
        },
        f: function() {
            try {
                i || null == n.return || n.return();
            } finally {
                if (u) throw o;
            }
        }
    };
}

function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}

var i, u = n.constant.reqStatus || {}, l = u.rejected;

exports.getABTestExp = function() {
    return n.global.abtestExp ? Promise.resolve(n.global.abtestExp) : l === u.pending ? i : (l = u.pending, 
    i = r.request.post(r.URL.abTest).then(function(e) {
        return 0 === e.ret ? e.abtestExp ? (n.global.abtestExp = e.abtestExp, l = u.fullfilled, 
        e.abtestExp) : (t.default.error("getAbTestExp请求结果中数据异常：data = ", e), Promise.reject(e)) : Promise.reject(e);
    }).catch(function(e) {
        return t.default.error("getAbTestExp发生错误：err = ", e), l = u.rejected, n.global.abtestExp;
    }));
};

exports.formatABTestExp = function(e) {
    if (Array.isArray(e) && 0 === e.length || null == e) return {};
    var t, r = {}, n = o(e);
    try {
        for (n.s(); !(t = n.n()).done; ) {
            var a = t.value;
            a.Conf && Object.assign(r, a.Conf);
        }
    } catch (e) {
        n.e(e);
    } finally {
        n.f();
    }
    return r;
};

exports.getExpId = function(e) {
    if (Array.isArray(e) && 0 === e.length || null == e) return "";
    var t, r = [], n = o(e);
    try {
        for (n.s(); !(t = n.n()).done; ) {
            var a = t.value;
            a.Id && r.push(a.Id);
        }
    } catch (e) {
        n.e(e);
    } finally {
        n.f();
    }
    return r.join("|");
};