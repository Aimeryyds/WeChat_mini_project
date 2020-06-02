var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../@babel/runtime/helpers/defineProperty")), r = e(require("../@babel/runtime/helpers/objectWithoutProperties")), n = e(require("../utils/mlodash")), u = e(require("../utils/logger")), o = require("../store/index"), a = e(require("./wxrequest")), i = e(require("./login")), s = e(require("./url"));

function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}

function c(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2 ? l(Object(n), !0).forEach(function(r) {
            (0, t.default)(e, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

var f, d = !1, h = [], p = new Set([ s.default.getNewsAtype.url ]);

function b(e, t) {
    return e.replace(/(\/)<([^\/<>]*)>(\/?)/g, function(e, r, n, o) {
        if (null !== t[n] && void 0 !== t[n]) {
            var a = t[n];
            return delete t[n], "".concat(r).concat(a).concat(o);
        }
        return u.default.error("参数列表中不存在key=".concat(n, "的参数")), "".concat(r).concat(n).concat(o);
    });
}

function O(e) {
    n.default.isObject(e) || u.default.error("请求参数错误，request第一个参数只支持Object格式");
    var t = e.method, a = e.url, i = e.params, l = e.data, f = (0, r.default)(e, [ "method", "url", "params", "data" ]);
    null != i ? n.default.isObject(i) ? i = c({}, i) : u.default.error("请求参数错误，params只支持Object格式") : i = {}, 
    i.openid = o.userInfo.openid || o.userInfo.uuid, null != l ? n.default.isObject(l) ? l = c({}, o.userInfo.reqParams, {}, l) : u.default.error("请求参数错误，data只支持Object格式") : l = c({}, o.userInfo.reqParams), 
    n.default.isString(a) && s.default[a] && (a = s.default[a]), a || u.default.error("url(".concat(e.url, ")没有注册，请先到network/url.js中注册后再使用")), 
    n.default.isObject(a) && (n.default.isObject(a.params) && (i = Object.assign({}, a.params, i)), 
    n.default.isObject(a.data) && (l = Object.assign({}, a.data, l)), a = a.url);
    var d = c({
        method: t = (t || "post").toUpperCase()
    }, f);
    if ("GET" === t) d.data = Object.assign({}, l, i), d.url = b(a, d.data); else if ("POST" === t) {
        a = b(a, i);
        var h = function(e) {
            return n.default.reduce(e, function(e, t, r) {
                return null != t && "" !== t && "undefined" !== t && "null" !== t && e.push("".concat(r, "=").concat(encodeURIComponent(t))), 
                e;
            }, []).join("&");
        }(i);
        d.url = h ? a + "?" + h : a, d.data = l;
    }
    return d;
}

function g() {
    var e = h.slice();
    h.length = 0, n.default.forEach(e, function(e) {
        f(e.options, e.exts).then(e.resolve).catch(e.reject);
    }), u.default.info("flushReqQueue", e);
}

(f = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = e.url.url;
    if (!d && o.userInfo.initOver || p.has(r)) {
        var n = Promise.resolve();
        return !0 === t.login ? n = (0, i.default)() : !0 === t.auth && (n = o.userInfo.auth()), 
        n.then(function() {
            var t = O(e);
            return (0, a.default)(t);
        }).then(function(t) {
            return -10001 === (t && t.ret) && o.userInfo.hasLogin ? (d = !0, u.default.error("登录态异常：", t), 
            (0, i.default)(!0).then(function() {
                d = !1, g();
                var t = O(e);
                return (0, a.default)(t);
            })) : t;
        });
    }
    return new Promise(function(r, n) {
        h.push({
            resolve: r,
            reject: n,
            options: e,
            exts: t
        });
    });
}).get = function(e, t) {
    var r = {};
    return !0 === this.needLogin && (this.needLogin = !1, r.login = !0), !0 === this.needRefreshCode && (this.needRefreshCode = !1), 
    !0 === this.needAuth && (this.needAuth = !1, r.auth = !0), f({
        url: e,
        params: t,
        method: "GET"
    }, r);
}, f.post = function(e, t, r) {
    var n = {};
    return !0 === this.needLogin && (this.needLogin = !1, n.login = !0), !0 === this.needRefreshCode && (this.needRefreshCode = !1), 
    !0 === this.needAuth && (this.needAuth = !1, n.auth = !0), f({
        url: e,
        data: t,
        params: r,
        method: "POST"
    }, n);
}, f.login = function() {
    return this.needLogin = !0, this;
}, f.auth = function() {
    return this.needAuth = !0, this;
}, exports = module.exports = {
    request: f,
    flushReqQueue: g
};