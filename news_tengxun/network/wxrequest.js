var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    r.default.isObject(e.data) ? e.data = c({}, n.systemInfo.reqParams, {}, e.data) : e.data = c({}, n.systemInfo.reqParams);
    e.data = function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return r.default.reduce(e, function(e, r, a) {
            return null != r && "" !== r && "null" !== r && "undefined" !== r ? e[a] = r : !0 !== t && (e[a] = ""), 
            e;
        }, {});
    }(e.data, t);
    var o = Date.now(), u = Math.random().toString(26).substr(3, 4);
    return new Promise(function(t, r) {
        e.header = Object.assign({
            "content-type": "application/x-www-form-urlencoded"
        }, e.header), i(e.url) && a.default.warn("--\x3ereq(".concat(u, ")[").concat(e.method, "] ").concat(e.url), e.data), 
        wx.request(c({}, e, {
            success: t,
            fail: r
        }));
    }).then(function(t) {
        var n, c = t;
        if (t && r.default.has(t, "data")) {
            if (r.default.has(t.data, "ret")) {
                n = t.data.ret;
                var d = Number(t.data.ret);
                isNaN(d) || (t.data.ret = d);
            } else if (r.default.has(t.data, "code")) {
                n = t.data.code;
                var l = Number(t.data.code);
                isNaN(l) || (t.data.ret = l);
            }
            c = t.data;
        }
        if (i(e.url)) {
            var f = Date.now();
            a.default.warn("<--rep(".concat(u, ")[").concat(e.method, "] ").concat(f - o, " ").concat(e.url, " ret=").concat(n));
        }
        return c;
    }).catch(function(t) {
        var r = Date.now();
        return a.default.error("<--rep(".concat(u, ")[").concat(e.method, "] ").concat(r - o, " ").concat(e.url, " err="), t), 
        Promise.reject(t);
    });
};

var t = e(require("../@babel/runtime/helpers/defineProperty")), r = e(require("../utils/mlodash")), a = e(require("../utils/logger")), n = require("../store/index");

function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, a);
    }
    return r;
}

function c(e) {
    for (var r = 1; r < arguments.length; r++) {
        var a = null != arguments[r] ? arguments[r] : {};
        r % 2 ? o(Object(a), !0).forEach(function(r) {
            (0, t.default)(e, r, a[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
    }
    return e;
}

var u = [ e(require("./url")).default.kvcollect.url ];

function i(e) {
    var t = !0;
    return r.default.forEach(u, function(r) {
        return t = -1 === e.indexOf(r);
    }), t;
}