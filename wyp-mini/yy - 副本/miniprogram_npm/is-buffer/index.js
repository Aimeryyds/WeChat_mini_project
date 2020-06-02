var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var o = {}, r = function(r, e) {
        if (!o[r]) return require(e);
        if (!o[r].status) {
            var n = {
                exports: {}
            };
            o[r].status = 1, o[r].func(o[r].req, n, n.exports), "object" === t(n.exports) ? (o[r].m.exports.__proto__ = n.exports.__proto__, 
            Object.keys(n.exports).forEach(function(t) {
                o[r].m.exports[t] = n.exports[t];
                var e = Object.getOwnPropertyDescriptor(n.exports, t);
                e && e.configurable && Object.defineProperty(n.exports, t, {
                    set: function(e) {
                        o[r].m.exports[t] = e;
                    },
                    get: function() {
                        return o[r].m.exports[t];
                    }
                });
            }), n.exports.__esModule && Object.defineProperty(o[r].m.exports, "__esModule", {
                value: !0
            })) : o[r].m.exports = n.exports;
        }
        return o[r].m.exports;
    };
    return function(t, r, e) {
        var n = {
            exports: {}
        };
        o[t] = {
            status: 0,
            func: r,
            req: e,
            m: n
        };
    }(1583216923128, function(t, o, r) {
        o.exports = function(t) {
            return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        };
    }, function(t) {
        return r({}[t], t);
    }), r(1583216923128);
}();