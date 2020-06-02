var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var r = e.url;
    t.default.isString(r) && o.default[r] && (r = o.default[r]);
    t.default.isObject(r) || n.default.error("url(".concat(e.url, ")没有注册，请先到network/url.js中注册后再使用"));
    r = r.url;
    var i = Object.assign(s({}, u.userInfo.reqParams), e.formData), p = s({}, e, {
        formData: i,
        url: r
    });
    if (c) return new Promise(function(e, r) {
        l.push({
            resolve: e,
            reject: r,
            params: p
        });
    });
    return f(p).then(function(e) {
        var r = e && e.ret;
        return -10001 === r && u.userInfo.hasLogin ? (c = !0, n.default.error("登录态异常：", e), 
        (0, a.default)(!0).then(function() {
            var e;
            return c = !1, e = l.slice(), l.length = 0, t.default.forEach(e, function(e) {
                f(e.params).then(e.resolve).catch(e.reject);
            }), n.default.info("flushReqQueue", e), f(p);
        })) : e;
    });
};

var r = e(require("../@babel/runtime/helpers/defineProperty")), t = e(require("../utils/mlodash")), n = e(require("../utils/logger")), u = require("../store/index"), a = e(require("./login")), o = e(require("./url"));

function i(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(n), !0).forEach(function(t) {
            (0, r.default)(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
    }
    return e;
}

var c = !1, l = [];

function f(e) {
    return function(e) {
        return new Promise(function(r, t) {
            wx.uploadFile(s({}, e, {
                success: r,
                fail: t
            }));
        });
    }(e).then(function(e) {
        if (t.default.isString(e.data)) try {
            e.data = JSON.parse(e.data);
        } catch (e) {}
        return 200 === e.statusCode ? e.data : (413 === e.statusCode && (e = {
            ret: !1,
            retmsg: "单张图片不能超过5M"
        }), Promise.reject(e));
    });
}