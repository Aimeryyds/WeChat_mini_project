function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function r(e, t) {
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

var n = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), o = require("./baseService.js"), i = function(i) {
    function u(r) {
        return e(this, u), t(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, r));
    }
    return r(u, o), n(u, [ {
        key: "fullscreen",
        value: function(e) {
            var t = e.message, r = e.code, n = e.type;
            this.Page.setData({
                error: {
                    visibility: !0,
                    message: t || JSON.stringify(e),
                    code: r,
                    type: n
                }
            });
        }
    } ]), u;
}();

module.exports = i;