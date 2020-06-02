function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.api = void 0;

var o = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), r = require("./http.js"), i = {
    "Content-Type": "application/x-www-form-urlencoded",
    version: "157",
    channel: "WeChat",
    client: "817"
}, u = function(e) {
    var t = wx.getStorageSync("user");
    t && (e.user_id = t.user_id);
    var n = wx.getStorageSync("union_id");
    n && (e.union_id = n);
    var o = wx.getStorageSync("third_session_key");
    o && (e.third_session_key = o);
}, a = function(a) {
    function c() {
        return e(this, c), t(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
    }
    return n(c, r.Http), o(c, [ {
        key: "likeComment",
        value: function(e) {
            return u(e), this.request("https://wapi.douguo.com/wxapp/comment/like", i, e);
        }
    }, {
        key: "unLikeComment",
        value: function(e) {
            return u(e), this.request("https://wapi.douguo.com/wxapp/comment/unlike", i, e);
        }
    } ]), c;
}();

exports.api = a;